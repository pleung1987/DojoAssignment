// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var port = 7077;

var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            if (errors) { console,log(errors)}
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             if (errors) { console,log(errors)}
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/cars/new") {
         fs.readFile('./views/new.html', 'utf8', function (errors, contents){
             if (errors) { console,log(errors)}
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/Car1.jpg'){
       // notice we won't include the utf8 encoding
       fs.readFile('./images/Car1.jpg', function(errors, contents){
           response.writeHead(200, {'Content-type': 'image/jpg'});
           response.write(contents);
           response.end();
       });
     }
     else if(request.url === '/images/Car2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
      }
      else if(request.url === '/images/Car3.jpg'){
         // notice we won't include the utf8 encoding
         fs.readFile('./images/Car3.jpg', function(errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
       }
       else if(request.url === '/images/Car4.jpg'){
          // notice we won't include the utf8 encoding
          fs.readFile('./images/Car4.jpg', function(errors, contents){
              response.writeHead(200, {'Content-type': 'image/jpg'});
              response.write(contents);
              response.end();
          });
        }
        else if(request.url === '/images/Cat1.jpg'){
           // notice we won't include the utf8 encoding
           fs.readFile('./images/Cat1.jpg', function(errors, contents){
               response.writeHead(200, {'Content-type': 'image/jpg'});
               response.write(contents);
               response.end();
           });
         }
         else if(request.url === '/images/Cat2.jpg'){
            // notice we won't include the utf8 encoding
            fs.readFile('./images/Cat2.jpg', function(errors, contents){
                response.writeHead(200, {'Content-type': 'image/jpg'});
                response.write(contents);
                response.end();
            });
          }
          else if(request.url === '/images/Cat3.jpg'){
             // notice we won't include the utf8 encoding
             fs.readFile('./images/Cat3.jpg', function(errors, contents){
                 response.writeHead(200, {'Content-type': 'image/jpg'});
                 response.write(contents);
                 response.end();
             });
           }
           else if(request.url === '/images/Cat4.jpg'){
              // notice we won't include the utf8 encoding
              fs.readFile('./images/Cat4.jpg', function(errors, contents){
                  response.writeHead(200, {'Content-type': 'image/jpg'});
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
