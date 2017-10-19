app.factory("shopServer",["baseServer",function(baseServer){
    return{
        getProducts: function(type, url){
            return baseServer.ajax(type,url);
        }
    }
}]);