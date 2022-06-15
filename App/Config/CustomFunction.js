import { Alert, Dimensions, Linking } from 'react-native';
const { width } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

export async function openLink(actualURL) {
  try {
    const supported = await Linking.canOpenURL(actualURL);
    if (supported) {
      await Linking.openURL(actualURL);
    } else {
      Alert.alert('Error opening URL');
    }
  } catch (err) {
    Alert.alert('Service is not availble on this device.');
  }
}

export const scale = size => (width / guidelineBaseWidth) * size;
