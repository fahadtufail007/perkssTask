import Toast from 'react-native-toast-message';

export const showToast = (type, heading, subHeading = "") => {
  Toast.show({
    type: type,
    position: 'top',
    text1: heading,
    text2: subHeading,
    visibilityTime: 1000,
    autoHide: true,
  });
};
