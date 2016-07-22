(function(){
	'use strict';

	angular.module('motech-admin')
		.controller('BundleSettingsController', controller);

	controller.$inject = ['$scope', '$stateParams', 'BundleSettingsFactory'];
	function controller($scope, $stateParams, BundleSettingsFactory){
        $scope.moduleSettings = BundleSettingsFactory.query({ bundleId:$stateParams.bundleId });
	}

})();