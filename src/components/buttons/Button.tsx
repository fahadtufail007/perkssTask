import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../utils/theme';

interface props {
  title: string,
  customClass?: any,
  onPress?: any;
}

const Button = ({ title, onPress, customClass }: props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { ...customClass }]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.blueColor,
    justifyContent: 'center',
    borderRadius: 12,
    height: 56,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: '500',
    color: colors.whiteColor,
  },
});

export default Button;
