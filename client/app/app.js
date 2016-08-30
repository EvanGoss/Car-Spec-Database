angular.module('app', [
  'ngRoute',
  'app.CarsController'
])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'app/cars/cars.html',
    controller: 'CarsController'
  });
});