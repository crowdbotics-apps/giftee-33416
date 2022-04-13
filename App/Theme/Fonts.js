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
    fontWeight: '300',
  },
  Medium: {
    fontWeight: '600',
  },
  Regular: {
    fontWeight: '400',
  },
  Bold: {
    fontWeight: 'bold',
  },
  Heavy: {
    fontWeight: '800',
  },
};

export default {
  size,
  style,
};
