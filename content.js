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
