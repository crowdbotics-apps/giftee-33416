import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Splash1 from '../../Assest/Svg/Splash1';
import Splash2 from '../../Assest/Svg/Splash2';
import { TextDefault } from '../../Components';
import { scale } from '../../Config/CustomFunction';
import { NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import { Alignment, COLORS } from '../../Theme';
import styles from './styles';

function SplashScreen() {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();

  const navigateNext = useCallback(() => {
    navigation.navigate(NAVIGATION_SCREEN.registerScreen);
  }, []);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={[styles.flex, styles.background]}>
      <View style={[styles.flex, styles.background, styles.scrollContent]}>
        <TouchableOpacity activeOpacity={0.7} onPress={navigateNext} style={[styles.btnView, { marginTop: inset.top }]}>
          <Ionicons name="arrow-forward-sharp" color={COLORS.error} size={scale(18)} />
        </TouchableOpacity>
        <View style={{ marginTop: '10%' }}>
          <TextDefault bold center style={styles.title}>
            Giftee
          </TextDefault>
          <TextDefault H5 medium center style={styles.blueText}>
            Lorem Ipsum
          </TextDefault>
          <TextDefault description center style={Alignment.MVmedium}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </TextDefault>
        </View>
        <View style={styles.bottomImage}>
          <Splash1 style={Alignment.MRmedium} />
          <Splash2 />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(SplashScreen);
