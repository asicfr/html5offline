// Book module add into global module (see mainctrl.js)
var bookStorebook = angular.module('bookStore.book', ['bookStore.book.services'], function($routeProvider, $locationProvider) {

	// Book list
	$routeProvider.when('/book', {
		templateUrl: 'book/list.html'
	});

	// Book create
	$routeProvider.when('/book/create', {
		templateUrl: 'book/create.html'
	});

	// Book edit
	$routeProvider.when('/book/:id', {
		templateUrl: 'book/edit.html'
	});

	// Declare default route
	$routeProvider.otherwise({
		redirectTo : '/book'
	});
	
});

// Book Controllers
bookStorebook.controller('BookListCtrl', ['$scope', '$location', '$routeParams', '$rootScope', 'ApiBook', function ($scope, $location, $routeParams, $rootScope, ApiBook) {
	$rootScope.logMe("BookListCtrl");
	var self = this;
	
	$scope.books = ApiBook.query();

}]);


bookStorebook.controller('BookDetailCtrl', ['$scope', '$location', '$routeParams', '$rootScope', 'ApiBook', function ($scope, $location, $routeParams, $rootScope, ApiBook) {
	$rootScope.logMe("BookDetailCtrl");
	var self = this;
	$scope.idCurrent = $routeParams.id;
	
	$rootScope.logMe("get book ");
	$scope.onebook = ApiBook.get($scope.idCurrent);

	// Book save
	$scope.saveBook = function () {
		$rootScope.logMe("saveBook");
		ApiBook.save();
	};

	// Book remove
	$scope.removeBook = function () {
		$rootScope.logMe("removeBook");
		ApiBook.remove($scope.idCurrent);
	};
	
}]);
