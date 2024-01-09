import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';

import {ProfileArrowSvg, StarTwoSvg, SmallMapPin, MinusSvg, BasketSvg, PromocodeAppliedSvg, PlusSvg} from './svg';
import {Button, Header} from '../components';
import {COLORS, FONTS, AndroidSafeArea, dummyData, dishes} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCartAction, GetCartListAction, RemoveFromCartAction} from '../context/actions';
import {getCheckoutMenuList} from '../context/service';

export default function Order() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([{id: -1, image: '', name: '_______________', price: '____', restaurantId: -1}]);

  const {menuCart} = useSelector(state => state.cartState);
  const {shops} = useSelector(state => state.shopState);
  const {user, sessionId} = useSelector(state => state.authState);
  const [shop, setShop] = useState();

  function calculateTotal(subTotal, deleiveryFee, discount) {
    return subTotal + deleiveryFee + discount;
  }

  useEffect(() => {
    shops && shops.length > 0 && setShop(shops.filter(d => Array.from(new Set(menuCart.map(menu => menu.restaurantId))).includes(d.id))[0]);
  }, [shops]);

  useEffect(() => {
    async function fetchData() {
      console.log('response.data', user.id, sessionId );
       await GetCartListAction({customerId: user.id, temporalId: sessionId})(dispatch);
    }
    user.id && sessionId && fetchData();
  }, [user.id, sessionId]);

  useEffect(() => {
    const payload = {
      restaurantIds: Array.from(new Set(menuCart.map(menu => menu.restaurantId))),
      menuIds: menuCart.map(menu => menu.menuId),
    };
    async function fetchData() {
      const res = await getCheckoutMenuList(payload);
      setMenu(res);
    }

    fetchData();
  }, [menuCart]);

  function renderHeader() {
    return (
      <View style={{marginBottom: 20}}>
        {/* <Text style={{marginBottom: 20, ...FONTS.H1}}>My order</Text> */}
        <Header
                // title="My order"
                leftIcon="chevron-left"
                onPress={() => navigation.goBack()}
            />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            paddingBottom: 20,
            borderBottomColor: '#E2E2E2',
          }}>
          <Image
            source={shop ? {uri: shop?.image} : null}
            style={{
              width: 73,
              height: 73,
              borderRadius: 20,
              marginRight: 16,
            }}
          />
          <View style={{flex: 1}}>
            <Text style={{...FONTS.H4}}>{shop?.name}</Text>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                color: COLORS.gray,
                fontSize: 14,
                lineHeight: 14 * 1.4,
                marginBottom: 4,
              }}>
              {'__________'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <StarTwoSvg />
              <Text style={{marginHorizontal: 5}}>5.0 -</Text>
              <SmallMapPin />
              <Text style={{marginHorizontal: 5}}>
                0.2 km - <Text style={{color: COLORS.orange}}>$$</Text>
              </Text>
            </View>
          </View>
          <ProfileArrowSvg />
        </TouchableOpacity>
      </View>
    );
  }

  function renderItem(data) {
    return (
      <Shadow offset={[0, 0]} distance={15} startColor={'rgba(6, 38, 100, 0.04)'} finalColor={'rgba(6, 38, 100, 0.0)'} viewStyle={{width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
            width: '100%',
            height: 81,
            backgroundColor: COLORS.white,
            borderRadius: 20,
          }}>
          <Image
            source={
              data.item.image
                ? {
                    uri: data.item.image,
                  }
                : null
            }
            style={{
              width: 73,
              height: 73,
              borderRadius: 20,
              marginLeft: 4,
            }}
          />
          <View
            style={{
              flex: 1,
              marginTop: 12,
              marginBottom: 10,
              marginHorizontal: 10,
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  ...FONTS.Lato_700Bold,
                  fontSize: 14,
                  color: COLORS.black,
                }}>
                {data.item.menuName}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color: COLORS.gray,
                }}>
                ${data.item.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    RemoveFromCartAction(data.item.menuId, user.id, sessionId)(dispatch);
                  }}
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: COLORS.lightBlue,
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MinusSvg />
                </TouchableOpacity>
                <Text style={{marginHorizontal: 10}}>{menuCart.find(mn => mn.menuId == data.item.menuId)?.quantity ?? 0}</Text>
                <TouchableOpacity
                  onPress={() => {
                    AddToCartAction({
                      customerId: user.id,
                      restaurantId: data.item.restaurantId,
                      menuId: data.item.menuId,
                      quantity: 1,
                      price: data.item.price,
                      temporalId: sessionId,
                    })(dispatch);
                  }}
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: COLORS.lightBlue,
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <PlusSvg />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Shadow>
    );
  }

  function renderHiddenItem(data) {
    return (
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
          justifyContent: 'center',
          backgroundColor: COLORS.carrot,
          height: 81,
          width: 300,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          paddingRight: 15,
        }}
        onPress={() => console.log('Remove Item')}>
        <BasketSvg />
      </TouchableOpacity>
    );
  }

  function renderFooter() {
    return (
      <View style={{marginTop: 10}}>
        <View style={{marginBottom: 42}}>
          <TouchableOpacity style={{marginBottom: 30}}>
            <PromocodeAppliedSvg />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={{...FONTS.H4, lineHeight: 24 * 1.2}}>Subtotal</Text>
            <Text style={{...FONTS.H4, lineHeight: 24 * 1.2}}>${menuCart.reduce((sum, menu) => sum + menu.price * menu.quantity, 0)}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 14,
                color: COLORS.gray,
              }}>
              Discount
            </Text>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 14,
                color: COLORS.gray,
              }}>
              - $0
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 14,
                color: COLORS.gray,
              }}>
              Delivery
            </Text>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 14,
                color: COLORS.orange,
              }}>
              Free
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#E2E2E2',
              marginBottom: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{...FONTS.H2}}>Total</Text>
            <Text style={{...FONTS.H2}}>
              $
              {calculateTotal(
                menuCart.reduce((sum, menu) => sum + menu.price * menu.quantity, 0),
                0,
                0,
              )}
            </Text>
          </View>
        </View>
        <Button title="checkout" onPress={() => navigation.navigate('Checkout')} />
      </View>
    );
  }

  function renderDishes() {
    return (
      <View style={{flex: 1}}>
        <SwipeListView
          data={menuCart}
          keyExtractor={item => `${item.menuId}`}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          rightOpenValue={-75}
          contentContainerStyle={{
            paddingBottom: 40,
            paddingHorizontal: 16,
          }}
          showsVerticalScrollIndicator={false}
          disableRightSwipe={true}
        />
      </View>
    );
  }

  return <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>{renderDishes()}</SafeAreaView>;
}
