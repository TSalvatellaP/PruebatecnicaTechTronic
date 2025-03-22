const express = require('express');
const cors = require('cors');
require('dotenv').config();
const NodeCache = require('node-cache');
const path = require('path');

const server = express();
server.use(cors());
server.use(express.json());


server.use(express.static(path.join(__dirname, 'public')));

const serverPort = process.env.PORT || 3000; 
server.listen(serverPort, () => {
  console.log(`Server listening at port ${serverPort}`);
});



// Inicializa el caché con un TTL configurable
const CACHE_TTL = process.env.CACHE_TTL || 600; // 10 minutos por defecto
const weatherCache = new NodeCache({ stdTTL: CACHE_TTL });

// Función para limpiar la respuesta de OpenWeatherMap
function clearRecord(json) {
  return {
    weather: json.weather?.[0]?.main || 'N/A',
    weather_description: json.weather?.[0]?.description || 'N/A',
    temp: json.main?.temp || 0,
    temp_feels_like: json.main?.feels_like || 0,
    temp_min: json.main?.temp_min || 0,
    temp_max: json.main?.temp_max || 0,
    pressure: json.main?.pressure || 0,
    humidity: json.main?.humidity || 0,
    wind_speed: json.wind?.speed || 0,
    wind_direction: json.wind?.deg || 0,
    clouds: json.clouds?.all || 0,
  };
}

// Función para obtener el clima desde la API de OpenWeather
async function fetchWeather(city, country) {
  const API_KEY = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`;

  try {
    const response = await fetch(url);
    const weatherData = await response.json();

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Ciudad o país no encontrado');
      }
      throw new Error('Error en el servicio meteorológico');
    }

    if (weatherData.cod !== 200) {
      throw new Error(weatherData.message || 'Error desconocido en API');
    }

    return clearRecord(weatherData);
  } catch (error) {
    console.error(`Error fetching weather data: ${error.message}`);
    throw error;
  }
}

// ENDPOINT para obtener datos meteorológicos
server.get('/api/weather/:country/:city', async (req, res) => {
  const city = req.params.city.toLowerCase();
  const country = req.params.country.toLowerCase();
  const cacheKey = `${country}:${city}`;

  // Verifica si los datos están en caché
  const cachedData = weatherCache.get(cacheKey);
  if (cachedData) {
    console.log(`Cache hit for ${cacheKey}`);
    return res.json(cachedData);
  }

  console.log(`Cache miss for ${cacheKey}`);

  try {
    const weatherData = await fetchWeather(city, country);
    weatherCache.set(cacheKey, weatherData); // Almacena en caché solo si la respuesta es válida
    return res.json(weatherData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
