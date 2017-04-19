


app.controller('editController', function($scope, friendsFactory, $routeParams, $location) {
    console.log("got into the EDIT Controller");

   friendsFactory.show($routeParams._id, function(returnedData){
    console.log("this is the routeParams id:", $routeParams._id);
    console.log("this is the returned data from editController:",returnedData);
    $scope.friend = returnedData;
    $scope.friend.birthday = new Date(returnedData.birthday)
    console.log("this is the scope.friend:", $scope.friend);
   });

   $scope.update=  function(){
       console.log("got to the update function at Edit_controller");
       console.log("this is the friend ng-model to Update:", $scope.friend);

       friendsFactory.update($scope.friend, function(returned_data){
           console.log("this is the returned data at edit_controller:", returned_data);
           $location.url('/')
       });
   }
});
