import {Alert} from 'react-native';

export function GenerateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function formatSuccess(result) {
  return {
    status: 200,
    result,
  };
}

export function formatError(error) {
  if (Array.isArray(error.response.data.message)) {
    Alert.alert('ERROR', error.response.data.message[0]);
    return {
      status: error.response.data.statusCode,
      message: error.response.data.message[0],
    };
  } else {
    Alert.alert('ERROR', error.response.data.message);
    return {
      status: error.response.data.statusCode,
      message: error.response.data.message,
    };
  }
}
