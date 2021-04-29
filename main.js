Webcam.set({
    image_format:"png",
    png_quality:90,
    width:350,
    height:300

});
Webcam.attach(" #camera");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='captured_image' src=" + data_uri + ">";
    });
}

console.log("ml5 version=", ml5.version);

classifier= ml5.imageClassifier("",modelLoaded);

function modelLoaded(){
    console.log("model successfully loaded");
}

function identify(){
    img= document.getElementById('captured_img');
    Classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML= results[0].label;
        document.getElementById("accuracy").innerHTML= results[0].confidence.toFixed(3);
    }
}