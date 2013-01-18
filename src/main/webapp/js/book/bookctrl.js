// Book module add into global module of mainctrl.js
var bookStorebook = angular.module('bookStore.book', ['bookServicesModule'], function($routeProvider, $locationProvider) {

	// Book list
	$routeProvider.when('/book', {
		templateUrl: 'book/list.html',
	    controller: 'BookCtrl'
	});

});

// Book Controller
bookStorebook.controller('BookCtrl', ['$scope', '$location', '$routeParams', 'ApiBook', function ($scope, $location, $routeParams, ApiBook) {
	var self = this;
	
	// List of Todos, loaded by the Todo service
	$scope.books = ApiBook.query();
	
	// Navigation to the "New Todo" page
	$scope.openBookNewPage = function () {
		$location.path("/book/new");
	};
	
}]);
