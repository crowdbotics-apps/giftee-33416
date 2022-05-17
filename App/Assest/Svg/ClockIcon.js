import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockIcon = props => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Zm0-14a1 1 0 0 0-1 1v4.42l-2.1 1.21a1 1 0 0 0 .5 1.87 1 1 0 0 0 .5-.13l2.6-1.5.09-.09.16-.13a.863.863 0 0 0 .1-.16.891.891 0 0 0 .08-.17.65.65 0 0 0 .05-.2L13 12V7a1 1 0 0 0-1-1Z"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default ClockIcon;
