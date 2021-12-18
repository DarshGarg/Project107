function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NceKkJMCW/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = 'I Can Hear -' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+ random_number_r + ", "+ random_number_g +", "+ random_number_r +")";
        document.getElementById("result_confidence").style.color = "rgb("+ random_number_r + ", "+ random_number_g +", "+ random_number_r +")";

        img = "bark.jpg";
        img1 = "meow.jpg";
        img2 = "moo.jpg";
        img3 = "roar.jpg";

        if (results[0].label == "bark") {
            img.src = 'bark.gif';
            img1.src = 'meow.jpg';
            img2.src = 'moo.jpg';
            img3.src = 'roar.jpg';
        }

        else if (results[0].label == "meow") {
            img.src = 'bark.jpg';
            img1.src = 'meow.gif';
            img2.src = 'moo.jpg';
            img3.src = 'roar.jpg';
        }

        else if (results[0].label == "moo") {
            img.src = 'bark.jpg';
            img1.src = 'meow.jpg';
            img2.src = 'moo.gif';
            img3.src = 'roar.jpg';
        }

        else if (results[0].label == "roar") {
            img.src = 'bark.jpg';
            img1.src = 'meow.jpg';
            img2.src = 'moo.jpg';
            img3.src = 'roar.gif';
        }
    }
}