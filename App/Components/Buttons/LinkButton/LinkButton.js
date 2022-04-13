import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TextDefault } from '../../Text';
import styles from './styles';

function LinkButton({ title, disabled = false, btnStyle, textprops, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.5} disabled={disabled} style={[styles.linkBtn, btnStyle]} onPress={onPress}>
      <TextDefault medium link textColor={styles.linkTextColor} style={textprops}>
        {title}
      </TextDefault>
    </TouchableOpacity>
  );
}

export default React.memo(LinkButton);
