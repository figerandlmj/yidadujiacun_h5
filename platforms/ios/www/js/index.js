 /*景点门票滑动门*/
$(function(){
	var oli = $('.secery-ticket .part2 ul li');
	oli.click(function(){
		var index = $(this).index();
		$('.common-nav').eq(index).show().siblings('.common-nav').hide();
		$('.secery-ticket .hover').animate({marginLeft:oli.outerWidth(true)*index});
	});
});

/*基本资料  证件类型选择*/
$(function(){
	$(".select-type input").on("click",function(){
		$(".credential_type").slideDown();
	});
	$(".credential_type p").click(function(){
		var text = $(this).text();
		var type_id = $(this).data("id");
		$(this).parent().prev().find("input").val(text);
		$(this).parent().prev().find("input").attr("data-id",type_id);
		$(this).parent().slideUp();
	});
});


$(function(){
	/*优惠点击展开*/
	$('.holiday-road .part2 .son-part2 a').click(function(){
		$(this).toggleClass("reduce-more");
		$('.youhui-intro').slideToggle();
	});
	$('.goods .style1 a').click(function(){
		$(this).toggleClass("reduce-more");
		$('.youhui-intro').slideToggle();
	});
	$('#favorable').click(function(){
		$(this).find("a").toggleClass("reduce-more");
		$('.youhui-intro').slideToggle();
	});


});

/*弹窗*/
var telPop = $('.private .part3 a.tel');
var success = $('.private .part3 a.submit');
var successBtn = $('.private .success-pop .success');
var mask = $('.wrap-mask');
var documentWidth = $(document).width();
var documentHeight = $(document).height();

//电话咨询弹窗
telPop.click(function(){
	$('.private .pop-up').show();
	mask.show();
	Login($('.private .pop-up'));
});
$('.private .close').click(function(){
	$('.private .pop-up').hide();
	mask.hide();
});

//提交定制弹窗
// success.click(function(){
// 	$('.private .success-pop').show();
// 	mask.show();
// 	Login($('.private .success-pop'));
// });
successBtn.click(function(){
	$('.private .success-pop').hide();
	mask.hide();
})

/*景点门票详细信息弹窗*/
mask.height($(document).height());
$("body").on("click","#detail-info",function(){
	var detailInfo =$(this).next(".detail-info");
	var infoClose = detailInfo.find("em.info-close");
	detailInfo.show();
	Login(detailInfo);
	mask.show();
	detailInfo.on("click",infoClose,function(){
		detailInfo.hide();
		mask.hide();
	});
});

//弹窗停留位置函数
function Login(obj){
	var positionWidth = $(obj).outerWidth(true);
	var positionHeight = $(obj).outerHeight(true);
	var borwerWidth = $('#main').width();
	var borwerHeight = $(window).height();
	var borwerScrollTop = $(window).scrollTop();
	var loginLeft = (borwerWidth - positionWidth)/2;
	var loginTop = (borwerHeight - positionHeight)/2 + borwerScrollTop;
	$(obj).animate({
		'left':loginLeft+'px',
		'top':loginTop+'px'
	},500).dequeue();
}

//鼠标滚动事件
$(window).scroll(function(){
	Login($('.private .success-pop'));
	Login($('.private .pop-up'));
	Login($('.detail-info'));
});
//获取浏览器窗口事件
$(window).resize(function(){
	if($('obj').is(':visible')){
		Login();
		Login($('.detail-info'));
	}
	mask.height($(document).height());
});

/*点击分享*/
$(".share").click(function(){
	$(".share-box").animate({"bottom":0},500);
});
$(".share-reset").click(function(){
	$(".share-box").animate({"bottom": "-203px"},500);
});

/*度假村订单-最晚到店时间*/
$('#latest-time').click(function(){
	$('.latest-time').slideToggle();
	$('.order-info-bottom').hide();
	mask.show();
});

/*路线列表页底部导航筛选*/
$(function(){
	var roadPop = $(".road-pop .road-pop-style");
	var height = roadPop.find("p").size()*roadPop.find("p").outerHeight(true)+60;
	roadPop.parent().css("bottom", -height);
	$(".bottom-nav ul li").on("click",function(){
		var index = $(this).index();
		$(".wrap-mask").height($("body").height());
		roadPop.eq(index).show().siblings().hide();
		$(".wrap-mask").show();
		$(".road-pop").animate({"bottom": "48px"});
	});

	$('body').on("click",".road-pop-style .this_p",function(){
		$(".wrap-mask").hide();
		$(".road-pop").animate({"bottom":-height});
		$('.road-pop-style .this_p').find("img").remove();
		$(this).append('<img src="images/17.png">');
	})
});
/*自适应高度*/
$(function(){
	$("#main").css({
        "min-height":$(window).height(),
        "background": "#e8ebef",
        "padding-bottom": $('#main .wrap-nav').outerHeight(true)
    })
    $(window).resize(function(){
        $("#main").css({
            "min-height":$(window).height(),
            "background": "#e8ebef"
        })
    });
    $(".holiday-list .list").css("padding-bottom",$("#main .bottom-nav").outerHeight(true))
});

function padBottom(obj,sonObj){
	$(obj).css("padding-bottom",$(sonObj).outerHeight(true));
}
