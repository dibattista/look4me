(function() { // anonymous wrapper

var app = angular.module("lookapp", ["ngRoute", "ngSanitize"]);

// ROUTING
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/home.html",
        controller  : "HomeController"
    })
    .when("/home", {
        templateUrl : "partials/home.html",
        controller  : "HomeController"
    })
    .when("/particuliers", {
        templateUrl : "partials/particuliers.html",
        controller  : "ParticuliersController"
    })
    .when("/entreprises", {
        templateUrl : "partials/entreprises.html",
        controller  : "EntreprisesController"
    })
    .when("/portefolio", {
        templateUrl : "partials/portefolio.html",
        controller  : "PortefolioController"
    })
    .when("/news", {
        templateUrl : "partials/news.html",
        controller  : "NewsController"
    })
    .when("/aboutme", {
        templateUrl : "partials/aboutme.html",
        controller  : "AboutmeController"
    })
    .when("/contact", {
        templateUrl : "partials/contact.html",
        controller  : "ContactController"
    })
    .when("/legacy", {
        templateUrl : "partials/legacy.html",
    });
});

})();
