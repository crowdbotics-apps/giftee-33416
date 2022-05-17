import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  spinner: {
    height: 'auto',
  },
  mainContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerBackground: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    minWidth: 100,
    minHeight: 100,
    justifyContent: 'center',
    backgroundColor: COLORS.PinkishWhite,
    borderRadius: 10,
  },
});

export default styles;
