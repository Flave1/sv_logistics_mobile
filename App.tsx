import React, {useEffect, useState} from 'react';
import AppNavigation from './src/navigation/app-navigation';
import {connect, useSelector} from 'react-redux';
import OnboardNavigation from './src/navigation/onboard-navigation';

const App = () => {
  const [screen, setScreen] = useState<any>();
  const onboardScreens = <OnboardNavigation />;
  const appScreen = <AppNavigation />;
  const {menuCart} = useSelector((state: any) => state.cartState);
  const {onboard} = useSelector((state: any) => state.authState);

  // console.log('menuCart', menuCart);

  useEffect(() => {
    setScreen(appScreen);
  }, []);

  useEffect(() => {
    if (onboard == 'ONBOARDED') setScreen(appScreen);
    else setScreen(onboardScreens);
  }, [onboard]);
  return <>{screen}</>;
};

export default App;
