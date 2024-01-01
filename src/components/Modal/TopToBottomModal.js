import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the desired icon library

const TopToBottomModal = ({isVisible, onSave, onClose, txt, options2}) => {
  const [input1, setInput1] = useState('');
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSave = () => {
    onSave(input1, selectedValues);
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder={txt}
            value={input1}
            onChangeText={setInput1}
          />

          <SectionedMultiSelect
            items={options2}
            uniqueKey="id"
            subKey="children"
            IconRenderer={Icon} // Specify the icon renderer
            onSelectedItemsChange={selectedItems =>
              setSelectedValues(selectedItems)
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

export default TopToBottomModal;
