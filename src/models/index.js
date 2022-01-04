const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // define USER model
  sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level_reached: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  } , {
    timestamps: false
  });

  // define HISTORY model
  sequelize.define('history', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
  } , {
    timestamps: false
  });

  // define PRIZE model
  sequelize.define('prize', {
    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  } , {
    timestamps: false
  });

  // define LEVEL model
  sequelize.define('level', {
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  } , {
    timestamps: false
  });

  // define QUESTION model
  sequelize.define('question', {
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
  } , {
    timestamps: false
  });

  // define ANSWER model
  sequelize.define('answer', {
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  } , {
    timestamps: false
  });
}