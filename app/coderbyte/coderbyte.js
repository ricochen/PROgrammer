angular.module('programmer.coderbyte', [])

.controller('CoderbyteController', function ($scope, $location) {
  $scope.coderbyteQuizLink = function() {
    $location.path('/coderbyteQuiz');
  };
});