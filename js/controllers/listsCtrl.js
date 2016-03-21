angular.module('app')
	.controller('listsCtrl',['Lists', function(Lists) {
		this.lists = Lists.get();
		console.log(this.lists);
		this.addList = function(){
			Lists.add(this.listName);
			this.listName = "";
		};
	}]);