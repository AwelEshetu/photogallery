//defining admin handling module and configuring all navigation pages related to administration
angular.module("artGalleryAdmin", ["ngRoute", "ngResource"])
  .config(function($routeProvider) {
    $routeProvider.when("/login", {
      templateUrl: "/views/adminLogin.html"
    });
    $routeProvider.when("/main", {
      templateUrl: "/views/adminMain.html"
    });
    $routeProvider.otherwise({
      redirectTo: "/login"
    });
  });
