$(function(){
	$('#chengfenlei').hover(function(){
		$('#chengfenleinone').show()
	},function(){
		$('#chengfenleinone').hide()
	});
	//现有收获地址
	$('.shoudizhi-div1 input').click(function(){
		if($(this).attr('checked')=="checked"){
			$(this).parent('div').css('background','#F2E5D1').siblings('.shoudizhi-div1').children('input').removeAttr("checked")
			$(this).parent('div').css('background','#F2E5D1').siblings('.shoudizhi-div1').css('background','#FFFFFF')
		}
	})
	//删除地址
	$('.delect1').click(function(){
		$('.shoudizhi-div11').css('display','none')
	})
	$('.delect2').click(function(){
		$('.shoudizhi-div2').css('display','none')
	})
	$('.delect3').click(function(){
		$('.shoudizhi-div3').css('display','none')
	})
	//修改地址
	$('.alter').click(function(){
		$('#overlay').show();
		$('#content').show();
	})
	$('#close').click(function(){
		$('#overlay').hide();
		$('#content').hide();
	})
	$('.xinzeng').click(function(){
		$('#overlay').show();
		$('#content').show();
	})
	
})