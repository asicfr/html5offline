// Global module
var bookStore = angular.module('bookStore', ['bookStore.main', 'bookStore.book', 'bookStore.storage.services']);

// Add usefull fct into rootScope
bookStore.run(function($rootScope, $templateCache, $http, ApiStorage) {

	// Force template cache to allow offline for all partials
	$http.get('main/footer.html', {cache:$templateCache});
    $http.get('main/header.html', {cache:$templateCache});
    $http.get('main/inprogress.html', {cache:$templateCache});
    $http.get('main/welcome.html', {cache:$templateCache});

    $http.get('book/create.html', {cache:$templateCache});
    $http.get('book/edit.html', {cache:$templateCache});
    $http.get('book/list.html', {cache:$templateCache});

	// Logger
	$rootScope.logMe = function (logentry) {
		console.log(logentry);
	};

	// Detect html5 compliance with Modernizr
	$rootScope.localstorageEnable = Modernizr.localstorage;
	$rootScope.offlineEnable = Modernizr.applicationcache;
	$rootScope.logMe("localstorage : " + $rootScope.localstorageEnable);
	$rootScope.logMe("offline : " + $rootScope.offlineEnable);
	
	if (($rootScope.offlineEnable == false) || ($rootScope.localstorageEnable == false)) {
		toastr.error("Your browser isn't applicationCache compliant !");
	} else {
		// localstorage conf and init
		$rootScope.dataStoreKey = "dataStoreKey";
		$rootScope.dataStore = {};
		ApiStorage.init();
	}
	
	// Configuration toastr
	toastr.options.positionClass = 'toast-bottom-right';
});

// Welcome module
var bookStoremain = angular.module('bookStore.main', [], function($routeProvider, $locationProvider) {
	
	// Declare welcome route
	$routeProvider.when('/welcome', {
		templateUrl : 'main/welcome.html',
	    controller: 'MainCtrl'
	});

	// Declare futur route
	$routeProvider.when('/inprogress', {
		templateUrl : 'main/inprogress.html',
	    controller: 'MainCtrl'
	});

	// Declare default route
	$routeProvider.otherwise({
		redirectTo : '/welcome',
	    controller: 'MainCtrl'
	});
});

// Main controller
bookStoremain.controller('MainCtrl', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {
    var self = this;
    
}]);

