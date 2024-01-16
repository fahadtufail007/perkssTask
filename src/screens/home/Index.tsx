import React, { useState } from 'react';

import HomeScreen from './HomeScreen';
import useNavigate from '../../customHooks/useNavigate';
import { showToast } from '../../components';

export const Index = () => {
  const { navigateToScreen } = useNavigate();

  const [workflow, setWorkflow] = useState({
    value: 'Start',
    name: '',
  });
  const [modalState, setModalState] = useState({
    isModalVisibleAction: false,
    isModalVisibleCondition: false,
    isModalVisibleEnd: false,
  });
  const [selectAnOption, setSelectAnOption] = useState([
    { id: '1', name: 'Start' },
  ]);

  const handleSave = (addActionNode: string, selectedOption: string []) => {
    console.log(selectAnOption)
    if (addActionNode && selectedOption.length > 0) {
      const dataForConditionNode = {
        id: String(selectAnOption.length + 1),
        name: addActionNode,
        parent: selectedOption,
      };
      setSelectAnOption([...selectAnOption, dataForConditionNode]);
    }
  };

  const handleButtonPress = (buttonName: keyof typeof modalState) => {
    setModalState(prevState => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const handleNavigate = () => {
    if (selectAnOption.length > 1 && workflow.name !== '') {
      const dataToShowOnNextScreen = {
        userName: workflow.name,
        selectAnOption,
      };
      navigateToScreen('workFlow', dataToShowOnNextScreen);
    } else {
      showToast('error', 'please fill all the fields');
    }
  };
  return (
    <HomeScreen
      workflow={workflow}
      setWorkflow={setWorkflow}
      modalState={modalState}
      setModalState={setModalState}
      selectAnOption={selectAnOption}
      handleSave={handleSave}
      handleButtonPress={handleButtonPress}
      handleNavigate={handleNavigate}
    />
  );
};
