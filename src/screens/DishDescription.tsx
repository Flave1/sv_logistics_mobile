import React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, FONTS} from '../utils/constants';
import {MinusSvg, ArrowSvg, PlusSvg} from './svg';
import {connect, useDispatch, useSelector} from 'react-redux';
import {AddAction, AddToCartAction, RemoveFromCartAction} from '../context/actions';
import BottomTabs from '../components/BottomTabs';
import {formatNumberWithSeparator} from '../utils/common';

function DishDescription() {
  const {menuCart} = useSelector((state: any) => state.cartState);
  const {user, sessionId} = useSelector((state: any) => state.authState);
  console.log('menuCart', menuCart);

  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const route = useRoute();
  const {dish}: any = route.params;

  function removeFromCart() {
    RemoveFromCartAction(dish.id, user.id, sessionId)(dispatch);
  }

  function addToCart() {
    AddToCartAction({
      customerId: user.id,
      restaurantId: dish.id,
      menuId: dish.id,
      quantity: 1,
      price: dish.price,
      temporalId: sessionId,
    })(dispatch);
  }

  function renderSlider() {
    return (
      <View
        style={{
          width: SIZES.width,
          flex: 1,
        }}>
        <Image
          source={{uri: dish.image}} //'https://via.placeholder.com/375x624'
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  }

  function renderDishInfo() {
    return (
      <View
        style={{
          paddingTop: 23,
          paddingHorizontal: 16,
          paddingBottom: 30,
        }}>
        <Text
          style={{
            ...FONTS.H2,
            marginBottom: 10,
            textTransform: 'capitalize',
            color: COLORS.black,
          }}>
          {dish.name}
        </Text>
        <Text
          style={{
            ...FONTS.Lato_400Regular,
            fontSize: 14,
            color: COLORS.gray,
            lineHeight: 14 * 1.5,
            marginBottom: 10,
          }}>
          {dish.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.Lato_400Regular,
                fontSize: 20,
                color: COLORS.carrot,
              }}>
              {/* {'item.restaurant.country.currencyCode'} */}₦{formatNumberWithSeparator(Number(dish.price))}
              {'  '}
            </Text>
            <Text
              style={{
                ...FONTS.Lato_400Regular,
                fontSize: 14,
                color: COLORS.gray,
              }}>
              {dish.weight ? dish.weight + 'g' : null}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={removeFromCart}
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
            <Text style={{marginHorizontal: 10, color: COLORS.black}}>{menuCart.find((mn: any) => mn.menuId == dish.id)?.quantity ?? 0}</Text>
            <TouchableOpacity
              onPress={addToCart}
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
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 0,
          paddingHorizontal: 16,
          zIndex: 9999,
          height: 42,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 24,
        }}
        // onPress={() => navigation.goBack()}
      >
        <ArrowSvg width={30} />
      </TouchableOpacity>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 42,
          position: 'absolute',
          zIndex: 9,
          width: '100%',
          marginTop: 24,
        }}>
        <Text
          style={{
            fontSize: 18,
            ...FONTS.H3,
            color: COLORS.black,
            textTransform: 'capitalize',
            textAlign: 'center',
          }}>
          {dish.name}
        </Text>
      </View> */}
      {renderSlider()}
      {renderDishInfo()}
      <BottomTabs />
    </View>
  );
}

export default DishDescription;
