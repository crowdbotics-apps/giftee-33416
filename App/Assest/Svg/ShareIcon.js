import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShareIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 15a3 3 0 100-6 3 3 0 000 6zM18 9a3 3 0 100-6 3 3 0 000 6zM18 21a3 3 0 100-6 3 3 0 000 6zM8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4"
    />
  </Svg>
);

export default ShareIcon;
