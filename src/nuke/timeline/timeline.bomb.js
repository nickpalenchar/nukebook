console.log("holla from bomb");

function onMessage(request, sender, sendResponse) {

}

function onResponse(message) {

}

chrome.runtime.onMessage.addListener(onMessage);
