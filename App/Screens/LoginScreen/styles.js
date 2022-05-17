import { StyleSheet } from 'react-native';
import { Alignment, COLORS, Fonts } from '../../Theme';
import { fontFamily } from '../../Theme/Fonts';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    ...Alignment.PTlarge,
    ...Alignment.MHxLarge,
  },
  row: {
    flexDirection: 'row',
  },
  conditionView: {
    flex: 1,
    flexWrap: 'wrap',
    ...Alignment.PLmedium,
  },
  iconBox: {
    backgroundColor: COLORS.white,
    width: 22,
    aspectRatio: 1,
    borderRadius: 5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerLink: {
    justifyContent: 'center',
  },
  registerText: {
    color: COLORS.seconday,
    textDecorationLine: 'underline',
    ...Fonts.style.description,
    ...fontFamily.Bold,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    zIndex: -1,
  },
});

export default styles;
