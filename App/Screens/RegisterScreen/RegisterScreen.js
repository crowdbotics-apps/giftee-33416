import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Platform, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import CutGift from '../../Assest/Svg/CutGift';
import { ColoredButton, TextDefault } from '../../Components';
import { NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import { Alignment } from '../../Theme';
import { FONTS_NAME } from '../../Theme/Fonts';
import { itemsOccasion, itemsAge, itemsSex, itemsFamily } from './data';
import Dropdown from '../../Components/Dropdown';
// import { Alignment } from '../../Theme';
import styles from './styles';

const isAndroid = Platform.OS === 'android';

function RegisterScreen() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});

  const [dropdowdOpen, setDropdownOpen] = useState('');

  const DropdownList = [
    {
      title: 'What is the occasion?',
      items: itemsOccasion,
      placeholder: 'Select an Occasion',
      valueField: 'occasion',
      componentType: 'drop_down',
    },
    {
      title: 'Who is the gift for?',
      placeholder: 'Johon Doe',
      valueField: '',
      componentType: 'input_box',
    },
    {
      title: 'Age range?',
      items: itemsAge,
      placeholder: 'Select Age',
      valueField: 'age',
      componentType: 'drop_down',
    },
    {
      title: 'Sex Type',
      items: itemsSex,
      placeholder: 'Select Sex',
      valueField: 'sex',
      componentType: 'drop_down',
    },
    {
      title: 'Family Status?',
      items: itemsFamily,
      placeholder: 'Select Family Status',
      valueField: 'family',
      componentType: 'drop_down',
    },
  ];

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

  return (
    <SafeAreaView style={[styles.flex, styles.background]}>
      <KeyboardAwareScrollView
        style={[styles.flex, styles.background]}
        contentContainerStyle={styles.scrollContent}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.headerBox}>
            <View style={styles.leftHeader}>
              <TextDefault H4 bold numberOfLines={1} style={{ fontFamily: FONTS_NAME.AbrilFatface.bold }}>
                Let’s get started!
              </TextDefault>
              <TextDefault light description style={Alignment.MTmedium}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
              </TextDefault>
            </View>
            <View style={styles.giftImage}>
              <CutGift />
            </View>
          </View>
          <View style={styles.fieldBox}>
            {DropdownList.map((item, index) => {
              const isSex = item.valueField === 'sex';
              const isAge = item.valueField === 'age';
              return (
                <View
                  key={index}
                  style={isSex || isAge ? { width: '48%', marginLeft: isSex ? '4%' : 0 } : { width: '100%' }}>
                  <TextDefault bold style={styles.inputName}>
                    {item.title}
                  </TextDefault>

                  {item?.componentType === 'input_box' ? (
                    <TextInput
                      style={[styles.inputContainerStyle, styles.dropdownView]}
                      placeholder={item.placeholder}
                      placeholderTextColor={'rgba(57, 60, 77, 0.4)'}
                      returnKeyType="done"
                      autoComplete="name"
                      onChangeText={e => changePickerValue('name', e)}
                    />
                  ) : (
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
                  )}
                </View>
              );
            })}
          </View>
          <ColoredButton
            title={'Next'}
            spinner={false}
            disabled={!(formData?.sex && formData?.name)}
            viewProps={[Alignment.MVxLarge, { width: '50%', alignSelf: 'center' }]}
            onPress={() => navigation.navigate(NAVIGATION_SCREEN.AdditionalRegister)}
          />
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
