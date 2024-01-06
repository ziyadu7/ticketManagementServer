const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');

module.exports = sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAccepted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})