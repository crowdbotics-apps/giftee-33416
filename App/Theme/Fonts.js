import { Platform } from 'react-native';

const __ANDROID__ = Platform.OS === 'android';

export const FONTS = {
  AbrilFatface: 'Abril Fatface',
  GothamRounded: 'Gotham Rounded',
};

export const FONTS_NAME = {
  AbrilFatface: {
    light: `${FONTS.AbrilFatface}${__ANDROID__ ? '_Regular' : ''}`,
    regular: `${FONTS.AbrilFatface}${__ANDROID__ ? '_Regular' : ''}`,
    medium: `${FONTS.AbrilFatface}${__ANDROID__ ? '_Regular' : ''}`,
    bold: `${FONTS.AbrilFatface}${__ANDROID__ ? '_Regular' : ''}`,
  },
  GothamRounded: {
    light: `${FONTS.GothamRounded}${__ANDROID__ ? '-Light' : ''}`,
    regular: `${FONTS.GothamRounded}${__ANDROID__ ? '-Regular' : ''}`,
    medium: `${FONTS.GothamRounded}${__ANDROID__ ? '-Medium' : ''}`,
    bold: `${FONTS.GothamRounded}${__ANDROID__ ? '-Bold' : ''}`,
  },
};
const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 25,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  h5: {
    fontSize: size.h5,
  },
  h6: {
    fontSize: size.h6,
  },
  normal: {
    fontSize: size.regular,
  },
  link: {
    fontSize: 15,
  },
  terms: {
    fontSize: 13,
  },
  description: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
  extraSmall: {
    fontSize: 11,
  },
  tiny: {
    fontSize: size.tiny,
  },
};

export const fontFamily = {
  Light: {
    fontFamily: FONTS_NAME.GothamRounded.light,
    fontWeight: '300',
  },
  Medium: {
    fontFamily: FONTS_NAME.GothamRounded.medium,
    fontWeight: '600',
  },
  Regular: {
    fontFamily: FONTS_NAME.GothamRounded.regular,
    fontWeight: '400',
  },
  Bold: {
    fontFamily: FONTS_NAME.GothamRounded.bold,
    fontWeight: 'bold',
  },
};

export default {
  size,
  style,
};
