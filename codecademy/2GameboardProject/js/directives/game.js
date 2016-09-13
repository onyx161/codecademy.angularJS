app.directive('gameInfo', function() {
	return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/game.html',
  };
});