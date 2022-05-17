import { StyleSheet, Dimensions } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';
import Fonts, { fontFamily } from '../../../Theme/Fonts';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Alignment.PBxLarge,
  },
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxView: {
    width: width * 0.9,
    height: height * 0.7,
    maxWidth: 380,
    backgroundColor: COLORS.primaryGrey,
    alignItems: 'center',
    borderRadius: 15,
    ...Alignment.Msmall,
    ...Alignment.Plarge,
  },
  imgView: {
    height: height * 0.35,
    alignSelf: 'center',
    aspectRatio: 1,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.seconday,
    ...Alignment.MVlarge,
  },
  actionRow: {
    width: width * 0.9 - 30,
    maxWidth: height * 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Alignment.MVmedium,
  },
  actionBtn: {
    alignItems: 'center',
    ...Alignment.Psmall,
  },
  btnView: {
    width: width * 0.6,
    ...Alignment.Mmedium,
  },
  btnText: {
    ...fontFamily.Bold,
    ...Fonts.style.h6,
    paddingHorizontal: 0,
  },
  errorText: {
    color: COLORS.error,
  },
  successText: {
    color: COLORS.green,
  },
});

export default styles;
