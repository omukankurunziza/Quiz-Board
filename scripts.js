function check() {
    var questionOne = document.Quiz.questionOne.value;
    var questionTwo = document.Quiz.questionTwo.value;
    var questionThree = document.Quiz.questionThree.value;
    var questionFour = document.Quiz.questionFour.value;
    var questionFive = document.Quiz.questionFive.value;
    var questionSix = document.Quiz.questionSix.value;
    var questionSeven = document.Quiz.questionSeven.value;
    var questionEight = document.Quiz.questionEight.value;
    var questionNine = document.Quiz.questionNine.value;
    var questionTen = document.Quiz.questionTen.value;
    var right = 0;
    if (questionOne == "correct") {
        right = right + 5;
     if (questionTwo == "correct") {
        right = right + 5;
    

    };
    document.getElementById("fifth-p").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "/50";
    $(".container").fadeOut();

};