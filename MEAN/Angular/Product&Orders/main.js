var app = angular.module('app', []);
//inside the factory
app.factory('productFactory', function($http){
    var factory = {};
    var products = [];

    factory.getProducts = function(callback){
        callback(products);         //passes the products array to the controller with callback funtion
    }

    factory.addProduct = function(product){
        product.quantity = 50;  //creates a new key value pair in the product object called quanity and setting it to 50
        products.push(product);
            // the listened $scope.product gets passed into the products array
    }
    factory.buyProduct = function(data){
            console.log(data);
            if(data.quantity > 0){      //the object passed in from data is the entire product object
                data.quantity --;       //access into the object's attribute quantity and alter the rules of deducting when button is pressed
            }else{
                data.quantity = 0;
                }
        }

    factory.delete = function(objectToDelete){
        console.log("this is the productFactory object to delete:", objectToDelete);
        products.splice(products.indexOf(objectToDelete),1);
        // splice takes in two argument, 1) the index of the object you want to delete, and  2)the number of the object to delete
    }
    return factory;     //have to return the factory {}
});

// Inside the controller
app.controller('productController', function($scope, productFactory){
    ($scope.getProducts = function(){               // listens to the call back function to invoke
        productFactory.getProducts(function(data){  //callback the function from factory getProducts(which passes on the data from products array)
            $scope.products = data;     //passing by reference, pointing in array that exist in the factory, and setting the data as $scope.products...
                                        //products is now a keyword that contains the array data that can be passed into the views with $scope attribute
        })
    })() //immediate invoked with the callback function created and fetches the products array, if there is a callback function from the factory,
    // you will either have to invoke it in the factory or invoke it immdiately in the controller.

    $scope.addproduct = function(){
        productFactory.addProduct($scope.product)
            //$scope.product listens to the view and we pass the product created to the factory addProduct method
        $scope.product = {};        //clears the product object after the passing is done creating and stored to factory
    }

    $scope.deleteProduct = function(objectToDelete){
        console.log("This is the objectToDelete: ", objectToDelete);
        productFactory.delete(objectToDelete)
        //we are passing in the entire object we want to delete to the product factory
    }
});

app.controller('ordersController', function($scope, productFactory){
    ($scope.getProducts = function(){               // listens to the call back function to invoke
        productFactory.getProducts(function(data){  //call the function from factory
            $scope.products = data;     //passing by reference, pointing in array that exist in the factory
        })
    })() //immediate invoked with the callback function created and fetches the products array

    $scope.buyProduct = function(product){
        // console.log(product);
        productFactory.buyProduct(product)
    }
});
