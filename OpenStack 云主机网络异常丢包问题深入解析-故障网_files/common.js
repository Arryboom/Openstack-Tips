
/**
 * 公共JS
 */
function initTopnav()
{
    $('#topnav .container .left').dropit({
        action: 'mouseenter',
        beforeShow: function () {
            var _parent = $(this).parent();
            _parent.addClass('active');
            var _external = _parent.find('a.trigger').parent();
            var _internal = _parent.find('.submenu');
//            console.log(_external.width())
//            console.log(_internal.width())
            var _w_external = _external.width() - 2;
            var _w_internal = _internal.width();
            if (_w_internal < _w_external) {
                _internal.width(_w_external);
            }
        },
        afterHide: function () {
            $('.dropit-trigger').removeClass('active');
//            $(this).removeClass('active');
        }
    });
}

function initImageList()
{
    window.imageTimeoutID = null;
    $('.image-list .box').bind({
        mouseenter: function(){
            window.clearTimeout(window.imageTimeoutID);
            var _this = this;
            window.imageTimeoutID = window.setTimeout(function(){
                $(_this).find('.title').slideUp(300);
                $(_this).find('.info').slideDown(300);
            }, 500);
        },
        mouseleave: function(){
            window.clearTimeout(window.imageTimeoutID);
            var _this = this;
            $(this).find('.info').slideUp(300, function(){
                $(_this).find('.title').slideDown(300);
            });
        }
    });
}

// 收藏到浏览器收藏夹
function addFavorite(obj) {
    var url = window.location.href,
        title = window.document.title;

    if (document.all) {
        // for IE brower
        window.external.addFavorite(url, title);
    } else if (window.sidebar) {
        // for Firefox
        if (typeof window.sidebar.addPanel == 'function') {
            window.sidebar.addPanel(title, url, '');
        } else {
            $(obj).attr('rel', 'sidebar');
            $(obj).attr('title', title);
            $(obj).attr('href', url);
        }

        return false;
    } else if (window.opera && window.print) {
        // Opera 
        var elem = document.createElement('a');
        elem.setAttribute('href', url);
        elem.setAttribute('title', title);
        elem.setAttribute('rel', 'sidebar'); // required to work in opera 7+
        elem.click();
    } else {
        var ua = navigator.userAgent.toLowerCase();
        var str = '';
        var isWebkit = (ua.indexOf('webkit') != -1);
        var isMac = (ua.indexOf('mac') != -1);

        if (ua.indexOf('konqueror') != -1) {
            str = 'CTRL + B'; // Konqueror
        } else if (window.home || isWebkit || isMac) {
            str = (isMac ? 'Command/Cmd' : 'CTRL') + ' + D'; // Netscape, Safari, iCab, IE5/Mac
        }
        str = ((str) ? '请使用 ' + str + ' 添加到收藏夹。' : str);
        alert(str);
    }
}

// 设置浏览器首页
function setHome(obj, url)
{
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(url);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', url);
            return true;
        }

        alert('此操作被浏览器拒绝！');
    }
}

function loadSSP(options)
{
    if (typeof options == 'number' || typeof options == 'string')
    {
        id = options;
        options = {
            id: id
        };
    }
    if (!options.display)
    {
        options.display = 'inlay-fix';
    }

    (function () {
        var s = "_" + Math.random().toString(36).slice(2);
        document.write('<div id="' + s + '"></div>');
        (window.slotbydup = window.slotbydup || []).push({
            id: options.id,
            container: s,
            size: options.size,
            display: options.display
        });
    })();
}

/**
 * 移动设备浏览器版本信息
 */
var browser = {
    versions: function ()
    {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            // trident: u.indexOf('Trident') > -1, //IE内核
            // presto: u.indexOf('Presto') > -1, //opera内核
            // webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            // gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.+Mobile.+/i), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            androidPhone: u.indexOf('Android') > -1 && u.indexOf('Mobile') > -1,
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPod: u.indexOf('iPod') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            winphone: u.indexOf('Windows Phone') > -1, //是否windows phone
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

var sidebarTool = {
    loaded: false,
    dom: null
};
sidebarTool.load = function(){
    if ($('html.ie6').length)
    {
        return false;
    }
    
    if (!this.loaded)
    {
        this.init();
    }
    
    var left = ($(window).width() - 1000) / 2 - this.dom.width() - 10;
    if (left < 0) left = 0;
    this.dom.show().css('left', left);
};
sidebarTool.init = function(){
    
    this.loaded = true;
    this.dom = $('#sidebar-tool');
    
    $(window).resize(function(){sidebarTool.load()});
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        if (top > 200)
        {
            $('#sidebar-tool .top').slideDown();
        }
        else
        {
            $('#sidebar-tool .top').slideUp();
        }
    });
    $('#sidebar-tool li').bind('mouseenter mouseleave', function(){
        $(this).toggleClass('hover');
    });
    $('#sidebar-tool li').click(function(){
        var name = $(this).data('name');
        if (name=='top')
        {
            $(document).scrollTop(0);
        }
        else
        {
            $(document).scrollTop($('.channel-box.'+name).offset().top);
        }
    });
};


var loadArticleList = {
    executing: false,
    
    init: function(){
        $('#data-box .tab-controller').fixbox({
            distanceToTop: 0,
            isFixdeDocHeight: false,
            scrollEventName: 'tabControllerEvent',
            container: '#data-box'
        });
        
        var _this = this;
        $('#more-article').bind('click', function(){
            if (document.all)
            {
                window.event.returnValue = false;
            }
            else
            {
                event.preventDefault();
            }
            _this.get();
        });
        $('#data-box').find('.tab-controller a').bind('click', function(event){
            if (document.all)
            {
                window.event.returnValue = false;
            }
            else
            {
                event.preventDefault();
            }
            _this._switchChannel($(this));
        });
    },
    _switchChannel: function(objController){
        var _this = this;
        
        if (objController.hasClass('active'))
        {
            return true;
        }

        if (_this.executing === true)
        {
            return true;
        }

        objController.addClass('loading');
        
        var typeid = objController.data('typeid');
        
        if ($('#data-list-'+typeid).length)
        {
            _this._style(objController);
        }
        else
        {
            $('#data-list').append('<ul id="data-list-'+ typeid +'" class="article-list top-news" data-typeid="'+ typeid +'"></ul>');
            
            _this.get(typeid, function(){
                _this._style(objController);
            });
        }
    },
    _style: function(objController){
        if ($('#data-box .tab-controller.fixed').length)
        {
            $(document).scrollTop($('#data-box').offset().top);
        }

        objController.removeClass('loading');
        objController.parent().find('a').removeClass('active');
        objController.addClass('active');

        $('#data-list .top-news').hide();
        $('#data-list-'+ objController.data('typeid')).show();
    },
    get: function(typeId, callback){
        var _this = this;
        
        $(document).ajaxError(function() {
            _this.executing = false;
        });
        $(document).ajaxStart(function() {
            _this.executing = true;
        });
        $(document).ajaxComplete(function() {
            _this.executing = false;
        });
        
        // 加载更多操作
        if (!typeId)
        {
            if (_this.executing === true)
            {
                return true;
            }
            
            typeId = $('#data-box .tab-controller a.active').data('typeid');
            $(document).ajaxStart(function() {
                $('#more-article').addClass('loading');
            });
            $(document).ajaxComplete(function() {
                $('#more-article').removeClass('loading');
            });
        }
        
        var box = $('#data-list-'+ typeId);
        $.getJSON('/plus/load.php', {typeId:typeId, startId:box.find('li').last().data('id'), num:20}, function(data){
            var html = '';
            $.each(data, function(key, item){
                html += '<li class="media" data-id="'+ item.id +'">\n\
                    <div class="media-left">\n\
                        <a class="thumbnail '+ (item.litpic_height > item.litpic_width ? 'y' : 'x') +'" href="'+ item.arcurl +'"><img src="'+ item.litpic +'" alt="'+ item.title +'"></a>\n\
                    </div>\n\
                    <div class="media-body">\n\
                        <h2><a class="ft18" href="'+ item.arcurl +'">'+ item.title +'</a></h2>\n\
                        <div class="info ft12">\n\
                            <span class="info-icon date"><i>'+ item.pubdate +'</i></span>\n\
                        </div>\n\
                        <span class="media-bottom ft14 c6">'+ item.description +'...</span>\n\
                    </div>\n\
                </li>';
            });
            box.append(html);
            
            if (typeof callback == 'function')
            {
                callback();
            }
        });
    }
};


$(document).ready(function () {
    if (!$('html.lte-ie7').length && $('#sidebar-follow').length)
    {
        var distanceToTop = $('#sidebar-follow').attr('data-distanceToTop');
        distanceToTop = distanceToTop ? parseInt(distanceToTop) : 0;
        
        // 影响滚动速度？
        $('#sidebar-follow').fixbox({
            distanceToTop: distanceToTop,
            isFixdeDocHeight: false,
            container: '.main-area'
        });
    }
});
