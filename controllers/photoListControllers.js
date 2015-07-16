angular.module("artGallery")
.constant("photoListActiveClass","btn-primary")
.controller("photoListCtrl",function($scope,$filter,photoListActiveClass){

var selectedCategory = null;
$scope.selectCategory=function(newCategory){
	selectedCategory=newCategory;
}
//attaching category to a product
$scope.categoryFilter= function(product){
 return selectedCategory == null || product.category ==selectedCategory;
}
//applying bootstrap btn -primary
$scope.getCategoryClass=function(category){
	return selectedCategory == category ? photoListActiveClass: "";
}
});