
const showTime = () => {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

   
    let day = date.getDate();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    let time = h + ":" + m + ":" + s + " " + session;
    let fullDate = day + "/" + month + "/" + year;

    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;
    document.getElementById("DateDisplay").innerText = fullDate;
    document.getElementById("DateDisplay").textContent = fullDate;

    setTimeout(showTime, 1000);
}

showTime();