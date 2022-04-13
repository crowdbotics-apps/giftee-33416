import { StyleSheet } from 'react-native';
import { Alignment, COLORS } from '../../../Theme';

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
    ...Alignment.PHmedium,
    ...Alignment.PTlarge,
  },
});

export default styles;
