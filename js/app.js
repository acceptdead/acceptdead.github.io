'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/intro', {templateUrl: 'partials/intro.html', controller: GenericViewCtrl});
    $routeProvider.when('/project_1', {templateUrl: 'partials/project_waf.html', controller: GenericViewCtrl});
    $routeProvider.when('/project_2', {templateUrl: 'partials/project_baas.html', controller: GenericViewCtrl});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: ContactViewCtrl});
//    $routeProvider.when('/imprint', {templateUrl: 'partials/imprint.html', controller: //GenericViewCtrl});
    $routeProvider.otherwise({redirectTo: '/intro'});
  }]);
