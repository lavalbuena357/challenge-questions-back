const levels = [
  {level: 1},
  {level: 2},
  {level: 3},
  {level: 4},
  {level: 5}
]

const prizes = [
  {points: 100, levelId: 1},
  {points: 300, levelId: 2},
  {points: 700, levelId: 3},
  {points: 1200, levelId: 4},
  {points: 2000, levelId: 5}
]

const questions = [
  {question: "¿Qué tipo de animal es la ballena?", levelId: 1},
  {question: "¿Cuál es el lugar más frío de la tierra?", levelId: 1},
  {question: "¿Quién escribió La Odisea?", levelId: 1},
  {question: "¿Cuál es el río más largo del mundo?", levelId: 1},
  {question: "¿En qué continente está Ecuador?", levelId: 1},

  {question: "¿Dónde originaron los juegos olímpicos?", levelId: 2},
  {question: "¿Cómo se denomina el resultado de la multiplicación?", levelId: 2},
  {question: "¿Cuál es el océano más grande?", levelId: 2},
  {question: "¿Qué año llegó Cristóbal Colón a América?", levelId: 2},
  {question: "¿Quién es el padre del psicoanálisis?", levelId: 2},

  {question: "¿Cuál es el disco más vendido de la historia?", levelId: 3},
  {question: "¿Con qué se fabricaba el pergamino?", levelId: 3},
  {question: "¿Cuál es la ciudad de los rascacielos?", levelId: 3},
  {question: "¿De qué país es el futbolista Zlatan Ibrahimović?", levelId: 3},
  {question: "¿Cuál fue el primer metal que empleó el hombre?", levelId: 3},

  {question: "¿A qué país pertenece la ciudad de Varsovia?", levelId: 4},
  {question: "La campana de Gauss está asociada a…", levelId: 4},
  {question: "¿Cuál es la capital de Croacia?", levelId: 4},
  {question: "¿Cuál es el metal más caro del mundo?", levelId: 4},
  {question: "¿En qué país se encuentra el estadio de Wembley?", levelId: 4},
  
  {question: "¿En qué año se aprobó la actual Constitución española?", levelId: 5},
  {question: "¿En qué isla está situado el Teide?", levelId: 5},
  {question: "¿Cuáles son los dos países con mayor cantidad de musulmanes?", levelId: 5},
  {question: "¿Cuál es el idioma más antiguo de los que sobreviven en Europa?", levelId: 5},
  {question: "¿Cuál es el país con más camellos salvajes?", levelId: 5},
]

const answers = [
  {answer: "Mamífero", is_correct: true, questionId: 1},
  {answer: "Ave", is_correct: false, questionId: 1},
  {answer: "Pez", is_correct: false, questionId: 1},
  {answer: "Ninguna de las anteriores", is_correct: false, questionId: 1},

  {answer: "Patagonia", is_correct: false, questionId: 2},
  {answer: "Antártida", is_correct: true, questionId: 2},
  {answer: "Hawai", is_correct: false, questionId: 2},
  {answer: "Groenlandia", is_correct: false, questionId: 2},

  {answer: "Homero", is_correct: true, questionId: 3},
  {answer: "Gabriel García Marquez", is_correct: false, questionId: 3},
  {answer: "Platón", is_correct: false, questionId: 3},
  {answer: "Jesús", is_correct: false, questionId: 3},

  {answer: "Yangtze", is_correct: false, questionId: 4},
  {answer: "Misisipi", is_correct: false, questionId: 4},
  {answer: "Nilo", is_correct: false, questionId: 4},
  {answer: "Amazonas", is_correct: true, questionId: 4},

  {answer: "Europa", is_correct: false, questionId: 5},
  {answer: "América del sur", is_correct: true, questionId: 5},
  {answer: "América central", is_correct: false, questionId: 5},
  {answer: "Asia", is_correct: false, questionId: 5},

  {answer: "Reino unido", is_correct: false, questionId: 6},
  {answer: "Italia", is_correct: false, questionId: 6},
  {answer: "Alemania", is_correct: false, questionId: 6},
  {answer: "Grecia", is_correct: true, questionId: 6},

  {answer: "Residuo", is_correct: false, questionId: 7},
  {answer: "Producto", is_correct: true, questionId: 7},
  {answer: "Cociente", is_correct: false, questionId: 7},
  {answer: "Resultado", is_correct: false, questionId: 7},

  {answer: "Artico", is_correct: false, questionId: 8},
  {answer: "Índico", is_correct: false, questionId: 8},
  {answer: "Pacífico", is_correct: true, questionId: 8},
  {answer: "Atlántico", is_correct: false, questionId: 8},

  {answer: "1492", is_correct: true, questionId: 9},
  {answer: "1842", is_correct: false, questionId: 9},
  {answer: "1495", is_correct: false, questionId: 9},
  {answer: "1482", is_correct: false, questionId: 9},
  
  {answer: "Sigmund Freud", is_correct: true, questionId: 10},
  {answer: "William James", is_correct: false, questionId: 10},
  {answer: "Jean Piaget", is_correct: false, questionId: 10},
  {answer: "B. F. Skinner", is_correct: false, questionId: 10},


  {answer: "Back in black - ACDC", is_correct: false, questionId: 11},
  {answer: "The bodygard - Whitney Houston", is_correct: false, questionId: 11},
  {answer: "Thriller - Michael Jackson", is_correct: true, questionId: 11},
  {answer: "The dark side of the moon - Pink Floyd", is_correct: false, questionId: 11},

  {answer: "Piel de animales", is_correct: true, questionId: 12},
  {answer: "Hojas de nogal", is_correct: false, questionId: 12},
  {answer: "Corteza de roble", is_correct: false, questionId: 12},
  {answer: "Excremento animal", is_correct: false, questionId: 12},

  {answer: "Dubai", is_correct: false, questionId: 13},
  {answer: "Londres", is_correct: false, questionId: 13},
  {answer: "Paris", is_correct: false, questionId: 13},
  {answer: "Nueva York", is_correct: true, questionId: 13},

  {answer: "Alemania", is_correct: false, questionId: 14},
  {answer: "Suecia", is_correct: true, questionId: 14},
  {answer: "Suiza", is_correct: false, questionId: 14},
  {answer: "Polonia", is_correct: false, questionId: 14},

  {answer: "Acero", is_correct: false, questionId: 15},
  {answer: "Hierro", is_correct: false, questionId: 15},
  {answer: "Oro", is_correct: false, questionId: 15},
  {answer: "Cobre", is_correct: true, questionId: 15},
  
  {answer: "Italia", is_correct: false, questionId: 16},
  {answer: "Polonia", is_correct: true, questionId: 16},
  {answer: "Francia", is_correct: false, questionId: 16},
  {answer: "Portugal", is_correct: false, questionId: 16},
  
  {answer: "Técnica músical", is_correct: false, questionId: 17},
  {answer: "Sonidos con eco", is_correct: false, questionId: 17},
  {answer: "Calculo de probabilidades", is_correct: true, questionId: 17},
  {answer: "Tratamiento médico", is_correct: false, questionId: 17},

  {answer: "Split", is_correct: false, questionId: 18},
  {answer: "Zagreb", is_correct: true, questionId: 18},
  {answer: "Pula", is_correct: false, questionId: 18},
  {answer: "Dubrovnik", is_correct: false, questionId: 18},

  {answer: "Plata", is_correct: false, questionId: 19},
  {answer: "Oro", is_correct: false, questionId: 19},
  {answer: "Rodio", is_correct: true, questionId: 19},
  {answer: "Platino", is_correct: false, questionId: 19},

  {answer: "Reino unido", is_correct: true, questionId: 20},
  {answer: "Francia", is_correct: false, questionId: 20},
  {answer: "Portugal", is_correct: false, questionId: 20},
  {answer: "Alemania", is_correct: false, questionId: 20},
  
   {answer: "1945", is_correct: false, questionId: 21},
  {answer: "1972", is_correct: false, questionId: 21},
  {answer: "1978", is_correct: true, questionId: 21},
  {answer: "1865", is_correct: false, questionId: 21},

  {answer: "Islas Caimán", is_correct: false, questionId: 22},
  {answer: "Islas Maldivas", is_correct: false, questionId: 22},
  {answer: "Islas Canarias", is_correct: true, questionId: 22},
  {answer: "Islas Malvinas", is_correct: false, questionId: 22},

  {answer: "Emiratos árabes - India", is_correct: false, questionId: 23},
  {answer: "Afganistán - Siria", is_correct: false, questionId: 23},
  {answer: "Afganistán - Indonesia", is_correct: false, questionId: 23},
  {answer: "Indonesia - India", is_correct: true, questionId: 23},
  
  {answer: "Lituano", is_correct: false, questionId: 24},
  {answer: "Macedonio", is_correct: false, questionId: 24},
  {answer: "Hebreo", is_correct: false, questionId: 24},
  {answer: "Euskera", is_correct: true, questionId: 24},
  
  {answer: "Egipto", is_correct: false, questionId: 25},
  {answer: "Australia", is_correct: true, questionId: 25},
  {answer: "Emiratos árabes", is_correct: false, questionId: 25},
  {answer: "Israel", is_correct: false, questionId: 25},
]

module.exports = {
  levels,
  prizes,
  questions,
  answers
}