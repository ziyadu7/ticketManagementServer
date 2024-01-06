const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');


module.exports = sequelize.define('tickets',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    requestedBy: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model:'Student',
            key:'id'
        }
    },
    assignee: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model:'Teacher',
            key:'id'
        }
    },
    priority:{
        type: DataTypes.STRING,
        allowNull: false,
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