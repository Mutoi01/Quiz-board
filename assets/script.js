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

function result(){
  var percentage = score/3 * 100;
   
  if (percentage > 80){
    alert("Excellent");
  }
  
  else if (avg >50 && < 80  ){
    document.write("Fair");
  }
  
  else if (percentage< 50){
    document.write("Poor! Retake the test");
  }

}
