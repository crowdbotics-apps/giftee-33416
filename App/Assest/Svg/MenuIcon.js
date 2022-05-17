import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuIcon = props => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M3 18h18M3 12h18M3 6h18"
      stroke={props.color || '#7C83D7'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MenuIcon;
