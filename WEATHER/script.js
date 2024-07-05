const apiKey = '29cfa38ccf9b5e3b62a6d8ffe63cd4a0';
const citynameInput = document.getElementById('cityname');
const searchBtn = document.getElementById('search-btn');
const dateDaynameElement = document.getElementById('date-dayname');
const dateDayElement = document.getElementById('date-day');
const locationElement = document.getElementById('location');
const weatherTempElement = document.getElementById('weather-temp');
const weatherDescElement = document.getElementById('weather-desc');
const precipitationValueElement = document.getElementById('precipitation-value');
const humidityValueElement = document.getElementById('humidity-value');
const windValueElement = document.getElementById('wind-value');

//---------------------------- display
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const cityname = citynameInput.value.trim();
    if (cityname) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const weatherData = data;
                const currentDate = new Date();
                dateDaynameElement.textContent = getDayName(currentDate.getDay());
                dateDayElement.textContent = `${currentDate.getDate()} ${getMonthName(currentDate.getMonth())}`;
                locationElement.textContent = weatherData.name;
                weatherTempElement.textContent = `${weatherData.main.temp}°C`;
                weatherDescElement.textContent = weatherData.weather[0].description;
                precipitationValueElement.textContent = `${weatherData.main.humidity}%`;
                humidityValueElement.textContent = `${weatherData.main.humidity}%`;
                windValueElement.textContent = `${weatherData.wind.speed} m/s`;

                if (weatherData.weather[0].main.toLowerCase().includes('rain')) {
                    document.body.className = 'rainy';
                } else if (weatherData.weather[0].main.toLowerCase().includes('clear')) {
                    document.body.className = 'sunny';
                } else {
                    document.body.className = '';
                }
            })
            .catch(error => console.error(error));
    }
});
// -------------------------------------date

const getDayName = (day) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
};

const getMonthName = (month) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
};
