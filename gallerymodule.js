angular.module("artGallery", ["galleryFilters", "cart", "ngRoute"])
  .config(function($routeProvider) {
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
