var http = require('http');
var fs = require('fs');


var server = http.createServer((req, res) => 
{
    console.log("Request was made: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/main.html').pipe(res);
    
});

server.listen(8000);