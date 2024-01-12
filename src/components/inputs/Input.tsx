import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { colors } from '../../utils/theme';
import { InputProps } from '..';

const Input: FC<InputProps> = ({
  editable,
  placeholder,
  value,
  onChangeText,
}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      inputMode="text"
      placeholderTextColor={colors.darkGreyColor}
      value={value}
      onChangeText={onChangeText}
      editable={editable}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.greyColor,
    color: colors.blackColor,
    height: 56,
    padding: 12,
    borderRadius: 12,
    fontSize: 18,
    lineHeight: 24,
    marginTop: 20,
    fontWeight: '500',
  },
});

export default Input;
