// For Weather
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c710081029msh091669b9f833cffp14c72ajsnef139d8e26ab',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c710081029msh091669b9f833cffp14c72ajsnef139d8e26ab',
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
};

let city = 'Indore';
let Temp = document.getElementById('Temp');
let Feel = document.getElementById('Feel');
let Humidity = document.getElementById('Humidity');
let cloud_pct = document.getElementById('cloud_pct');
let wind_speed = document.getElementById('wind_speed');
let time = document.getElementById('time');
let date = document.getElementById('date');
let day = document.getElementById('day');
let getWeather = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			Temp.innerHTML = ' ' + response.temp + '°C';
			Feel.innerHTML = 'feels like ' + response.feels_like + '°C';
			Humidity.innerHTML = ' ' + response.humidity;
			wind_speed.innerHTML = ' ' + response.wind_speed;
			cloud_pct.innerHTML = ' ' + response.cloud_pct;
		})
		.catch(err => console.error(err));
	fetch('https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=' + city, option)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			time.innerHTML = ' ' + response.hour + ':' + response.minute;
			date.innerHTML = ' ' + response.day + '-' + response.month + '-' + response.year;
			day.innerHTML = ' ' + response.day_of_week;
			let body = document.getElementsByTagName('body');
			let bg = document.getElementById('bg');
			if (response.hour >= '06' && response.hour <= '18') {
				body[0].style.background = "url('../images/Day.jpg') no-repeat center/cover"
				bg.src = "../images/Day.png"
			}
			else {
				body[0].style.background = "url('./images/Night.jpg') no-repeat center/cover"
				bg.src = "../images/Moon.png"

			}
		})
		.catch(err => console.error(err));
}
let input = document.getElementById('input');
document.getElementsByClassName('btn')[0].addEventListener('click', (e) => {
	e.preventDefault();
	let City = document.getElementById('City');
	City.innerText = input.value[0].toUpperCase() + input.value.slice(1,).toLowerCase();
	city = input.value;
	getWeather(city);
	input.value = '';
})

document.getElementById('input').addEventListener('keydown', (e) => {
	if (e.key !== 'Enter') return;
	let City = document.getElementById('City');
	City.innerText = input.value[0].toUpperCase() + input.value.slice(1,).toLowerCase();
	city = input.value;
	getWeather(city);
	input.value = '';
})

getWeather(city);