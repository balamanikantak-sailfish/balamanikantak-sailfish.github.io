var routerApp = angular.module('app', ['appCreateAccount','appCreatePanEntity','appGetAccounts','appGetPanEntities','ui.router','ui.bootstrap','ui.grid','ui.grid.pagination','underscore']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // HOME ========================================
                   .state('home', {
                    url: '/home',
                    templateUrl: 'partials/Home.html'
                })
        // Create New Account ===========================
        .state('CnA', {
            url: '/i/CA',
            templateUrl: 'partials/CreateAccount.html',
            controller:'createAccountCtrl'
        })
        // Create New PANCARD Entities ===========================
        .state('CnPE', {
            url: '/i/CA/CnPE',
            templateUrl: 'partials/CreatePanEntity.html',
            controller:'createPanEntitiyCtrl'
        })
        .state('VwA', {
            url: '/vw/VwA',
            templateUrl: 'partials/GetAccounts.html',
            controller:'getAccountsCtrl'
        })
        .state('VwPE', {
            url: '/vw/CA/VwPE',
            templateUrl: 'partials/GetPanEntities.html',
            controller:'getPanEntitiesCtrl'
        })

});

