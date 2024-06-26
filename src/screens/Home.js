import {View, Text, ImageBackground, TextInput, ScrollView, TouchableOpacity, FlatList, Image, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';

import {COLORS, dummyData, FONTS} from '../utils/constants';
import {MicrophoneSvg, ElementSvg, ProfileArrowSvg, SmallMapPin, FreeDeliverySvg, StarSvg, ViewAllSvg, BurgerSvg, GuacamoleSvg, PizzaSvg, SushiSvg, DoughnutSvg, FreeFromSvg} from './svg';
import {GetPopularShopsAction} from '../context/actions';
import {connect, useDispatch} from 'react-redux';

const categories = [
  {
    id: '1',
    category: 'Burger',
    icon: <BurgerSvg />,
  },
  {
    id: '2',
    category: 'Salads',
    icon: <GuacamoleSvg />,
  },
  {
    id: '3',
    category: 'Pizza',
    icon: <PizzaSvg />,
  },
  {
    id: '4',
    category: 'Sushi',
    icon: <SushiSvg />,
  },
  {
    id: '5',
    category: 'Deserts',
    icon: <DoughnutSvg />,
  },
];

function Home(props) {
  const navigation = useNavigation();
  const [category, setCategory] = useState('Burger');
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      await (
        await GetPopularShopsAction()
      )(dispatch);
    }
    fetchData();
  }, []);

  function renderHeader() {
    return (
      <ImageBackground
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/11/12/19/17/vegetables-landscape-2943500_1280.jpg',
        }} //https://via.placeholder.com/1125x540
        style={{
          height: 180,
          paddingHorizontal: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: COLORS.white,
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <TextInput style={{flex: 1}} placeholder="Search for a dish..." />
          <TouchableOpacity style={{paddingLeft: 15}}>
            <MicrophoneSvg />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  function renderCategories() {
    return (
      <View style={{top: -36}}>
        <FlatList
          data={categories}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{
            paddingLeft: 16,
            paddingBottom: 15,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                marginRight: 10,
              }}>
              <Shadow offset={[0, 0]} distance={10} startColor={'rgba(6, 38, 100, 0.05)'} finalColor={'rgba(6, 38, 100, 0.0)'}>
                <TouchableOpacity
                  style={{
                    width: 73,
                    height: 73,
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setCategory(item.category)}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {item.icon}
                  </View>
                </TouchableOpacity>
              </Shadow>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 8,
                  color: category === item.category ? COLORS.orange : COLORS.gray,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  textTransform: 'capitalize',
                }}>
                {item.category}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }

  function renderHotOffers() {
    return (
      <View style={{top: -25, marginBottom: 5}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginBottom: 8,
          }}>
          <Text style={{...FONTS.H2, lineHeight: 32 * 1.2, color: COLORS.black}}>Hot offers</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllOffers')}>
            <ViewAllSvg />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dummyData}
          horizontal={true}
          contentContainerStyle={{paddingLeft: 16}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <Image
                  source={item.offer}
                  style={{
                    width: 323,
                    height: 160,
                    marginRight: 10,
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }

  function renderPopularRestaurants() {
    return (
      <View style={{paddingHorizontal: 16}}>
        <Text style={{...FONTS.H2, marginBottom: 8, color: COLORS.black}}>Popular Restaurants</Text>
        {props.popularShops &&
          props.popularShops.map((item, index) => {
            return (
              <View key={index}>
                <Shadow offset={[0, 0]} distance={10} startColor={'rgba(6, 38, 100, 0.04)'} finalColor={'rgba(6, 38, 100, 0.0)'}>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      height: 140,
                      backgroundColor: COLORS.white,
                      borderRadius: 20,
                      marginBottom: 8,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      navigation.navigate('RestaurantMenu', {
                        restaurant: {
                          id: item.restaurant.id,
                          name: item.restaurant.name,
                          image: item.image,
                          email: item.restaurant.email,
                          description: item.restaurant.description,
                          phoneNumber: item.restaurant.phoneNumber,
                          address: item.restaurant.address,
                          openingTime: item.restaurant.openingTime,
                          closingTime: item.restaurant.closingTime,
                          freeDeliveryAmount: item.restaurant.freeDeliveryAmount,
                          hasFreeDelivery: item.restaurant.hasFreeDelivery,
                          hasDelivery: item.restaurant.hasDelivery,
                          days: item.days,
                        },
                      });
                    }}>
                    <ImageBackground
                      source={item.image ? {uri: item.image} : dummyData[0].photo_426x420} //photo_426x420
                      style={{width: 142, height: '100%'}}
                      imageStyle={{
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                      }}>
                      <View
                        style={{
                          height: 26,
                          backgroundColor: COLORS.carrot,
                          alignSelf: 'flex-start',
                          paddingHorizontal: 13,
                          borderRadius: 20,
                          right: -10,
                          top: 10,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <StarSvg />
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: 'Lato-Regular',
                            color: COLORS.white,
                            marginLeft: 6,
                          }}>
                          {dummyData[0].rating}
                        </Text>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          right: 0,
                        }}>
                        <ElementSvg />
                      </View>
                    </ImageBackground>
                    <View
                      style={{
                        marginLeft: 20,
                        marginVertical: 20,

                        flex: 1,
                      }}>
                      <Text
                        style={{
                          ...FONTS.H4,
                          textTransform: 'capitalize',
                          lineHeight: 24 * 1.2,
                          color: COLORS.black,
                        }}
                        numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: COLORS.gray,
                          fontFamily: 'Lato-Regular',
                          fontSize: 14,
                          marginBottom: 8,
                        }}>
                        {item.restaurant.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <SmallMapPin />
                        <Text
                          style={{
                            marginLeft: 8,
                            fontFamily: 'Lato-Regular',
                            fontSize: 14,
                            color: COLORS.black,
                            marginBottom: 2,
                          }}>
                          {item.restaurant.address}
                        </Text>
                      </View>
                      {item.restaurant.hasFreeDelivery && <FreeDeliverySvg />}
                      {item.restaurant.hasFreeDelivery === false && item.restaurant.freeDeliveryAmount && (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FreeFromSvg />
                          <Text
                            style={{
                              ...FONTS.Lato_400Regular,
                              fontSize: 14,
                              color: COLORS.black,
                            }}>
                            {' '}
                            ${item.restaurant.freeDeliveryAmount}
                          </Text>
                        </View>
                      )}
                    </View>
                    <View style={{paddingRight: 16}}>
                      <ProfileArrowSvg />
                    </View>
                  </TouchableOpacity>
                </Shadow>
              </View>
            );
          })}
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
        {renderHeader()}
        {renderCategories()}
        {renderHotOffers()}
        {renderPopularRestaurants()}
      </ScrollView>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    popularShops: state.shopState.popularShops,
  };
}
export default connect(mapStateToProps)(Home);
