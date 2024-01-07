const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');


module.exports = sequelize.define('tickets',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    requestedBy: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references:{
            model:'student',
            key:'id'
        }
    },
    assignee: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references:{
            model:'admin',
            key:'id'
        }
    },
    subject:{
        type: DataTypes.NUMBER,
        allowNull: false,
        references:{
            model:'subject',
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
        type: DataTypes.DATE,
        allowNull: false,
    }
})