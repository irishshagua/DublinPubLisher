function doPost(e) {  
    var template = HtmlService.createTemplateFromFile('response');
  
    template.pubName = e.parameters.pubName;
    template.review = e.parameters.review;
    template.longitude = e.parameters.longitude;
    template.latitude = e.parameters.latitude;
    
    return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}