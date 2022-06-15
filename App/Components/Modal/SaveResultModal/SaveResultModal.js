/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { NAVIGATION_SCREEN } from '../../../Config/NavigationConstant';
import { Alignment } from '../../../Theme';
import { FONTS_NAME } from '../../../Theme/Fonts';
import { ColoredButton } from '../../Buttons';
import { TextDefault } from '../../Text';
import { SignupModal } from '../SignupModal';
import styles from './styles';

const isLoggedIn = false;

function SaveResultModal(props) {
  const navigation = useNavigation();
  const [signupModal, setSignupModal] = useState(false);
  const { modalVisible = false, hideModal = () => null } = props;

  const navigateToGiftee = useCallback(() => {
    hideModal();
    navigation.navigate(NAVIGATION_SCREEN.registerScreen);
  }, []);
  return (
    <>
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
            <View style={styles.headerTitleBox}>
              <TextDefault medium center style={{ fontFamily: FONTS_NAME.AbrilFatface.bold }}>
                Save results?
              </TextDefault>
            </View>
            <View style={styles.btnRow}>
              <ColoredButton
                title={'Save'}
                spinner={false}
                viewProps={[{ width: '40%', alignSelf: 'center' }]}
                onPress={() => {
                  if (isLoggedIn) {
                    navigateToGiftee();
                  } else {
                    hideModal();
                    setTimeout(() => {
                      setSignupModal(true);
                    }, 400);
                    // navigation.navigate(NAVIGATION_SCREEN.loginScreen);
                  }
                }}
              />

              <ColoredButton
                title={'No Thanks'}
                spinner={false}
                viewProps={styles.cancelBtn}
                textView={Alignment.PHxSmall}
                textprops={styles.cancelBtnText}
                onPress={navigateToGiftee}
              />
            </View>
          </View>
        </View>
      </Modal>
      <SignupModal modalVisible={signupModal} hideModal={() => setSignupModal(false)} />
    </>
  );
}
export default React.memo(SaveResultModal);
