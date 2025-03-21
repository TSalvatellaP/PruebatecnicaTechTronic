# TechTronic Blog - Prueba Técnica

Este proyecto es una prueba técnica para el puesto de desarrollador web en TechTronic. Se trata de la implementación de una landing page para un blog corporativo de una empresa de electrónica wearable.

## 🚀 Tecnologías utilizadas

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **API externa:** OpenWeatherMap (para obtener información meteorológica)

---

## 🎯 Objetivo

Crear una landing page que contenga:
1. Los tres últimos artículos del blog de la compañía.
2. Un widget meteorológico con información actualizada.

---

## 🖥 Características principales

### 🌤 **Muestra información meteorológica actual:**
- **Fecha y hora actual.**
- **Icono del clima.**
- **Condición meteorológica.**
- **Temperatura actual.**
- **Sensación térmica.**

### 🌍 **API de clima:** `/api/weather/:country/:city`
- Obtiene los datos meteorológicos para una ciudad y país específicos utilizando la API de OpenWeatherMap.
- Implementación de un caché en memoria con `node-cache` para optimizar el rendimiento.
- Respuesta en formato JSON.

### ⚡ **Caché en memoria:**
- Utiliza `node-cache` para almacenar los datos meteorológicos.
- TTL configurable (actualmente 1 minuto).
- Mejora el rendimiento y reduce la carga de la API.

### 🔐 **Seguridad y manejo de errores:**
- Variables de entorno en `.env`.
- Manejo adecuado de errores con códigos de estado HTTP.

---

## 💻 Estructura del Proyecto

```
  blog-techtronic/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── postList/
│   │   │   ├── ArticleList.jsx
│   │   │   └── Button.jsx
│   │   ├── sidebar/
│   │   │   └── Sidebar.jsx
│   │   ├── widget/
│   │   │   ├── Categories.jsx
│   │   │   ├── SearchBox.jsx
│   │   │   └── WeatherWidget.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── services/
│   │   └── weatherApi.js
│   ├── styles/
│   │   └── App.scss
│   ├── utils/
│   │   └── getWeatherIcon.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

### Backend

- Servidor en **Node.js con Express**.
- Servirá de forma estática la aplicación React.
- Incluirá un endpoint para obtener datos meteorológicos actuando como **proxy** con la API de OpenWeatherMap.
- Manejo adecuado de errores.

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
 git clone https://github.com/TSalvatellaP/PruebatecnicaTechTronic.git
 cd blog-techtronic
```

### 2. Instalar dependencias
```bash
 npm install
```

### 3. Configurar variables de entorno
Crear un archivo `.env` en la raíz del proyecto con la siguiente información:
```
WEATHER_API_KEY=tu_clave_de_api
```

### 4. Ejecutar el servidor
```bash
 npm start
```

# Flujo de Uso y Mejoras en la Aplicación Meteorológica

## Flujo de Uso 🌤️

1. **Búsqueda de Ciudad** 🌍:  
   El usuario introduce el nombre de la ciudad en el buscador.

2. **Solicitud a la API** 🌐:  
   La aplicación toma el nombre de la ciudad y realiza una solicitud a la API (`/api/weather/:country/:city`).

3. **Respuesta de la API** ☁️:  
   - **Caché** 🔄: El servidor verifica si la información meteorológica de esa ciudad y país ya está en el caché.
     - **Cache Hit** ✅: Si la información ya está en caché, el servidor devuelve los datos almacenados.
     - **Cache Miss** ❌: Si no está en caché, el servidor solicita la información a la API de OpenWeatherMap.
   
   - **API de OpenWeatherMap** 🌦️:  
     Si es necesario, el servidor obtiene los datos meteorológicos de la API de OpenWeatherMap.

---

## Mejoras 🌟

### 1. **Validación de Entrada** 📝
   - Usa librerías como `express-validator` para asegurar que los parámetros de la ciudad y el país sean correctos.
   - Verifica que los valores no estén vacíos y que el formato sea adecuado (sin caracteres especiales o números innecesarios).

### 2. **Registro de Errores Detallado** 🛠️
   - Considera el uso de herramientas como **Sentry** o **LogRocket** para capturar errores en producción.
   - Usa bibliotecas como **Winston** o **Bunyan** para mantener registros locales de errores y excepciones.

### 3. **Monitorización del Rendimiento del Caché** 📊
   - Si usas **Redis** para caché, monitoriza las métricas de "cache hits" y "cache misses" para optimizar el rendimiento.
   - Usa **Prometheus** y **Grafana** para visualizar métricas de rendimiento en tiempo real.

### 5. **Seguridad** 🔒
   - Protege las variables de entorno usando herramientas como **dotenv** o soluciones de gestión de secretos en la nube (por ejemplo, **AWS Secrets Manager**).
   - Configura una política adecuada de **CORS** para proteger tu API de accesos no deseados.

### 6. **Pruebas Unitarias y de Integración** 🧪
   - Implementa pruebas con **Jest** o **Mocha** para verificar la correcta integración y funcionamiento del caché y la API de OpenWeatherMap.
   - Asegúrate de que las pruebas cubran tanto los casos felices como los errores posibles.

### 8. **Lógica de Invalidación del Caché** 🚫
   - Implementa un sistema de invalidación basado en el tiempo de vida del caché (TTL) o cuando ocurran cambios significativos en los datos meteorológicos (por ejemplo, cambios drásticos en la temperatura 🌡️).

### 9. **Ajuste Dinámico del TTL** ⏱️
   - Ajusta el TTL según la demanda de la ciudad o la frecuencia de actualización de los datos de OpenWeatherMap. Si una ciudad tiene mucha demanda, considera acortar el TTL para obtener datos más frescos.

---


**Autor:** [Tania Salvatella]  
**Repositorio:** [GitHub](https://github.com/TSalvatellaP/PruebatecnicaTechTronic)  
**Despliegue:** [Enlace a la versión en vivo]