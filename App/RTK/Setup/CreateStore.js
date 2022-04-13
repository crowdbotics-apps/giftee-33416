import { configureStore } from '@reduxjs/toolkit';
import REDUX_PERSIST from './ReduxPersist';
import RootReducer from './RootReducer';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import DebugConfig from '../../Config/DebugConfig';

function CreateStore() {
  const enhancers = [];
  const persistedReducer = REDUX_PERSIST.active ? persistReducer(REDUX_PERSIST.storeConfig, RootReducer) : RootReducer;

  if (DebugConfig.useReactotron) {
    const tronEnhancer = console.tron?.createEnhancer?.();
    if (tronEnhancer) {
      enhancers.push(tronEnhancer);
    }
  }
  const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: __DEV__,
    preloadedState: {},
    enhancers,
  });

  let persistor;
  if (REDUX_PERSIST.active) {
    persistor = persistStore(reduxStore);
  }

  return { reduxStore, persistor };
}

export default CreateStore;
