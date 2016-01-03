/**
 * Created by sailfish2 on 1/2/2016.
 */
var app2 = angular.module('appCreatePanEntity',[]);

app2.controller('createPanEntitiyCtrl', function ($scope,$http,$q,$log,$filter,$location){
    $scope.pancardentities={};

    $scope.createPanCardEntity=function(){

        $scope.result=$scope.pancardentities;
        $http({
            method  : 'POST',
            url     : 'https://caprofessions.herokuapp.com/api/accounts/pan/insert/'+$location.search().an.toString(),
            data    : $scope.pancardentities, //forms user object
            headers : {'Content-Type': 'application/json'}
        })
            .success(function(data) {
                if (data.errors) {
                    // Showing errors.
                    $scope.errorName = data.errors;
                } else {
                     $scope.message = data;
                    //$location.path('/vw/CA/VwPE');
                }
            });


    }
});