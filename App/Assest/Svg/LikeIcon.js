import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LikeIcon = props => (
  <Svg width={52} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M22 22.487a11.633 11.633 0 0 1-6 3.283 11.46 11.46 0 0 1-6.768-.684 11.782 11.782 0 0 1-5.258-4.42A12.207 12.207 0 0 1 2 14c0-2.373.687-4.693 1.974-6.666a11.782 11.782 0 0 1 5.258-4.42A11.46 11.46 0 0 1 16 2.23 11.633 11.633 0 0 1 22 5.513M42 22l8-8-8-8M14 14h36"
      stroke={props.color || '#A8D974'}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LikeIcon;
