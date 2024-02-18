import {authReducer, cartReducer, shopReducer} from './reducers';
// import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['shopReducer'],
  //   whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  authState: authReducer,
  shopState: shopReducer,
  cartState: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({
//   reducer: persistedReducer,
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      shopReducer.removeAll(state);
    });
  },
});
export const persistor = persistStore(store);
