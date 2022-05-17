import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Joker from '../../Assest/Svg/Joker';
import { ColoredButton, LinkButton, MainWrapper, TextDefault } from '../../Components';
import { ICONS_NAME, NAVIGATION_SCREEN } from '../../Config/NavigationConstant';
import { Alignment, COLORS } from '../../Theme';
import styles from './styles';

function LoginScreen() {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();

  return (
    <MainWrapper headerTitle="Sign In" leftIcon={ICONS_NAME.BACK}>
      <ScrollView style={styles.flex} contentContainerStyle={styles.scrollContent}>
        <TextDefault description center style={Alignment.MBxLarge}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint{' '}
        </TextDefault>

        <View style={[styles.row, styles.center, Alignment.MVxLarge]}>
          <TouchableOpacity disabled={false} style={Alignment.PHxSmall}>
            <View style={[styles.iconBox, styles.center]}>
              {true && <Ionicons name={'checkmark-sharp'} size={20} color={COLORS.seconday} />}
            </View>
          </TouchableOpacity>
          <View style={[styles.row, styles.conditionView]}>
            <TextDefault description style={Alignment.MRxSmall}>
              {'Agree to'}
            </TextDefault>
            <LinkButton
              title={'Terms and Conditions'}
              disabled={false}
              btnStyle={styles.registerLink}
              textprops={styles.registerText}
              onPress={() => navigation.navigate(NAVIGATION_SCREEN.termScreen, { headerIcon: ICONS_NAME.BACK })}
            />
            <TextDefault description>{' and '}</TextDefault>
            <LinkButton
              title={'Privacy Policy.'}
              disabled={false}
              btnStyle={styles.registerLink}
              textprops={styles.registerText}
              onPress={() => navigation.navigate(NAVIGATION_SCREEN.termScreen, { headerIcon: ICONS_NAME.BACK })}
            />
          </View>
        </View>
        <View style={Alignment.MVxLarge}>
          <ColoredButton
            title={'Sign In via Google'}
            spinner={false}
            viewProps={[Alignment.MVsmall]}
            textIcon={'google'}
            // onPress={handleSubmit(submitAction)}
          />
          <ColoredButton
            title={'Sign In via Apple'}
            spinner={false}
            viewProps={[Alignment.MVsmall]}
            textIcon={'apple'}
            // onPress={handleSubmit(submitAction)}
          />
          <ColoredButton
            title={'Sign In via Facebook'}
            spinner={false}
            viewProps={[Alignment.MVsmall]}
            textIcon={'facebook'}
            // onPress={handleSubmit(submitAction)}
          />
        </View>
      </ScrollView>
      <View style={[styles.bottomImage, { bottom: -inset.bottom }]}>
        <Joker />
      </View>
    </MainWrapper>
  );
}

export default React.memo(LoginScreen);
