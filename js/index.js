//下拉菜单
$(function(){
			$(".nav-tabs>li").mouseover(function(){
           $(this).find(".subnav").addClass('open')})
			.mouseout(function(){
         	$(this).find(".subnav").removeClass('open');
         })



  
//换加减符号图标
	$(".glyphicon").click(function() {
			if(this.className==="glyphicon glyphicon-minus"){
				$(this).removeClass('glyphicon-minus')
			    $(this).addClass('glyphicon-plus');
			}
			else{
				$(this).removeClass('glyphicon-plus')
			    $(this).addClass('glyphicon-minus');
			}
             $(".leftSubnav").eq($(this).parent().index()).slideToggle();

		})  
		
		$(".leftNav li").click(function(){
		       $(this).addClass('current');
		       $(this).siblings().removeClass('current');
			})
		
        //招生目录导航
		$(".flowmenu li").click(function(){		
		$(this).addClass('current');
		$(this).siblings().removeClass('current');	
	})
		
//		图书馆<div class="search">Tab切换
		$(".tab>li").hover(function(){			
					$(".tab>li").removeClass("active").eq($(this).index()).addClass("active");
					$(".tab_con>div").hide().eq($(this).index()).show();
					
				})
//		图书馆<div class="servicewrap">Tab切换
		$(".Re_tab>li").hover(function(){			
					$(".Re_tab>li").removeClass("active").eq($(this).index()).addClass("active");
					$(".Re_tab_con>div").hide().eq($(this).index()).show();
					
				})
//		图书馆<div class="ztab_con">Tab切换		
		$(".z_tab>li").hover(function(){
			if($(this).index()!=2){
					$(".z_tab>li").removeClass("active").eq($(this).index()).addClass("active");
					$(".ztab_con>div").hide().eq($(this).index()).show();	
			}
				})
})
//目录滚动导航
   $(function(){
	if($('.flowmenu').length>0){
		window.guide={};
		guide.ttop=$('.flowmenu').siblings(".leftNav").height()+70; //不动的时候目录离导航的位置
		guide.top=$('.flowmenu').offset().top+295;//离body的距离
//		alert(guide.top);
		guide.scrollheight=$(document).height()-$('.footer').height()-$('.flowmenu').height()-70;
		scrollvisitor();
		$(window).bind('scroll',function(){
			scrollvisitor();
		})
		
//		$('.flowmenu li').bind('click',function(){
//			var attr=$(this).attr('at');
//			var top=$('.flowContent h3[at='+attr+']').offset().top-60;
//			$('html,body').animate({'scrollTop':top},300);
//		})
	}
	
	function scrollvisitor(){
		var top=$(document).scrollTop();
		if(top>=guide.scrollheight){
			$('.flowmenu').css('top',guide.scrollheight-guide.ttop);
		}
		else if(top>=guide.top){
			$('.flowmenu').css({'top':top-guide.ttop+70});
		}
		else{
			$('.flowmenu').css({'top':guide.ttop});
		}
	}
	
						
})

