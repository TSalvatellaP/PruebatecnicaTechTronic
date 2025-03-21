
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

  if (conditionLower.includes("sunny") || conditionLower.includes("clear")) {
    return <WiDaySunny className="w-8 h-8" />
  }
  if (conditionLower.includes("cloudy") || conditionLower.includes("overcast")) {
    return <WiCloudy className="w-8 h-8" />
  }
  if (conditionLower.includes("partly cloudy")) {
    return <WiDayCloudy className="w-8 h-8" />
  }
  if (conditionLower.includes("rain") || conditionLower.includes("drizzle")) {
    return <WiDayRain className="w-8 h-8" />
  }
  if (conditionLower.includes("storm") || conditionLower.includes("thunder")) {
    return <WiDayThunderstorm className="w-8 h-8" />;
  }
  if (conditionLower.includes("snow")) {
    return <WiSnow className="w-8 h-8" />
  }
  if (conditionLower.includes("mist") || conditionLower.includes("fog")) {
    return <WiFog className="w-8 h-8" />
  }

  return <WiDaySunny className="w-8 h-8" /> // Icono por defecto
};

export default getWeatherIcon;
