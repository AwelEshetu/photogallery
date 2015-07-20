//defining artgallery controller with Ajax request
//sending orders to the deployd database and displaying back to the user
angular.module("artGallery")
  .constant("dataUrl", "http://localhost:2403/products")
  .constant("orderUrl", "http://localhost:2403/orders")
  .controller("artGalleryCtrl", function($scope, $http, $location, dataUrl,
    orderUrl, cart) {
    $scope.data = {};
    //getting products data from deployd server using Ajax get
    $http.get(dataUrl).success(function(data) {
      $scope.data.products = data;
    }).error(function(error) {
      $scope.data.error = error;
    });
    //sending order details to deployd server using 'http post'
    $scope.sendOrder = function(shippingDetails) {
      //using angular.copy to create a copy of the shipping detail for safe manipulation
      //without affecting other parts of the application
      var order = angular.copy(shippingDetails);
      order.products = cart.getOrders();
      //posting orders to deployd server using Ajax post
      $http.post(orderUrl, order)
        .success(function(data) {
          $scope.data.orderId = data.id;
          cart.getOrders().length = 0;
        })
        .error(function(error) {
          $scope.data.orderError = error;
        })
        .finally(function() {
          $location.path("/complete");
        });
    };
  });
