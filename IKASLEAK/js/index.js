var app = angular.module('app', []);

app.controller('PruebaController', ['$scope', '$http', function ($scope, $http) {
    $scope.items = [];
    $http.get('json/animales.json').then(function (response) { 
        $scope.items = response.data;
        console.log($scope.items);
    });
}]);