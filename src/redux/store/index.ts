import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import reducers from '../reducers';
import {initialState as AuthenticationInitialState} from '../reducers/authentication/_initialState';
import {AuthenticationState} from '../reducers/authentication/_interfaces';

export interface ReduxStore {
  authentication: AuthenticationState;
}

export const storeInitialState = {
  authentication: AuthenticationInitialState,
};

// Persist config
const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  blacklist: [],
};

const persistReduce = persistReducer(persistConfig, reducers);

const reduxInmmutableStateInvariant =
  require('redux-immutable-state-invariant').default();

// Configure store
export const store = configureStore({
  reducer: persistReduce,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? [
          ...getDefaultMiddleware({serializableCheck: false}),
          reduxInmmutableStateInvariant,
        ]
      : getDefaultMiddleware({
          serializableCheck: false,
        }),
  preloadedState: storeInitialState,
  devTools: __DEV__,
});

// @ts-ignore
export const persistor = persistStore(store);
