app.controller('particuliersController', function($scope){
		$scope.servParticuliers = [
			{
				img:"img/particuliers/femmes/atelier_colorimetrie.jpg",
				alt:"photoAtelierColorimetrie",
				titre:"Atelier colorimétrie",
				description:"Les couleurs ont un impact sur votre usage. Elles peuvent vous effacer ou vous mettre en valeur.	Ce test est un incontournable du relooking car Atelier colorimétrieil va nous permettre de définir votre colorimétrie et le résultat nous servira dans le choix de vos tenues, votre maquillage, coloration coiffure et vos accessoires, connaître la symbolique des couleurs et savoir les utiliser. Un nuancier correspondant à votre résultat vous sera remis en fin de séances utile. Il vous sera utile lors de vos achats vestimentaires!",
				tarif:"1H - 70€",
				genre:"F"
			},

			{
				img:"img/particuliers/femmes/atelier_makeup.jpg",
				alt:"photoMakeUp",
				titre:"Atelier make-up",
				description:"Se maquiller peut être un plaisir pour certaines personnes et une perte de temps pour d'autres. Pourtant, avec quelques astuces et conseils, nous pouvons toutes réaliser un maquillage idéal en toutes circonstances. Comprend :",
				tarif:"1H30 - 90€",
				genre:"F"
			},

			{
				img:"img/particuliers/hommes/colorimetrie.jpg",
				alt:"photoMakeUp",
				titre:"Prestation spécifique",
				description:"Se maquiller pour un homme",
				tarif:"1H30 - 90€",
				genre:"H"
			}
		];
	});