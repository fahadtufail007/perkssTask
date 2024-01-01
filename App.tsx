import React from 'react';

import {View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';

import Routes from "./src/utils/Routes";



const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default App;
