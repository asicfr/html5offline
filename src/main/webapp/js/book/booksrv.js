// Book services
var bookServicesModule = angular.module('bookServicesModule', []).factory('ApiBook', function() {
    return {
        name: 'ApiBook',
        query: function () {
        	var jsonBooksList = [
        		{"id": "1",
        			"publisherId": "1",
        			"authorId": "1",
        			"isbn": "123123123",
        			"title": "La peur dans les yeux",
        			"price": "12",
        			"quantity": "122",
        			"discount": "10",
        			"availability": "1",
        			"bestSeller": "0"
        		},
        		{"id": "",
        			"publisherId": "2",
        			"authorId": "1",
        			"isbn": "23213123",
        			"title": "Tout l'univers",
        			"price": "132",
        			"quantity": "5",
        			"discount": "130",
        			"availability": "1",
        			"bestSeller": "0"
        		},
        		{"id": "",
        			"publisherId": "3",
        			"authorId": "1",
        			"isbn": "211333333",
        			"title": "L'autre océan",
        			"price": "23",
        			"quantity": "2",
        			"discount": "23",
        			"availability": "1",
        			"bestSeller": "0"
        		}
        	];
        	return jsonBooksList;
        }
    };
});
