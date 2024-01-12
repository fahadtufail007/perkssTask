import Toast from 'react-native-toast-message';

export const showToast = (type, text1) => {
  Toast.show({
    type: type,
    position: 'top',
    text1: text1,
    visibilityTime: 1000,
    autoHide: true,
  });
};
