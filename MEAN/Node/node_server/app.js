// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var port = 6789;
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            if (errors) { console,log(errors)}
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/ninjas") {
         fs.readFile('ninjas.html', 'utf8', function (errors, contents){
             if (errors) { console,log(errors)}
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/dojos") {
         fs.readFile('dojos.html', 'utf8', function (errors, contents){
             if (errors) { console,log(errors)}
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    // request didn't match anything (if file is null):
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(port);
// print to terminal window
console.log("Running in localhost at port:", port);
