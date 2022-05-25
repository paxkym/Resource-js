window.jsPDF = window.jspdf.jsPDF;
var file = "File has not yet been saved to";
var code = "";
var ids = [];
const alphabet = [ "1","2","3","4","5","6","7","8","9","0"
];
var blacklist = [];
function source(source,id) {
  document.getElementById(id).src = "https://thumbs.dreamstime.com/b/a-" + source + ".jpg";
}
source("92316401","mirror2");
source("92316401","IMG")
var i = 0;
var canvas = document.getElementById('submirror');
    var ctx = canvas.getContext("2d");
 function filt(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
function sourceFindRandom(){
  i = 0;
  var element = "";
while(i<15-(Math.ceil(Math.random()*14))){
  i++;
  element = element + alphabet[Math.floor(Math.random()*10)];
}

  return(String(element));
};
var i2 = 0;

function resource(){
    source(ids[0],"IMG");
  //find random valid images from database
 var i3 = 0;
 var src = "";
  while(i3<30){
    i3++;
    src = sourceFindRandom();
    if(validate(src)){
      console.log("Validity: ", validate(src), ", ID: ", src);
      ids.push(src);
    }

  }  
  console.log("Retrieved image IDs: ");
  console.log(ids.toString());
  source(ids[0],"IMG");
 //generate canvas and put image on it
   src = String(sourceFindRandom());
  
source(src,"IMG");
  const img = document.getElementById("IMG");
ctx.drawImage(img, 0, 0);
  //convert canvas data to usable image file
  img.crossOrigin = "Anonymous";
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  ctx.putImageData(imgData, 0, 0);
  //convert to PDF
  var doc = new jsPDF();
  doc.addImage(imgData, 'JPEG', 15, 40, 90, 160);
}
//
function validate(source){
//retrieve http status code
fetch("https://thumbs.dreamstime.com/b/a-" + source + ".jpg").then(response => {
     code = String(response.status);
          console.log("IDin: ", code);
  sessionStorage.setItem('shrek', code);
    })
      code = sessionStorage.getItem('shrek');
  //returns true if image ID exists on server, returns false if given error
  if(code == 200){
    return(true);
  }else if(code == 500 || code == 404 || code == 0){
    return(false);
  }else{
    console.log("Error code: ", code);
    return(false);
  }
};
function cust(call){
  var call2 = "15580";
  var iter = 0;
  while(iter<1){
    if(validate(call2)){
            source(call, "IMG");
    console.log("Call: ", call);
    }
    iter++;
  }
};
