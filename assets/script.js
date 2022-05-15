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
   alert("Your score is " + score);
}


  
