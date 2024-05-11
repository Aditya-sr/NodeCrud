const express = require("express")
// const dotenv= require("dotenv").config();
const app = express();
const port= 3000;


app.use(express.json());

app.use('/api/contact',require("./routes/contactRoute"))

app.listen(port,()=>{
    console.log(`server is running on port  ${port}` );
})
