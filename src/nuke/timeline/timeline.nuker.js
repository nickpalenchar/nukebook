var NUKER = 'timeline';

function onMessage(request, sender, sendResponse) {

  if (request.message === 'nuke_round' && request.round === NUKER) {
    sendResponse({ message: 'go_bomber', bomber: NUKER });
  }
  else {
    return sendResponse();
  }
  return true; // asynchronous messaging
}

chrome.runtime.onMessage.addListener(onMessage);