(function(){

var app = angular.module('Look4Me', ['ngRoute']);
  
  app.controller('headerCheck', ['$scope','$location', function($scope, $location){
  $scope.currentPath = $location.path().trim();
  }]);


  app.config(function($routeProvider){
      $routeProvider

      .when('/',{
          templateUrl : 'partials/home.html',
          controller : 'HomeController',
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
        controller : 'portefolioController',
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
      });
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

app.controller('HomeController', function(){
    this.product = home;
});

app.controller('NewsController', function(){
  this.products =  date;
  this.data = news;
});

app.controller('ParticuliersController', function($scope){
  $scope.msg = "Marc";
});


app.controller('AboutmeController', function($scope){
  $scope.msg = "Nathalie";
});

app.controller('ContactController', function($scope){
  $scope.msg = "Nathalie";
});


app.controller("portefolioController", function($scope){

    // Data object
    $scope.portefolio = {};
    $scope.portefolio.images = [
        {img:["01AV.jpg", "01AP.jpg"], alt: "Photo relooking style"},
        {img:["02AV.jpg", "02AP.jpg"], alt: "Photo total relooking"},
        {img:["03AV.jpg", "03AP.jpg"], alt: "Photo relooking maquillage"},
        {img:["04AV.jpg", "04AP.jpg"], alt: "Photo relooking.."},
        {img:["05AV.jpg", "05AP.jpg"], alt: "Photo relooking.."},
        {img:["06AV.jpg", "06AP.jpg"], alt: "Photo relooking.."},
        {img:["07AV.jpg", "07AP.jpg"], alt: "Photo relooking.."},
        {img:["08AV.jpg", "08AP.jpg"], alt: "Photo relooking.."},
        {img:["09AV.jpg", "09AP.jpg"], alt: "Photo relooking.."},
        {img:["10AV.jpg", "10AP.jpg"], alt: "Photo relooking.."},
        {img:["11AV.jpg", "11AP.jpg"], alt: "Photo relooking.."}
    ];
    $scope.portefolio.testimonials = [
        {title:"Marjorie (35 ans) - Relooking style", description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."},
        {title:"Enzo (44 ans) - Relooking global", description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."},
        {title:"Alice (21 ans) - Relooking maquillage", description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."},
        {title:"Groupe Guerlain - Coaching d'entreprise", description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."}
    ];
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
	app.directive('headernav', function() {
		return{
			restrict: 'AE',
      name: 'headernav',
			templateUrl: 'partials/commun/headernav.html'
    }
	});
  app.directive('headerhome', function() {
    return{
      restrict: 'AE',
      name: 'headernav',
      templateUrl: 'partials/commun/headerhome.html'
    }
  });

  app.directive('footers', function(){
    return{
      restrict: 'AE',
      name: 'footers',
      templateUrl: '/partials/commun/footers.html',

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



