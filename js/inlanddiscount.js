$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getinlanddiscount",
        dataType:"json",
        success:function(data){
            var tpl = template("tpl",data);
            $(".count").append(tpl);
        }
    })
})