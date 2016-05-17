angular.module('programmer.codeschoolQuiz', [])

.controller('CodeschoolQuizController', function ($scope, $location, Codeschool) {
  $scope.codeschoolQuiz = function() {
    Codeschool.codeschoolQuiz($scope, function() {
      $location.path('/coderbyte');
    });  
  };
});