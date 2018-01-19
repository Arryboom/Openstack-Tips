var article = {
    topFixed: function ()
    {
        var ie6 = $('html.ie6').length ? true : false;
        if (ie6 === true)
            return true;

        $(window).resize(function () {
            article.execute();
        });
        $(window).scroll(function () {
            article.execute();
        });
    },
    execute: function (place)
    {
        var top = parseInt($(document).scrollTop());

        if (top > 140)
        {
            $('.nav_cnt').addClass('fixed');
            $('.head_article').addClass('fixed');
        }
        else
        {
            $('.nav_cnt').removeClass('fixed');
            $('.head_article').removeClass('fixed');
        }
    },
    zoom: function(method)
    {
        var currentSize = parseInt($('#main-content').css('font-size').replace('px', ''));
        if (method == '+')
        {
            if (currentSize >= 20) return true;
            currentSize = currentSize + 2;
        }
        else
        {
            if (currentSize <= 14) return true;
            currentSize = currentSize - 2;
        }
        $('#main-content').css('font-size', currentSize);
    },
    count: function ()
    {
        if (!articleInfo.id || !articleInfo.mid)
        {
            return true;
        }

        $.post('/plus/count.php', {aid: articleInfo.id, mid: articleInfo.mid}, function (result) {
            $('#article-count').text(parseInt(result));
        });
    },
	   qrcode: function (url)
    {
        if ($('#article-qrcode').find('img').length)
            return true;

        $('#article-qrcode').append('<img src="http://qr.liantu.com/api.php?text=' + url + '&w=120&m=5"/>');
    },
    loadComment: function (allow)
    {
        allow = !allow;
        
        if (!allow) return false;
        
        $('#comment-list').removeClass('hidden');
        
        window.duoshuoQuery = {short_name:"92game"};
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0]  || document.getElementsByTagName('body')[0]).appendChild(ds);
    },
    loadRecommend: function ()
    {
        var dateObj = new Date();
        var random = dateObj.getFullYear()+''+dateObj.getMonth()+''+dateObj.getDate()+''+dateObj.getHours();
        $('div#iframe-recommend-box').html('<iframe id="iframe-recommend" class="iframe-import" scrolling="no" frameborder="0" src="/recommend_1.html?'+random+'"></iframe>');
    },
    fontStyle: function ()
    {
        $('#fontstyle').html('\
            <span></span><div class="fontstyle-float hidden">\n\
                <ul>\n\
                    <li data-type="size" data-value="default">默认大小</li>\n\
                    <li data-type="size" data-value="18">大号</li>\n\
                    <li data-type="size" data-value="22">特大</li>\n\
                </ul>\n\
                <ul>\n\
                    <li data-type="family" data-value="default">默认字体</li>\n\
                    <li data-type="family" data-value="simsun">宋体</li>\n\
                    <li data-type="family" data-value="kaiti">楷体</li>\n\
                </ul>\n\
            </div>\n\
        ');
        
        $('.article-info .share').dropit({
            action: 'mouseenter',
            triggerParentEl: '#fontstyle',
            triggerEl: 'span',
            submenuEl:'.fontstyle-float'
        });
        
        var _cookie = $.cookie('fontstyle');
        if (_cookie)
        {
            if (!/article\-body/.test(_cookie))
            {
                _cookie += ' article-body';
            }
            
            $('#main-content').attr('class', _cookie);
        }
        
        $('#fontstyle ul li').on('click', function(){
            
            var _currentClass = $('#main-content').attr('class');
            
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
            
            var _type = $(this).data('type');
            var _value = $(this).data('value');
            
            var _re = new RegExp(_type+'\-[0-9a-z]+');
            if (_re.test(_currentClass))
            {
                _currentClass = _currentClass.replace(_re, _type+'-'+_value);
            }
            else
            {
                _currentClass += ' '+_type+'-'+_value;
            }
            
            $('#main-content').attr('class', _currentClass);
            
            $.cookie('fontstyle', _currentClass, {expires: 365, path: '/'});
        });
    }
};
