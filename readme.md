## node-http-ping
####A simple node module for pinging a web server

### installation
    npm install node-http-ping

### usage

    var ping = require("node-http-ping");

    ping("google.com")
      .then(function(time) {
        console.log("Response time: %dms", time);
      });

