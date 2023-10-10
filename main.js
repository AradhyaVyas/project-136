noseX=0;
noseY=0;
difference = 0;
reightWristX = 0;
leftWristX = 0;

function preload() {
}

function setup() {
    video =createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX+"noseY = "+noseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX + "rightWristX"+ rightWristX + "difference" +difference);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Intialized!');
}

function draw() {
    backgroung('#ffc0cb');
    Fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, 100);
}