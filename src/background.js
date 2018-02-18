console.log('[background.js] v10');
alert('v10');

function getActiveTab(fn) {
  // callback function has the active tab object
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    fn(tabs[0]);
  });
}

function browserClickResponse (message) {
  console.log('message recieved ', message);
  getActiveTab(function(activeTab) {
    chrome.tabs.sendMessage(activeTab.id, message);
  })
}

function nukeRound(message) {
  // handles a nuke round, which is the total deletion of one type of facebook resource
  // (i.e. timeline, photos, etc). nukeRound is a response callback that can also be invoked
  // to begin deletion.
  //
  // Pops message.nuke array and begins deletion on the string it gets back,
  // then recursively calls itself with the popped array, to get the next value of
  // resoure to delete. Continues until array is empty.

  var toNuke = message.nuke.pop();

  getActiveTab(function(activeTab) {
    chrome.tabs.sen
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  getActiveTab(function(activeTab){
    chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" }, browserClickResponse);
  })
});

function sendMessageToActiveTab(message, responseFn) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, message, responseFn);
  });
}
