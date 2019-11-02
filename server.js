const http = require('http');

const server = http.createServer((request, response) => {
    response.end(`
    <div style="
    width: 400px;
    height: 300px; 
    padding: 5px 10px;
    border: 5px solid rgb(255, 228, 196, 0.2);
    background: #ffe4c4;
    color: darkblue;
    ">
        <h3>Welcome to the server</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rem suscipit amet assumenda nesciunt a consequatur eaque repellendus, nam illum corporis, non cupiditate ut facere, provident libero sed nulla enim.</p>
    </div>
    `)
})

server.listen(5000);