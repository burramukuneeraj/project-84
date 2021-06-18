var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="download.jpg";
rover_image="yum.jpg";
function load(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;
    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="38") {
        up();
        console.log("movingup");
    }
    if (keyPressed=="40") {
        down();
        console.log("movingdown");
    }
    if (keyPressed=="37") {
        left();
        console.log("movingleft");
    }
    if (keyPressed=="39") {
        right();
        console.log("movingright");
    }
}






























































































var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
car_x=10;
car_y=110;

car_image="by.jpg";
function load(){
    
    car_imagetag=new Image();
    car_imagetag.onload=uploadcar;
    car_imagetag.src=car_image;
}

function uploadcar(){
    ctx.drawImage(car_imagetag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="87") {
        up();
        console.log("car movingup");
    }
    if (keyPressed=="65") {
        down();
        console.log("car movingdown");
    }
    if (keyPressed=="83") {
        left();
        console.log("car movingleft");
    }
    if (keyPressed=="68") {
        right();
        console.log("car movingright");
    }
}