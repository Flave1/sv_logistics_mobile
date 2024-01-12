import React from 'react';
import {Image, Text, View} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export function CustomMarkerView() {
  return <Image width={20} height={30} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/55/BicycleMarkerSymbol.png?20171002161607'}} />;
}

export function CustomCalloutView() {
  return (
    <View style={{flex: 1}}>
      <Text>This is where we are</Text>
    </View>
  );
}

export const GooglePlacesInput = () => {
  return (
    <View style={{zIndex: 1, flex: 0.7, borderWidth: 2, borderColor:'red'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyAFm3-ckYwwKUwiQMiN0tw-Q_zFoRq8CdQ',
          language: 'en',
        }}
        onFail={error => console.log('error', error)}
      />
    </View>
  );
};
