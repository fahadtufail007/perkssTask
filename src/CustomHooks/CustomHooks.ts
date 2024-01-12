import { useNavigation, NavigationProp } from '@react-navigation/native';

type NavigationParams = Record<string, any>;

const CustomHooks = () => {
  const navigation =
    useNavigation<NavigationProp<Record<string, NavigationParams>>>();

  const navigateToScreen = (screenName: string, params?: NavigationParams) => {
    navigation.navigate(screenName, params!);
  };

  return {
    navigateToScreen,
  };
};

export default CustomHooks;
