import {View, TouchableOpacity, Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {COLORS, FONTS, SIZES, dishes} from '../utils/constants';
import {HomeSvg, PlaceSvg, BagSvg, HeartSvg, ProfileSvg} from '../screens/svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {formatNumberWithSeparator, onTabNavigate} from '../utils/common';

function BottomTabs() {
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
      screen: 'Order',
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
            ₦{formatNumberWithSeparator(Number(menuCart.reduce((sum, menu) => sum + menu.price * menu.quantity, 0)))}
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
              <TouchableOpacity key={index} onPress={() => onTabNavigate(tabs, item.screen, navigation, menuCart.length === 0)} activeOpacity={0.8}>
                <TabButton item={item} selectedTab={'Order'} />
              </TouchableOpacity>
            );
          })}
        </View>
      </Shadow>
    );
  }
  return <View>{renderTabs()}</View>;
}
export default BottomTabs;

export function TabButton({item, selectedTab}) {
  return (
    <View>
      <View
        style={{
          alignSelf: 'center',
          height: 75,
          width: 75, //24
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {item.icon}
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 4,
            height: 2,
            borderRadius: 2,
            backgroundColor: selectedTab == item.screen ? COLORS.orange : COLORS.transparent,
            marginTop: 3,
            // borderWidth: 1,
            // borderColor: 'red'
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            // lineHeight: 25,
            fontSize: 14,
            fontFamily: 'Lato-Regular',
            color: selectedTab == item.screen ? COLORS.orange : COLORS.gray,
            // marginTop: 5
          }}>
          {item.screen}
        </Text>
      </View>
    </View>
  );
}
