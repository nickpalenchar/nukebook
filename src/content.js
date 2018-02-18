chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      if(confirm('WARNING!\nYOU ARE ABOUT TO DELETE EVERYTHING.. PERMENENTLY')){
        var $storyOptions = $("[aria-label='Story options']")[0];
        $storyOptions.click();

        console.log('selector?? ', '#' + $storyOptions.getAttribute('id') + ' a:contains(Delete)');

        let p = waitForItem('a:contains(Delete)');
        window.p = p;
        chrome.p = p;
        console.log('ueoo', window);
        console.log("P???? ", p);
        p.then(function($selection){
            console.log('GOT IT ', $selection);
            $selection[0].click();
          });
      }
    }
  }
);

function waitForItem(selector, fn, _delay){
  // keeps polling until a menu item appears, then fires the callback
  // this is useful for waiting for asynchronous menu items to show up
  // i.e. the delete menu after clicking on the three dots icon.
  return new Promise(function(resolve, reject){
    _delay = _delay || 1;

    if(_delay > 1048575) {
      // 20th time we've tried again.
      reject(Error("cannot find element ", selector));
    }
    console.log('seleting...');
    var $selection = $(selector);

    if($selection.length > 0){
      console.log("found selection ", $selection);
      return resolve($selection);
    }
    else {
      setTimeout(function(){waitForItem(selector, fn, _delay*2)}, _delay);
    }
  })
}