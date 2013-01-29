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

});

// Book Controllers
bookStorebook.controller('BookListCtrl', ['$scope', '$location', '$routeParams', '$rootScope', 'ApiBook', 'ApiStorage', function ($scope, $location, $routeParams, $rootScope, ApiBook, ApiStorage) {
	$rootScope.logMe("BookListCtrl");
	var self = this;
	
	$scope.books = ApiBook.search();
	$rootScope.logMe("search end");

	// new Book call
	$scope.openCreateBookPage = function () {
		$rootScope.logMe("openCreateBookPage");
		$location.path("/book/create");
	};

}]);


bookStorebook.controller('BookDetailCtrl', ['$scope', '$location', '$routeParams', '$rootScope', 'ApiBook', 'ApiStorage', function ($scope, $location, $routeParams, $rootScope, ApiBook, ApiStorage) {
	$rootScope.logMe("BookDetailCtrl");
	$scope.idCurrent = $routeParams.id;
	
	$rootScope.logMe("get book ");
	$scope.onebook = ApiBook.get($scope.idCurrent);
	
	if ($scope.onebook === undefined) {
		toastr.error("An error has occurred !");
	}
	
	// Book update
	$scope.updateBook = function () {
		$rootScope.logMe("updateBook");
		if (ApiBook.update($scope.idCurrent, $scope.onebook)) {
			toastr.success("The book has been successfully updated");
		} else {
			toastr.error("An error has occurred !");
		}
	};

	// Book remove
	$scope.removeBook = function () {
		$rootScope.logMe("removeBook");
		if (ApiBook.remove($scope.idCurrent)) {
			toastr.success("The book has been successfully removed");
			$location.path("/book");
		} else {
			toastr.error("An error has occurred !");
		}
	};

	// Return to list
	$scope.openListBookPage = function () {
		$rootScope.logMe("openListBookPage");
		$location.path("/book");
	};

}]);

bookStorebook.controller('BookCreateCtrl', ['$scope', '$location', '$routeParams', '$rootScope', 'ApiBook', function ($scope, $location, $routeParams, $rootScope, ApiBook) {
	$rootScope.logMe("BookCreateCtrl");
	$scope.onebook = {};
	
	// Book save
	$scope.saveBook = function () {
		$rootScope.logMe("saveBook");
		if (ApiBook.create($scope.onebook)) {
			toastr.success("The book has been successfully created");
			$location.path("/book");
		} else {
			toastr.error("An error has occurred !");
		}
	};

	// Return to list
	$scope.openListBookPage = function () {
		$rootScope.logMe("openListBookPage");
		$location.path("/book");
	};

}]);
