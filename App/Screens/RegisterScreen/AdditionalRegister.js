import React, { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColoredButton, FeedbackModal, TextDefault } from '../../Components';
import Dropdown from '../../Components/Dropdown';
import { Alignment } from '../../Theme';
import {
  itemsNationality,
  itemsReligion,
  itemsOccupations,
  itemsPersonality,
  mainCategories,
  subCategories,
} from './data';
import styles from './styles';

function AdditionalRegister() {
  const additionalRef = useRef();
  const [formData, setFormData] = useState({});
  const [modal, setModal] = useState(false);
  const [dropdowdOpen, setDropdownOpen] = useState('');

  const onDropDownOpen = useCallback(
    name => {
      if (dropdowdOpen === name) {
        setDropdownOpen('');
      } else {
        setDropdownOpen(name);
      }
    },
    [dropdowdOpen],
  );

  const changePickerValue = useCallback((name, pickerValue) => {
    if (name) {
      setFormData(prev => ({ ...prev, [name]: pickerValue }));
    }
  }, []);

  const DropdownList = [
    {
      title: 'Nationality?',
      items: itemsNationality,
      placeholder: 'Select Nationality',
      valueField: 'nationality',
    },
    {
      title: 'Religion?',
      items: itemsReligion,
      placeholder: 'Select Religion',
      valueField: 'religion',
    },
    {
      title: 'Occupation',
      items: itemsOccupations,
      placeholder: 'Select Occupation',
      valueField: 'occupation',
    },
    {
      title: 'Personality traits?',
      items: itemsPersonality,
      placeholder: 'Select Personal traits',
      valueField: 'personality_traits',
    },
    {
      title: 'Types of Interests and hobbies?',
      items: mainCategories,
      placeholder: 'Select Type of Hobby',
      valueField: 'hobbiesType',
    },
    {
      title: 'Interests and hobbies?',
      items: subCategories[formData?.hobbiesType] || [],
      placeholder: 'Select Interests and hobbies',
      valueField: 'hobbies',
    },
  ];

  return (
    <SafeAreaView style={[styles.flex, styles.background]}>
      <KeyboardAwareScrollView
        style={[styles.flex, styles.background]}
        contentContainerStyle={styles.scrollContent}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.fieldBoxx}>
            {DropdownList.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TextDefault bold style={styles.inputName}>
                    {item.title}
                  </TextDefault>
                  <Dropdown
                    items={item.items}
                    placeholder={item.placeholder}
                    open={item.valueField === dropdowdOpen}
                    setOpen={() => onDropDownOpen(item.valueField)}
                    value={formData?.[item.valueField] ?? null}
                    setValue={value => changePickerValue(item.valueField, value())}
                    zIndex={DropdownList.length - index}
                    searchable={true}
                  />
                </React.Fragment>
              );
            })}

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
          </View>
          <ColoredButton
            title={'Next'}
            spinner={false}
            viewProps={[Alignment.MVxLarge, { width: '50%', alignSelf: 'center' }]}
            onPress={() => setModal(prev => !prev)}
          />
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
