$(function(){
    var seach = window.location.search;
    console.log(seach);
    seach = seach.slice(14);
 
    $.ajax({
        url:"http://127.0.0.1:9090/api/getproduct",
        dataType:"jsonp",
        data:{
           productid:seach
        },
        success:function(data){
            
            //截取标题文字
            var str = data.result[0].productName;
            str = str.slice(0,str.indexOf(" "));
            var newa = document.createElement("a");
            newa.href="productlist.html";
            newa.className="ta";
            $(".hreftit").append(newa);
            $(".ta").html(str);
            
            
            
            //渲染图片等信息
            var tpl = template("tpl",data);
            $(".tan").append(tpl);
            var tab = data.result[0].bjShop;
            // console.log(tpl);
            $(".jdicon").html(tab);
            // console.log(data)
           var cate = data.result[0].categoryId;
           console.log(cate);
            //分类标题请求
            $.ajax({
                url:"http://127.0.0.1:9090/api/getcategorybyid",
                dataType:"jsonp",
                data:{
                    categoryid:cate,
                },
                success:function(data){
                    var sty = data.result[0].category;
                    $(".sty").html(sty+" >");
                }
            })

        }



    })//ajax


    $.ajax({
        url:"http://127.0.0.1:9090/api/getproductcom",
        dataType:"jsonp",
        data:{
            productid:seach
        },
        success:function(data){
            var com = template("com",data);
            $(".estimate").append(com);
        }

    })




})//function