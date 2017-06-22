$(function(){

    $.ajax({

        url:"http://127.0.0.1:9090/api/getsitenav",
        dataType:"json",
        success:function(data){
            var tpl = template("tpl",data);
            $(".linkpic").append(tpl);
        }
       
    })
})