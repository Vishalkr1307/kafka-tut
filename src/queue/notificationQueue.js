const {Queue,connection}=require("..//config/redis")

const notificationQueue=new Queue("notifications",connection)

module.exports =notificationQueue