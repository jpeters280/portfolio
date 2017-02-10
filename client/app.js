var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
    // -----------------VIEWS
    .when('/', {
        templateUrl: '/partials/views/index.html'
        // reloadOnSearch: false,
        // controller: 'mailNewController'
    })
    // -----------------END VIEWS
    .otherwise({
        redirectTo: '/'
    });

    // -----------------REMOVAL OF HASH IN ADDRESS FIELD
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks:true
    });
    // -----------------END REMOVAL OF HASH IN ADDRESS FIELD
});