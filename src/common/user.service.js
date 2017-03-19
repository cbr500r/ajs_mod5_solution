(function(){
	'use strict';

	angular.module('restaurant')
		.service('UserService', UserService);

	function UserService(){
		var service = this;

		service.user = function(){
			return {
				'firstName': '',
				'lastName': '',
				'email': '',
				'phone': '',
				'favorite': '',
				'favoriteItem': {}
			};
		}

		service.signupUser = function(user){
			
			service.registeredUser = user;
			return true;
		}

		service.getRegisteredUser = function(){
			return service.registeredUser;
		}
  }
})();