document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        document.getElementById('counter1'),
        document.getElementById('counter2'),
        document.getElementById('counter3'),
        document.getElementById('counter4')
    ];

    let currentCounter = 0;
    let interval;
    const maxValues = [0, 0, 0, 0];

    const startCounter = () => {
        if (currentCounter < counters.length) {
            let counter = counters[currentCounter];
            let count = 0;
            counter.textContent = count;
            interval = setInterval(() => {
                if (count < maxValues[currentCounter]) {
                    count++;
                    counter.textContent = count;
                } else {
                    clearInterval(interval);
                    currentCounter++;
                    startCounter();
                }
            }, 50);
        }
    };

    const startCounters = () => {
        maxValues.forEach((_, index) => {
            maxValues[index] = Math.floor(Math.random() * 100) + 1;
        });
        currentCounter = 0;
        startCounter();
    };

    const stopCounters = () => {
        clearInterval(interval);
        currentCounter = counters.length;
    };

    document.getElementById('startBtn').addEventListener('click', startCounters);
    document.getElementById('stopBtn').addEventListener('click', stopCounters);
});




//second
let hour = 0;
    let minute = 1;
    let second = 59;

    let id = setInterval(() => {
        document.getElementById('hour').innerText = hour < 10 ? '0' + hour : hour;
        document.getElementById('minute').innerText = minute < 10 ? '0' + minute : minute;
        document.getElementById('second').innerText = second < 10 ? '0' + second : second;

        if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(id);
        }
        if (second === 0) {
            if (minute === 0) {
                hour--;
                minute = 59;
            } else {
                minute--;
            }
            second = 59;
        } else {
            second--;
        }
    }, 1000);


    // third
    let A = 0, B = 0, C = 0, D = 0
    const displayCounter = () => {
        document.getElementById('counterA').textContent = `A: ${A}`;
        document.getElementById('counterB').textContent = `B: ${B}`;
        document.getElementById('counterC').textContent = `C: ${C}`;
        document.getElementById('counterD').textContent = `D: ${D}`;
        
    };
    let counterTimerId = setInterval(() => {
        if (A < 100) {
            A++;
        } else if (B < 237) {
            B++;
        } else if (C < 339) {
            C++;
        } else if (D < 779) {
            D++;
        } else {
            clearInterval(counterTimerId);
        }
        displayCounter();
    }, 10);
    
    displayCounter();
