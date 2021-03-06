import React, { useMemo } from 'react';
import { FlatList, Image, useWindowDimensions, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeartIcon from '../../../Assest/Svg/HeartIcon';
import TrashIcon from '../../../Assest/Svg/TrashIcon';
import { openLink, scale } from '../../../Config/CustomFunction';
import { COLORS } from '../../../Theme';
import { ColoredButton } from '../../Buttons';
import { TextDefault } from '../../Text';
import styles from './styles';

function GridList({ flatListProps, isHistory = false }) {
  const { height, width } = useWindowDimensions();

  const isLandscape = useMemo(() => {
    return width >= height;
  }, [width, height]);

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

  return (
    <FlatList
      key={isLandscape ? 'Landscaoe' : 'Protrail'}
      data={flatListProps?.data || []}
      style={styles.flex}
      contentContainerStyle={styles.contentScroll}
      ListEmptyComponent={emptyView}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => id.toString()}
      numColumns={isLandscape ? 4 : 2}
      {...flatListProps}
      renderItem={({ item }) => {
        return (
          <View style={[styles.flex, styles.boxView]}>
            <BorderlessButton style={styles.trashBtn} rippleColor={COLORS.rippleColor} activeOpacity={0.5}>
              {isHistory ? <HeartIcon color={COLORS.seconday} /> : <TrashIcon color={COLORS.seconday} />}
            </BorderlessButton>
            <View style={styles.imgView}>
              <Image source={item.image} resizeMode="contain" style={styles.responsiveImage} />
            </View>
            <TextDefault numberOfLines={1} center small medium style={styles.title}>
              {item.title}
            </TextDefault>
            {!isHistory && (
              <TextDefault numberOfLines={3} center style={{ fontSize: scale(10) }}>
                {item.description}
              </TextDefault>
            )}
            <ColoredButton
              title={'View on Amazon'}
              viewProps={styles.btnView}
              textprops={styles.btnText}
              textView={styles.btnTextView}
              onPress={() => openLink(item.link)}
            />
          </View>
        );
      }}
    />
  );
}

export default React.memo(GridList);
