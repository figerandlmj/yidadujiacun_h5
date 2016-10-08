/********本地URL**********/
// var kBaseUserUrl = 'http://192.168.1.16/kouxiangtang/web/app_dev.php/webservice/user/';
// var kBaseFrontendUrl = 'http://192.168.1.16/kouxiangtang/web/app_dev.php/webservice/frontend/';
// var kBaseImagePath = 'http://192.168.1.16/kouxiangtang/web/upload/';
// var kBaseImagePath02 = 'http://192.168.1.16';
/***************************/

/*******线上URL*********/
var kBaseUserUrl = 'http://www.yddjcctv.com/webservice/user/';
var kBaseFrontendUrl = 'http://www.yddjcctv.com/webservice/frontend/';
var kBaseImagePath = 'http://www.yddjcctv.com/upload/';
var kBaseImagePath02 = 'http://www.yddjcctv.com';		
/***********************/

var kBaseGetDataUrl = kBaseUserUrl + 'personal/info?token=';    /*基本资料URL*/

var kBaseCollectionListUrl = kBaseUserUrl + 'collect/index?token=';	/*我的收藏列表页*/

var kBaseCollectionUrl = kBaseUserUrl + 'collect/action?token=';	/*收藏*/

var kBaseRemoveCollectionUrl = kBaseUserUrl + 'collect/delete?token=';	/*取消收藏*/

var kBaseMyOrderListUrl = kBaseUserUrl + 'order/index?token=';		/*我的订单列表*/

var kBaseOrderDetailUrl = kBaseUserUrl + 'order/info?token=';		/*我的订单详情*/

var kBaseOrderEvaluateUrl = kBaseUserUrl + 'order/evaluate';		/*我的订单评价*/

var kBaseMyIntegralUrl = kBaseUserUrl + 'personal/integral?token=';  /*我的积分*/

var KBaseTravelList = kBaseUserUrl + 'strategy/index?token=';		/*我的游记列表*/

var kBaseReleaseTravelUrl = kBaseUserUrl + 'strategy/info?token=';	/*发表游记主题*/

var kBaseSubmitTravelUrl = kBaseUserUrl + 'strategy/date?token=';	/*发布游记日程*/

var kBaseIndexUrl = kBaseFrontendUrl + 'index';					/*义达首页*/

var kBaseSightSpotUrl = kBaseFrontendUrl + 'sightspot/index';	/*度假景点主页*/

var kBaseSeceryListUrl = kBaseFrontendUrl + 'sightspot/list';	/*度假景点列表页*/

var kBaseSeceryDetailUrl = kBaseFrontendUrl + 'sightspot/info?token=';	/*度假景点详情页*/

var kBaseTicketListUrl = kBaseFrontendUrl + 'ticket/list';		/*景点门票列表页*/

var kBaseTicketDetailUrl = kBaseFrontendUrl + 'ticket/info?token=';	/*景点门票详情页*/

var kBaseTicketOrderUrl=kBaseFrontendUrl+'ticket/order';        /*景点门票下单*/ 

var kBaseProductOrderUrl=kBaseFrontendUrl+'product/order';        /*产品下单*/ 

var kBaseSightspotOrderUrl=kBaseFrontendUrl+'route/order';        /*度假路线下单*/ 

var kBaSescheduleUrl=kBaseFrontendUrl+'route/schedule';        /*度假路线班期列表*/ 

var kBaseSeceryOrderUrl=kBaseFrontendUrl+'sightspot/order';        /*度假景点下单*/ 

var kBasePaymentUrl=kBaseFrontendUrl+'payment/index';        /*支付页*/ 

var kBaseCustomizedUrl=kBaseFrontendUrl+'index/customized';        /*私人定制*/

var kBaseStrategUrl = kBaseFrontendUrl + 'strategy/index';		/*攻略首页*/

var kBaseCityStrategUrl = kBaseFrontendUrl + 'strategy/city';	/*城市攻略*/

var kBaseStrategDetailUrl = kBaseFrontendUrl + 'strategy/info';	/*攻略详情*/

var kBaseDestinationUrl = kBaseFrontendUrl + 'strategy/destination';	/*热门目的地*/

var kBaseRoadUrl = kBaseFrontendUrl + 'route/index?city_name=';			/*度假路线首页**/

var kBaseRoadDetailUrl = kBaseFrontendUrl + 'route/info?token=';		/*度假路线详情*/

var kBaseRoadOrderUrl = kBaseFrontendUrl + 'route/info';		/*度假路线详情*/

var kBaseEvaluateListUrl = kBaseFrontendUrl + 'route/evaluate'		/*度假路线评价列表*/

var kBaseProductEvaluateListUrl = kBaseFrontendUrl + 'product/evaluate?product_id='		/*商品评价列表*/

var kBaseMallUrl = kBaseFrontendUrl + 'product/index?token=';			/*商城首页URL*/

var kMobileDataUrl = kBaseFrontendUrl+'product/phone';			/*手机专享*/

var kBaseGoodsUrl = kBaseFrontendUrl + 'product/info?product_id='  			/*商品详情URL*/

var kBaseProductListUrl = kBaseFrontendUrl + "product/list?order=";        /*热销排行*/

var kBaseProductPhoneUrl = kBaseFrontendUrl + "product/phone";		/*手机专享*/

var kBaseSnapUpUrl = kBaseFrontendUrl + "product/snapUp";		/*限时抢购*/

var kBaseRegisterUrl = kBaseUserUrl + 'register';				/*注册URL*/

var kBaseFoundUrl = kBaseFrontendUrl + 'index/find';			/*发现首页URL*/

var kBaseServiceUrl = kBaseFrontendUrl + 'article/index';		/*客服主页*/

var kBaseColumnUrl = kBaseFrontendUrl + 'article/column';		/*客服栏目*/

var kBaseArticleListUrl = kBaseFrontendUrl + 'article/list';	/*客服文章列表*/

var kBaseArticleDetailUrl = kBaseFrontendUrl + 'article/info';	/*客服文章详情*/

var kBaseTravleTagsUrl = kBaseFrontendUrl + 'default/getStrategyTags';	/*获取游记标签*/



function setLocalStorage(key, value) {
	var storage = window.localStorage;
	storage[key] = value;
}

function getLocalStorage(key) {
	var storage = window.localStorage;
	return ("undefined" == typeof storage[key]) ? "" : storage[key];
}

function ZMAlert(message, successCallback) {
	var html="";
	var html_mask="";

	html_mask+='<div id="mask" style="background: #000;opacity: 0.37;position: absolute;width: 100%;height: 100%;top: 0;z-index: 99999998;"></div>';
	$("body").append($(html_mask));

	html+='<div id="tip" style="position:absolute;left:25%;top:25%;z-index: 99999999;width:270px;height:227px;background:#fff;border-radius:4px;">';
	html+='	<p style="font-size:.16rem;color:#0093bb;text-align:center;height:37px;padding-top:17px;">'+message+'</p>';
	html+='	<img src="images/tip.png" width="95" height="95" style="padding:15px 0px 24px 0px;margin:0 auto;"/>';
	html+='	<div id="tipBox">';
	html+='	</div>';
	html+='</div>';

	var close_tip_html = '<p style="font-size:.16rem;color:#0093bb;text-align:center;height:37px;" id="closeTip">确定</p>';

	// html+='<div id="tip" style="width:200px;position:absolute;left:25%;top:25%;z-index: 99999999;">';
	// html+='	<div style="background:url(images/tip.png) no-repeat center;width:200px;height:105px;background-size:200px 105px;"></div>';
	// html+='	<p style="width:200px!important;height:90px; vertical-align:middle;display:table-cell;background:#fff;width:100%;text-align:center;line-height:30px;font-size:.14rem;font-weight:bold;">'+message+'</p>';
	// html+='	<div style="width:100%;height:50px;background:#fff;" id="tipBox">';
	// html+='	</div>';
	// html+='</div>';

	// var close_tip_html = '<div style="color:#fff;font-size:1em;width:110px;height:28px;background:#59a42c;border-radius:30px;text-align:center;line-height:28px;margin:0 auto;" id="closeTip">确定</div>';
	var $html = $(html);
	var $closeTipHtml = $(close_tip_html);
	$html.find("#tipBox").html($closeTipHtml);
	
	$("body").append($html);
	var windowWidth = ($(window).width()-$("#tip").width())*0.5;
	var windowHeight = $(window).height(),      //获取当前窗口高度
	scrollHeight = $(document).scrollTop(),    //相对滚动条上侧的偏移值
	dialogBoxHeight = $("#tip").height() + 2,
	dialogBoxTop = windowHeight * 0.5,      //动态top值
	dialogBoxMarTOP = 0 - (dialogBoxHeight/2) + scrollHeight;   //动态margin-top值
	$("#tip").css({"left" : windowWidth + "px","top" : dialogBoxTop + "px", "margin-top":dialogBoxMarTOP + "px"  });

	$("#mask").css({
        "height":$("body").height()
    })

	$closeTipHtml.on("click", function(){
		$("#tip").remove();
		$("#mask").remove();
		successCallback();
	})
	// alert(message);
}

function ajaxRequest(url, method, data, callback) {
	var request = $.ajax({
        type: method,
        url: url,
        dataType: 'json',
        data:data,
        success: callback
    });
}

function ajaxGetRequest(url, data, callback) {
	ajaxRequest(url, 'GET', data, callback)
}

function ajaxPOSTRequest(url, data, callback) {
	ajaxRequest(url, 'POST', data, callback)
}
// 获得当前日期
function getDate(){
	var mydate = new Date();
    var year=mydate.getFullYear(); //获取完整的年份(4位,1970-????)
	var month=mydate.getMonth()+1; //获取当前月份(0-11,0代表1月)
	var day=mydate.getDate(); //获取当前日(1-31) 
	if(month<10){
		month="0"+month;
	}
	if(day<10){
		day="0"+day;
	}
	mydate=year+"-"+month+"-"+day;
	return mydate;
}
//获得当前日期的后x天，通用
function nextDay(x){ 
    var mydate = new Date();
    var time=new Date(mydate.getTime() + x*24*60*60*1000);
    var year=time.getFullYear(); //获取完整的年份(4位,1970-????)
	var month=time.getMonth()+1; //获取当前月份(0-11,0代表1月)
	var day=time.getDate(); //获取当前日(1-31) 
	if(month<10){
		month="0"+month;
	}
	if(day<10){
		day="0"+day;
	}
	mydate=year+"-"+month+"-"+day;
	return mydate;
}
//计算两个日期天数差的函数，通用
function daysBetween(DateOne,DateTwo){ 
    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-')); 
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1); 
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-')); 

    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-')); 
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1); 
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-')); 

    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000); 
    return Math.abs(cha); 
}
function circleMask(){
	$("html, body").css("height", "100%");
	$("body").append('<div id="circle_mask" style="background: #000;opacity: 0.37;position: absolute;width: 100%;height: 100%;top: 0;z-index: 999999;"></div><img src="images/circle.gif" id="circle_img" width="50" height="50" style="position:absolute;display:block;z-index: 99999999;">');
	var windowWidth = ($(window).width()-$("#circle_img").width())*0.5;
	var windowHeight = $(window).height(),      //获取当前窗口高度
	scrollHeight = $(document).scrollTop(),    //相对滚动条上侧的偏移值
	dialogBoxHeight = $("#circle_img").height() + 2,
	dialogBoxTop = windowHeight * 0.5,      //动态top值
	dialogBoxMarTOP = 0 - (dialogBoxHeight/2) + scrollHeight;   //动态margin-top值
	$("#circle_img").css({"left" : windowWidth + "px","top" : dialogBoxTop + "px", "margin-top":dialogBoxMarTOP + "px"  });

	$("#circle_mask").css({
	    "height":$("body").height()
	})
}
// banner跳转
$(".app_url").live("click",function(){
	var this_url=$(this).data("url");
	var arr=this_url.split("?");
	setLocalStorage(arr[2],arr[1]);
	location.href=arr[0];
})








