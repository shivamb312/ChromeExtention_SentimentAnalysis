// Add event listener until everything is loaded in the extension
document.addEventListener('DOMContentLoaded', function() {
    // find the button. only 1 button so it's easy
    document.querySelector('button').addEventListener('click',
        onClick, false)

    function onClick() {
        alert("Sentiment Analysis should be activated.")
    }
}, false)