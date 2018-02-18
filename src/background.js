console.log('[background.js] v10');
alert('v10');

function nukeRoundResponse (response) {
  alert('got a nuke res ' + JSON.stringify(response));
  if (response.message === 'go_bomber') {
    // forward the message back
    alert('sending bomber go!');
    sendMessageToActiveTab(response, nukeRoundResponse);
  }
  if (response.message === 'bomber_done') {
    sendMessageToActiveTab({ message: 'bomber_go', bomber: response.bomber });
  }
}

function nukeRound(response) {
  // handles a nuke round, which is the total deletion of one type of facebook resource
  // (i.e. timeline, photos, etc). nukeRound is a response callback that can also be invoked
  // to begin deletion.
  //
  // Pops message.nuke array and begins deletion on the string it gets back,
  // then recursively calls itself with the popped array, to get the next value of
  // resoure to delete. Continues until array is empty.

  var toNuke = response.nuke.pop();

  sendMessageToActiveTab({ message: 'nuke_round', round: toNuke }, nukeRoundResponse);
}


///// init listener /////
function browserClickResponse(response) {
  console.log('message recieved ', response);
  if (response.message === 'begin_nuke') {
    alert('renieuhoen');
    nukeRound(response);
  }
}

chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  return sendMessageToActiveTab({"message": "clicked_browser_action"}, browserClickResponse);
});

///// helper functions /////
function sendMessageToActiveTab(message, responseFn) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, message, responseFn);
  });
}

function getActiveTab(fn) {
  // callback function has the active tab object
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    fn(tabs[0]);
  });
}