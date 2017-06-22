$(function(){
 var shopid = 0;
 var areaid = 0;
//导航来源请求 京东/天猫/淘宝
    $.ajax({
       
        url:"http://127.0.0.1:9090/api/getgsshop",
        dataType:"json",
        success:function(data){
            var tpl = template("tpl",data);
            $(".orea").append(tpl);
            $(".district").append(area);
            
           
        }
    })//ajax


// 地区请求   华东/华南/华北
    $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshoparea",
        dataType:"json",
        success:function(data){
            var area = template("area",data);
            $(".district").append(area);
            
              $("li").on("click",function(){
                  //变换文字
                var tet = $(this).children("span").html();
                if(tet.length>4){
                    tet = tet.slice(0,2);
                }
                var num = $(this).parent().attr("index");
                
                $(".origin").eq(num).children("span").html(tet);
                //变换对号
                $(this).siblings().children("i").addClass("hidden");
                $(this).children("i").removeClass("hidden");
                $(this).parent().parent().addClass("hidden");

                if(num == 0 ){
                    shopid = $(this).attr("id");
                }else {
                    areaid = $(this).attr("id");
                }
                $.ajax({
                    url:"http://127.0.0.1:9090/api/getgsproduct",
                    dataType:"json",
                    data:{
                        shopid:shopid,
                        areaid:areaid
                    },
                    success:function(data){
                        var shop = template("shop",data);
                        $(".monovalent").html("").append(shop);
                    }
                })
                
                
               
             })//click
              getshop(0,0);
        }
    })//ajax



    // 来源
    $("#filiation").on("click",function(){
        $(".fil").toggleClass("hidden").siblings(".ormessage").addClass("hidden");
        
    }) 

  


    //地点
     $("#localization").on("click",function(){
        $(".zore").toggleClass("hidden").siblings(".ormessage").addClass("hidden");   
       
    })  

    //全部价格
     $("#tariff").on("click",function(){
       $(".term").toggleClass("hidden").siblings(".ormessage").addClass("hidden");
       
    }) 


function getshop(shopid,areaid){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getgsproduct",
        dataType:"json",
        data:{
            shopid:shopid,
            areaid:areaid
        },
        success:function(data){
            var shop = template("shop",data);
            $(".monovalent").append(shop);
        }
    })
}




})//function
