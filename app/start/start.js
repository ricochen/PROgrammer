angular.module('programmer.start', [])

.controller('StartController', function ($scope, $location) {
  $scope.start = function() {
    $location.path('/codecademy');
  };
});