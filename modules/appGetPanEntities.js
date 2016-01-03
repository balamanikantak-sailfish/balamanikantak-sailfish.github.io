/**
 * Created by sailfish2 on 1/2/2016.
 */
var app = angular.module('appGetPanEntities',['ui.grid.pagination']);

app.controller('getPanEntitiesCtrl', function ($scope,$http,$q,$log,$filter,_,$state,$location){
    $scope.gridOptions={};
    $scope.gridOptions.columnDefs = [
        { name: 'pancardid',displayName:'Pancard Number' },
        { name: 'pancardname',displayName:'Pancard Name'},
        { name: 'pancardtype',displayName:'Pancard Type'},
        { name: 'Upload',
            enableFiltering:false,
            cellTemplate:'<div>' +
            '  <a href="#/i/CA/CnPE?an={{row.entity.pancardid}}">Upload</a>' +
            '</div>' }
    ];
    $scope.gridOptions.enableFiltering = true;
    $scope.gridOptions.paginationPageSizes = [10, 20, 30];
    $scope.gridOptions.paginationPageSize= 10;


    $http.get('https://caprofessions.herokuapp.com/api/accounts').success(function(response){


        var arr = [];
        // var arr1=[];


        _.each(response,function(value,key){
            arr.push(_.pick(value,'accountname','address','phoneno'));
        });

        /* _.each(arr,function(value,key){
         arr1.push(_.extend(value,{cellTemplate:'<div>' + '<a href="http://stackoverflow.com">Click me</a>' + '</div>'}));
         });*/

        //$scope.jsondata = arr1;
        $scope.gridOptions.data = arr;

    });
});