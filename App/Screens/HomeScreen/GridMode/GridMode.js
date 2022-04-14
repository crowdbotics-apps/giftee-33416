import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { MainWrapper } from '../../../Components';

function GridMode() {
  const navigation = useNavigation();

  return (
    <MainWrapper headerTitle="Gift results for Jon">
      <View>
        <Text>Home</Text>
      </View>
    </MainWrapper>
  );
}

export default React.memo(GridMode);
