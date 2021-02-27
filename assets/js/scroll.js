


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 426) {
	   
        $(".nav").css("background" , "#171717");  
          $(".nav").css("position" , "fixed"); 	
	  }


	  else {
        $(".nav").css("position" , "relative");
        $(".nav").css("background" , "none");  
	  }
  })
})