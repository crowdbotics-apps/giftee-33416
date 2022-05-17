import React, { useMemo } from 'react';
import { View } from 'react-native';
import { COLORS } from '../../Theme';
import Spinner from './Spinner';
import styles from './styles';

function LoadingLogo({ show = false }) {
  const loadView = useMemo(
    () => (
      <View style={styles.spinnerBackground}>
        <View style={styles.logoContainer}>
          <Spinner style={styles.spinner} spinnerColor={COLORS.seconday} />
        </View>
      </View>
    ),
    [],
  );
  return show ? loadView : null;
}

export default React.memo(LoadingLogo);
