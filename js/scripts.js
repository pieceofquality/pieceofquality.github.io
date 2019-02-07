$(document).ready(function() {
	    // Фиксируем меню
	    $(window).scroll(function(){
	    	var scroll = $(window).scrollTop();
	    	if(scroll >= 150){
	    		$('.navigation').addClass('navigation_fixed');
	    	}
	    	else if(scroll <= 150){
	    		$('.navigation').removeClass('navigation_fixed');
	    	}
	    });
	  })