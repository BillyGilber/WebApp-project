
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <h1>Welcome to CODERWANDA Ltd</h1>
        <h2>Node.js Web Application</h2>
        <p>Our application is running inside Docker!</p>
    `);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
