import { Platform } from 'react-native';
import { scale } from '../Config/CustomFunction';

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
  h1: scale(38),
  h2: scale(34),
  h3: scale(30),
  h4: scale(25),
  h5: scale(20),
  h6: scale(19),
  input: scale(18),
  regular: scale(17),
  medium: scale(14),
  small: scale(12),
  tiny: scale(8.5),
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
    fontSize: scale(15),
  },
  terms: {
    fontSize: scale(13),
  },
  description: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
  extraSmall: {
    fontSize: scale(11),
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
