import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterIcon = props => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M20 21v-5M17 16h6M4 21v-7M1 14h6M12 21v-9M9 8h6M20 12V3M12 8V3M4 10V3"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FilterIcon;
