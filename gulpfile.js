var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");

gulp.task("server",function(){
   gulp.src(".")
       .pipe(webserver({
           livereload:true,
           directroyLising: true,
           middleware:function(req,res,next){
                var requestUrl = url.parse(req.url).pathname;
               console.log(requestUrl);
               if(requestUrl == "/api"){
                   var data = [{
                       id:1,
                       name:"´ºÇïÊ±ÉÐ³±Á÷Îû¹þÄÐÑ¼ÉàÃ±",
                       images:"http://localhost:8080/Content/images/icon/banner_1.jpg",
                       num:"1",
                       size:"L",
                       price:49,
                       color: "block"
                   },{
                       id:1,
                       name:"´ºÇïÊ±ÉÐ³±Á÷Îû¹þÄÐÑ¼ÉàÃ±",
                       images:"http://localhost:8080/Content/images/icon/banner_2.jpg",
                       num:"1",
                       size:"L",
                       price:49,
                       color: "block"
                   },{
                       id:1,
                       name:"´ºÇïÊ±ÉÐ³±Á÷Îû¹þÄÐÑ¼ÉàÃ±",
                       images:"http://localhost:8080/Content/images/icon/banner_3.jpg",
                       num:"1",
                       size:"L",
                       price:49,
                       color: "block"
                   }
                   ];
                   res.writeHead(200,{
                       "Content-type":"application/json;charset=UTF-8",
                       "aCCESS-cONTROL-Allow-Origin":"*"
                   });
                   res.write(JSON.stringify(data));
                   res.end();
               }
               next()
           },
           open:"/index.html",
           port:8080
       }))
});