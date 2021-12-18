import config from "../config";
const city = document.querySelector('.city');
const current = document.querySelector('.current')
const min = document.querySelector('.min')
const max = document.querySelector('.max')
const btn = document.querySelector('button');

async function Weather(cities){
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+cities+'&appid='+apiKey, {mode: "cors"});
  const weatherData = await response.json();
  city.innerHTML = weatherData.name;
  let celCur = weatherData.main.temp - 273.15;
  let celMin = weatherData.main.temp_min - 273.15;
  let celMax = weatherData.main.temp_max - 273.15;
  current.innerHTML = celCur.toFixed(2) + '°C';
  min.innerHTML = celMin.toFixed(2) + '°C';
  max.innerHTML = celMax.toFixed(2) + '°C'; 
}
btn.addEventListener('click',getWeather);
function getWeather (e){
  e.preventDefault();
  const text = document.querySelector('.text');
  Weather(text.value);
}
window.onload = function(){
    Weather('Melbourne');
}