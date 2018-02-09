// zjf20171011
(function(){//目录
  function getLv(n){
    return parseInt(n.replace('H',''))
  }
  var directory_con = $('<div class="directoryBox"><h3 class="BoxTil right-top-till">目录</h3><div class="list directory"><span class="top-icon"></span><ul class="directory-list"></ul><span class="bot-icon"></span></div></div>');
  var list = directory_con.find('ul')
  var ts = []
  var jts = $(".artical-content").find('h1,h2,h3')
  if(jts.length>0){
    $('.artical-Right').append(directory_con);
  }else{
    return false;
  }
  jts.each(function(i,e){
    ts.push(e)
  })
  var sort = [0,1,1,1]
  $.each(ts,function(i,e){
    var Lv = 1
    var item = $('<li>'+$(e).text()+'</li>').click(function(){
      $(window).scrollTop($(e).offset().top)
      $(this).addClass('on').siblings().removeClass('on')
    })
    list.append(item)
    if(item.prev().hasClass('lv2')){Lv++;};
    if(ts[i-1]&&getLv($(ts[i-1])[0].tagName)<getLv(e.tagName)){Lv++;};
    if(e.tagName=='H1'){Lv=1;}
    if(e.tagName=='H3'){Lv=3;}//zjf20171222
    if(ts[i-1]&&getLv($(ts[i-1])[0].tagName)>getLv(e.tagName)){Lv=1;};
    item.addClass('lv'+Lv)
  })
  var fixTop = directory_con.offset().top
  $(window).scroll(function(){
    if($(window).scrollTop()+10>fixTop){
      directory_con.addClass('on')
    }else{
      directory_con.removeClass('on')
    }
    jts.each(function(i,e){
      if($(window).scrollTop()-30 < $(e).offset().top){
        var ch = list.children().eq(i)
        ch.addClass('on').siblings().removeClass('on')
        directory_con.scrollTop(ch.position().top-list.height()/2)
        return false;
      }
    })
  });
})();
var IntroduceFn = function(){this.init()}
IntroduceFn.prototype = {
    init: function(){
        var _this = this,
            isAlt = false,
            commonBtn = true;
        _this.Sort()            //排序
        _this.Favorites()       //收藏
        _this.LoadPage()        //分页
        _this.SetReplay()       //发表评论
        _this.SetReplayDown()   //ctrl+enter发表评论
        _this.SetReply()        //回复评论
        _this.More()            //是否展开所有二级评论
        _this.Remove()          //删除
        _this.Focus()
        setPraise($('.more-list .praise span'));//点赞
    },
    Sort: function(){//评论排序
        var _this = this
        $(".comment-sort").click(function() {
            var me = $(this)
            _this.is_load = false;
            comment_sort = me.attr("flag");
            _this.RemoveClass($(".comment-sort"),"on")
            _this.AddClass(me,"on")
            $(".comment-sort").attr("page", 1);
            _this.LoadPage();
        })
    },
    Comment: function(c,index){
        var _this = this
        var text = '<div class="commentList-box cbox-'+c.id+'" id="'+c.id+'">'
            //一级回复
            text += '<div class="comment-1 publish_user_id reply_id_box comment_number-list" rid="'+c.id+'"><div class="top">'
            text += '<div class="is-vip-bg-6 fl"><a href="'+blog_url+c.domain+'" class="header-img">'
                if(c.isvip == 1){
                    text += '<img class="is-vip-img-bg is-vip-img-4" src="'+c.avatar+'" ><i class="vip-icon vip-icon-4"></i>'
                }else if(c.isvip == 2){
                    text += '<img class="is-vip-img-bg is-vip-img-4" src="'+c.avatar+'" ><i class="vip-icon vip-icon-4 on"></i>'
                }else{
                    text += '<img class="is-vip-img-bg is-vip-img-4" src="'+c.avatar+'" >'
                }
            text += '</a></div>'
            text += '<div class="fl"><p class="name"><a href="'+blog_url+c.domain+'">'+(c.nickname ? c.nickname : c.username)+'</a>'
                if(c_user_id == c.user_id){
                    text += '<span><i></i>作者</span>'
                }
            text += '</p>'
            text += '<p class="time">'+c.floor+'楼&nbsp;&nbsp;'+_this.Time(c.create_time)+'</p></div><div class="clear"></div></div>'                        
            text += '<div class="con">'+_this.SetBr(c.content)+'</div>'
                if(c.isPraise == 1){
                    text += '<div class="bot on">'
                }else{
                    text += '<div class="bot">'
                }
            text += '<p class="zan" blog_id="'+c.id+'" type="2" userid="'+c.user_id+'">'+(c.up_num ? c.up_num : 0)+'</p>' //人赞
                if(is_comment != 2) {
                    if(i_user_id != c.user_id)
                    text += '<p class="answer reply-btn"><span class="comment_number_1">'+c.reply.length+'</span>人回复</p>'
                }
                if(i_user_id == c.user_id) {
                    text += '<p class="remove">删除</p>'
                }
            text += '<div class="clear"></div></div>'
            text += '<input type="hidden" class="reply_id" value="'+c.id+'"><input type="hidden" class="user_id" value="'+c.user_id+'"><input type="hidden" class="first_pid" value="'+c.id+'"></div>'
            if(c.reply) {//二级回复
                text += '<div class="comment-2">'
                text += '<ul class="comment-2-list" flag="'+c.id+'">'
                for (var i = 0; i < c.reply.length; i++) {
                    var r = c.reply[i];
                    text += _this.CommentChild(i,r)
                }
                text += '</ul>' 
                text += '<div class="new-comment">'
                text += '<div class="top">'
                if(c.reply.length > 0){
                    text += '<a class="fl new add-new-publish">添加新回复</a>'
                }
                if(c.reply.length > 3){
                    text += '<p class="pack-up"><em class="open-more">还有'+(c.reply.length-3)+'条评论，</em><span class="open-btn">展开查看</span></p>'
                }
                text += '<div class="clear"></div></div></div></div>'
            }
            text += '</div>';
            return text;
    },
    CommentChild: function(i,r){
        var _this = this,
            text = '';
        if(i > 2){
            text += '<li class="comment-2-list-none publish_user_id comment_number-list comment-2-cb cbox-'+r.id+'">'
        }else{
            text += '<li class="publish_user_id reply_id_box comment_number-list comment-2-cb cbox-'+r.id+'">'
        }
        text += '<div class="top">'
        if(c_user_id == r.user_id) {
            text += '<a class="author fl">作者</a>'
        }
        text += '<a class="name fl" href="'+blog_url+r.domain+'">'+(r.nickname ? r.nickname : r.username)+'</a><a class="name fl" href="'+blog_url+r.reDomain+'">:@'+r.replayNickname+'&nbsp;</a>'
        text += r.content+'<div class="clear"></div></div>'
        text += '<div class="bot"><p class="time">'+_this.Time(r.create_time)+'</p>'
        if(is_comment != 2) {
            if(i_user_id != r.user_id)
            text += '<p class="reply reply-btn">回复</p>'
        }
        if(i_user_id == r.user_id) {
            text += '<p class="remove">删除</p>'
        }
        text += '<div class="clear"></div></div>'
        text += '<input type="hidden" class="reply_id" value="'+r.id+'"><input type="hidden" class="user_id" value="'+r.user_id+'"><input type="hidden" class="first_pid" value="'+r.first_pid+'">'
        text += '</li>'
        return text;
    },
    Focus: function(){
        var _this = this
        $('.textareadiv-publish').focus(function(){
            if(isLogin != 1) {
                _this.Login()
            }else{
                $(this).blur(function(){})
            }
        })
    },
    SetReplay: function(){//发表评论参数
        var _this = this
        $('.publish-btn').unbind()
        $('.publish-btn').click(function(){
            _this.False()
            var me = $(this)
            var content = me.parent().parent().find('.textareadiv').val()
            var user_id = me.parent().parent().parent().find('.user_id').val() 
            var parent_id = me.parent().parent().parent().find('.reply_id').val()
            var flag = me.attr('flag')
            var first_pid = ''
            if(flag==2){
                if(me.parents('.commentList-box').find('.comment-2-list').html() == ''){
                    first_pid = me.parents('.commentList-box').attr('id')
                }else{
                    first_pid = me.parents().find('.comment-2-cb .first_pid').val()
                }
            }
            var data = {
                'resource_id': blog_id,
                'content': $.trim(content),
                'parent_id': parent_id,
                'first_pid': first_pid,
                'blog_id': blog_id,
                'user_id': user_id,
                'url': window.location.href
            }
            _this.ReplayAjax(data)
       })
    },
    SetReplayDown: function(ev){//ctrl+enter发表评论
        var _this = this
        $('.textareadiv').keydown(function(ev){
            if(ev.ctrlKey && ev.keyCode == 13){
                if(_this.commonBtn == false)return false;
                _this.commonBtn = false
                setTimeout(function(){_this.commonBtn = true},3000)
                var me = $(this)
                var content = me.val()
                var user_id = me.parents().find('.publish_user_id .user_id').val()
                var parent_id = me.parent().parent().find('.reply_id').val() 
                var flag = me.attr('flag')
                var first_pid = me.parent().parent().find('.first_pid').val()
                var data = {
                    'resource_id': blog_id,
                    'content': $.trim(content),
                    'parent_id': parent_id,
                    'first_pid': first_pid,
                    'blog_id': blog_id,
                    'user_id': user_id,
                    'url': window.location.href
                }
                _this.ReplayAjax(data)
            }
        })
    },
    SetReply: function(){
        var _this = this
        $('.reply-btn').unbind("click")
        $('.reply-btn').click(function(){//二级回复
            var me = $(this)
            _this.SetReplyCon(me)
        })
    },
    SetReplyCon: function(me){
        var _this = this
        var reply_text = $('<div class="comment-creat fitst-reply"><textarea class="textareadiv" name="" id="" cols="30" rows="10" maxlength="500" placeholder="用心的回复会被更多人看到和认可"></textarea><div class="comment-push"><p class="msg fl">Ctrl+Enter&nbsp;发布</p><p class="publish-btn blue-btn fr" flag="2">发布</p><p class="cancel-btn cancel-btn-2 fr">取消</p><div class="clear"></div></div><div class="clear"></div></div>');
        var first_reply = me.parent().parent().find(".textareadiv")
        _this.isLogin()
        if(first_reply.length < 1) {
            $(".fitst-reply").remove();
            me.parent().after(reply_text);
            _this.CancelBtn()       //取消回复
            _this.SetReplay()       //发表评论
            _this.SetReplayDown()   //ctrl+enter发表评论
            _this.More()            //是否展开所有二级评论
            _this.Remove()          //删除
            _this.SetPageClick()    //click page
            _this.ScrollTop()       //回到评论顶部
        }
        setTimeout(function(){
            reply_text.find('textarea').focus()
        },250)
    },
    SetPageClick: function() {
        var _this = this;
        $(".load_page").click(function() {
            var page = $(this).attr('page');
            $("#sort-"+comment_sort).attr("page", page);
            _this.LoadPage();
            setTimeout(function(){
                _this.ScrollTopFn($('#comment'))
            },200)
        })
    },
    Alt: function() {//锚点定位
        var _this = this;
        if(rid == 0 || _this.isAlt) {
            return ;
        }else{
            var alt_obj = $('.cbox-'+rid);
            _this.ScrollTopFn(alt_obj);
            _this.isAlt = true;
        }        
    },
    SetPage: function(cur_page, page_num){
        cur_page = parseInt(cur_page);
        var page_str = '';
        if(page_num > 1) {
          page_str = '<ul class="pagination">';
          var pri_page = parseInt(cur_page - 1);
          if(pri_page > 0) {
            page_str += '<li class="load_page first_page" page="'+pri_page+'"><a href="javascript:;">上一页</a></li>';
          } else {
            page_str += '<li class="prev show" page="1"><a href="javascript:;">上一页</a></li>';
          }
          var show_pages = 10;
          var page_start = Math.max(1, parseInt(cur_page - 5));
          var page_end = Math.min(page_num, parseInt(page_start + show_pages));
          if(parseInt(page_end - page_start) < show_pages) {
            page_start = Math.max(1, parseInt(page_end - show_pages));
          }
          for (var i = page_start; i <= page_end; i++) {
            if(i == cur_page) {
              page_str += '<li class="load_page active" page="'+i+'"><a href="javascript:;">'+i+'</a></li>';
            } else {
              page_str += '<li class="load_page" page="'+i+'"><a href="javascript:;">'+i+'</a></li>';
            }
          }
          var next_page = parseInt(cur_page + 1);
          if(cur_page < page_num) {
            page_str += '<li class="load_page next" page="'+next_page+'"><a href="javascript:;">下一页</a></li>';
          }else{
            page_str += '<li class="last_page show" page="'+next_page+'"><a href="javascript:;">下一页</a></li>';
          }
          page_str += '</ul>'; 
          $(".act_pageList_box").html(page_str);
        }
    },
    LoadPage: function(){//分页
        var _this = this
        if(_this.is_load)return false;
        $(".commentList").html('<img src="'+img_url+'images/loading.gif" style="margin: 200px 370px;">');
        _this.is_load = true;
        var page = $("#sort-"+comment_sort).attr("page");
        page = parseInt(page);
        pagesize = 10;
        var data = {id: blog_id,sort: comment_sort,page: page}
        $.get(comment_list,data,function(e){
            _this.is_load = false;
            if(e.status == 0){
                _this.SetPage(e.data.current_page, e.data.page_count);
                var content_text = '';
                if(e.data.list)
                for (var i = 0; i < e.data.list.length; i++) {
                    var index = (page - 1) * pagesize + i;
                    content_text += _this.Comment(e.data.list[i], index);
                }
                $(".commentList").html(content_text);
                setPraise($('.comment-1 .bot .zan'))//点赞
                _this.SetPageClick()    //click page
                _this.CancelBtn()       //取消回复
                _this.SetReplay()       //发表评论
                _this.SetReplayDown()   //ctrl+enter发表评论
                _this.SetReply()        //回复评论
                _this.More()            //是否展开所有二级评论
                _this.Remove()          //删除
                _this.ScrollTop()       //回到评论顶部
                $("#sort-"+comment_sort).attr("page", page+1);
                _this.Alt()
            } else {
                new AutoBox({content:e.msg,autoClose:3})
            }
        },'json')
    },
    ReplayAjax: function(data){//评论ajax
        var _this = this
        if(isLogin != 1) {
            _this.Login()
            return false;
        }
        if(data.content.length==0){
            new AutoBox({content:'评论内容不能为空~',mask:"#000",autoClose:3})
        }else{
            $.ajax({
                url: addReply_url,
                data: data,
                type: 'POST',
                dataType: 'JSON',
                success: function(e){
                    commonBtn = true
                    if(e.status == 1){
                        _this.SetAddReply(e,data)
                    }else if(e.status == -1){
                        new AutoBox({content:'<div style="padding: 0 40px;">'+e.msg+'</div>',mask:"#000",autoClose:3})
                    }else if(e.status == -9){
                        _this.Login()
                    }else{
                        new AutoBox({content:'<div style="padding: 0 40px;">'+e.msg+'</div>',mask:"#000",autoClose:3})
                    }
                }
            })
        }
    },
    SetAddReply: function(e,data){//添加评论和回复
        var _this = this
        var par = '';
        if(e.data.isReplay == 1){//回复
            if($('.cbox-'+data.parent_id).hasClass('comment-2-cb')){
                par = $('.cbox-'+data.parent_id).parent()
                par.html(_this.CommentChild(1,e.data) + par.html())
                _this.ScrollTopFn($(par))
            }else{
                var newReply = '<div class="new-comment"><div class="top"><a class="fl new add-new-publish">添加新回复</a><div class="clear"></div></div></div>'
                par = $('.cbox-'+data.parent_id).find($('.comment-2-list'))
                if(par.parents('.comment-2').find('.publish_user_id').length > 0){
                    par.html(_this.CommentChild(1,e.data) + par.html())
                }else{
                    par.html(_this.CommentChild(1,e.data) + par.html() + newReply)
                }
            }
            var text = parseInt($(par).parents('.commentList-box').find('.comment_number_1').text())
            $(par).parents('.commentList-box').find('.comment_number_1').html(text+1)
            _this.StarBox(par,'.comment-2-cb')
            _this.CancelCon()
        }else{//评论
            par = $('.commentList');
            var index = '',comment_sort = $('.comment-sort')
            if(comment_sort.hasClass('on')){
                index = comment_sort.attr('page')
            }
            par.html(_this.Comment(e.data,index) + par.html())
            _this.ScrollTopFn($('#comment'))
            $('.textareadiv-publish').val('')
            _this.StarBox(par,'.commentList-box')
        }
        if($('.comment-number').length < 1){
            $('.comment-creat').after('<div class="comment-number" id="comment_pl"><p class="number fl"><span class="comment_number">0</span>条评论</p><a class="time-last time fr comment-sort on" id="sort-desc" flag="desc"  page="1" href="javascript:;" >按时间倒序</a><a class="time-first time fr comment-sort" id="sort-asc" flag="asc"  page="1" href="javascript:;">按时间正序</a><div class="clear"></div></div>')
        }
        var text = parseInt($('.comment_number').text())
        $('.comment_number').html(text+1)
        setPraise($('.comment-1 .bot .zan'))//点赞
        _this.CancelBtn()       //取消回复
        _this.SetReplay()       //发表评论
        _this.SetReplayDown()   //ctrl+enter发表评论
        _this.SetReply()        //回复评论
        _this.More()            //是否展开所有二级评论
        _this.Remove()          //删除
        _this.SetPageClick()    //click page
        _this.ScrollTop()       //回到评论顶部
        _this.Sort()            //排序
        _this.isWxbind()
    },
    CancelBtn: function(){//取消回复
        $('.cancel-btn-2').click(function(){
            $(this).parent().parent().find('#textareadiv').val('')
            $(this).parent().parent().remove();
        })
        $('.cancel-btn-1').click(function(){//取消评论
            $(this).parent().parent().find('.textareadiv').val('')
        })
    },
    isWxbind: function(){
        var mask = $('<div class="mask"></div>')
            msg_index_box = $('<div class="msg-index-box"></div>'),
            cls = $('<p class="follow-close"></p>'),
            top_bg = $('<p class="top-bg"></p>'),
            con_box = $('<div class="con-box"></div>'),
            icon_1 = $('<p class="icon-bg icon-1"></p>')
            icon_2 = $('<p class="icon-bg icon-2"></p>')
            h2 = $('<h2>发布成功</h2>')
            con = $('<div class="con">关注并绑定官方微信服务号可随时随地</div><div class="con">收到回复提醒</div>'),
            code_bg = $('<div class="code-bg"><iframe id="childframe" src="http://home.51cto.com/wechat/get-iframe-qr-code" iframeboder="0" scrolling="no" allowtransparency="true" style="border: 0 none;margin: 8px 14px;" width="120" height="120" name=""></iframe></div>')
            btn_box = $('<div class="btn-box"><p class="btn-1">不再提醒</p><p class="btn-2">知道了</p></div>')
            $.post('/index/wxbind',{uid:userId},function(res){
                if(getCookie('follow1'))return false;
                if(res.status==1){
                    if(res.data.wxBind == 0){//没绑定
                        msg_index_box.remove()
                        $('body').append(mask).append(msg_index_box)
                        msg_index_box.append(cls).append(top_bg).append(con_box)
                        con_box.html('').append(icon_1).append(h2).append(con).append(code_bg).append(btn_box)
                        msg_index_box.css('height','330px')
                        $('.mask').show()
                        $('.btn-box .btn-2, .msg-index-box .follow-close').bind('click',function(){
                            $('.msg-index-box').remove()
                            $('.mask').remove()
                        })
                        $('.btn-box .btn-1').bind('click',function(){
                            setCookie('follow1','follow1',3650)
                            $('.msg-index-box').remove()
                            $('.mask').remove()
                        })
                    }
                }
            },'json')
    },
    CancelCon: function(a){
        $('.fitst-reply').remove()
    },
    More: function(){
        $('.open-btn').unbind("click");
        $('.open-btn').click(function() {
            var me = $(this)
            if(me.text() == "展开查看"){
                me.parents(".comment-2").find(".comment-2-list-none").css({"display":"block"});
                me.text("收起");
                me.parent().find(".open-more").hide();
            }else{
                me.parents(".comment-2").find(".comment-2-list-none").css({"display":"none"});
                me.text("展开查看");
                me.parent().find(".open-more").show();
            }
        })
    },
    Remove: function(){//删除回复
        var _this = this
        $('.remove').unbind("click");
        $('.remove').click(function(){
            var _me = $(this)
            var id = _me.parent().parent().find('.reply_id').val(); 
            var pobj = _me.parents(".commentList-box");
            var oldLen = $('.comment_number-list').length
            var ridArr = '';
            _this.isLogin()
            new AutoBox({content:'<div style="padding: 0 30px 30px 30px;">是否要删除发布的评论？</div>',img:'remind',mask:"#000",Yes:'确定',No:'取消',
                yc:function(){
                    $.get(removeUrl,{blog_id: blog_id,id: id},function(e){
                        if(e.status == 1){
                            if(e.data) {
                                for (var i = 0; i < e.data.length; i++) {
                                    var class_name = "cbox-" + e.data[i];
                                    $("." + class_name).remove();
                                }
                            }
                            if(!_me.parent().parent().hasClass("comment-1")) {
                                var cm_1 = pobj.find(".comment_number_1").html();
                                var n_cm = parseInt(cm_1) - e.data.length;
                                pobj.find(".comment_number_1").html(n_cm);
                            }
                            var comment_number = $('.comment_number').html() 
                            var nowLen = parseInt(comment_number-e.data.length)
                            $('.comment_number').html(nowLen)
                        }else{
                            new AutoBox({content:e.msg,img:'remind',mask:"#000",autoClose:3})
                        }
                    },'json')
                }
            })
        })
    },
    Favorites: function(){//收藏
        var _this = this
        $('.more-list .favorites').click(function(){
            var me = $(this)
            _this.isLogin()
            if(me.hasClass('on'))return false;
            $.get(collect_url+'?blog_id='+blog_id,function(e){
                if(e.status == 0){//成功
                    me.addClass('on')
                    new AutoBox({content:e.msg,mask:"#000",autoClose:3})
                }else{//其他
                    new AutoBox({content:e.msg,mask:"#000",autoClose:3})
                }
            },'JSON')
        });
    },
    Time: function(t){//评论时间
        t = t * 1000;
        var date = new Date(t); 
        var y = date.getFullYear();    
        var m = date.getMonth() + 1;    
        m = m < 10 ? ('0' + m) : m;    
        var d = date.getDate();    
        d = d < 10 ? ('0' + d) : d;    
        var h = date.getHours();  
        h = h < 10 ? ('0' + h) : h;  
        var minute = date.getMinutes();  
        var second = date.getSeconds();  
        minute = minute < 10 ? ('0' + minute) : minute;    
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
    },
    SetBr: function(content){//评论换行
        return content.replace(/[\r\n]/g, '<br />');
    },
    False: function(){
        var _this = this
        if(_this.commonBtn == false)return false;
        _this.commonBtn = false
        setTimeout(function(){_this.commonBtn = true;},3000)
    },
    isLogin: function(){
        var _this = this
        if(isLogin != 1) _this.Login()
    },
    Login: function(){
        Login()
    },
    StarBox: function(a,b){
        var parobj = a.find(b).eq(0)
        parobj.css({'background':'#f5f5f5'})
        setTimeout(function(){
            parobj.css({'background':'#fff'})
        },200)
    },
    ScrollTop: function(){//向上滚动效果
        var _this = this,a = $('.add-new-publish'),b = ""
        a.click(function(){
            b = $(this).parents('.commentList-box')
            _this.ScrollTopFn(b)
            _this.SetReplyCon(b.find('.answer'))
        })
    },
    ScrollTopFn:function(b){
        if(b.length==0)return false
        var scrollTop = b.offset().top
        if(scrollTop > 0){
            $("html,body").animate({scrollTop:scrollTop},'slow',function(){$(this).stop(true,true);});
        }
    },
    AddClass: function(obj,sClass){
        obj.addClass(sClass)
    },
    RemoveClass: function(obj,sClass){
        obj.removeClass(sClass)
    }
}
var Introduce = new IntroduceFn()
