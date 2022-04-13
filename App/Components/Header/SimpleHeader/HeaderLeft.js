import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { ICONS_NAME } from '../../../Config/NavigationConstant';
import { COLORS } from '../../../Theme';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

function HeaderLeft(props) {
  const navigation = useNavigation();

  switch (props.icon) {
    case ICONS_NAME.BACK:
      return (
        <Pressable
          android_ripple={{ borderless: true, color: COLORS.black }}
          hitSlop={{ top: 20, right: 20, bottom: 15, left: 20 }}
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.leftButton,
            props.style,
          ]}>
          <Ionicons name="chevron-back-outline" size={25} color={COLORS.seconday} />
        </Pressable>
        // <TouchableOpacity
        //   activeOpacity={0.5}
        //   style={[styles.editBtn, props.style]}
        //   onPress={debounce(() => navigation.navigate(NAVIGATION_SCREENS.signIn), 1000, {
        //     leading: true,
        //     trailing: false,
        //   })}>
        //   <TextDefault upperCase bold small textColor={styles.loginBtnText}>
        //     {t(ICONS_NAME.LOGIN)}
        //   </TextDefault>
        // </TouchableOpacity>
      );
    case ICONS_NAME.CROSS:
      return (
        <Pressable
          android_ripple={{ borderless: true, color: COLORS.black }}
          hitSlop={{ top: 20, right: 20, bottom: 15, left: 20 }}
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.leftButton,
            props.style,
          ]}>
          <Ionicons name="ios-menu" size={30} color={COLORS.primaryText} />
        </Pressable>
      );

    default:
      return (
        <Pressable
          android_ripple={{ borderless: true, color: COLORS.black }}
          hitSlop={{ top: 20, right: 20, bottom: 15, left: 20 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          activeOpacity={0.6}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.leftButton,
            props.style,
          ]}>
          <Ionicons name="menu-outline" size={30} color={COLORS.seconday} />
        </Pressable>
      );
  }
}

export default React.memo(HeaderLeft);
