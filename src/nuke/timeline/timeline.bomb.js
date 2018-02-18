console.log("holla from bomb NEW  ");
var BOMBER = 'timeline';

function onMessage(request, sender, sendResponse) {
  console.log('BOMBER REQUEST ', request);
  var i = request.i;
  if (request.message === 'go_bomber' && request.bomber === BOMBER) {
    var clickDeletePost = function clickDeletePost($selection) {
      $selection[0].click();
      console.dir(sendResponse);
      console.dir($selection);
      waitForItemAbsence('h3:contains(Delete Post)', function () {
        console.log('GONEEE NOT SENDING ', sendResponse);
        sendResponse({message: 'bomber_done', bomber: 'timeline', i: request.i });
      })
    };

    var $storyOptions = $("[aria-label='Story options']")[0];
    $storyOptions.click();

    waitForItem('a:contains(Delete):not(.fbn--nuked)', function ($selection) {
      console.log("SELECTOR?? ", $selection);
      $($selection).addClass('fbn--nuked');
      $selection[0].click();
      waitForItem('button:contains(Delete Post)', clickDeletePost);
    });

    console.log("RETURN NIG TRUE ", true);
    return true;
  }
  return true;
}

window['timeline.bomber'] = onMessage;