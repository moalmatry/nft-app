import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

const FocusStatusBar = ({
  background,
  barStyle,
  backgroundColor,
  transLucent,
}) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar
      animated={true}
      {...background}
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      transLucent={transLucent}
    />
  ) : null;
};

export default FocusStatusBar;
