import React from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Alignment, COLORS } from 'theme';

const Dropdown = props => {
  return (
    <DropDownPicker
      listMode="SCROLLVIEW"
      showTickIcon={false}
      placeholder="Select Item"
      dropDownContainerStyle={[styles.dropdownView, Alignment.PBsmall]}
      style={[styles.inputContainerStyle, styles.dropdownView]}
      placeholderStyle={styles.placeholderStyle}
      listItemContainerStyle={Alignment.MHsmall}
      selectedItemContainerStyle={styles.selectedItem}
      selectedItemLabelStyle={styles.selectedLabel}
      props={{
        activeOpacity: 0.7,
      }}
      {...props}
    />
  );
};

export default React.memo(Dropdown);

const styles = StyleSheet.create({
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
});
