

// function yourFunctionName() {
//   console.log("extention", "load");
// }

// if(window.attachEvent) {
//   window.attachEvent('onload', yourFunctionName);
// } else {
//   if(window.onload) {
//       var curronload = window.onload;
//       var newonload = function(evt) {
//           curronload(evt);
//           yourFunctionName(evt);
//       };
//       window.onload = newonload;
//   } else {
//       window.onload = yourFunctionName;
//   }
// }

// document.addEventListener("DOMContentLoaded", function(){
//   console.log("extention", "loaded");

// });

// function






function print(x)  {
  console.log("extention", x);
}

// $(document).

print($("div span"));




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

  const data = [txt];
// console.log("")
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
.then(data => data.Sentiment)
.then(data => {

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
  console.log("extention", 'Success:', data);
})
.catch((error) => {
  console.error( 'Error:', error);
});


  
}




function nodeInsertedCallback(event) {
  let elem = event.target;
  let p = $(elem).parent().parent().parent();
  var attr = $(p).attr('role');

// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.
if (typeof attr !== 'undefined' && attr !== false) {
    if (attr == "region") {
      processPost(elem);
    }
}
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
function checkIfPost(elem)  {

}


// var interval = setInterval(function() { 
//   t++;
//   print("in here "+ t);
//   if (t%5==0)  {
//     var d = 	$("[tabindex='0']");
//     print(d);
//     for (var i = 0;i < d.length; i++) {
//       print(d[i]);
//     }

//     // clearInterval(interval);
//   }

// }, 1000);

  // if (document.getElementsByTagName("main")[0] !== undefined) { 
  //   console.log("extention", "loaded2");
  //   const ft = document.getElementsByTagName("main")[0];
  //   console.log("extention", ft);
  //   console.log("extention", firstCN(ft, 3));

  //    clearInterval(interval);
  // }
  // else { 
    // console.log("extention", "not loaded2");
// 
  // }


// while(document.getElementsByTagName("main")[0] === undefined) {
//   // if () {
//     console.log("extention", "undefined");
//     // break;
//   // }

// };

//  const ft = document.getElementsByTagName("main")[0];
// console.log("extention", ft);
// const selectElement = document.getElementById('react-root');
// console.log("extention", selectElement);
// console.log("extention", selectElement.childNodes[0].childNodes[0].childNodes);

// selectElement.addEventListener('change', (event) => {
//   // const result = document.querySelector('.result');
//   // result.textContent = `You like ${event.target.value}`;
//   console.log("extention", "change");

// });


// alert("ff");
// var x = document.getElementsByTagName('SECTION');
// console.log("extention", x);

// let divs = document.querySelectorAll("div") // Load Div Elements

// for(let div of x){
// let dataTestId = div.getAttribute("aria-labelledby");
// if(dataTestId != null){
// console.log("extention", div); // Printing the html of a tweet
// // break; // First we just want to find one tweet
// // break;
// }
// else  {
//   console.log("extention", "wow");
// }
// } // Load Tweet Elements by checking for specific Attribute