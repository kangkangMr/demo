$(function(){
	$('.activity li').click(function(){
		$(this).addClass('activity1').siblings('li').removeClass('activity1');
		var _index = $(this).index();
		$('.content-inner div img').eq(_index).fadeIn().siblings('img').hide();
	})
})
