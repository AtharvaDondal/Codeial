const express = require('express');
const app = express();
const port = 9000;

app.listen(port,function(err){
    if(err){
        // console.log("Error has been occoured")
        //other sophisticated way for writing this is given below
        console.log(`Error while running the server: ${err} `)
    }
    console.log(`Server is running on port: ${port}`)
})