$(function(){
	$('.remen1').hover(function(){
		$(this).addClass('remen').siblings().removeClass('remen');
	},function(){
		$(this).removeClass('remen')
	})
})
