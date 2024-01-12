import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '..';
import { colors } from '../../utils/theme';

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  customStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, customStyle]}
    >
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
