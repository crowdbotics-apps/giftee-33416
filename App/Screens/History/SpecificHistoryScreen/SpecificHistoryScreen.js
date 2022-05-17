import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import GiftBig from '../../../Assest/Svg/GiftBig';
import GiftSmall from '../../../Assest/Svg/GiftSmall';
import { GridList, MainWrapper, LoadingLogo, TextDefault } from '../../../Components';
import { ICONS_NAME } from '../../../Config/NavigationConstant';
import { Alignment } from '../../../Theme';
import styles from './styles';

const DATA_LIST = [
  {
    id: 0,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 1,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 2,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 3,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 4,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 5,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
];

function SpecificHistoryScreen() {
  const navigation = useNavigation();

  const headerView = useMemo(
    () => (
      <TextDefault medium style={styles.headerTitle}>
        Liked gifts list
      </TextDefault>
    ),
    [],
  );

  return (
    <MainWrapper headerTitle="John's History" leftIcon={ICONS_NAME.BACK}>
      <GridList
        isHistory
        flatListProps={{
          data: DATA_LIST,
          ListHeaderComponent: headerView,
        }}
      />
      <LoadingLogo show={false} />
      <View style={styles.bottomImage}>
        <GiftSmall style={Alignment.MRmedium} />
        <GiftBig />
      </View>
    </MainWrapper>
  );
}

export default React.memo(SpecificHistoryScreen);
