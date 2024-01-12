export const workFlowDiagram = (data: string) => {
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
</html>`;
  return htmlContent;
};
