import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {WebView} from 'react-native-webview';

import {colors} from '../../utils/theme';
import {Props} from '..';

const WorkFlowScreen = ({htmlData, userName}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userName}</Text>
      <WebView source={{html: htmlData}} javaScriptEnabled={true} />
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
});

export default WorkFlowScreen;
