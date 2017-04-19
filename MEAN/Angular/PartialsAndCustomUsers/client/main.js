var app = angular.module('app', ["ngRoute"]);   //inject in routes into module to use Routes

//Define Routes
app.config(function ($routeProvider) {
      $routeProvider
        .when('/users',{
            templateUrl: '/static/partials/customizeUsers.html',
        })
        .when('/list',{
            templateUrl: '/static/partials/userList.html'
        })
        .otherwise({
          redirectTo: '/users'
        });
    });

//inside the factory
app.factory('userFactory', function($http){
    var factory = {};
    //initialize our user list
    var users = [
        {firstName: "Yukihiro", lastName:"Matsuomoto", favLang:"Ruby"},
        {firstName: "Ryan", lastName:"Dahl", favLang:"Java"},
        {firstName: "Brendon", lastName:"Eich", favLang:"JavaScript"},
    ];

    factory.getUsers = function(callback){
        callback(users);
    }

    factory.adduser = function(user){
        users.push(user);
        //listens to userFactory.addUser and passes the user object into the users array
    }
    factory.deleteUser = function(userObjToDelete){
        console.log("this is the userFactory object to delete:", userObjToDelete);
        users.splice(users.indexOf(userObjToDelete),1);
    }

    return factory;     //have to return the specified factory {object} response
});

// Inside the controller  -> REMEBER to inject factory into controller
app.controller('CustomizeUsersController', function($scope, userFactory){
    ($scope.getUsers = function(){
        userFactory.getUsers(function(data){
            $scope.users = data;
        })
    })()    //immediate invoke the function so it can be used to pass to the views

    $scope.adduser = function(){
        // console.log("made it to the addUser controller");
        userFactory.adduser($scope.user)
        console.log("passing this object to factory: ", $scope.user);
        $scope.user = {};
    }

    $scope.deleteUser = function(userObjToDelete){
        console.log("This is the objectToDelete: ", userObjToDelete);
        userFactory.deleteUser(userObjToDelete)
    }
});

app.controller('UserListController', function($scope, userFactory){
    ($scope.getUsers = function(){
        userFactory.getUsers(function(data){
            $scope.users = data;
        })
    })()    //immediate invoke the function so it can be used to pass to the views
});
