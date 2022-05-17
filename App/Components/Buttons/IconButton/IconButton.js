import React from 'react';
import { Pressable, View } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';
import { Spinner } from '../../Spinner';
import styles from './styles';

function IconButton({ disabled = false, viewProps, btnStyle, Icon = null, onPress, spinner = false, textView }) {
  return (
    <View style={[styles.mainContainer, viewProps, disabled && styles.disableBtn]}>
      <Pressable
        android_ripple={{ color: COLORS.rippleColor, borderless: true }}
        disabled={disabled || spinner}
        style={({ pressed }) => [
          styles.touchContainer,
          btnStyle,
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
        onPress={onPress}>
        {spinner ? (
          <Spinner animating={spinner} size={'small'} spinnerColor={COLORS.white} style={Alignment.PHmedium} />
        ) : (
          <View style={[styles.titleView, textView]}>{Icon}</View>
        )}
      </Pressable>
    </View>
  );
}

export default React.memo(IconButton);
