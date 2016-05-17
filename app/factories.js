angular.module('programmer.factories', [])

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
  var codeschoolQuiz = function(scope, callback) {
    if (scope.question1 === '{age:20}' && scope.question2 === '20') {
      alert('All questions correct, you pass!');
      callback();
    } else {
      alert('Try again');
    }
  };

  return {
    codeschoolQuiz: codeschoolQuiz
  };
})

.factory('Coderbyte', function () {
  var coderbyteQuiz = function(scope, callback) {
    if (scope.question1 === 'array 1: length=5 last=j,o,n,e,s' && scope.question2 === 'array 2: length=5 last=j,o,n,e,s') {
      alert('All questions correct, you pass!');
      callback();
    } else {
      alert('Try again');
    }
  };

  return {
    coderbyteQuiz: coderbyteQuiz
  };
})

.factory('Javascriptissexy', function () {
  var javascriptissexyQuiz = function(scope, callback) {
    if (scope.question1 === '30' && scope.question2 === 'Alice says hi') {
      alert('All questions correct, you pass!');
      callback();
    } else {
      alert('Try again');
    }
  };

  return {
    javascriptissexyQuiz: javascriptissexyQuiz
  };
})