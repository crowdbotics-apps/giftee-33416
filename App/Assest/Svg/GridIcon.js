import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const GridIcon = props => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M21 14h-7v7h7v-7ZM10 14H3v7h7v-7ZM21 3h-7v7h7V3ZM10 3H3v7h7V3Z"
      stroke={props.color || '#7C83D7'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default GridIcon;
