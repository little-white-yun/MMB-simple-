$(function(){
    
  
function getajax(url,parameter,fun){
     $.ajax({
      url:url,
      data:{
         titleid:parameter
      },
      dataType:"jsonp",
      success:fun
  }) 
} //function
 
 getajax("http://127.0.0.1:9090/api/getbrandtitle",null,function(data){
     var tpl = template('tpl',data);
     $(".shoplist").append(tpl);
     $(".article").each(function(i,v){
        getajax("http://127.0.0.1:9090/api/getbrandtitle",i,function(data){
           var cate = template('cate',data);
           $(".article").eq(i).append(cate);
           $(".article").eq(i).append(cate).addClass("hidden");
           console.log(data);
       
              
        })
     })


    //   $(".commodity").each(function(i,v){
          $(".shoptitle").on("click",function(e){
              console.log(this);
              $(this).next().slideToggle();
          })
    //   })

           
        })//get

   
  });//gettitle

 



  






