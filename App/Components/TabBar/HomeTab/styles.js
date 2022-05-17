import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeColor: {
    color: COLORS.seconday,
  },
  inActiveColor: {
    color: COLORS.rippleColor,
  },
  indicator: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.PinkishWhite,
  },
  indicatorRadius: {
    height: 4,
    borderRadius: 5,
  },
});

export default styles;
