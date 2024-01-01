import React, {useEffect} from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {colors} from '../../utils/theme';
import Logo from '../../assets/perkss.png';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('home');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [navigation]);

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
