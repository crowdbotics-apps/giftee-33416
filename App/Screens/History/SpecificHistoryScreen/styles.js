import { StyleSheet } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  headerTitle: {
    color: COLORS.seconday,
    ...Alignment.PHxSmall,
    ...Alignment.MTsmall,
    ...Alignment.MBmedium,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    right: 25,
    left: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    zIndex: -1,
  },
});

export default styles;
