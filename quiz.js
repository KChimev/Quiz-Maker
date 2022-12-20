this.el={
    controlButton:document.querySelector(".add__Question"),
    addAnswer : document.querySelector(".add__Answer"),
    createQuiz:document.querySelector("#create-quiz"),
}
//SETTING
let currentQuestion;
const submit=document.createElement("button");
submit.setAttribute("type", "button");
submit.setAttribute("id","submit-button");
submit.textContent="Submit";
let totalPoints = 0;

//CLICKING THE ADD QUESTION AND DISPLAYING THE PREVIEW WINDOW
this.el.controlButton.addEventListener("click",() =>{
    document.querySelector(".answers__Display").style.display="block";
    document.getElementById("preview-container").style.display="block";
    addQuestion();
});  

//CLICKING THE ADD ANSWER
this.el.addAnswer.addEventListener("click",() =>{
    addAnswer();
});

//CREATE THE QUIZ AND CHECK IF IT IS ANONYMOUS
this.el.createQuiz.addEventListener("click",() =>{
let removed = document.getElementById("quiz-build")
let h1=document.querySelector("h1");
let h2=document.getElementById("preview-h2");
let createButton=document.getElementById("create-quiz");
removed.remove();
h1.remove();
h2.remove();
createButton.remove();
document.body.appendChild(submit);
});

//SUBMIT BUTTON AND CHECHKING THE SELECTED ANSWERS
submit.addEventListener("click",() =>{
    var radio = document.getElementsByTagName('input');
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].type === 'radio' && radio[i].checked) {
            if(radio[i].value=="true"){
            radio[i].parentElement.style.color="green"; 
            totalPoints++;
            console.log(totalPoints);
            }
            if(radio[i].value=="false") {
                radio[i].parentElement.style.color="red"; 
            }
        }
    }
});

//ADD QUESTION
function addQuestion(){
    
    if(document.getElementById("question-input").value==""){
        return;
    }
    else{
    const title = document.createElement("h2");
    title.textContent=document.getElementById("quiz-title").value
    currentQuestion = document.createElement("fieldset");
    currentQuestion.setAttribute("id","currentQuestion");
    const question=document.createElement("label");
    question.textContent=document.getElementById("question-input").value;
    currentQuestion.appendChild(question);
    document.getElementById("preview").appendChild(title);
    if(document.getElementById("non-anonymous-quiz").checked){
        const name=document.createElement("input");
        name.setAttribute("type", "name");
        name.setAttribute("id","name-input");
        name.setAttribute("placeholder", "Please enter your name");
        document.getElementById("preview").appendChild(name);
    }
    document.getElementById("preview").appendChild(currentQuestion);
    document.getElementById("question-input").value="";
    }
}
//ADD ANSWER
function addAnswer(){
    const answerLabel=document.createElement("label");
    const answerText=document.createElement("p");
    const answerButton=document.createElement("input");
    answerText.textContent=document.getElementById("answer").value;
    answerButton.setAttribute("type","radio");
    answerLabel.setAttribute("id","answerLabel");
    if(document.getElementById("true-answer").checked){
        answerButton.setAttribute("value","true");
    }
    if(document.getElementById("false-answer").checked){
        answerButton.setAttribute("value","false");
    }
    answerLabel.appendChild(answerButton);
    answerLabel.appendChild(answerText);
    currentQuestion.appendChild(answerLabel);
    document.getElementById("answer").value="";
}
