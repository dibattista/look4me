(function() {

// DIRECTIVES
angular.module("lookapp").directive('navbar', function() {
    return {
        restrict    : 'E',
        name        : 'navbar',
        templateUrl : 'partials/common/navbar.html'
        //,controller  : 'NavbarController'
    };
});

angular.module("lookapp").directive('headerhome', function() {
    return {
        restrict    : 'A',
        name        : 'headernav',
        templateUrl : 'partials/common/headerhome.html'
    };
});

angular.module("lookapp").directive('footer', function() {
    return {
        restrict    : 'A',
        name        : 'footer',
        templateUrl : '/partials/common/footer.html'
    };
});

})();
