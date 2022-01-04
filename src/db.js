require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/challenge`, {
  logging: false, 
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: answer => Answer
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, History, Prize, Level, Question, Answer } = sequelize.models;

// Aca vendrian las relaciones
History.belongsTo(User)
User.hasOne(History)

User.belongsTo(Level)
Level.hasMany(User)

User.belongsTo(Prize)
Prize.hasMany(User)

Prize.belongsTo(Level)
Level.hasOne(Prize)

Question.belongsTo(Level)
Level.hasMany(Question)

Answer.belongsTo(Question)
Question.hasMany(Answer)


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};