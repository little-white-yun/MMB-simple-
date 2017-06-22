$(function(){
     var pageid = 1; //当前页数
     var totalCount;  //总页数
    $.ajax({
         url:"http:/127.0.0.1:9090/api/getmoneyctrl",
         dataType:"jsonp",
            
         data:{
            pageid:pageid
         },
         success:function(data){
            console.log(data);
            data.pageid = pageid;
            var pagesize = data.pagesize;
           data.totalCount =Math.ceil( (data.totalCount) / (data.pagesize));
            
            //渲染页面
            var tpll = template('tpll',data);
            $("#onsale").html("");
            $("#onsale").append(tpll);
            createopt(data.totalCount,pageid);
            
            img(data);

            $(".downPage").on("click",function(){
               pageid++;
               if(pageid > data.totalCount){
                    pageid = data.totalCount;
                    alert("最后一页了");
                }else {
                    pageAjax(pageid);
                }

           }) 
           $(".upPage").on("click",function(){
                pageid--;
                if(pageid < 1){
                    pageid = 1;
                    alert("最前一页了");
                }else {
                        pageAjax(pageid);
                    
                }
           })

           $(".option").on("click",function(){
               console.log(1);
           })
           $("select").on("change",function(){
               var optNum = $("select option:selected").val();
               optNum = optNum.slice(0,1);
               pageid = optNum;
                pageAjax(pageid);
               
                // console.log($("select").children("option").attr("selected","selected").html());
           })

                    
           
         }//success
    })//ajax

function img(data){
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
}

function createopt(totalCount,pageid){
    $(".sel").html("");
    for(var i = 1 ; i<=totalCount;i++){
        var newopt = document.createElement("option");
        newopt.innerHTML = i+"/"+totalCount;
        $(".sel").append(newopt);
        $("option").eq(pageid-1).attr("selected","selected");
           // console.log(totalCount)
        }    
    }

    function pageAjax(pageid){
        $.ajax({
            url:"http:/127.0.0.1:9090/api/getmoneyctrl",
            dataType:"jsonp",
                
            data:{
                pageid:pageid
            },
            success:function(data){
                data.pageid = pageid;
                var pagesize = data.pagesize;
                data.totalCount =Math.ceil( (data.totalCount) / (data.pagesize));
                
                //渲染页面
                var tpll = template('tpll',data);
                $("#onsale").html("");
                $("#onsale").append(tpll);
                createopt(data.totalCount,pageid);
                
                img(data);


                 $(".downPage").on("click",function(){
               pageid++;
               if(pageid > data.totalCount){
                    pageid = data.totalCount;
                    alert("最后一页了");
                }else {
                    pageAjax(pageid);
                }

           }) 
           $(".upPage").on("click",function(){
                pageid--;
                if(pageid < 1){
                    pageid = 1;
                    alert("最前一页了");
                }else {
                        pageAjax(pageid);
                }
           })

           $(".option").on("click",function(){
               console.log(1);
           })
           $("select").on("change",function(){
               var optNum = $("select option:selected").val();
               optNum = optNum.slice(0,1);
               pageid = optNum;
                pageAjax(pageid);
           })
                 } //success 
        })//function
    }




})//function