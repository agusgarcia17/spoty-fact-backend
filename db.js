const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:@localhost:3306/mydb')


module.exports={
    Sequelize, db
}