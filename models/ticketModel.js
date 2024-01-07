const sequelize = require('../config/dbConfig')
const { DataTypes } = require('sequelize');
const student = require('./studentModel')
const admin = require('./adminModel')
const subject = require('./subjectModel')

const Ticket = sequelize.define('ticket',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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

Ticket.belongsTo(student, { foreignKey: 'requestedBy', as: 'requestedByStudent' });
Ticket.belongsTo(admin, { foreignKey: 'assignee', as: 'assigneeAdmin' });
Ticket.belongsTo(subject, { foreignKey: 'subject', as: 'ticketSubject' });

module.exports = Ticket