import { StyleSheet, Dimensions } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';
import { FONTS_NAME } from '../../../Theme/Fonts';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  inputName: {
    color: COLORS.seconday,
  },
  container: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    backgroundColor: 'rgba(58, 60, 73, 0.5)',
  },
  viewContainer: {
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primaryGrey,
  },
  Ionicons: {
    alignSelf: 'flex-end',
  },
  headerTitleBox: {
    width: '100%',
    justifyContent: 'center',
    ...Alignment.PVsmall,
  },
  infoContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    ...Alignment.PVmedium,
    ...Alignment.PHmedium,
  },
  inputContainerStyle: {
    height: 100,
    textAlignVertical: 'top',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    color: COLORS.primaryText,
    backgroundColor: COLORS.rippleColor,
    opacity: 0.6,
    ...Alignment.MTsmall,
    paddingTop: 10,
    ...Alignment.Pmedium,
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...Alignment.MTlarge,
  },
  radionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    // fontFamily: FONTS_NAME.GothamRounded.medium,
    ...Alignment.MRxSmall,
  },
});

export default styles;
