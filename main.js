canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_r_images = ["mars.jpg", "mars_2.png", "mars_3.png", "mars_4.png", "mars_5.png"];

random_number = Math.floor(Math.random() * 5);


background_image= nasa_r_images[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "37") {
        Left();
        console.log("left arrow is pressed");
    }
    if (keyPressed == "38") {
        Up();
        console.log("Up arrow is pressed");
    }
    if (keyPressed == "39") {
        Right();
        console.log("right arrow is pressed");
    }
    if (keyPressed == "40") {
        Down();
        console.log("down arrow is pressed");
    }
}

function Up() {
    if (rover_y >=0) {
        rover_y -= 10;
        console.log("When up arrow is pressed, x=" + rover_x + " y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function Down() {
    if (rover_y <=500) {
        rover_y += 10;
        console.log("When up down arrow is pressed, x =" + rover_x + " y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}


function Left() {
    if (rover_x >=0) {
        rover_x -= 10;
        console.log("When up arrow is pressed, x=" + rover_x + " y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function Right() {
    if (rover_x <=500) {
        rover_x += 10;
        console.log("When up down arrow is pressed, x =" + rover_x + " y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}