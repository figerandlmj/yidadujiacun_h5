function ZMSlide() {
	var mySwiper = new Swiper('.swiper-container',{
	    pagination: '.pagination',
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true
	  })
	  $('.arrow-left').on('click', function(e){

	    e.preventDefault()
	    mySwiper.swipePrev()
	  })
	  $('.arrow-right').on('click', function(e){
	    right(e);
	  })
	 timer = setInterval(sec,5000);
	  function sec(){
			$('.arrow-right').click();
	  }
	$(".device").hover(function(){
		clearInterval(timer);
	},function(){
		 timer = setInterval(sec,5000);
	});
	resize()
	function right(e){
			e.preventDefault()
			mySwiper.swipeNext()
	}
	$(window).resize(function(){
		resize()
	})
	function resize(){
		$(".device").height($(".swiper-slide img").height());
	}
}
// function resize(big_height){
	// $(".swiper-slide img").each(function(){
	// 	var this_height=$(this).height();
	// 	if(this_height>big_height){
	// 		big_height=this_height;
	// 	}
	// })
// 	$(".device").height(big_height);
// 	$(window).resize(function(){
// 		$(".device").height(big_height);
// 	})
// }

