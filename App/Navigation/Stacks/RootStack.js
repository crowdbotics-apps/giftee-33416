import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import DrawerStack from './DrawerStack';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={NAVIGATION_SCREEN.drawerStack} component={DrawerStack} />
    </Stack.Navigator>
  );
}

export default React.memo(RootStack);
