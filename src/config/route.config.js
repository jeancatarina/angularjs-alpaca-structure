(function () {
    'use strict';
    
    angular
        .module('alpacaModule')
        .config(configuration)
       
    configuration.$inject = ['$routeProvider'];
        
    function configuration ($routeProvider) {
        
        $routeProvider.when('/alpaca', {
            
            templateUrl: 'src/view/alpaca.view.html',
            controller: 'alpaca.controller',
            controllerAs: 'controller'
          
        }).when('/alpaca2/new', {
            
            templateUrl: 'src/view/alpacae2.view.html',
            controller: 'alpacae2.controller',
            controllerAs: 'controller'
            
        });
        
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
    
})();