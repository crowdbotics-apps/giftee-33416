import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Sidebar } from '../../Components';
import { NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import COLORS from '../../Theme/Colors';
import PrimaryStack from './PrimaryStack';

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName={NAVIGATION_SCREEN.homeScreen}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {
          flex: 1,
          backgroundColor: COLORS.seconday,
          width: '60%',
          justifyContent: 'space-between',
          borderRightWidth: 0,
          borderWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
        sceneContainerStyle: {
          backgroundColor: COLORS.seconday,
        },
      }}
      drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen name={NAVIGATION_SCREEN.primaryStack} component={PrimaryStack} />
    </Drawer.Navigator>
  );
}

export default React.memo(DrawerStack);
