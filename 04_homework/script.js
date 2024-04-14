fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1ed54648fbd20f911ab428cd30470843')
    .then(function (resp){ return resp.json() })
    .then(function (data){
        console.log(data);
        document.querySelector('.weather__city').innerHTML = `${data.name}, United Kingdom`;
        let currentDateUTC = new Date();
        let timezoneOffsetSeconds = data.timezone;
        let timezoneOffsetMillis = timezoneOffsetSeconds * 1000;
        let currentDateLocal = new Date(currentDateUTC.getTime() + timezoneOffsetMillis);
        document.querySelector('.weather__datetime').innerHTML = currentDateLocal.toLocaleString("en-US");
        let temperature = data.main.temp - 273.15;
        document.querySelector('.weather__temperature').innerHTML = `${temperature.toFixed(0)}°`
        document.querySelector(".weather__forecast").innerHTML = data.weather[0].main;
        document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        document.querySelector('.weather__realfeel').innerHTML = `${(data.main.feels_like - 273.15).toFixed(0)}°`
        document.querySelector('.weather__humidity').innerHTML = `${data.main.humidity}%`
        document.querySelector('.weather__wind').innerHTML = `${data.wind.speed} m/s`
        document.querySelector('.weather__pressure').innerHTML = `${data.main.pressure} hPA`


    })
    .catch(function (){

    });