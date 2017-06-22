$(function(){

//获取页面导航
     $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
        dataType:"json",
        success:function(data){
            var nav = template("nav",data);
            $(".listnav").append(nav)
            getlist(0);
            var ele = $(".listnav");
            ele.width((ele.find("li").length + 1) * (ele.find("li").width()+65));
            var myScroll = new IScroll('#wrapper', {scrollX: true, scrollY: false});
            myScroll.scrollToElement('.active',true,true);

            $(".listnav").children().on("click",function(){
                var listid = $(this).attr("data-id");
              
                 $(".listnav").children("li").removeClass("active");
                 $(this).addClass("active");
                 getlist(listid);
            })

          
        }
     })



   function getlist(listid){
       $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
        dataType:"json",
        data:{
            titleid:listid
        },
        success:function(data){
            var tpl = template("tpl",data);
            $(".conlist").html("").append(tpl);
        }
    })
   }
   
           
})
 