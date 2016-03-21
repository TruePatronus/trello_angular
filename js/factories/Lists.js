angular.module('app')
	.factory('Lists', ['$http',function($http) {
		var service = {};
		var lists = [
			{
				id:1,
				listName:"To do"
			},
			{
				id:2,
				listName:"Doing"
			},
			{
				id:3,
				listName:"Done"
			}
		];
		service.get = function() {
			return lists;
		};
		service.add = function(listName){
			lists.push({
				id:_.uniq(),
				listName:listName
			});
		}; 

		service.removeList = function(list) {
			_.pull(lists,list);
		};

		return service;
	}]);