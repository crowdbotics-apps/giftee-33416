import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Platform, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import CutGift from '../../Assest/Svg/CutGift';
import { ColoredButton, TextDefault } from '../../Components';
import { NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import { Alignment } from '../../Theme';
import { FONTS_NAME } from '../../Theme/Fonts';
import { itemsOccasion, itemsAge, itemsSex, itemsFamily } from './data';
import styles from './styles';

const isAndroid = Platform.OS === 'android';

function RegisterScreen() {
  const navigation = useNavigation();
  const [openOccasion, setOpenOccasion] = useState(false);
  const [openAge, setOpenAge] = useState(false);
  const [openSex, setOpenSex] = useState(false);

  const [openFamily, setOpenFamily] = useState(false);
  const [formData, setFormData] = useState({});

  const onOccasionOpen = useCallback(() => {
    setOpenAge(false);
    setOpenSex(false);
    setOpenFamily(false);
    setOpenOccasion(prev => !prev);
  }, []);

  const onAgeOpen = useCallback(() => {
    setOpenSex(false);
    setOpenFamily(false);
    setOpenOccasion(false);
    setOpenAge(prev => !prev);
  }, []);
  const onFamilyOpen = useCallback(() => {
    setOpenAge(false);
    setOpenSex(false);
    setOpenOccasion(false);
    setOpenFamily(prev => !prev);
  }, []);
  const onSexOpen = useCallback(() => {
    setOpenAge(false);
    setOpenFamily(false);
    setOpenOccasion(false);
    setOpenSex(prev => !prev);
  }, []);

  const changePickerValue = useCallback((name, pickerValue) => {
    console.log(name, '=> ', pickerValue);
    if (name) {
      setFormData(prev => ({ ...prev, [name]: pickerValue }));
    }
  }, []);

  return (
    <SafeAreaView style={[styles.flex, styles.background]}>
      <KeyboardAwareScrollView
        style={[styles.flex, styles.background]}
        contentContainerStyle={styles.scrollContent}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.headerBox}>
            <View style={styles.leftHeader}>
              <TextDefault H3 bold numberOfLines={1} style={{ fontFamily: FONTS_NAME.AbrilFatface.bold }}>
                Let’s get started!
              </TextDefault>
              <TextDefault light link style={Alignment.MTmedium}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
              </TextDefault>
            </View>
            <View style={styles.giftImage}>
              <CutGift />
            </View>
          </View>
          <View style={styles.fieldBox}>
            <TextDefault bold style={styles.inputName}>
              What is the occasion?
            </TextDefault>
            <DropDownPicker
              listMode="SCROLLVIEW"
              searchPlaceholder="Search..."
              showTickIcon={false}
              open={openOccasion}
              value={formData?.ocassion ?? null}
              items={itemsOccasion}
              setOpen={onOccasionOpen}
              setValue={selectionValue => changePickerValue('ocassion', selectionValue())}
              placeholder="Select an Occasion"
              searchContainerStyle={styles.dropdownSearchView}
              searchTextInputStyle={styles.dropdownSearchInput}
              dropDownContainerStyle={[styles.dropdownView, Alignment.PBsmall]}
              style={[styles.inputContainerStyle, styles.dropdownView]}
              placeholderStyle={styles.placeholderStyle}
              listItemContainerStyle={Alignment.MHsmall}
              selectedItemContainerStyle={styles.selectedItem}
              selectedItemLabelStyle={styles.selectedLabel}
              props={{
                activeOpacity: 0.7,
              }}
              zIndex={5}
              searchable={true}
            />
            <TextDefault bold style={[styles.inputName, Alignment.MTmedium]}>
              Who is the gift for?
            </TextDefault>
            <TextInput
              style={[styles.inputContainerStyle, styles.dropdownView]}
              placeholder="John Doe"
              placeholderTextColor={'rgba(57, 60, 77, 0.4)'}
              returnKeyType="done"
              autoComplete="name"
              onChangeText={e => changePickerValue('name', e)}
            />
            <View style={[styles.inputRow, Alignment.MTmedium, !isAndroid && { zIndex: 4 }]}>
              <View style={{ flex: 1 / 2.2 }}>
                <TextDefault bold style={styles.inputName}>
                  Age range?
                </TextDefault>
                <DropDownPicker
                  listMode="SCROLLVIEW"
                  showTickIcon={false}
                  open={openAge}
                  value={formData?.age ?? null}
                  items={itemsAge}
                  setOpen={onAgeOpen}
                  setValue={selectionValue => changePickerValue('age', selectionValue())}
                  placeholder="Select Age"
                  dropDownContainerStyle={[styles.dropdownView, Alignment.PBsmall]}
                  style={[styles.inputContainerStyle, styles.dropdownView]}
                  placeholderStyle={styles.placeholderStyle}
                  listItemContainerStyle={Alignment.MHsmall}
                  selectedItemContainerStyle={styles.selectedItem}
                  selectedItemLabelStyle={styles.selectedLabel}
                  props={{
                    activeOpacity: 0.7,
                  }}
                  zIndex={4}
                  searchable={true}
                />
              </View>
              <View style={{ flex: 1 / 2.2 }}>
                <TextDefault bold style={styles.inputName}>
                  Sex type?
                </TextDefault>
                <DropDownPicker
                  listMode="SCROLLVIEW"
                  showTickIcon={false}
                  open={openSex}
                  value={formData?.sex ?? null}
                  items={itemsSex}
                  setOpen={onSexOpen}
                  setValue={selectionValue => changePickerValue('sex', selectionValue())}
                  placeholder="Select Sex"
                  dropDownContainerStyle={[styles.dropdownView, Alignment.PBsmall]}
                  style={[styles.inputContainerStyle, styles.dropdownView]}
                  placeholderStyle={styles.placeholderStyle}
                  listItemContainerStyle={Alignment.MHsmall}
                  selectedItemContainerStyle={styles.selectedItem}
                  selectedItemLabelStyle={styles.selectedLabel}
                  props={{
                    activeOpacity: 0.7,
                  }}
                  zIndex={4}
                  searchable={true}
                />
              </View>
            </View>
            <TextDefault bold style={[styles.inputName, Alignment.MTmedium]}>
              Family status?
            </TextDefault>
            <DropDownPicker
              listMode="SCROLLVIEW"
              showTickIcon={false}
              open={openFamily}
              value={formData?.family ?? null}
              items={itemsFamily}
              setOpen={onFamilyOpen}
              placeholder="Select Family Status"
              setValue={selectionValue => changePickerValue('family', selectionValue())}
              dropDownContainerStyle={[styles.dropdownView, Alignment.PBsmall]}
              style={[styles.inputContainerStyle, styles.dropdownView]}
              placeholderStyle={styles.placeholderStyle}
              listItemContainerStyle={Alignment.MHsmall}
              selectedItemContainerStyle={styles.selectedItem}
              selectedItemLabelStyle={styles.selectedLabel}
              props={{
                activeOpacity: 0.7,
              }}
              zIndex={3}
              searchable={true}
            />
            <ColoredButton
              title={'Next'}
              spinner={false}
              disabled={!(formData?.sex && formData?.name)}
              viewProps={[Alignment.MVxLarge, { width: '50%', alignSelf: 'center' }]}
              onPress={() => navigation.navigate(NAVIGATION_SCREEN.AdditionalRegister)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.bottomIcon}>
        <View style={[styles.activeIcon, Alignment.MRxSmall]} />
        <View style={styles.inactiveIcon} />
      </View>
    </SafeAreaView>
  );
}

export default React.memo(RegisterScreen);
