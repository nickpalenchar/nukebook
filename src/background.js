console.log('[background.js] v10');
alert('v10');

function getActiveTab(fn) {
  // callback function has the active tab object
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    fn(tabs[0]);
  });
}

function onResponse(message) {
  console.log('message recieved ', message);
  alert('git eet');

}

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  getActiveTab(function(activeTab){
    chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" }, onResponse);
  })
});