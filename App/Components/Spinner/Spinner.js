import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../Theme';
import styles from './styles';

function Spinner(props) {
  return (
    <ActivityIndicator
      style={[styles.flex, styles.mainContainer]}
      {...props}
      size={props.size || 'large'}
      color={props.spinnerColor ? props.spinnerColor : COLORS.white}
    />
  );
}

export default React.memo(Spinner);
