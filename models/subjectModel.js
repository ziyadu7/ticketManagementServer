const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');

module.exports = sequelize.define('subject',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})