(function(){
  var app = angular.module('contact', []); 


app.controller('contactCtrl', function() {
		this.contact = data;
		this.review = {};
		this.addcontact = function(contact){	
			contact.data.push(this.contact);
			this.review = {};
		}
	});

app.controller('coordonneesCtrl', function() {
		this.prenom = natacha;
		this.nom = Tilmant;
		this.telephone = 06 38 41 38 38;
		this.email = contact@look4me
	
		}
	});


}


var data = [{
	prenom : "",
	nom : "",
	email : "",
	message : ""
}];


var coordonnees = [{
	prenom : "Natacha",
	nom : "Tilmant",
	telephone : "06 38 41 38 38",
	email : "contact@look4me",
}];

}());
