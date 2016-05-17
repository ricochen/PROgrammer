angular.module('programmer.javascriptissexy', [])

.controller('JavascriptissexyController', function ($scope, $location) {
  $scope.javascriptissexyQuizLink = function() {
    $location.path('/javascriptissexyQuiz');
  };
});