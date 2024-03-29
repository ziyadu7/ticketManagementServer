const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');

module.exports = sequelize.define('admin',{
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
    isSuper: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
})