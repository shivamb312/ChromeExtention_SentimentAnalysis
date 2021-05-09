

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
  // posts.push(elem);
let f = $(elem).find("[data-ad-preview='message']")[0];
print(f);

// return;
  var txt = $(f).text();

  if (txt.length < 5) {
    return;
  }
  var elemBor = $(elem).children(":first").children(":first");

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
.then(data => data.ResultList[0])
// .then(data => data.Sentiment)
.then(dtt => {
  let data = dtt.Sentiment;

  let color = "#0000FF";

  if (data == "POSITIVE") {
    color = "#00FF00";
    $(f).find("span").addClass("greenc ");

  }
  else if (data == "NEGATIVE")  {
    $(f).find("span").addClass("flagged");
    color = "#FF0000";
  }
  // $(elemBor).css({
  //   "border-color": color,
  //   "border-width": "2px",
  //   "border-style": "solid"
  // });
  

  console.log("extention", "text", txt);
  console.log("extention", 'Success:', dtt);
})
.catch((error) => {
  console.error( 'Error:', error);
});

}

function nodeInsertedCallback(event) {
  let elem = event.target;
  // print(elem);
  // let p = $(elem).parent().parent().parent();
  var attr = $(elem).attr('data-pagelet');
  //bigtext  - exception - lead- id: #jsc_c_c7
// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.
if (typeof attr !== 'undefined' && attr !== false) {
    // if (attr == "region") {
      print(elem);
      processPost(elem);
    // }
    // print(elem);
}
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
function checkIfPost(elem)  {

}
