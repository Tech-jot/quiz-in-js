const  quizDB= [
{
    question: "Q1: what is the fulll form of HTML",
    a: "Hyper Text Markup Language",
    b: " High Text Markup Language",
    c: " Hyper Text Markdown Language",
    d: " None of the above",
    ans:"ans1"
},
{
    question: "Q2: What is the full form of CSS",
    a: "Cascading style sheets",
    b: " cascading style sheep",
    c: " Cartoon style sheet",
    d: " cascading super style sheet",
    ans:"ans1"
},
{
    question: "Q3: What is the full form of HTTP",
    a: "Hypertext transfer product ",
    b: " Hypertext  test Protocol",
    c: " Hypertext  Tranfer Protocol",
    d: " Hypertext   Protocol",
    ans:"ans3"
},
{
    question: "Q4: What is the full form of JS",
    a: " jScript",
    b: " JavaSuper",
    c: " JustScript",
    d: " JAvaScript",
    ans:" ans4"
}
];

const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');

const submit = document.querySelector('#submit');
const answers= document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = ()=>{
    
    const questionList = quizDB[questionCount];
    // console.log(questionCount);
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadQuestion();
const getCheckAnswer= ()=>{
    let answer;
answers.forEach((curAns)=>{
    console.log("first", curAns.checked);

    if(curAns.checked){
        answer = curAns.id;
    }
});

return answer;


};
const deSelectAll = () => {
    answers.forEach((curAns)=> curAns.checked= false );
}

submit.addEventListener('click', () => {
    const checkedAnswer  = getCheckAnswer();
    // console.log(checkedAnswer);
console.log("answer", quizDB[questionCount].ans);

    if(checkedAnswer === quizDB[questionCount].ans){
        score ++;

console.log( "score", score);
    };
    questionCount++ ;

    deSelectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }else {
        showScore.innerHTML = `
        <h3> You scored ${score}/ ${quizDB.length}  </h3>
        <button class=" btn" onclick="location.reload()"> Play Again  </button>
        ` ;
        showScore.classList.remove('scoreArea');

    }

});

