import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import SimpleHeader from '../../Components/Header/SimpleHeader/SimpleHeader';
import { ICONS_NAME, NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import { LoginScreen, PrivacyScreen, TermScreen } from '../../Screens';
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
          screenOptions={{
            header: () => <SimpleHeader headerTitle={'Gift results for Jon'} leftIcon={ICONS_NAME.DRAWER} />,
            cardStyle: {
              backgroundColor: COLORS.primary,
            },
          }}>
          <NavigationStack.Screen name={NAVIGATION_SCREEN.homeScreen} component={HomeStack} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.loginScreen} component={LoginScreen} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.privacyScreen} component={PrivacyScreen} />
          <NavigationStack.Screen name={NAVIGATION_SCREEN.termScreen} component={TermScreen} />
        </NavigationStack.Navigator>
      </Animated.View>
    </React.Fragment>
  );
}

export default React.memo(PrimaryStack);
