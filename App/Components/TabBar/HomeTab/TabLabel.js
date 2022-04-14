import React from 'react';
import { View } from 'react-native';
import { TextDefault } from '../../Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alignment, COLORS } from '../../../Theme';
import styles from './styles';

function TabLabel({ title = '', icon = '', ...option }) {
  return (
    <View style={[styles.row, styles.center]}>
      <TextDefault medium link style={[Alignment.PHsmall, option.focused && styles.activeColor]}>
        {title}
      </TextDefault>
      {Boolean(icon) && <Ionicons name={icon} size={15} color={COLORS.black} />}
    </View>
  );
}

export default React.memo(TabLabel);
