$(function(){
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
})
