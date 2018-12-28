$(function() {
        $(window).scroll(function(event) {
            var h = $(window).scrollTop();
            console.log(h);
            if(h>=400){			//淡入
                $(".ReturnTop").fadeIn(1000);
            }else{				//淡出
                $(".ReturnTop").fadeOut(1000);
            }
        });
        $(".ReturnTop").click(function() {
            $('body,html').animate({
                scrollTop:0
            },500);
        })
    });
