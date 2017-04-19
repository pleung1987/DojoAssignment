
app.controller('newController', function($scope, friendsFactory, $location) {

  $scope.create = function() {
      console.log("got into create in new_controller");
    friendsFactory.create($scope.newFriend, function(){
        $location.url('/')
    })
    // If we needed to display an updated list of friends on this page, we would have to do this;
    console.log("these are the object passing into the factory:", $scope.newFriend);    //after creating, invoke the index function to grab all data
  }


});
