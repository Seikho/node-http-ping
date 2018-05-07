# node-http-ping

A simple, light-weight JavaScript module for pinging HTTP services

### Installation

```
npm install node-http-ping --save
```

### Usage

```javascript
import ping from 'node-http-ping'
// or
const ping = require('node-http-ping')

// Using http by default
ping('google.com', 80 /* optional */)
  .then(time => console.log(`Response time: ${time}ms`))
  .catch(() => console.log(`Failed to ping google.com`))

// Or use https
ping('https://google.com')
  .then(time => console.log(`Response time: ${time}ms`))
  .catch(() => console.log('Failed to ping google.com'))
```
