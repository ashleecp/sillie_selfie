var myimages = []; // global array
var lastimg;       // global

window.onload = init();

function init() {
  myimages[0]="img/sillyface_1.jpg";
  myimages[1]="img/sillyface_2.jpg";
  myimages[2]="img/sillyface_3.jpg";
  myimages[3]="img/sillyface_4.jpg";
  myimages[4]="img/sillyface_5.jpg";
  myimages[5]="img/sillyface_6.jpg";
  myimages[6]="img/sillyface_7.jpg";
  myimages[7]="img/sillyface_8.jpg";
  myimages[8]="img/sillyface_9.jpg";

  random_imglink();
}

function random_imglink(){
  var ry;
  do{
    ry = Math.floor(Math.random()*myimages.length);//obtain a random index
  }while(lastimg==ry); // don't repeat the last image 
  document.getElementById('photoshow').src = myimages[ry];
  document.getElementById('photoshow').alt = myimages[ry] + ' not found';
  // setTimeout(random_imglink, 2000); // 2 seconds
  lastimg = ry;
}
