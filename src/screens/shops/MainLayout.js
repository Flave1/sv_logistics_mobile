import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';

import Home from '../Home';
import Places from '../Places';
import CartIsEmpty from '../CartIsEmpty';
import Favorite from '../Favorite';

import {HomeSvg, ProfileSvg, HeartSvg, BagSvg, PlaceSvg} from '../svg';
import {COLORS, SIZES, FONTS} from '../../utils/constants';
import Profile from '../authentication/Profile';
import {useSelector} from 'react-redux';
import {onTabNavigate} from '../../utils/common';
import {TabButton} from '../../components/BottomTabs';
import {isAuthenticated} from '../../context/service';

export default function MainLayout(props) {
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('Home');
  const {menuCart} = useSelector(state => state.cartState);
  const isLoggedIn = useSelector(state => isAuthenticated(state.authState));

  useEffect(() => {
    props?.route?.params?.screen ? setSelectedTab(props?.route?.params?.screen) : setSelectedTab('Home');
  }, [props?.route?.params?.screen]);

  const tabs = [
    {
      id: '1',
      screen: 'Home',
      icon: <HomeSvg color={selectedTab == 'Home' ? COLORS.orange : COLORS.gray} />,
    },
    {
      id: '2',
      screen: 'Places',
      icon: <PlaceSvg color={selectedTab == 'Places' ? COLORS.orange : COLORS.gray} />,
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
                  // color: COLORS.golden,
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
      icon: <HeartSvg color={selectedTab == 'Favorite' ? COLORS.orange : COLORS.gray} />,
    },
    {
      id: '5',
      screen: 'Profile',
      icon: <ProfileSvg color={selectedTab == 'Profile' ? COLORS.orange : COLORS.gray} />,
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {selectedTab === 'Home' && <Home />}
      {selectedTab === 'Places' && <Places />}
      {selectedTab === 'CartIsEmpty' && <CartIsEmpty />}
      {selectedTab === 'Favorite' && <Favorite />}
      {selectedTab === 'Profile' && <Profile isAuthenticated={isLoggedIn} />}
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
                <TabButton item={item} selectedTab={selectedTab} />
              </TouchableOpacity>
            );
          })}
        </View>
      </Shadow>
    </View>
  );
}
