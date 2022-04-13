import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  drawerItem: {
    backgroundColor: 'transparent',
  },
  textView: {
    backgroundColor: 'red',
  },
  headerView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  leftButton: {
    position: 'absolute',
    width: 25,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: '5%',
  },
});

export default styles;
