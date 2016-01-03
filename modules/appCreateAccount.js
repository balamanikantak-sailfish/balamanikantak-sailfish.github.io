/**
 * Created by sailfish2 on 1/2/2016.
 */
var app2 = angular.module('appCreateAccount',[]);

app2.controller('createAccountCtrl', function ($scope,$http,$q,$log,$filter,$location){


    $scope.account={};

    $scope.createAccount=function(){

       // $scope.result=$scope.account;
        $http({
            method  : 'POST',
            url     : 'http://localhost:3000/api/accounts/insert',
            data    : $scope.account, //forms user object
            headers : {'Content-Type': 'application/json'}
        })
            .success(function(data) {
                if (data.errors) {
                    // Showing errors.
                    $scope.errorName = data.errors;
                } else {
                   // $scope.message = data;
                    $location.path('/vw/VwA');
                }
            });


    }
});