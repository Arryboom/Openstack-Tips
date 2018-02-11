/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */
(function($){
	"use strict";
	$(document).ready(function() {
	
			// partner directory map start
			if(jQuery("#innertop-a .partner_map").length>0){
				jQuery("#innertop-a .partner_map").prepend("<div class='map_overlay'></div>");
				/* jQuery("#innertop-a").mouseout(function(){
					jQuery("#innertop-a .partner_map").find('.map_overlay').show();
				}); */
			}
			if(jQuery("#innertop-a .partner_map").find('.map_overlay').length>0){
				jQuery("#innertop-a .partner_map").find('.map_overlay').click(function(){
					jQuery(this).hide();
				});
			}
			// partner directory map end
			jQuery('.alert-info').fadeOut(5000);			
			jQuery('.alert-success').fadeOut(5000);
			jQuery('.alert-error').fadeOut(5000);

		
			jQuery('.feed-items .widget-filter.custom-filter [data-title="K2 Articles"]').parent().remove();
			jQuery("#toolsmenu").niceScroll({cursorborder:"",cursorcolor:"#fff",boxzoom:false,cursoropacitymax:0.5, cursorwidth :"5px"});
			jQuery("#sbox-content").niceScroll({cursorborder:"",cursorcolor:"#999",boxzoom:false,cursoropacitymax:0.5, cursorwidth :"5px"});
			jQuery(".label_check span[id]").niceScroll({cursorborder:"",cursorcolor:"#999",boxzoom:false,cursoropacitymax:0.5, cursorwidth :"5px"});
			var map_field = jQuery(this).find('.SPDetails .SPDetailEntry').find('.spField:eq(5)').remove();
			jQuery(this).find('.SPDetails .SPDetailEntry h1').before(map_field);
			jQuery("ul.recomended_partner li").each(function(){
				var link_text = jQuery(this).find('.field_website a').text();
				jQuery(this).find('.field_website a').remove();
				jQuery(this).find('.spField:eq(3)').remove();
				jQuery(this).find('.field_website strong').after(link_text);
			});
			
			setTimeout(function(){
			
				jQuery("#toolsmenu .user_menu").css('cursor','pointer');
			},6000);
			
			jQuery("#showdemo").click(function(){
				jQuery(this).hide();
				jQuery('#democontent').removeClass('hide').hide().slideDown('slow');
			});
			var classname; 
			var current_src; 
			jQuery(".content_box .read_more a" ).click(function() {
				if(jQuery(this).hasClass('uk-icon-angle-down')){
					jQuery(this).removeClass("uk-icon-angle-down uk-icon-angle-up").addClass( "uk-icon-angle-up" );
				} else 	{
					jQuery(this).removeClass("uk-icon-angle-down uk-icon-angle-up").addClass( "uk-icon-angle-down" );
				}
				jQuery(this).parent().parent().find("p:eq(1)").toggle();	
				jQuery(this).parent().parent().toggleClass("expanded");
			});
			jQuery(".gateway_img, .cloud_img, .network_img, .server_img" ).mouseover(function() {
				
				classname 	= jQuery(this).find("map.my_map").attr('data-id');
				current_src = jQuery(".cube").find("img."+classname).attr('src');
				jQuery("."+classname).attr('src',current_src.replace("_grey",""));
			}).mouseout(function(){
				jQuery("."+classname).attr('src',current_src);
			});
			
			// remove blank divs
			jQuery(".course_cell_guru").find(".name_guru").parent().next().remove();
		// for menus starts
			jQuery("#offcanvas li.level1").each(function(){
				$(this).append("<span class='collepseicon'><a href='javascript:void(0);' class='plus'>+</a></span>").find("ul").hide();
			});
			jQuery("#offcanvas li.level2").each(function(){
				$(this).append("<span class='collepseicon'><a href='javascript:void(0);' class='plus'>+</a></span>").find("ul").hide();
			});
			$(document).on("click",".collepseicon",function(){ 
				$(this).parent().find("> ul").toggle('slide');
				if($(this).find("a").text()=="+"){
					$(this).find("a").text('-').removeClass('minus plus').addClass('minus');
				}else{
					$(this).find("a").text('+').removeClass('minus plus').addClass('plus');
				}
			});
		// for menus ends
		
		function to_increse_statics(){
			var static_start_year	=	parseInt($("#statics-deployment").attr('data-start-year'));	
			var static_start_month	=	parseInt($("#statics-deployment").attr('data-start-month'))-1;	
			var static_start_day	=	parseInt($("#statics-deployment").attr('data-start-day'));	
			var start_time			=	new Date(static_start_year, static_start_month, static_start_day)/1000;
			var start_year			=	static_start_year;
			var now 				= 	new Date();
			var startOfDay 			= 	new Date(now.getFullYear(), now.getMonth(), now.getDate());
			var today 				= 	startOfDay / 1000;
			var today_year 			= 	now.getFullYear();
			var total_days			=	(today-start_time)/86400;
			
			var total_year			=	today_year-start_year;
			var current_dep			=	parseInt($("#statics-deployment").text());
			var current_dev			=	parseInt($("#statics-development").text());
			var protected_users_inc	=	parseInt($("#statics-protected-users").attr('data-increment'));
			var deployment_inc		=	parseInt($("#statics-deployment").attr('data-increment'));
			var development_inc		=	parseInt($("#statics-development").attr('data-increment'));
			var millionvalue		=	(($("#statics-protected-users").text()*1000000)+(total_days*protected_users_inc))/1000000;
			//console.log(millionvalue);
			$("#statics-deployment").attr('data-to',current_dep+(total_days*deployment_inc)).text(current_dep+(total_days*deployment_inc));
			$("#statics-development").attr('data-to',current_dev+(total_year*development_inc)).text(current_dev+(total_year*development_inc));
			$("#statics-protected-users").attr('data-to',millionvalue).text(millionvalue);
		}
		to_increse_statics();
		// Remove the # from the hash, as different browsers may or may not include it
		var hash = location.hash.replace('#','');
		
		
		$('a[href^="#"]').on('click',function (e) {
			if(!$(this).hasClass('collapse')){

			$('a[href*="#"]').removeClass('active');
			$(this).addClass('active');
			
			if(this.hash!=""){
			var target = this.hash,
			
			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top-225
			}, 800, 'swing', function () {
				
			});
			} 
			}
		});
	
		$(window).load(function(){
			if(hash != ''){
				$('a[href*=#'+hash+']').trigger('click');
			}

		});
			
		
		var topMenuHeight = 255,
			// All list items
			menuItems = $('a[href*="#"].level2'),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
			  var item = this.hash;
			  if (item.length) { return item; }
			});
		
		// Bind to scroll
 		$(window).scroll(function(){
			
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
			
			var current		=	[];
			
			$.each(scrollItems,function(){
				
				if($(this).text() != ""){
					if ($(this).offset().top < fromTop)
						current.push(this);
				}
			});
			var currentid	=	current[current.length-1];
			
			// Set/remove active class
		   menuItems.removeClass("active");
		  // $("[href*="+currentid+"]").addClass('active');
		});
		//Elements animation
		 $('.animated').appear(function(){
			var element =  $(this);
			var animation = element.data('animation');
			var animationDelay = element.data('delay');
			if (animationDelay) {
			  setTimeout(function(){
				element.addClass( animation + " visible" );
				element.removeClass('hiding');
				if (element.hasClass('counter')) {
				  element.children('.value').countTo({
				  	/*formatter: function (value, options) {
					    value = value.toFixed(options.decimals);
					    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					    return value;
					  },*/

				  });
				}
			  }, animationDelay);
			}else {
			  element.addClass( animation + " visible" );
			  element.removeClass('hiding');
			  if (element.hasClass('counter')) {
				element.children('.value').countTo();
			  }
			}    
		  },{accY: -150});
		
		
		var config = $('html').data('config') || {};
		
		
		// Social buttons
		$('article[data-permalink]').socialButtons(config);

		// Accordion menu
		$('.menu-sidebar').accordionMenu({ 
			mode:'slide',
			transition: "easeOutQuad",
			duration: 500,
			display: 'show'
		});


		// canvas menu
		$('.uk-nav-offcanvas .level1.parent').addClass('uk-nav-offcanvas');

		//Dropdown menu
		$('#menu').dropdownMenu({ 
			mode: 'height', 
			dropdownSelector: 'div.dropdown',
			transition:"easeOutExpo",
			duration:500
		});

		$('#toggler_556TD span').click(function(){
			$(this).toggleClass('osmenu');
		});

		$("#drawerToggle1").mouseenter(function(){
			
		  	$(this).toggleClass('active');
			$('.clearos_drawer').toggleClass('show_drawer');
			$('.clearos_dropup').slideToggle();
		});



		$("#menu ul.menu-dropdown").each(function(index){
			$(this).addClass('menuoption_'+index);
		});

		$(".wk-slideshow ul.captions li").each(function(index){
			$(this).addClass('slider_li_'+index);
		});

		$(".wk-slideshow ul.slides li").each(function(index){
			$(this).addClass('slider_li_'+index);
		});

		




		$('#menu-right').dropdownMenu({ 
			mode: 'height', 
			dropdownSelector: 'div.dropdown',
			transition:"easeOutExpo",
			duration:500
		});

		$('#clearosmenu').dropdownMenu({ 
			mode: 'height', 
			dropdownSelector: 'div.dropdown',
			transition:"easeOutExpo",
			duration:500
		});


		$('#menu-right .module').removeClass('module'); 
		$('.foundation_home > span').addClass('ci-ClearFoundationLogo'); 
		$('.clear_center_logo > span').addClass('ci-ClearCenterLogo');
		$('.clear_host_logo > span').addClass('ci-ClearHostLogo'); 
		$('.os_logo > span').addClass('ci-ClearOS'); 


		$('.footernavigation a').unwrap().unwrap();
		$('.clearos_drawer a').unwrap().unwrap();
		$('#clearos_dropup .nav-child.level2').unwrap().unwrap();
		$('#clearos_dropup a.ci-ClearOS').hide();

		$('.menuleft a.foundation_home').parent('li').addClass('cfli');
		$('.menuright a.clear_center_logo').parent('li').addClass('ccli');

		$('.mod-box.no-top-margin').parent().parent().parent().addClass('no-top-margin');


		$('table.uk-table').wrap('<div class="table-responsive"></div>'); 
		$('table.table').wrap('<div class="table-responsive"></div>'); 

		$(".TabContent li a").click(function(){
			$(".TabContent li").removeClass("uk-active");
			$(this).parent().addClass("uk-active");
		});

		$('.customers_Page a.pull-right').click(function(){
			var text  = $(this).text();
			if(text.match(/More/)){
				var res = text.replace("More", "Less");
				$(this).text(res);
			}
			if(text.match(/Less/)){
				var res = text.replace("Less", "More");
				$(this).text(res);
			}
			$(this).prev('.customerExpand').slideToggle();
		});





		// add icon to menu
		$('.menu-dropdown li a.level1, .menu-dropdown li a.level2, .menu-dropdown li a.level3, .menu-dropdown li a.level4, #offcanvas .canvas-menu a').each(function() {
			var drop_m = $(this);
			if(typeof(drop_m.attr('class')) != 'undefined'){
				 var all = drop_m.attr('class').split(' ');
				for (var i = 0; i < all.length; ++i) {
					var cls = all[i];
					if ((cls.indexOf('icon-') == 0) || (cls.indexOf('7s-') == 0)) {
						drop_m.prepend('<i class="uk-' + cls + '"></i>');
						drop_m.removeClass(cls).addClass('has-icon');
					}
				}
			}
	      
	    });

	    // article meta-data
	    $('.email span.icon-envelope').removeClass('icon-envelope').addClass('uk-icon-envelope-o');
	    $('.print span.icon-print').removeClass('icon-print').addClass('uk-icon-print');

		// style the zoo blog buttons
		$('p.links').each(function() {
		    var $this = $(this);
		    $this.children().eq(0).addClass("uk-button uk-button-color");
		    $this.children().eq(1).addClass("uk-button uk-button-default");
		});		

		//modules styling
		$('.mod-color').closest('section').addClass('at-mod-color');
		$('.mod-dark').closest('section').addClass('at-mod-dark');
		$('.mod-overlay').closest('.at-parent').addClass('overlay-margin');
		$('.mod-color').parents('.uk-modal-dialog').addClass('mod-color');
		$('.mod-dark').parents('.uk-modal-dialog').addClass('mod-dark');

		$('.mod-box.mod-overlay').children('div').addClass('custom-module');
		$('.mod-overlay.mod-padding').children('.custom-module').addClass('mod-padding');

		// toggles
		if ($('.showhide li').length > 0) {
		var showhide = $('.showhide li');
		  showhide.each(function () {
		  var q = $(this);
		  
				if (q.children('div').css('display') === 'block') {
					q.children('h3').prev().addClass('uk-icon-minus');
				} else if (q.children('div').css('display') === 'none') {
					q.children('h3').prev().addClass('uk-icon-plus');;
				}

				q.children('h3').click(function () {
					q.children('div').slideToggle(700, 'easeOutQuint', function () {
					if (q.children('div').css('display') === 'block') {
					  q.children('h3').prev().addClass('uk-icon-minus').removeClass('uk-icon-plus');

					} else if (q.children('div').css('display') === 'none') {
					  q.children('h3').prev().addClass('uk-icon-plus').removeClass('uk-icon-minus');
					}

					});
				});
			});
		};

		// add styling to images
		$('.comment-head img, .zoo-comments-list img').each(function() {
		    var $this = $(this);
		    $this.addClass("uk-thumbnail");
		});

		// blog tags
		$('.element-itemtag a, .zoo-tagcloud a, .moduleItemTags a, p.taxonomy a, div.tags a, .k2TagCloudBlock a').each(function(i, elem) {
		    var $this = $(this);
		    var html = $(elem).html();
		    var final = '<span class="tag">' + html + '</span>';
		    $this.html(final );
		    $this.addClass("tag-body");	   
		});

		//block-number
		$('.block-number').each(function(i, elem){
		    var html = $(elem).html();
		    var final = '<span class="digit">' + html + '</span><span class="bottom"></span>';
		    $(this).html(final );
		});

		//event date/time block
		$('.uk-event-time').each(function(i, elem){
		    var html = $(elem).html();
		    var dt =  html.split(":");
		    var final = '<span class="uk-event-date">' + dt[0] + '</span><span class="uk-event-month">' + dt[1] + '</span>';
		    $(this).html(final );
		    $(this).parent().addClass('uk-event');
		});

		//back to top
		if ($("#totop-scroller").length) {
			$().UItoTop({scrollSpeed: 700, easingType: 'easeOutQuint' });
		}

		// remove empty p tags
		$('p').each(function() {
		    var $this = $(this);
		    if($this.html().replace(/\s|&nbsp;/g, '').length === 0)
		        $this.remove();
		});

		// add icon to widgetkit spotlight
		$('a[data-spotlight] img').each(function(i, elem){
			$(this).load(function() {
				$(this).next('.overlay-default').addClass('uk-icon-plus-circle').css("line-height", $(this).height() + "px");
			});
		});

		// apply modal-box sizes		
		$('.module.modal-small').each(function() {
		    $(this).closest('.uk-modal-dialog').addClass('md-small');
		});	
		$('.module.modal-large').each(function() {
		    $(this).closest('.uk-modal-dialog').addClass('md-large');
		});	

		// badges
		$('.uk-badge.badge-primary').addClass('uk-badge');
		$('.uk-badge.badge-danger').addClass('uk-badge-danger').parent().removeClass('badge-danger');
		$('.uk-badge.badge-success').addClass('uk-badge-success').parent().removeClass('badge-success');
		$('.uk-badge.badge-warning').addClass('uk-badge-warning').parent().removeClass('badge-warning');


		$('.deepest > .uk-badge').each(function() {
	        var all = $(this).parent().attr('class').split(' ');
	        for (var i = 0; i < all.length; ++i) {
	            var bdg = all[i];
	            if (bdg.indexOf('deepest') != 0) {
	                $(this).text(bdg);
	            }
	        }
	    });

		//yoo vertical menu fix
		$('.mod-box.colored li.level2.active').closest('div').addClass('open-menu');
		$('.mod-box .menu-sidebar a.level1 > span, .mod-box .menu-sidebar span.level1 > span').append('<i class="uk-float-right uk-icon-chevron-right"></i>');
		
		
		
		/*
			Magic Line Start
		*/
		var $el,$current_index, leftPos, newWidth;
    
		
		
		/* Add Magic arrow markup via JavaScript, because it ain't gonna work without */
		jQuery("#menu").append("<span id='magic-arrow'>Arrow</span>");
		
		/* Cache it */
		var $magicLine = jQuery("#magic-arrow");

		jQuery("#menu").find("ul.menu-dropdown").hover(function() {
			$el = jQuery(this);
			$current_index = $el.index();
			leftPos = $el.position().left;
			newWidth = $el.width();
			$magicLine.removeClass('magic_arrow_0 magic_arrow_1 magic_arrow_2 magic_arrow_3 magic_arrow_4').addClass("magic_arrow_"+$current_index);
			$magicLine.stop().animate({
				left: leftPos,
				width: newWidth
			});
		}, function() {
			$magicLine.stop().animate({
				left: $magicLine.data("origLeft"),
				width: $magicLine.data("origWidth")
			});    
		});
		
		/*
			Magic Line End
		*/
		var $logos = $(".data-logo"),
		_window = $(window),
		windowWidth,
		windowHeight,
		duration,
		offset,
		topStart,
		topEnd,
		start = 0;
		var animated = true;
		
		function init1() {
			windowWidth = _window.width(),
			windowHeight = _window.height(),
			duration = windowHeight * 0.9,
			offset = $('.data-logos').offset().top,
			topStart = offset - windowHeight - $('.data-logos').height(),
			topEnd = offset + $('.data-logos').height(),
			start = offset - windowHeight / 0.6;
		}

		function updateLogos() {
			window.requestAnimationFrame(updateLogos);
			scrollY = _window[0].scrollY;
			if (scrollY >= topStart && scrollY < topEnd) {
				for (var i = 0; i < $logos.length; i++) {
					if (scrollY < start + $logos[i].duration) {

						if ($logos[i].startX < 0) {
							newX = $logos[i].startX - ($logos[i].velocityX * (scrollY - start));
						} else {
							newX = $logos[i].startX - ($logos[i].velocityX * (scrollY - start));
						}

						newY = $logos[i].startY - ($logos[i].velocityY * (scrollY - start));
						$($logos[i]).css({
							'transform': 'translate3d(' + newX + 'px, ' + newY + 'px, 0)',
							'-webkit-transform': 'translate3d(' + newX + 'px, ' + newY + 'px, 0)',
							'-moz-transform': 'translate3d(' + newX + 'px, ' + newY + 'px, 0)'
						});
					}
				}
			}
		}

		/* Laptop logos animation Starts*/
		if($(".data-logos").length > 0){
			// var animated = !$('.whatisdomo-container').hasClass('no-animation');
			
			if (animated) {

				init1();

				_window.on('resize load', function() {
					init1();
				});

			}

			$logos.each(function(i) {
				$logos[i].startX = (Math.random() < 0.5 ? -1 : 1) * (windowWidth * 1.7);
				$logos[i].startY = (Math.random() < 0.5 ? -1 : 1) * ((i * 0.03) * 1000) - 400;
				$logos[i].currentX = $logos[i].startX;
				$logos[i].currentY = $logos[i].startY;
				$logos[i].duration = Math.random() * duration + duration;
				$logos[i].velocityX = $logos[i].startX / $logos[i].duration;
				$logos[i].velocityY = $logos[i].startY / $logos[i].duration;

				$(this).css({
					'transform': 'translate3d(' + $logos[i].startX + 'px, ' + $logos[i].startY + 'px, 0)',
					'-webkit-transform': 'translate3d(' + $logos[i].startX + 'px, ' + $logos[i].startY + 'px, 0)',
					'-moz-transform': 'translate3d(' + $logos[i].startX + 'px, ' + $logos[i].startY + 'px, 0)',
					'-ms-transform': 'translate3d(' + $logos[i].startX + 'px, ' + $logos[i].startY + 'px, 0)'
				});
			});

			var scrollY = 0;
			var newX = 0;
			var newY = 0;
			var goahead = true;
			var scrollCount = 0;
			var timeoutCount = 0;
			if (animated) {
				updateLogos();
			}

			
		}
		/* Laptop logos animation ends*/
		 
		$(".uk-modal-close, #video-modal .uk-close").on("click", function() {
			$("#video-modal iframe").attr("src", jQuery("#video-modal iframe").attr("src"));
		});
				
		
		
		 
		
		
	});

		$.onMediaQuery('(min-width: 960px)', {
			init: function() {
				if (!this.supported) this.matches = true;
			},
			valid: function() {
				$.matchWidth('grid-block', '.grid-block', '.grid-h').match();
				$.matchHeight('main', '#maininner, #sidebar-a, #sidebar-b').match();
				$.matchHeight('top-a', '#top-a .grid-h', '.deepest').match();
				$.matchHeight('top-b', '#top-b .grid-h', '.deepest').match();
				$.matchHeight('bottom-a', '#bottom-a .grid-h', '.deepest').match();
				$.matchHeight('bottom-b', '#bottom-b .grid-h', '.deepest').match();
				$.matchHeight('bottom-c', '#bottom-c .grid-h', '.deepest').match();
				$.matchHeight('innertop-a', '#innertop-a .grid-h', '.deepest').match();
				$.matchHeight('innertop-b', '#innertop-b .grid-h', '.deepest').match();
				$.matchHeight('innerbottom-a', '#innerbottom-a .grid-h', '.deepest').match();
				$.matchHeight('innerbottom-b', '#innerbottom-b .grid-h', '.deepest').match();
			},
			invalid: function() {
				$.matchWidth('grid-block').remove();
				$.matchHeight('main').remove();
				$.matchHeight('top-a').remove();
				$.matchHeight('top-b').remove();
				$.matchHeight('bottom-a').remove();
				$.matchHeight('bottom-b').remove();
				$.matchHeight('bottom-c').remove();
				$.matchHeight('innertop-a').remove();
				$.matchHeight('innertop-b').remove();
				$.matchHeight('innerbottom-a').remove();
				$.matchHeight('innerbottom-b').remove();
			}
		});

		var pairs = [];

		$.onMediaQuery('(min-width: 480px) and (max-width: 959px)', {
			valid: function() {
				$.matchHeight('sidebars', '.sidebars-2 #sidebar-a, .sidebars-2 #sidebar-b').match();
				pairs = [];
				$.each(['.sidebars-1 #sidebar-a > .grid-box', '.sidebars-1 #sidebar-b > .grid-box', '#top-a .grid-h', '#top-b .grid-h', '#bottom-a .grid-h', '#bottom-b .grid-h', '#innertop .grid-h', '#innerbottom .grid-h', '#bottom-c .grid-h', '#bottom-d .grid-h'], function(i, selector) {
					for (var i = 0, elms = $(selector), len = parseInt(elms.length / 2); i < len; i++) {
						var id = 'pair-' + pairs.length;
						$.matchHeight(id, [elms.get(i * 2), elms.get(i * 2 + 1)], '.deepest').match();
						pairs.push(id);
					}
				});
			},
			invalid: function() {
				$.matchHeight('sidebars').remove();
				$.each(pairs, function() { $.matchHeight(this).remove(); });
			}
		});

		$.onMediaQuery('(max-width: 767px)', {
			valid: function() {
				var header = $('#header-responsive');
				if (!header.length) {
					header = $('<div id="header-responsive"/>').prependTo('#header');
					$('#logo').clone().removeAttr('id').addClass('logo').appendTo(header);
					$('#at-navbar').clone().removeAttr('id').addClass('at-navbar').appendTo(header);
					$('#header-right').clone().removeAttr('id').addClass('header-right').appendTo(header);
				}
			}
		});


		// trigger fixed header only for large screens
		$.onMediaQuery('(min-width: 768px)', {
			valid: function() {
				$(document).ready(function(){
					$(".fixed-header").sticky({ topSpacing: 0 });
			    });
			}
		});
	
})(jQuery);

jQuery(window).load(function(){
	if(jQuery('.TeamLeaders').length>0 && jQuery('.TeamLeaders').find('.uk-panel-box.uk-panel-person').length>0){
		$container = jQuery('.TeamLeaders');
		
		var max_height = 0;
		jQuery($container).each(function(index, element) {
			$this = jQuery(this);
			jQuery(this).find('.uk-panel-box.uk-panel-person').each(function(index, element) {
			
				if(jQuery(this).height() > max_height)
				{
					max_height = parseInt(jQuery(this).height());
				}
			});
		});
		//window.setTimeout(function(){
			jQuery($container).find('.uk-panel-box.uk-panel-person').css('min-height', max_height+'px');
		//},1000);
	}
	
});
// css helper
(function($) {
var data = [
    {str:navigator.userAgent,sub:'Chrome',ver:'Chrome',name:'chrome'},
    {str:navigator.vendor,sub:'Apple',ver:'Version',name:'safari'},
    {prop:window.opera,ver:'Opera',name:'opera'},
    {str:navigator.userAgent,sub:'Firefox',ver:'Firefox',name:'firefox'},
    {str:navigator.userAgent,sub:'MSIE',ver:'MSIE',name:'ie'}];
for (var n=0;n<data.length;n++)	{
    if ((data[n].str && (data[n].str.indexOf(data[n].sub) != -1)) || data[n].prop) {
        var v = function(s){var i=s.indexOf(data[n].ver);return (i!=-1)?parseInt(s.substring(i+data[n].ver.length+1)):'';};
        $('html').addClass(data[n].name+' '+data[n].name+v(navigator.userAgent) || v(navigator.appVersion)); break;			
    }
}
})(jQuery);


/*UITop jquery*/
(function(a){a.fn.UItoTop=function(b){var c={text:"",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"};var d=a.extend(c,b);var e="#"+d.containerID;var f="#"+d.containerHoverID;a("body").append('<a href="#" class="uk-icon-angle-up" title="" id="'+d.containerID+'">'+d.text+"</a>");a(e).hide().click(function(){a("html, body").animate({scrollTop:0},d.scrollSpeed,d.easingType);a("#"+d.containerHoverID,this).stop().animate({opacity:0},d.inDelay,d.easingType);return false}).prepend('<span id="'+d.containerHoverID+'"></span>').hover(function(){a(f,this).stop().animate({opacity:1},600,"linear")},function(){a(f,this).stop().animate({opacity:0},700,"linear")});a(window).scroll(function(){var b=a(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){a(e).css({position:"absolute",top:a(window).scrollTop()+a(window).height()-50})}if(b>d.min)a(e).fadeIn(d.inDelay);else a(e).fadeOut(d.Outdelay)})}})(jQuery);


// Sticky Plugin v1.0.0 for jQuery
(function($){var defaults={topSpacing:0,bottomSpacing:0,className:'is-sticky',wrapperClassName:'sticky-wrapper',center:false,getWidthFrom:''},$window=$(window),$document=$(document),sticked=[],windowHeight=$window.height(),scroller=function(){var scrollTop=$window.scrollTop(),documentHeight=$document.height(),dwh=documentHeight-windowHeight,extra=(scrollTop>dwh)?dwh-scrollTop:0;for(var i=0;i<sticked.length;i++){var s=sticked[i],elementTop=s.stickyWrapper.offset().top,etse=elementTop-s.topSpacing-extra;if(scrollTop<=etse){if(s.currentTop!==null){s.stickyElement.css('position','').css('top','');s.stickyElement.parent().removeClass(s.className);s.currentTop=null}}else{var newTop=documentHeight-s.stickyElement.outerHeight()-s.topSpacing-s.bottomSpacing-scrollTop-extra;if(newTop<0){newTop=newTop+s.topSpacing}else{newTop=s.topSpacing}if(s.currentTop!=newTop){s.stickyElement.css('position','fixed').css('top',newTop);if(typeof s.getWidthFrom!=='undefined'){s.stickyElement.css('width',$(s.getWidthFrom).width())}s.stickyElement.parent().addClass(s.className);s.currentTop=newTop}}}},resizer=function(){windowHeight=$window.height()},methods={init:function(options){var o=$.extend(defaults,options);return this.each(function(){var stickyElement=$(this);var stickyId=stickyElement.attr('id');var wrapper=$('<div></div>').attr('id',stickyId+'-sticky-wrapper').addClass(o.wrapperClassName);stickyElement.wrapAll(wrapper);if(o.center){stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"})}if(stickyElement.css("float")=="right"){stickyElement.css({"float":"none"}).parent().css({"float":"right"})}var stickyWrapper=stickyElement.parent();stickyWrapper.css('height',stickyElement.outerHeight());sticked.push({topSpacing:o.topSpacing,bottomSpacing:o.bottomSpacing,stickyElement:stickyElement,currentTop:null,stickyWrapper:stickyWrapper,className:o.className,getWidthFrom:o.getWidthFrom})})},update:scroller};if(window.addEventListener){window.addEventListener('scroll',scroller,false);window.addEventListener('resize',resizer,false)}else if(window.attachEvent){window.attachEvent('onscroll',scroller);window.attachEvent('onresize',resizer)}$.fn.sticky=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments)}else{$.error('Method '+method+' does not exist on jQuery.sticky')}};$(function(){setTimeout(scroller,0)})})(jQuery);



jQuery(document).ready(function () {
	jQuery('.menu-sidebar .hidden-men').parent('li').remove();
	
	if(typeof jQuery('#sidebar-a .grid-box').offset() !== 'undefined'){

		var footer_length = jQuery('#bottom-block').height() + jQuery('#footerLinks').height() + jQuery('#bottom-c').height() + 120;
		var sidebar_lenght = jQuery('#sidebar-a .grid-box').height() + 120;
		var top_pos = jQuery("#sidebar-a").offset().top;
		var showcase 	= 	jQuery("#showcase").height();	
		var top_pos = top_pos - 40;
		
		jQuery(window).scroll(function () {
			var scroll = jQuery(this).scrollTop();
			
			var sidebar_lenght = jQuery('#sidebar-a .grid-box').height() + 120;
			var top_height = '105px';	
			var stopheight =  jQuery(document).height()-(footer_length+sidebar_lenght);
		});

	}
	



if(typeof jQuery('.MarketplaceLeft').offset() != 'undefined'){
var width_side_bar = jQuery('.MarketplaceLeft').width();

jQuery('.MarketplaceLeft').css('width',(parseInt(width_side_bar))+'px');		
var menutop     = 	parseFloat(jQuery('.MarketplaceLeft').offset().top);
    jQuery(window).scroll(function () {
        
		// side bar sticky
       if(jQuery('.MarketplaceLeft').length>0){
			
			if (jQuery('.MarketplaceLeft').offset()!=null) {

				var top 		= 	jQuery('.MarketplaceLeft').offset().top - parseFloat(jQuery('.MarketplaceLeft').css('margin-top').replace(/auto/, 0));
				var height 		= 	parseFloat(jQuery('.MarketplaceLeft').height());
				var winHeight 	= 	jQuery(window).height();	
				var showcase 	= 	jQuery("#showcase").height();	
				var footerTop 	= 	jQuery('#bottom-block').offset().top ;
				var showcase_bottom 	= 	jQuery('#bottom-block').offset().bottom ;
				var footerheight= 	jQuery('#bottom-block').height();
				
				var gap 		= 	30;
				
				var y 			= 	parseFloat(jQuery(this).scrollTop());
				var active_height = jQuery('.MarketplaceLeft li.active').height();
				var top_gap 	= 	(showcase+gap);
				var top_gap_ 	= 	(winHeight-height-showcase-gap);
				var menubottom	=	parseFloat(winHeight+y-menutop);
				
				if(height>winHeight){
					
					if(menubottom>=height){
						
						if(winHeight+gap+y>=footerTop){
							jQuery('.MarketplaceLeft').addClass('leftsidebarfixed').css({'position':'absolute','bottom':'0px'});
						}else{
							jQuery('.MarketplaceLeft').addClass('leftsidebarfixed').css({'position':'fixed','bottom':'0px'});
						}
						
					}else{
						jQuery('.MarketplaceLeft').removeClass('leftsidebarfixed').css({'position':'static','bottom':'0px','top':'auto'});
					}
				}else{
					
					if(y-gap>showcase){
						if(y+(height+showcase)>footerTop){
							jQuery('.MarketplaceLeft').addClass('leftsidebarfixed').css('top','auto');
							jQuery('.MarketplaceLeft').removeClass('leftsidebarfixed').css({'position':'absolute','bottom':0});
						}else{
							jQuery('.MarketplaceLeft').addClass('leftsidebarfixed').css('top',showcase+'px');
							jQuery('.MarketplaceLeft').addClass('leftsidebarfixed').css('bottom','auto');
							jQuery('.MarketplaceLeft').addClass('leftsidebarfixed').css('position','fixed');
						}
					}else{
						jQuery('.MarketplaceLeft').removeClass('leftsidebarfixed').css({'position':'static','bottom':'auto','top':'auto'});
					}
				}	
			}
		// side bar sticky	
       }
    });

}	

/*
if(typeof jQuery('.MarketplaceLeft').offset() !== 'undefined'){

 var footer_length = jQuery('#bottom-block').height() + jQuery('#footerLinks').height() + jQuery('#bottom-c').height() + 120;

 var sidebar_lenght = jQuery('.MarketplaceLeft').height() + 120;
 var top_height = '70px';
 if(jQuery('#menu .menu.menu-dropdown > li.level1.active').length>0)
 top_height = '120px'

var top_pos = jQuery(".MarketplaceLeftOuter").offset().top - 35;


var top_pos = top_pos - 90;

    jQuery(window).scroll(function () {

        
		// side bar sticky
       if(jQuery('.marketPlacecomponent .MarketplaceLeft').length>0){
			
			if (jQuery('.marketPlacecomponent .MarketplaceLeft').offset()!=null) {
					var top 		= 	jQuery('.marketPlacecomponent .MarketplaceLeft').offset().top - parseFloat(jQuery('.marketPlacecomponent .MarketplaceLeft').css('margin-top').replace(/auto/, 0));
					var height 		= 	jQuery('.marketPlacecomponent .MarketplaceLeft').height();
					var winHeight 	= 	jQuery(window).height();	
					var showcase 	= 	jQuery("#showcase").height();	
					var footerTop 	= 	jQuery('#bottom-block').offset().top - parseFloat(jQuery('#bottom-block').css('margin-top').replace(/auto/, 0));
					var gap 		= 	44;
					// what the y position of the scroll is
					var y 			= 	jQuery(this).scrollTop();

					// whether that's below the form					
					if (y+winHeight >= top+ height+gap && y+winHeight<=footerTop) {	
							
						if(y<showcase+20){
							jQuery('.marketPlacecomponent .MarketplaceLeft').removeClass('leftsidebarfixed').css('top','0px');	
						}else{
							jQuery('.marketPlacecomponent .MarketplaceLeft').addClass('leftsidebarfixed').css('top',winHeight-height-gap +'px');	
						}
					} else if (y+winHeight>footerTop){ 
						jQuery('.marketPlacecomponent .MarketplaceLeft').addClass('leftsidebarfixed').css('top',footerTop-height-y-gap+'px');
					
					}  else  {
						// otherwise remove it
						jQuery('.marketPlacecomponent .MarketplaceLeft').removeClass('leftsidebarfixed').css('top','0px');
					}
				}
			
		// side bar sticky	
       }
    });

}
*/


// leader's menu 16-06-2015 start
if(typeof jQuery('#sidebar-a .menu-sidebar').offset() != 'undefined'){
var width_side_bar = jQuery('#sidebar-a .menu-sidebar').width();

jQuery('#sidebar-a .menu-sidebar').css('width',(parseInt(width_side_bar))+'px');		
var menutop     = 	parseFloat(jQuery('#sidebar-a .menu-sidebar').offset().top);
    jQuery(window).scroll(function () {
        
		// side bar sticky
       if(jQuery('#sidebar-a .menu-sidebar').length>0){
			
			if (jQuery('#sidebar-a .menu-sidebar').offset()!=null) {

				var top 		= 	jQuery('#sidebar-a .menu-sidebar').offset().top - parseFloat(jQuery('#sidebar-a .menu-sidebar').css('margin-top').replace(/auto/, 0));
				var height 		= 	parseFloat(jQuery('#sidebar-a .menu-sidebar').height());
				var winHeight 	= 	jQuery(window).height();	
				var showcase 	= 	jQuery("#showcase").height();	
				var footerTop 	= 	jQuery('#bottom-block').offset().top ;
				var showcase_bottom 	= 	jQuery('#bottom-block').offset().bottom ;
				var footerheight= 	jQuery('#bottom-block').height();
				
				//- parseFloat(jQuery('#bottom-block').css('margin-top').replace(/auto/, 0));
				var gap 		= 	30;
				
				var y 			= 	parseFloat(jQuery(this).scrollTop());
				var active_height = jQuery('#sidebar-a .menu-sidebar li.active').height();
				var top_gap 	= 	(showcase+gap);
				var top_gap_ 	= 	(winHeight-height-showcase-gap);
				var menubottom	=	parseFloat(winHeight+y-menutop);
				
				if(height>winHeight){
					
					if(menubottom>=height){
						
						if(winHeight+gap+y>=footerTop){
							jQuery('#sidebar-a .menu-sidebar').addClass('leftsidebarfixed').css({'position':'absolute','bottom':'0px'});
						}else{
							jQuery('#sidebar-a .menu-sidebar').addClass('leftsidebarfixed').css({'position':'fixed','bottom':'0px'});
						}
						
					}else{
						jQuery('#sidebar-a .menu-sidebar').removeClass('leftsidebarfixed').css({'position':'static','bottom':'0px','top':'auto'});
					}
				}else{
					
					if(y-gap>showcase){
						if(y+(height+showcase)>footerTop){
							jQuery('#sidebar-a .menu-sidebar').addClass('leftsidebarfixed').css('top','auto');
							jQuery('#sidebar-a .menu-sidebar').removeClass('leftsidebarfixed').css({'position':'absolute','bottom':0});
						}else{
							jQuery('#sidebar-a .menu-sidebar').addClass('leftsidebarfixed').css('top',showcase+'px');
							jQuery('#sidebar-a .menu-sidebar').addClass('leftsidebarfixed').css('bottom','auto');
							jQuery('#sidebar-a .menu-sidebar').addClass('leftsidebarfixed').css('position','fixed');
						}
					}else{
						jQuery('#sidebar-a .menu-sidebar').removeClass('leftsidebarfixed').css({'position':'static','bottom':'auto','top':'auto'});
					}
				}	
			}
		// side bar sticky	
       }
    });

}

// leader's menu 16-06-2015 start

jQuery("#sidebar-a .level1 .nav-header").click(function(e){
	e.preventDefault();
	jQuery('html, body').stop().animate({
					'scrollTop': 0,
		}, 800, 'swing', function () {
					
	});			
});


	jQuery(".menu-sidebar li.item1578 ul li").click(function(e){
		e.preventDefault();
		item = jQuery(this).index();
		jQuery(".uk-width-medium-1-4:eq("+item+") span.pull-left a").trigger('click');
		var body = jQuery("html, body");
		body.animate({scrollTop:jQuery(".uk-width-medium-1-4:eq("+item+") span.pull-left a").offset().top-700}, '500', 'swing', function() { 
		});
	});
	 jQuery(".marketplace_toggle > span").click(function() {
	
		 jQuery(this).toggleClass('active');
		 jQuery(this).siblings('ul.sub_menu').slideToggle();
	});

 	jQuery("ul.menu-sidebar li a").click(function(){
	    jQuery(window).scrollTop(jQuery(window).scrollTop()+1);
	});

	jQuery(".sb_scroll .marketPlacecomponent  ul.MarketplaceLeft li a").click(function(e){	
		var id  = jQuery(this).attr('id');
		if(typeof(id) != 'undefined'){
			var win_width = jQuery(window).width(); 
			if(win_width > 767){
				window.location.hash = id;
					jQuery('html, body').stop().animate({
					'scrollTop': 0
				}, 800, 'swing', function () {
					
				});				
			}else{
				//alert(jQuery('.Marketplaceright').offset().top);
				jQuery('html, body').stop().animate({
					'scrollTop': jQuery('.Marketplaceright').offset().top-100,
				}, 800, 'swing', function () {
					
				});		

				
			}
			

				e.preventDefault();		
		}else{
			window.location.hash = '';	

		}
		
		
	});
	
	jQuery("#marketplace  ul.MarketplaceLeft li a").click(function(e){	
		var left_class  = jQuery(this).attr('class');
		if(typeof(left_class) != 'undefined' && left_class == 'market_left_menu'){
			jQuery('html, body').stop().animate({
				'scrollTop': jQuery('#marketplace').offset().top-225,
			}, 800, 'swing', function () {
				
			});
		}
	});


	jQuery(".MarketplaceLeftOuter ul.MarketplaceLeft li a").click(function(e){			
			jQuery('html, body').stop().animate({
				'scrollTop': jQuery('.MarketplaceLeftOuter').offset().top-225,
			}, 800, 'swing', function () {
				
			});
		
	});



 	if(jQuery("#tline-content").length>0){
		jQuery("body").addClass('tlinecontent');
	}

	if(jQuery("#guru_tabs #guru_tabs_navs").length>0){

		jQuery("#guru_tabs #guru_tabs_navs li:first").addClass('ui-tabs-active').find('a').addClass('active');
		$tab_id = jQuery("#guru_tabs #guru_tabs_navs li:first").attr('id').replace('li-','');
		jQuery(".tab-content").find("#"+$tab_id).show();
	}

	jQuery("#innertop-a .sprocket-mosaic-filter ul li").click(function(){
	  jQuery("#innertop-a .module.mod-box").css('min-height',0);
	});


	
	
	jQuery(".sprocket-mosaic-container a").attr('target','_blank');
	
	jQuery("#bottom-b .module-title").click(function(e) {
        jQuery("#bottom-b .menu-sidebar").slideDown(500,function(){
			
		});
		if(jQuery("#bottom-b .menu-sidebar").css('display') == "block")
		{
			slideToElement("#bottom-block");
			jQuery("#bottom-b").addClass('show-footer');
		}
		
    });
	
	jQuery( "#bottom-b" ).mouseleave(function() {
		hideFooterMenu();
	});

	jQuery("#main").mouseenter(function(e) {
		hideFooterMenu();
    });

	

});
function hideFooterMenu()
{
	jQuery("#bottom-b .menu-sidebar").slideUp();
	jQuery("#bottom-b").removeClass('show-footer');
}
function showFooterMenu()
{
	jQuery("#bottom-b .menu-sidebar").slideDown();
}
function slideToElement(element)
{
	jQuery("html, body").animate({scrollTop: jQuery(element).offset().top-70 }, 500,function(){
		
	});
}
var elementPriceHeight = 0;
var elementPriceHeightCustomer = 0;
jQuery(document).ready(function(e) {
	
	// hide load time hidden_block
	jQuery("#system .hidden_block").hide(400);

	jQuery('.comparehead img').click(function(){
		var data_id  = jQuery(this).attr('data-id');
		jQuery("."+data_id).trigger("click");
	});	
	
	jQuery('.menu-sidebar ul.nav-child li a').click(function(){		
		jQuery('.menu-sidebar ul.nav-child li a').removeClass('active');
		jQuery('.menu-sidebar ul.nav-child li a').removeClass('current');
		jQuery('.menu-sidebar li a').removeClass('current');
		jQuery('.menu-sidebar li a').removeClass('active');
		//jQuery(this).addClass('active');
		jQuery(this).addClass('current');
		
	});
	
	

	 
	jQuery('.leadership_bar').parent().addClass('leadershipScroll');


	jQuery("a.color_thumb").mouseover(function(){
	current_src = jQuery(this).find('img').attr('src');
	jQuery(this).find('img').attr('src',current_src.replace('(B&W)','(Color)'));
	}).mouseout(function(){
		current_src = jQuery(this).find('img').attr('src');
		jQuery(this).find('img').attr('src',current_src.replace('(Color)','(B&W)')); 
	});
	jQuery('.expand_btn').click(function(){
		jQuery(this).parent().parent().next('.expand_section').slideToggle();
	}); 

	jQuery('#plexmedia_btn').click(function(){
		jQuery('#serviio_feature').hide();
		jQuery('#owncloud_feature').hide();
		jQuery('#plex_feature').slideToggle();
	}); 

	
	jQuery('#serviiomedia_btn').click(function(){
		jQuery('#owncloud_feature').hide();
		jQuery('#plex_feature').hide();
		jQuery('#serviio_feature').slideToggle();
	}); 
	

	jQuery('#photomedia_btn').click(function(){
		jQuery('#plex_feature').hide();
		jQuery('#serviio_feature').hide();
		jQuery('#owncloud_feature').slideToggle();
	}); 

	
	var class_changed	=	0;
	jQuery('#pt_toggle, .overview_section_toggle_btn').click(function(){
		if(class_changed==0){
			jQuery(".overview_section_toggle_btn").addClass('active').find('i').removeClass('fsm-list fsm-th-large').addClass('fsm-th-large');
			class_changed	=	1;
		}else{
			jQuery(".overview_section_toggle_btn").removeClass('active').find('i').removeClass('fsm-list fsm-th-large').addClass('fsm-list');
			class_changed	=	0;
		}	
		jQuery('#campare_block').slideToggle();
		
	}); 
	
	// for clearos-7-community page start
	var display_all	=	0;
	jQuery(".flipbox a").click(function(e) {
		e.preventDefault();
		if(display_all==0){
			if(jQuery(this).closest('.flipbox').hasClass('selected'))
			{

				jQuery(this).closest('.flipbox').removeClass('selected');
				jQuery("#system .hidden_block").hide(200, function() {
   		 		var system_height = jQuery("#maininner").height();
   		 		jQuery('#sidebar-a').css('min-height',parseInt(system_height)+parseInt(38));
 			 });
				return false;
			}
			else
			{
				jQuery('.uk-grid .flipbox').removeClass('selected');
				jQuery(this).closest('.flipbox').addClass('selected');
			}
			var id_to_show = jQuery(this).closest('.flipbox').attr('data-target-id');
			jQuery("#system .hidden_block").hide(200,function(){
				
			})
			jQuery("#"+id_to_show).show(400, function() {
   		 		var system_height = jQuery("#maininner").height();
   		 		jQuery('#sidebar-a').css('min-height',parseInt(system_height)+parseInt(38));
 			});
			jQuery('html,body').animate({
				scrollTop: jQuery(".sectionToggle").offset().top-125},
			'slow');
		}else{
			jQuery('.flipbox').removeClass('selected');
			id_to_scroll 	=	jQuery(this).parent().addClass('selected').attr('data-target-id');
			jQuery('html,body').animate({
				scrollTop: jQuery("#"+id_to_scroll).offset().top-110},
			'slow');
		}
		
    });

	var display_all	=	0;
	jQuery(".next_section").click(function(e) {
		if(display_all==0)
		{
			
			var id_to_show = jQuery(this).attr('data-target-id');
			jQuery('.flipbox').removeClass('selected');
			jQuery(".sectionToggle .flipbox").each(function(index, element) {
				if(jQuery(this).attr('data-target-id') == id_to_show)
				{
					jQuery(this).addClass('selected');
				}
			});
			jQuery("#system .hidden_block").hide(200,function(){
				
			})
			jQuery("#"+id_to_show).show(400, function() {
				var system_height = jQuery("#maininner").height();
				jQuery('#sidebar-a').css('min-height',parseInt(system_height)+parseInt(38));
			});
			jQuery('html,body').animate({
				scrollTop: jQuery(".sectionToggle").offset().top-125},
			'slow');
			
		}
		else		
		{
			jQuery('.flipbox').removeClass('selected')
			
			id_to_scroll 	= jQuery(this).attr('data-target-id');
			jQuery('.flipbox[data-target-id="'+id_to_scroll+'"]').addClass('selected');
			jQuery('html,body').animate({
				scrollTop: jQuery("#"+id_to_scroll).offset().top-110},
			'slow');
		}
		
		
		
    });

	jQuery('.section_toggle_btn').click(function(e){
		
		jQuery('.flipbox').removeClass('selected');
		if(display_all==0){
			window.location.hash = 'viewall';
			jQuery(this).addClass('active').find('i').removeClass('fsm-list fsm-th-large').addClass('fsm-th-large');
			jQuery("#system .hidden_block").show(400);
				jQuery('html,body').animate({
					scrollTop: jQuery(".sectionToggle").offset().top-125},
				'slow');
			display_all	=	1;	
			jQuery('.flipbox:eq(0)').addClass('selected');
		}else{
			window.location.hash = '';
			jQuery(this).removeClass('active').find('i').removeClass('fsm-list fsm-th-large').addClass('fsm-list');
			jQuery("#system .hidden_block").hide(400);
				jQuery('html,body').animate({
					scrollTop: jQuery(".sectionToggle").offset().top-125},
				'slow');
			display_all	=	0;
		}

		
		e.preventDefault();

	});
	
	jQuery('.prev_section').click(function(e){
		
		e.preventDefault();
		jQuery('.flipbox').removeClass('selected');
		if(display_all==0){
			//window.location.hash = 'viewall';
			jQuery(this).addClass('active').find('i').removeClass('fsm-list fsm-th-large').addClass('fsm-th-large');
			jQuery("#system .hidden_block").show();
			jQuery('html,body').scrollTop(jQuery(this).offset().top-125); 
			display_all	=	1;	
			jQuery('.flipbox:eq(0)').addClass('selected');
		}else{
			// window.location.hash = '';
			jQuery(this).removeClass('active').find('i').removeClass('fsm-list fsm-th-large').addClass('fsm-list');
			jQuery("#system .hidden_block").hide();
			jQuery('html,body').scrollTop(jQuery(this).offset().top-125); 
			display_all	=	0;
		}
	});

	jQuery('.price_toggle').click(function(){
		var pricingId = jQuery(this).attr('data-id');
		jQuery('#'+pricingId+' .default_configuration').show('fast');
		jQuery('.hide_pricing').hide('fast');
		jQuery('#' + pricingId).slideToggle('fast',function(){

			jQuery('html,body').animate({
				scrollTop: jQuery('#' + pricingId).offset().top-125},
			'slow',resizeBoxMaxMin(jQuery('#' + pricingId)));
			var system_height = jQuery("#maininner").height();
   		 	jQuery('#sidebar-a').css('min-height',parseInt(system_height)+parseInt(38));
		});
		
		jQuery('.pricing .price-col').removeClass('active');
		jQuery(this).parent().parent().addClass('active');
		
	}); 
	
	jQuery('.price_dropdown_toggle').click(function(){
		var dropdown_toggle_id = jQuery(this).attr('data-id');
		var parent_div_id = jQuery(this).parent().parent().parent().parent().parent().attr('id');
		jQuery('#'+parent_div_id+' .default_configuration').hide('explode');
		jQuery('.hide_dropdown').hide('explode');
		jQuery('#' + dropdown_toggle_id).show('explode',function() {
   		 		var system_height = jQuery("#maininner").height();
   		 		jQuery('#sidebar-a').css('min-height',parseInt(system_height)+parseInt(38));
 			 });
	}); 
	
	
	setInterval(function(){
		resizeBoxMaxMin();
		//console.log(jQuery('#compare_all_models .compare_table .price-tag').height());
	},3000);
	
	
	var elementPricePosition  = '';
	
	jQuery(".uk-button").click(function(e) {
		
		 if(!jQuery('#compare_all_models').attr('data-offsettop') && jQuery('#compare_all_models').html())
		 {
			 if(jQuery('#compare_all_models').css('display') != 'none')
			 {
				setTimeout(function(){
					jQuery('#compare_all_models').attr('data-offsettop',jQuery('#compare_all_models .compare_table .price-tag').offset().top);
					window.elementPriceHeight = jQuery('#compare_all_models').attr('data-offsettop');
				},400);
			 }
		 }
		 if(!jQuery('#customer_block').attr('data-offsettop') && jQuery('#customer_block').html())
		 {
			 if(jQuery('#customer_block').css('display') != 'none')
			 {
				  setTimeout(function(){
					jQuery('#customer_block').attr('data-offsettop',jQuery('#customer_block .compare_table .price-tag').offset().top);
					window.elementPriceHeightCustomer = jQuery('#customer_block').attr('data-offsettop');
				  },400);
			 }
		 }
		 setTimeout(function(){
			 jQuery('.compare_table .price-tag').each(function(index, element) 
			 {
				jQuery(this).css('width',jQuery(this).closest('.price-col').outerWidth());
			 });
		},400);
		
		 
		 
    });

		
	jQuery(window).scroll(function(){
		
		if(elementPriceHeight > 0 && (!jQuery("#system .section_toggle_btn").hasClass('active')))
		{

			jQuery('#compare_all_models .compare_table .price-tag').each(function(index, element) {   
				          
				if((jQuery(window).scrollTop() + 270 > elementPriceHeight) && (jQuery(window).scrollTop() < (parseInt(elementPriceHeight) + parseInt(jQuery('#compare_all_models').height()) - parseInt(620) )))
				{
					if(!jQuery('#compare_all_models .compare_table').attr('data-price_hidden'))
					{
						jQuery(this).css('width',jQuery(this).closest('.price-col').outerWidth());
						containerwidth	=	jQuery(this).closest('.price-col').outerWidth();
						jQuery(this).prev('.price-head').css({'width':containerwidth,'padding-left':0,'padding-right':0});
						jQuery('#compare_all_models .compare_table .price-tag').css({'position':'fixed'}).css('top','265px');	
						jQuery('#compare_all_models .compare_table .price-head').css({'position':'fixed'}).css('top','113px');	
					}
				}
				else 
				{
					
					jQuery(this).css('width',jQuery(this).closest('.price-col').outerWidth());
					// jQuery('#compare_all_models .compare_table .price-tag').css('position','relative').css('top','0');
					jQuery('#compare_all_models .compare_table .price-tag,#compare_all_models .compare_table .price-head').css('position','relative').css('top','0');
				} 
				if((jQuery(window).scrollTop() >= (parseInt(elementPriceHeight) + parseInt(jQuery('#compare_all_models').height()) - parseInt(620) )))
				{
					jQuery('#compare_all_models .compare_table').attr('data-price_hidden','yes');
					// jQuery('#compare_all_models .compare_table .price-tag').hide();
					jQuery('#compare_all_models .compare_table .price-tag,#compare_all_models .compare_table .price-head').hide();
				}
				if((jQuery(window).scrollTop() <= (parseInt(elementPriceHeight) + parseInt(jQuery('#compare_all_models').height()) - parseInt(720) )))
				{
					jQuery('#compare_all_models .compare_table').removeAttr('data-price_hidden');
					jQuery('#compare_all_models .compare_table .price-tag').show();
					jQuery('#compare_all_models .compare_table .price-tag,#compare_all_models .compare_table .price-head').show();
				}
			});
		}
	});


	// without button


	setTimeout(function(){
		if(jQuery('#campare_block .compare_table .price-tag').length>0){
			elementPricePosition = jQuery('#campare_block .compare_table .price-tag:eq(0)').offset();
			window.elementPriceHeight = elementPricePosition.top;
		}
	},3000);
	jQuery('#compareedition-toggle').click(function(){
		jQuery(this).toggleClass('oc');
		jQuery('#compareedition').toggle(function(){				
			if(jQuery('#campare_block .compare_table .price-tag').length>0){
				elementPricePosition = jQuery('#campare_block .compare_table .price-tag:eq(0)').offset();
				window.elementPriceHeight = elementPricePosition.top;
			}
		});
	});

	jQuery('#compareedition .compareedition .price-col.uk-nbfc.blue_col').remove();
	
	jQuery(window).scroll(function(){
		
		if(jQuery("#compareedition").length>0){
			if(!jQuery("#compareedition").is(":visible")){
				return false;
			}
		}
		
		if(elementPriceHeight > 0   && (!jQuery("#system .sectionToggle div.flipbox ").hasClass('selected') && !jQuery("#system .section_toggle_btn").hasClass('active')))
		{	
			jQuery('#campare_block .compare_table .price-tag').each(function(index, element) {   
				
				if((jQuery(window).scrollTop() + 100 > elementPriceHeight) && (jQuery(window).scrollTop() < (parseInt(elementPriceHeight) + parseInt(jQuery('#campare_block').height()) - parseInt(400) )))
				{
					if(!jQuery('#campare_block .compare_table').attr('data-price_hidden'))
					{
						jQuery(this).css('width',jQuery(this).closest('.price-col').outerWidth());
						jQuery('#campare_block .compare_table .price-tag').css('position','fixed').css('top','75px');	
					}
				}
				else {
					jQuery(this).css('width',jQuery(this).closest('.price-col').outerWidth());
					jQuery('#campare_block .compare_table .price-tag').css('position','relative').css('top','0');
				} 
				if((jQuery(window).scrollTop() >= (parseInt(elementPriceHeight) + parseInt(jQuery('#campare_block').height()) - parseInt(400) )))
				{
					jQuery('#campare_block .compare_table').attr('data-price_hidden','yes');
					jQuery('#campare_block .compare_table .price-tag').hide();
				}
				if((jQuery(window).scrollTop() <= (parseInt(elementPriceHeight) + parseInt(jQuery('#campare_block').height()) - parseInt(500) )))
				{
					jQuery('#campare_block .compare_table').removeAttr('data-price_hidden');
					jQuery('#campare_block .compare_table .price-tag').show();
				}
			});
		}
	});
	
	setTimeout(function(){
		if(jQuery('#customer_block .compare_table .price-tag').length>0){
			elementPriceHeightCustomer = jQuery('#customer_block .compare_table .price-tag').offset();
			 window.elementPriceHeightCustomer = elementPricePosition.top;
		}
	},3000);
	

	
	
	jQuery(window).scroll(function(){
		
		if(elementPriceHeightCustomer > 0)
		{
			jQuery('#customer_block .compare_table .price-tag').each(function(index, element) {   
				         // console.log( jQuery(this).closest('.price-col').outerWidth() );
				if((jQuery(window).scrollTop() + 100 > elementPriceHeightCustomer) && (jQuery(window).scrollTop() < (parseInt(elementPriceHeightCustomer) + parseInt(jQuery('#customer_block .compare_table').height()) - parseInt(400) )))
				{
					if(!jQuery('#customer_block .compare_table').attr('data-price_hidden'))
					{
						jQuery(this).css('width',jQuery(this).closest('.price-col').outerWidth());
						
						jQuery('#customer_block .compare_table .price-tag').css('position','fixed').css('top','113px');	
					}
				}
				else 
				{
					jQuery(this).css('width',jQuery(this).closest('.price-col').outerWidth());
					jQuery('#customer_block .compare_table .price-tag').css('position','relative').css('top','0');
				} 
				if((jQuery(window).scrollTop() >= (parseInt(elementPriceHeightCustomer) + parseInt(jQuery('#customer_block .compare_table').height()) - parseInt(400) )))
				{
					jQuery('#customer_block .compare_table').attr('data-price_hidden','yes');
					jQuery('#customer_block .compare_table .price-tag').hide();
				}
				if((jQuery(window).scrollTop() <= (parseInt(elementPriceHeightCustomer) + parseInt(jQuery('#customer_block .compare_table').height()) - parseInt(500) )))
				{
					jQuery('#customer_block .compare_table').removeAttr('data-price_hidden');
					jQuery('#customer_block .compare_table .price-tag').show();
				}
			});
		}
	});


	jQuery("[id^=expand_app_] span").click(function(){
		jQuery(this).parent().toggleClass('expanded');
		type	=	jQuery(this).parent().attr('id').replace('expand_app_','');
		var targetClass = ".expand_app_info_"+type;
		if(jQuery(targetClass).css('display') == 'none')
		{
			jQuery(this).closest('li').find('.my_icon').removeClass('fsm-angle-down').addClass('fsm-angle-up');
		}
		else
		{
			jQuery(this).closest('li').find('.my_icon').removeClass('fsm-angle-up').addClass('fsm-angle-down');
		}
		jQuery(".expand_app_info_"+type).slideToggle();
	});

});




function resizeBoxMaxMin()
{
	// window.setTimeout(function(){
		$container = jQuery('.pricing');
		
		jQuery($container).each(function(index, element) {
			$this = jQuery(this);
			var max_height = 0;
			$this.find(".p-inner").css('min-height', '0');	
			jQuery(this).find('.p-inner').each(function(index, element) {
				
				if(jQuery(this).height() > max_height)
				{
					max_height = parseInt(jQuery(this).height());
					
				}
			});
			$this.find('.p-inner').css('min-height', max_height+'px');
		});
		
	// },3000);
}


jQuery(document).ready(function() {



	
	jQuery(".register_toggle_btn").click(function(e) {
        jQuery("#register_form").slideToggle( "slow", function() {
			var display = jQuery("#register_form").css('display');
			if(display == 'block'){
				jQuery('html, body').stop().animate({
					'scrollTop': jQuery("#register_form").offset().top-225
				}, 800, 'swing', function () {
				});
			}
		});
    });

	$container = jQuery('#spotlight, #spotlight1');
	jQuery($container).each(function(index, element) {
		$this = jQuery(this);
		var max_height = 0;
		jQuery(this).find('.module.mod-box.mod-dark').each(function(index, element) {
		
			if(jQuery(this).height() > max_height)
			{
				max_height = parseInt(jQuery(this).height());
				//alert(max_height);
			}
		});
		jQuery($this).find('.module.mod-box.mod-dark').css('min-height', max_height+'px');
	});
	
	
	jQuery(window).resize(function() {
		jQuery("#magic-arrow").css('margin-left',((jQuery('#menu a.os_logo').width()) / 2-5));	
		$container = jQuery('#spotlight, #spotlight1');
		jQuery($container).each(function(index, element) {
			console.log(123);
			$this = jQuery(this);
			var max_height = 0;
			jQuery(this).find('.module.mod-box.mod-dark').each(function(index, element) {
			
				if(jQuery(this).height() > max_height)
				{
					max_height = parseInt(jQuery(this).height());
					//alert(max_height);
				}
			});
			jQuery($this).find('.module.mod-box.mod-dark').css('min-height', max_height+'px');
		});
	});
	
	
	jQuery(".show_hide_parent").css('cursor','pointer');
	jQuery(".show_hide_children").css('display','none');
	
	jQuery(".show_hide_parent").click(function(e) {
		
		
		$this = jQuery(this);
        var current_status = jQuery(this).data('current_status');
		var hide_class = jQuery(this).data('hide_class');
		if(current_status == 'hide')
		{
			jQuery(this).data('current_status','show');
			jQuery($this).find('i').removeClass('fsm-angle-down').addClass('fsm-angle-up');
			jQuery("."+hide_class).slideDown('fast',function(){
				
			});
			
			
		}
		else
		{
			jQuery(this).data('current_status','hide');
			jQuery($this).find('i').removeClass('fsm-angle-down').addClass('fsm-angle-down');
			jQuery("."+hide_class).slideUp('slow',function(){
			
			});
			
		}
		
		window.setTimeout(function(){
			resizeBoxMaxMin();	
		},500);
    });
	
	
	//Puts hash in variable, and removes the # character	
	if(window.location.hash) {
	  var hash_ = window.location.hash.substring(1); 	
	  jQuery('#'+hash).show();
	  jQuery('[data-target-id="'+hash_+'"]').trigger('click');

		jQuery('.sectionToggle .flipbox').each(function(){
				var data_id  = jQuery(this).attr('data-target-id');
				if(data_id == hash_){
					jQuery(this).addClass('selected');	

				}

		});
		  
	}
	
	jQuery(".sectionToggle .flipbox").click(function(e) {		
		//window.location.hash = $(this).attr("class");
		if(jQuery(this).hasClass('hash_class')){
			var str = jQuery(this).find('a.uk-button').text();
			var res = str.replace(" ", "-"); 
			var res = res.toLowerCase(); ; 
			window.location.hash = res;
			e.preventDefault();
		}else{
			window.location.hash = '';
		}
		
	});

	jQuery(".next_section").click(function(e) {	
		id_to_scroll 	= jQuery(this).attr('data-target-id');
		window.location.hash = id_to_scroll;
		
	});
		
	jQuery('#sidebar-a .menu-sidebar li').click(function(){	
		
		jQuery('#sidebar-a .menu-sidebar li').removeClass('active');
		jQuery('#sidebar-a .menu-sidebar li').find('span').removeClass('active');			
		jQuery('#sidebar-a .menu-sidebar  >  li > div').css('display','none');			
		jQuery(this).addClass('active');
		jQuery(this).closest('span').addClass('active');		
		jQuery(this).find('div').css('display','block');
		//jQuery(this).show('slide', { direction: 'left' }, 1000);
		
	});
		
	var documentHeight = jQuery(document).height();
	var windowHeight = jQuery(window).height();		
	var iframe_size = parseInt(documentHeight)-parseInt(windowHeight);		
	jQuery('#system #blockrandom').height(documentHeight);
		
		
		
	jQuery(".register_toggle_btn_princing").click(function(e) {
       var display = jQuery(".invitation_form").css('display');
		if(display == 'block'){
			jQuery('html, body').stop().animate({
				'scrollTop': jQuery(".invitation_form").offset().top-225
			}, 800, 'swing', function () {
				
			});
		}
		
		
    });
		
	
	// new hash link for ClearBOX Series
	jQuery(".hash2").click(function(e) {	
		var str = jQuery(this).attr('data-id');
		var res = str.toLowerCase(); ; 
		window.location.hash = res;
		e.preventDefault();
		
	});
	
	if(window.location.hash) {	
	  var hash = window.location.hash.substring(1); 
	  jQuery('#'+hash).show();
		  jQuery('.hash2').each(function(){
				var data_id  = jQuery(this).attr('data-id');
				var parent_data_id  = data_id.split("-");
				var parent_data_id  = parent_data_id[0];
				jQuery('.sectionToggle .flipbox').each(function(){
					var data_target_id  = jQuery(this).attr('data-target-id');
					if(data_target_id == parent_data_id){							
						jQuery('#system #'+parent_data_id).css('display','block');
						//jQuery(this).addClass('selected');	

					}

				});
				var top_id = jQuery('a[data-id*="'+hash+'"]').attr('data-target-id');
				if(typeof(top_id) != 'undefined'){
					if(top_id == data_id){
						jQuery(this).parent().parent().addClass('active');
						jQuery('#system #'+data_id).css('display','block');
					}
				}
				if(data_id == hash){
					jQuery(this).parent().parent().addClass('active');
					jQuery(this).trigger('click');	

				}

		});
		
		
		  jQuery('.hash3').each(function(){
				var data_id 			 = jQuery(this).attr('data-id');
				var parent_data 		 = data_id.split("-");
				var top_parent_data_id 	 = parent_data[0];
				var parent_data_id 		 = jQuery(this).attr('data-target-id');
				
				if(data_id == hash){
					jQuery(this).parent().parent().addClass('active');
					jQuery(this).trigger('click');	

				}

		});
		
		if(hash == 'viewall'){
			jQuery('.section_toggle_btn').trigger('click');	
		}
	}
	
	
	if(jQuery('.menu li').hasClass('item2086')){		
		jQuery('.menu li.item1525').hide();		
	} else 	{			
		jQuery('.menu li.item1525').show();
	}
	
	jQuery(window).load(function(){
		jQuery('.find_it_open').trigger('click');
	});
		
		
	//easydiscuss category filter
	var easydiscuss_category = jQuery('#discuss-categories-front_custom').html();
	var easydiscuss_category = jQuery('#discuss-categories-front_custom').remove();
	jQuery(window).load(function(){
		jQuery('#filer_category_custom').html(easydiscuss_category);	
		jQuery('#discuss-categories-front_custom').show();
	});
	

	jQuery(".toolsPage [data-id]").hover(
	    function() {
			jQuery(".newrow .col1-3").removeClass('active');
	    	jQuery(".tools_content").hide();
	    	jQuery(".tools_left img").hide();
	    	jQuery(this).addClass('active');
	    	var data_id = jQuery(this).attr('data-id');
	    	jQuery('#'+data_id).show();	
	    	jQuery('#'+data_id+'_img').show();

	    }, function() {
			jQuery(this).removeClass('active');
			var data_id = jQuery(this).attr('data-id');
		
			jQuery('#'+data_id).hide();	
			jQuery('#'+data_id+'_img').hide();
			
			jQuery("[data-id="+data_id+"]").addClass('active');
				jQuery('#'+data_id).show();	
				jQuery('#'+data_id+'_img').show();
				
				
			/* jQuery(".newrow").mouseleave(function(e) {
				
				var data_id =  jQuery(".newrow .col1-3:nth-child(2)").attr('data-id');
				jQuery("[data-id="+data_id+"]").addClass('active');
				jQuery('#'+data_id).show();	
				jQuery('#'+data_id+'_img').show();
			});	 */
			
	    }
	);	
	
	jQuery(".toolsPage").mouseleave(function(e) {
				
		var data_id =  jQuery(".newrow .col1-3:nth-child(2)").attr('data-id');
		jQuery(".newrow .col1-3").removeClass('active');
    	jQuery(".tools_content").hide();
    	jQuery(".tools_left img").hide();
		jQuery("[data-id="+data_id+"]").addClass('active');
		jQuery('#'+data_id).show();	
		jQuery('#'+data_id+'_img').show();
	});	
	


	jQuery("#main #sidebar-a ul.nav-child li a").click(function(e) {
			if(e.button < 2){
				var hash = jQuery(this).attr('href'); 
				if(hash){
					var res = hash.replace("#","");
					jQuery('[data-target-id="'+res+'"] a.sectionToggleImg').trigger('click');
					jQuery("#main #sidebar-a ul.nav-child li").removeClass('selected');	
					jQuery(this).closest('li').addClass('selected');			
				} 
			}
	
		
	});


	jQuery(".rank_btn").click(function() {
		jQuery("#overviewnewSection").slideToggle('slow');
	});

	jQuery("#close-hello").click(function() {
		jQuery("#hellobar").hide();
		jQuery("body").css('padding-top', 0);
	});
		

	jQuery("#loadapps").click(function() {
		jQuery(this).hide();
		jQuery(".extra_apps").slideToggle();
	});

	
		
		
	 if(window.location.hash  && window.location.hash== '#download-it' || window.location.hash  && window.location.hash== '#marketplace') {
			jQuery('html, body').animate({scrollTop:0});	
	}

	var currentlink = "";
	jQuery(".marketplaceredirect").click(function(){
		currentlink = jQuery(this).attr('href');
		window.location.href= currentlink;
	});

	
});

 jQuery( window ).load(function() {
	if(window.location.hash  && window.location.hash== '#download-it') {
		jQuery('html, body').animate({scrollTop:0});
			 setTimeout(function() {
				jQuery('html,body').animate({
				  scrollTop: jQuery('#download-it').offset().top
				}, 1000);
			}, 1000);
			
			 return false;
	}else if(window.location.hash  && window.location.hash== '#marketplace'){
	jQuery('html, body').animate({scrollTop:0});
		 setTimeout(function() {
			jQuery('html,body').animate({
			  scrollTop: jQuery('#marketplace').offset().top-250
			}, 1000);
		}, 1000);
		 return false;		
	}			 
});





