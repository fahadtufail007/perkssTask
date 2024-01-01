import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { Button, Input, TopToBottomModal } from '../../components';
import SelectInput from '../../components/inputs/SelectInput';
import { colors } from '../../utils/theme';
import { NodeComponent } from '../../components';

interface Node {
  id: string;
  name: string;
  children: string[];
  position: { x: number; y: number };
}

interface Props {
  name: any;
  setName: any;
  trueCondition: any;
  setCondotionName: any;
  conditionName: any;
  actionName: any;
  setActionName: any;
}

const HomeScreen = ({
  name,
  setName,
  setCondotionName,
  conditionName,
  actionName,
  setActionName,
}: Props) => {
  const [itemsAync, setItemAync] = useState([]);
  const retrieveData = async () => {
    try {
      const jsonString = await AsyncStorage.getItem('yourKey');
      if (jsonString !== null) {
        const data = JSON.parse(jsonString);
        setItemAync(data);
      } else {
        setItemAync([]);
        setActionName('');
        setCondotionName('');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useFocusEffect(React.useCallback(() => {
    retrieveData();
  }, []));

  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('workFlow', { userName: name !== '' ? name : itemsAync.userName,options2,viewValue });
  };

  const [isModalVisibleAction, setModalVisibleAction] = useState(false);
  const [isModalVisibleCondition, setModalVisibleCondition] = useState(false);
  const [isModalVisibleEnd, setModalVisibleEnd] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const [options2, setOptions2] = useState<Node[]>([
    { id: '1', name: 'Start' },
  ]);
  const [viewValue, setViewValue] = useState<Node[]>([
    { key: '1', name: 'Start' },
  ]);

  const handleSaveAction = (input1: string, selectedOption: string) => {
    if (input1 && selectedOption !== '') {
      const isOptionExists = options2.some((option) => option.name === selectedOption);

      if (!isOptionExists) {
        const dataForConditionNode = {
          id: String(options2.length + 1),
          name: input1,
          children: selectedOption,
  
        };
        const dataForConditionNodeView = {
          key: String(options2.length + 1),
          name: input1,
          parent: selectedOption[0],
        };
        setOptions2([...options2, dataForConditionNode]);
        setViewValue([...viewValue, dataForConditionNodeView]);

        console.log(dataForConditionNode);
      }

      setModalVisibleAction(false);
    } else {
      setModalVisibleAction(true);

      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Please fill all the fields',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  const handleSaveCondition = (input1: string, SelectedOption: string) => {
    if (input1 && SelectedOption !== '') {
      const isOptionExists = options2.some((option) => option.name === SelectedOption);

      if (!isOptionExists) {
        // const lastNodePosition = options2[options2.length - 1]?.position || { x: 50, y: 50 };
        const dataForConditionNode = {
          id: String(options2.length + 1),
          name: input1,
          children: SelectedOption,
          // position: { x: lastNodePosition.x + 60, y: lastNodePosition.y + 60 },
        };
        const dataForConditionNodeView = {
          key: String(options2.length + 1),
          name: input1,
          parent: SelectedOption[0],
        };
        setOptions2([...options2, dataForConditionNode]);
        setViewValue([...viewValue, dataForConditionNodeView]);

        console.log(dataForConditionNode);
      }
    } else {
      setModalVisibleCondition(true);

      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Please fill all the fields',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };
  const handleSaveEnd = (input1: string, SelectedOption: string) => {
    if (input1 && SelectedOption !== '') {
      const isOptionExists = options2.some((option) => option.name === SelectedOption);

      if (!isOptionExists) {
     
        const dataForConditionNode = {
          id: String(options2.length + 1),
          name: input1,
          children: SelectedOption,
      
        };
        const dataForConditionNodeView = {
          key: String(options2.length + 1),
          name: input1,
          parent: SelectedOption[0],
        };
        setOptions2([...options2, dataForConditionNode]);
        setViewValue([...viewValue, dataForConditionNodeView]);

        console.log(dataForConditionNode);
      }
    } else {
      setModalVisibleCondition(true);

      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Please fill all the fields',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };
  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === 'Action') {
      setModalVisibleAction(true);
    } else if (buttonName === 'Conditional') {
      setModalVisibleCondition(true);
    } else if (buttonName === 'End') {
      setModalVisibleEnd(true);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Workflow Name"
        value={itemsAync.userName}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Workflow Name"
        value={options2[0].name}
        editable={false}
      />
      <View style={styles.buttonsWrapper}>
        <Button
          title="Action"
          customClass={styles.button}
          onPress={() => handleButtonPress('Action')}
        />
        <Button
          title="Condtional"
          customClass={styles.ConditionButton}
          onPress={() => handleButtonPress('Conditional')}
        />
        
        <TopToBottomModal
          isVisible={isModalVisibleAction}
          onSave={handleSaveAction}
          onClose={() => setModalVisibleAction(false)}
          txt="Enter Action"
          options2={options2}
        />
        <TopToBottomModal
          isVisible={isModalVisibleCondition}
          onSave={handleSaveCondition}
          onClose={() => setModalVisibleCondition(false)}
          txt="Enter Condition"
          options2={options2}
        />
      </View>

      <Button
          title="End"
          customClass={styles.EndButton}
          onPress={() => handleButtonPress('End')}
        />
         <TopToBottomModal
          isVisible={isModalVisibleEnd}
          onSave={handleSaveEnd}
          onClose={() => setModalVisibleEnd(false)}
          txt="End"
          options2={options2}
        />
      <Button title="Done" customClass={styles.doneButton} onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: 15,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  button: {
    width: 150,
    backgroundColor: colors.lightGreenColor,
  },
  ConditionButton: {
    backgroundColor: colors.lightRedColor,
    width: 150,
  },
  EndButton: {
    backgroundColor: colors.blackColor,
    width: '100%',
    marginTop:10
  },
  doneButton: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },
});

export default HomeScreen;
