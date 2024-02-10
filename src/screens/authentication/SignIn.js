import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useNavigation} from '@react-navigation/native';

import {AndroidSafeArea, COLORS, FONTS, SIZES} from '../../utils/constants';
import {Button, InputField} from '../../components';
import {FacebookSvg, TwitterSvg, GoogleSvg, CheckSvg, EyeOffSvg} from '../svg';
import {connect, useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {LoginAction} from '../../context/actions/auth-actions';

function SignIn(props) {
  // useEffect(() => {
  //   if (props.user) {
  //     navigation.navigate('MainLayout');
  //     return;
  //   }
  // }, [props.user]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validation = Yup.object().shape({
    email: Yup.string().email('Email is invalid').min(2, 'Email Too Short!').max(50, 'Username Too Long!').required('Username is required to login'),
    password: Yup.string().required('Password Required').min(4, 'Password must be a minimum of 4 characters'),
  });

  const {handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched} = useFormik({
    initialValues: {
      email: 'cafayadmin@gmail.com',
      password: 'Password123',
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: async values => {
      await LoginAction(values.email, values.password, navigation)(dispatch);
    },
  });

  function renderContent() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingTop: SIZES.paddingTop,
          paddingBottom: 30,
        }}
        showVerticalScrollIndicator={false}>
        <Text
          style={{
            marginBottom: 54,
            ...FONTS.H1,
            color: COLORS.black,
          }}>
          Sign in
        </Text>
        <InputField
          containerStyle={{marginBottom: 30}}
          title="email"
          placeholder="darlenerobertson@mail.com"
          icon={<CheckSvg />}
          value={values.email}
          onChange={e => {
            handleChange('email');
            setFieldValue('email', e.nativeEvent.text);
          }}
        />
        <InputField
          containerStyle={{marginBottom: 20}}
          title="password"
          placeholder="••••••••"
          secureTextEntry={true}
          icon={
            <TouchableOpacity>
              <EyeOffSvg />
            </TouchableOpacity>
          }
          value={values.password}
          onChange={e => {
            handleChange('password');
            setFieldValue('password', e.nativeEvent.text);
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text
            style={{
              marginBottom: 23,
              textAlign: 'right',
              ...FONTS.bodyText,
              color: COLORS.carrot,
              lineHeight: 16 * 1.5,
            }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <Button
          title="sign in"
          containerStyle={{marginBottom: 20}}
          onPress={handleSubmit} //() => navigation.navigate('MainLayout')
        />
        <Button
          title="create account"
          containerStyle={{
            marginBottom: 20,
            backgroundColor: COLORS.lightBlue,
            marginBottom: SIZES.height * 0.1,
          }}
          textStyle={{color: COLORS.black}}
          onPress={() => navigation.navigate('SignUp')}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <TouchableOpacity style={{marginHorizontal: 7.5}}>
            <FacebookSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 7.5}}>
            <TwitterSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 7.5}}>
            <GoogleSvg />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }

  return <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>{renderContent()}</SafeAreaView>;
}

const mapStateToProps = state => {
  return {
    user: state.authState.user,
  };
};

export default connect(mapStateToProps)(SignIn);
