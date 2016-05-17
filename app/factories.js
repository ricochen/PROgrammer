angular.module('programmer.factories', [])

.factory('Start', function () {
  var choice;

  var frontend = function() {
    choice = 'frontend';
  };

  var backend = function() {
    choice = 'backend';
  };

  return {
    frontend: frontend,
    backend: backend,
    choice: choice
  };
})

.factory('Codecademy', function () {
  var codecademyQuiz = function(scope, callback) {
    if (scope.question1 === 'Hello World' && scope.question2 === 'true') {
      alert('All questions correct, you pass!');
      callback();
    } else {
      alert('Try again');
    }
  };

  return {
    codecademyQuiz: codecademyQuiz
  };
})

.factory('Codeschool', function () {

  
})