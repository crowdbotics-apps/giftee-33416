import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme';

const styles = StyleSheet.create({
  outerView: {
    position: 'absolute',
    width: '100%',
    height: '70%',
    top: '15%',
    left: 10,
    bottom: 0,
    backgroundColor: 'rgba(61, 65, 112, 1)',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
  innerView: {
    position: 'absolute',
    width: '100%',
    height: '75%',
    top: '12.5%',
    left: 15,
    backgroundColor: 'rgba(99, 103, 150, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
  animatedView: {
    flex: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 15,
  },
});

export default styles;
