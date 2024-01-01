import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import {colors} from '../../utils/theme';
const WorkFlowScreen = () => {
  const route = useRoute();
  const {userName, viewValue} = route.params;
  const data = JSON.stringify(viewValue);
  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <script src="https://unpkg.com/gojs/release/go-debug.js"></script>
    <link href="https://unpkg.com/gojs/release/go.css" rel="stylesheet" />
  </head>

  <body style="margin:0;">
    <div id="myDiagramDiv" style="width:100%; height:50vh;"></div>
    <script>
    
    const myDiagram = new go.Diagram("myDiagramDiv",
    {
      "undoManager.isEnabled": true,
      layout: new go.TreeLayout({ angle: 90, layerSpacing: 35 })
    });
    myDiagram.addDiagramListener("ObjectDoubleClicked", function(e) {
      if (e.subject.part instanceof go.Node) {
        const nodeName = e.subject.part.data.name;
        window.ReactNativeWebView.postMessage(nodeName);
      }
    });
  myDiagram.nodeTemplate =
    new go.Node("Horizontal",
      { background: "#44CCFF" })
      .add(new go.TextBlock("Default Text",
          { margin: 30, stroke: "white", font: "bold 23px sans-serif" })
          .bind("text", "name"));
  myDiagram.model = new go.TreeModel(${data});
    </script>
  </body>
  </html>
`;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userName}</Text>
      <WebView
        source={{html: htmlContent}}
        javaScriptEnabled={true}
        style={styles.webView}
      />
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
