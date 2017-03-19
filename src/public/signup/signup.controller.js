(function(){
	'use strict';

	angular.module('restaurant')
	  .controller('SignupController', SignupController);

	SignupController.$inject = ['UserService', 'MenuService'];
	function SignupController(UserService, MenuService){
		var signup = this;

		signup.user = UserService.getRegisteredUser() || UserService.user();

		signup.submit = function(){
			signup.registered = UserService.signupUser(signup.user);
		}

		signup.checkFavorite = function(){
			if (signup.user.favorite && signup.user.favorite.length > 0){
				MenuService.getMenuItem(signup.user.favorite).then(function(response){
				if (response.error){
					signup.user.favoriteItem = {};
					signup.invalidItem = true;
				}else{
					signup.user.favoriteItem = response;
					signup.invalidItem = false;
				}
				
			});
			}			
		}
	}
})();