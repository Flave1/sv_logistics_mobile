import {PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'Location Permission',
      message: 'This app requires access to your location.',
      buttonPositive: 'OK',
    });

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //   console.log('granted');

      return true;
    } else {
      console.log('not granted');
      return false;
    }
  } catch (error) {
    console.error('Error requesting location permission:', error);
  }
};
