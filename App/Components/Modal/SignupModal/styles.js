import { StyleSheet, Dimensions } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';
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
    width: '75%',
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
    ...Alignment.MBxLarge,
  },
  infoContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    ...Alignment.PVmedium,
    ...Alignment.PHmedium,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Alignment.MVxLarge,
  },
  cancelBtn: {
    width: '40%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  cancelBtnText: {
    color: COLORS.error,
    paddingHorizontal: 0,
  },
});

export default styles;
