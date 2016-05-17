angular.module('programmer.javascriptissexyQuiz', [])

.controller('JavascriptissexyQuizController', function ($scope, $location, Javascriptissexy) {
  $scope.javascriptissexyQuiz = function() {
    Javascriptissexy.javascriptissexyQuiz($scope, function() {
      $location.path('/app');
    });  
  };
});