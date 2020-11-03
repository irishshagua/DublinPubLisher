function doPost(e) {
  var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}