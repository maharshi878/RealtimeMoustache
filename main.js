noseX=0
noseY=0
function preload() {
  moustache = loadImage('https://i.postimg.cc/vZCwZTPn/moustache.png');
}
function setup() {
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300)
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
  if(results.length > 0){
    
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
  }
}
function modelLoaded() {
  console.log('bruh123loaded');
}
function draw() {
  image(video, 0, 0, 300, 300);
  image(moustache, noseX,noseY,60,60)
}
function take_snapshot() {
  save('randomPNG.png');
}
