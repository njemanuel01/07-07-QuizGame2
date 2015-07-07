var question1 = {question:"What is the capital of Nebraska?", choices:"(1)-Omaha, (2)-Lincoln, (3)-Kearney, (4)-Fremont", answer: 2};
var question2 = {question:"What is the state bird of Nebraska?", choices:"(1)-Robin, (2)-Bluejay, (3)-Crane, (4)-Meadowlark", answer: 4};
var question3 = {question:"When did Nebraska become a state?", choices:"(1)-1867, (2)-1802, (3)-1912, (4)-1886", answer: 1};
var question4 = {question:"What is Nebraska's largest city?", choices:"(1)-Omaha, (2)-Lincoln, (3)-Kearney, (4)-Fremont", answer: 1};
var question5 = {question:"What is the largest county in Nebraska?", choices:"(1)-Sarpy, (2)-Dodge, (3)-Cherry, (4)-Doublas", answer: 3};
var question_array = [question1, question2, question3, question4, question5];


var question = document.getElementById("questions");
question.innerText = question1.question;

var choices = document.getElementById("choices");
choices.innerText = question1.choices;

function given_answer(){
  return document.getElementById("answer").value;
}

function is_correct_answer(answer_text){
  if (answer_text == question1.answer) {
    return true;
  } 
  return false;
}

function update_question_result(correct){
  if (correct) {
    document.getElementById("question_result").innerText = "Correct"
  } else {
    document.getElementById("question_result").innerText = "Incorrect"
  }
}

function process_answer_submission(){
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
}
