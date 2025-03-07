status = "";
video = "";


function preload(){
    video = createVideo('hello.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}


function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
object_name=document.getElementById("object").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw(){
    image(video, 0, 0, 480, 380);
}
