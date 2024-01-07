const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');

module.exports = sequelize.define('ticket',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    requestedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'students',
            key:'id'
        }
    },
    assignee: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'admins',
            key:'id'
        }
    },
    subject:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'subjects',
            key:'id'
        }
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdDate:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    dueDate:{
        type: DataTypes.DATE
    }
})