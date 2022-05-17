import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDown = props => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.392 2.732A1.25 1.25 0 0 0 11.624.965L7.17 5.42 2.687.938A1.25 1.25 0 1 0 .92 2.706l5.116 5.116a1.25 1.25 0 0 0 1.762.46 1.251 1.251 0 0 0 .381-.337l5.213-5.213Z"
      fill={props.color || '#7C83D7'}
    />
  </Svg>
);

export default ChevronDown;
