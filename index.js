/**
 * @format
 */

// Position is importatn otherwise Reactotron may not working as expected
import 'react-native-gesture-handler';
import './App/Config/ReactotronConfig';
import './App/Config/YelloBox';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
