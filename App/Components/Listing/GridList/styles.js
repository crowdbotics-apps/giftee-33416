import { StyleSheet } from 'react-native';
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
    maxWidth: 180,
    maxHeight: 180,
    aspectRatio: 1,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.seconday,
    ...Alignment.MVsmall,
  },
  btnView: {
    height: 30,
    ...Alignment.MTmedium,
    ...Alignment.MBxSmall,
  },
  btnTextView: {
    ...Alignment.Psmall,
  },
  btnText: {
    ...fontFamily.Medium,
    ...Fonts.style.small,
    paddingHorizontal: 0,
  },
});

export default styles;
