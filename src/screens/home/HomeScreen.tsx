import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {Button, Input, TopToBottomModal} from '../../components';
import {colors} from '../../utils/theme';
interface Props {
  name: any;
  setName: any;
  isModalVisibleAction: boolean;
}

const HomeScreen = ({
  name,
  setName,
  isModalVisibleAction,
  setModalVisibleAction,
  isModalVisibleCondition,
  setModalVisibleCondition,
  isModalVisibleEnd, 
  setModalVisibleEnd,
  options2,
  setOptions2,
  viewValue,
  setViewValue,
  itemsAync,
  setItemAync
}: Props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const retrieveData = async () => {
    try {
      const jsonString = await AsyncStorage.getItem('yourKey');
      if (jsonString !== null) {
        const data = JSON.parse(jsonString);
        setItemAync(data);
      } else {
        setItemAync([]);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      retrieveData();
    }, [retrieveData]),
  );

  const navigation = useNavigation();
  const handleNavigate = () => {
    const dataToShowOnNextScreen = {
      userName: name,
      options2,
      viewValue,
    };
    navigation.navigate('workFlow', dataToShowOnNextScreen);
  };
  const handleSaveAction = (input1: string, selectedOption: string) => {
    if (input1 && selectedOption !== '') {
      const isOptionExists = options2.some(
        (option: {name: string}) => option.name === selectedOption,
      );

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
      const isOptionExists = options2.some(
        (option: {name: string}) => option.name === SelectedOption,
      );

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
  const handleSaveEnd = (input1: string, SelectedOption: string) => {
    if (input1 && SelectedOption !== '') {
      const isOptionExists = options2.some(
        (option: {name: string}) => option.name === SelectedOption,
      );

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
    const modalStateSetterMap = {
      Action: setModalVisibleAction,
      Conditional: setModalVisibleCondition,
      End: setModalVisibleEnd,
    };

    const modalStateSetter = modalStateSetterMap[buttonName];
    if (modalStateSetter) {
      modalStateSetter(true);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Workflow Name"
        value={itemsAync.userName}
        onChangeText={(text: any) => setName(text)}
        editable={false}
      />
      <Input
        placeholder="Workflow Name"
        value={options2[0].name}
        editable={false}
        onChangeText={undefined}
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
      <Button
        title="Done"
        customClass={styles.doneButton}
        onPress={handleNavigate}
      />
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
    marginTop: 10,
  },
  doneButton: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },
});

export default HomeScreen;
