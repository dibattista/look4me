(function(){

var app = angular.module('Look4Me', ['ngRoute','ngSanitize']);

  app.controller('headerCheck', ['$scope','$location', function($scope, $location){
  $scope.currentPath = $location.path().trim();
  }]);

  app.config(function($routeProvider){
      $routeProvider

      .when('/',{
          templateUrl : 'partials/home.html',
          controller : 'HomeController',
      })
      .when('/home',{
          templateUrl : 'partials/home.html',
          controller : 'HomeController',
      })
      .when('/particuliers',{
          templateUrl : 'partials/particuliers.html',
          controller : 'particuliersController',
      })
      .when('/entreprises',{
          templateUrl : 'partials/entreprises.html',
          controller : 'entreprisesController',
      })
      .when('/portefolio',{
        templateUrl : 'partials/portefolio.html',
        controller : 'portefolioController',
      })
      .when('/presentation',{
        templateUrl : 'partials/aboutme.html',
        controller : 'aboutmeController',
      })
      .when('/contact',{
        templateUrl : 'partials/contact.html',
        controller : 'contactController',
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
});

app.controller('HomeController', function(){
    //this.product = "home";
    $scope.home = {};
    $scope.home.portefolio = [

        {img:["01AV.jpg", "01AP.jpg"], alt: "Photo relooking"},
        {img:["02AV.jpg", "02AP.jpg"], alt: "Photo relooking"},
        {img:["03AV.jpg", "03AP.jpg"], alt: "Photo relooking"}
    ];
});

/******************************************** News controller *****************************************/
app.controller('NewsController', function($scope){
  $scope.news = {};
  $scope.news.objectNews = [

{ datej: "14",
  dateM: "Août",
  title: "Relooking à Chartres",
  description: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures"
},

{ datej: "14",
  dateM: "Août",
  title: "Relooking à Chartres",
  description: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures"
},

{ datej: "14",
  dateM: "Août",
  title: "Relooking à Chartres",
  description: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures"
},
 ];

});
/********************************** News end controller ***************************************/

/********************************** particuliers controller ***************************************/

app.controller('particuliersController', function($scope, $anchorScroll,$location){

  $scope.tab = 1;

  $scope.changeTab = function(id){
    $scope.tab = parseInt(id);
  };

  $scope.gotoAnchor = function(id) {
      if (id === 1){
        $scope.tab = parseInt(id);
        $location.hash("anchor" + id);
        $location.hash('');
      }
      else{
        $scope.tab = parseInt(id);
        $location.hash("anchor" + id);
        $location.hash('');
      }
    };

  $scope.servParticuliersF = [

      // Prestation 1 (femmes)
      {
        img:"img/particuliers/femmes/meeting.jpg",
        alt:"photo meeting",
        titre:"Entretien découverte",
        description:"Nous permet de définir vos besoins, vos objectifs.",
        tarif:"1H - 50€",
        genre:"F"
      },
      // Prestation 2 (femmes)
      {
        img:"img/particuliers/femmes/atelier_colorimetrie.jpg",
        alt:"photo atelier colorimetrie",
        titre:"Atelier colorimétrie",
        description:"Les couleurs ont un impact sur votre usage. Elles peuvent vous effacer ou vous mettre en valeur. Ce test est un incontournable du relooking car Atelier colorimétrieil va nous permettre de définir votre colorimétrie et le résultat nous servira dans le choix de vos tenues, votre maquillage, coloration coiffure et vos accessoires, connaître la symbolique des couleurs et savoir les utiliser. Un nuancier correspondant à votre résultat vous sera remis en fin de séances utile. Il vous sera utile lors de vos achats vestimentaires!",
        tarif:"1H - 70€",
        genre:"F"
      },
      // Prestation 3 (femmes)
      {
        img:"img/particuliers/femmes/atelier_makeup.jpg",
        alt:"photo make-up",
        titre:"Atelier make-up",
        description:"Se maquiller peut être un plaisir pour certaines personnes et une perte de temps pour d'autres. Pourtant, avec quelques astuces et conseils, nous pouvons toutes réaliser un maquillage idéal en toutes circonstances. Comprend : <ul>                 <li>test des couleurs</li>                <li>analyse morphologique du visage</li>                <li>cours de maquillage</li>              </ul>",
        tarif:"1H30 - 90€",
        genre:"F"
      },
      // Prestation 4 (femmes)
      {
        img:"img/particuliers/femmes/relooking_coiffure.jpg",
        alt:"photo relooking coiffure",
        titre:"Relooking coiffure",
        description:"Avec l'aide de notre partenaire coiffeur et après avoir vu ensemble : <ul><li>votre personnalité</li><li>la morphologie de votre visage</li><li>test des couleurs</li><li>votre nature de cheveux</li><li>vos contraintes et envies</li></ul> Nous vous révélerons la coupe et les choix de coloration qui vous mettrons en valeur.               (!) En prévision du relooking coiffure nous vous conseillons de ne pas couper vos cheveux.",
        tarif:"Ajouter le prix et la durée de la séance",
        genre:"F"
      },
      // Prestation 5 (femmes)
      {
        img:"img/particuliers/femmes/relooking_vestimentaire.jpg",
        alt:"photo relooking vestimentaire",
        titre:"Relooking vestimentaire",
        description:"Chacun étoffe sa garde-robe de différentes façons. Certaines personnes sont douées pour trouver ce qui leur va, d'autres se laisseront influencer par la mode ou un vendeur plus préoccupé par la vente que par le rendu du vêtement sur vous. <br> Savoir s'habiller en toute occasion et suivant l'objectif de style que vous vous êtes fixé, voila ce que je peux vous aider à acquérir.              Comprend : <ul><li>test des couleurs</li><li>analyse morphologique de votre silhouette</li><li>identification de votre style</li>                <li>conseils vestimentaires et accessoires</li>                 <li>accompagnement shopping</li>              </ul>",
        tarif:"6H - 400€",
        genre:"F"
      },
      // Prestation 6 (femmes)
      {
        img:"img/particuliers/femmes/relooking_complet.jpg",
        alt:"photo relooking complet",
        titre:"Relooking complet",
        description:"Comprend : <ul><li>entretien découverte</li><li>test des couleurs</li><li>analyse morphologique du visage, cosmétologie et cours de maquillage</li><li>conseils coiffure</li><li>analyse morphologique de la silhouette</li><li>conseils vestimentaires (coupes, couleurs, motifs et imprimés) et accessoires</li><li>tri de votre garde-robes</li><li>accompagnement shopping</li></ul>Non-compris :<ul><li>(!) La prestation de notre partenaire coiffeur</li><li>(!) Les achats lors du shopping</li></ul> Un book récapitulatif vous sera envoyé ultérieurement.",
        tarif:"10-11H - 690€",
        genre:"F"
      },
      // Prestation 7 (femmes)
      {
        img:"img/particuliers/femmes/",
        alt:"photo coatch séduction",
        titre:"Coach Séduction",
        description:"Ajouter le prix et la durée de la séance",
        tarif:"Ajouter le prix et la durée de la séance",
        genre:"F"
      }

      ];

       $scope.servParticuliersH = [
      // Prestation 1 (hommes)
      {
        img:"img/particuliers/hommes/total_relooking.jpg",
        alt:"photo total relooking",
        titre:"Relooking complet Homme",
        description:"Comprend : <ul><li>entretien découverte</li><li>test des couleurs</li><li>maquillage</li><li>coiffure</li><li>analyse morphologique et style souhaité</li><li>conseils vestimentaires et accessoires</li><li>accompagnement shopping</li></ul>",
        tarif:"8H - 490€",
        genre:"H"
      },
      // Prestation 2 (hommes)
      {
        img:"img/particuliers/hommes/colorimetrie.jpg",
        alt:"photo colorimetrie",
        titre:"Prestation spécifique",
        description:"",
        tarif:"Ajouter le prix et la durée de la séance",
        genre:"H"
      },
      // Prestation 3 (hommes)
      {
        img:"img/particuliers/hommes/relooking_beard.jpg",
        alt:"photo relooking barbe",
        titre:"Prestation spécifique",
        description:"",
        tarif:"Ajouter le prix et la durée de la séance",
        genre:"H"
      },
      // Prestation 4 (hommes)
      {
        img:"img/particuliers/hommes/relooking_hair.jpg",
        alt:"photo relooking cheveux",
        titre:"Prestation spécifique",
        description:"",
        tarif:"Ajouter le prix et la durée de la séance",
        genre:"H"
      },
      // Prestation 5 (hommes)
      {
        img:"img/particuliers/hommes/relooking_style.jpg",
        alt:"photo relooking style",
        titre:"Prestation spécifique",
        description:"",
        tarif:"Ajouter le prix et la durée de la séance",
        genre:"H"
      },
      // Prestation 6 (hommes)
      {
        img:"img/particuliers/hommes/relooking_complet.jpg",
        alte:"photo relooking style",
        titre:"Relooking complet",
        description:"Comprend : <ul><li>entretien découverte</li><li>test des couleurs</li><li>analyse morphologique du visage, cosmétologie et cours de maquillage</li><li>conseils coiffure</li><li>analyse morphologique de la silhouette</li><li>conseils vestimentaires (coupes, couleurs, motifs et imprimés) et accessoires</li><li>tri de votre garde-robes</li><li>accompagnement shopping</li></ul> Non-compris :<ul><li>(!) La prestation de notre partenaire coiffeur</li><li>(!) Les achats lors du shopping</li></ul> Un book récapitulatif vous sera envoyé ultérieurement.",
        tarif:"10-11H - 690€",
        genre:"H"
      },
      // Prestation 7 (hommes)
      {
        img:"img/particuliers/hommes/",
        alt:"photo atelier occasion",
        titre:"Atelier occasion",
        description:"Ajouter le prix et la durée de la séance",
        tarif:"Ajouter le prix et la durée de la séance",
        genre:"H"
      },
      // Prestation 8 (hommes)
      {
        imgage:"img/particuliers/hommes/",
        alt:"photo coatch séduction",
        titre:"Coach Séduction",
        description:"Ajouter le prix et la durée de la séance",
        tarif:"Ajouter le prix et la durée de la séance",
        genre:"H"
      }
      ];
    });

/********************************** end particuliers controller ***************************************/

/********************************** Entreprise controller ***************************************/
app.controller('entreprisesController', function($scope){
  $scope.servEntreprises = [

      // Prestation 1
      {
        collapse:"collapse1",
        offre:"+ Offres pour les CE",
        img:"img/entreprises/imagesYX210DGU.jpg",
        alt:"photo",
        titre:"",
        description:""
      },
      // Prestation 2
      {
        collapse:"collapse2",
        offre:"+ Actions Commerciales et Promotionnelles",
        img:"img/entreprises/imagesOKRM9HHG.jpg",
        alt:"photo",
        titre:"",
        description:""
      },
      // Prestation 3
      {
        collapse:"collapse3",
        offre:"+ Stylisme et Direction artistique",
        img:"img/entreprises/imagesRGQHS8EV.jpg",
        alt:"photo",
        titre:"",
        description:""
      },
      // Prestation 4
      {
        collapse:"collapse4",
        offre:"+ Evènementiels, Soirées AFTERWORK, NETWORKING à Paris",
        img:"img/entreprises/imagesS23W6Q6Z.jpg",
        alt:"photo",
        titre:"",
        description:""
      },
      // Prestation 5
      {
        collapse:"collapse5",
        offre:"+ Offres Entreprises : Nos formations Relooking",
        img:"img/entreprises/imagesTNIJ3T5E.jpg",
        alt:"photo",
        titre:"",
        description:""
      }
      ];
    });
/********************************** about controller ***************************************/
app.controller("aboutmeController", function ($scope) {
    $scope.msg = "À propos";
});

app.controller("contactController", function ($scope) {
    $scope.msg = "Contact";
});


/***************************************** controller portefolio *****************************/

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

/******************* controller portefolio **************************************************/

/*********************Directive*************************************************************/

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

    }
  });
/************* end Directive *********************/


})();
