# TechTronic Blog - Prueba Técnica

Este proyecto es una prueba técnica para el puesto de desarrollador web en TechTronic. Se trata de la implementación de una landing page para un blog corporativo de una empresa de electrónica wearable.

## Tecnologías utilizadas

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **API externa:** OpenWeatherMap (para obtener información meteorológica)

## Objetivo

El objetivo es desarrollar una página de aterrizaje que muestre los tres últimos artículos del blog de la compañía y un widget con la información meteorológica actual.

## Características principales
* **Endpoint `/api/weather/:country/:city`:**
    * Obtiene información meteorológica para una ciudad y país específicos.
    * Utiliza la API de OpenWeatherMap para obtener los datos.
    * Implementa un caché en memoria con `node-cache` para almacenar los resultados durante 10 minutos (configurable).
    * Devuelve los datos meteorológicos en formato JSON.
* **CORS habilitado:** Permite solicitudes desde diferentes dominios.
* **Manejo de variables de entorno:** Utiliza `.env` para almacenar la clave de API de OpenWeatherMap.
* **Manejo básico de errores:** Incluye un bloque `try...catch` para manejar errores durante las solicitudes a la API.


### Frontend

- Implementado en **React** con estilos en **TailwindCSS**.
- Diseño responsivo para adaptarse a cualquier dispositivo.
- Componentes clave:
  - **Menú hamburguesa** en versión móvil.
  - **Lista de artículos** con títulos y resúmenes.
  - **Cajas de widgets** en el lado derecho (incluyendo el widget meteorológico).

  ### Estructura del proyecto
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

## Uso

Para obtener información meteorológica, realiza una solicitud GET al siguiente endpoint:
/api/weather/:country/:city
```
Reemplaza `:country` y `:city` con el código del país y el nombre de la ciudad, respectivamente.

Ejemplo: /api/weather/es/madrid
```



---

**Autor:** [Tania Salvatella]  
**Repositorio:** [GitHub](https://github.com/TSalvatellaP/PruebatecnicaTechTronic)  
**Despliegue:** [Enlace a la versión en vivo]


