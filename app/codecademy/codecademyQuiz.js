angular.module('programmer.codecademyQuiz', [])

.controller('CodecademyQuizController', function ($scope, $location, Codecademy) {
  $scope.codecademyQuiz = function() {
    Codecademy.codecademyQuiz($scope, function() {
      $location.path('/codeschool');
    });  
  };
});