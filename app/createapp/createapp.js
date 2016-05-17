angular.module('programmer.createapp', [])

.controller('CreateappController', function ($scope, $location) {
  $scope.frontend = function() {
    $location.path('/frontendapp');
  };

  $scope.backend = function() {
    $location.path('/backendapp');
  };
});