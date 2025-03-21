const express = require('express');
const cors = require('cors');
require('dotenv').config();
const NodeCache = require('node-cache'); 

const server = express();

server.use(cors());
server.use(express.json());

const serverPort = process.env.PORT;
server.listen(serverPort, () => {
  console.log(`Server listening at ${serverPort}`);
});

// Inicializa el caché
const weatherCache = new NodeCache({ stdTTL: 600 }); 
function clearRecord(json) {
  return {
    weather: json.weather[0].main,
    weather_description: json.weather[0].description,
    temp: json.main.temp,
    temp_feels_like: json.main.feels_like, 
    temp_min: json.main.temp_min,
    temp_max: json.main.temp_max,
    pressure: json.main.pressure,
    humidity: json.main.humidity,
    wind_speed: json.wind.speed,
    wind_direction: json.wind.deg,
    clouds: json.clouds.all,
  };
}

// ENDPOINTS
server.get('/api/weather/:country/:city', async (req, res) => {
  const city = req.params.city.toLocaleLowerCase();
  const country = req.params.country.toLocaleLowerCase();
  const cacheKey = `${country}:${city}`; 

  // Verifica si los datos están en el caché
  const cachedData = weatherCache.get(cacheKey);
  if (cachedData) {
    console.log(`Cache hit for ${cacheKey}`);
    return res.json(cachedData);
  }

  console.log(`Cache miss for ${cacheKey}`);

  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country},&units=metric&APPID=${API_KEY}`
    );
    if (!weatherResponse.ok) {
        // Manejo de errores de la API
        if (weatherResponse.status === 404) {
            return res.status(404).json({ error: 'Ciudad o país no encontrado' });
        }
        return res.status(503).json({ error: 'Servicio meteorológico no disponible' });
    }
    const weatherData = await weatherResponse.json();

    const weatherRecord = clearRecord(weatherData);

    // Almacena los datos en el caché
    weatherCache.set(cacheKey, weatherRecord);

    return res.json(weatherRecord);
  } catch (error) {
    console.error(`Error fetching weather for ${cacheKey}:`, error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});