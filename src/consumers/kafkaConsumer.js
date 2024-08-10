const kafka=require("..//config/kafka")
const notificationQueue=require("..//queue/notificationQueue")
require("dotenv").config()

const consumer=kafka.consumer({groupId:"user-1"})

async function consumeMessage(){
    try{
        await consumer.connect()
        await consumer.subscribe({
            topic:process.env.KAFKA_TOPIC,
            fromBeginning:true
        })

        await consumer.run({
            eachMessage:async function({topic,partition,message}){
                const msg=JSON.parse(message.value.toString())
                notificationQueue.add("processData",msg)

            }
        })

    }
    catch(err){
        console.error(err)
    }
}

module.exports=consumeMessage