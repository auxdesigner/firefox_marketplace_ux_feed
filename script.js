$(document).ready(function(){
//splash screen	
	$('.star').delay(500).fadeIn(800);
	$('.splash').delay(4000).fadeOut(500, function(){
			
		$('.i1-t0').delay(200).fadeIn(300);
		$('body').css({'overflow-y':'auto'});

	});
$('.i1-t0').click(function(){
	$('.i1-t0').hide();
});	


//expand module
	$('.i1-2').click(function(){
		$('.i1-2').css({'height':'336px', 'background-image':'url(img/expand.png)'});
	});

//suggestion module
	$('.ask').click(function(){
		$('.ask').css({'height':'563px', 'background-image':'url(img/suggest.png)'});
	});
	
//star module	
//	$('.star0').click(function(){
//		$('.star0on').addClass('bounce');
//	});	

	$('.star0').click(function(){
		$('.star0on, .star3-5on').toggleClass('bounce');
		$('.i1-t0').hide();
	});	

	$('.star1').click(function(){
		$('.star1on').toggleClass('bounce');
	});	

	$('.star2').click(function(){
		$('.star2on').toggleClass('bounce');
	});	

	$('.star3').click(function(){
		$('.star3on').toggleClass('bounce');
	});	

	$('.star3-1').click(function(){
		$('.star3-1on').toggleClass('bounce');
	});	

	$('.star3-2').click(function(){
		$('.star3-2on').toggleClass('bounce');
	});	

	$('.star3-3').click(function(){
		$('.star3-3on').toggleClass('bounce');
	});	

	$('.star3-e').click(function(){
		$('.star3-eon').toggleClass('bounce');
	});	

	$('.star3-4').click(function(){
		$('.star3-4on').toggleClass('bounce');
	});	

	$('.star3-5').click(function(){
		$('.star3-5on').toggleClass('bounce');
	});	




//go to search results, sheet interaction
	$('#search').bind('keypress', function(e) {
		if(e.keyCode==13){
				$('#search').blur();
				
				$('.i2').delay(500).animate({left:'0px'}, function(){
					$('.i1').hide();
					setTimeout(function() {
			             $('.i2-t2').fadeIn(300);
			        }, 200)
					 					
					
				});
				$('.i2-1').css({'height':'739px'});
			}
	});

//close tutorial #1
	$('.i2-t2').click(function(){
		$('.i2-t2').hide();
	});
//close tutorial #2
	$('.i2-t3').click(function(){
		$('.i2-t3').hide();
	});
//subscribe to search results and trigger swipe back sheet
	$('.i2-star').click(function(){
		$('.star2-1on').addClass('bounce');
	});	

	$('.i2-star').one('click', function(){
		$('.i2-t2').hide();
		$('.i2-t3').fadeIn(300);
		$('.i1').hide();
		
		//reset expand module
		$('.i1-2').css({'height':'254px', 'background-image':'url(img/old1.png)'});
		//clear input
		$('#search').val('');
		//star music making apps
		$('.star3-2on, .star3-1on').addClass('bounce');
		//back swipe ready
	
		$('.i0').css({'z-index':'1', 'height':'687px', 'overflow-y':'hidden'}).show();
		$('.i2-back').show(400, function(){
			$('.i2').touchSwipeRight(function(){
					
						$('.i2').animate({left:'320px'}, function(){
				  			$('.i2').hide();
				  			
				  			$('.i0').css({'height':'auto', 'overflow-y':'auto'});	  			
				  	});
			});
		});
	});



//click back button to go back
	
$('.i2-back').click(function(){
			$('.i2-t3').hide();
			$('body').css({'overflow-y':'hidden'});

			$('.i2').animate({left:'320px'}, function(){
				  			$('.i2').hide();
				  			

							$('.load').delay(3000).fadeOut(500, function(){
								$('body').css({'overflow-y':'auto'});
								$('.i0').css({'height':'auto', 'overflow-y':'auto'});	
							});
							
			});
		
});


	






});
	
