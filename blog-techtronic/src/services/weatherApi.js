import { useState, useEffect } from 'react';

function useWeatherApi(country, city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('useWeatherApi:', country, city);
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:3000/api/weather/${country}/${city}` 
        );

        if (!response.ok) {
          throw new Error('No se pudo obtener la información meteorológica.');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, country]); 

  return { data, error, loading };
}

export default useWeatherApi;