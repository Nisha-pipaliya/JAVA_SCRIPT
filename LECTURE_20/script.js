function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getDay()];
    
    const hourCircle = document.getElementById("hour-circle");
    const minuteCircle = document.getElementById("minute-circle");
    const secondCircle = document.getElementById("second-circle");
    const dayCircle = document.getElementById("day-circle");
    
    const hourLabel = document.getElementById("hour-label");
    const minuteLabel = document.getElementById("minute-label");
    const secondLabel = document.getElementById("second-label");
    const dayLabel = document.getElementById("day-label");
    
    const hourRotation = (hours % 12) * 30; // 360 degrees / 12 hours
    const minuteRotation = minutes * 6; // 360 degrees / 60 minutes
    const secondRotation = seconds * 6; // 360 degrees / 60 seconds
    const dayRotation = now.getDay() * 51.4286; // 360 degrees / 7 days
    
    hourCircle.style.transform = `rotate(${hourRotation}deg)`;
    minuteCircle.style.transform = `rotate(${minuteRotation}deg)`;
    secondCircle.style.transform = `rotate(${secondRotation}deg)`;
    dayCircle.style.transform = `rotate(${dayRotation}deg)`;
    
    hourLabel.textContent = hours;
    minuteLabel.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondLabel.textContent = seconds < 10 ? '0' + seconds : seconds;
    dayLabel.textContent = dayName;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately
