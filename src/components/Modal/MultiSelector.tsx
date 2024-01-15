import React, { useState, FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import Modal from 'react-native-modal';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { MultiSelectorProps } from '..';

const MultiSelector: FC<MultiSelectorProps> = ({
  isVisible,
  onSave,
  onClose,
  txt,
  selectAnOption,

}) => {
  const [addActionNode, setAddActionNode] = useState<string>('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [errorText,setErrorText] = useState('')

  const handleSave = () => {
    onSave(addActionNode, selectedValues);
    if (addActionNode !== '' && selectedValues.length > 0) {
      onSave(addActionNode, selectedValues);
      onClose();
      setErrorText("");
      setAddActionNode('')
      setSelectedValues([])
    } else {
      setErrorText("Please fill all the inputs");
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      onBackdropPress={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder={txt}
            value={addActionNode}
            onChangeText={setAddActionNode}
          />

          <SectionedMultiSelect
            items={selectAnOption}
            uniqueKey="id"
            IconRenderer={Icon}
            onSelectedItemsChange={selectedItems =>
              setSelectedValues(selectedItems as string[])
            }
            selectedItems={selectedValues}
            selectText="Select items"
            searchPlaceholderText="Search items..."
            confirmText="Confirm"
            hideSearch={true}
            colors={{
              primary: '#5cb85c',
            }}
          />
<Text style={{color:'red',marginBottom:20}}>{errorText}</Text>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    padding: 10,
  },
  saveButton: {
    backgroundColor: '#5cb85c',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MultiSelector;
