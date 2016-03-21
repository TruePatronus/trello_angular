angular.module('app')
	.controller('cardCtrl',['Cards', function(Cards) {
		this.isEditing=false;
		this.editingCard=null;
		this.deleteCard = function(card){
			Cards.deleteCard(card);
		};

		this.editCard = function(card) {
			this.isEditing = true;
			this.editingCard = angular.copy(card);
		};

		this.updateCard = function(card) {
			this.isEditing = false;
			Cards.updateCard(this.editingCard);
			this.editingCard = null;
		};

	}]);