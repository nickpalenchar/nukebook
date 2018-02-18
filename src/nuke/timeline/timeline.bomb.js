console.log("holla from bomb");

function onMessage(request, sender, sendResponse) {

  return true; // asynchronous messaging
}

function onResponse(message) {

}

chrome.runtime.onMessage.addListener(onMessage);
