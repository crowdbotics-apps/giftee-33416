import { filter, map } from 'lodash';
import React, { useMemo, useRef, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import CloseIcon from '../../Assest/Svg/CloseIcon';
import GiftBig from '../../Assest/Svg/GiftBig';
import GiftSmall from '../../Assest/Svg/GiftSmall';
import PlusIcon from '../../Assest/Svg/PlusIcon';
import { IconButton, MainWrapper, TextDefault } from '../../Components';
import { Alignment, COLORS } from '../../Theme';
import styles from './styles';

function FilterScreen() {
  const nameRef = useRef(null);
  const [filters, setFilters] = useState([]);

  const headerView = useMemo(
    () => (
      <View style={styles.headerView}>
        <TextDefault medium style={styles.headerTitle}>
          Add & Filter results
        </TextDefault>
        <View style={styles.inputContainerStyle}>
          <TextInput
            ref={nameRef}
            style={styles.inputText}
            placeholder="John Doe"
            placeholderTextColor={'rgba(57, 60, 77, 0.4)'}
            returnKeyType="done"
            autoComplete="name"
            onChangeText={e => {
              nameRef.current.value = e;
            }}
          />
          <IconButton
            Icon={<PlusIcon />}
            viewProps={styles.addBtn}
            textView={Alignment.PHmedium}
            onPress={() => {
              if (nameRef.current?.value) {
                setFilters(prev => [...prev, nameRef.current?.value]);
                nameRef.current.value = '';
                nameRef.current?.clear?.();
              }
            }}
          />
        </View>
      </View>
    ),
    [],
  );
  return (
    <MainWrapper headerTitle="Add & Filter results">
      {headerView}
      <ScrollView
        style={styles.flex}
        // alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.flexGrow, Alignment.PHxSmall]}>
        <View style={styles.resultContainer}>
          <TextDefault H5 bold center>
            Jon’s traits & interests
          </TextDefault>
          <View style={[styles.chipContainer, Alignment.MTmedium]}>
            {map(filters, (filterElement, index) => (
              <View key={index} style={styles.chip}>
                <TextDefault description>{filterElement}</TextDefault>
                <TouchableOpacity
                  style={styles.chipClose}
                  onPress={() => {
                    const remvoedItem = filter(filters, element => element !== filterElement);
                    setFilters([...remvoedItem]);
                  }}>
                  <CloseIcon width={18} height={18} color={COLORS.primaryText} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomImage}>
        <GiftSmall style={Alignment.MRmedium} />
        <GiftBig />
      </View>
    </MainWrapper>
  );
}

export default React.memo(FilterScreen);
