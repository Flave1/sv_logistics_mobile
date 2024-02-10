import {View, Text, TouchableOpacity, ScrollView, ImageBackground, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import Modal from 'react-native-modal';

import {COLORS, SIZES, dishes, FONTS, dummyData} from '../utils/constants';
import {HomeSvg, ProfileSvg, HeartSvg, BagSvg, PlaceSvg, CroissantSvg, InfoSvg, ArrowTwo, TruckSvg, StarThreeSvg, CrossSvg, PhoneSvg, MapPinTwoSvg, MailSvg, ClockSvg, TruckTwoSvg, FacebookSvg, GoogleSvg, TwitterSvg, PlusSvg} from './svg';
import {AddToCartAction, ClearCartAction, GetRestaurantCategoriesAction, GetRestaurantMenuAction, GetRestaurantMenuByCategoryAction} from '../context/actions';
import {connect, useDispatch, useSelector} from 'react-redux';
import BottomTabs from '../components/BottomTabs';
import {socket} from '../context/service/socket-service';
import {formatNumberWithSeparator} from '../utils/common';

// const categories = [
//   {
//     id: 1,
//     category: 'Most Popular',
//   },
//   {
//     id: 2,
//     category: 'Cakes',
//   },
//   {
//     id: 3,
//     category: 'Ice-cream',
//   },
//   {
//     id: 4,
//     category: 'Pasta',
//   },
//   {
//     id: 5,
//     category: 'Drinks',
//   },
// ];

function RestaurantMenu({shopCategories, shopMenu, user}) {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {restaurant} = route.params;
  const [selectedTab, setSelectedTab] = useState('Home');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [category, setCategory] = useState();
  const [allCategory, setAllCategory] = useState([]);
  const [allMenu, setAllMenu] = useState([]);

  const {menuCart} = useSelector(state => state.cartState);
  const {sessionId} = useSelector(state => state.authState);

  useEffect(() => {
    function fetchData() {
      GetRestaurantCategoriesAction(restaurant.id, setAllCategory)(dispatch);
    }
    restaurant?.id && fetchData();
  }, [restaurant?.id, dispatch]);

  useEffect(() => {
    setCategory(-1);
  }, []);

  const [fetch, setFetch] = useState(null);
  socket.on(`get_restaurant_menu_event_${restaurant.id}`, response => {
    setFetch(response);
  });
  useEffect(() => {
    async function fetchData() {
      if (category) {
        category == -1 && GetRestaurantMenuAction(restaurant.id, setAllMenu)(dispatch);
        category != -1 && GetRestaurantMenuByCategoryAction(category, setAllMenu)(dispatch);
      } else {
        GetRestaurantMenuAction(restaurant.id, setAllMenu)(dispatch);
      }
    }
    restaurant?.id && fetchData();
  }, [fetch, restaurant?.id, category]);

  useEffect(() => {
    const joinRoom = () => {
      if (socket) {
        socket.emit('join_room', {roomName: `get_restaurant_menu_event_${restaurant.id}`});
      }
    };
    joinRoom();
    return () => {
      if (socket) {
        socket.emit('leave_room', {roomName: `get_restaurant_menu_event_${restaurant.id}`}, response => {
          console.log(`left ${response}`);
        });
        socket.off(`get_restaurant_menu_event_${restaurant.id}`);
      }
    };
  }, [socket, restaurant.id]);

  function renderHeader() {
    return (
      <ImageBackground
        style={{
          width: SIZES.width,
          height: 220,
          paddingHorizontal: 16,
          paddingTop: 30,
          justifyContent: 'center',
        }}
        source={restaurant.image ? {uri: restaurant.image} : dummyData[0].offer} //'https://via.placeholder.com/1125x660'
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            overflow: 'hidden',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <TouchableOpacity style={{position: 'absolute', left: 16, top: 34}} onPress={() => navigation.goBack()}>
          <ArrowTwo />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <CroissantSvg />
          <View style={{flex: 1, marginLeft: 16}}>
            <Text
              style={{
                ...FONTS.H2,
                color: COLORS.white,
                textTransform: 'capitalize',
              }}>
              {restaurant.name}
            </Text>
            <Text
              style={{
                ...FONTS.Lato_400Regular,
                fontSize: 14,
                color: COLORS.white,
                textTransform: 'capitalize',
              }}>
              {/* {restaurant.type} */}
              {'Food Restaurant'}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setShowInfoModal(true)}>
            <InfoSvg />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  function renderRestaurantInfo() {
    return (
      <View style={{paddingHorizontal: 16, top: -25}}>
        <Shadow offset={[0, 0]} distance={10} startColor={'rgba(6, 38, 100, 0.05)'} finalColor={'rgba(6, 38, 100, 0.0)'} viewStyle={{width: '100%'}}>
          <View
            style={{
              width: '100%',
              height: 50,
              borderRadius: 25,
              backgroundColor: COLORS.white,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            {restaurant.hasFreeDelivery && (
              <>
                <TruckSvg />
                <View
                  style={{
                    marginLeft: 8,
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      ...FONTS.Lato_400Regular,
                      fontSize: 14,
                      color: COLORS.black,
                    }}>
                    Free delivery from{' '}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.Lato_400Regular,
                      fontSize: 14,
                      color: COLORS.orange,
                    }}>
                    ${restaurant.freeDeliveryAmount}
                  </Text>
                </View>
              </>
            )}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <StarThreeSvg />
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color: COLORS.black,
                  marginLeft: 5,
                }}>
                {/* {restaurant.rating} */}
                {dummyData[0].rating}
              </Text>
            </View>
          </View>
        </Shadow>
      </View>
    );
  }

  function renderCategories() {
    return (
      <View style={{top: -4}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingLeft: 16}}>
          {allCategory.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: category === item.id ? COLORS.carrot : COLORS.lightBlue,
                  marginRight: 8,
                  borderRadius: 50,
                }}
                onPress={() => setCategory(item.id)}>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 7,
                    color: category === item.id ? COLORS.white : COLORS.gray,
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    textTransform: 'capitalize',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  function renderContent() {
    return (
      <View
        style={{
          paddingHorizontal: 28,
          marginTop: 40,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          top: -10,
        }}>
        {allMenu &&
          allMenu.length > 0 &&
          allMenu.map((item, index) => {
            return (
              <Shadow key={item.id} offset={[0, 0]} distance={15} startColor={'rgba(6, 38, 100, 0.03)'} finalColor={'rgba(6, 38, 100, 0.0)'}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DishDescription', {
                      dish: item,
                    })
                  }>
                  <View
                    style={{
                      width: (SIZES.width - 28) * 0.445,
                      height: 196,
                      backgroundColor: COLORS.white,
                      marginBottom: 8,
                      borderRadius: 20,
                      padding: 4,
                      paddingBottom: 15,
                    }}>
                    <Image
                      source={{uri: item.image}} //photo_477x300
                      style={{
                        width: '100%',
                        height: 100,
                        borderRadius: 20,
                        marginBottom: 14,
                      }}
                    />
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: 12,
                      }}>
                      <Text
                        style={{
                          ...FONTS.Lato_700Bold,
                          fontSize: 14,
                          lineHeight: 14 * 1.3,
                          flex: 1,
                          color: COLORS.black,
                        }}
                        numberOfLines={2}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: COLORS.gray,
                          ...FONTS.Lato_400Regular,
                          fontSize: 12,
                        }}>
                        {'item.restaurant.country.currencyCode'}
                        {formatNumberWithSeparator(Number(item.price))}
                      </Text>
                      {menuCart.some(mn => mn.menuId == item.id) == false ? (
                        <TouchableOpacity
                          onPress={() =>
                            AddToCartAction({
                              customerId: user.id,
                              restaurantId: restaurant.id,
                              menuId: item.id,
                              quantity: 1,
                              price: item.price,
                              temporalId: sessionId,
                            })(dispatch)
                          }
                          style={{
                            position: 'absolute',
                            width: 36,
                            height: 36,
                            backgroundColor: COLORS.lightBlue,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            right: -12,
                            bottom: -10,
                          }}>
                          <PlusSvg />
                        </TouchableOpacity>
                      ) : (
                        <View
                          style={{
                            position: 'absolute',
                            width: 36,
                            height: 36,
                            backgroundColor: '#80C0A5',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            right: -12,
                            bottom: -10,
                          }}>
                          <Text
                            style={{
                              color: COLORS.white,
                              ...FONTS.Lato_400Regular,
                            }}>
                            {menuCart.find(mn => mn.menuId == item.id)?.quantity ?? 0}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </Shadow>
            );
          })}
      </View>
    );
  }

  function renderInfoModal() {
    return (
      <Modal isVisible={showInfoModal} onBackdropPress={() => setShowInfoModal(false)} hideModalContentWhileAnimating={true} backdropTransitionOutTiming={0} style={{margin: 0}}>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            width: SIZES.width,
            bottom: 0,
            paddingHorizontal: 16,
            paddingVertical: 30,
          }}>
          <ScrollView>
            <Text
              style={{
                fontSize: 20,
                textTransform: 'capitalize',
                paddingBottom: 10,
                color: COLORS.black,
                ...FONTS.H2,
              }}>
              {restaurant.name}
            </Text>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                lineHeight: 16 * 1.5,
                color: COLORS.gray,
              }}>
              {restaurant.description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <PhoneSvg />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: COLORS.gray,
                }}>
                {restaurant.phoneNumber}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <MapPinTwoSvg />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: COLORS.gray,
                }}>
                {restaurant.address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <MailSvg />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: COLORS.gray,
                }}>
                {restaurant.email}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <ClockSvg />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: COLORS.black,
                  }}>
                  {restaurant.openingTime}
                  {' - '}
                  {restaurant.closingTime}
                </Text>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: COLORS.gray,
                  }}>
                  {restaurant.days}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 30,
              }}>
              <TruckTwoSvg />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: COLORS.black,
                  }}>
                  Free delivery from{' '}
                </Text>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: COLORS.orange,
                  }}>
                  ${restaurant.freeDeliveryFrom}
                </Text>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    color: COLORS.orange,
                  }}>
                  {' '}
                  in order
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 30,
              }}>
              <TouchableOpacity style={{marginHorizontal: 7.5}}>
                <FacebookSvg />
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 7.5}}>
                <TwitterSvg />
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 7.5}}>
                <GoogleSvg />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => ClearCartAction()(dispatch)} style={{marginHorizontal: 7.5}}>
                <GoogleSvg />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              padding: 16,
            }}
            onPress={() => setShowInfoModal(false)}>
            <CrossSvg />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
        {renderHeader()}
        {renderRestaurantInfo()}
        {renderCategories()}
        {renderContent()}
      </ScrollView>

      <BottomTabs />
      {renderInfoModal()}
    </View>
  );
}

function mapStateToProps(state) {
  return {
    shopCategories: state.shopState.shopCategories,
    shopMenu: state.shopState.shopMenu,
    menuCart: state.cartState.menuCart,
    user: state.authState.user,
  };
}

export default connect(mapStateToProps, null)(RestaurantMenu);
