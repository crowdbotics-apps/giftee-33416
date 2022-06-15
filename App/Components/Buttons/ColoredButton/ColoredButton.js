import React from 'react';
import { Pressable, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Alignment, COLORS } from '../../../Theme';
import { Spinner } from '../../Spinner';
import { TextDefault } from '../../Text';
import styles from './styles';

function ColoredButton({
  disabled = false,
  viewProps,
  title,
  btnStyle,
  textprops,
  textIcon = null,
  onPress,
  spinner = false,
  textView,
}) {
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
          <React.Fragment>
            {Boolean(textIcon) && (
              <View style={styles.iconView}>
                <FontAwesome name={textIcon} size={30} color={COLORS.white} />
              </View>
            )}
            <View style={[styles.titleView, textView]}>
              <TextDefault description medium style={[Alignment.PHxSmall, styles.buttonText, textprops]}>
                {title}
              </TextDefault>
            </View>
          </React.Fragment>
        )}
      </Pressable>
    </View>
  );
}

export default React.memo(ColoredButton);
