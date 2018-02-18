// DEPENDS ON JQUERY

window.waitForItem = function(selector, fn, _delay) {
  // keeps polling until a menu item appears, then fires the callback
  // this is useful for waiting for asynchronous menu items to show up
  // i.e. the delete menu after clicking on the three dots icon.
  _delay = _delay || 1;

  if (_delay > 1048575) {
    // 20th time we've tried again.
    reject(Error("cannot find element ", selector));
  }
  console.log('seleting...');
  var $selection = $(selector);

  if ($selection.length > 0) {
    console.log("found selection ", $selection);
    fn($selection);
  }
  else {
    setTimeout(function () {
      waitForItem(selector, fn, _delay * 2)
    }, _delay);
  }
}

window.waitForItemAbsence = function(selector, fn, _delay) {
  // keeps polling until a menu item appears, then fires the callback
  // this is useful for waiting for asynchronous menu items to show up
  // i.e. the delete menu after clicking on the three dots icon.
  _delay = _delay || 1;

  if (_delay > 1048575) {
    // 20th time we've tried again.
    reject(Error("cannot find element ", selector));
  }
  console.log('seleting...');
  var $selection = $(selector);

  if ($selection.length === 0) {
    console.log("selection is gone");
    fn();
  }
  else {
    setTimeout(function () {
      waitForItem(selector, fn, _delay + 200)
    }, _delay);
  }
}