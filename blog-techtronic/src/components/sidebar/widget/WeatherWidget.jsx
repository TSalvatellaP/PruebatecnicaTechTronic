import React from 'react';
import PropTypes from 'prop-types';
import useWeatherApi from '../../../services/weatherApi';
import getWeatherIcon from '../../../utils/getWeatherIcon';

function WeatherWidget({ country, city }) {
  console.log('Ciudad recibida en Weather:', city);
  const { data, error, loading } = useWeatherApi(country, city);

  if (loading) return <p className="text-white text-center">Cargando...</p>;
  if (error) return <p className="text-red-500 text-center">Error al cargar el clima</p>;

  // Mapeo de datos para clima actual
  const currentWeather = data || {}; // Usa data directamente
  const forecast = []; // No hay previsión en la respuesta que proporcionaste

  return (
    <div className="px-6 pt-6">
      <div className="p-6 rounded-xl border-0 bg-blue-950 text-white shadow-xl md:aspect-video md:overflow-hidden">
        <p className="flex justify-between items-baseline text-sm opacity-70">
          <span>{new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}</span>
          <span>{new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}</span>
        </p>
        <section className="flex justify-between mt-4 mb-8">
          <div className="flex items-start gap-2 pr-8">
            <picture className="w-auto aspect-square inline-block p-3 rounded-full bg-highlight/20">
              {getWeatherIcon(currentWeather.weather || "Soleado")}
            </picture>
            <div className="flex flex-col">
              <h3 className="text-sm opacity-70">{currentWeather.weather_description || "Soleado"}</h3>
              <strong className="text-4xl font-light">{currentWeather.temp || "24"}º</strong>
            </div>
          </div>
          <section className="border-l border-l-background/10 pl-8 text-end">
            <h4 className="text-sm opacity-70">Sensación</h4>
            <strong className="text-lg font-light">{currentWeather.temp_feels_like || "23"}º</strong>
          </section>
        </section>
        </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string
};

export default WeatherWidget;