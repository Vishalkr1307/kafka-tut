const express=require("express")
const app = express()
app.use(express.json())
const produceMessage=require("./producers/kafkaProducer")
const consumeMessage=require("./consumers/kafkaConsumer")


app.post("/submit",async (req,res)=>{
    const {name,location}=req.body
    if(!name || !location){
        return res.status(404).send({error:"error occurred in name & location"})
    }
    await produceMessage({name,location})
    res.status(200).send("msg sent successfully")
})





module.exports=app