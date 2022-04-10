import React, { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import DebugConfig from './Config/DebugConfig';
import RootContainer from './RootContainer';
import { InitializeStore } from './RTK';

const { reduxStore } = InitializeStore();

function App() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Provider store={reduxStore}>
        <RootContainer />
      </Provider>
    </Suspense>
  );
}

export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
