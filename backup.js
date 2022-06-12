window.jsPDF = window.jspdf.jsPDF;
sessionStorage.clear;
var file = "File has not yet been saved to";
var imgData2;
var prev2 = 0;
var ping = 0;
var prev;
var call2;
var i4 = 0;
var code = "";
var ids = [];
var done = false;
var trueids = [];
const alphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var blacklist = [];
var i = 0;
var i2 = 0;
var canvas = document.getElementById('submirror');
var ctx = canvas.getContext("2d");
var codeSourceText = ["https://thumbs.dreamstime.com/b/a-", ".jpg", 10, 5, "https://dreamstime.com/"];
var resource = {};
resource.source = function(source, id) {
  document.getElementById(id).src = codeSourceText[0] + source + codeSourceText[1];
}
resource.setSource = function(source) {
  if (source == 0) {
    codeSourceText = ["https://thumbs.dreamstime.com/b/a-", ".jpg", 10, 5, "https://dreamstime.com/"];
  } else if (source == 1) {
    codeSourceText = ["https://media.istockphoto.com/photos/a-id", "", 10, 1, "https://istockphoto.com/"];
  } else if (source == 2) {
    codeSourceText = ["https://image.shutterstock.com/image-photo/-600w-", ".a", 10, 6, "https://shutterstock.com/"];
  }
};
resource.start = function() {
  var p = new Ping();
  var iter = 0;
  while (iter < 2) {
    // Using callback
    p.ping(codeSourceText[4], function(err, data) {
      ping = data;
    });
    iter++;
  }
  console.log("ping: ", ping);
}
resource.start();
resource.source("101800169", "mirror2");
resource.source("101800169", "IMG")
function sourceFindRandom() {
  i = 0;
  var element = "";
  while (i < codeSourceText[2] - (Math.ceil(Math.random() * codeSourceText[3]))) {
    i++;
    element = element + alphabet[Math.floor(Math.random() * 10)];
  }

  return (String(element));
};
resource.randomMyriad = async function() {
  var iter = 0;
  prev = call2;
  prev2++;
  call2 = sourceFindRandom();
  //collect resources
  while (iter < 100) {
    prev = call2;
    call2 = sourceFindRandom();
    resource.start();
    code = 0;
    await resource.validate(call2).then(code => {
   sessionStorage.setItem('resp', code)
 })
    await delay(ping) 
if(sessionStorage.getItem('resp')){
  if(sessionStorage.getItem('resp')){
  ids.push("the id: " + call2 + "is: " + sessionStorage.getItem('resp'));
  }
}
    iter++;

  }
  //classify resources
    console.log(ids);
  return ids;
  resource.source(ids[0], "IMG");
  //generate canvas and put image on it
  src = String(sourceFindRandom());

  resource.source(src, "IMG");
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
resource.validate = async function(source) {
  fetch(codeSourceText[0] + source + codeSourceText[1]).then(function(response){
  code = response.status;
});
    await delay(ping);
   if(code == 200){
    sessionStorage.setItem('resp',true);
}else if(code == 500 || code == 404 || code == 0 || code == 422){
    sessionStorage.setItem('resp',false);
    console.log(sessionStorage.getItem('resp'));
 }else{
 console.log("Error code: ", code);
    sessionStorage.setItem('resp',false);
 }
  return(sessionStorage.getItem('resp'));
};
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
async function find(call) {
  document.getElementById('state').innerHTML = 'Working...';
  var iter = 0;
  prev = call2;
  prev2++;
  call2 = sourceFindRandom();
  while (iter < 100) {
    prev = call2;
    call2 = sourceFindRandom();
    ids.push(prev);
    resource.start();
    await delay(ping)
    trueids.push(resource.validate(call2));
    iter++;
  }
  iter = 0;
  var idstemp = [];
  while (iter < 100) {
    if (trueids[iter]) {
      idstemp.push(ids[iter]);
    }
    iter++;
  }
  ids = idstemp;
  console.log(idstemp);
  document.getElementById('state').innerHTML = 'Done! Generated ' + ids.length + ' images.';
};
function direct(arrow) {
  if (arrow == 0) {
    i4++
    resource.source(ids[i4], "IMG");
  }
}
resource.namedSingular = async function(name) {
  var iter = 0;
  // gather resources
  const model = await mobilenet.load();
  document.getElementById('state').innerHTML = ids.length + " loading intelligence model...";
  document.getElementById('state').innerHTML = "Gathering resources...";
  await resource.randomMyriad();
  document.getElementById('state').innerHTML = ids.length + " images collected...";
  while (iter < ids.length) {
    sessionStorage.clear();
    resource.source(ids[iter], "IMG")
    const img = document.getElementById('IMG');
    // image classifier
model.classify(img).then(predictions => {
      file = (((JSON.stringify(predictions)).split('"'))[3]).split(',');
      console.log(file);
    });
    // process data
    document.getElementById('state').innerHTML = file;
    if (file.includes(name)) {
      alert("done! id = " + ids[iter + 1] + " " + file);
    }
    iter++;
  }
  document.getElementById('state').innerHTML = "no more images";
};
async function button(){ 
resource.setSource(2);
resource.randomMyriad();
};
