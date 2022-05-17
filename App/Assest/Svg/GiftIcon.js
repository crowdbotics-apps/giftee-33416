import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const GiftIcon = props => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M20 12v10H4V12M22 7H2v5h20V7ZM12 22V7M7.5 7H12s-1-5-4.5-5a2.5 2.5 0 1 0 0 5ZM16.5 7H12s1-5 4.5-5a2.5 2.5 0 0 1 0 5Z"
      stroke={props.color || '#fff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default GiftIcon;
