const questions = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "JavaScript",
        correctOption: "JavaScript",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        correctOption: "Cascading Style Sheets",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "none of the above",
        correctOption: "1995",
    },
    {
        question: 'Who is making the Web standards?',
        a: 'Google',
        b: 'The World Wide Web Consortium',
        c: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        a: '<heading>',
        b: '<h6>',
        c: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        a: '<linebreak>',
        b: '<br>',
        c: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        a: '<body bg="yellow">',
        b: '<background>yellow</background>',
        c: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        a: '<strong>',
        b: '<b>',
        c: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        a: '<italic>',
        b: '<i>',
        c: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        a: '<a>http://www.w3schools.com</a>',
        b: '<a href="http://www.w3schools.com">W3Schools</a>',
        c: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        a: '*',
        b: '/',
        c: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
       a: '<a href="url" target="new">',
       b: '<a href="url" new>',
        c: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
       a: '<table> <tr> <td>',
       b: '<table> <head> <tfoot>',
        c: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
];

let ques = document.getElementById('question')
let option1 = document.getElementById('a_text')
let option2 = document.getElementById('b_text')
let option3 = document.getElementById('c_text')
let index = 0;
let score = 0;
let timer;

function nexthandler() {
    let options = document.getElementsByName('answer');
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let selected = options[i].value;
            let userAnswer = questions[index - 1][selected];
            let correctAns = questions[index - 1].correctOption;
            if (userAnswer == correctAns) {
                score++;
            }
        }
        options[i].checked = false;
        btn.disabled = true;
    }
    if (index >= questions.length) {
        let message, messageClass, circleColor;
        if ((score + 1) / questions.length >= 0.5) {
            message = 'Congratulations, you passed';
            messageClass = 'green';
            circleColor = 'green';
        } else {
            message = 'Sorry, you failed';
            messageClass = 'red';
            circleColor = 'red';
        }
        quiz.innerHTML = `
        <div class="container">
            <p class="congratulations ${messageClass}">${message}</p>
            <div class="results">
                <div class="total-questions" style="border-bottom: 1px solid grey;">
                    <span>Total Questions</span>
                    <span>${questions.length}</span>
                </div>
                <div class="correct-questions">
                    <span>Correct Questions</span>
                    <span>${score}</span>
                </div>
                <div class="score-circle" style="color: ${circleColor};">
                    <div class="circle" style="color: ${circleColor};">
                        <span style="color: ${circleColor};">${((score) / questions.length * 100).toFixed(2)}%</span>
                    </div>
                </div>
            </div>
            <button class="back-to-home" onclick="location.reload()">Back to home</button>
        </div>`;
        clearInterval(timer);
        return;
    } else {
        ques.innerHTML = questions[index].question;
        option1.innerText = questions[index].a;
        option2.innerText = questions[index].b;
        option3.innerText = questions[index].c;
        index++;
    }
}

function enableBtn() {
    let btn = document.getElementById('btn');
    btn.disabled = false;
}

const timerElement = document.getElementById('timer');
function startTimer() {
    let timeLeft = 105;
    timerElement.innerHTML = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nexthandler();
        }
    }, 1000);
}

nexthandler();
startTimer();
