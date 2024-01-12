import React, {useEffect, useState} from 'react';
import AppNavigation from './src/navigation/app-navigation';
import {connect} from 'react-redux';
import OnboardNavigation from './src/navigation/onboard-navigation';

const App = (props: any) => {
  const [screen, setScreen] = useState<any>();
  const onboardScreens = <OnboardNavigation />;
  const appScreen = <AppNavigation />;
  useEffect(() => {
    setScreen(appScreen);
  }, []);

  useEffect(() => {
    if (props.onboard == 'ONBOARDED') setScreen(appScreen);
    else setScreen(onboardScreens);
  }, [props.onboard]);
  return screen;
};

const mapStateToProps = (state: any) => {
  return {
    onboard: state.authState.onboard,
  };
};
export default connect(mapStateToProps)(App);
