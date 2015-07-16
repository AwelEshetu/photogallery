angular.module("artGallery")
  .controller("artGalleryCtrl",function ($scope) {
  	 $scope.data={
  	 	products:[
  	 	{"name":"WinterDepression","description":"Winter in a cold country",
  	 	"category":"Society lookup ","price":"200","id":"d9fff13c915d390c"},
  	 	{"name":"Being a foreigner","description":"You feel pain when everybody stare at you",
  	 	"category":"Society lookup","price":"300","id":"a30b81916a08080a"},
  	 	{"name":"Acceptable blackneess","description":"The darker you are the more rejected you are ",
  	 	"category":"Society lookup","price":"400","id":"0f5dcf8f5e7238d5"},
  	 	{"name":"Self Distraction","description":"Wanna kill myself ",
  	 	"category":"Society lookup","price":"600","id":"08ec470eba5819f2"},
  	 	{"name":"Cold blooded ","description":"How cruel they are.",
  	 	"category":"Society lookup","price":"800","id":"5739b39aa5ab78f1"},
  	 	{"name":"Revolution","description":"Wanna change the world",
  	 	"category":"Society lookup","price":"2000","id":"f84c77e2c4d028ae"}]
  	 };
  });