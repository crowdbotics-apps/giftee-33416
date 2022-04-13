import { getDefaultHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextDefault } from '../../Text';
import HeaderLeft from './HeaderLeft';
import styles from './styles';

function SimpleHeader({ headerTitle, leftIcon = '', leftButtonStyle, backAction }) {
  const inset = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <View
      style={[
        styles.headerContainer,
        {
          minHeight: headerHeight,
          paddingTop: inset.top,
        },
      ]}>
      <View style={[styles.headerRow]}>
        <TextDefault H5 bold numberOfLines={1}>
          {headerTitle}
        </TextDefault>
        <View style={styles.buttonContainer}>
          {leftIcon ? (
            <HeaderLeft icon={leftIcon} style={leftButtonStyle} backAction={backAction} />
          ) : (
            <View style={styles.leftButton} />
          )}
          <View style={[styles.iconsWidth]} />
        </View>
      </View>
    </View>
  );
}

export default React.memo(SimpleHeader);
