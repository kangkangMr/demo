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
	
	$('#magnifying li').mousemove(function(){
		$(this).css('border','1px solid black')
	})
	$('#magnifying li').mouseout(function(){
		$(this).css('border','none')
	})
	
	$('#operator span').mousemove(function(){
		$(this).css('border','2px solid red')
	})
	$('#operator span').mouseout(function(){
		$(this).css('border','1px solid #C1B9B9')
	})
	
	$('#operator span').click(function(){
		$(this).addClass('dianxin').siblings().removeClass('dianxin')
	})
	
	

})

	//加减
var maxNum = 999;//最大数字限制
function boutton(type,id){
   if(type==1){
		//减
		var v = $("#digital"+id).val();
		v = parseInt(v);
		if( true === isNaN(v) ){
			alert("数量有误");
			return false;
		}
		if( v <= 1 ){
			return false;
		}
		if( v === 1 ){
			return false;
		}
		v--;
		$("#digital"+id).val(v);
		if( v === 1 ){
			//this.disabled = "true";//添加disabled属性
			$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
		}
		if( v < maxNum ){
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
		}
	}else{
		    //加
			var v = $("#digital"+id).val();
			v = parseInt(v);
			if( true === isNaN(v) ){
				alert("数量有误");
				return false;
			}
			if( v > maxNum ){
				return false;
			}
			v++;
			$("#digital"+id).val(v);
			if( v > 1 ){
				$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
			}
			if( v === maxNum ){
				$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
			}
	}
}
