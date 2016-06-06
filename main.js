angular.module('inspirationalQuotes', ['ur-router'])
    .config(configRouter)
    .controller('homeCtrl', homeController)
    .controller('formCtrl', formController)
    .controller('listCtrl', listController)
configRouter.$inject = ['$stateProvider', '$urlRouterProvider']
formController.$inject = ['$state']
listController.$inject = ['$state']

    function configRouter ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state ('home', {
                url: '/',
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl as hCtrl'
            })
            .state ('form', {
                url: '/form',
                templateUrl: 'partials/form.html',
                controller: 'formCtrl as fCtrl'
            })
            .state ('list', {
                url: '/list',
                templateUrl: 'partials/list.html',
                controller: 'listCtrl as lCtrl'
            })
    }
    
    function homeController () {
        var hCtrl = this;
        
    }