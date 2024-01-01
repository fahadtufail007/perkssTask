import React from 'react';
import {useNavigation} from '@react-navigation/native';

import WorkFlowScreen from './WorkFlowScreen';

const Index = () => {
  const navigation = useNavigation();
  const navigate = (routes: any) => {
    navigation.navigate(routes)
  };

  return <WorkFlowScreen navigate={navigate} navigation={navigation} />;
};

export default Index;
