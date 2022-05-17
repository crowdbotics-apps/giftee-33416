import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronRight = props => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m15 6-6 6 6 6"
      stroke={props.color || '#7C83D7'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronRight;
