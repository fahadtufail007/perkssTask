import React from 'react';
import { useNavigation } from '@react-navigation/native';

import WorkFlowScreen from './WorkFlowScreen';

const WorkFlowContainer = () => {

  const navigation = useNavigation();
  const navigate = (routes: any) => {
    navigation.navigate(routes)
  }

  return (
    <WorkFlowScreen navigate={navigate} navigation={navigation} />
  );
};

export default WorkFlowContainer;
