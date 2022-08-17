const express=require("express")
const sequelize=require("./config")
const app=express()

const middlewares=[
    express.json(),
    express.urlencoded({extended:true})
]

app.use(middlewares)

app.get("/health",(req,res)=>{
    res.status(200).json({msg:"API Working!!"})
})

app.use("/api/blog",require("./routes/blog"))

const PORT=8000

// initialize sequelize and listen for app
sequelize.sync().then(()=>{
    app.listen(PORT,()=>console.log("Server is running on port =>",PORT))
}).catch((err)=>{
    console.error(err)
})