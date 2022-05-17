import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FbIcon = props => (
  <Svg width={15} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.206 15.763v15.134c0 .217.174.39.391.39h5.616a.39.39 0 0 0 .391-.39v-15.38h4.075c.202 0 .376-.16.39-.362l.391-4.632a.39.39 0 0 0-.39-.427H9.604V6.81c0-.774.63-1.396 1.397-1.396h3.141a.39.39 0 0 0 .39-.391V.39a.39.39 0 0 0-.39-.391H8.837a5.64 5.64 0 0 0-5.638 5.638v4.466H.391c-.217 0-.391.18-.391.39v4.632c0 .217.174.391.39.391H3.2v.246h.007Z"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default FbIcon;
