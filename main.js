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
 
  poseNet= ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){

}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("Nose x="+noseX);
    console.log("Nose y="+noseY);
  }
}

function draw() {
  image(video, 0, 0, 400, 400);
}

function take_snapshot(){    
  save('myFilterImage.png');
}