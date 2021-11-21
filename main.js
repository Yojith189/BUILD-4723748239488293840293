 Webcam.set({
width: 367,
height:280,
image_format : "jpeg",
jpeg_quality : 200





 });
 cam= document.getElementById("camera");
Webcam.attach(cam);

function take_pic(){

Webcam.snap(function(data_uri){

    document.getElementById("snapshot").innerHTML='<img id="capimg" src="'+data_uri+'">';
});
}
console.log("THEEEEEEEEE ML555555 IS WORKING",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TSWIcH9oU/model.json",ModelLoaded);
function ModelLoaded(){
    console.log("Model is succesfully LLLLLLLOOOOOOOOOAAAAAAADDDDDDDDEEEEDDDDDDDDDD");
}