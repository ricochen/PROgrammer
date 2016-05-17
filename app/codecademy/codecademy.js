angular.module('programmer.codecademy', [])

.controller('CodecademyController', function ($scope, $location) {
  $scope.codecademyQuizLink = function() {
    $location.path('/codecademyQuiz');
  };
});