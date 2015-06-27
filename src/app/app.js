'use strict';

(function(window, angular, undefined) {

  angular.module('roman-numerals', [
    'ui.router',
    'Ramda'
  ])
  .value('_', window.lodash)
  .config([ '$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      // For any unmatched url, redirect to /overview
        // when there is an empty route, redirect to /index
      $urlRouterProvider.when('', '/home');

      $stateProvider
        .state('home', {
          url   : '/home',
          views : {
            'main' : {
              templateUrl  : 'src/app/roman-numeral/index.html',
            }
          }
        });
    }
  ]);

})(window, window.angular);
