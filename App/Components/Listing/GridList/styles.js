import { StyleSheet } from 'react-native';
import { scale } from '../../../Config/CustomFunction';
import { Alignment, COLORS } from '../../../Theme';
import Fonts, { fontFamily } from '../../../Theme/Fonts';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentScroll: {
    flexGrow: 1,
    ...Alignment.PBxLarge,
  },
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  trashBtn: {
    position: 'absolute',
    right: 0,
    width: 40,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryGrey,
    borderRadius: 20,
    zIndex: 2,
  },
  boxView: {
    width: '47%',
    maxWidth: 200,
    backgroundColor: COLORS.primaryGrey,
    borderRadius: 15,
    ...Alignment.Msmall,
    ...Alignment.Psmall,
  },
  imgView: {
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    maxWidth: 180,
    maxHeight: 180,
    aspectRatio: 1,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  responsiveImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  title: {
    color: COLORS.seconday,
    ...Alignment.MVsmall,
  },
  btnView: {
    height: 45,
    ...Alignment.MTmedium,
    ...Alignment.MBxSmall,
  },
  btnTextView: {
    flex: 1,
    ...Alignment.PHxSmall,
  },
  btnText: {
    ...fontFamily.Medium,
    ...Fonts.style.extraSmall,
    paddingHorizontal: 0,
  },
});

export default styles;
