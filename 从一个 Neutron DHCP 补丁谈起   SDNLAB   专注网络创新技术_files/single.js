jQuery(document).ready(function(a) {
    if (comments_open&&$("#commentform").length>0) {
    	
        function v() {
            $new_comm.show(),
            $new_sucs.show(),
            a("textarea").each(function() {
                this.value = ""
            }),
            o = ""
        }
       // function y() {
       //     w > 0 ? (u.val(w), w--, setTimeout(y, 1e3)) : (u.val(x).attr("disabled", !1).fadeTo("slow", 1), w = 15)
       // }
        var o,
        w,
        x,
        b = a("#commentform"),
        c = "0",
        d = b.attr("action").replace("wp-comments-post.php", ""),
        e = d + "my_sdnlab/wp-content/themes/presscore-pro/img/ajaxload.gif",
        f = d + "my_sdnlab/wp-admin/images/no.png",
        g = d + "my_sdnlab/wp-admin/images/yes.png",
        h = '<div id="ajax-comment-loading">正在提交</div>',
        i = '<div id="error" style="color:red">#</div>',
        j = '">提交成功',
        k = ', 刷新页面之前可以<a rel="nofollow" class="comment-reply-link" href="#edit" onclick=\'return addComment.moveForm1("',
        l = ")'>再编辑</a>",
        m = "取消编辑",
        p = 0,
        q = [],
        r = a("#comments-title"),
        s = a("#cancel-comment-reply-link"),
        t = s.text(),
        u = a("#commentform #submit");
        u.attr("disabled", !1),
        $body = window.opera ? "CSS1Compat" == document.compatMode ? a("html") : a("body") : a("html,body");
        /*a("#reply-title").before(h + i),
        a("#ajax-comment-loading").hide(),
        a("#error").hide();*/

        b.submit(function() {
            if($("#comment").val()=="有话不说，憋着多难受啊!")
            	$("#comment").val("");
            return a("").hide(),
            a("#ajax-comment-loading").slideDown(),
           // u.attr("disabled", !0).fadeTo("slow", .5),
            o && a("#comment").after('<input type="text" name="edit_id" id="edit_id" value="' + o + '" style="display:none;" />'),
            a.ajax({
                url: d,
                data: a(this).serialize() + "&action=ajax_comment&num_comment="+$("#num_comment").text()+'&url='+window.location.href,
                type: a(this).attr("method"),
                error: function(b) {
                	if(b.responseText=="Error: please type a comment."){
                		$(".comments-text").show();
                		$("#comment").val("");
                		$(".comments-text-detail-p").text("请输入评论内容");
                		u.attr("disabled", !1).fadeTo("slow", 1);
                		}
                	else if(b.responseText=="检测到重复评论，您似乎已经提交过这条评论了！"){
                		$(".comments-text").show();
	            		$("#comment").val("");
	            		$(".comments-text-detail-p").text("您似乎已经提交过这条评论了！");
	            		u.attr("disabled", !1).fadeTo("slow", 1);
            		}
                	else if(b.responseText=="你评论的过于频繁，请稍后评论"){
                		$(".comments-text").show();
	            		$("#comment").val("");
	            		$(".comments-text-detail-p").text("您评论的过于频繁，请稍后评论！");
	            		u.attr("disabled", !1).fadeTo("slow", 1);
            		}
                	else if(b.responseText=="抱歉，发表评论您须登录。"){
                		$(".comments-text").show();
	            		$("#comment").val("");
	            		$(".comments-text-detail-p").text("抱歉,您还未登录!！");
	            		u.attr("disabled", !1).fadeTo("slow", 1);
            		}
                	/*,
                    a("#ajax-comment-loading").slideUp(),
                    a("#error").slideDown().html(b.responseText),
                    setTimeout(function() {
                        u.attr("disabled", !1).fadeTo("slow", 1),
                        a("#error").slideUp()
                    },
                    3e3)*/
                },
                success: function(b) {
                    a("#ajax-comment-loading").hide(),
                    a("#commentPreview").empty(),
                    a("#commentform,#respond div.cancel-comment-reply,#respond h2").show(),
                    q.push(a("#comment").val()),
                    a("textarea").each(function() {
                        this.value = ""
                    });
                    var num_comment=$("#num_comment").text();
                    num_comment++;
                    $("#num_comment").text(num_comment);
                    var d = addComment,
                    e = d.I("cancel-comment-reply-link"),
                    f = d.I("wp-temp-form-div"),
                    g = d.I(d.respondId),
                    h = d.I("comment_post_ID").value,
                    i = d.I("comment_parent").value; ! o && r.length && (n = parseInt(r.text().match(/\d+/)), r.text(r.text().replace(n, n + 1))),
                    new_htm = '" id="new_comm_' + p + '"></',
                    new_htm = "0" == i ? '\n<ol style="clear:both;" class="commentlist' + new_htm + "ol>": '\n<ul class="children' + new_htm + "ul>",
                    ok_htm = '\n<span id="success_' + p + j,
                    "1" == c && (div_ = -1 == document.body.innerHTML.indexOf("div-comment-") ? "": -1 == document.body.innerHTML.indexOf("li-comment-") ? "div-": "", ok_htm = ok_htm.concat(k, div_, "comment-", i, '", "', i, '", "respond", "', h, '", ', p, l)),
                    ok_htm += "</span><span></span>\n",
                    a("#comment-ajax").append(new_htm),
                    a("#new_comm_" + p).hide().append(b),
                   // a("#new_comm_" + p + " li").append(ok_htm),
                    a("#new_comm_" + p).fadeIn(4e3),
                    $body.animate({
                        scrollTop: a("#new_comm_" + p).offset().top - 200
                    },
                    900),
                    //y(),
                    p++,
                    o = "",
                    a("*").remove("#edit_id"),
                   // e.style.display = "none",
                    //e.onclick = null,
                    d.I("comment_parent").value = "0",
                    f && g && (f.parentNode.insertBefore(g, f), f.parentNode.removeChild(f))
                }
            }),
            !1
        }),
        addComment = {
            moveForm: function(b, c, d, e, f) {
                var h,
                g = this,
                i = g.I(b),
                j = g.I(d),
                k = g.I("cancel-comment-reply-link"),
                l = g.I("comment_parent"),
                n = g.I("comment_post_ID");
                o && v(),
                q.length > 0 && f ? (g.I("comment").value = q[f], o = g.I("new_comm_" + f).innerHTML.match(/(comment-)(\d+)/)[2], $new_sucs = a("#success_" + f), $new_sucs.hide(), $new_comm = a("#new_comm_" + f), $new_comm.hide(), s.text(m)) : s.text(t),
                g.respondId = d,
                e = e || !1,
                g.I("wp-temp-form-div") || (h = document.createElement("div"), h.id = "wp-temp-form-div", h.style.display = "none", j.parentNode.insertBefore(h, j)),
                i ? i.parentNode.insertBefore(j, i.nextSibling) : (temp = g.I("wp-temp-form-div"), g.I("comment_parent").value = "0", temp.parentNode.insertBefore(j, temp), temp.parentNode.removeChild(temp)),
                $body.animate({
                    scrollTop: a("#respond").offset().top - 180
                },
                400),
                n && e && (n.value = e),
                l.value = c,
                k.style.display = "",
                k.onclick = function() {
                    o && v();
                    var a = addComment,
                    b = a.I("wp-temp-form-div"),
                    c = a.I(a.respondId);
                    return a.I("comment_parent").value = "0",
                    b && c && (b.parentNode.insertBefore(c, b), b.parentNode.removeChild(b)),
                    this.style.display = "none",
                    this.onclick = null,
                    !1
                };
                try {
                    g.I("comment").focus()
                } catch(p) {}
                return ! 1
            },
            I: function(a) {
                return document.getElementById(a)
            }
        },
       // w = 15,
        x = u.val()
    }
});
jQuery(document).ready(function(a) {
    var l = a(".commentshow"),
    y = fspostid,
    r = fsajaxurl,
    z = '<div id="loading-comments"></div>';
    l.on("click", ".commentnav a", 
    function(b) {
        b.preventDefault();
        var b = a(this).attr("href"),
        c = 1,
        j = a("#cancel-comment-reply-link");
        /comment-page-/i.test(b) ? c = b.split(/comment-page-/i)[1].split(/(\/|#|&).*$/)[0] : /cpage=/i.test(b) && (c = b.split(/cpage=/)[1].split(/(\/|#|&).*$/)[0]);
        j.click();
        a.ajax({
            url: r + "?action=fs_ajax_pagenavi&post=" + y + "&page=" + c,
            beforeSend: function() {
                l.html(z)
            },
            error: function(a) {
                alert(a.responseText)
            },
            success: function(b) {
                l.html(b);
                a("body, html").animate({
                    scrollTop: l.offset().top - 50
                },
                1e3)
            }
        })
    })
}); (function() {
    function $(id) {
        return document.getElementById(id)
    }
    function quote(authorId, commentBodyId) {
        var author = $(authorId).innerHTML.replace(/<.+?>/gim, "").replace(/\t|\n|\r\n/g, "");
        var comment = $(commentBodyId).innerHTML;
        $("comment").value += '<blockquote><strong><a href="#comment-' + authorId.replace(/author-/, "") + '">' + author + "</a> :</strong>" + comment.replace(/\t/g, "") + "</blockquote>";
        $("comment").focus()
    }
    window["SIMPALED"] = {};
    window["SIMPALED"]["quote"] = quote
})();
jQuery(document).ready(function() {
    zl_style_1 = "cursor:pointer;position:fixed;top:50%;right:50%;margin-top:-80px;margin-right:-80px;width:160px;height:160px;line-height:160px;text-align:center;font-size:18px;background-color:#666;color:#999;border-radius:100px;";
    var d = 0;
    $("#content .fancybox").each(function() {
        var a = $(this).attr("href").toLowerCase();
        var b = a.substring(a.lastIndexOf("."));
        if (b == ".jpeg" || b == ".jpg" || b == ".png" || b == ".gif" || b == ".bmp") {
            $(this).addClass("bigfa-showbox").attr("id", "bigfa-" + d);
            d++
        }
    });
    $("#content a.bigfa-showbox").click(function() {
        var a = $(this).attr("id").split(/bigfa-/)[1],
        pagesize = bigfa_getPageSize(),
        bigfa_img_url = $(this).attr("href"),
        css_bigfa_bg = "z-index:9999;overflow:hidden;position:fixed;left:0;top:0;width:100%;height:100%;background-color:#000;",
        css_bigfa = "z-index:99999;position:fixed;left:50%;top:50%;",
        css_bigfa_img = "display:none;border:8px solid #fff;box-shadow:0px 0px 10px rgba(0,0,0,0.6)",
        css_bigfa_p_n = "display:none;cursor:pointer;position:absolute;top:50%;line-height:80px;margin:-40px 0 0 0;color:#eee;text-shadow:1px 3px 5px #000;font-size:40px;font-family:Arial,Tahoma;";
        if (typeof document.body.style.maxHeight === "undefined") {
            alert("\u4E0D\u652F\u6301IE6\uFF01\u8BF7\u4F60\u4EEC\u653E\u8FC7IE6\u5427\uFF0C\u5B83\u592A\u8001\u4E86\uFF0C\u5C31\u8BA9\u5B83\u5B89\u5FC3\u7684\u53BB\u5427\u2026\u2026");
            return false
        } else {
            $("body").append('<div id="bigfa_bg" style="' + css_bigfa_bg + '"></div><p id="zshowbox_loading"></p><div id="bigfa" style="' + css_bigfa + '"><img id="bigfa_img" style="' + css_bigfa_img + '" /><p id="bigfa_prev" style="left:-30px;' + css_bigfa_p_n + '">&laquo;</p><p id="bigfa_next" style="right:-30px;' + css_bigfa_p_n + '">&raquo;</p></div>');
            $("#bigfa_bg").fadeTo(600, .8);
            $zshowbox_loading = $("#zshowbox_loading");
            bigfa_img("#bigfa_img", bigfa_img_url, pagesize, a, d);
            $("#bigfa_prev,#bigfa_next").click(function() {
                if ($(this).attr("id") == "bigfa_prev") a--;
                else a++;
                $("#bigfa").find("img").remove().end().append('<img id="bigfa_img" style="' + css_bigfa_img + '" />');
                bigfa_img_url = $("#bigfa-" + a).attr("href");
                bigfa_img("#bigfa_img", bigfa_img_url, pagesize, a, d);
                return false
            });
            $("#bigfa_bg,#bigfa_img").click(function() {
                $zshowbox_loading.remove();
                $("#bigfa_bg,#bigfa_img").unbind("click");
                $("#bigfa_bg,#bigfa").fadeOut(400, 
                function() {
                    $(this).remove()
                });
                return false
            })
        }
        return false
    });
    function bigfa_img(b, c, d, e, f) {
        $("#bigfa_prev,#bigfa_next").hide();
        var g = new Image();
        g.onload = function() {
            var x = d[0] - 100,
            y = d[1] - 100,
            img_w = g.width,
            img_h = g.height;
            if (img_w > x) {
                img_h = img_h * (x / img_w);
                img_w = x;
                if (img_h > y) {
                    img_w = img_w * (y / img_h);
                    img_h = y
                }
            } else if (img_h > y) {
                img_w = img_w * (y / img_h);
                img_h = y;
                if (img_w > x) {
                    img_h = img_h * (x / img_w);
                    img_w = x
                }
            }
            var a = -(img_w / 2 + 5) + "px",
            margintop = -(img_h / 2 + 5) + "px";
            img_w = img_w + "px",
            img_h = img_h + "px";
            $(b).attr("src", c).css({
                width: img_w,
                height: img_h
            }).fadeIn(600).parent().css({
                "margin-left": a,
                "margin-top": margintop
            });
            if (e > 0) $("#bigfa_prev").show();
            if (e < f - 1) $("#bigfa_next").show()
        };
        g.src = c
    }
    function bigfa_getPageSize() {
        var a = document.documentElement;
        var w = window.innerWidth || self.innerWidth || a && a.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || self.innerHeight || a && a.clientHeight || document.body.clientHeight;
        arrayPageSize = [w, h];
        return arrayPageSize
    }
});
/*长微博*/
;(function ($) {
    $.fn.extend({
        txttoShare:function () {
            return this.each(function (e) {
                $(this).after("<div class='share hide' id='toshare'>"+$('#share').html()+"</div>");
                var funGetSelectTxt = function() {
                    var txt = '';
                    document.selection?txt = document.selection.createRange().text:txt = document.getSelection();
                    return txt.toString();
                };
                $(this).mouseup(function(e) {
                    e = e || window.event;
                    var txt = funGetSelectTxt(),sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40,top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
                    $("#toshare a").each(function(){
                        var re=/&title=.*/gi;
                        $(this).attr("href",$(this).attr("href").replace(re, "")+"&title="+txt);
                    });
                    (txt)?$('#toshare').css({left : left,top : top+50}).fadeIn(100):$('#toshare').hide();
                });
            });
        },
        imgtoShare:function () {
            return this.each(function () {
                var ithis=$(this);
				var _con;
                ($(this).parent("a").size()==0)?_con=$(this):_con=$(this).parent();
                ithis.load(function(){                    
                    if(!ithis.attr("src").slice(0,7).indexOf("http://")){
                        _con.parents(".imgcontainer").width($(this).width()).height($(this).height()).append("<div class='share' style='width:"+$(this).width()+"px'>"+$('#share').html()+"</div>").hover(function(){
                            $(this).find(".share").show();
                        },function(){
                            $(this).find(".share").stop().hide();
                        }).find(".share").hover(function(){
                                $(this).css("opacity",.8);
                            },function(){
                                $(this).css("opacity",.6);
                            }).find("a").attr("href",function(){
                                var url,_src=$(this).parents(".imgcontainer").find("img").attr("src");
                                switch($(this).attr("class")){
                                    case "share2sina": url="&pic="+_src;break;
                                    case "share2t": url="&pic="+_src;break;
                                    case "share2qzone":url="&pics="+_src;break;
                                    case "share2douban":url="&pics="+_src;break;
                                }
                                return $(this).attr("href")+url;
                            });
                    }

                });
            });
        },	
        sharebox:function(option){
            var _x,_y,m,allscreen=false;
            option['parent']='share-box';
            option['locked']='locked';
            $(document).ready(function(e){
                $('.share-box').remove();
                $('.background').remove();
                var width=option['width']?option['width']:400;
                var height=option['height']?option['height']:380;
                var btn=option['btn'];
                $('body').append('<div class="background" style="display:none;"></div><div class="share-box" style="width:'+width+'px;height:'+height+'px;display:none;"><div id="inside" style="height:'+height+'px;"><h1 id="locked" onselectstart="return false;">'+(option['title']?option['title']:'share-box')+'<a class="span" href="javascript:void(0);">&times;</a></h1>'+(option['iframe']?'<iframe class="w_iframe" src="'+option['iframe']+'" frameborder="0" width="100%" scrolling="none" style="border:none;overflow-x:hidden;height:'+parseInt(height-120)+'px;"></iframe>':option['html']?option['html']:'')+'<div class="sharebox-bot">'+btn+'</div></div></div>');
                if(navigator.userAgent.indexOf('MSIE 7')>0||navigator.userAgent.indexOf('MSIE 8')>0){
                    $('.share-box').css({'filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr=#55000000,endColorstr=#55000000)'});
                }if(option['bgvisibel']){                    
                    $('.background').fadeTo('slow',0.3);
                };
                $('.share-box').css({display:'block'});
                $('#'+option['locked']+' .span').click(function(){
                    $('.share-box').css({display:'none'});
                    $('.background').css({display:'none'});
                });
                var marginLeft=parseInt(width/2);
                var marginTop=parseInt(height/2);
                var winWidth=parseInt($(window).width()/2);
                var winHeight=parseInt($(window).height()/2.2);
                var left=winWidth-marginLeft;
                var top=winHeight-marginTop;
                $('.share-box').css({left:left,top:top});
                $('#'+option['locked']).mousedown(function(e){
                    if(e.which){
                        m=true;
                        _x=e.pageX-parseInt($('.share-box').css('left'));
                        _y=e.pageY-parseInt($('.share-box').css('top'));
                    }
                    }).dblclick(function(){
                        if(allscreen){
                            $('.share-box').css({height:height,width:width});
                            $('#inside').height(height);
                            $('.w_iframe').height(height-30);
                            $('.share-box').css({left:left,top:top});
                            allscreen = false;
                        }else{
                            allscreen=true;
                            var screenHeight = $(window).height();
                            var screenWidth = $(window).width();$
                            ('.share-box').css({'width':screenWidth-18,'height':screenHeight-18,'top':'0px','left':'0px'});
                            $('#inside').height(screenHeight-20);
                            $('.w_iframe').height(screenHeight-50);
                        }
                    });
                }).mousemove(function(e){
                    if(m && !allscreen){
                        var x=e.pageX-_x;
                        var y=e.pageY-_y;
                        $('.share-box').css({left:x});
                        $('.share-box').css({top:y});
                    }
                }).mouseup(function(){
                    m=false;
                });
                $(window).resize(function(){
                    if(allscreen){
                        var screenHeight = $(window).height();
                        var screenWidth = $(window).width();
                        $('.share-box').css({'width':screenWidth-18,'height':screenHeight-18,'top':'0px','left':'0px'});
                        $('#inside').height(screenHeight-20);
                        $('.w_iframe').height(screenHeight-50);
                    }
                });
        },
		    });
})(jQuery);
