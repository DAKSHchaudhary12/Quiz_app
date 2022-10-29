const quizData = [{
    question: "Which brand has a model called Escalade?",
    a: "Cadillac",
    b: "Dodge",
    c: "Chrysler",
    d: "Hummer",
    correct: "a",
},
{
    question: "Which car brand used the slogan “Sheer Driving Pleasure”?",
    a: "Audi",
    b: "Volvo",
    c: "Ferrari",
    d: "BMW",
    correct: "d",
},
{
    question: "The city which is the biggest centre for manufacture of automobiles in the world is?",
    a: "Wolsburg, Germany",
    b: "Detroit, USA",
    c: "Turin, Italy",
    d: "Ulsan, South Korea",
    correct: "a",
},
{
    question: "Which company owns Jaguar and Land Rover brands?",
    a: "Tata Motors",
    b: "Hyundai Motor Company",
    c: "Toyota Motor Corporation",
    d: "Bayerische Motoren Werke AG",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
} 

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100 charu"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);

