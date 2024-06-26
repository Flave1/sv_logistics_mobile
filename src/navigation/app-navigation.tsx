import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  OnBoarding,
  SignIn,
  SignUp,
  ResetPassword,
  PasswordHasBeenReset,
  ForgotPassword,
  VerifyPhoneNumber,
  ConfirmationCode,
  MainLayout,
  RestaurantMenu,
  AllOffers,
  OrderHistory,
  PaymentMethod,
  AddNewCard,
  MyAddress,
  MyPromocodes,
  CheckoutSuccess,
  OrderTracking,
  CheckoutFailed,
  Checkout,
  Filter,
  Order,
  EditProfile,
  DishDescription,
} from '../screens';
import CreateUpdateAdddress from '../screens/authentication/CreateUpdateAddress';
import {connect, useSelector} from 'react-redux';
import {isAuthenticated} from '../context/service';

const Stack = createStackNavigator();

function AuthNavigation() {
  const isLoggedIn = useSelector((state: any) => isAuthenticated(state.authState));
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerShown: false,
        }}
        initialRouteName={'MainLayout'}>
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="DishDescription" component={DishDescription} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CheckoutSuccess" component={CheckoutSuccess} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="CheckoutFailed" component={CheckoutFailed} />
        <Stack.Screen name="OrderTracking" component={OrderTracking} />
        <Stack.Screen name="AllOffers" component={AllOffers} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="AddNewCard" component={AddNewCard} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MyAddress" initialParams={{isAuthenticated: isLoggedIn}} component={MyAddress} />
        <Stack.Screen name="CreateUpdateAdddress" initialParams={{isAuthenticated: isLoggedIn}} component={CreateUpdateAdddress} />
        <Stack.Screen name="MyPromocodes" component={MyPromocodes} />
        <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="MainLayout" component={MainLayout} />
        <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
        <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumber} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="PasswordHasBeenReset" component={PasswordHasBeenReset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const mapStateToProps = (state: any) => {
//   return {
//     isAuthenticated: isAuthenticated(state.authState),
//   };
// };
export default AuthNavigation;
