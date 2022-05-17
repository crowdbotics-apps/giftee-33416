import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { TextDefault } from '../../Text';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alignment, COLORS } from '../../../Theme';
import { ColoredButton } from '../../Buttons';
import { NAVIGATION_SCREEN } from '../../../Config/NavigationConstant';
import CloseIcon from '../../../Assest/Svg/CloseIcon';
import { FONTS_NAME } from '../../../Theme/Fonts';

function FeedbackModal(props) {
  const navigation = useNavigation();
  const [radioBtn, setRadioBtn] = useState(true);
  const { modalVisible = false, hideModal = () => null } = props;

  return (
    <Modal
      backdropOpacity={1}
      style={[styles.container]}
      isVisible={modalVisible}
      useNativeDriver={true}
      hasBackdrop={false}
      onBackButtonPress={hideModal}
      hideModalContentWhileAnimating={true}
      useNativeDriverForBackdrop={true}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      animationInTiming={100}
      animationOutTiming={50}>
      <View style={styles.viewContainer}>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.Ionicons} onPress={hideModal}>
            <CloseIcon color={COLORS.primaryText} />
          </TouchableOpacity>
          <View style={styles.headerTitleBox}>
            <TextDefault H4 medium center style={{ fontFamily: FONTS_NAME.AbrilFatface.bold }}>
              Was that easy?
            </TextDefault>
            <View style={styles.radioRow}>
              <TouchableOpacity onPress={() => setRadioBtn(prev => !prev)} style={styles.radionBtn}>
                <TextDefault link style={styles.radioText}>
                  Yes
                </TextDefault>
                <Ionicons name={radioBtn ? 'radio-button-on' : 'radio-button-off'} size={20} color={COLORS.seconday} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setRadioBtn(prev => !prev)} style={styles.radionBtn}>
                <TextDefault link style={styles.radioText}>
                  No
                </TextDefault>
                <Ionicons name={!radioBtn ? 'radio-button-on' : 'radio-button-off'} size={20} color={COLORS.seconday} />
              </TouchableOpacity>
            </View>
            <TextDefault bold link style={[styles.inputName, Alignment.MTmedium]}>
              Please add comment
            </TextDefault>
            <TextInput
              placeholder="Type Here"
              multiline={true}
              style={styles.inputContainerStyle}
              placeholderTextColor={'rgba(57, 60, 77, 0.4)'}
              returnKeyType="done"
            />
          </View>
          <ColoredButton
            title={'Submit'}
            spinner={false}
            viewProps={[Alignment.MVxLarge, { width: '60%', alignSelf: 'center' }]}
            onPress={() => {
              hideModal();
              navigation.navigate(NAVIGATION_SCREEN.homeScreen);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
export default React.memo(FeedbackModal);
