// Add event listener until everything is loaded in the extension
document.addEventListener('DOMContentLoaded', function() {
    // find the button. only 1 button so it's easy
    // document.querySelector('button').addEventListener('click',
    //     onClick, false)

    // function onClick() {
    //     alert("Sentiment Analysis should be activated.")
    // }
    var swit = document.getElementById('switch');
    swit.addEventListener('click', Toggled, false);
    


    chrome.storage.local.get(['on'], function(result) {
        console.log('Value currently is ' + result.on);
        document.getElementById('switch').checked = result.on;
    });

}, false)

function Toggled()  {
    console.log("Toggled");
    let toggleWarning = document.getElementById('warning');
    toggleWarning.innerText = "Refresh the page now to see changes!";
    var value =  document.getElementById('switch').checked;
    
    chrome.storage.local.set({on: value}, function() {
        console.log('Value is set to ' + value);
      });
    

    // console.log(ev);
}