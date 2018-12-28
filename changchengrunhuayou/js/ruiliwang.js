$(function(){
	//NEW若隐若现
    setInterval(function(){
//  					动画
        $(".xiangmai").animate({opacity : 0},1000,function(){
            $(this).animate({opacity:1},1000);
        });
    },2000);
	
	//显示搜索框
	$('#sou').click(function(event){
		$('#show').show(500);
		event.stopPropagation();
		$('#sou').hide(500);
	})
	//隐藏搜索框
	$(document).click(function(){
        $('#show').hide(500);
        $('#sou').show(500);
    });
    //阻止事件冒泡
    $('#guan').click(function(event){
    	event.stopPropagation();
    })
	//搜索框
	//焦点进入
	$('#guan').focus(function(event){
		if($(this).val()==this.defaultValue){
			$(this).val("").css('color','#CCCCCC')
		}
	//焦点离开
	}).blur(function(){
		if($(this).val()==""){
			$(this).val(this.defaultValue).css('color','#CCCCCC')
		}
	})
	//时装星期
	$('.txtBut ul li').hover(function(){
				//获取	                          上下同级                       删除
		$(this).addClass('hover').siblings().removeClass('hover');
		var _index = $(this).index();//定义一个下标
										//淡入         上下同级                    显示
		$(".imgCon ul li").eq(_index).fadeIn().siblings('li').hide();
	})
	//热门排行
	$('p.hotNewsBut span').hover(function(){
		var _index = $(this).index();//定义一个下标
//							 添加	                           上下同级                               删除
		$('p.hotNewsBut span').eq(_index).addClass('hover').siblings('span').removeClass('hover');
//										  淡入                                                                                                           淡出
		$(".News_select ul").eq(_index).fadeIn().siblings('ul').stop(true,true).fadeOut();
	})
	//热门排行数字
	 $(".News_select ul").each(function(index){
        $(".News_select ul").eq(index).find("li").each(function(index){
            $(this).children("span").text(index+1)
        });
    });
	//热门活动
	$('.part2_L_l p span').mousemove(function(){
				//获取	                              上下同级                                删除
		$(this).addClass('hover').siblings('span').removeClass('hover');
		$(".part2_L_l .commonCon").eq($(this).index()).show().siblings("div").hide();
	});
	//美妆口碑
	$('.common ul.mz li').mousemove(function(){
//				后代p			父元素                                        
		$(this).find('p').hide().parent().siblings('li').find('p').show()
		$(this).find('.mzCon').show().parent().siblings('li').find('.mzCon').hide();
	})
//	Max轮播图
	var _index1=1;
//	.next
	$('.next img').click(function(){
		_index1++;
		if(_index1>9){
			_index1=1;
			$('.imgList').css('left','0px');
			$('.imgList').animate({left:-_index1*750},500);
			$('.srcollBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
		}else{
			$('.srcollBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
			$('.imgList').animate({left:-_index1*750},500)
		}
	})
	//prev
	$('.prev img').click(function(){
		_index1--;
		if(_index1<1){
			_index1=9;
			$('.imgList').css('left','-7500px');
			$('.imgList').animate({left:-_index1*750},500)
			$('.srcollBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
		}else{
			$('.srcollBut ul li').eq(_index1).addClass('hover').siblings('li').removeClass('hover');
			$('.imgList').animate({left:-_index1*750},500)
		}
	})
	//点击.srcollBut ul li效果
	$('.srcollBut ul li').click(function(){
		_index1=$(this).index();
		$(this).addClass('hover').siblings('li').removeClass('hover');
		$('.imgList').animate({left:-_index1*750},500)
	});
	
	
	//抢先使用  轮播图
	var _index2 = 0;
	var flashInter = null;
//	触碰flash2_but ul li 效果
	$('.flash2_but ul li').hover(function(){
		clearInterval(flashInter)
		_index2 = $(this).index();
		$(this).addClass('hover').siblings('li').removeClass('hover');
		$('.flash2_scrollCon').stop().animate({left:-_index2*179},500)
	},function(){
		autoplay();
	})
//	点击flash2_pre效果
	$('.flash2_pre img').click(function(){
		clearInterval(flashInter)
		_index2 --;
		if(_index2<0){
			_index2=4;
		}	
			$('.flash2_but ul li').eq(_index2).addClass('hover').siblings('li').removeClass('hover');
			$('.flash2_scrollCon').stop().animate({left:-_index2*179},500)
	})
	$('.flash2_pre img').mouseout(function(){
		autoplay();
	})
//	点击flash2_next效果
	$('.flash2_next img').click(function(){
		clearInterval(flashInter)
		_index2++;
		if(_index2>4){
			_index2=0;
		}	
			$('.flash2_but ul li').eq(_index2).addClass('hover').siblings('li').removeClass('hover');
			$('.flash2_scrollCon').stop().animate({left:-_index2*179},500)
	})	
	$('.flash2_next img').mouseout(function(){
		autoplay();
	})
	//封装autoplay()
	function autoplay(){
		flashInter =  setInterval(function(){
			_index2++;
			if(_index2>4){_index2=0;}
			$('.flash2_but ul li').eq(_index2).addClass('hover').siblings('li').removeClass('hover');
			$('.flash2_scrollCon').stop().animate({left:-_index2*179},500)
		},2000)
	}
	autoplay();
	
	//红人专栏 轮播图
	var _index3 = 0;
	var flashInter1 = null;
	//触碰ul.flash3But li效果
	$('ul.flash3But li').hover(function(){
		clearInterval(flashInter1)
		_index3 = $(this).index();
		$(this).addClass('hover').siblings('li').removeClass('hover')
		$('.flashScroll').stop().animate({left:-_index3*280},500);
	})
	$('ul.flash3But li').mouseout(function(){
		autoplay1()
	})
//	封装autoplay1()
	function autoplay1(){
			flashInter1 =  setInterval(function(){
				_index3++;
				if(_index3>3){_index3=0;}
				$('ul.flash3But li').eq(_index2).addClass('hover').siblings('li').removeClass('hover');
				$('.flashScroll').stop().animate({left:-_index3*280},500)
			},2000)
		}
		autoplay1();
		
	//范冰冰 轮播图
	//prev效果
	$('.part3Scroll .dirr').click(function(){
		$('.part3ScrollCon').stop().animate({left:'-480px'},500,function(){
			$(this).css('left','0px')
//		把.part3ScrollCon ul li:first添加元素到.part3ScrollCon ul之后				
			$('.part3ScrollCon ul').append($('.part3ScrollCon ul li:first'));
//			把.part3Scroll span font 文本给了.part3ScrollCon ul li:first
			$('.part3Scroll span font').text(($('.part3ScrollCon ul li:first').attr('mark')));
		})
	})
	//next效果
	$('.part3Scroll .dirl').click(function(){
//			把.part3ScrollCon ul li:last添加元素到父元素.part3ScrollCon ul之后	
		$('.part3ScrollCon ul').prepend($('.part3ScrollCon ul li:last'));
		$('.part3ScrollCon').css('left','-480px').stop().animate({left:'0px'},500);
			$('.part3Scroll span font').text(($('.part3ScrollCon ul li:first').attr('mark')));
	});
	//封装autoplay2
	function autoplay2(){
		setInterval(function(){
			$(".part3ScrollCon").stop().animate({left:"-480px"},500,function(){
			$(this).css('left','0px');
			$(".part3ScrollCon ul").append($(".part3ScrollCon ul li:first"));
			//打标签
			$(".part3Scroll span font").text(($(".part3ScrollCon ul li:first").attr("mark")));
			});
		},3000);
	}autoplay2();
	
	//buttom 轮播图
	var part4_index4=0;
	$(".scroll img.dirr").click(function(){
		part4_index4++;
		var len=$(".List ul li").length;
		if(part4_index4+5>len){
			$(".List").append($(".List").html());
		}
		$(".List").stop().animate({left:-part4_index4*170},500);
		
	});

	$(".scroll img.dirl").click(function(){
		if(part4_index4==0){
			$(".List").prepend($(".List").html());
			$(".List").css("left","-1020px");
			part4_index4=6
		}
		part4_index4--
		$(".List").stop().animate({left:-part4_index4*170},500);

	});

});



