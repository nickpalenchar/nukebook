console.log("development v9 ");

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {

      if (confirm('WARNING!\nYOU ARE ABOUT TO DELETE EVERYTHING.. PERMENENTLY')) {

        return sendResponse({'message': 'begin_nuke', nuke: ['timeline']});
      }
    }
  }
);