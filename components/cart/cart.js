angular.module("cart",[])
.factory("cart",function(){
  var orderData=[];
  return {
    addOrder:function(id, name, price){
      var addedToExistingItem=false;
      for(var i=0;i< orderData.length;i++){
        if(orderData[i].id==id){
          orderData[i].count++;
          addedToExistingItem=true;
          break;
        }
      }
      if(!addedToExistingItem){
        orderData.push({
          count:1,
          id:id,
          price:price,
          name:name
        });
      }
    },
    removeOrder:function(id){
      for(var i=0;i<orderData.length;i++){
        if(orderData[i].id==id){
          orderData.splice(i,1);
          break;
        }
      }
    },
    getOrders: function(){
      return orderData;
    }

  };
})
.directive("orderSummary",function(cart){
  return{
    restrict:"E",
    templateUrl:"components/cart/orderSummary.html",
    controller:function($scope){
      var orderData=cart.getOrders();
      $scope.total=function(){
        var total=0;
        for(var i=0;i<orderData.length;i++){
          total += (orderData[i].price * orderData[i].count);
        }
        return total;
      };
      $scope.itemCount=function(){
        var total=0;
        for(var i=0;i< orderData.length;i++){
          total +=orderData[i].count;
        }
        return total;
      };
    }

  };
});
