const kafka=require("..//config/kafka")
require("dotenv").config()
const producer=kafka.producer()

async function produceMessage(message){
    try{
       console.log("connecting to producer")
        await producer.connect()
        console.log("connected recieved message")
        await producer.send({
            topic:process.env.KAFKA_TOPIC,
            messages:[{
                key:"msg",
                value:JSON.stringify(message)

            }]
        })

    }
    catch(err){
        // console.error(err)
    }

}

module.exports=produceMessage

