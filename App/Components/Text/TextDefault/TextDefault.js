import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts } from '../../../Theme';
import { fontFamily } from '../../../Theme/Fonts';
import styles from './styles';

const TextDefult = props => {
  let customStyles = [styles.defaultStyle, fontFamily.Regular];

  if (props.bold) {
    customStyles.push(fontFamily.Bold);
  }
  if (props.medium) {
    customStyles.push(fontFamily.Medium);
  }
  if (props.regular) {
    customStyles.push(fontFamily.Regular);
  }
  if (props.light) {
    customStyles.push(fontFamily.Light);
  }
  if (props.heavy) {
    customStyles.push(fontFamily.Heavy);
  }
  if (props.H6) {
    customStyles.push(Fonts.style.h6);
  }
  if (props.H5) {
    customStyles.push(Fonts.style.h5);
  }
  if (props.H4) {
    customStyles.push(Fonts.style.h4);
  }
  if (props.H3) {
    customStyles.push(Fonts.style.h3);
  }
  if (props.H2) {
    customStyles.push(Fonts.style.h2);
  }
  if (props.H1) {
    customStyles.push(Fonts.style.h1);
  }
  if (props.normal) {
    customStyles.push(Fonts.style.normal);
  }
  if (props.description) {
    customStyles.push(Fonts.style.description);
  }
  if (props.link) {
    customStyles.push(Fonts.style.link);
  }
  if (props.terms) {
    customStyles.push(Fonts.style.terms);
  }
  if (props.small) {
    customStyles.push(Fonts.style.small);
  }
  if (props.extraSmall) {
    customStyles.push(Fonts.style.extraSmall);
  }
  if (props.tiny) {
    customStyles.push(Fonts.style.tiny);
  }
  if (props.upperCase) {
    customStyles.push(styles.upperCase);
  }
  if (props.right) {
    customStyles.push(styles.right);
  }
  if (props.center) {
    customStyles.push(styles.center);
  }

  customStyles = StyleSheet.flatten([customStyles, props.style]);

  return (
    <Text {...props} style={customStyles}>
      {props.children}
    </Text>
  );
};

TextDefult.defaultProps = {
  numberOfLines: 0,
};

export default React.memo(TextDefult);
