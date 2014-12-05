'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/INTRO', {templateUrl: 'partials/INTRO.html', controller: GenericViewCtrl});
    $routeProvider.when('/Project_WAF', {templateUrl: 'partials/project_a.html', controller: GenericViewCtrl});
    $routeProvider.when('/project_iGAMEv', {templateUrl: 'partials/project_b.html', controller: GenericViewCtrl});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: ContactViewCtrl});
    $routeProvider.otherwise({redirectTo: '/INTRO'});
  }]);
