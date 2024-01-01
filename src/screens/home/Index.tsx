import React, {useState} from 'react';

import HomeScreen from './HomeScreen';

const Index = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('Start');
  const [isModalVisibleAction, setModalVisibleAction] = useState(false);
  const [isModalVisibleCondition, setModalVisibleCondition] = useState(false);
  const [isModalVisibleEnd, setModalVisibleEnd] = useState(false);
  const [options2, setOptions2] = useState([{id: '1', name: 'Start'}]);
  const [viewValue, setViewValue] = useState([{key: '1', name: 'Start'}]);
  const [itemsAync, setItemAync] = useState([]);

  return (
    <HomeScreen
      name={name}
      setName={setName}
      value={value}
      setValue={setValue}
      isModalVisibleAction={isModalVisibleAction}
      setModalVisibleAction={setModalVisibleAction}
      isModalVisibleCondition={isModalVisibleCondition}
      setModalVisibleCondition={setModalVisibleCondition}
      isModalVisibleEnd={isModalVisibleEnd}
      setModalVisibleEnd={setModalVisibleEnd}
      options2={options2}
      setOptions2={setOptions2}
      viewValue={viewValue}
      setViewValue={setViewValue}
      itemsAync={itemsAync}
      setItemAync={setItemAync}
    />
  );
};

export default Index;
