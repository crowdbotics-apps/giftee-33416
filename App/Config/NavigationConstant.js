const ICONS_NAME = {
  BACK: 'BACK',
  CROSS: 'CROSS',
  DRAWER: 'DRAWER',
};

const NAVIGATION_SCREEN = {
  authStack: 'AuthStack',
  homeStack: 'HomeStack',
  termScreen: 'TermScreen',
  homeScreen: 'HomeScreen',
  drawerStack: 'DrawerStack',
  loginScreen: 'LoginScreen',
  privacyScreen: 'PrivacyScreen',
  primaryStack: 'PrimaryStack',
};

const SIDE_MENU = [
  {
    id: 0,
    title: 'New Giftee',
    // icon: ICONS_NAME.Home,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 1,
    title: 'Add & Filter results',
    // icon: 'user',
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 2,
    title: 'Feedback',
    // icon: ICONS_NAME.Cart,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 3,
    title: 'Login',
    // icon: ICONS_NAME.Location,
    navigateTo: NAVIGATION_SCREEN.loginScreen,
  },
  {
    id: 4,
    title: 'Share the App',
    // icon: ICONS_NAME.Info,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 5,
    title: 'Terms & Conditions',
    // icon: ICONS_NAME.Setting,
    navigateTo: NAVIGATION_SCREEN.termScreen,
  },
  {
    id: 6,
    title: 'Privacy Policy',
    // icon: ICONS_NAME.Setting,
    navigateTo: NAVIGATION_SCREEN.privacyScreen,
  },
  {
    id: 7,
    title: 'Share results',
    // icon: ICONS_NAME.Setting,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
  {
    id: 8,
    title: 'History',
    // icon: ICONS_NAME.Setting,
    navigateTo: NAVIGATION_SCREEN.homeScreen,
  },
];

export { ICONS_NAME, NAVIGATION_SCREEN, SIDE_MENU };
