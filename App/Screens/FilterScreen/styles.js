import { StyleSheet } from 'react-native';
import { Alignment, COLORS } from '../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    ...Alignment.MTsmall,
    ...Alignment.MBmedium,
  },
  headerTitle: {
    color: COLORS.seconday,
    ...Alignment.PHxSmall,
  },
  inputContainerStyle: {
    height: 50,
    borderWidth: 0,
    paddingLeft: 10,

    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: COLORS.primaryGrey,
    flexDirection: 'row',
    ...Alignment.MVsmall,
  },
  inputText: {
    flex: 1,
  },
  addBtn: {
    height: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    ...Alignment.MHxSmall,
  },
  resultContainer: {
    backgroundColor: COLORS.primaryGrey,
    borderRadius: 15,
    minHeight: 100,
    ...Alignment.PVlarge,
    ...Alignment.PHmedium,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...Alignment.PHmedium,
  },
  chip: {
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    ...Alignment.MBsmall,
    ...Alignment.PxSmall,
    ...Alignment.PLmedium,
    ...Alignment.MRxMedium,
  },
  chipClose: {
    ...Alignment.MLxSmall,
    ...Alignment.PRxSmall,
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
