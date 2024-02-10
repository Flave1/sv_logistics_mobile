import {View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Header, Button} from '../../components';
import {FONTS, AndroidSafeArea, COLORS} from '../../utils/constants';
import {HomeTwoSvg, BriefcaseSvg, MapPinSvg} from '../svg';
import {getAddresses, setDefaultAddress} from '../../context/service';
import ProtectedScreensContainer from '../../components/ProtectedScreensContainer';

// const address = [
//   {
//     id: '1',
//     location: 'Home',
//     description: '8000 S Kirkland Ave, Chicago, IL 60652',
//     icon: <HomeTwoSvg />,
//   },
//   {
//     id: '2',
//     location: 'Work',
//     icon: <BriefcaseSvg />,
//     description: '6391 Elgin St. Celina, Delaware 10299',
//   },
//   {
//     id: '3',
//     location: 'Other',
//     icon: <MapPinSvg />,
//     description: '3891 Ranchview Dr. Richardson, Califor',
//   },
// ];

export default function MyAddress({route}) {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAddresses();
      setAddresses(response.data);
    }
    fetchData();
  }, []);

  const showDialog = id => {
    Alert.alert(
      'Address',
      'Are you sure you want to set this as default address?',
      [
        {
          text: 'CANCEL',
          onPress: () => {
            ('');
          },
        },
        {
          text: 'YES',
          onPress: async () => {
            const result = await setDefaultAddress(id);
            if (result.status !== 200) {
              return;
            }
            const response = await getAddresses();
            setAddresses(response.data);
          },
        },
      ],
      {cancelable: false},
    );
  };

  function renderHeader() {
    return <Header title="My Address" onPress={() => navigation.goBack()} titleStyle={undefined} />;
  }

  function renderContent() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          flexGrow: 1,
          paddingTop: 24,
        }}>
        <Text
          style={{
            ...FONTS.H4,
            textTransform: 'capitalize',
            marginBottom: 3,
            color: COLORS.black
          }}>
          saved addresses
        </Text>

        {addresses.map((item, index) => {
          return (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                paddingTop: 15,
              }}
              key={index}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 16,
                }}>
                {item.label.includes('Home') ? <HomeTwoSvg /> : item.label.includes('Office') ? <BriefcaseSvg /> : <MapPinSvg />}
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#E2E2E2',
                  width: '100%',
                  flexShrink: 1,
                  paddingBottom: 15,
                }}>
                <Text
                  style={{
                    ...FONTS.Lato_700Bold,
                    fontSize: 16,
                    marginBottom: 4,
                    textTransform: 'capitalize',
                    lineHeight: 16 * 1.2,
                    color: COLORS.black
                  }}>
                  {item.label}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    color: COLORS.gray,
                    paddingRight: 25,
                    lineHeight: 14 * 1.5,
                  }}
                  numberOfLines={1}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateUpdateAdddress', {selectedAddress: item});
                    }}>
                    <Text style={{color: COLORS.orange, ...FONTS.Lato_400Regular}}>Edit</Text>
                  </TouchableOpacity>

                  {!item.isDefault && (
                    <TouchableOpacity
                      onPress={() => {
                        showDialog(item.id);
                      }}>
                      <Text style={{color: COLORS.orange, ...FONTS.Lato_400Regular}}>Set Default</Text>
                    </TouchableOpacity>
                  )}

                  {item.isDefault && (
                    <View
                      style={{
                        borderWidth: 2,
                        borderColor: COLORS.green,
                        width: 13,
                        height: 13,
                        borderRadius: 50,
                        backgroundColor: COLORS.green,
                        alignSelf: 'flex-end',
                      }}></View>
                  )}
                </View>
              </View>
            </View>
          );
        })}
        {<Button title="add new address" containerStyle={{marginTop: 30}} onPress={() => navigation.navigate('CreateUpdateAdddress')} textStyle={undefined} />}
      </ScrollView>
    );
  }

  //   function renderInfoModal() {
  //     return (
  //       <Modal isVisible={showInfoModal} onBackdropPress={() => setShowInfoModal(false)} hideModalContentWhileAnimating={true} backdropTransitionOutTiming={0} style={{margin: 0}}>
  //         <View style={styles.container}>
  //           <MapView
  //             provider={PROVIDER_GOOGLE}
  //             style={styles.map}
  //             region={{
  //               latitude: 6.646509403924981,
  //               longitude: 3.338439096300471,
  //               latitudeDelta: 1.015,
  //               longitudeDelta: 1.0121,
  //             }}>
  //             {markers.map((marker, index) => (
  //               <Marker draggable key={index} coordinate={marker.latlng} title={marker.title} description={marker.description} onDragEnd={e => onMarkerDragEnd(e.nativeEvent.coordinate)}>
  //                 <CustomMarkerView />
  //                 <Callout style={{width: 200, height: 30}}>
  //                   <CustomCalloutView />
  //                 </Callout>
  //               </Marker>
  //             ))}
  //           </MapView>
  //         </View>
  //         <View
  //           style={{
  //             backgroundColor: COLORS.lightBlue,
  //             borderTopLeftRadius: 20,
  //             borderTopRightRadius: 20,
  //             position: 'absolute',
  //             width: SIZES.width,
  //             bottom: 0,
  //             paddingHorizontal: 16,
  //             paddingVertical: 30,
  //           }}>
  //           <Text
  //             style={{
  //               ...FONTS.H2,
  //               textTransform: 'capitalize',
  //               marginBottom: 20,
  //             }}>
  //             Add new address
  //           </Text>
  //           <KeyboardAvoidingView keyboardVerticalOffset={500} behavior="padding" style={{flex: 1}}>
  //             <InputField title="tag" placeholder="e.g Home, Office" containerStyle={{marginBottom: 20}} icon={undefined} secureTextEntry={undefined} onChange={undefined} value={undefined} />
  //           </KeyboardAvoidingView>
  //           <KeyboardAvoidingView keyboardVerticalOffset={500} behavior="padding" style={{flex: 1}}>
  //             {/* <InputField title="address" placeholder="8000 S Kirkland Ave, Chicago, IL 606" containerStyle={{marginBottom: 20}} icon={undefined} secureTextEntry={undefined} onChange={undefined} value={undefined} /> */}
  //            <GooglePlacesInput />
  //           </KeyboardAvoidingView>

  //           <TouchableOpacity
  //             style={{
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //             }}>
  //             <View
  //               style={{
  //                 width: 20,
  //                 height: 20,
  //                 borderRadius: 10,
  //                 borderWidth: 2,
  //                 borderColor: '#E2E2E2',
  //                 justifyContent: 'center',
  //                 alignItems: 'center',
  //                 marginRight: 10,
  //               }}>
  //               <View
  //                 style={{
  //                   width: 10,
  //                   height: 10,
  //                   backgroundColor: COLORS.orange,
  //                   borderRadius: 5,
  //                 }}
  //               />
  //             </View>
  //             <Text
  //               style={{
  //                 ...FONTS.Lato_400Regular,
  //                 fontSize: 14,
  //                 color: COLORS.gray,
  //               }}>
  //               Use current location
  //             </Text>
  //           </TouchableOpacity>
  //           {/* <TouchableOpacity
  //             style={{
  //               position: 'absolute',
  //               right: 0,
  //               top: 0,
  //               padding: 16,
  //             }}
  //             onPress={() => setShowInfoModal(false)}>
  //             <CrossSvg />
  //           </TouchableOpacity> */}
  //         </View>
  //       </Modal>
  //     );
  //   }

  return (
    <ProtectedScreensContainer>
      <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>
        <StatusBar barStyle="black-content" />
        {renderHeader()}
        {renderContent()}
        {/* {renderInfoModal()} */}
      </SafeAreaView>
    </ProtectedScreensContainer>
  );
}
