$(function(){
    var brandtitleid = window.location.search;
    brandtitleid = brandtitleid.slice(14);
     
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrand",
        dataType:"json",
        data:{
            brandtitleid:brandtitleid
        },
        success:function(data){
            var tpl = template("tpl",data);
            $(".shoplist").append(tpl);
            $(".commodity").eq(0).children("li").children(".hot").css("background-color","#f10e0e");
            $(".commodity").eq(1).children("li").children(".hot").css("background-color","#ff9314");
            $(".commodity").eq(2).children("li").children(".hot").css("background-color","#87df5b");
        }
    })
    var str ; 
     $.ajax({
        url:"http://127.0.0.1:9090/api/getbrandproductlist",
        dataType:"json",
        data:{
            brandtitleid:brandtitleid
        },
        success:function(data){
            var tlist = template("tlist",data);
            $(".sale").append(tlist);
            var num = $(".item").children("a").attr("index");
            console.log(data);
            var img = data.result[0].productImg;
            var namepro = data.result[0].productName;
            $.ajax({
                url:"http://127.0.0.1:9090/api/getproductcom",
                dataType:"json",
                data:{
                    productid:num
                },
                success:function(data){
                var con = template("con",data);
                    $(".criticism").append(con);
                    $(".suibian").append(img);
                     $(".suibian").children("span").html(namepro);
                    
                    
                }
            })
        }
    })
    


     

})