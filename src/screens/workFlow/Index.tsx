import React from 'react';
import { useRoute } from '@react-navigation/native';
import { workFlowDiagram } from '../../utils/helper';

import WorkFlowScreen from './WorkFlowScreen';

const Index = () => {
  const route = useRoute();
  const { userName, selectAnOption } = route.params as {
    userName: string;
    selectAnOption: any;
  };
  const modifiedData = selectAnOption.map(
    (item: { id: string; name: string; parent: string }) => {
      return {
        key: item.id,
        name: item.name,
        parent: item.parent,
      };
    },
  );
  const data = JSON.stringify(modifiedData);
  const htmlData: string = workFlowDiagram(data);
  return <WorkFlowScreen htmlData={htmlData} userName={userName} />;
};

export default Index;
