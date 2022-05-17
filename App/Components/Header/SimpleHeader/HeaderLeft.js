import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import ChevronLeft from '../../../Assest/Svg/ChevronLeft';
import CloseIcon from '../../../Assest/Svg/CloseIcon';
import MenuIcon from '../../../Assest/Svg/MenuIcon';
import { ICONS_NAME } from '../../../Config/NavigationConstant';
import { COLORS } from '../../../Theme';
import styles from './styles';

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
          <ChevronLeft />
        </Pressable>
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
          <CloseIcon />
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
          <MenuIcon />
        </Pressable>
      );
  }
}

export default React.memo(HeaderLeft);
