const express = require("express")
const mongoose = require("mongoose")
const app = express()
const usermodel = require("./userModel")
app.use(express.json())
mongoose.set({strictQuery:false})
mongoose.connect("mongodb+srv://Bhushan17:X5Mk0c2iBmtDP8lC@cluster0.l9u2boz.mongodb.net/foodApp", { useNewUrlParser: true })
    .then(console.log("MondoDB is connected"))
    .catch((err) => console.log(err))

app.post("/register", async function (req, res) {
    try {
        const data = req.body
        const save = await usermodel.create(data)
        return res.send(save)
    } catch (err) {
        return res.send(err)
    }
})
app.post("/login", async function(req,res){
    const email=req.body.email
    // console.log(email)
    const pass=req.body.password
    const validEmail=await usermodel.find({email:email,password:pass})
    if(!validEmail){
       return res.render(
            alert("email or password incorrect")
        )
    }
    return res.send("login success")
})

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Express app is running on port ${port}`))