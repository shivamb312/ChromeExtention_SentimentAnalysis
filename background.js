
chrome.runtime.onInstalled.addListener(function() {
  // console.log("fads");

  let value = true;
  chrome.storage.local.set({on: value}, function() {
    console.log('Value is set to ' + value);
  });
  
});