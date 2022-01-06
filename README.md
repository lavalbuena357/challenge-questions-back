# Challenge Trivia App Backend

**Nota: El frontend de este proyecto se puede encontrar [en este repositorio](https://github.com/lavalbuena357/challenge-questions-front)**

## Descripción:

El backend de este proyecto se realizó con NodeJs usando Express para la configuración del servidor.

Las bases de datos relacionales se modelaron con PostgreSQL usando sequelize para su conexión.

Las bases de datos fueron subidas a Heroku. Las credenciales serán enviadas por correo electronico.

## Correr el servidor

Primero cree el archivo .env con los datos que serán enviados por correo electrónico.

#### `npm install`
#### `npm start`

## Web service 

`GET` `http://localhost:3001/users` Para traer todos los usuarios.\
`GET` `http://localhost:3001/levels` Para traer todos los niveles. Cada nivel contiene toda la información de preguntas y respuestas de cada uno.\
`GET` `http://localhost:3001/level/:level` Para traer un nivel especifico con sus preguntas y respuestas.\
`GET` `http://localhost:3001/questions` Para traer todas las preguntas.\
`GET` `http://localhost:3001/history` Para traer el historial de todos los juegos.

`POST` `http://localhost:3001/levels` Para agregar un nivel nuevo.\
`POST` `http://localhost:3001/prizes` Para asignar un valor de premio a un nivel específico.\
`POST` `http://localhost:3001/questions` Para agregar una nueva pregunta.\
`POST` `http://localhost:3001/answers` Para agregar respuestas a una pregunta específica.\
`POST` `http://localhost:3001/history` Para agregar un registro nuevo al historial.\
`POST` `http://localhost:3001/users` Para agregar un usuario nuevo.

`PUT` `http://localhost:3001/users/:userId` Para modificar los datos de un usuario existente.
