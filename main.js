prediction1=""
prediction2=""
Webcam.set({
    width: 350, height:300, image_format:'png', png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("camera");

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_url+"'>";
    });
}

console.log("ml5.version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KmhcC7TRP/model.json",modelloaded());

function modelloaded(){
    console.log("modelloaded");
}

function speak(){
    var synth=window.speechSynthesis;
    var speechdata1="The first prediction is "+prediction1;
    var speechdata2="The second prediction is "+prediction2;
    var utterence=new SpeechSynthesisUtterance(speechdata1+speechdata2);
    synth.speak(utterence);
}

speak();