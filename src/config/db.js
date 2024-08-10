const {Sequelize}=require("sequelize")
require("dotenv").config()

const database =process.env.MYSQL_DATABASE
const username=process.env.MYSQL_USERNAME
const password=process.env.MYSQL_PASSWORD


const db=new Sequelize(database,username,password,{
    host:process.env.MYSQL_HOST,
    dialect:"mysql"
})

module.exports = db
