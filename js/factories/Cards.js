angular.module('app')
	.factory('Cards', function() {
		var service = {};
		var cards = [
			{
				id:1,
				description:'Learn node.js',
				list_id:1
			},
			{
				id:2,
				description:'Learn express.js',
				list_id:1
			},
			{
				id:3,
				description:'Learn AngularJS',
				list_id:2
			},
			{
				id:4,
				description:'Learn SASS basics',
				list_id:3
			},
			{
				id:5,
				description:'Learn jQuery basics',
				list_id:3
			}
		];

		service.getCards = function(list) {
			return _.filter(cards, {list_id:list.id});
		};

		service.addCard = function(list,description) {
			cards.push({
				id:_.uniq(),
				description:description,
				list_id:list.id
			});
		};

		service.deleteCard = function(card){
			return _.pull(cards, card);
		};

		service.updateCard = function(updatingCard) {
			var card = _.find(cards, {'id':updatingCard.id});
			card.description = updatingCard.description;
			console.log("Kaka");
		};
		return service;
	});