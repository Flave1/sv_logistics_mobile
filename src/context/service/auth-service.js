import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './axios-instance';

export async function signin(email: string, password: string) {
  const postData = {
    email,
    password,
  };
  return await axiosInstance.post(`/authentication/login`, postData);
}

export async function storeUserToken(token: string) {
  return await AsyncStorage.setItem('token', token);
}

export async function clearUserToken() {
    return await AsyncStorage.removeItem('token');
  }

export async function getUserContext() {
  return await axiosInstance.get(`users/me`);
}

export const isAuthenticated = (authState: any) => {
  if (authState.user?.idToken) return true;
  return false;
};
export const removeUser = async () => {
  await AsyncStorage.getItem('onboard');
};

export const hasOnboarded = async () => {
  const res = await AsyncStorage.getItem('onboard');
  if (res == 'ONBOARDED') return true;
  return false;
};
