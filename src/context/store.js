import {authReducer, cartReducer, shopReducer} from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['shopReducer'],
  //   whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  authState: authReducer,
  shopState: shopReducer,
  cartState: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
