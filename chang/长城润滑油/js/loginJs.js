// JavaScript Document

$(function(){

	var validation = {
		//验证手机号的正则
		checkPhone : function(sPhone){
			var phone_tag = (/^[1][3,4,5,7,8][0-9]{9}$/.test(sPhone));
			return phone_tag;
		},
		//验证密码的正则
		checkPass : function(sPass){
			var phone_pass = (/^(\w){6,8}$/.test(sPass));
			return phone_pass;
		}
	};

	function toggle(){
		if($(this).val()==''){
			$(this).css('backgroundColor','#FDF6C8');
			$(this).siblings().show();
		}else{
			$(this).css('backgroundColor','#FDF6C8');
			$(this).siblings().hide();
		}
	};

	//登录页输入账户和密码功能
	$('.loginNum input,.loginPass input').focus(function(event) {
		toggle();
	});
	$('.loginNum input,.loginPass input').bind('input propertychange',function(){
		toggle();
	});
	$('.loginNum input,.loginPass input').blur(function(){
		if($(this).val()===''){
			$(this).css('backgroundColor','#fff');
			$(this).siblings().hide();
			return false;
		}
		$(this).css('backgroundColor','#FDF6C8');
		$(this).siblings().hide();
	});
	//点击登录按钮,对账户和密码进行验证功能
	$('.loginKuang form').submit(function(event) {
		if( $('.loginNum input').val() === "" ){
			$("#email_p").show();
			return false;
		}
		if( $('.loginPass input').val() === "" ){
			$("#pass_p").show();
			return false;
		}
		if(validation.checkPhone($('.loginNum input').val()) == false){
			$("#email_p").html('您输入的账户不正确,请重新输入').show();
			return false;
		}
		if(validation.checkPass($('.loginPass input').val()) == false){
			$("#pass_p").html('您输入的密码不正确,请重新输入').show();
			return false;
		}
		setTimeout(function(){
			location.href='index.html'
		},1000);


	});
});




// $(function(){
// 	//登录页输入账户、密码
// 	$(".loginNum input,.loginPass input").focus(function(){
// 		  $(this).css("background-color","#FDF6C8");
// 		  $(this).siblings("p").show();
//
// 	}).blur(function(){
// 		 if ($(this).val() == '') {
// 			$(this).css("background-color","#FDF6C8");
// 			$(this).siblings("p").show();
// 		 }
// 		 if ($(this).val() != '') {
// 			$(this).css("background-color","#FFF");
// 			$(this).siblings("p").hide();
// 		 }
// 	});
// });
//
// function subform(obj){
// 	//用户名
// 	if( obj.email.value === "" ){
// 		$("#email_p").show();
// 		return false;
// 	}else{
// 		$("#email_p").hide();
// 	}
// 	//密码
// 	if( obj.pass.value === "" ){
// 		$("#pass_p").show();
// 		return false;
// 	}else{
// 		$("#pass_p").hide();
// 	}
// 	return true;
// }
