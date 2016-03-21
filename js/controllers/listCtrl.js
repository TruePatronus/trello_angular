angular.module('app')
	.controller('listCtrl',['Lists','Cards', function(Lists,Cards) {
		this.removeList = function(list) {
			Lists.removeList(list);
		};
		this.getCards = function(list) {
			return Cards.getCards(list);
		};

		this.createCard = function(list) {
			Cards.addCard(list, this.cardDescription);
			this.cardDescription="";
		};
	}]);