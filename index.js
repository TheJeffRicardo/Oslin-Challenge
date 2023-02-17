const express = require("express") 
const cors = require("cors") 
const userRouter = require("./routes/userRoute")

const app = express() 
app.set("PORT", process.env.PORT || 6969)
app.use(express.json())
app.use(cors()) 


app.get("/", (req, res)=>{
    res.json({message: "Welcome to Forever"})
})
app.use(userRouter)


app.listen(app.get("PORT"), () => {
    console.log(`Listening for calls on port ${app.get("PORT")}`)
    console.log("Press Ctrl+C to exit server")
    })
