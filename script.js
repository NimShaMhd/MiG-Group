
    $(document).ready(function(){
      
      $(".cards").mouseover(function(){
        $(this).css({
                    
                    "background-color":"rgb(193, 241, 193)",
                    "border-style":"none",
                    })
                    
      })
      $(".cards").mouseout(function(){
        $(this).css({
                     
                      "background-color":"white",
                      "border-style":"solid"})
      })
      
      $(".form-control").mouseenter(function(){
        $(this).css("border-color","grey")
      })
      $(".form-control").mouseleave(function(){
        $(this).css("border-color","lightgrey")
      })
      $("#move-up-id").mouseenter(function(){
        $(this).css({"color":"grey",
                    "text-shadow":"0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"})
      })
      $("#move-up-id").mouseleave(function(){
        $(this).css("color","black")
      })
      $(window).scroll(function(){
        var scrollTop=$(window).scrollTop()
        $('#move-up-id').css({'opacity':(scrollTop-100)/100});
      });
      $(window).scroll(function(){
        
        
      });
      
  
});
