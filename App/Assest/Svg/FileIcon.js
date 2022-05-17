import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
    />
  </Svg>
);

export default FileIcon;
