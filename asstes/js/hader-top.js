var sticky = $('#nav'),
sticky2=$('#hdr'),  

      sticky_width= sticky.width(),
   
      logo2 = $('#Logo_2')
      ;


    $(window).scroll(function(){ 
     
if ($(window).scrollTop() >= 200  && $(window).width() >990  ){
    sticky.css("margin-top" , "37px");
    sticky.addClass('fixed');
    sticky2.addClass("fixed-SimpleHeader");
    sticky.css("border-bottom" , "1px solid black");

    sticky2.css("display","block");
    
    $('.fixed a').css("color","#2D3A61");
  
    logo2.css("display" , "block") ;
}
else if  ($(window).scrollTop() < 200  && $(window).width() > 990  )  {
    sticky.css("border-bottom" , "none");
    sticky.css("margin-top" , "0");
    $('.fixed a').css("color","#ffffff");
    
     sticky.removeClass('fixed');
    sticky2.css("display","none");
    sticky2.removeClass("fixed-SimpleHeader");

  
   
    
    logo2.css("display" , "none") ;


    $('.dropdown-item').css("color","#2D3A61");
  
  
    
}



})


$(document).ready(function(){
   // alert("ll")
   
  

        $( ".navbar-expand-lg .navbar-nav .nav-link" ).hover(   
           
            function() {
                $( this ).css("color","#007bff"); 
              },
               function() {
                if ($(window).scrollTop() >= 200  && $(window).width() >990  ){
                    $( this ).css("color","#2D3A61");
                }
                else if  ($(window).scrollTop() < 200  && $(window).width() > 990  ) 
                {
                   
                    $( this ).css("color","#ffffff"); 
                   
              }
            }
            );
       
  
    



    $(".loding-overiay .sk-chase").fadeOut(1000,function()
        {
         $(this).parent().fadeOut(1000,function(){
            $("body").css("overflow","auto");
             $(this).remove();
         });
        }
    );






   

$(window).on('resize'  , function (){

    if ( $(window).width() < 990   ){
        
        $('.navbar-expand-lg .navbar-nav .nav-link').css("color","#2D3A61");
        
        logo2.css("display" , "block") ;
    
    }
    else if ( $(window).width() >= 990   )
    {
        $('.navbar-expand-lg .navbar-nav .nav-link').css("color","#ffffff");
        logo2.css("display" , "none") ;
       
      
    
    }
}  ); 
  });