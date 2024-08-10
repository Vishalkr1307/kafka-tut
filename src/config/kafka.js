const {Kafka}=require("kafkajs")
require("dotenv").config()
const ip=require("ip")

const kafka=new Kafka({
    clientId:"ola-cab",
    brokers:[`${ip.address()}:9092`]
})

module.exports =kafka
