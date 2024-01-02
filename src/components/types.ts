// types.ts
export interface MultiSelectorProps {
  isVisible: boolean;
  onSave: (input1: string, selectedValues: any[]) => void;
  onClose: () => void;
  txt: string;
  selectAnOption: {id: string; name: string}[];
}
export interface InputProps {
  placeholder: string;
  value: string | undefined;
  onChangeText: (text: string) => void | undefined;
  editable: boolean;
}
export interface ButtonProps {
  title: string;
  customStyle?: Record<string, any>;
  onPress?: () => void;
}
