angular.module('programmer.codeschool', [])

.controller('CodeschoolController', function ($scope, $location) {
  $scope.codeschoolQuizLink = function() {
    $location.path('/codeschoolQuiz');
  };
});