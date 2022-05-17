import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const FilterIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth={42.667}
      stroke={props.color || '#000'}
      d="M426.666 448V341.334M362.666 341.334h128M85.334 448V298.667M21.334 298.666h128M256 448V256M192 170.667h128M426.666 256V64M256 170.667V64.001M85.334 213.333V64"
    />
  </Svg>
);

export default FilterIcon;
