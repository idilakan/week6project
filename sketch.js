function preload(){
  flowers = loadImage('nergis3.jpg');
  card = loadImage('card.png');
}


function setup() {
  createARCanvas(350, 550,P2D,{scale:3, markerId:59});
  textAlign(LEFT,CENTER);
  p5SimpleAREnableGesture(true);
  // p5SimpleAREnableGesture(false);
}

function draw() {
  
  background(255);
  
   image(card,0,0,350,550);

   image(flowers,40,70,240,200);
  
  //fill(255);
  
  text('Nergis',80,25);
  
  text('Nergis Poeticus',135,307);
  
  text('Alem:	Plantae      ',40,360);
  text('Sube:	Magnoliophyta',40,390);
  text('Sınıf:	Liliopsida   ',40,420);
  

}

function mouseClicked() {
console.log(p5SimpleARGetMarkerProperty());
  // console.log(p5SimpleARGetMarkerProperty(1));
}



//  function setup() {
//  createARCanvas(600, 600, WEBGL, { scale: 6, markerId: 63 });
//  p5SimpleAREnableGesture(true);
//}https://github.com/supermedium/three.js
//
//function draw() {
//  background(0);
//
//  noStroke();
//  texture(img);
//
//  push();
//  
//  textSize(20);
//  fill(255);
//  text("Nergis", -290, -250);
//  
//  textSize(15);
//  fill(255);
//  text("", -290, -230);
//  
//  pop();
//}