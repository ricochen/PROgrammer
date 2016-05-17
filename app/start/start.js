angular.module('programmer.start', ['programmer.factories'])

.controller('StartController', function ($scope, $location, Start) {

  $scope.frontend = function() {
    Start.frontend();
    $location.path('/codecademy');
  };

  $scope.backend = function() {
    Start.backend();
    $location.path('/codecademy');
  };
});