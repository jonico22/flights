# PROYECTO VUELA BARATO

Es un buscador de vuelos que utiliza la api amadeus    

## instalacion del proyecto

npm install
crear un archivo .env poner sus credenciales

VITE_URL_API_AUTH = 'https://test.api.amadeus.com/v1/security/oauth2/token'
VITE_URL_API_SHOPPING = 'https://test.api.amadeus.com/v2/shopping/flight-offers'
VITE_API_CLIENT_ID = ''
VITE_API_CLIENT_SECRET = ''

El proyecto ha sido creado con vite v3 por ello 

npm run dev

### Librerias utilizadas

Para el diseño he utilizado estas librerias

tailwindcss
@heroicons/react"
flowbite"
flowbite-react"

Para el manejo de fechas y input fetch fueron estas librerias

react-datepicker
date-fns
date-fns-tz

Para la validaciones y envio de datos para el formulario se utilizo estas librerias
formik
yup
react-select

Para el manejo de estado y rutas fue utilizada estas librerias
@reduxjs/toolkit
react-redux
react-router-dom

### DEPLOY DE LA APLICACION

Se integro con el servicio de vercel

https://vuela-barato-fwv1lflma-joseyananicolas.vercel.app/

### GENERACION JSON PARA CODIGOS IATIA

Para obtener estos codigos lo consegui de un json en la web, con datos de nombre de 
aeropuertos y paises pero como era muy largo cree un pequeño script en nodejs
para filtrar lo necesario y descartar otras zonas horarias

const fs = require('fs');
let jsonData = require('./base.json');
let filter = jsonData.filter( item => item.IATA !== "\\N");
let filterAsia = filter.filter( item => item.timezone !== "8" 
&& item.timezone !== "7" && item.timezone !== "9"
&& item.timezone !== "10" && item.timezone !== "3"
&& item.timezone !== "\\N" && item.timezone !== "2"
&& item.timezone !== "12" && item.timezone !== "5.75"
&& item.timezone !== "10" && item.timezone !== "0"
&& item.timezone !== "1" && item.timezone !== "5.5"
&& item.timezone !== "-10" && item.timezone !== "5"
);
let newJson = JSON.stringify(filterAsia);
fs.writeFileSync('airport2.json', newJson)