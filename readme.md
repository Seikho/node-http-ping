# node-http-ping
A simple, light-weight JavaScript module for pinging HTTP services 

### Installation
```
npm install node-http-ping --save
```
### Usage

```javascript
const ping = require('node-http-ping');

ping('google.com', 80 /* optional */)
    .then(time => console.log(`Response time: ${time}ms`))
    .catch(error => console.log(`Failed to ping: ${error}`));
```

