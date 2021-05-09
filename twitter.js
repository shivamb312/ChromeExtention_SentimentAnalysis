

function print(x)  {
  console.log("extention", x);
}

function firstC(node) {
  return node.childNodes[0];
}
function firstCN(node, n) {
  while(n--)  {
    node = firstC(node);
  }
  return node;
}
var t = 0;

var posts = [];

function processPost(elem)  {
  posts.push(elem);
let f = $(elem).find("[lang]");
  var txt = $(f).text();
  if (txt.length < 5) {
    return;
  }

// .then(data => data.Sentiment)
getSentiment(txt)
.then(dtt => {
  let data = dtt.Sentiment;

  let color = "#0000FF";

  if (data == "POSITIVE") {
    color = "#00FF00";
  }
  else if (data == "NEGATIVE")  {
    color = "#FF0000";
  }
  $(elem).css({
    "border-color": color,
    "border-width": "2px",
    "border-style": "solid"
  });
  

  console.log("extention", "text", txt);
  console.log("extention", 'Success:', dtt);
})
.catch((error) => {
  console.error( 'Error:', error);
});

}

function nodeInsertedCallback(event) {

  isExtentionOn()
  .then(on => {
    console.log("Here");
    console.log(on);
    if (on) {
      let elem = event.target;
      let p = $(elem).parent().parent().parent();
      var attr = $(p).attr('role');
      if (typeof attr !== 'undefined' && attr !== false) {
        if (attr == "region") {
          
          processPost(elem);
        }
    }
    }
  })
  .catch(e => {
    console.log(e);
  }); 



// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.

};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
function checkIfPost(elem)  {

}
