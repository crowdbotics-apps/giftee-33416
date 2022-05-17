import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GiftBig from '../../../Assest/Svg/GiftBig';
import GiftSmall from '../../../Assest/Svg/GiftSmall';
import { MainWrapper, TextDefault } from '../../../Components';
import { NAVIGATION_SCREEN } from '../../../Config/NavigationConstant';
import { Alignment, COLORS } from '../../../Theme';
import { FONTS_NAME } from '../../../Theme/Fonts';
import styles from './styles';

const DATA_LIST = [
  {
    id: 0,
    date: '21 March, 22',
    title: 'Gift for ',
  },
  {
    id: 1,
    date: '21 March, 22',
    title: 'Gift for ',
  },
  {
    id: 2,
    date: '21 March, 22',
    title: 'Gift for ',
  },
  {
    id: 3,
    date: '21 March, 22',
    title: 'Gift for ',
  },
];

function HistoryScreen() {
  const navigation = useNavigation();

  const emptyView = useMemo(
    () => (
      <View style={styles.emptyView}>
        <TextDefault bold>No History found.</TextDefault>
      </View>
    ),
    [],
  );

  const headerView = useMemo(
    () => (
      <View style={styles.headerView}>
        <TextDefault medium style={styles.headerTitle}>
          Person/Group List
        </TextDefault>
      </View>
    ),
    [],
  );
  return (
    <MainWrapper headerTitle="History">
      <FlatList
        data={DATA_LIST}
        style={styles.flex}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.flexGrow, Alignment.PHxSmall]}
        ListEmptyComponent={emptyView}
        ListHeaderComponent={headerView}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <RectButton
              style={styles.historyCard}
              activeOpacity={0.05}
              onPress={() => navigation.navigate(NAVIGATION_SCREEN.specificHistoryScreen)}>
              <View style={styles.flex}>
                <TextDefault terms style={styles.dateText}>
                  {item.date}
                </TextDefault>
                <TextDefault bold H5 style={[Alignment.MTxSmall, { fontFamily: FONTS_NAME.AbrilFatface.bold }]}>
                  {item.title}
                  <TextDefault bold H5 style={styles.blueText}>
                    Jon
                  </TextDefault>
                </TextDefault>
              </View>
              <Ionicons name="arrow-forward-outline" size={20} color={COLORS.seconday} />
            </RectButton>
          );
        }}
      />
      <View style={styles.bottomImage}>
        <GiftSmall style={Alignment.MRmedium} />
        <GiftBig />
      </View>
    </MainWrapper>
  );
}

export default React.memo(HistoryScreen);
