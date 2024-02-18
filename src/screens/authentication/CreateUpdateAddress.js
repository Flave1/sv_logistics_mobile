import {View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Callout, Marker} from 'react-native-maps';
import {Button, InputField} from '../../components';
import {CustomMarkerView, CustomCalloutView} from '../../components/maps';
import {COLORS, SIZES, FONTS, AndroidSafeArea} from '../../utils/constants';
import React, {useEffect, useState} from 'react';

import * as Yup from 'yup';
import {useFormik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {CrossSvg} from '../svg';
import {requestLocationPermission} from '../../../vendor/utility/permission/android';
import ProtectedScreensContainer from '../../components/ProtectedScreensContainer';
import {createAddress, updateAddress} from '../../context/service';

function CreateUpdateAdddress({route}: any) {
  const {selectedAddress} = route.params;
  const navigation = useNavigation();

  const {user} = useSelector((state: any) => state.authState);
  const intialmarker = {
    latitude: 6.646509403924981,
    longitude: 3.338439096300471,
    title: '',
    description: '',
  };
  const [markers, setMarkers] = useState([intialmarker]);

  async function requestForPermission() {
    await requestLocationPermission();
  }

  const [address, setAddress] = useState('');

  useEffect(() => {
    if (Platform.OS == 'android') {
      requestForPermission();
    }
    // Geocoder.init(GOOGLE_API_KEY);
    Geolocation.getCurrentPosition(
      async (info: any) => {
        // const latitude = info.coords.latitude;
        // const longitude = info.coords.longitude;

        // try {
        //   // const response = await Geocoder.from({latitude, longitude});
        //   const address = response.results[0].formatted_address;
        //   console.log('address', address);

        //   setAddress(address);
        // } catch (error) {
        //   console.error('Error getting address:', error);
        // }

        const updatedLocation = {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          title: '',
          description: '',
        };
        setMarkers([updatedLocation]);
      },
      errors => {
        console.log('error getting position', errors);
      },
      {enableHighAccuracy: true},
    );
  }, []);

  function onMarkerDragEnd(values) {
    console.log('drag end values', values);
  }

  const validation = Yup.object().shape({
    label: Yup.string().required('Address title is required '),
    name: Yup.string().required('Address is required'),
  });

  const {handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched} = useFormik({
    initialValues: {
      label: selectedAddress ? selectedAddress.label : '',
      name: selectedAddress ? selectedAddress.name : '',
      latitude: '',
      longitude: '',
      customerId: 0,
      isDefault: false,
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: async values => {
      values.customerId = user.id;
      values.latitude = markers[0].latitude.toString();
      values.longitude = markers[0].longitude.toString();
      if (selectedAddress) {
        const result: any = await updateAddress(selectedAddress.id, values);
        if (result.status !== 200) {
          return;
        }
      } else {
        const result: any = await createAddress(values);
        if (result.status !== 200) {
          return;
        }
        navigation.navigate('MyAddress');
      }
    },
  });
  return (
    <ProtectedScreensContainer>
      <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>
        {/* <GooglePlacesInput /> */}
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: markers[0].latitude,
              longitude: markers[0].longitude,
              latitudeDelta: 1.015,
              longitudeDelta: 1.0121,
            }}>
            {markers.map((marker, index) => (
              <Marker draggable={true} key={index} coordinate={{latitude: marker.latitude, longitude: marker.longitude}} title={marker.title} description={marker.description} onDragEnd={e => onMarkerDragEnd(e.nativeEvent.coordinate)}>
                <CustomMarkerView />
                <Callout style={{width: 200, height: 30}}>
                  <CustomCalloutView />
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
        <View
          style={{
            backgroundColor: COLORS.lightBlue,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            width: SIZES.width,
            bottom: 0,
            paddingHorizontal: 16,
            paddingVertical: 30,
          }}>
          <Text
            style={{
              ...FONTS.H2,
              textTransform: 'capitalize',
              marginBottom: 20,
              color: COLORS.black,
            }}>
            Add new address
          </Text>

          <View style={{marginBottom: 20}}>
            {errors.label && touched.label && <Text style={{color: COLORS.orange}}>{errors.label}</Text>}
            {errors.name && touched.name && <Text style={{color: COLORS.orange}}>{errors.name}</Text>}
          </View>
          <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <InputField
              title="Title"
              placeholder="e.g Home, Office"
              containerStyle={{marginBottom: 20}}
              icon={undefined}
              secureTextEntry={undefined}
              onChange={(e: any) => {
                handleChange('label');
                setFieldValue('label', e.nativeEvent.text);
              }}
              value={values.label}
            />
            <InputField
              title="address"
              placeholder="8000 S Kirkland Ave, Freetown, IL 606"
              containerStyle={{marginBottom: 20}}
              icon={undefined}
              secureTextEntry={undefined}
              value={values.name}
              onChange={(e: any) => {
                handleChange('name');
                setFieldValue('name', e.nativeEvent.text);
              }}
            />
          </KeyboardAvoidingView>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#E2E2E2',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: COLORS.orange,
                  borderRadius: 5,
                }}
              />
            </View>
            <Text
              style={{
                ...FONTS.Lato_400Regular,
                fontSize: 14,
                color: COLORS.gray,
              }}>
              Use current location
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              padding: 16,
            }}
            onPress={() => navigation.navigate('MyAddress')}>
            <CrossSvg />
          </TouchableOpacity>

          <Button title="Create new address" containerStyle={{marginTop: 30}} onPress={handleSubmit} textStyle={undefined} />
        </View>
      </SafeAreaView>
    </ProtectedScreensContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
});

export default CreateUpdateAdddress;
