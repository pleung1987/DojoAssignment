var app = angular.module('app', ["ngRoute"]);   //inject in routes into module to use Routes

//Define Routes
app.config(function ($routeProvider) {
      $routeProvider
        .when('/players',{
            templateUrl: '/static/partials/players.html',
        })
        .when('/teams',{
            templateUrl: '/static/partials/teams.html'
        })
        .when('/associations',{
            templateUrl: '/static/partials/associations.html'
        })
        .otherwise({
          redirectTo: '/players'
        });
    });

//inside the factory :
//Players Factory
app.factory('playersFactory', function($http){
    var factory = {};
    //initialize our players list
    var players = [
        {name: "Spenser"},
        {name: "Ryan Chan"},
        {name: "Patrick Leung"},
    ];

    factory.getPlayers = function(callback){
        callback(players);
    }

    factory.addplayer = function(player){
        players.push(player)
    }

    factory.deletePlayer = function(userObjToDelete){
    console.log("this is the userFactory object to delete:",userObjToDelete);
    players.splice(players.indexOf(userObjToDelete),1);
    }

    factory.addPlayerToTeam = function(data){
        players[data.playerIdx].team = data.team
        console.log(data.team);
        console.log("check if team been added in players array:", players);
    }

    factory.removePlayerFromTeam = function(data){
        console.log("this is the data index to remove Player from:",data);
        players[data].team = ""
    }

    return factory;     //have to return the specified factory {object} response
});
//Teams Factory
app.factory('teamsFactory', function($http){
    var factory = {};
    //initialize our teams list
    var teams = [
        {name: "49ers"},
        {name: "SeaHawks"},
        {name: "Patriots"},
    ];

    factory.getTeams = function(callback){
        callback(teams);
    }

    factory.addteam = function(team){
        teams.push(team)
    }

    factory.deleteTeam = function(ObjToDelete){
        console.log("this is the userFactory object to delete:",ObjToDelete);
        teams.splice(teams.indexOf(ObjToDelete),1);
    }

    return factory;     //have to return the specified factory {object} response
});

// Inside the controller  -> REMEBER to inject factory into controller
//Players Controller
app.controller('PlayersController', function($scope, playersFactory){
    ($scope.getPlayers= function(){
        playersFactory.getPlayers(function(data){
            $scope.players = data;
        })
    })() //immediate invoke the function so it can be used to pass to the views

    $scope.addplayer = function(){
        console.log("got into the addplayer route");
        playersFactory.addplayer($scope.player)
        console.log("added player object:", $scope.player);
        $scope.player = {};
    }

    $scope.deletePlayer = function(playerObjToDelete){
        console.log("This is the objectToDelete: ", playerObjToDelete);
        playersFactory.deletePlayer(playerObjToDelete)
    }
});
//Teams Controller
app.controller('TeamsController', function($scope, teamsFactory){
    ($scope.getTeams= function(){
        teamsFactory.getTeams(function(data){
            $scope.teams = data;
        })
    })() //immediate invoke the function so it can be used to pass to the views

    $scope.addteam = function(){
        console.log("got into the addplayer route");
        teamsFactory.addteam($scope.team)
        console.log("added player object:", $scope.team);
        $scope.team = {};
    }

    $scope.deleteTeam = function(teamObjToDelete){
        console.log("This is the objectToDelete: ", teamObjToDelete);
        teamsFactory.deleteTeam(teamObjToDelete)
    }
});

app.controller('AssociationsControllers', function($scope, teamsFactory, playersFactory){
    ($scope.getPlayers= function(){
        playersFactory.getPlayers(function(data){
            $scope.players = data;
        })
    })();

    ($scope.getTeams= function(){
        teamsFactory.getTeams(function(data){
            $scope.teams = data;
        })
    })()

    $scope.addPlayerToTeam = function(){
        console.log("got into the add associations route");
        playersFactory.addPlayerToTeam($scope.newAssoc)
        console.log("added association object:", $scope.newAssoc);
    }

    $scope.removePlayerFromTeam = function(indexOfPlayerToRemove){
        playersFactory.removePlayerFromTeam(indexOfPlayerToRemove)
    }

});
