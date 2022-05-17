import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import SimpleHeader from '../../Components/Header/SimpleHeader/SimpleHeader';
import { ICONS_NAME, NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import {
  AdditionalRegister,
  FilterScreen,
  HistoryScreen,
  LoginScreen,
  PrivacyScreen,
  RegisterScreen,
  SplashScreen,
  TermScreen,
} from '../../Screens';
import { SpecificHistoryScreen } from '../../Screens/History';
import { COLORS } from '../../Theme';
import HomeStack from './HomeStack';
import styles from './styles';

const NavigationStack = createStackNavigator();

function PrimaryStack() {
  const progress = useDrawerProgress();
  const isDrawerOpen = useDrawerStatus() === 'open';

  const AnimatedInnerSlide = useAnimatedStyle(() => {
    const marginLeft = interpolate(progress.value, [0, 1], [-35, 30]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]);
    return {
      marginLeft,
      borderRadius,
    };
  });

  const AnimatedOuterSlide = useAnimatedStyle(() => {
    const marginLeft = interpolate(progress.value, [0, 1], [-20, 10]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]);
    return {
      marginLeft,
      borderRadius,
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8], Extrapolate.CLAMP);
    const translateX = interpolate(progress.value, [0, 1], [0, 30], Extrapolate.CLAMP);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20], Extrapolate.CLAMP);
    return {
      borderRadius,
      transform: [{ scale }, { translateX }],
    };
  }, []);

  return (
    <React.Fragment>
      <StatusBar
        barStyle={isDrawerOpen ? 'light-content' : 'dark-content'}
        backgroundColor={isDrawerOpen ? COLORS.seconday : COLORS.primary}
      />
      <Animated.View style={[styles.outerView, AnimatedOuterSlide]} />
      <Animated.View style={[styles.innerView, AnimatedInnerSlide]} />
      <Animated.View style={[styles.animatedView, animatedStyle]}>
        <NavigationStack.Navigator
          initialRouteName={NAVIGATION_SCREEN.splashScreen}
          screenOptions={{
            header: () => <SimpleHeader headerTitle={'Gift results for Jon'} leftIcon={ICONS_NAME.DRAWER} />,
            cardStyle: {
              backgroundColor: COLORS.primary,
            },
          }}>
          <NavigationStack.Screen name={NAVIGATION_SCREEN.homeScreen} component={HomeStack} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.termScreen} component={TermScreen} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.loginScreen} component={LoginScreen} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.filterScreen} component={FilterScreen} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.historyScreen} component={HistoryScreen} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.privacyScreen} component={PrivacyScreen} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.specificHistoryScreen} component={SpecificHistoryScreen} />
          <NavigationStack.Group screenOptions={{ headerShown: false }}>
            <NavigationStack.Screen name={NAVIGATION_SCREEN.splashScreen} component={SplashScreen} />
            <NavigationStack.Screen name={NAVIGATION_SCREEN.registerScreen} component={RegisterScreen} />
            <NavigationStack.Screen name={NAVIGATION_SCREEN.AdditionalRegister} component={AdditionalRegister} />
          </NavigationStack.Group>
        </NavigationStack.Navigator>
      </Animated.View>
    </React.Fragment>
  );
}

export default React.memo(PrimaryStack);
