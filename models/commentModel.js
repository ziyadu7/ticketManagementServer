const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');
const student = require('./studentModel')

const Ticket = sequelize.define('ticket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

Ticket.belongsTo(student, { foreignKey: 'commentedBy', as: 'commentedByStudent' });

module.exports = Ticket