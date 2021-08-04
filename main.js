noseX=0;
noseY=0;

function preload() {
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(475,200);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  
}



function draw() {
  image(video, 0, 0, 400, 400);
}

function take_snapshot(){    
  save('myFilterImage.png');
}