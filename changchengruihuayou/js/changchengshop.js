$(function(){
	//清空购物车
	$('#none').click(function(){
		$('#ShopNone').css('display','none')
		$('#jixushop').css('marginTop','60px').css('border','1px solid #999')
	})
	//单选input
	$('#inp1').click(function(){
		$('#tr2').css('background','#F7E5C6')
	})
	$('#inp2').click(function(){
		$('#tr3').css('background','#F7E5C6')
	})
	$('#inp3').click(function(){
		$('#tr4').css('background','#F7E5C6')
	})
	//全选变色
	$('#check').click(function(){
		$('#tr2,#tr3,#tr4').css('background','#F7E5C6')
	})
	//全部input封装
	function quancheck(element,a,b){
		if(element.attr("checked")=="checked"){
			a.attr("checked","checked");
			b.css("background","#F7E5C6")
		}else{
			a.removeAttr("checked")
			b.css("background","white")
		}
	}
	//全部input被选中
	$('#check').click(function(){
		quancheck($('#check'),$('table input[type=checkbox]'),$('table tr:not(last)'))
	})
	$('#check1').click(function(){
		quancheck($('#check1'),$('table input[type=checkbox]'),$('table tr:not(last)'))
	})
	//单个删除
	$('#tr2 .tr2-td6').click(function(){
		$('#tr2').hide()
	})
	$('#tr3 .tr2-td6').click(function(){
		$('#tr3').hide()
	})
	$('#tr4 .tr2-td6').click(function(){
		$('#tr4').hide()
	})
	//全选-删除
	$('.deleteAll').click(function(){
		$.each($('.inp1'),function(index,value){
			if($('.inp1').eq(index).attr("checked")=="checked"){
				$('.inp1').eq(index).parent('td').parent('tr').hide();
			}
		})
	})
	//购物车减
	let num;
	$('input.subtractone').click(function(){
		let num = parseFloat($(this).siblings('input[type=text]').val());
		num-=1;
		if(num <= 0){
			$(this).attr('readonly',true)
			$(this).css("color","#CCCCCC")
		}else{
			$(this).siblings('input[type=text]').val(num);
			//积分
			let price = parseFloat($(this).parent().siblings('.price').html());
			//小计
			let subtotal = parseFloat($(this).parent().siblings().children('.subtotal').html());
			subtotal = subtotal-price;
			console.log(subtotal)
			$(this).parent().siblings().children('.subtotal').html(subtotal)
		}
	})
	//购物车加
	$('input.addone').click(function(){
		let num = parseFloat($(this).siblings('input[type=text]').val());
		num+=1;
		$(this).siblings('input[type=button]').css('color','red')
		$(this).siblings('input[type=text]').val(num);
		let price = parseFloat($(this).parent().siblings('.price').html());
		let subtotal = parseFloat($(this).parent().siblings().children('.subtotal').html());
		subtotal=price+subtotal;
		console.log((subtotal))
		$(this).parent().siblings().children('.subtotal').html(subtotal)
	})
	//判断里面是不是数字
	$(".number").keyup(function(){
		var a = $(this).val()
		//1-999之间
		let b = /^(1|([1-9]\d{0,2}))$/;
		if(b.test(a)){
			$(this).val(a)
			let price = parseFloat($(this).parent().siblings(".price").html());
			subtotal = price*a;
			$(this).parent().siblings().children(".subtotal").html(subtotal);
		}else{
			$(this).val("")
		}
	})
	//判断是否为空，为空则默认为0
	$(".number").blur(function(){
		let a = $(this).val();
		if(a == ""){
			$(this).val("1");
			let price = parseFloat($(this).parent().siblings(".price").html());
			$(this).parent().siblings().children(".subtotal").html(price);
		}
	})
//	统计总数
	$("[name=items]:checkbox").click(function(){
		 //定义一个临时变量，避免重复使用同一个选择器选择页面中的元素
		var $tmp=$("[name=items]:checkbox");
		//用filter方法筛选出选中的复选框。并直接给CheckedAll赋值
		$("#check1").attr("checked",$tmp.length==$tmp.filter(":checked").length);
		//已选商品数量
		var num = $("#span").text();
		console.log(num)
		if( this.checked === true ){
			num++;
		}else{
			num--;
		}
		if( num < 0 ){
			return false;
		}
		$("#span").text( num );
		//已选商品总额
		$(this).each(function(){
		   var bj = $(this).val();
		   var totalNum = parseInt( $("#zonge").html() );//所选商品总额	
		   var soloTotal = parseInt( $(".subtotal"+bj).html() );//单个商品总额
		   if( this.checked === true ){
				totalNum = totalNum + soloTotal ;//已选商品总额
				$("#zonge").html(totalNum)	
			}else{
				totalNum = totalNum - soloTotal ;//已选商品总额
				$("#zonge").html(totalNum)
			}
        });
	 });
})


	

