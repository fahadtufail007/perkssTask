export const workFlowDiagram = (data: string) => {
  const logData = JSON.parse(data);

  let mermaidCode = "graph TD\n";

  for (const item of logData) {
    const key = item.key;
    const name = item.name;
    const parents = item.parent || []; 

    for (const parentKey of parents) {
      mermaidCode += `${parentKey} --> ${key}[${name}]\n`;
    }

    if (item.children) {
      mermaidCode += `subgraph ${key}\n`;
      for (const childKey of item.children) {
        mermaidCode += `${name} --> ${childKey}\n`;
      }
      mermaidCode += `end\n`;
    }
  }

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Mermaid.js Flowchart</title>
  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .mermaid-container {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>

<div class="mermaid-container">
  <div class="mermaid">
    ${mermaidCode}
  </div>
</div>

<script>mermaid.initialize({ startOnLoad: true });</script>

</body>
</html>
`;

  return htmlContent;
};
