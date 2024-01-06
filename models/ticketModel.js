const Sequelize = require('sequelize')

module.exports = Sequelize.define('Tickets',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    requestedBy: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
            model:'Student',
            key:'id'
        }
    },
    assignee: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
            model:'Student',
            key:'id'
        }
    },
    priority:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdDate:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    dueDate:{
        type: Sequelize.DATE,
        allowNull: false,
    }
})