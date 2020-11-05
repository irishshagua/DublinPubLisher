function doPost(e) {  
    var template = HtmlService.createTemplateFromFile('response');
  
    template.pubName = e.parameters.pubName;
    template.review = e.parameters.review;
    template.latitude = e.parameters.latitude;
    template.longitude = e.parameters.longitude;

    addNewPub(template.pubName, template.review, template.latitude, template.longitude);
    
    return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}