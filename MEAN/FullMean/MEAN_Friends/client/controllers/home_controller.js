
app.controller('indexController', function($scope, friendsFactory, $routeParams, $location) {
console.log("got into the home Controller");
    var index = function () {
        friendsFactory.index(function(data) {
            console.log("this is the newController data:",data);
            $scope.friends = data;
        })
    }
    index();//immediately invoked after passing callback to grab all data from db

$scope.delete = function(friend){
    console.log("got to the delete method at show_controller");
    console.log("this is the friend object you are going to delete:", friend );
    friendsFactory.delete(friend)
    $location.url('/')
    index();
    }

});
