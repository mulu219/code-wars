
var express = require('express') //Import the express dependency
var app = express()              //Instantiate an express app, the main work horse of this server
var port = 5000;                  //Save the port number where your server will be listening

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});