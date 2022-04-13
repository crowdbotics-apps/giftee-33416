import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DebugConfig from './DebugConfig';
import { NativeModules } from 'react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';

if (DebugConfig.useReactotron) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.setAsyncStorageHandler?.(AsyncStorage)
    .configure({ name: 'App', host: scriptHostname })
    .useReactNative()
    .use(reduxPlugin())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear?.();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
} else {
  const noop = () => undefined;
  const ouroboros = () => console.tron;
  console.tron = {
    overlay: App => {},
    storybookSwitcher: App => Root => Root,
    startTimer: () => () => 0,
    send: noop,
    apiResponse: noop,
    debug: noop,
    stateActionComplete: noop,
    stateValuesResponse: noop,
    stateKeysResponse: noop,
    stateValuesChange: noop,
    stateBackupResponse: noop,
    repl: noop,
    warn: noop,
    configure: ouroboros,
    connect: ouroboros,
    use: ouroboros,
    useReactNative: ouroboros,
    close: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
    image: noop,
    reportError: noop,
    benchmark: name => ({ step: noop, stop: noop, last: noop }),
    onCustomCommand: config => noop,
  };
}
