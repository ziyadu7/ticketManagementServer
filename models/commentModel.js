const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');
const student = require('./studentModel')
const ticket = require('../models/ticketModel')

const Comment = sequelize.define('comment', {
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

Comment.belongsTo(student, { foreignKey: 'commentedBy', as: 'commentedByStudent' });
Comment.belongsTo(ticket, { foreignKey: 'commentOf', as: 'commentOfTheTicket' });

module.exports = Comment