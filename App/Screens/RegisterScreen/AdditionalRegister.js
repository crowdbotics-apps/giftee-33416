import React, { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColoredButton, FeedbackModal, TextDefault } from '../../Components';
import { Alignment } from '../../Theme';
import styles from './styles';

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

function AdditionalRegister() {
  const additionalRef = useRef();
  const [formData, setFormData] = useState({});
  const [modal, setModal] = useState(false);
  const [openHobby, setOpenHobby] = useState(false);
  const [openTraits, setOpenTraits] = useState(false);
  const [openReligion, setOpenReligion] = useState(false);
  const [openOccupation, setOpenOccupation] = useState(false);
  const [openNationality, setOpenNationality] = useState(false);

  const onNationalityOpen = useCallback(() => {
    setOpenOccupation(false);
    setOpenReligion(false);
    setOpenTraits(false);
    setOpenHobby(false);
    setOpenNationality(prev => !prev);
  }, []);

  const onOccupationOpen = useCallback(() => {
    setOpenReligion(false);
    setOpenTraits(false);
    setOpenHobby(false);
    setOpenNationality(false);
    setOpenOccupation(prev => !prev);
  }, []);
  const onTraitOpen = useCallback(() => {
    setOpenOccupation(false);
    setOpenReligion(false);
    setOpenHobby(false);
    setOpenNationality(false);
    setOpenTraits(prev => !prev);
  }, []);
  const onReligionOpen = useCallback(() => {
    setOpenOccupation(false);
    setOpenTraits(false);
    setOpenHobby(false);
    setOpenNationality(false);
    setOpenReligion(prev => !prev);
  }, []);

  const onHobbyOpen = useCallback(() => {
    setOpenOccupation(false);
    setOpenTraits(false);
    setOpenNationality(false);
    setOpenReligion(false);
    setOpenHobby(prev => !prev);
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
          <View style={styles.fieldBox}>
            <TextDefault bold style={styles.inputName}>
              Nationality?
            </TextDefault>
            <DropDownPicker
              listMode="SCROLLVIEW"
              showTickIcon={false}
              open={openNationality}
              value={formData?.nationality ?? null}
              items={items}
              setOpen={onNationalityOpen}
              setValue={selectionValue => changePickerValue('nationality', selectionValue())}
              placeholder="Select Nationality"
              dropDownContainerStyle={[styles.dropdownView, Alignment.PBsmall]}
              style={[styles.inputContainerStyle, styles.dropdownView]}
              placeholderStyle={styles.placeholderStyle}
              listItemContainerStyle={Alignment.MHsmall}
              selectedItemContainerStyle={styles.selectedItem}
              selectedItemLabelStyle={styles.selectedLabel}
              props={{
                activeOpacity: 0.7,
              }}
              zIndex={6}
            />
            <TextDefault bold style={[styles.inputName, Alignment.MTmedium]}>
              Religion?
            </TextDefault>
            <DropDownPicker
              listMode="SCROLLVIEW"
              showTickIcon={false}
              open={openReligion}
              value={formData?.religion ?? null}
              items={items}
              setOpen={onReligionOpen}
              setValue={selectionValue => changePickerValue('religion', selectionValue())}
              placeholder="Select Religion"
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
            />

            <TextDefault bold style={[styles.inputName, Alignment.MTmedium]}>
              Occupation
            </TextDefault>
            <DropDownPicker
              listMode="SCROLLVIEW"
              showTickIcon={false}
              open={openOccupation}
              value={formData?.occupation ?? null}
              items={items}
              setOpen={onOccupationOpen}
              setValue={selectionValue => changePickerValue('occupation', selectionValue())}
              placeholder="Select Occupation"
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
            />
            <TextDefault bold style={[styles.inputName, Alignment.MTmedium]}>
              Personality traits?
            </TextDefault>
            <DropDownPicker
              listMode="SCROLLVIEW"
              showTickIcon={false}
              open={openTraits}
              value={formData?.trait ?? null}
              items={items}
              setOpen={onTraitOpen}
              placeholder="Select Personal Traits"
              setValue={selectionValue => changePickerValue('trait', selectionValue())}
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
            />
            <TextDefault bold style={[styles.inputName, Alignment.MTmedium]}>
              Interests and hobbies?
            </TextDefault>
            <DropDownPicker
              listMode="SCROLLVIEW"
              showTickIcon={false}
              open={openHobby}
              value={formData?.hobby ?? null}
              items={items}
              setOpen={onHobbyOpen}
              placeholder="Select Hobbies"
              setValue={selectionValue => changePickerValue('hobby', selectionValue())}
              dropDownContainerStyle={[styles.dropdownView, Alignment.PBsmall]}
              style={[styles.inputContainerStyle, styles.dropdownView]}
              placeholderStyle={styles.placeholderStyle}
              listItemContainerStyle={Alignment.MHsmall}
              selectedItemContainerStyle={styles.selectedItem}
              selectedItemLabelStyle={styles.selectedLabel}
              props={{
                activeOpacity: 0.7,
              }}
              zIndex={2}
            />
            <TextDefault bold style={[styles.inputName, Alignment.MTmedium]}>
              Additional keyword (optional)
            </TextDefault>
            <TextInput
              ref={additionalRef}
              style={[styles.inputContainerStyle, styles.dropdownView]}
              placeholder="John Doe"
              placeholderTextColor={'rgba(57, 60, 77, 0.4)'}
              returnKeyType="done"
              autoComplete="name"
            />
            <ColoredButton
              title={'Next'}
              spinner={false}
              viewProps={[Alignment.MVxLarge, { width: '50%', alignSelf: 'center' }]}
              onPress={() => setModal(prev => !prev)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.bottomIcon}>
        <View style={[styles.inactiveIcon, Alignment.MRxSmall]} />
        <View style={styles.activeIcon} />
      </View>
      <FeedbackModal modalVisible={modal} hideModal={() => setModal(prev => !prev)} />
    </SafeAreaView>
  );
}

export default React.memo(AdditionalRegister);
