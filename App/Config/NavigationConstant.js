import React from 'react';
import GiftIcon from '../Assest/Svg/GiftIcon';
import FileIcon from '../Assest/Svg/FileIcon';
import FilterIcon from '../Assest/Svg/FilterIcon';
import ThumbIcon from '../Assest/Svg/ThumbIcon';
import UserPlusIcon from '../Assest/Svg/UserPlusIcon';
import ShareIcon from '../Assest/Svg/ShareIcon';
import ShieldIcon from '../Assest/Svg/ShieldIcon';
import ClockIcon from '../Assest/Svg/ClockIcon';

const ICONS_NAME = {
  BACK: 'BACK',
  CROSS: 'CROSS',
  DRAWER: 'DRAWER',
};

const MODAL_TYPE = {
  GIFTEE: 'GIFTEE',
  SHARE: 'SHARE',
  FEEDBACK: 'FEEDBACK',
};

const NAVIGATION_SCREEN = {
  authStack: 'AuthStack',
  homeStack: 'HomeStack',
  termScreen: 'TermScreen',
  homeScreen: 'HomeScreen',
  drawerStack: 'DrawerStack',
  loginScreen: 'LoginScreen',
  primaryStack: 'PrimaryStack',
  splashScreen: 'SplashScreen',
  filterScreen: 'FilterScreen',
  historyScreen: 'HistoryScreen',
  privacyScreen: 'PrivacyScreen',
  homeGridScreen: 'HomeGridScreen',
  homeSwipeScreen: 'HomeSwipeScreen',
  registerScreen: 'RegistrationScreen',
  AdditionalRegister: 'additionalRegister',
  specificHistoryScreen: 'SpecificHistoryScreen',
};

const SIDE_MENU = [
  {
    id: 0,
    title: 'New Giftee',
    icon: props => <GiftIcon {...props} />,
    modal: MODAL_TYPE.GIFTEE,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 1,
    title: 'Add & Filter results',
    icon: props => <FilterIcon {...props} />,
    navigateTo: NAVIGATION_SCREEN.filterScreen,
  },
  {
    id: 2,
    title: 'Feedback',
    icon: props => <ThumbIcon {...props} />,
    modal: MODAL_TYPE.FEEDBACK,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 3,
    title: 'Login',
    icon: props => <UserPlusIcon {...props} />,
    // navigateTo: NAVIGATION_SCREEN.loginScreen,
  },
  {
    id: 4,
    title: 'Share the App',
    icon: props => <ShareIcon {...props} />,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 5,
    title: 'Terms & Conditions',
    icon: props => <FileIcon {...props} />,
    navigateTo: NAVIGATION_SCREEN.termScreen,
  },
  {
    id: 6,
    title: 'Privacy Policy',
    icon: props => <ShieldIcon {...props} />,
    navigateTo: NAVIGATION_SCREEN.privacyScreen,
  },
  {
    id: 7,
    title: 'Share results',
    icon: props => <ShareIcon {...props} />,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 8,
    title: 'History',
    icon: props => <ClockIcon {...props} />,
    navigateTo: NAVIGATION_SCREEN.historyScreen,
  },
];

export { MODAL_TYPE, ICONS_NAME, NAVIGATION_SCREEN, SIDE_MENU };
