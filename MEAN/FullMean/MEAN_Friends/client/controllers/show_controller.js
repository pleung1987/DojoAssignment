
app.controller('showController', function($scope, friendsFactory, $routeParams, $location) {
console.log("got into the show Controller");

friendsFactory.show($routeParams._id, function(returnedData){
    console.log("this is the returned data from showController:",returnedData);
    $scope.friend = returnedData;
    console.log($scope.friend);
});

});
