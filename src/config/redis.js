const {Redis}=require("ioredis")
const {promisify}=require("util")


const {Queue,Worker}=require("bullmq")
const connection=new Redis({
    host: process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    maxRetriesPerRequest: null,
})

const get_async_connection=promisify(connection.get).bind(connection)
const set_async_connection=promisify(connection.set).bind(connection)


module.exports={get_async_connection,set_async_connection,connection,Queue,Worker}
