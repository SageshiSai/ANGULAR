var MyApp = angular.module('MyApp', []);
MyApp.controller('miControlador',['$scope','$http', function($scope,$http){
    $http.get('JSON/datosJSON.json').then(function (response) { 
        $scope.lista = response.data;
        console.log($scope.lista);
    });

    $scope.estiloTabla={
        color:"#FFFFFF",
        border:"1px solid #FFFFFF",
        paddingRight:"40px",
    }  

    $scope.SacarDatos=function(){
        $scope.ver='si';
    };
}]);