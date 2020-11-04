function doPost(e) {
  var pubName = e.parameters.pubName;
  var review = e.parameters.review;
  var longitude = e.parameters.longitude;
  var latitude = e.parameters.latitude;
  
  var output = HtmlService.createHtmlOutput('Request Payload. Pub Name: ' + pubName + '. Review: ' + review + '. Longitude: ' + longitude + '. Latitude: ' + latitude);
  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
}