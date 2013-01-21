// Global module
var bookStore = angular.module('bookStore', ['bookStore.main', 'bookStore.book']);

// Add usefull fct into rootScope
bookStore.run(function($rootScope) {

	$rootScope.logMe = function (logentry) {
		console.log(logentry);
	};
	
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

