'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/INDEX', {templateUrl: '/index.html', controller: GenericViewCtrl});
    $routeProvider.when('/Profile', {templateUrl: 'partials/profile.html', controller: GenericViewCtrl});
    $routeProvider.when('/Project_Server_Systems', {templateUrl: 'partials/project_server_systems.html', controller: GenericViewCtrl});
    $routeProvider.when('/Project_Web_Vulnerability', {templateUrl: 'partials/project_web_vulnerability.html', controller: GenericViewCtrl});
    $routeProvider.when('/Project_Server_Incident', {templateUrl: 'partials/project_server_incident.html', controller: GenericViewCtrl});
    $routeProvider.when('/Project_Waf', {templateUrl: 'partials/project_waf.html', controller: GenericViewCtrl});
    $routeProvider.when('/Project_GBaas', {templateUrl: 'partials/project_Gbaas.html', controller: GenericViewCtrl});
    $routeProvider.when('/Project_GStatistic', {templateUrl: 'partials/project_GStatistic.html', controller: GenericViewCtrl});
    $routeProvider.when('/Project_PUSH', {templateUrl: 'partials/project_push.html', controller: GenericViewCtrl});
    $routeProvider.when('/Contact', {templateUrl: 'partials/contact.html', controller: ContactViewCtrl});
//    $routeProvider.when('/imprint', {templateUrl: 'partials/imprint.html', controller: //GenericViewCtrl});
    $routeProvider.otherwise({redirectTo: '/INTRO'});
  }]);
