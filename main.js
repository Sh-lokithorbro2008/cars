var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2D");

var rover_width=100;
var rover_height=90;

var background_image="racing.gif";
var rover_image="";

var rover_x=10;
var rover_y=10;

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=upLoadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function upLoadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}