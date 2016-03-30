angular.module('llfly',[])
	.controller('cartController',function($scope){
	$scope.cart = [
		{
			id:1000,
			name:'iphone5',
			quantity:3,
			price:4500
		},
		{
			id:3300,
			name:'iphone5s',
			quantity:2,
			price:3300
		},
		{
			id:232,
			name:'mac',
			quantity:3,
			price:18000
		},
		{
			id:222,
			name:'ipad',
			quantity:5,
			price:4800
		}
	];
	function findIndex(id){
		var index = -1;
		angular.forEach($scope.cart,function(item,key){
			if(item.id === id){
				index = key;
				return index;
			}
		});
		return index;
	}

	$scope.totalPrice = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += item.quantity * item.price;
		});
		return total;
	};
	$scope.totalQuantity = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += parseInt(item.quantity);
		});
		return total;
	};
	$scope.remove = function(id){
		var index = findIndex(id);
		if(index != -1){
			$scope.cart.splice(index,1);
		}
	};

	$scope.add = function(id){
		var index = findIndex(id);
		if(index != -1){
			++$scope.cart[index].quantity;
		}
	}

	$scope.reduce = function(id){
		var index = findIndex(id);
		if(index != -1){
			var item = $scope.cart[index];
			if(item.quantity >1){
				--item.quantity;
			}else{
				var returnKey = confirm('是否从购物车中删除该产品!');
				if(returnKey){
					$scope.remove(id);
				}
			}
		}
	};

	$scope.$watch('cart',function(newValue,oldValue){
		angular.forEach(newValue,function(item,key){
			if(item.quantity <1){
				var returnKey = confirm('是否从购物车中删除该产品!');
				if(returnKey){
					$scope.remove(item.id);
				}else{
					item.quantity = oldValue[key].quantity;
				}
				return;
			}
		})
	},true)
});