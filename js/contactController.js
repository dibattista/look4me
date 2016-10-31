
(function(){

app.controller('userFormCtrl', function($scope){
  	$scope.useForm = {};
  	$scope.useForm.contact = [

  	{ identite :"LOOK4ME",
  	name: "Natacha Tilmant",
  	adresse: "7 Rue de la Foulerie",
  	ville: "28000 Chartres",
  	telephone: "06 38 41 38 38",
  	email: "contact@look4me"
  };
  
  ];

  app.controller('coordonneesCtrl', function($scope){
  	$scope.liste = {};
  	$scope.liste.coordonnees = [

  	{ identite :"LOOK4ME",
  	name: "Natacha Tilmant",
  	adresse: "7 Rue de la Foulerie",
  	ville: "28000 Chartres",
  	telephone: "06 38 41 38 38",
  	email: "contact@look4me"
  };

  ];

});

}());
