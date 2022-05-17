import { StyleSheet } from 'react-native';
import { Alignment, COLORS } from '../../Theme';
import { FONTS_NAME } from '../../Theme/Fonts';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  background: {
    backgroundColor: COLORS.primary,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    ...Alignment.PHxLarge,
    marginTop: 150,
  },
  title: {
    ...Alignment.MVxLarge,
    fontFamily: FONTS_NAME.AbrilFatface.bold,
    fontSize: 80,
  },
  blueText: {
    color: COLORS.seconday,
    ...Alignment.MVmedium,
    ...Alignment.MTxLarge,
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
