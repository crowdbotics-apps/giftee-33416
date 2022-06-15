import { StyleSheet } from 'react-native';
import { scale } from '../../Config/CustomFunction';
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
  },
  title: {
    ...Alignment.MVxLarge,
    fontFamily: FONTS_NAME.AbrilFatface.bold,
    fontSize: scale(65),
  },
  btnView: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: scale(30),
    aspectRatio: 1.5 / 1,
    borderRadius: scale(10),
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
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
