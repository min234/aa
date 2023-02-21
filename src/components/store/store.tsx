import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../../counter/counterSlice';
import thunk from 'redux-thunk'

const reducers = combineReducers({
  user: userReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist : ['user']
};
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer:  persistedReducer,
  middleware: [thunk]
});

export default store;
