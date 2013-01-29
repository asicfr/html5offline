// Datastore services

var storageServicesModule = angular.module('bookStore.storage.services', []).factory('ApiStorage', function($rootScope, $http) {
    return {
        init: function () {
    		$rootScope.logMe("init");
    		if ($rootScope.dataStore.entities) {
    			$rootScope.logMe("already init datastorage");
    		} else {
    			$rootScope.logMe("datastore empty");
    			var tmp = window.localStorage.getItem($rootScope.dataStoreKey);
    			if (tmp) {
    				var jsonTmp = JSON.parse(tmp);
    				$rootScope.dataStore = { "entities" : jsonTmp };
    			} else {
            		$rootScope.dataStore.entities = {};
    			}
    		}
        },
        store: function () {
    		$rootScope.logMe("store");
    		if ($rootScope.localstorageEnable) {
	    		if ($rootScope.dataStore.entities) {
	    			window.localStorage.setItem($rootScope.dataStoreKey, JSON.stringify($rootScope.dataStore.entities));
	    		}
    		}
        },
    	search: function (entityName) {
    		$rootScope.logMe("search for " + entityName);
    		if ($rootScope.localstorageEnable) {
        		if ($rootScope.dataStore.entities) {
	    			if ($rootScope.dataStore.entities.hasOwnProperty(entityName)) {
	    				return $rootScope.dataStore.entities[entityName];
	    			}
        		}
    		}
        },
    	read: function (entityName, entityKey) {
    		$rootScope.logMe("read for name " + entityName + " and key " + entityKey);
    		if ($rootScope.localstorageEnable) {
        		if ($rootScope.dataStore.entities) {
	    			if ($rootScope.dataStore.entities.hasOwnProperty(entityName)) {
	        			var step1 = $rootScope.dataStore.entities[entityName]; // TODO factoriser avec search
	        			if (step1.hasOwnProperty(entityKey)) {
	        				return step1[entityKey];
	        			} else {
	        				$rootScope.logMe("no entity for name " + entityName + " and key " + entityKey);
	        			}
	    			} else {
	    				$rootScope.logMe("no entities for name " + entityName);
	    			}
        		}
    		}
        },
        create: function (entityName, entityData) {
    		$rootScope.logMe("create for name " + entityName);
    		var entityKey = this.generateUUID();
    		if ($rootScope.localstorageEnable) {
        		if ($rootScope.dataStore.entities) {
					if ($rootScope.dataStore.entities.hasOwnProperty(entityName)) {
	    				$rootScope.logMe("existing entities for name " + entityName);
	    			} else {
	    				$rootScope.logMe("init entities for name " + entityName);
	    				$rootScope.dataStore.entities[entityName] = {};
	    			}
					
        			var step1 = $rootScope.dataStore.entities[entityName]; // TODO factoriser avec search
        			if (step1.hasOwnProperty(entityKey)) {
        				// TODO exception ? 
        				$rootScope.logMe("entity already for name " + entityName + " and key " + entityKey); // log error, warn, info ...
        			} else {
        				step1[entityKey] = entityData;
        				this.store();
        				return true;
        			}
        		}
    		}
    		return false;
        },
        update: function (entityName, entityKey, entityData) {
    		$rootScope.logMe("update for name " + entityName + " and key " + entityKey);
			if($rootScope.localstorageEnable){
        		if ($rootScope.dataStore.entities) {
					if ($rootScope.dataStore.entities.hasOwnProperty(entityName)) {
	        			var step1 = $rootScope.dataStore.entities[entityName]; // TODO factoriser avec search
	        			if (step1.hasOwnProperty(entityKey)) {
	        				step1[entityKey] = entityData;
	        				this.store();
	    	    			return true;
	        			} else {
	        				$rootScope.logMe("no entity for name " + entityName + " and key " + entityKey);
	        			}
	    			} else {
	    				$rootScope.logMe("no entities for name " + entityName);
	    			}
        		}
			}
    		return false;
        },
        remove: function (entityName, entityKey) {
    		$rootScope.logMe("remove for name " + entityName + " and key " + entityKey);
    		if ($rootScope.dataStore.entities) {
				if ($rootScope.dataStore.entities.hasOwnProperty(entityName)) {
					var step1 = $rootScope.dataStore.entities[entityName];
					if (step1.hasOwnProperty(entityKey)) {
						delete step1[entityKey];
						this.store();
						return true;
					}
				}
    		}
    		return false;
    	},
    	generateUUID: function () {
    	    var d = new Date().getTime();
    	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    	        var r = (d + Math.random()*16)%16 | 0;
    	        d = Math.floor(d/16);
    	        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    	    });
        	    return uuid;
        }
    };
});

