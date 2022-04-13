import React, { useMemo } from 'react';
import { View } from 'react-native';
import Spinner from './Spinner';
import styles from './styles';

function LoadingLogo({ show = false }) {
  const loadView = useMemo(
    () => (
      <View style={styles.spinnerBackground}>
        <Spinner style={styles.spinner} />
      </View>
    ),
    [],
  );
  return show ? loadView : null;
}

export default React.memo(LoadingLogo);
