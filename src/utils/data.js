const users = [
  {
    name: "Albert",
    accum: 0,
    level_reached: 0,
    levelId: null,
    prizeId: null
  },
  {
    name: "Pedro",
    accum: 0,
    level_reached: 0,
    levelId: null,
    prizeId: null
  },
  {
    name: "Ana",
    accum: 0,
    level_reached: 0,
    levelId: null,
    prizeId: null
  }
]

const levels = [
  {level: 1},
  {level: 2},
  {level: 3},
  {level: 4},
  {level: 5}
]

const prizes = [
  {points: 100, levelId: 1},
  {points: 200, levelId: 2},
  {points: 300, levelId: 3},
  {points: 400, levelId: 4},
  {points: 500, levelId: 5}
]

const questions = [
  {question: "pregunta 1", levelId: 1},
  {question: "pregunta 2", levelId: 1},
  {question: "pregunta 3", levelId: 1},
  {question: "pregunta 4", levelId: 1},
  {question: "pregunta 5", levelId: 1},

  {question: "pregunta 1", levelId: 2},
  {question: "pregunta 2", levelId: 2},
  {question: "pregunta 3", levelId: 2},
  {question: "pregunta 4", levelId: 2},
  {question: "pregunta 5", levelId: 2},

  {question: "pregunta 1", levelId: 3},
  {question: "pregunta 2", levelId: 3},
  {question: "pregunta 3", levelId: 3},
  {question: "pregunta 4", levelId: 3},
  {question: "pregunta 5", levelId: 3},

  {question: "pregunta 1", levelId: 4},
  {question: "pregunta 2", levelId: 4},
  {question: "pregunta 3", levelId: 4},
  {question: "pregunta 4", levelId: 4},
  {question: "pregunta 5", levelId: 4},
  
  {question: "pregunta 1", levelId: 5},
  {question: "pregunta 2", levelId: 5},
  {question: "pregunta 3", levelId: 5},
  {question: "pregunta 4", levelId: 5},
  {question: "pregunta 5", levelId: 5},
]

const answers = [
  {answer: "respuesta 1", is_correct: true, questionId: 1},
  {answer: "respuesta 2", is_correct: false, questionId: 1},
  {answer: "respuesta 3", is_correct: false, questionId: 1},
  {answer: "respuesta 4", is_correct: false, questionId: 1},

  {answer: "respuesta 1", is_correct: true, questionId: 2},
  {answer: "respuesta 2", is_correct: false, questionId: 2},
  {answer: "respuesta 3", is_correct: false, questionId: 2},
  {answer: "respuesta 4", is_correct: false, questionId: 2},

  {answer: "respuesta 1", is_correct: true, questionId: 3},
  {answer: "respuesta 2", is_correct: false, questionId: 3},
  {answer: "respuesta 3", is_correct: false, questionId: 3},
  {answer: "respuesta 4", is_correct: false, questionId: 3},

  {answer: "respuesta 1", is_correct: true, questionId: 4},
  {answer: "respuesta 2", is_correct: false, questionId: 4},
  {answer: "respuesta 3", is_correct: false, questionId: 4},
  {answer: "respuesta 4", is_correct: false, questionId: 4},

  {answer: "respuesta 1", is_correct: true, questionId: 5},
  {answer: "respuesta 2", is_correct: false, questionId: 5},
  {answer: "respuesta 3", is_correct: false, questionId: 5},
  {answer: "respuesta 4", is_correct: false, questionId: 5},

  {answer: "respuesta 1", is_correct: true, questionId: 6},
  {answer: "respuesta 2", is_correct: false, questionId: 6},
  {answer: "respuesta 3", is_correct: false, questionId: 6},
  {answer: "respuesta 4", is_correct: false, questionId: 6},

  {answer: "respuesta 1", is_correct: true, questionId: 7},
  {answer: "respuesta 2", is_correct: false, questionId: 7},
  {answer: "respuesta 3", is_correct: false, questionId: 7},
  {answer: "respuesta 4", is_correct: false, questionId: 7},

  {answer: "respuesta 1", is_correct: true, questionId: 8},
  {answer: "respuesta 2", is_correct: false, questionId: 8},
  {answer: "respuesta 3", is_correct: false, questionId: 8},
  {answer: "respuesta 4", is_correct: false, questionId: 8},

  {answer: "respuesta 1", is_correct: true, questionId: 9},
  {answer: "respuesta 2", is_correct: false, questionId: 9},
  {answer: "respuesta 3", is_correct: false, questionId: 9},
  {answer: "respuesta 4", is_correct: false, questionId: 9},

  {answer: "respuesta 1", is_correct: true, questionId: 10},
  {answer: "respuesta 2", is_correct: false, questionId: 10},
  {answer: "respuesta 3", is_correct: false, questionId: 10},
  {answer: "respuesta 4", is_correct: false, questionId: 10},

  {answer: "respuesta 1", is_correct: true, questionId: 11},
  {answer: "respuesta 2", is_correct: false, questionId: 11},
  {answer: "respuesta 3", is_correct: false, questionId: 11},
  {answer: "respuesta 4", is_correct: false, questionId: 11},

  {answer: "respuesta 1", is_correct: true, questionId: 12},
  {answer: "respuesta 2", is_correct: false, questionId: 12},
  {answer: "respuesta 3", is_correct: false, questionId: 12},
  {answer: "respuesta 4", is_correct: false, questionId: 12},

  {answer: "respuesta 1", is_correct: true, questionId: 13},
  {answer: "respuesta 2", is_correct: false, questionId: 13},
  {answer: "respuesta 3", is_correct: false, questionId: 13},
  {answer: "respuesta 4", is_correct: false, questionId: 13},

  {answer: "respuesta 1", is_correct: true, questionId: 14},
  {answer: "respuesta 2", is_correct: false, questionId: 14},
  {answer: "respuesta 3", is_correct: false, questionId: 14},
  {answer: "respuesta 4", is_correct: false, questionId: 14},

  {answer: "respuesta 1", is_correct: true, questionId: 15},
  {answer: "respuesta 2", is_correct: false, questionId: 15},
  {answer: "respuesta 3", is_correct: false, questionId: 15},
  {answer: "respuesta 4", is_correct: false, questionId: 15},

  {answer: "respuesta 1", is_correct: true, questionId: 16},
  {answer: "respuesta 2", is_correct: false, questionId: 16},
  {answer: "respuesta 3", is_correct: false, questionId: 16},
  {answer: "respuesta 4", is_correct: false, questionId: 16},

  {answer: "respuesta 1", is_correct: true, questionId: 17},
  {answer: "respuesta 2", is_correct: false, questionId: 17},
  {answer: "respuesta 3", is_correct: false, questionId: 17},
  {answer: "respuesta 4", is_correct: false, questionId: 17},

  {answer: "respuesta 1", is_correct: true, questionId: 18},
  {answer: "respuesta 2", is_correct: false, questionId: 18},
  {answer: "respuesta 3", is_correct: false, questionId: 18},
  {answer: "respuesta 4", is_correct: false, questionId: 18},

  {answer: "respuesta 1", is_correct: true, questionId: 19},
  {answer: "respuesta 2", is_correct: false, questionId: 19},
  {answer: "respuesta 3", is_correct: false, questionId: 19},
  {answer: "respuesta 4", is_correct: false, questionId: 19},

  {answer: "respuesta 1", is_correct: true, questionId: 20},
  {answer: "respuesta 2", is_correct: false, questionId: 20},
  {answer: "respuesta 3", is_correct: false, questionId: 20},
  {answer: "respuesta 4", is_correct: false, questionId: 20},

  {answer: "respuesta 1", is_correct: true, questionId: 21},
  {answer: "respuesta 2", is_correct: false, questionId: 21},
  {answer: "respuesta 3", is_correct: false, questionId: 21},
  {answer: "respuesta 4", is_correct: false, questionId: 21},

  {answer: "respuesta 1", is_correct: true, questionId: 22},
  {answer: "respuesta 2", is_correct: false, questionId: 22},
  {answer: "respuesta 3", is_correct: false, questionId: 22},
  {answer: "respuesta 4", is_correct: false, questionId: 22},

  {answer: "respuesta 1", is_correct: true, questionId: 23},
  {answer: "respuesta 2", is_correct: false, questionId: 23},
  {answer: "respuesta 3", is_correct: false, questionId: 23},
  {answer: "respuesta 4", is_correct: false, questionId: 23},

  {answer: "respuesta 1", is_correct: true, questionId: 24},
  {answer: "respuesta 2", is_correct: false, questionId: 24},
  {answer: "respuesta 3", is_correct: false, questionId: 24},
  {answer: "respuesta 4", is_correct: false, questionId: 24},

  {answer: "respuesta 1", is_correct: true, questionId: 25},
  {answer: "respuesta 2", is_correct: false, questionId: 25},
  {answer: "respuesta 3", is_correct: false, questionId: 25},
  {answer: "respuesta 4", is_correct: false, questionId: 25},


]

module.exports = {
  users,
  levels,
  prizes,
  questions,
  answers
}