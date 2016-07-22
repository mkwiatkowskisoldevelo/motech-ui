(function () {
    'use strict';

    angular.module('motech-admin')
        .controller('BundlesListController', bundlesListController);

    bundlesListController.$inject = ['$scope', '$rootScope', '$state', 'BundlesFactory'];
    function bundlesListController ($scope, $rootScope, $state, BundlesFactory) {

        BundlesFactory.query(function(bundles){
            $scope.bundles = bundles;
        });

        $scope.loadBundleSettingsPage = function loadBundleSettingsPage(bundle) {
        	var moduleName = 'admin',
                url = '/admin/platform-settings';
            if (bundle.settingsURL !== null && bundle.isActive()) {
                $scope.loadModule(bundle.angularModule, bundle.settingsURL);
            } else if (bundle.bundleId !== undefined) {
                $state.go('bundles.bundleSettings', {'bundleId': bundle.bundleId});
            } else {
                $scope.loadModule(moduleName, url);
            }
        };
    }

})();