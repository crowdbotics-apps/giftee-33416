import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlusIcon = props => (
  <Svg width={20} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M10 1v16.97M18.485 9.485H1.515"
      stroke={props.colo || '#fff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PlusIcon;
