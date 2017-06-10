var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
    // -----------------VIEWS
    .when('/', {
        templateUrl: '/partials/views/contact.html',
        controller: 'mailNewController'
    })
    .when('/formsubmitted', {
        templateUrl: '/partials/views/formsubmitted.html'
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