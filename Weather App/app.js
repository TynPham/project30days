const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const body = $('body');
const weather = $('.weather');
const search = $('.weather__search');
const capital = $('.weather__place-capital');
const city = $('.weather__place-city');
const time = $('.weather__time');
const value = $('.weather__temperature-value');
const eyes = $('.weather__detail-items.eyes span');
const wind = $('.weather__detail-items.winds span');
const cloud = $('.weather__detail-items.clouds span');
const sky = $('.weather__sky');
async function changeWeatherApi(Values) {
    let capitalSearch = search.value.trim() !== '' ? search.value.trim() : Values;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=5b0da258768353b9a18dd0f82969291b`
    let data = await fetch(api).then(res => res.json())
    capital.innerText = data.name;
    city.innerText = data.sys.country;
    eyes.innerText = data.visibility + ' (m)'
    wind.innerText = data.wind.speed + ' (m/s)';
    cloud.innerText = data.clouds.all + ' (%)';
    value.innerText = Math.round(data.main.temp);
    sky.innerText = data.weather[0].main;
    time.innerText = new Date().toLocaleString('vi');
    if (data.main.temp > 20) {
        body.classList.add('hot');
        weather.classList.add('hot')
        body.classList.remove('cold');
        weather.classList.remove('cold')
    }
    else {
        body.classList.add('cold');
        weather.classList.add('cold')
        body.classList.remove('hot');
        weather.classList.remove('hot')
    }
}

search.addEventListener('keypress' , function(e) {
    if (e.code === 'Enter') {
        changeWeatherApi('Ha noi');
        search.value = '';
    }
})
changeWeatherApi('Ha noi');