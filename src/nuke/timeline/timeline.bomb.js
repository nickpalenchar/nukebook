console.log("holla from bomb NEW  ");
var BOMBER = 'timeline';

function onMessage(request, sender, sendResponse) {
  console.log('MESSAGE ', request);
  if (request.message === 'go_bomber' && request.bomber === BOMBER) {
    var clickDeletePost = function clickDeletePost($selection) {
      $selection[0].click();
      console.log('sending res $$$');
      console.dir(sendResponse);
      $selection[0].className += ' fbn--nuked';
      console.dir($selection);
      waitForItemAbsence('h3:contains(Delete Post)', function () {
        console.log('GONEEE NOT SENDING ', sendResponse);
        //sendResponse({message: 'bomber_done', bomber: 'timeline'});
      })
    };

    var $storyOptions = $("[aria-label='Story options']")[0];
    $storyOptions.click();

    waitForItem('a:contains(Delete)', function ($selection) {
      console.log('GOT IT ', $selection);
      $selection[0].click();
      waitForItem('button:contains(Delete Post):not(.fbn--nuked)', clickDeletePost);
    });

    console.log("RETURN NIG TRUE ", true);
    return true;
  }
  return true;
}

chrome.runtime.onMessage.addListener(onMessage);