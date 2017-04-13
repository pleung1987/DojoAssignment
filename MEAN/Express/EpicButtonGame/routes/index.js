module.exports = function Route(app, server){
    // this is a new line we're adding AFTER our server listener
    // take special note how we're passing the server
    // variable. unless we have the server variable, this line will not work!!
    var io = require('socket.io').listen(server);

    var counter = 0;

    app.get("/", function(request,response){
        response.render("index")
        // when we get into the main root, we want to render the index ejs file, it will listen to the get request
        //and render the file put in the parameter.
    })

    io.sockets.on("connection", function(socket){
        //.on is the listener, listening to the posting_form
        socket.on("push_button",function(data){
            console.log("pushed pressed")
            counter += 1 ;
            socket.emit("push_counter",{response: counter});
        })
        socket.on("reset_counter",function(data){
            console.log("Reset pressed")
            counter = 0 ;
            socket.emit("reset_counter", {response: counter});
        })
    })
};
