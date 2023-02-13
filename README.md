![alt text](./public/logo.jpeg)

# Appointment-Office
Aplicacion para las organizaciones que brindan servicios operando en **Appointment**

## Glosario
- [Primeros Pasos](#primeros-pasos)
- [Entorno de desarrollo](#entorno-de-desarrollo)
- [Git-Flow](#git-flow)
- Estructura

<br/>
<hr/>
<br/>

# Primeros Pasos

1 - Clonar el repositorio desde la URL: https://github.com/Appointment-Army/appointment-office.
```bash
git clone https://github.com/Appointment-Army/appointment-office
```
<br/>
2 - Añadir un repositorio remoto al que sincronizar los cambios.

```bash
git remote add origin https://github.com/Appointment-Army/appointment-office
```
<br/>

# Entorno de Desarrollo
Vite.js no tiene compatibilidad con dotenv para manejo de variables de entorno, pero tiene su propio sistema para gestionar los mismo. En la carpeta root de nuestro proyecto, crearemos un archivo con el nombre **.env.local**
<p>Este mismo es el que alojara las variables de entorno, que deben empezar como un "VITE" como prefijo de la misma. Ejemplo:</p>

<br/>

```
VITE_BASE_URL=http://localhost:3001
```
Estas variables seran accesibles de cualquier lugar de la aplicacion creada con Vite nombrandola en el codigo de la siguiente manera.
```javascript
const url = import.meta.env.VITE_BASE_URL
```
La primera variable que declaremos aca sera la url base que utilizaremos para configurar axios mas adelante. El equipo de backend proveera la url correcta.
Ejemplo:
```javascript
import {axios} from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3001 '
```
<br/>

# Git-Flow
