import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Splash1 from '../../Assest/Svg/Splash1';
import Splash2 from '../../Assest/Svg/Splash2';
import { TextDefault } from '../../Components';
import { NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import { Alignment } from '../../Theme';
import styles from './styles';

function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NAVIGATION_SCREEN.registerScreen);
    }, 1000);
  });

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={[styles.flex, styles.background]}>
      <View style={[styles.flex, styles.background, styles.scrollContent]}>
        <TextDefault bold center style={styles.title}>
          Giftee
        </TextDefault>
        <TextDefault H4 medium center style={styles.blueText}>
          Lorem Ipsum
        </TextDefault>
        <TextDefault link center style={Alignment.MVmedium}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </TextDefault>
        <View style={styles.bottomImage}>
          <Splash1 style={Alignment.MRmedium} />
          <Splash2 />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(SplashScreen);
