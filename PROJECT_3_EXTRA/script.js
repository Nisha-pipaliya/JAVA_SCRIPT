let Quiz = [
    {
        question: "What is the correct syntax for referring to an external script called script.js?",
        opA: "script name=script.js",
        opB: "script src=script.js",
        opC: "script href=script.js",
        opD: "script ref=script.js",
        trueAns: "script src=script.js"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        opA: "msg('Hello World');",
        opB: "alertBox('Hello World');",
        opC: "alert('Hello World');",
        opD: "msgBox('Hello World');",
        trueAns: "alert('Hello World');"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        opA: "interface",
        opB: "throws",
        opC: "program",
        opD: "short",
        trueAns: "program"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        opA: "var colors = (1:'red', 2:'green', 3:'blue')",
        opB: "var colors = 'red', 'green', 'blue'",
        opC: "var colors = ['red', 'green', 'blue']",
        opD: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        trueAns: "var colors = ['red', 'green', 'blue']"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        opA: "onchange",
        opB: "onclick",
        opC: "onmouseclick",
        opD: "onmouseover",
        trueAns: "onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        opA: "variable carName;",
        opB: "var carName;",
        opC: "v carName;",
        opD: "string carName;",
        trueAns: "var carName;"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n```html\n<p id='demo'>This is a demonstration.</p>\n```",
        opA: "document.getElementById('demo').innerHTML = 'Hello World!';",
        opB: "document.getElementByName('demo').innerHTML = 'Hello World!';",
        opC: "document.getElementByTagName('p').innerHTML = 'Hello World!';",
        opD: "document.getElement('p').innerHTML = 'Hello World!';",
        trueAns: "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        question: "How do you create a function in JavaScript?",
        opA: "function myFunction()",
        opB: "function:myFunction()",
        opC: "function = myFunction()",
        opD: "function => myFunction()",
        trueAns: "function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        opA: "call myFunction()",
        opB: "call function myFunction()",
        opC: "myFunction()",
        opD: "Call.myFunction()",
        trueAns: "myFunction()"
    },
    {
        question: "How can you add a comment in JavaScript?",
        opA: "'This is a comment",
        opB: "<!--This is a comment-->",
        opC: "//This is a comment",
        opD: "*This is a comment*",
        trueAns: "//This is a comment"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        opA: "false",
        opB: "true",
        opC: "NaN",
        opD: "undefined",
        trueAns: "true"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        opA: "*",
        opB: "x",
        opC: "=",
        opD: "-",
        trueAns: "="
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        opA: "('Hello World')",
        opB: "document.write('Hello World')",
        opC: "response.write('Hello World')",
        opD: "('Hello World').document.write",
        trueAns: "document.write('Hello World')"
    },
    {
        question: "Which method can be used to find the length of a string?",
        opA: "length()",
        opB: "getLength()",
        opC: "strlen()",
        opD: "length",
        trueAns: "length"
    },
    {
        question: "Which built-in method sorts the elements of an array?",
        opA: "changeOrder(order)",
        opB: "order()",
        opC: "sort()",
        opD: "arrange()",
        trueAns: "sort()"
    },
    {
        question: "Which of the following is a way to create an object in JavaScript?",
        opA: "var obj = {};",
        opB: "var obj = ();",
        opC: "var obj = [];",
        opD: "var obj = <>;",
        trueAns: "var obj = {};"
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        opA: "Math.rnd(7.25)",
        opB: "Math.round(7.25)",
        opC: "rnd(7.25)",
        opD: "round(7.25)",
        trueAns: "Math.round(7.25)"
    },
    {
        question: "How can you detect the client’s browser name?",
        opA: "navigator.appName",
        opB: "browser.name",
        opC: "client.navName",
        opD: "window.browser",
        trueAns: "navigator.appName"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        opA: "getElementById()",
        opB: "getElement(id)",
        opC: "getElementByID()",
        opD: "getIdElement()",
        trueAns: "getElementById()"
    },
    {
        question: "Which of the following is the correct syntax to display 'Hello World' in a dialog box using JavaScript?",
        opA: "alertBox('Hello World');",
        opB: "msg('Hello World');",
        opC: "alert('Hello World');",
        opD: "msgBox('Hello World');",
        trueAns: "alert('Hello World');"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        opA: "string",
        opB: "number",
        opC: "boolean",
        opD: "character",
        trueAns: "character"
    }
];
Quiz.map(ele => {
    let Question = `<h5>${ele.question}</h5>`;
    let btn1 = `<button>${ele.opA}</button>`;
    let btn2 = `<button>${ele.opB}</button>`;
    let btn3 = `<button>${ele.opC}</button>`;
    let btn4 = `<button>${ele.opD}</button>`;

    let div = `<div>${Question}${btn1}${btn2}${btn3}${btn4}</div>`;
    document.getElementById("quizContainer").innerHTML += div;
});

const handleQuestions = (e) => {
    e.preventDefault();
    let Q = document.getElementById("Question").value;
    if (Q.length <= 8) {
        document.getElementById("Question").style.borderColor = "red";
        return;
    }
    let data = {
        question: Q,
        opA: document.getElementById("opA").value,
        opB: document.getElementById("opB").value,
        opC: document.getElementById("opC").value,
        opD: document.getElementById("opD").value,
        trueAns: document.getElementById("trueAns").value
    };
    Quiz.push(data);
    displayQuiz();
    document.getElementById("form").reset();
};

document.getElementById("Question").addEventListener("input", () => {
    let Q = document.getElementById("Question").value;
    if (Q.length >= 8) {
        document.getElementById("Question").style.borderColor = "green";
    } else {
        document.getElementById("Question").style.borderColor = "red";
    }
});



const displayQuiz = () => {
    document.getElementById("quizContainer").innerHTML = "";
    Quiz.forEach(element => {
        let div = document.createElement('div');
        let qsn = document.createElement('p');
        qsn.innerHTML = element.question;


        let a = document.createElement("button");
        a.innerHTML = element.opA;
        a.addEventListener("click", () => {
            if (element.opA === element.trueAns) {
                a.style.backgroundColor = "green";
            } else {
                a.style.backgroundColor = "red";
            }
        });

        let b = document.createElement("button");
        b.innerHTML = element.opB;
        b.addEventListener("click", () => {
            if (element.opB === element.trueAns) {
                b.style.backgroundColor = "green";
            } else {
                b.style.backgroundColor = "red";
            }
        });

        let c = document.createElement("button");
        c.innerHTML = element.opC;
        c.addEventListener("click", () => {
            if (element.opC === element.trueAns) {
                c.style.backgroundColor = "green";
            } else {
                c.style.backgroundColor = "red";
            }
        });

        let d = document.createElement("button");
        d.innerHTML = element.opD;
        d.addEventListener("click", () => {
            if (element.opD === element.trueAns) {
                d.style.backgroundColor = "green";
            } else {
                d.style.backgroundColor = "red";
            }
        });
        div.append(qsn, a, b, c, d);
        form.appendChild(div);
    });
};

displayQuiz();
document.getElementById("form").addEventListener("submit", handleQuestions);
