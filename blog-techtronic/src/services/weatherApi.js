import { useState, useEffect } from 'react';

function useWeatherApi(country, city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country || !city) return; // Evita llamadas con valores vacíos

    console.log('useWeatherApi:', country, city);

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const apiUrl = import.meta.env.VITE_URL_SERVER;

      try {
        const response = await fetch(`${apiUrl}/api/weather/${country}/${city}`, { signal });

        if (!response.ok) {
          const errorText = await response.text(); // Intentar leer el mensaje de error de la API
          throw new Error(errorText || 'No se pudo obtener la información meteorológica.');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); // Cancelar petición si el componente se desmonta
  }, [city, country]);

  return { data, error, loading };
}

export default useWeatherApi;
