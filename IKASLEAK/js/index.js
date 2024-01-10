var app = angular.module('app', []);

app.controller('PruebaController', function ($scope) {
    $scope.items = [];
    $http.get('json/animales.json').then(function (response) { 
        $scope.lista = response.data;
        console.log($scope.lista);
    });
})