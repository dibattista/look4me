
    app.config(function($routeProvider){
      $routeProvider
      .when('/',{
        templateUrl :'main.html', 
      })
      .when('/particuliers',{
          templateUrl : '/partials/particuliers.html',
          controller : 'ParticuliersController',
      })
      .when('/entreprises',{
          templateUrl : '/partials/entreprises.html',
          controller : 'EntreprisesController',
      })
      .when('/portefolio',{
        templateUrl : '/partials/portefolio.html',
        controller : 'PortefolioController',
      })
      .when('/presentation',{
        templateUrl : '/partials/aboutme.html',
        controller : 'AboutmeController',
      })
      .when('/contact',{
        templateUrl : '/partials/contact.html',
        controller : 'ContactController',
      })
      .when('/news',{
        templateUrl : '/partials/news.html',
        controller : 'NewsController',
      })
    });

    /******************/
    /*app.controller('ParticuliersController', function($scope){
  $scope.msg = "Marc";
});

app.contreller('EntreprisesController', function($scope){
  $scope.msg = "Marc";
});

app.controller('PortefolioController', function($scope){
  $scope.msg = "Jérôme";
});

app.controller('AboutmeController', function($scope){
  $scope.msg = "Nathalie";
});

app.controller('ContactController', function($scope){
  $scope.msg = "Nathalie";
});*/