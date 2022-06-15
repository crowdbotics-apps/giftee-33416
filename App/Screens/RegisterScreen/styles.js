import { StyleSheet } from 'react-native';
import { scale } from '../../Config/CustomFunction';
import { Alignment, COLORS, Fonts } from '../../Theme';

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
    ...Alignment.PTxLarge,
  },
  container: {
    flexGrow: 1,
    width: '100%',
    ...Alignment.Psmall,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeader: {
    flexShrink: 1,
  },
  giftImage: {
    right: -30,
    top: -20,
    alignSelf: 'center',
    width: scale(80),
  },
  fieldBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  fieldBoxx: {
    width: '100%',
  },
  inputName: {
    color: COLORS.seconday,
    marginTop: 10,
    ...Fonts.style.link,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownView: {
    borderWidth: 0,
    backgroundColor: COLORS.primaryGrey,
  },
  inputContainerStyle: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    color: COLORS.primaryText,
    ...Alignment.MTsmall,
  },
  placeholderStyle: {
    color: COLORS.primaryText,
    opacity: 0.6,
  },
  selectedItem: {
    borderRadius: 10,
    backgroundColor: COLORS.seconday,
  },
  selectedLabel: {
    color: COLORS.white,
  },
  bottomIcon: {
    justifyContent: 'center',
    flexDirection: 'row',
    ...Alignment.MVxSmall,
  },
  activeIcon: {
    height: 8,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.seconday,
  },
  inactiveIcon: {
    height: 8,
    width: 8,
    borderRadius: 10,
    backgroundColor: COLORS.primaryGrey,
  },
  dropdownSearchInput: {
    color: COLORS.primaryText,
    borderColor: COLORS.lineColor,
  },
  dropdownSearchView: {
    borderBottomColor: 'transparent',
  },
});

export default styles;
