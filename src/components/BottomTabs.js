import { View, TouchableOpacity, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { COLORS, FONTS, SIZES, dishes } from "../utils/constants";
import { HomeSvg, PlaceSvg, BagSvg, HeartSvg, ProfileSvg } from "../screens/svg";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

function BottomTabs(){
    const navigation = useNavigation();
    const {menuCart} = useSelector(state => state.cartState);
    const tabs = [
        {
          id: '1',
          screen: 'Home',
          icon: <HomeSvg color={COLORS.gray} />,
        },
        {
          id: '2',
          screen: 'Places',
          icon: <PlaceSvg color={COLORS.gray} />,
        },
        {
          id: '3',
          screen: 'CartIsEmpty',
          icon: (
            <View
              style={{
                width: 76,
                height: 76,
                backgroundColor: COLORS.white,
                top: -30,
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  backgroundColor: COLORS.orange,
                  borderRadius: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1,
                }}>
                <BagSvg />
                <View
                  style={{
                    width: 22,
                    height: 22,
                    backgroundColor: COLORS.white,
                    borderRadius: 11,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    right: 11,
                    bottom: 11,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                    //   color: COLORS.golden,
                      ...FONTS.Lato_900Black,
                      color: COLORS.orange,
                    }}>
                    {menuCart.length}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Lato-Regular',
                  textAlign: 'center',
                  color: COLORS.orange,
                  position: 'absolute',
                  bottom: -15,
                }}>
                    ${menuCart.reduce((sum, menu) => sum + menu.price * menu.quantity, 0)}
              </Text>
            </View>
          ),
        },
        {
          id: '4',
          screen: 'Favorite',
          icon: <HeartSvg color={COLORS.gray} />,
        },
        {
          id: '5',
          screen: 'Profile',
          icon: <ProfileSvg color={COLORS.gray} />,
        },
      ];
    
      

    function renderTabs() {
        return (
          <Shadow offset={[0, 0]} distance={15} startColor={'rgba(6, 38, 100, 0.06)'} finalColor={'rgba(6, 38, 100, 0.0)'}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 22,
                backgroundColor: COLORS.white,
                paddingBottom: 4,
                paddingTop: 2,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                width: SIZES.width,
              }}>
              {tabs.map((item, index) => {
                return (
                    <TouchableOpacity
                    key={index}
                    onPress={() =>
                      item.screen === 'CartIsEmpty' && dishes.length !== 0
                        ? navigation.navigate('Order')
                        : navigation.navigate('MainLayout', {
                            screen: item.screen,
                          })
                    }
                    activeOpacity={0.8}>
                    <View>
                      <View
                        style={{
                          alignSelf: 'center',
                          height: item.screen !== 'CartIsEmpty' ? 24 : 80,
                          width: item.screen !== 'CartIsEmpty' ? 24 : 78,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {item.icon}
                      </View>
                      {item.screen !== 'CartIsEmpty' && (
                        <View style={{alignItems: 'center'}}>
                          <View
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: 2,
                              backgroundColor: COLORS.transparent,
                              marginTop: 4,
                            }}
                          />
                          <Text
                            style={{
                              textAlign: 'center',
                              lineHeight: 16 * 1,
                              fontSize: 12,
                              fontFamily: 'Lato-Regular',
                              color: COLORS.gray,
                            }}>
                            {item.screen}
                          </Text>
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </Shadow>
        );
      }
    return(
        <View>{renderTabs()}</View>
    )
}
export default BottomTabs;