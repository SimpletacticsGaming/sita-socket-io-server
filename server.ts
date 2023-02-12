let app = require('express')();
let http = require('http').Server(app)
let io = require('socket.io')(http, {
  cors: {
    origin: "*"
  },
})
let socket = require('socket.io')

io.on('connection', (socket) => {
  console.log("user connected");

  socket.on('disconnect', function () {
    console.log("user disconnected")
  })

  socket.on('message', (message) => {
    console.log("Message received: " + message);
    io.emit('message', { type: 'new-message', text: message })
  })
})

http.listen(5000, () => {
  console.log('started on port 5000')
});

