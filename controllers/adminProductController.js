//using angular $resouce service and define a controller to access the deployd RESTful API
angular.module("artGalleryAdmin")
  .constant("productUrl", "http://localhost:2403/products/")
  .config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  })
  .controller("productCtrl", function($scope, $resource, productUrl) {
    //setting up the resource url with params
    $scope.productsResource = $resource(productUrl + ":id", {
      id: "@id"
    });
    //reading a product from the database(get),performing R of (CRUD) with query method from $resource service
    $scope.listProducts = function() {
      $scope.products = $scope.productsResource.query();
    };
    //deleting a product from the database, performing D of (CRUD) with $delete method from $resource service
    $scope.deleteProduct = function(product) {
      product.$delete().then(function() {
        $scope.products.splice($scope.products.indexOf(product), 1);
      });
    };
    //creating a product (putting product to database 'post'),performing C of (CRUD) with $save method from $resource service
    $scope.createProduct = function(product) {
      new $scope.productsResource(product).$save().then(function(newProduct) {
        $scope.products.push(newProduct);
        $scope.editedProduct = null;
      });
    };
    //updating a product in database, perfoming U of (CRUD) with $save method from $resource service
    $scope.updateProduct = function(product) {
      product.$save();
      $scope.editedProduct = null;
    };
    //defining actions to attach with ng-click on the view
    $scope.startEdit = function(product) {
      $scope.editedProduct = product;
    };
    $scope.cancelEdit = function() {
      $scope.editedProduct = null;
    };
    $scope.listProducts();
  });
