var app = angular.module("app",[]);
app.controller('PruebaController', function($scope) {    
  $scope.ListaSeleccionados = [];
  $scope.nomModulo = "";

  $scope.agregarElemento = function() {
    $scope.ver='si';
    $scope.ListaSeleccionados.push({nombre: $scope.nomModulo, curso: 1});
  }
  $scope.eliminarElemento = function() {
    $scope.ver='no';
    $scope.ListaSeleccionados = [];
  }
})



