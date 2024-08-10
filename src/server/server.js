const app=require("..//index")
const db=require("..//config/db")
require("dotenv").config()
const consumeMessage=require("..//consumers/kafkaConsumer")
const notificationWorker=require("..//workers/notificationWorker")

const port=process.env.PORT ||8000



db.sync().then(()=>{
    console.log("database connection established")
}).catch((err)=>{
    console.log("database connection error",err)
})

app.listen(port,async ()=>{
    console.log(`Server listening on ${port}`)
    await consumeMessage()
})