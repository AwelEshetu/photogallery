//defining 'artGallery module' and its dependencies, also configuring routes
angular.module("artGallery", ["galleryFilters", "cart", "ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.when("/complete", {
      templateUrl: "/views/thankYou.html"
    });
    $routeProvider.when("/placeorder", {
      templateUrl: "/views/placeOrder.html"
    });
    $routeProvider.when("/checkout", {
      templateUrl: "/views/checkoutSummary.html"
    });
    $routeProvider.when("/products", {
      templateUrl: "/views/photoList.html"
    });
    $routeProvider.otherwise({
      templateUrl: "/views/photoList.html"
    });
  });
