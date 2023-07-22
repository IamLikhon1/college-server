const express = require('express');
const cors = require('cors');
const app=express()
const port=process.env.PORT||5000;
require('dotenv').config()
const colleges=require('./college.json')

// middleware
app.use(cors())
app.use(express.json())








app.get('/colleges',(req,res)=>{
    res.send(colleges)
})



app.get('/',(req,res)=>{
    res.send('colleges Is running')
})

app.listen(port,()=>{
    console.log(`College is running on port: ${port}`)
})