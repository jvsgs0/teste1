function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6f5VhYLuO/model.json', modelReady);
}
function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    console.log("resultado obitido");
}









//https://teachablemachine.withgoogle.com/models/6f5VhYLuO/