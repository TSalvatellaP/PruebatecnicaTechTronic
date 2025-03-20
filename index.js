// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
require ('dotenv').config();

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

function clearRecord(json){
    return{
        weather: json.weather[0].main,
        weather_description: json.weather[0].description,
        temp: json.main.temp,
        temp_feels_like: json.main.fells_like,
        temp_min: json.main.temp_min,
        temp_max: json.main.temp_max,
        pressure: json.main.pressure,
        humidity: json.main.humidity,
        wind_speed: json.wind.speed,
        wind_direction: json.wind.deg,
        clouds: json.clouds.all,

    }
};

// Escribimos los endpoints que queramos
server.get('/api/weather/:country/:city', async(req, res) => {
    const city = req.params.city.toLocaleLowerCase();
    const country = req.params.country.toLocaleLowerCase();

    const API_KEY = process.env.WEATHER_API_KEY;

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country},&units=metric&APPID=${API_KEY}`);
    const weatherData = await weatherResponse.json();

    const weatherRecord = clearRecord(weatherData);

    return res.json(weatherRecord);
    
});