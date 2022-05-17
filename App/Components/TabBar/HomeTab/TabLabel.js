import React from 'react';
import { View } from 'react-native';
import DislikeIcon from '../../../Assest/Svg/DislikeIcon';
import GridIcon from '../../../Assest/Svg/GridIcon';
import { Alignment, COLORS } from '../../../Theme';
import { TextDefault } from '../../Text';
import styles from './styles';

function TabLabel({ title = '', icon = '', ...option }) {
  return (
    <View style={[styles.row, styles.center]}>
      <TextDefault medium link style={[Alignment.PHsmall, option.focused ? styles.activeColor : styles.inActiveColor]}>
        {title}
      </TextDefault>
      {title === 'Swipe Mode' ? (
        <DislikeIcon
          width={24}
          height={24}
          viewBox="0 0 52 28"
          color={option.focused ? COLORS.seconday : COLORS.rippleColor}
        />
      ) : (
        <GridIcon color={option.focused ? COLORS.seconday : COLORS.rippleColor} />
      )}
    </View>
  );
}

export default React.memo(TabLabel);
