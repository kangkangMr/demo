$(function(){
	$('#chengfenlei').hover(function(){
		$('#chengfenleinone').show()
	},function(){
		$('#chengfenleinone').hide()
	})
	$('.right-header p').click(function(){
		$(this).addClass('product-presentation').siblings('p').removeClass('product-presentation')
		var _index = $(this).index();
		$('.max-img div').eq(_index).fadeIn().siblings('div').hide();
	})
	$('.magnifying-glass').mousemove(function(){
		$('.magnifying-glass-none').show();
	})
	$('.magnifying-glass').mouseout(function(){
		$('.magnifying-glass-none').hide();
	})
	$('#magnifying li:not(:first)').mousemove(function(){
		var url = $(this).find('img').attr('src');
		alert(2)
		$('#magnifying li:first').find('img').attr('scr',url)
		alert(4)
	})
})
