import React, { useMemo } from 'react';
import { View } from 'react-native';
import GiftBig from '../../../Assest/Svg/GiftBig';
import GiftSmall from '../../../Assest/Svg/GiftSmall';
import { GridList, LoadingLogo, MainWrapper, TextDefault } from '../../../Components';
import { ITEM_LIST } from '../../../Config/MockData';
import { ICONS_NAME } from '../../../Config/NavigationConstant';
import { Alignment } from '../../../Theme';
import styles from './styles';

function SpecificHistoryScreen() {
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
          data: ITEM_LIST,
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
