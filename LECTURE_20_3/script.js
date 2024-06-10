function getTime() {

    var currentTime = new Date();

    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    var date = currentTime.getDate();
    var month = currentTime.getMonth();
    var year = currentTime.getFullYear();

    document.querySelector('.current-time').innerHTML = hour + " : " + minute + " : " + second;
    document.querySelector('.current-date').innerHTML = date + "." + month + "." + year;

    var refresh = setTimeout(getTime, 500);

}