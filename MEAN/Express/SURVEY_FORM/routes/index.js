module.exports = function Route(app, server){
    // this gets the sockiet.io module
    var io = require("socket.io").listen(server)

    app.get("/", function(request,response){
        response.render("index")
        // when we get into the main root, we want to render the index ejs file, it will listen to the get request
        //and render the file put in the parameter.
    })
    io.sockets.on("connection", function(socket){
        //.on is the listener, listening to the posting_form
        socket.on("posting_form",function(data){

            var random_number = Math.floor((Math.random()*1000)+ 1);
            socket.emit("update_message", {response:data});
            socket.emit("random_number", {response: random_number});
            //sends the data and random_number back to the client
        })
    })
}
//receives the app variable that we pass through this route (the express variable)
