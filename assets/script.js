var score = 0;

function submitAnswers(){
   var score = 0;
   if (document.getElementById('correct1').checked){
     score++;
   }
   if (document.getElementById('correct2').checked){
     score++;
   }
   if (document.getElementById('correct3').checked){
     score++;
   }
   alert("Your score is " + score );
   alert( result(score));
}


function result(score){


    var percentage = score/3 * 100;
     
    if (percentage > 80){
      alert("Excellent");
    }
    else if (percentage >50 && percentage < 80  ){
      alert("Fair");
    }  
    else if (percentage< 50){
      alert("Poor! Retake the test");
    }
}

result()