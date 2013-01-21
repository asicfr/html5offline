// Global module
var bookStore = angular.module('bookStore', ['bookStore.main', 'bookStore.book', 'bookStore.storage.services']);

// Add usefull fct into rootScope
bookStore.run(function($rootScope, ApiStorage) {

	$rootScope.logMe = function (logentry) {
		console.log(logentry);
	};
	
	// detect html5 compliance
	$rootScope.localstorageEnable = Modernizr.localstorage;
	$rootScope.offlineEnable = Modernizr.applicationcache;
	$rootScope.logMe("localstorage : " + $rootScope.localstorageEnable);
	$rootScope.logMe("offline : " + $rootScope.offlineEnable);
	
	if (($rootScope.offlineEnable == false) || ($rootScope.localstorageEnable == false)) {
		toastr.error("your browser isn't applicationCache compliant !");
	} else {
		// localstorage conf and init
		$rootScope.dataStoreKey = "dataStoreKey";
		$rootScope.dataStore = {};
		ApiStorage.init();
	}
	
	// TODO is offline ?
	
	// Positionnement toastr
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

