//controlling the orders
angular.module("artGallery")
  .controller("orderSummaryCtrl", function($scope, cart) {
    //getting orders from the 'cart' and assigning it to 'orderData'
    $scope.orderData = cart.getOrders();
    //calculating total price depending on the order list
    $scope.total = function() {
      var total = 0;
      for (var i = 0; i < $scope.orderData.length; i++) {
        total += ($scope.orderData[i].price * $scope.orderData[i].count);
      }
      return total;
    };
    //remove an order from the cart
    $scope.remove = function(id) {
      cart.removeOrder(id);
    };

  });
