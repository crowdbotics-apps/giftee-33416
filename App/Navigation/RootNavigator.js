import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { setRootNavigation } from './NavigationService';
import RootStack from './Stacks/RootStack';

function RootNavigator(props) {
  const NavigationService = createNavigationContainerRef();
  setRootNavigation(NavigationService);
  return (
    <NavigationContainer ref={NavigationService} {...props}>
      <RootStack />
    </NavigationContainer>
  );
}

export default React.memo(RootNavigator);
