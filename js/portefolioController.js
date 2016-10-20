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
