import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import DislikeIcon from '../../../Assest/Svg/DislikeIcon';
import LikeIcon from '../../../Assest/Svg/LikeIcon';
import { ColoredButton, MainWrapper, TextDefault } from '../../../Components';
import { Alignment } from '../../../Theme';
import styles from './styles';

const DATA_LIST = [
  {
    id: 0,
    title: 'Product Title1',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 1,
    title: 'Product Title2',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 2,
    title: 'Product Title3',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 3,
    title: 'Product Title4',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 4,
    title: 'Product Title5',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 5,
    title: 'Product Title6',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
];
function SwipeMode() {
  const [currentCard, setCurrentCard] = useState(0);
  const navigation = useNavigation();

  const changeCard = useCallback(() => {
    setCurrentCard(prev => prev + 1);
  }, []);

  const emptyView = useMemo(
    () => (
      <View style={[styles.flex, styles.emptyView]}>
        <TextDefault medium H5>
          No Data Found
        </TextDefault>
      </View>
    ),
    [],
  );

  // console.tron.warn?.(DATA_LIST);
  const RenderCard = React.memo(props => {
    return (
      <View style={styles.boxView}>
        <View style={styles.imgView}>{/* <Image /> */}</View>
        <TextDefault numberOfLines={1} center H4 bold style={styles.title}>
          {props.title}
        </TextDefault>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn} onPress={changeCard}>
            <DislikeIcon />
            <TextDefault link center medium style={[styles.errorText, Alignment.MTxSmall]}>
              Dislike
            </TextDefault>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={changeCard}>
            <LikeIcon />
            <TextDefault link center medium style={[styles.successText, Alignment.MTxSmall]}>
              Like
            </TextDefault>
          </TouchableOpacity>
        </View>
        <ColoredButton title={'View on Amazon'} viewProps={styles.btnView} textprops={styles.btnText} />
      </View>
    );
  });

  const cardStack = useCallback(() => {
    return DATA_LIST.map((item, index) => {
      if (index < currentCard) {
        return null;
      }
      return (
        <View key={item.id.toString()} style={styles.cardWrapper}>
          <RenderCard {...item} />
        </View>
      );
    }).reverse();
  }, [currentCard]);

  return (
    <MainWrapper headerTitle="Gift results for Jon">
      <ScrollView bounces={false} style={styles.flex} contentContainerStyle={styles.contentScroll}>
        {cardStack()}
      </ScrollView>
    </MainWrapper>
  );
}

export default React.memo(SwipeMode);
