$(function(){
	//input-checked全选
	function xuan(element,a,b){
		if(element.attr("checked") == "checked"){
			a.attr("checked","checked");
			b.css("background","#f7e5c6")
		}else{
			a.removeAttr("checked");
			b.css("background","#fff")
		}
	}
	
	//全选按钮
	$("#quanxuan").click(function(){
		xuan($("#quanxuan"),$("table input[type=checkbox]"),$("table tr:not(:last)"));
	})
	$("#quanxuan2").click(function(){
		xuan($("#quanxuan2"),$("table input[type=checkbox]"),$("table tr:not(:last)"));
	})
	
	//单个选择按钮
	$("input.inp-check").click(function(){
		if($(this).attr("checked") == "checked"){
			$(this).parent("td").parent("tr").css("background","#f7e5c6")
			
		}else{
			$(this).parent("td").parent("tr").css("background","#fff")
		}
	})
	
	//清空购物车
	$("#rem-cart").click(function(){
		$("table").hide();
	})
	
	//数量减
	var num;
	$("input.jian").click(function(){
		var num = parseFloat($(this).siblings("input[type=text]").val());
		num-=1;
		if(num <= 0){
			$(this).attr("readonly",true)
			$(this).css("color","#ccc")
		}else{
			$(this).siblings("input[type=text]").val(num)
			var danjia = parseFloat($(this).parent().siblings(".danjia").html());
			var xiaoji = parseFloat($(this).parent().siblings().children("span.xiaoji").html());
			xiaoji = xiaoji-danjia;
			$(this).parent().siblings().children("span.xiaoji").html(xiaoji);
		}
		
	})
	//数量加
	$("input.jia").click(function(){
		var num = parseFloat($(this).siblings("input[type=text]").val());
		num+=1;
		$(this).siblings("input[type=button]").css("color","red");
		$(this).siblings("input[type=text]").val(num);
		var danjia = parseFloat($(this).parent().siblings(".danjia").html());
		var xiaoji = parseFloat($(this).parent().siblings().children("span.xiaoji").html());
		xiaoji = danjia+xiaoji;
		$(this).parent().siblings().children("span.xiaoji").html(xiaoji);
	})
	
	
	
	//判断input里是不是数字
	$("input.num").keyup(function(){
		//  除数字以外的所有/^[^\d]*$/
		var va = $(this).val()
		//数字必须在1-999之间
		var nu = /^(1|([1-9]\d{0,2}))$/;
		if(nu.test(va)){
			$(this).val(va)
			var danjia = parseFloat($(this).parent().siblings(".danjia").html());
			xiaoji = danjia*va;
			$(this).parent().siblings().children("span.xiaoji").html(xiaoji);
		}else{
			$(this).val("")
		}
	})
	//判断数量是不是空（为空默认等于1）
	$("input.num").blur(function(){
		var va = $(this).val();
		if(va == ""){
			$(this).val("1");
			var danjia = parseFloat($(this).parent().siblings(".danjia").html());
			$(this).parent().siblings().children("span.xiaoji").html(danjia);
		}
	})
	
	
	
	
	//删除单行
	$("table tr td span.remove").click(function(){
		$(this).parent().parent().hide();
	})
	
	$("table tr td span.all-remove").click(function(){
		$.each($("input.inp-check"), function(index,value) {
			if($("input.inp-check").eq(index).attr("checked") == "checked"){
				$("input.inp-check").eq(index).parent("td").parent("tr").hide();
			}
		});
		
	})
	
})
