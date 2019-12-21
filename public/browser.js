const socket = io.connect('http://localhost:3000');

document.addEventListener('mousemove', function(e) {
    // console.log(e.clientX, e.clientY)
    socket.emit('test', {
       x: e.clientX,
       y: e.clientY 
    });
})