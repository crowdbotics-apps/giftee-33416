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
  imgView: {
    width: '100%',
    height: scale(200),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  responsiveImg: {
    flex: 1,
    width: undefined,
    height: undefined,
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
