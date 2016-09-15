app.controller('HomeController', ['$scope', 'emails', function($scope) {
  emails.succes(function(data) {
    $scope.emails = data;
  });
}]);