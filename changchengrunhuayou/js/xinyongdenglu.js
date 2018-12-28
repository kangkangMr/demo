$(function(){
		var fal = false;
		$('.box i').click(function(){
			if(fal==false){
				$(this).addClass('icon_active');
				fal=true;
			}else{
				$(this).removeClass('icon_active');
				fal=false;
			};
	  });
	  var validation = {
              checkMobile: function(sMobile) {//手机号
                    var mobile_tag = (/^1[23456789]\d{9}$/.test(sMobile))
                    return mobile_tag;
              },
              checkPw: function(pw) {//密码规范
                    var pw_tag = (/^[-.a-zA-Z0-9]{6,12}$/.test(pw)); //^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$
                    return pw_tag;
              }
        }
	  $('.user input').bind('input propertychange blur',function () {
               var zValue = $(this).val();
               if(zValue == ''){
                   $('.content-inner-deng .user1').html('手机号不能为空');
               }else if( validation.checkMobile(zValue) == false || zValue.length > 11){
                   $('.content-inner-deng .user1').html('您的手机号格式不正确,请您重新输入');
               }
               else{
                   $('.content-inner-deng .user1').html("");
               }
           });
      $('.pass input').bind('input propertychange blur',function () {
               var zValue = $(this).val();
               if( validation.checkPw(zValue) == false){
                   $('.content-inner-deng .user2').html('您的密码输入不正确，请重新输入');
               }
               else{
                   $('.content-inner-deng .user2').html("");
               }
           });     
})



   

