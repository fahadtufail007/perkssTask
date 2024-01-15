import { Dispatch, SetStateAction } from 'react';

export interface HomeScreenProps {
  workflow: {
    value: string;
    name: string;
  };
  setWorkflow: Dispatch<SetStateAction<{ value: string; name: string }>>;
  modalState: {
    isModalVisibleAction: boolean;
    isModalVisibleCondition: boolean;
    isModalVisibleEnd: boolean;
  };
  setModalState: Dispatch<
    SetStateAction<{
      isModalVisibleAction: boolean;
      isModalVisibleCondition: boolean;
      isModalVisibleEnd: boolean;
    }>
  >;
  selectAnOption: { id: string; name: string }[];
  handleSave: (addActionNode: string, selectedOption: string []) => void;
  handleButtonPress: (
    buttonName:
      | 'isModalVisibleEnd'
      | 'isModalVisibleAction'
      | 'isModalVisibleCondition',
  ) => void;
  handleNavigate: () => void;
}
export interface Props {
  htmlData: string;
  userName: string;
}
