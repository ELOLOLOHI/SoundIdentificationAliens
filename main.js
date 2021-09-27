function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/L-Iazoiit/model.json", result_stuff);
}

function result_stuff(){
    classifier.classify(gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }

    else if(result){
        console.log(result);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_sound").innerHTML="I can hear - "+result[0].label;
        document.getElementById("result_accuracy").innerHTML="Confidence - "+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_sound").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_accuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");

       if(result[0].label=="Drivers License"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(result[0].label=="Beatboxing"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";

        }
        else if(result[0].label=="Piano"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";

        }
        else if(result[0].label=="Background Noise"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }

    }
    
}


//Drivers License, Beatboxing, Piano, Background Noise