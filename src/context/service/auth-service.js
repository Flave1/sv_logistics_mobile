import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './axios-instance';

export async function signin(email, password) {
  const postData = {
    email,
    password,
  };
  return await axiosInstance.post(`/authentication/login`, postData);
}

export async function storeUserToken(token) {
  return await AsyncStorage.setItem('token', token);
}

export async function clearUserToken() {
  return await AsyncStorage.removeItem('token');
}

export async function getUserContext() {
  return await axiosInstance.get(`users/me`);
}

export const isAuthenticated = authState => {
  try {
    if (authState?.user) {
      
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const usertTimestamp = Date.parse(authState.user.expireDate) / 1000;
      if (usertTimestamp > currentTimestamp) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeUser = async () => {
  await AsyncStorage.getItem('onboard');
};

export const hasOnboarded = async () => {
  const res = await AsyncStorage.getItem('onboard');
  if (res == 'ONBOARDED') return true;
  return false;
};
