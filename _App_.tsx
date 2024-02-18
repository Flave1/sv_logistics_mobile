import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {AddToCartAction} from './src/context/actions';
import OnboardNavigation from './src/navigation/onboard-navigation';
// import AppNavigation from './src/navigation/app-navigation';
import AuthNavigation from './src/navigation/app-navigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [screen, setScreen] = useState<any>();
  const {menuCart} = useSelector((state: any) => state.cartState);
  const {onboard} = useSelector((state: any) => state.authState);
  const onboardScreens = <OnboardNavigation />;
  const appScreen = <AuthNavigation />;

  console.log('menuCart', menuCart);
  const dispatch = useDispatch();


  useEffect(() => {
    setScreen(onboardScreens);
  }, [onboard]);
  return <AuthNavigation />
}

export default App;
