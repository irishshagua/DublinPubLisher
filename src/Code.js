function doPost(e) {
  var pubName = e.parameters.pubName;
  var review = e.parameters.review;
  var longitude = e.parameters.longitude;
  var latitude = e.parameters.latitude;
  
  return HtmlService
    .createTemplateFromFile('response')
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}