function setup() {
  createCanvas(700, 400);
  colorMode(HSB, 100) 
  angleMode(DEGREES)

  
  var h = random()*100

  backgroundWash = color(h, 5, 90)
  baseColor = color(h+50, 50, 80)
  highlightColor = color(h+17, 80, 40)
  
  noLoop();
  
}

var backgroundWash
var baseColor
var highlightColor

function draw() {
  background(backgroundWash);
  
  fill(baseColor)
  strokeWeight(2)
  
  fill(highlightColor)
  rect(230, 100, 100, 50)
  
  fill(highlightColor)
  rect(140, 70, 100, 50)
  
  fill(baseColor)
  circle(300, 100, 50)
  circle(80, 100, 70)
  circle(120, 55, 100)
  circle(60, 40, 50)
  
  fill(backgroundWash)
  triangle(350, 220, 70, 80, 200, 380)

  fill(baseColor)
  quad(350, 100, 450, 100, 500, 150, 400, 150)
  
  ellipse(350, 300, 80, 40)
  
  for(var i=0; i < width; i += 25){
    for(var j=0; j < height; j += 25){

      circle(i+5,j+5,5)   
      
 
    }
  }
}