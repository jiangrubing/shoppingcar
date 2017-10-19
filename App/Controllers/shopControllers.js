app.controller("shopControllers",["$scope","shopServer",function($scope,shopServer){
    $scope.tabs=[];
    shopServer.getProducts("GET","");
}]);