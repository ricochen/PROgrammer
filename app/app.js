angular.module('programmer', [
  'programmer.factories',
  'programmer.start',
  'programmer.codecademy',
  'programmer.codecademyQuiz',
  'programmer.codeschool',
  'programmer.codeschoolQuiz',
  'programmer.coderbyte',
  'programmer.coderbyteQuiz',
  'programmer.javascriptissexy',
  'programmer.javascriptissexyQuiz',
  'programmer.createapp',
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
    .when('/coderbyte', {
      templateUrl: 'app/coderbyte/coderbyte.html',
      controller: 'CoderbyteController'
    })
    .when('/coderbyteQuiz', {
      templateUrl: 'app/coderbyte/coderbyteQuiz.html',
      controller: 'CoderbyteQuizController'
    })
    .when('/javascriptissexy', {
      templateUrl: 'app/javascriptissexy/javascriptissexy.html',
      controller: 'JavascriptissexyController'
    })
    .when('/javascriptissexyQuiz', {
      templateUrl: 'app/javascriptissexy/javascriptissexyQuiz.html',
      controller: 'JavascriptissexyQuizController'
    })
    .when('/createapp', {
      templateUrl: 'app/createapp/createapp.html',
      controller: 'CreateappController'
    })
    .when('/frontendapp', {
      templateUrl: 'app/createapp/frontendapp.html',
      controller: 'CreateappController'
    })
    .when('/backendapp', {
      templateUrl: 'app/createapp/backendapp.html',
      controller: 'CreateappController'
    })
});