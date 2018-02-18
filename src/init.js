console.log("development v9 ");

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log("got message >> ", request);
    if (request.message === "clicked_browser_action") {
      if (confirm('WARNING!\nYOU ARE ABOUT TO DELETE EVERYTHING.. PERMENENTLY')) {
        return sendResponse({'message': 'begin_nuke', nuke: ['timeline']});
      }
    }

    if (request.message === 'nuke_round') {
      window[request.nuker + '.nuker'](request, sender, sendResponse);
    }

    if (request.message === 'go_bomber') {
      window[request.bomber + '.bomber'](request, sender, sendResponse);
      return true;
    }
  }
);