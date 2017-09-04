var app = angular.module('myapp', ["ui.router", "ngResource"])
.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise('/app/populations')
      
      $stateProvider
        .state('app', {
          url: '/app',
          templateUrl: 'views/partial-home.html'
        })
        .state('app.populations', {
            url: "/populations",
            views: {
                'content': {
                    templateUrl: "views/populations.html",
                    controller: 'PopulationsCtrl as pc'
                }
            }
        });

    });