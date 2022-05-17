import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DislikeIcon = props => (
  <Svg width={52} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M30 5.513a11.633 11.633 0 0 1 6-3.283 11.46 11.46 0 0 1 6.768.684c2.14.908 3.97 2.446 5.258 4.42A12.208 12.208 0 0 1 50 14c0 2.373-.687 4.693-1.974 6.666a11.782 11.782 0 0 1-5.258 4.42A11.46 11.46 0 0 1 36 25.77 11.633 11.633 0 0 1 30 22.487M10 6l-8 8 8 8M38 14H2"
      stroke={props.color || '#EE7F85'}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DislikeIcon;
