console.log("holla from bomb NEW  ");
var BOMBER = 'timeline';

function onMessage(request, sender, sendResponse) {
  console.log('MESSAGE ', request);
  if(request.message === 'go_bomber' && request.bomber === BOMBER) {

    var $storyOptions = $("[aria-label='Story options']")[0];
    $storyOptions.click();


    waitForItem('a:contains(Delete)', function ($selection) {
      console.log('GOT IT ', $selection);
      $selection[0].click();
      waitForItem('button:contains(Delete Post):not(.fbn--nuked)', clickDeletePost);
    });
    function clickDeletePost($selection){
      $selection[0].click();
      console.log('sending res $$$');
      sendResponse({ message: 'bomber_done', bomber: 'timeline' });
      $selection[0].className += ' fbn--nuked';
      console.dir($selection);
    }
    console.log("RETURN NIG TRUE ", true);
    return true;
  }
  return true;
}

chrome.runtime.onMessage.addListener(onMessage);
