var app = angular.module("look4meApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/main.html",
    })
    .when("/particuliers", {
        templateUrl : "partials/particuliers.html",
        controller  : "particuliersController"
    })
    .when("/entreprises", {
        templateUrl : "partials/entreprises.html",
        controller  : "entreprisesController"
    })
    .when("/portefolio", {
        templateUrl : "partials/portefolio.html",
        controller  : "portefolioController"
    })
    .when("/aboutme", {
        templateUrl : "partials/aboutme.html",
        controller  : "aboutmeController"
    })
    .when("/contact", {
        templateUrl : "partials/contact.html",
        controller  : "contactController"
    });
});
