$(function(){

    //请求图标
    $.ajax({
        url:"http://127.0.0.1:9090/api/getindexmenu",
        dataType:"jsonp",
        success:function(data){
            console.log(data);
        // 获取图标  
            var tpl = template('tpl',data);
            
            $(".buymenu").append(tpl);

            for(var i = 0 ; i<data.result.length;i++){
                if(i >= 8){
                    $(".buyicon").eq(i).addClass("iconnone");
                }
            }  

            //点击出现最后四个图标
            $(".buyicon:eq(7)").on("click",function(){
                for(var i = 8 ; i<data.result.length;i++){
                        $(".buyicon").eq(i).toggleClass("iconnone");
                }
            });
         },
           
      
        error:function(){
            // console.log(1);
        }
    })


    $.ajax({
         url:"http:/127.0.0.1:9090/api/getmoneyctrl",
         dataType:"jsonp",
         success:function(data){
            
            var tpll = template('tpll',data);
            $("#onsale").append(tpll);
            var str = [];
            var ast = [];
            for(var i = 0 ; i<data.result.length; i++){
               str = $("#onsale .item img").eq(i).attr("src");
           
               ast = $("#onsale .item .num").eq(i).html();
               str = str.slice(67);
               ast = ast.slice(1,2);
               $("#onsale .item img").eq(i).attr("src",str);
               $("#onsale .item .num").eq(i).html(ast);
               
            }
             
            
            // for(i = 0 ; i<str.length; i++){
            //     console.log(str[i]);
            // }
         }
    })
})


