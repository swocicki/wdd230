// select HTML elements in the document
const currentTemp = document.querySelector("#temp");
const windSpeed = document.querySelector("#speed");
const chill = document.querySelector("#chill");
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('figcaption');

// API url for Bozeman, MT with units in Fahrenheit (imperial) and my API ID
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bozeman&units=imperial&limit=5&appid=2340469801d84310f9502eb72c4ba29c';

// Function to fetch API
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

// Calculate wind chill
function windChill(speed, temp) {
    if (speed > 3 && temp <= 50) {
        windChill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
    } else {
        windChill = "N/A";
    }
    return windChill;
}

// Capitalize weather description
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// Function to display data
function displayResults(weatherData) {
    // current temp display
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    // weather description and icon display
    const desc = capitalize(weatherData.weather[0].description);
    captionDesc.textContent = desc;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    weatherIcon.alt = desc;
    // wind speed display
    windSpeed.innerHTML = `${weatherData.wind.speed}`;
    // wind chill display
    temp = weatherData.main.temp;
    speed = weatherData.wind.speed;
    chill.innerHTML = windChill(speed, temp);
}

apiFetch();