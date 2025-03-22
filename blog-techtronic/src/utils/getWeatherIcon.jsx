import React from 'react';
import { WiDaySunny } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiDayThunderstorm } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiFog } from "react-icons/wi";

const getWeatherIcon = (condition) => {
  const conditionLower = condition.toLowerCase();

  const translations = {
    "sunny": "soleado",
    "clear": "despejado",
    "cloudy": "nublado",
    "overcast": "cubierto",
    "partly cloudy": "parcialmente nublado",
    "rain": "lluvia",
    "drizzle": "llovizna",
    "storm": "tormenta",
    "thunder": "trueno",
    "snow": "nieve",
    "mist": "niebla",
    "fog": "neblina",
  };

  const translatedCondition = Object.keys(translations).find(key => conditionLower.includes(key))
    ? translations[Object.keys(translations).find(key => conditionLower.includes(key))]
    : conditionLower; // Mantener el original si no hay traducción.

  if (translatedCondition === "soleado" || translatedCondition === "despejado") {
    return <WiDaySunny className="w-8 h-8" />;
  }
  if (translatedCondition === "nublado" || translatedCondition === "cubierto") {
    return <WiCloudy className="w-8 h-8" />;
  }
  if (translatedCondition === "parcialmente nublado") {
    return <WiDayCloudy className="w-8 h-8" />;
  }
  if (translatedCondition === "lluvia" || translatedCondition === "llovizna") {
    return <WiDayRain className="w-8 h-8" />;
  }
  if (translatedCondition === "tormenta" || translatedCondition === "trueno") {
    return <WiDayThunderstorm className="w-8 h-8" />;
  }
  if (translatedCondition === "nieve") {
    return <WiSnow className="w-8 h-8" />;
  }
  if (translatedCondition === "niebla" || translatedCondition === "neblina") {
    return <WiFog className="w-8 h-8" />;
  }

  return <WiDaySunny className="w-8 h-8" />; // Valor por defecto
};

export default getWeatherIcon;