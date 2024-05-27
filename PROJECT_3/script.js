

let Questions = [
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        ans: 'program',
        A: 'interface',
        B: 'throws',
        C: 'program',
        D: 'short'
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        ans: 'onclick',
        A: 'onchange',
        B: 'onclick',
        C: 'onmouseclick',
        D: 'onmouseover'
    },
    {
        question: "How do you declare a JavaScript variable?",
        ans: 'var carName;',
        A: 'variable carName;',
        B: 'var carName;',
        C: 'v carName;',
        D: 'string carName;'
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        ans: "<script src='script.js'>",
        A: "<script name='script.js'>",
        B: "<script src='script.js'>",
        C: "<script href='script.js'>",
        D: "<script ref='script.js'>"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        ans: "true",
        A: "false",
        B: "true",
        C: "NaN",
        D: "undefined"
    },
    {
        question: "Which of the following is a way to create an object in JavaScript?",
        ans: "var obj = {};",
        A: "var obj = {};",
        B: "var obj = ();",
        C: "var obj = [];",
        D: "var obj = <>;"
    },
    
    {
        question: "How do you write 'Hello World' in an alert box?",
        ans: "alert('Hello World');",
          A: "msg('Hello World');",
          B: "alertBox('Hello World');",
          C: "alert('Hello World');",
          D: "msgBox('Hello World');"
    },
       
     
      {
        question: "Which of the following is not a reserved word in JavaScript?",
        ans: "program",
        A: "interface",
        B: "throws",
        C: "program",
        D: "short"

       
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        ans: "var colors = ['red', 'green', 'blue']",
        A: "var colors = (1:'red', 2:'green', 3:'blue')",
        B: "var colors = 'red', 'green', 'blue'",
        C: "var colors = ['red', 'green', 'blue']",
        D: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        },
      
    
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        ans: "onclick",
        A: "onchange",
        B: "onclick",
        C: "onmouseclick",
        D: "onmouseover"
    
      
      },
      {
        question: "How do you declare a JavaScript variable?",
        ans: "var carName;",
        A: "variable carName;",
        B: "var carName;",
        C: "v carName;",
        D: "string carName;"

    },
       
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        "code": "<p id='demo'>This is a demonstration.</p>",
        ans: "document.getElementById('demo').innerHTML = 'Hello World!';",
        A: "document.getElementById('demo').innerHTML = 'Hello World!';",
        B: "document.getElementByName('demo').innerHTML = 'Hello World!';",
        C: "document.getElementByTagName('p').innerHTML = 'Hello World!';",
        D: "document.getElement('p').innerHTML = 'Hello World!';"
    },

    {
        question: "How do you create a function in JavaScript?",
        ans: "function myFunction()",
        A: "function myFunction()",
        B: "function:myFunction()",
        C: "function = myFunction()",
        D: "function => myFunction()"

    },
       
    {
        question: "How do you call a function named 'myFunction'?",
        ans: "myFunction()",
        A: "call myFunction()",
        B: "call function myFunction()",
        C: "myFunction()",
        D: "Call.myFunction()"
       
    },
    {
        question: "How can you add a comment in JavaScript?",
        ans: "//This is a comment",
        A: "'This is a comment",
        B: "<!--This is a comment-->",
        C: "//This is a comment",
        D: "*This is a comment*"
      
      
    },
];

const displayQuestions = () => {
    let questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; 
    Questions.forEach((ele, index) => {
        let questionBlock = document.createElement('div');

        let question = document.createElement('p');
        question.textContent = `${index + 1}. ${ele.question}`;
        questionBlock.append(question);


        // optionA
        let optionA = document.createElement('button');
        optionA.type = 'button';
        optionA.textContent = ele.A;
        optionA.onclick = () => checkAnswer(optionA, ele.ans, ele.A);
        questionBlock.append(optionA);


        // optionB
        let optionB = document.createElement('button');
        optionB.type = 'button';
        optionB.textContent = ele.B;
        optionB.onclick = () => checkAnswer(optionB, ele.ans, ele.B);
        questionBlock.append(optionB);


        // optionC
        let optionC = document.createElement('button');
        optionC.type = 'button';
        optionC.textContent = ele.C;
        optionC.onclick = () => checkAnswer(optionC, ele.ans, ele.C);
        questionBlock.append(optionC);


        // optionD
        let optionD = document.createElement('button');
        optionD.type = 'button';
        optionD.textContent = ele.D;
        optionD.onclick = () => checkAnswer(optionD, ele.ans, ele.D);
        questionBlock.append(optionD);

        questionsContainer.append(questionBlock);
    });
};

const checkAnswer = (button, correctAnswer, selectedAnswer) => {
    if (correctAnswer === selectedAnswer) {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    displayQuestions();
});
