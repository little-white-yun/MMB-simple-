
$(function(){
    var seach = window.location.search;
    seach = seach.slice(10);
    // console.log(seach);
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcouponproduct",
        dataType:"json",
        data:{
            couponid:seach
        },
        success:function(data){
            var tpl = template("tpl",data);
            var index;
            var str;
            $(".favourable").append(tpl);

                $(".preferential").on("click",function(){
                    //图片标签
                    str = $(this).children(".liher").children("img").attr("src");
                    $(".bigImg").removeClass("hidden");
                    $(".mesimg").attr("src",str);
                     index = $(this).index();
                    //点击隐藏
                    $(".bgi").on("click",function(){
                        $(".bigImg").addClass("hidden");
                    })

                    //下一张
                    

                    
                   

                    
                    
                    
                })
                $(".icon-xiayizhang").on("click",function(){
                    index++;
                    if(index >= $(".preferential").length ){
                        index = $(".preferential").length;
                        alert("最后一张了.");
                    }
                    str = $(".preferential").eq(index).children(".liher").children("img").attr("src");
                    $(".mesimg").attr("src",str);
                    
                })
                  $(".icon-shangyizhang").on("click",function(){
                    index--;
                    if(index < 0 ){
                        index = 0;
                        alert("最前面一张了.");
                    }
                    str = $(".preferential").eq(index).children(".liher").children("img").attr("src");
                    $(".mesimg").attr("src",str);
                    console.log(index);
                    
                })
            
        }
    })
})
