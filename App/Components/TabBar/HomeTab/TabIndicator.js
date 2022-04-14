import React from 'react';
import { Animated } from 'react-native';
import styles from './styles';

function RenderIndicatorFun(props) {
  const { state, width, getTabWidth, position, style } = props;

  const inputRange = state.routes.map((_, i) => i); // every index contains widths at all previous indices

  const outputRange = state.routes.reduce((acc, _, i) => {
    if (i === 0) {
      return [0];
    }
    return [...acc, acc[i - 1] + getTabWidth(i - 1)];
  }, []);

  const translateX = position.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.indicator, styles.indicatorRadius]}>
      <Animated.View
        style={[
          style,
          style.indicatorRadius,
          {
            width,
            transform: [{ translateX }],
          },
        ]}
      />
    </Animated.View>
  );
}

export default React.memo(RenderIndicatorFun);
