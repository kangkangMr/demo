$(function(){
	//轮播图
	var _index = 0;
	var stop = null;
	$('.onetwo li').click(function(){
		 _index = $(this).index();
		$('.onetwo li').eq(_index).addClass('one').siblings().removeClass('one');
		$('#max li').eq(_index).show().siblings('li').hide()
	})
	stop = setInterval(auto,2000)
	function auto(){
		_index++;
		if(_index>$('.onetwo li').length){
			_index=0;
		}
		$('.onetwo li').eq(_index).addClass('one').siblings().removeClass('one');
		$('#max li').eq(_index).show().siblings('li').hide()
	}
	$('.onetwo li').hover(function(){
		clearInterval(stop)
	},function(){
		stop = setInterval(auto,2000)
	})
	
	//国庆活动
	$('.annunciate').click(function(){
		$('#overlay').show();
		$('.Annunciate').show();
	})
	$('.close').click(function(){
		$('#overlay').hide();
		$('.Annunciate').hide();
	})
	$(window).scroll(function(){
		var t = $(window).scrollTop();
		let a = 260 + t;
		$('.annunciate').animate({
			top : a+"px"
		},10)
	})
	//排行榜
	$('.right-cont1').mouseover(function(){
		$('.right-cont111').show();
		$('.right-cont1').hide();
	})
	$('.right-cont111').mouseout(function(){
		$('.right-cont1').show();
		$('.right-cont111').hide();
	})
	$('.right-cont2').mouseover(function(){
		$('.right-cont222').show();
		$('.right-cont2').hide();
	})
	$('.right-cont222').mouseout(function(){
		$('.right-cont2').show();
		$('.right-cont222').hide();
	})
	$('.right-cont3').mouseover(function(){
		$('.right-cont333').show();
		$('.right-cont3').hide();
	})
	$('.right-cont333').mouseout(function(){
		$('.right-cont3').show();
		$('.right-cont333').hide();
	})
	$('.right-cont4').mouseover(function(){
		$('.right-cont444').show();
		$('.right-cont4').hide();
	})
	$('.right-cont444').mouseout(function(){
		$('.right-cont4').show();
		$('.right-cont444').hide();
	})
	$('.right-cont5').mouseover(function(){
		$('.right-cont555').show();
		$('.right-cont5').hide();
	})
	$('.right-cont555').mouseout(function(){
		$('.right-cont5').show();
		$('.right-cont555').hide();
	})
	$('.right-cont6').mouseover(function(){
		$('.right-cont666').show();
		$('.right-cont6').hide();
	})
	$('.right-cont666').mouseout(function(){
		$('.right-cont6').show();
		$('.right-cont666').hide();
	})
	
})
