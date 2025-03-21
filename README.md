# TechTronic Blog - Prueba Técnica

Este proyecto es una prueba técnica para el puesto de desarrollador web en TechTronic. Se trata de la implementación de una landing page para un blog corporativo de una empresa de electrónica wearable.

## Tecnologías utilizadas

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **API externa:** OpenWeatherMap (para obtener información meteorológica)

## Objetivo

El objetivo es desarrollar una página de aterrizaje que muestre los tres últimos artículos del blog de la compañía y un widget con la información meteorológica actual.

## Características principales

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
´´´

### Backend

- Servidor en **Node.js con Express**.
- Servirá de forma estática la aplicación React.
- Incluirá un endpoint para obtener datos meteorológicos actuando como **proxy** con la API de OpenWeatherMap.
- Manejo adecuado de errores.

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
 git clone https://github.com/TSalvatellaP/PruebatecnicaTechTronic.git
 cd techtronic-blog
```

### 2. Instalar dependencias
```bash
 npm install
```

### 3. Configurar variables de entorno
Crear un archivo `.env` en la raíz del proyecto con la siguiente información:
```
PORT=5000
WEATHER_API_KEY=tu_api_key_de_openweathermap
```

### 4. Ejecutar el servidor
```bash
 npm start
```

## Notas adicionales

- No es necesario enlazar los títulos de los posts a otras páginas.
- No se requiere utilizar imágenes o textos reales.
- Se prioriza la funcionalidad sobre la apariencia estética.

---

**Autor:** [Tania Salvatella]  
**Repositorio:** [GitHub](https://github.com/TSalvatellaP/PruebatecnicaTechTronic)  
**Despliegue:** [Enlace a la versión en vivo]


