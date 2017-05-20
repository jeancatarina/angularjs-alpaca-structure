(function() {
    'use strict';

    angular
        .module('alpacaModule')
        .controller('alpaca.controller', alpacaController);
        
    alpacaController.$inject = [
        '$rootScope',
        '$routeParams'
    ];

    function alpacaController($rootScope, $routeParams) {

        var self = this;

        function init() {
            
        }

        init();
    };
    
})();