(function(){

var app = angular.module('Look4Me', ['ngRoute']);

  app.config(function($routeProvider){
      $routeProvider
      .when('/',{
        templateUrl :'main.html', 
      })
      .when('/particuliers',{
          templateUrl : 'partials/particuliers.html',
          controller : 'ParticuliersController',
      })
      .when('/entreprises',{
          templateUrl : 'partials/entreprises.html',
          controller : 'EntreprisesController',
      })
      .when('/portefolio',{
        templateUrl : 'partials/portefolio.html',
        controller : 'PortefolioController',
      })
      .when('/presentation',{
        templateUrl : 'partials/aboutme.html',
        controller : 'AboutmeController',
      })
      .when('/contact',{
        templateUrl : 'partials/contact.html',
        controller : 'ContactController',
      })
      .when('/news',{
        templateUrl : 'partials/news.html',
        controller : 'NewsController',
      })
  });

/***********controller**********************/
app.controller('LookController', function(){
    this.product = look;
});

app.controller('HeaderController', function(){
  this.tab = 1;

  this.selecTab = function(setTab){
    this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  };
});

app.controller('NewsController', function(){
  this.products =  date;
  this.data = news;
});

app.controller('ParticuliersController', function($scope){
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
});

/************end controller*****************/
/*************Directive*********************/
   app.directive('test', function(){
    return{
      restrict: 'AE',
      name: 'test',
      templateUrl: '/test.html',

    };
  });

	app.directive('headernav', function(){
		return{
			restrict: 'AE',
      name: 'headernav',
			templateUrl: '/partials/commun/headernav.html',

		};
	});

  app.directive('footers', function(){
    return{
      restrict: 'AE',
      name: 'footers',
      templateUrl: '/partials/commun/footers.html',

    };
  });

    app.directive('news', function(){
    return{
      restrict: 'AE',
      name: 'news',
      templateUrl: '/partials/news.html',

    };
  });
/************* end Directive*********************/

/******* object ******/

 var date = {
    date1: "14",
    date2: "14",
    date3: "14",
    month1: "Août",
    month2: "Août",
    month3: "Août",
  };

var news = {
  name1: "Relooking à Chartres",
  name2: "Relooking Live Chartres",
  name3: "Relooking Live New-York",
  descriptif1: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures",
  descriptif2: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures",
  descriptif3: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures",

};

})();


