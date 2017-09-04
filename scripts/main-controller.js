app.controller('MainController', MainController)
   .controller('PopulationsCtrl', PopulationsCtrl);

function MainController($scope, translationService) {
    $scope.selectedLanguage = 'en';

    $scope.translate = function() {
        $scope.$root.$broadcast("myEvent", {
            language: $scope.selectedLanguage
        });
    };
}

function PopulationsCtrl($scope, translationService) {
    $scope.translate = function(language){
        translationService.getTranslation($scope, language);
    }
    $scope.$on("myEvent", function(event, args) {
        $scope.translate(args.language);
    });

    $scope.translate('en');
}