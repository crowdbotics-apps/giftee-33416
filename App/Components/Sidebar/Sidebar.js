import { DrawerContentScrollView, DrawerItem, useDrawerProgress } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { Pressable, useWindowDimensions } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SIDE_MENU } from '../../Config/NavigationConstant';
import { RootNavigation } from '../../Navigation/NavigationService';
import { COLORS } from '../../Theme';
import { TextDefault } from '../Text';
import styles from './styles';

const isLoggedIn = false;
function Sidebar(props) {
  const progress = useDrawerProgress();
  const inset = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const headerViewStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0, 1], Extrapolate.CLAMP);
    return {
      transform: [{ scale }],
    };
  }, []);

  const navigationName = RootNavigation?.getCurrentRoute()?.name;

  return (
    <React.Fragment>
      {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.seconday} /> */}
      <Animated.View style={[styles.headerView, { marginTop: inset.top, width: width }, headerViewStyle]}>
        <Pressable
          android_ripple={{ borderless: true, color: COLORS.black }}
          hitSlop={{ top: 20, right: 20, bottom: 15, left: 20 }}
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
          activeOpacity={0.6}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.leftButton,
          ]}>
          <Ionicons name="close" size={25} color={COLORS.white} />
        </Pressable>
        <TextDefault H3 bold>
          Menu
        </TextDefault>
      </Animated.View>
      <DrawerContentScrollView {...props} contentContainerStyle={[styles.flexGrow]} bounces={false}>
        <Animated.View style={[styles.flex]}>
          {SIDE_MENU.map(item => (
            <DrawerItem
              pressColor={'rgba(0,0,0,0.2)'}
              key={`DRAWER_ITEM_LIST_${item.id}`}
              style={styles.drawerItem}
              activeBackgroundColor={'transparent'}
              activeTintColor={'red'}
              inactiveTintColor={COLORS.white}
              // focused={navigationName === item.navigateTo}
              label={labelProps => (
                <TextDefault style={[{ color: labelProps.color }, styles.flex]}>{item.title}</TextDefault>
              )}
              //   icon={props => {
              //     if (item.icon !== 'user') {
              //       return <CustomIcon name={item.icon} color={props.color} size={scale(22)} />;
              //     } else {
              //       return <SimpleLineIcons name={item.icon} color={props.color} size={scale(22)} />;
              //     }
              //   }}
              onPress={() => {
                props.navigation.navigate(item.navigateTo);
                // if (item.isAuth && !isLoggedIn) {
                //   props.navigation.navigate(NAVIGATION_SCREEN.CreateAccount);
                // } else {
                //   props.navigation.navigate(item.navigateTo);
                // }
              }}
            />
          ))}
        </Animated.View>
      </DrawerContentScrollView>
      <Animated.View style={[styles.headerView, { marginBottom: inset.bottom, width: width }, headerViewStyle]}>
        <TextDefault H3 bold>
          Giftee
        </TextDefault>
      </Animated.View>
    </React.Fragment>
  );
}

export default React.memo(Sidebar);
