$(function(){
    var seach = window.location.search;
    seach = seach.slice(12);

// 请求列表标题
    $.ajax ({
        url:"http://127.0.0.1:9090/api/getcategorybyid",
        dataType:"jsonp",
        data:{
            categoryid:seach
        },
         success:function(data){
            var tpl = template("tpl",data);
            $(".detail").append(tpl);
        }
    })
    
    
//请求列表内容
  var pageid = 1;
  var totalCount;
  var pagebut = 1;

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

 
     $.ajax ({
         url:"http://127.0.0.1:9090/api/getproductlist",
         dataType:"jsonp",
         data:{
            categoryid:seach,
            pageid:pageid
         },
         success:function(data){
             console.log(data);
            data.pageid = pageid; 
            var pagesize = data.pagesize;
            data.totalCount =Math.ceil( (data.totalCount) / (data.pagesize));
            var shop = template("shop",data);
            $(".sale").append(shop);
            createopt(data.totalCount,pageid);
            
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
     })



 function pageAjax(pageid){
                
                $.ajax({
                    url:"http://127.0.0.1:9090/api/getproductlist",
                    dataType:"jsonp",
                    data:{
                        categoryid:seach,
                        pageid:pageid
                    }, 
                    success:function(data){ 
                        data.pageid = pageid; 
                        var pagesize = data.pagesize;
                        data.totalCount =Math.ceil( (data.totalCount) / (data.pagesize));
                        var shop = template("shop",data);
                        $(".sale").html("");
                        $(".bt").addClass("hidden");
                         $(".sale").append(shop);
                        createopt(data.totalCount,pageid);
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
                           $("select").on("change",function(){
                            var optNum = $("select option:selected").val();
                            optNum = optNum.slice(0,1);
                            pageid = optNum;
                                pageAjax(pageid);
                            
                                // console.log($("select").children("option").attr("selected","selected").html());
                        })
                    } 
                })
             } //function    

  

})//function