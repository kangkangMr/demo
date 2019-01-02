$(function(){
		$('.body1-inner-user input').focus(function(){
			$(this).css('backgroundColor','#FDF6C8');
		})
	  $('.body1-inner-user input').bind('input propertychange blur',function () {
               var num = $(this).val();
	 	   	   		 var num1 = /(^1[3|4|5|7|8][0-9]{9}$)|(^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$)/i;
//             		邮箱手机号
               		if(num.length==""){
               			 $('.body1-innermax .num').html('账号不能为空');
               		}else if(!(num1.test(num))){
               		     $('.body1-innermax .num').html('请输入账号');
               		}else{
               			 $('.body1-innermax .num').html('');
               		}
               	});	
         
      $('.body1-inner-pass input').focus(function(){
      		$(this).css('backgroundColor','#FDF6C8');
		})   
      $('.body1-inner-pass input').bind('input propertychange blur',function () {
               var pas = $(this).val();
	   		   		 var pass =(/^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,}|(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[0-9])(?=.*[^A-Za-z0-9])|).{6,}$/);
//            密码都支持
              if(!(pass.test(pas)||pas.length>18)){
                   $('.body1-innermax .pas').html('密码不正确，请输入密码 ');
               }else{
               	   $('.body1-innermax .pas').html('');
               }
               setTimeout(function(){
					location.href='个人中心.html'
			   },1000);
           });     
});
