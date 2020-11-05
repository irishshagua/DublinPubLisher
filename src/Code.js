const TOKEN = '<GITHUB_API_TOKEN>';
const GITHUB_URL = "https://api.github.com/repos/irishshagua/dublin-pubs-map/contents/postgres-pubs-dump.txt";

function retrieveContent() {
    var headers = {
        "Authorization": "Bearer " + TOKEN,
        "Accept": "application/vnd.github.v3+json"
    };
  
    var options = {'headers': headers, method: 'GET'};
  
    var resp = UrlFetchApp.fetch(GITHUB_URL, options);
    Logger.log('Retrieving content from GitHub gave ' + resp);
    
    var json = JSON.parse(resp);
    var sha = json.sha;
    var content = Utilities.base64Decode(json.content);
    
    return [sha, content];
}

function updateContent(updatedContent, previousSha) {
    var headers = {
        "Authorization": "Bearer " + TOKEN,
        "Accept": "application/vnd.github.v3+json"
    };
  
    var options = {
        headers: headers, 
        method: 'PUT',
        contentType: 'application/json',
        payload: JSON.stringify({
            message: '[Google App Bot] Adding a new pub',
            sha: previousSha,
            content: Utilities.base64Encode(updatedContent)
        })
    };
  
    var resp = UrlFetchApp.fetch(GITHUB_URL, options);
    
    return JSON.parse(resp);
}

function addNewPub(pubName, pubReview, latitude, longitude) {
    Logger.log('Attempting to add [' + pubName + ']');
    
    // Get current content
    var result = retrieveContent();
    var sha = result[0];
    var content = result[1];
    
    // Add new pub
    var updatedContent = content + "\n" + latitude + "\t" + longitude + "\t" + pubName + "\t" + pubReview;
    
    // Update content
    var result = updateContent(updatedContent, sha);
}

function doPost(e) {  
    var template = HtmlService.createTemplateFromFile('response');
  
    template.pubName = e.parameters.pubName;
    template.review = e.parameters.review;
    template.latitude = e.parameters.latitude;
    template.longitude = e.parameters.longitude;

    addNewPub(template.pubName, template.review, template.latitude, template.longitude);
    
    return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}