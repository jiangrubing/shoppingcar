var  app = angular.module("app",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
   $stateProvider.state('shopping',{
       url:"/shopping",
       templateUrl:"./App/Views/shopping.html",
       controller:"shopControllers"
   });
   $urlRouterProvider.otherwise("/shopping");
});