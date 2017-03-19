(function(){
	'use strict';

	angular.module('restaurant')
	  .controller('MyinfoController', MyinfoController);

	MyinfoController.$inject = ['UserService', 'MenuService'];
	function MyinfoController(UserService, MenuService){
		var myinfo = this;

		myinfo.user = UserService.getRegisteredUser();
	}
})();