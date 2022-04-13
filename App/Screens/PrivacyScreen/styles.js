import { StyleSheet } from 'react-native';
import { Alignment } from '../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    width: '100%',
    ...Alignment.Plarge,
    ...Alignment.PTxLarge,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
