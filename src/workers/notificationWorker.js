const {Worker,connection}=require("..//config/redis")

const notificationWorker=new Worker("notifications",async (job)=>{
    const {name,location}=job.data
    console.log(name,location)
},{connection})

module.exports=notificationWorker