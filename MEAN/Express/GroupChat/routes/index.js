var users = [];
var messages = [];
//keep track if users already exist
var is_user = function(user){
    var users_count = users.length;

    for(var i = 0; i < users_count; i++){
        if(user == users[i]) {
            return true
        }
    }
    return false;
}

module.exports = function Route(app, server){
    var io = require('socket.io').listen(server);

    io.sockets.on("connection", function(socket){
        socket.on("page_load",function(data){
        console.log("user:" + data.user)
        console.log(users)
        var randNum = Math.floor((Math.random()*1000)+ 1);

        if(is_user(data.user) === true) {
            socket.emit("existing_user", {error: "This user already exists"})
        } else {
            users.push(data.user);
            socket.emit("load_messages", {current_user: data.user, number: randNum, messages:messages})
            }
        })

        socket.on("new_message", function(data){
            console.log(data);
            messages.push({name:data.user, message:data.message})
            io.emit("post_new_message", { new_message: data.message, user: data.user })     //broadcast for everyone, call the io server
        })
    })

    app.get("/", function(request,response){
        response.render("index")
    })
}
