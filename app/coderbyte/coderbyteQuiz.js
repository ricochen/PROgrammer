angular.module('programmer.coderbyteQuiz', [])

.controller('CoderbyteQuizController', function ($scope, $location, Coderbyte) {
  $scope.coderbyteQuiz = function() {
    Coderbyte.coderbyteQuiz($scope, function() {
      $location.path('/javascriptissexy');
    });
  };
});