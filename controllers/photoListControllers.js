angular.module("artGallery")
	.constant("photoListActiveClass", "btn-primary")
	.constant("photoListPageCount", 4)
	.controller("photoListCtrl", function($scope, $filter, photoListActiveClass,
		photoListPageCount, cart) {

		var selectedCategory = null;
		$scope.selectedPage = 1;
		$scope.pageSize = photoListPageCount;
		$scope.selectCategory = function(newCategory) {
			selectedCategory = newCategory;
			$scope.selectedPage = 1;
		};
		//adding select page property
		$scope.selectedPage = function(newPage) {
			$scope.selectedPage = newPage;
		};

		//attaching category to a product
		$scope.categoryFilter = function(product) {
			return selectedCategory === null || product.category == selectedCategory;
		};
		//applying bootstrap btn -primary
		$scope.getCategoryClass = function(category) {
			return selectedCategory == category ? photoListActiveClass : "";
		};
		//applying bootstrap class select to the pages
		$scope.getPageClass = function(page) {
			return $scope.selectedPage == page ? photoListActiveClass : "";
		};
		$scope.addProductToCart = function(product) {
			cart.addOrder(product.id, product.name, product.price);
		};
	});
