function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
  strokeWeight(15);
  stroke(255);
  
  
  var x = 0;
  while(x<650){
    fill(180,11,186);
    ellipse(255, x, 25, 25);
    x = x + 50;
  } 
  
 for(var x = 0; x < 650; x = x + 75 ){
     fill(0, 255, 233);
     ellipse(150, x, 25, 25);
  }
 
}