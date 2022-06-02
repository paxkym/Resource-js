window.jsPDF = window.jspdf.jsPDF;
var file = "File has not yet been saved to";
var shrek;
var prev2 = 0;
var ping = 0;
var prev;
var call2;
var i4 = 0;
var code = "";
var ids = [];
var done = false;
var trueids = [];
const alphabet = [ "1","2","3","4","5","6","7","8","9","0"
];
var blacklist = [];
var i = 0;
var i2 = 0;
var canvas = document.getElementById('submirror');
    var ctx = canvas.getContext("2d");
var codeSourceText = ["https://thumbs.dreamstime.com/b/a-",".jpg",10,5,"https://dreamstime.com/"];
var resource = {};
resource.source = function(source,id){
  document.getElementById(id).src = codeSourceText[0] + source + codeSourceText[1];
}
resource.setSource = function(source){
  if(source == 0){
    codeSourceText = ["https://thumbs.dreamstime.com/b/a-",".jpg",10,5,"https://dreamstime.com/"];
  }else if(source == 1){
    codeSourceText = ["https://media.istockphoto.com/photos/a-id","",10,1,"https://istockphoto.com/"];
  }else if(source == 2){
    codeSourceText = ["https://image.shutterstock.com/image-photo/-600w-",".a",10,0,"https://shutterstock.com/"];
  }else if(source == 3){
    codeSourceText = ["https://freerangestock.com/sample/","/a.jpg",10,1,"https://freerangestock.com/"];
}
};
resource.start = function(){
 var p = new Ping();
var iter = 0;
  while(iter<2){
// Using callback
p.ping(codeSourceText[4], function(err, data) {
 ping = data;
});
    iter++;
  }
  console.log("ping: ", ping);
}
resource.start();
resource.source("101800169","mirror2");
resource.source("101800169","IMG")
function sourceFindRandom(){
  i = 0;
  var element = "";
while(i<codeSourceText[2]-(Math.ceil(Math.random()*codeSourceText[3]))){
  i++;
  element = element + alphabet[Math.floor(Math.random()*10)];
}

  return(String(element));
};
resource.getResourcesBy = async function(method,special){
  var special2;
 var iter = 0;
prev = call2;
  prev2++;
call2 = sourceFindRandom();
  while(iter<100){
    resource.start();
    prev = call2;
    if(method == "random"){
        call2 = sourceFindRandom();
    }else if(method == "name"){
      codeSourceText = ["https://jooinn.com/images600_/",".jpg",3,1,"https://jooinn.com/"]
      call2 = sourceFindRandom();
    }
      ids.push(prev);
    if(method == 'name'){
    special2 = special + "-";
    }
  const temp = (resource.validate(special2 + call2));
             await delay(ping+2)
    trueids.push(temp);
    iter++;
  }
    iter = 0;
  var idstemp = [];
 while(iter<100){
   if(trueids[iter]){
     idstemp.push(ids[iter]);
   }
     iter++;
 }
  ids = idstemp;
  console.log(ids);
  resource.source(ids[0],"IMG");
 //generate canvas and put image on it
   src = String(sourceFindRandom());
 
resource.source(src,"IMG");
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
 resource.validate = function(source){
  done = false;
 fetch(codeSourceText[0] + source + codeSourceText[1]).then(function(response){
   code = response.status;
 });
   console.log(code);
done = true;
    if(code == 200){
    return(true);
  }else if(code == 500 || code == 404 || code == 0 || code == 422){
    return(false);
  }else{
    console.log("Error code: ", code);
    return(false);
  }
   

};
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
async function find(call){
    document.getElementById('state').innerHTML = 'Working...';
 var iter = 0;
prev = call2;
  prev2++;
call2 = sourceFindRandom();
  while(iter<100){
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
 while(iter<100){
   if(trueids[iter]){
     idstemp.push(ids[iter]);
   }
     iter++;
 }
  ids = idstemp;
  console.log(idstemp);
  document.getElementById('state').innerHTML = 'Done! Generated ' + ids.length + ' images.';
};
function direct(arrow){
  if(arrow == 0){
    i4++
    resource.source(ids[i4], "IMG");
  }
}
