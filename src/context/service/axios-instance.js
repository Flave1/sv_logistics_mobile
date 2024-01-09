import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';
import { Alert } from 'react-native';
const axiosInstance = axios.create({
    baseURL: 'http://3.81.254.132:3200/',
    headers: {
        Authorization: '',
    },
    // timeout: 3000,
    // timeoutErrorMessage:'Request Timed out'
});

axiosInstance.interceptors.response.use((response: any) => response, (error: any) => {

    
    if(error.code === 'ERR_BAD_REQUEST'){
        // console.log("ERR_BAD_REQUEST", error.response?.data['message']);
    }
    if (!error.response) {
        return;
    }
    // if (error.response?.status === 500) {
    //     console.log("Unexpected error occurred");
    // }
    // if (error.response?.status === 401) {
    //     localStorage.removeItem('token');
    // }
    throw error;
});
axiosInstance.interceptors.response.use(async (response: any) => response, (error: any) => {
    if (!error.response) {
        return;
    }

    if (error?.response?.status === 500) {
        console.log('500 error occured', error.response.data)
        return error.response
    }

    if (error?.response?.status === 404) {
        console.log('404 Error Occurred', error.response)
        return error.response
    }
    if (error?.response?.status === 400) {
        Alert.alert('error', error.response.data.message.friendlyMessage);
        console.log('404 Error Occurred', error.response.data.message)
        return error.response
    }
    throw error;
});


axiosInstance.interceptors.request.use(
    async (config: any) => { 
      
        const sessionToken = await AsyncStorage.getItem('token');
        // console.log('sessionToken', sessionToken);
        
        if (sessionToken !== null) {
            config.headers.Authorization = 'Bearer ' + sessionToken
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;