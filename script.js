const apiKey = '11af69963db611c9ad4cbe04cbd35e40'
const apiUrl =
 "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input ")
const searchBtn = document.querySelector(".search button")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city+ `&appid = ${apiKey}`)
    var data = await response.json()
    console.log(data);
}

document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
document.querySelector(".wind").innerHTML= data.wind.speed + "Km/hr";

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})
