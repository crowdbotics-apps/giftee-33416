import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import DislikeIcon from '../../../Assest/Svg/DislikeIcon';
import LikeIcon from '../../../Assest/Svg/LikeIcon';
import { ColoredButton, MainWrapper, TextDefault } from '../../../Components';
import { openLink } from '../../../Config/CustomFunction';
import { ITEM_LIST } from '../../../Config/MockData';
import { Alignment, COLORS } from '../../../Theme';
import styles from './styles';
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
        <View style={styles.imgView}>
          <Image source={props.image} resizeMode="contain" style={styles.responsiveImage} />
        </View>
        <TextDefault numberOfLines={2} center bold style={styles.title}>
          {props.title}
        </TextDefault>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn} onPress={changeCard}>
            <DislikeIcon color={'#01497C'} />
            <TextDefault description center medium style={[styles.errorText, Alignment.MTxSmall]}>
              Dislike
            </TextDefault>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={changeCard}>
            <LikeIcon color={COLORS.seconday} />
            <TextDefault description center medium style={[styles.successText, Alignment.MTxSmall]}>
              Like
            </TextDefault>
          </TouchableOpacity>
        </View>
        <ColoredButton
          title={'View on Amazon'}
          viewProps={styles.btnView}
          textprops={styles.btnText}
          onPress={() => openLink(props.link)}
        />
      </View>
    );
  });

  const cardStack = useCallback(() => {
    return ITEM_LIST.map((item, index) => {
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
