# Me.Social

Me.Social es una red social definitiva diseñada específicamente para estudiantes. Creemos que el aprendizaje debe ser colaborativo y emocionante. Ya sea que estés buscando recursos para tu próxima gran prueba, consejos de estudio personalizados, o simplemente quieres conectarte con compañeros que comparten tus intereses académicos, Me.Social es el lugar para estar.

## Despliegue de la aplicación

Este documento proporciona instrucciones detalladas sobre cómo desplegar la aplicación web en un entorno de producción.

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- node.js
- npm

### Compilación de la aplicación

Para desplegar la aplicación web, debemos de compilar la aplicación.

1. **Compilación de la aplicación:**

   Para compilar la aplicación debemos de utilizar `npm`,  en este caso, utilizamos
   ```bash
   npm run build

2. **Copiar los ficheros compilados:**
   
   Una vez que se compila la aplicación web, los ficheros se encontrarán en la carpeta `build`, estos ficheros son los necesarios para desplegar.
 
## Pruebas

La aplicación web deberá de desplegarse, pero para probarla correctamente, deberemos de utilizar la url: `http://me.social`

Asegúrate de que se puede acceder a las siguientes url:
- `http://me.social/login`
- `http://api.me.social/profile` 
- `http://api.me.social/timeline`
- `http://api.me.social/friends` 
- `http://api.me.social/photos`
