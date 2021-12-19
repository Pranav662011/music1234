song="";
song1="";

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
songstatus="";
RightWristScore=0;
LeftWristScore=0;



function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function preload(){
    song=loadSound("believer.mp3");
    song1=loadSound("safari.mp3");
    
    
    
}

function gotPoses(){
if(results.length>0){
    console.log(results);
    RightWristScore=results[0].pose.keypoints[10].score;
    LeftWristScore=results[0].pose.keypoints[9].score;
    console.log(" LeftWristScore = "+ LeftWristScore);
    console.log(" RightWristScore = "+ RightWristScore);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("LeftwristX = "+leftWristX+", leftwristY = "+leftWristY);
    

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightwristX = "+rightWristX+", rightwristY = "+rightWristY);
 }
}

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
     image(video, 0,0, 600, 500);
}





function play(){
    song1.play();
   

}