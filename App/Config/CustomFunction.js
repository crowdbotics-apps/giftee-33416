import { Alert, Linking } from 'react-native';

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
