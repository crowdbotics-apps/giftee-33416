import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  linkBtn: {
    backgroundColor: 'transparent',
    // ...Alignment.PVsmall,
    // ...Alignment.PHxSmall
  },
  linkTextColor: {
    color: COLORS.primary,
  },
});

export default styles;
