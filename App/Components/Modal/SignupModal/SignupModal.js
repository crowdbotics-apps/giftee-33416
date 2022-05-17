import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import CloseIcon from '../../../Assest/Svg/CloseIcon';
import { NAVIGATION_SCREEN } from '../../../Config/NavigationConstant';
import { COLORS } from '../../../Theme';
import { FONTS_NAME } from '../../../Theme/Fonts';
import { ColoredButton } from '../../Buttons';
import { TextDefault } from '../../Text';
import styles from './styles';

function SignupModal(props) {
  const navigation = useNavigation();
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
            <TextDefault H5 medium center style={{ fontFamily: FONTS_NAME.AbrilFatface.bold }}>
              Your registry won’t be saved if you do not Sign Up
            </TextDefault>
          </View>
          <ColoredButton
            title={'Sign Up'}
            spinner={false}
            viewProps={[{ width: '65%', alignSelf: 'center' }]}
            onPress={() => {
              hideModal();
              navigation.navigate(NAVIGATION_SCREEN.loginScreen);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
export default React.memo(SignupModal);
