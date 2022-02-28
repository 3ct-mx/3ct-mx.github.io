// accordion 

$(document).ready(function(){
    $(function() {  
        $( "#accordion" ).accordion();  
      }); 
});

// creaciÃ³n de los grÃ¡ficos en el header principal

var w = window.innerWidth;
var h = 240; // window.innerHeight * 0.35;  

function setup() {
  canvas=createCanvas(w, h);
  canvas.parent('randomBackground');
  colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
  stroke(26, 101, 158, random(.75));
  strokeWeight(1);

  line(random(width), random(height), random(width), random(height));
  }

window.onresize = function() { 
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}
