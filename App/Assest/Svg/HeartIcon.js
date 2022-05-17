import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HeartIcon = props => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M19.055 3.417a5.5 5.5 0 0 1 2.978 7.188 5.5 5.5 0 0 1-1.193 1.785l-1.06 1.06L12 21.23l-7.78-7.78-1.06-1.06a5.501 5.501 0 0 1 7.78-7.78L12 5.67l1.06-1.06a5.5 5.5 0 0 1 5.995-1.193Z"
      stroke={props.color || '#A8D974'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HeartIcon;
