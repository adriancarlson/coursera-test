(function (){
'use strict';

angular.module('LunchCheck', [])
    
.controller('LunchCheckController', LunchCheckController); 

    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
        $scope.lunchMenu ="";
        $scope.numberofItems = 0;
        $scope.message = "";
        $scope.color ="red";
        $scope.border ="none";
        
        $scope.countItems = function (){
            var countValue = ($scope.lunchMenu.split(',').length -1);
        $scope.numberofItems = countValue;
            
            if ($scope.numberofItems == 0){
                $scope.message = "Please enter data first";
            } else if ($scope.numberofItems <= 2){
                $scope.message = "Enjoy!";
                $scope.color ="green";
                $scope.border ="solid";
            } else {
                $scope.message = "Too Much!";
                $scope.color ="red";
                $scope.border ="solid";
            }
            
            
        };
        
        
    }
})();

