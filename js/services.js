var colorControllers = angular.module('colorControllers', []);

colorControllers.controller('colorListCtrl', ['$scope', 'colors',
  function($scope, colors) {
    $scope.colors = colors.query();
    $scope.orderProp = 'id';
  }]);

colorControllers.controller('ColorDetailCtrl', ['$scope', '$routeParams', 'Colors',
  function($scope, $routeParams, Colors) {
    $scope.colors = colors.get({colorId: $routeParams.colorsId}, function(colors) {
      $scope.mainImageUrl = colors.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);


