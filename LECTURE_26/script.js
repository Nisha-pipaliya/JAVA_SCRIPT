let localCount1 = localStorage.getItem("localCount1") || 0;
let localCount2 = localStorage.getItem("localCount2") || 0;
let sessionCount1 = sessionStorage.getItem("sessionCount1") || 0;
let sessionCount2 = sessionStorage.getItem("sessionCount2") || 0;

document.getElementById("localCount1").innerHTML = localCount1;
document.getElementById("localCount2").innerHTML = localCount2;
document.getElementById("sessionCount1").innerHTML = sessionCount1;
document.getElementById("sessionCount2").innerHTML = sessionCount2;

const counter = (storageType, buttonId) => {
    if (storageType === 'local') {
        if (buttonId === 'localBtn1') {
            localCount1++;
            document.getElementById("localCount1").innerHTML = localCount1;
            localStorage.setItem("localCount1", localCount1);
        } else if (buttonId === 'localBtn2') {
            localCount2++;
            document.getElementById("localCount2").innerHTML = localCount2;
            localStorage.setItem("localCount2", localCount2);
        }
    } else if (storageType === 'session') {
        if (buttonId === 'sessionBtn1') {
            sessionCount1++;
            document.getElementById("sessionCount1").innerHTML = sessionCount1;
            sessionStorage.setItem("sessionCount1", sessionCount1);
        } else if (buttonId === 'sessionBtn2') {
            sessionCount2++;
            document.getElementById("sessionCount2").innerHTML = sessionCount2;
            sessionStorage.setItem("sessionCount2", sessionCount2);
        }
    }
};

document.getElementById("localBtn1").addEventListener("click", () => counter('local', 'localBtn1'));
document.getElementById("localBtn2").addEventListener("click", () => counter('local', 'localBtn2'));
document.getElementById("sessionBtn1").addEventListener("click", () => counter('session', 'sessionBtn1'));
document.getElementById("sessionBtn2").addEventListener("click", () => counter('session', 'sessionBtn2'));
