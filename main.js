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
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KmhcC7TRP/model.json",modelloaded);

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

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,getResult);
}

function getResult(error,results){
    if (error){
        console.log(error);
    }

    else{
        console.log(results);
        prediction1=results[0].label;
        prediction2=results[1].label;
        document.getElementById("result_emotion_name").innerHTML=prediction1;
        document.getElementById("result_emotion_name2").innerHTML=prediction2;
        speak();

        if(prediction1=="Happy"){
            document.getElementById("update_emoji").innerHTML="&#128512;";
        }

        if(prediction1=="Sad"){
            document.getElementById("update_emoji").innerHTML="&#128546;";
        }

        if(prediction1=="Angry"){
            document.getElementById("update_emoji").innerHTML="&#128545;";
        }

        if(prediction2=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128512;";
        }

        if(prediction2=="Sad"){
            document.getElementById("update_emoji2").innerHTML="&#128546;";
        }

        if(prediction2=="Angry"){
            document.getElementById("update_emoji2").innerHTML="&#128545;";
        }
    }
}