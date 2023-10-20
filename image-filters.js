var input = null;
var imageori = null;


function loadImage(){
  
  var can = document.getElementById('canvas');
  input = document.getElementById('image');
  imageori = new SimpleImage(input);
  imageori.drawTo(can);
}

function clearCanvas(){
  var can = document.getElementById('canvas');
  var context = can.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
}


function doGray(){
  clearCanvas();
  var imagegray = new SimpleImage(imageori.width, imageori.height);
  for (var pixel of imageori.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
    imagegray.setPixel(x, y, pixel);
   }
  var can = document.getElementById('canvas');
  imagegray.drawTo(can);
}

function doRed(){
  clearCanvas();
  var imagered = new SimpleImage(imageori.width, imageori.height);
  for (var pixel of imageori.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
    if(avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);      
    }
    imagered.setPixel(x, y, pixel);
   }
  var can = document.getElementById('canvas');
  imagered.drawTo(can);
}


function doRainbow(){
  clearCanvas();
  var imagerain = new SimpleImage(imageori.width, imageori.height);
  var h = imagerain.height
  for (var pixel of imageori.values()){
  
   if (pixel.getY()>h*6/7){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
      if(avg < 128){
        var r = (255/127.5)*avg;
        var g = (0/127.5)*avg;
        var b = (0/127.5)*avg;
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen((2*avg)-255);
        pixel.setBlue((2*avg)-255);      
      }
   }
   if(pixel.getY()>h*5/7 & pixel.getY()<h*6/7){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
      if(avg < 128){
        var r = (255/127.5)*avg;
        var g = (0.8)*avg;
        var b = (0/127.5)*avg;
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen((1.2*avg)-51);
        pixel.setBlue((2*avg)-255);      
      }
   }
   if(pixel.getY()>h*4/7 & pixel.getY()<h*5/7){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
      if(avg < 128){
        var r = (2)*avg;
        var g = (2)*avg;
        var b = (0/127.5)*avg;
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue((2*avg)-255);      
      }
   }
   if(pixel.getY()>h*3/7 & pixel.getY()<h*4/7){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
      if(avg < 128){
        var r = 0;
        var g = (2)*avg;
        var b = (0/127.5)*avg;
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
      }
      else{
        pixel.setRed((2*avg)-255);
        pixel.setGreen(255);
        pixel.setBlue((2*avg)-255);      
      }
   }
  if(pixel.getY()>h*2/7 & pixel.getY()<h*3/7){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
      if(avg < 128){
        var r = (0);
        var g = 0;
        var b = 2*avg;
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
      }
      else{
        pixel.setRed((2*avg)-255);
        pixel.setGreen((2*avg)-255);
        pixel.setBlue(255);      
      }
  }
  if(pixel.getY()>h/7 & pixel.getY()<h*2/7){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
    if(avg < 128){
        var r	= 9/127.5*avg;
        var g	= 66/127.5*avg;
        var b	= 147/127.5*avg;
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
      }
    else{
        pixel.setRed((2 - 9/127.5)*avg + 2*9 - 255);
        pixel.setGreen((2 - 66/127.5)*avg + 2*66 - 255);
        pixel.setBlue((2 - 147/127.5)*avg + 2*147 - 255);      
      }
  }  
  if(pixel.getY() < h/7){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    var x = pixel.getX();
    var y = pixel.getY();
    if(avg < 128){
        var r	= 127/127.5*avg;
        var g	= 0/127.5*avg;
        var b	= 255/127.5*avg;
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
      }
    else{
        pixel.setRed((2 - 127/127.5)*avg + 2*127 - 255);
        pixel.setGreen((2 - 0/127.5)*avg + 2*0 - 255);
        pixel.setBlue((2 - 255/127.5)*avg + 2*255 - 255);      
      }
  }
    
  imagerain.setPixel(x, y, pixel);
  }
  var can = document.getElementById('canvas');
  imagerain.drawTo(can);
}  