import { StyleSheet } from 'react-native';
import { COLORS, Fonts } from '../../../Theme';

const styles = StyleSheet.create({
  defaultStyle: {
    color: COLORS.primaryText,
    fontSize: Fonts.size.regular,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

export default styles;
