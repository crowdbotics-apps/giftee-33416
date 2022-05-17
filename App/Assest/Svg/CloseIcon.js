import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M18 6 6 18M6 6l12 12"
      stroke={props.color || '#fff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CloseIcon;
