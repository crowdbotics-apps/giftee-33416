import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { TabIndicator, TabLabel } from '../../Components';
import { NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import { GridMode, SwipeMode } from '../../Screens';
import { Alignment, COLORS } from '../../Theme';

const HomeNavigator = createMaterialTopTabNavigator();

function HomeStack() {
  return (
    <HomeNavigator.Navigator
      initialRouteName={NAVIGATION_SCREEN.homeSwipeScreen}
      style={{
        backgroundColor: COLORS.primary,
        ...Alignment.MTxLarge,
      }}
      screenOptions={{
        swipeEnabled: false,
        tabBarAllowFontScaling: false,
        tabBarActiveTintColor: COLORS.seconday,
        tabBarInactiveTintColor: COLORS.primaryText,
        tabBarIndicatorContainerStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.seconday,
          height: 4,
          borderRadius: 10,
        },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          ...Alignment.MHxMedium,
        },
        tabBarIndicator: props => <TabIndicator {...props} />,
      }}>
      <HomeNavigator.Screen
        name={NAVIGATION_SCREEN.homeSwipeScreen}
        component={SwipeMode}
        options={{
          title: 'Swipe Mode',
          tabBarLabel: props => <TabLabel {...props} title="Swipe Mode" icon={'exit'} />,
        }}
      />
      <HomeNavigator.Screen
        name={NAVIGATION_SCREEN.homeGridScreen}
        component={GridMode}
        options={{
          title: 'Grid Mode',
          tabBarLabel: props => <TabLabel {...props} title="Grid Mode" icon={'exit'} />,
        }}
      />
    </HomeNavigator.Navigator>
  );
}

export default React.memo(HomeStack);
