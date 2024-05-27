
let  Question = [
    {
        question: "What is the correct syntax for referring to an external script called script.js?",
        opA: "script name=script.js",
        opB: "script src=script.js",
        opC: "script href=script.js",
        opD: "script ref=script.js",
        true: "script src=script.js"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        opA: "msg('Hello World');",
        opB: "alertBox('Hello World');",
        opC: "alert('Hello World');",
        opD: "msgBox('Hello World');",
        true: "alert('Hello World');"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        opA: "interface",
        opB: "throws",
        opC: "program",
        opD: "short",
        true: "program"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        opA: "var colors = (1:'red', 2:'green', 3:'blue')",
        opB: "var colors = 'red', 'green', 'blue'",
        opC: "var colors = ['red', 'green', 'blue']",
        opD: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        true: "var colors = ['red', 'green', 'blue']"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        opA: "onchange",
        opB: "onclick",
        opC: "onmouseclick",
        opD: "onmouseover",
        true: "onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        opA: "variable carName;",
        opB: "var carName;",
        opC: "v carName;",
        opD: "string carName;",
        true: "var carName;"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n```html\n<p id='demo'>This is a demonstration.</p>\n```",
        opA: "document.getElementById('demo').innerHTML = 'Hello World!';",
        opB: "document.getElementByName('demo').innerHTML = 'Hello World!';",
        opC: "document.getElementByTagName('p').innerHTML = 'Hello World!';",
        opD: "document.getElement('p').innerHTML = 'Hello World!';",
        true: "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        question: "How do you create a function in JavaScript?",
        opA: "function myFunction()",
        opB: "function:myFunction()",
        opC: "function = myFunction()",
        opD: "function => myFunction()",
        true: "function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        opA: "call myFunction()",
        opB: "call function myFunction()",
        opC: "myFunction()",
        opD: "Call.myFunction()",
        true: "myFunction()"
    },
    {
        question: "How can you add a comment in JavaScript?",
        opA: "'This is a comment",
        opB: "<!--This is a comment-->",
        opC: "//This is a comment",
        opD: "*This is a comment*",
        true: "//This is a comment"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        opA: "false",
        opB: "true",
        opC: "NaN",
        opD: "undefined",
        true: "true"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        opA: "*",
        opB: "x",
        opC: "=",
        opD: "-",
        true: "="
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        opA: "('Hello World')",
        opB: "document.write('Hello World')",
        opC: "response.write('Hello World')",
        opD: "('Hello World').document.write",
        true: "document.write('Hello World')"
    },
    {
        question: "Which method can be used to find the length of a string?",
        opA: "length()",
        opB: "getLength()",
        opC: "strlen()",
        opD: "length",
        true: "length"
    },
    {
        question: "Which built-in method sorts the elements of an array?",
        opA: "changeOrder(order)",
        opB: "order()",
        opC: "sort()",
        opD: "arrange()",
        true: "sort()"
    },
    {
        question: "Which of the following is a way to create an object in JavaScript?",
        opA: "var obj = {};",
        opB: "var obj = ();",
        opC: "var obj = [];",
        opD: "var obj = <>;",
        true: "var obj = {};"
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        opA: "Math.rnd(7.25)",
        opB: "Math.round(7.25)",
        opC: "rnd(7.25)",
        opD: "round(7.25)",
        true: "Math.round(7.25)"
    },
    {
        question: "How can you detect the client’s browser name?",
        opA: "navigator.appName",
        opB: "browser.name",
        opC: "client.navName",
        opD: "window.browser",
        true: "navigator.appName"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        opA: "getElementById()",
        opB: "getElement(id)",
        opC: "getElementByID()",
        opD: "getIdElement()",
        true: "getElementById()"
    },
    {
        question: "Which of the following is the correct syntax to display 'Hello World' in a dialog box using JavaScript?",
        opA: "alertBox('Hello World');",
        opB: "msg('Hello World');",
        opC: "alert('Hello World');",
        opD: "msgBox('Hello World');",
        true: "alert('Hello World');"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        opA: "string",
        opB: "number",
        opC: "boolean",
        opD: "character",
        true: "character"
    }
];


// display_Question

const displayQuiz=() =>{
    const form = document.getElementById("form");
    form.innerHTML = ""; 
    Question.forEach((ele, index) => {
        const question = document.createElement('h5');
        question.innerText = ele.question;
        
        const btn1 = document.createElement('button');
        btn1.innerText = ele.opA;
        btn1.onclick = () => checkAnswer(btn1, ele.true);

        const btn2 = document.createElement('button');
        btn2.innerText = ele.opB;
        btn2.onclick = () => checkAnswer(btn2, ele.true);

        const btn3 = document.createElement('button');
        btn3.innerText = ele.opC;
        btn3.onclick = () => checkAnswer(btn3, ele.true);

        const btn4 = document.createElement('button');
        btn4.innerText = ele.opD;
        btn4.onclick = () => checkAnswer(btn4, ele.true);

        const div = document.createElement('div');
        div.append(question);
        div.append(btn1);
        div.append(btn2);
        div.append(btn3);
        div.append(btn4);
        form.append(div);
    });
}

function checkAnswer(button, correctAnswer) {
    if (button.innerText === correctAnswer) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }
}

displayQuiz();

const questionForm = document.getElementById("questionForm");
questionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newQuestion = {
        question: document.getElementById("que").value,
        opA: document.getElementById("option1").value,
        opB: document.getElementById("option2").value,
        opC: document.getElementById("option3").value,
        opD: document.getElementById("option4").value,
        true: document.getElementById("option1").value 
        };
    Question.push(newQuestion);
    displayQuiz(); 

    // button
    let productElement = document.createElement('div');
    productElement.setAttribute('class', 'product-details');
});
let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function() {
    productElement.remove();
});

productElement.append(deleteButton);
