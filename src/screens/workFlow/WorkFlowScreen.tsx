import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { WebView } from 'react-native-webview';

import { colors } from '../../utils/theme';
import { Props } from '../../utils/type';
// import { Button } from '../../components';

const WorkFlowScreen = ({ htmlData, userName }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userName}</Text>
      <WebView source={{ html: htmlData }} javaScriptEnabled={true} />
      {/* <Button
        title="List"
        customStyle={styles.button}
        onPress={() => console.log('db')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.blackColor,
  },
  // button: {
  //   width: '90%',
  //   backgroundColor: colors.lightGreenColor,
  //   margin: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

export default WorkFlowScreen;
