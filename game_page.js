var middle_index=0
var player_1_name=localStorage.getItem("player_1_name")
var player_2_name=localStorage.getItem("player_2_name")
document.getElementById("player1_name").innerHTML=player_1_name+":"
document.getElementById("player2_name").innerHTML=player_2_name+":"
var score_1=0
var score_2=0
document.getElementById("player1_score").innerHTML=score_1;
document.getElementById("player2_score").innerHTML=score_2;
document.getElementById("player_question").innerHTML="Question Turn-"+player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player_2_name;

function send()
{
    question_word=document.getElementById("word").value
    word=question_word.toLowerCase()

    secondletter = word.charAt(1);   //  c      



    middle_index = Math.floor(word.length / 2); //  7/2 = 3.5  = 3

    middleletter = word.charAt(middle_index);   // i





    lastletter_index = word.length - 1;    //7-1 = 6 

    lastletter = word.charAt(lastletter_index);   // s
      



    removedfirst = word.replace(secondletter, "_");   // a_tions

    removedmiddle = removedfirst.replace(middleletter, "_");      //a_t_ons

    removedlast = removedmiddle.replace(lastletter, "_");  // a_t_on_

    


    question_word = "<h4 id='word_display'> Q. " + removedlast+ "</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";



    row = question_word + input_box + check_button;

document.getElementById("output").innerHTML=row
document.getElementById("word").innerHTML=" "
}

var question_turn="player_1"
var answer_turn="player_2"

function check()
{
   answer=document.getElementById("input_check_box").value
   answer=answer.toLowerCase()
   if (word==answer) {
       if (answer_turn=="player_1") {
           score_1=score_1+1
           document.getElementById("player1_score").innerHTML=score_1
       } else {
        score_2=score_2+1
        document.getElementById("player2_score").innerHTML=score_2
       }
   }
   if (question_turn=="player_1") {
       question_turn="player_2"
       document.getElementById("player_question").innerHTML="Question Turn-"+player_2_name
   } else {
    question_turn="player_1"
    document.getElementById("player_question").innerHTML="Question Turn-"+player_1_name
   }
   if (answer_turn=="player_1") {
    answer_turn="player_2"
    document.getElementById("player_answer").innerHTML="Answer Turn-"+player_2_name
} else {
 answer_turn="player_1"
 document.getElementById("player_answer").innerHTML="Answer Turn-"+player_1_name
}
document.getElementById("output").innerHTML=" "
}