function doPost(e) {  
    var template = HtmlService.createTemplateFromFile('response');
  
    template.pubName = e.parameters.pubName;
    template.review = e.parameters.review;
    template.longitude = e.parameters.longitude;
    template.latitude = e.parameters.latitude;
    
    addPubToList();
    
    return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function addPubToList() {
    var client = GithubClient('irishagua', 'dublin-pubs-map', 'irishshagua', 'pwd');
    client.commit('content', 'postgres-pubs-dump.txt', 'brian_satchwannabe@hotmail.com');
}