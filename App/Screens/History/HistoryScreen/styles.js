import { StyleSheet } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';
import { FONTS_NAME } from '../../../Theme/Fonts';

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
  historyCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryGrey,
    alignItems: 'center',
    borderRadius: 15,
    ...Alignment.Plarge,
    ...Alignment.MBlarge,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  blueText: {
    color: COLORS.seconday,
    fontFamily: FONTS_NAME.AbrilFatface.bold,
  },
  dateText: {
    color: '#393C4D',
    opacity: 0.4,
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
