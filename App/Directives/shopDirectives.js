/**
 * Created by lenovo on 2017/10/18.
 */
app.directive("shopDirectives",function(){
    return{
        restrict:"EA",
        scope:{
            item:"=item",
            index:"@index"
        },
        templateUrl:"./App/Views/_shopping.html"
    }

})