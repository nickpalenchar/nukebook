var NUKER = 'timeline';

function onMessage(request, sender, sendResponse) {

  sendResponse({ message: 'go_bomber', bomber: NUKER, i: request.i });

}

window['timeline.nuker'] = onMessage;