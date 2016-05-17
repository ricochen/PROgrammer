angular.module('programmer.start', [])

.controller('StartController', function ($scope, $location, Start) {

  $scope.start = function() {
    $location.path('/codecademy');
  };
});