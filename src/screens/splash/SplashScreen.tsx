import React, { useEffect } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';

import { colors } from '../../utils/theme';
import Logo from '../../assets/perkss.png';
import useNavigate from '../../customHooks/useNavigate';

const SplashScreen = () => {
  const { navigateToScreen } = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigateToScreen('home');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [navigateToScreen]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.whiteColor} barStyle="dark-content" />
      <Image source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
