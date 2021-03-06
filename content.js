function getSentiment(txt) {
  return new Promise((resolve, reject)  =>  {
    const data = [txt];
    fetch('https://l73c8hedzd.execute-api.us-west-2.amazonaws.com/getSentiments', {
      method: 'POST', // or 'PUT'
      // mode: 'cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => resolve(data.ResultList[0]))
    .catch(e => reject(e));
  });
}


function isExtentionOn()  {

  return new Promise(function(resolve, reject) {
    
    chrome.storage.local.get(['on'], function(result) {
      console.log('Value currently is ' + result.on);
      // document.getElementById('switch').checked = result.on;
      resolve(result.on);
    });



  });


}

function createButtonElement()  {
  const div = document.createElement("span");
  div.innerHTML="_test_";
  div.className="analystic";
  return div;
}