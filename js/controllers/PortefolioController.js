(function() {

angular.module("lookapp").controller("PortefolioController", function($scope) {

    // Data object
    $scope.portefolio = {};
    $scope.portefolio.images = [
        {imgAV: "01AV.jpg", imgAP: "01AP.jpg", alt: "Photo relooking style"},
        {imgAV: "02AV.jpg", imgAP: "02AP.jpg", alt: "Photo total relooking"},
        {imgAV: "03AV.jpg", imgAP: "03AP.jpg", alt: "Photo relooking maquillage"},
        {imgAV: "04AV.jpg", imgAP: "04AP.jpg", alt: "Photo relooking.."},
        {imgAV: "05AV.jpg", imgAP: "05AP.jpg", alt: "Photo relooking.."},
        {imgAV: "06AV.jpg", imgAP: "06AP.jpg", alt: "Photo relooking.."},
        {imgAV: "07AV.jpg", imgAP: "07AP.jpg", alt: "Photo relooking.."},
        {imgAV: "08AV.jpg", imgAP: "08AP.jpg", alt: "Photo relooking.."},
        {imgAV: "09AV.jpg", imgAP: "09AP.jpg", alt: "Photo relooking.."},
        {imgAV: "10AV.jpg", imgAP: "10AP.jpg", alt: "Photo relooking.."}
    ];
    $scope.portefolio.testimonials = [
        {
        title:"Marjorie (35 ans) - Relooking style",
        description: "<em><strong>Donec id elit</strong> non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</em>"
        }, {
        title:"Enzo (44 ans) - Relooking global",
        description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
        }, {
        title:"Alice (21 ans) - Relooking maquillage",
        description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
        }, {
        title:"Groupe Guerlain - Coaching d'entreprise",
        description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
        }
    ];
});

}());
