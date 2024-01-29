const express = require('express')
const cors = require('cors')
const nodemailer = require("nodemailer");
const mongoose = require('mongoose')

const app = express()


app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://vinoth:123@cluster0.m2uakou.mongodb.net/passkey?retryWrites=true&w=majority").then(()=>{
  console.log("connected to db")
}).catch(()=>{
    console.log("connection failed")
})

const credential = mongoose.model("credential",{},"bulkmail")












app.post('/sendemail',function(req,res){
    var msg = req.body.msg
    var emailList = req.body.emailList
    credential.find().then((data)=>{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
          
              user: data[0].toJSON().user,
              pass: data[0].toJSON().pass,
            },
          });
    
          new Promise(async function(resolve,reject){
            try{
                for(var i =0;i<emailList.length;i++){
                     await transporter.sendMail({
                        from:"imvinoth1820@gmail.com",
                        to:emailList[i],
                        subject:"A message from bulk mail",
                        text:msg
                    
                    }
                  
                    
                    )
                    console.log("email sent to "+emailList[i])
                }
                resolve("Success")
            }
        catch(error){
            reject("Failed")
        }
          
        }).then(()=>{
            res.send(true)
        }).catch(()=>{
            res.send(false)
        })
    
          
          
    }).catch((error)=>{
       console.log(error)
    })
    

  

     
    
    

})


app.listen(5000,function(req,res){
    console.log("Server started")
})