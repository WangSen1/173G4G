$(function(){
	//打开一个广告栏
	 window.open('open.html','','top=0,left=200,width=500,height=327,scrollbars=0');
	//随滚动条滚动的可关闭广告窗口
	$(window).scroll(function(){
        var st = $(this).scrollTop()+50;
        $("#right").css("top",st);
    	});
   		$("#right").find("a").click(function(){
        $("#right").hide();
   	 });
   	 //轮换图片
	function changeImg(){
        var index=0;
        var stop=false;
        var $li=$("#content").find("#scroll_img").children("li");
        var $page = $("#content").find("#scroll_number").children("li");
        $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        $page.mouseover(function(){
            stop=true;
            index=$page.index($(this));
            $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
            $(this).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        }).mouseout(function(){
            stop=false;
        });
        setInterval(function(){
            if(stop) return;
            index++;
            if(index>=$li.length){
                index=0;
            }
            $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
            $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        },3000);
    }
    changeImg();
    //电子书等比放大
    $(".book ul img").mouseenter(function(){
        $(this).stop(true,true).animate({width:"110%"},"slow");
    });
    $(".book ul img").mouseleave(function(){
        $(this).stop(true,true).animate({width:"80%"},"slow");
    });
    //图书畅销榜
   $(".tab ol li:first-of-type").mouseover(function(){
        $(".tab ol li:last-of-type").css({"background":"#efefef","border-left":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
        $(this).css({"width":"119px","background":"#ffffff","border":"none"});
        $(".tab ul:first-of-type").show();
        $(".tab ul:last-of-type").hide();
    });
    $(".tab ol li:last-of-type").mouseover(function(){
        $(".tab ol li:first-of-type").css({"background":"#efefef","border-right":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
        $(this).css({"width":"119px","background":"#ffffff","border":"none"});
        $(".tab ul:first-of-type").hide();
        $(".tab ul:last-of-type").show();
    });
    $(".tab ul li p").mouseenter(function(){
        $(this).next().show();
        $(this).hide();
        $(this).parent().siblings().children("p").show().end().children("dl").hide();
    })
   
})