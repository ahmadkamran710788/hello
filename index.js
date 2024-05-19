const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("this is me ahmad");
})
app.listen(3000,()=>{
    console.log("Server is live ");

})