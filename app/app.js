angular.module('programmer', [
  'programmer.factories',
  'programmer.start',
  'programmer.codecademy',
  'programmer.codecademyQuiz',
  // 'programmer.codeschool',
  // 'programmer.codeschoolQuiz',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/start/start.html',
      controller: 'StartController'
    })
    .when('/codecademy', {
      templateUrl: 'app/codecademy/codecademy.html',
      controller: 'CodecademyController'
    })
    .when('/codecademyQuiz', {
      templateUrl: 'app/codecademy/codecademyQuiz.html',
      controller: 'CodecademyQuizController'
    })
    .when('/codeschool', {
      templateUrl: 'app/codeschool/codeschool.html',
      controller: 'CodeschoolController'
    })
    .when('/codeschoolQuiz', {
      templateUrl: 'app/codeschool/codeschoolQuiz.html',
      controller: 'CodeschoolQuizController'
    })
});