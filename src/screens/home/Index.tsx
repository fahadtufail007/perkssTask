import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import HomeScreen from './HomeScreen';

export const Index = () => {
  const navigation = useNavigation();
  const value = 'Start';

  const [name, setName] = useState('');
  const [isModalVisibleAction, setModalVisibleAction] = useState(false);
  const [isModalVisibleCondition, setModalVisibleCondition] = useState(false);
  const [isModalVisibleEnd, setModalVisibleEnd] = useState(false);
  const [selectAnOption, setSelectAnOption] = useState([
    {id: '1', name: 'Start'},
  ]);
  const [viewValue, setViewValue] = useState([{key: '1', name: 'Start'}]);

  const handleSave = (input1: string, selectedOption: string) => {
    if (input1 && selectedOption !== '') {
      const isOptionExists = selectAnOption.some(
        (option: {name: string}) => option.name === selectedOption,
      );

      if (!isOptionExists) {
        const dataForConditionNode = {
          id: String(selectAnOption.length + 1),
          name: input1,
          children: selectedOption,
        };
        const dataForConditionNodeView = {
          key: String(selectAnOption.length + 1),
          name: input1,
          parent: selectedOption[0],
        };
        setSelectAnOption([...selectAnOption, dataForConditionNode]);
        setViewValue([...viewValue, dataForConditionNodeView]);

        console.log(dataForConditionNode);
      }
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Please fill all the fields',
        visibilityTime: 1000,
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
    const modalStateSetter =
      modalStateSetterMap[buttonName as keyof typeof modalStateSetterMap];
    if (modalStateSetter) {
      modalStateSetter(true);
    }
  };

  const handleNavigate = () => {
    if (selectAnOption.length && viewValue.length > 1 && name !== '') {
      const dataToShowOnNextScreen = {
        userName: name,
        selectAnOption,
        viewValue,
      };
      navigation.navigate('workFlow', dataToShowOnNextScreen);
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Please fill all the fields',
        visibilityTime: 1000,
        autoHide: true,
      });
    }
  };
  return (
    <HomeScreen
      name={name}
      setName={setName}
      value={value}
      isModalVisibleAction={isModalVisibleAction}
      setModalVisibleAction={setModalVisibleAction}
      isModalVisibleCondition={isModalVisibleCondition}
      setModalVisibleCondition={setModalVisibleCondition}
      isModalVisibleEnd={isModalVisibleEnd}
      setModalVisibleEnd={setModalVisibleEnd}
      selectAnOption={selectAnOption}
      handleSave={handleSave}
      handleButtonPress={handleButtonPress}
      handleNavigate={handleNavigate}
    />
  );
};
