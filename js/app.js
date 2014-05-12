var colorApp = angular.module('colorApp', [
  'ngRoute',
  'colorControllers',
]);

colorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/colors', {
        templateUrl: 'partials/colors-list.html',
        controller: 'videoListCtrl'
      }).
      when('/colors/:colorId', {
        templateUrl: 'partials/colors-detail.html',
        controller: 'colorDetailCtrl'
      }).
      otherwise({
        redirectTo: '/color'
      });
  }]);







