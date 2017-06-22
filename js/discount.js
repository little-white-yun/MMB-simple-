$(function(){
    var search = window.location.search;
    search = search.slice(11);
 console.log(search);
    $.ajax({
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        dataType:"json",
        data:{
            productid:search
        },
        success:function(data){
            var tpl = template("tpl",data);
            $(".discount").append(tpl);
            var tab = data.result[0].productCity;
            $(".commtab").append(tab);

            //评论专区
            var com = data.result[0].productComment;
            $(".criticism").append(com);

            $(".ui-border-b").addClass("clearfix");

            //图片处理

            // var str = $(".bgimg").children("img").attr("src");
            // str = str.slice(67);
            // $(".bgimg").children("img").attr("src",str)
            // $(".introduce").children("img").attr("src",str)
        }
    })

    //     $.ajax({
    //     url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
    //     dataType:"json",
    //     data:{
    //         productid:1
    //     },
    //     success:function(data){
           

    //         //评论专区
    //         var com = data.result[0].productComment;
    //         $(".criticism").append(com);

    //         $(".ui-border-b").addClass("clearfix");

    //         //图片处理

         
    //     }
    // })

})