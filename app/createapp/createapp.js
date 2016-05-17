angular.module('programmer.createapp', [])

.controller('CreateappController', function ($scope, $location, Createapp) {

  $scope.frontend = function() {
    Createapp.frontend();
    $location.path('/frontend');
  };

  $scope.backend = function() {
    Createapp.backend();
    $location.path('/backend');
  };
});