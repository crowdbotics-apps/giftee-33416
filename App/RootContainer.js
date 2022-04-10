import { SafeAreaProviderCompat } from '@react-navigation/elements';
import React from 'react';
import RootNavigator from './Navigation/RootNavigator';

function RootContainer() {
  return (
    <SafeAreaProviderCompat>
      <RootNavigator />
    </SafeAreaProviderCompat>
  );
}

export default React.memo(RootContainer);
