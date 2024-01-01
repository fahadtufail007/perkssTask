import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const SelectInput = ({ open, setOpen, value, setValue, items, setItems }: any) => {

  return (
    <DropDownPicker
      style={styles.selectInput}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      textStyle={styles.inputText}
      placeholderStyle={{ color: colors.darkGreyColor }}
      dropDownContainerStyle={styles.dropdownStyle}
      containerStyle={styles.containerStyle}
    />
  );
};

const styles = StyleSheet.create({
  selectInput: {
    height: 56,
    borderRadius: 12,
    borderWidth: 0,
    backgroundColor: colors.greyColor,
  },
  dropdownStyle: {
    backgroundColor: colors.greyColor,
    borderWidth: 0,
  },
  containerStyle: {
    marginTop: 20,
  },
  inputText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
    color: colors.blackColor,
  }
});

export default SelectInput;