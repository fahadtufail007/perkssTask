import {Dispatch, SetStateAction} from 'react';

export interface HomeScreenProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<string>>;
  isModalVisibleAction: boolean;
  setModalVisibleAction: Dispatch<SetStateAction<boolean>>;
  isModalVisibleCondition: boolean;
  setModalVisibleCondition: Dispatch<SetStateAction<boolean>>;
  isModalVisibleEnd: boolean;
  setModalVisibleEnd: Dispatch<SetStateAction<boolean>>;
  selectAnOption: {id: string; name: string}[];
  handleSave: (input1: string, selectedOption: any[]) => void;
  handleButtonPress: (buttonName: string) => void;
  handleNavigate: () => void;
  value: string;
}
export interface Props {
  htmlData: string;
  userName: string;
}
