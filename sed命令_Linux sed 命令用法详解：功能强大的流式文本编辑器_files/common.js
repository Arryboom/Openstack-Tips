$(document).ready(function(){
	//返回顶部
	(function(){
		$(".toggle-btn").click(function(){
			$($(this).attr("toggle-target")).toggleClass("toggle-target-active");
		});
	})();

	//返回顶部
	(function() {

		var backToTopEle = $('#btn-backtop').click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
		});

		if( ! /static/gi.test(backToTopEle.css("position")) ){  //移动版才绑定滚动事件
			$(window).bind("scroll", function() {
				var st = $(document).scrollTop();
				var winh = $(window).height();
				(st > 500)? backToTopEle.addClass("btn-backtop-visible"): backToTopEle.removeClass("btn-backtop-visible");	
				//IE6下的定位
				if (!window.XMLHttpRequest) {
					$backToTopEle.css("top", st + winh - 166);	
				}
			});
		}
		
	})();
});