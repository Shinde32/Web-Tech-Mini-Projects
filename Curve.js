var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var control1 = document.getElementById("cnt1");
var control2 = document.getElementById("cnt2");

var int1 = document.getElementById("int1");
var int2 = document.getElementById("int2");

var startx = 0;
var starty = 375;


var endx = 1000;
var endy = 375;



var x1 = 650, 
    y1 = -225,   
    x2 = 650,
    y2 = 600;
    
   
function down1(e){  
   canvas.onmousemove = function(e){
      x1 =     e.clientX; 
      y1 =     e.clientY;
       draw();  
   }
    control1.onmousedown = down11;
    
}

function down11(e){
	canvas.onmousemove = null;
	control1.onmousedown = down1;
	
}



function down2(e){  
   canvas.onmousemove = function(e){
      x2 =     e.clientX; 
      y2 =     e.clientY;
       draw();  
   }
    control2.onmousedown = down22;
    
}

function down22(e){
	canvas.onmousemove = null;
	control2.onmousedown = down2;
	
}



function down3(e){  
   canvas.onmousemove = function(e){
      startx =     e.clientX; 
      starty =     e.clientY;
       draw();  
   }
    int1.onmousedown = down33;
    
}

function down33(e){
	canvas.onmousemove = null;
	int1.onmousedown = down3;
	
}



function down4(e){  
   canvas.onmousemove = function(e){
      endx =     e.clientX; 
      endy =     e.clientY;
       draw();  
   }
    int2.onmousedown = down44;
    
}

function down44(e){
	canvas.onmousemove = null;
	int2.onmousedown = down4;
	
}




function draw(){

     canvas.width = canvas.width;

    control1.style.left = (x1-15) + "px";
    control1.style.top = (y1+340) + "px";


    control2.style.left = (x2-15) + "px";
    control2.style.top = (y2) + "px";

    int1.style.left = (startx+145) + "px";
    int1.style.top = (starty-10) + "px";

    int2.style.left = (endx+145) + "px";
    int2.style.top = (endy-10) + "px";


    ctx.moveTo(500, 0);
    ctx.lineTo(500, 500);
    ctx.stroke(); 

    ctx.moveTo(0, 250);
    ctx.lineTo(1000, 250);
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(startx, starty);
    ctx.bezierCurveTo(x1, y1, x2, y2, endx, endy);
    ctx.stroke();

}

draw();