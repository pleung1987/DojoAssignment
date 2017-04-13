module.exports = function Route(app){
    // app is invoked from server.js
    app.get("/", function(request,response){
        response.render("index")
        // when we get into the main root, we want to render the index ejs file, it will listen to the get request
        //and render the file put in the parameter.
    })
    app.post("/result",function(request,response){
        console.log(request.body);
        //the post information goes through the body attribute tested by console.log
        submitted_info = {
            name: request.body.name,
            location: request.body.location,
            language: request.body.language,
            comment: request.body.comment
        }
        response.render("result", {user_data: submitted_info})
        // the submitted_info gets stored as the response when sent to the request result.ejs that gets rendered
    })
}
//receives the app variable that we pass through this route (the express variable)
