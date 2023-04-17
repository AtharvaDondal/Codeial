const mongoose = require('mongoose');

// now connecting mongoose to database
mongoose.connect('mongodb://localhost/codeial');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

//it is an event emitter
db.once('open',function(){
    console.log('Connected to Database:: MongoDB');
});

//now at the lat we have export it,to use in different modules

module.exports = db;