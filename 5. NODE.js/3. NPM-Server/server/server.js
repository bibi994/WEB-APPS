const http = require('http');
const posts = require('./posts');
const hostname = '127.0.0.1';
const port = 3000;

console.log(posts);
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    const postJSON = JSON.stringify(posts);
    res.end(postJSON);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});
