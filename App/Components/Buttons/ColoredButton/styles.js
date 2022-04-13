import { StyleSheet } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainContainer: {
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.seconday,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iconView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    left: 25,
    // ...Alignment.PHsmall,
  },
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    ...Alignment.PHxLarge,
  },
  buttonText: {
    color: COLORS.white,
  },
});
export default styles;
