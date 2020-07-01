import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
  },
});

const H1 = ({children, style}) => {
  return <Text style={{...styles.h1, ...style}}>{children}</Text>;
};

export default H1;
