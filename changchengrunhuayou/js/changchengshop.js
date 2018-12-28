$(function(){
	$('#none').click(function(){
		$('#ShopNone').css('display','none')
		$('#jixushop').css('marginTop','60px').css('border','1px solid #999')
	})
	$('#inp1').click(function(){
		$('#tr2').css('background','#F7E5C6')
	})
	$('#inp2').click(function(){
		$('#tr3').css('background','#F7E5C6')
	})
	$('#inp3').click(function(){
		$('#tr4').css('background','#F7E5C6')
	})
	$('#check').click(function(){
		$('#tr2,#tr3,#tr4').css('background','#F7E5C6')
	})
})
