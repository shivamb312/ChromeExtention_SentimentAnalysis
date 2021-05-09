

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
function makeid(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * 
charactersLength)));
 }
 return result.join('');
}


async function processPost(elem)  {
  posts.push(elem);
let f = $(elem).find("[lang]");
  var txt = $(f).text();
  if (txt.length < 5 || !$(f).is(":visible") ) {
    return;
  }
console.log($(elem).height());
// .then(data => data.Sentiment)
getSentiment(txt)
.then(dtt => {
  let data = dtt.Sentiment;

  let color = "#0000FF";
  let idx = makeid(7);
  if (data == "POSITIVE") {
    color = "#00FF00";
    $(f).addClass("greenc");
  }
  else if (data == "NEGATIVE")  {
    color = "#FF0000";
    $(f).addClass("flagged");
  }
  console.log( );
  // elem.appendChild(createButtonElement());
  // const imgUrl = (chrome.runtime.getURL('img/logo.png'));
  // const sp = $("<div>", {id: idx, "class": "aus"});
  // const link = $("<a>").append(sp);


  // .css({
  //   "height": "20px",
  //   "width": "20px",
  //   // "background-size": "cover",
  //   // "background-image": "url(" + imgUrl + ")"
  // });

  // const img = $("<img> </img>");
  // img.attr('src', "imgUrl");
  // sp.append(img);
  // $(elem).append(sp);
  // $("#"+idx).click( function(data)  {
  //   console.log(txt);
  // });
  // $( "a" ).on( "click",".aus", function(e) {
  //   console.log( $( this ) );
  //   // e.stopPropagation();
  // });


//   $(f[0]).delegate('span#'+idx,'click',function() {
//     // your code here ...
//     alert(txt);
// });


  // var log = document.getElementById(idx);
  // log.addEventListener('click', function() {
  //   alert(txt);
  // }, true);
  // sp.click(function(){
  //   // $("h2").html("<p class='test'>click me</p>")
  //   alert(txt);
  // });  
  // $(elem).css({
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
