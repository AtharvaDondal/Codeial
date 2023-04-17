// const  Router = require('express');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 2000;

const expressLayouts = require('express-ejs-layouts');
const { urlencoded } = require('express');

const sassMiddleware = require('saas-middleware')

app.use(urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);




//use express router(middleware)


app.use('/',  require('./routes'));

app.set('view engine','ejs');
 
// app.set('views','./views');

app.set('views','./views')

app.listen(port,function(err){
    if(err){
        // console.log("Error has been occoured")
        //other sophisticated way for writing this is given below
        console.log(`Error while running the server: ${err} `)
    }
    console.log(`Server is running on port: ${port}`)
})