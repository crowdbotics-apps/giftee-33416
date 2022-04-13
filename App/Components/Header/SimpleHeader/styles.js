import { StyleSheet } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  iconsWidth: {
    width: 50,
  },
  headerContainer: {
    width: '100%',
    borderBottomWidth: 0,
    backgroundColor: COLORS.primary,
    borderBottomColor: COLORS.lineColor,
  },
  headerRow: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  leftButton: {
    width: 30,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Alignment.PHsmall,
  },
});

export default styles;
