/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICONS_NAME } from '../../../Config/NavigationConstant';
import { SimpleHeader } from '../../Header';
import styles from './styles';

function MainWrapper({ headerTitle = '', children, leftIcon }) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    return navigation.setOptions({
      header: () => <SimpleHeader headerTitle={headerTitle} leftIcon={leftIcon ?? ICONS_NAME.DRAWER} />,
    });
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={[styles.flex, styles.background]}>
      <View style={[styles.flex, styles.background, styles.scrollContent]}>{children}</View>
    </SafeAreaView>
  );
}

export default React.memo(MainWrapper);
