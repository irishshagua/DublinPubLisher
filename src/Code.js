function doGet(e) {  
  var output = HtmlService.createTemplateFromFile('form');
  return output
       .evaluate()
       .setSandboxMode(HtmlService.SandboxMode.IFRAME)
       .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {  
  return HtmlService.createHtmlOutput("This is the post response: " + JSON.stringify(e));
}