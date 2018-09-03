var http = require('http');
var fs = require('fs');
var path = require('path');
var cfenv = require('cfenv');

var appEnv = cfenv.getAppEnv();
var instance = appEnv.app.instance_index || 0;

var server = http.createServer((req, res) => 
{

    console.log("Request was made: " + req.url);
    
    if (req.url === '/' || req.url.includes('?question'))
    {
        fs.readFile('./public/main.html', 'UTF-8', (err, html) => 
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);

        });
    }
    else if (req.url.match("\.css$"))
    {
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {'Content-Type': 'text/css'});
        fileStream.pipe(res);
    }
    else if (req.url.match("\.png$"))
    {
        console.log("Registered as image.");
        var imgPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imgPath);
        res.writeHead(200, {'Content-Type': 'image/png'});
        fileStream.pipe(res);
    }
    else if (req.url.match("\.js$"))
    {
        var jsPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fileStream.pipe(res);
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Page Not Found!");
    }

});

server.listen(appEnv.port, () =>{

    console.log("server starting on " + appEnv.url);

});