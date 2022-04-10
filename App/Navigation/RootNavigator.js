import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './Stacks/RootStack';

function RootNavigator(props) {
  return (
    <NavigationContainer {...props}>
      <RootStack />
    </NavigationContainer>
  );
}

export default React.memo(RootNavigator);
