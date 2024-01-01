import React, { useState } from 'react';
import HomeScreen from './HomeScreen';

const HomeContainer = () => {
  const [name, setName] = useState('');
  const [actionName, setActionName] = useState('');
  const [conditionName, setCondotionName] = useState('');
  const [trueAction, setTrueAction] = useState(false);
  const [trueCondition, setTrueCondition] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Start");
  const [items, setItems] = useState([
    { label: 'Start', value: 'Start' },
  ]);

  return (
    <HomeScreen name={name} setName={setName} open={open} setOpen={setOpen} value={value} setValue={setValue} items={items} setItems={setItems} setTrueAction={setTrueAction} trueAction={trueAction} trueCondition={trueCondition} setTrueCondition={setTrueCondition} setCondotionName={setCondotionName} conditionName={conditionName} actionName={actionName} setActionName={setActionName} />
  );
};

export default HomeContainer;
