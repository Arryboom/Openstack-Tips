/**
 *  @author  yanglw@csdn.net
 *  @version 1.0.3
 *  @description CSDN统一上报JS-SDK
 */

(function () {
    var CFG, exports, _fn, allParam;
    CFG = {
        SERVER_PV_URL: window.location.protocol+'//pv.csdn.net/csdnbi',
        SERVER_RE_URL: window.location.protocol+'//re.csdn.net/csdnbi'
    }

    allParam = {
        headers: {
            component: "enter",
            datatype: "pv",
            version : "v1"
        },
        body: {}
    }

    _fn = {
        /**
         *
         * @param datatype  re:曝光/点击;track:pv统计
         * @param params
         */
        buildReqParam : function(datatype,params){
            var body={
                "re":params
            };
            return "["+JSON.stringify($.extend(allParam, {
                    headers: {
                        component: "enterprise",
                        datatype: datatype,
                        version : "v1"
                    },
                    body: JSON.stringify(body)
                }))+"]";
        },
        serverUrl : function(datatype){
            if("track"==datatype){
                return CFG.SERVER_PV_URL;
            }else{
                return CFG.SERVER_RE_URL;
            }
        }
    }

    exports = {
        /**
         * CSDN 数据上报接口
         * @param datatype  数据类型:re( 曝光/点击);track( pv统计 )
         * @param params
         */
        trackReport : function(datatype,params){
            var data=_fn.buildReqParam(datatype,params);
            // console.log(data);
            $.ajax({
                url:_fn.serverUrl(datatype),
                type:'POST',
                async:true,
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                contentType:'text/plain;charset=UTF-8',
                data:data,
                success:function(){

                },
                error : function () {
                    // console.error("csdn.track.report()",arguments);
                }
            });
        }
    };

    if (window.csdn === undefined) {
        window.csdn = {};
    }
    for (i in exports) {
        window.csdn[i] = exports[i];
    }
})();

/**
 * jQuery iframe click tracking plugin
 *
 * @author Vincent Paré (www.finalclap.com)
 * @copyright © 2013-2015 Vincent Paré
 * @license http://opensource.org/licenses/Apache-2.0
 * @version 1.1.0
 */
(function($){
    // Tracking handler manager
    $.fn.iframeTracker = function(handler){
        var target = this.get();
        if (handler === null || handler === false) {
            $.iframeTracker.untrack(target);
        } else if (typeof handler == "object") {
            $.iframeTracker.track(target, handler);
        } else {
            throw new Error("Wrong handler type (must be an object, or null|false to untrack)");
        }
    };

    // Iframe tracker common object
    $.iframeTracker = {
        // State
        focusRetriever: null,  // Element used for restoring focus on window (element)
        focusRetrieved: false, // Says if the focus was retrived on the current page (bool)
        handlersList: [],      // Store a list of every trakers (created by calling $(selector).iframeTracker...)
        isIE8AndOlder: false,  // true for Internet Explorer 8 and older

        // Init (called once on document ready)
        init: function(){
            // Determine browser version (IE8-) ($.browser.msie is deprecated since jQuery 1.9)
            try {
                if ($.browser.msie == true && $.browser.version < 9) {
                    this.isIE8AndOlder = true;
                }
            } catch(ex) {
                try {
                    var matches = navigator.userAgent.match(/(msie) ([\w.]+)/i);
                    if (matches[2] < 9) {
                        this.isIE8AndOlder = true;
                    }
                } catch(ex2) {}
            }

            // Listening window blur
            $(window).focus();
            $(window).blur(function(e){
                $.iframeTracker.windowLoseFocus(e);
            });

            // Focus retriever (get the focus back to the page, on mouse move)
            $('body').append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>');
            this.focusRetriever = $('#focus_retriever');
            this.focusRetrieved = false;
            $(document).mousemove(function(e){
                if (document.activeElement && document.activeElement.tagName == 'IFRAME') {
                    $.iframeTracker.focusRetriever.focus();
                    $.iframeTracker.focusRetrieved = true;
                }
            });

            // Special processing to make it work with my old friend IE8 (and older) ;)
            if (this.isIE8AndOlder) {
                // Blur doesn't works correctly on IE8-, so we need to trigger it manually
                this.focusRetriever.blur(function(e){
                    e.stopPropagation();
                    e.preventDefault();
                    $.iframeTracker.windowLoseFocus(e);
                });

                // Keep focus on window (fix bug IE8-, focusable elements)
                $('body').click(function(e){ $(window).focus(); });
                $('form').click(function(e){ e.stopPropagation(); });

                // Same thing for "post-DOMready" created forms (issue #6)
                try {
                    $('body').on('click', 'form', function(e){ e.stopPropagation(); });
                } catch(ex) {
                    console.log("[iframeTracker] Please update jQuery to 1.7 or newer. (exception: " + ex.message + ")");
                }
            }
        },


        // Add tracker to target using handler (bind boundary listener + register handler)
        // target: Array of target elements (native DOM elements)
        // handler: User handler object
        track: function(target, handler){
            // Adding target elements references into handler
            handler.target = target;

            // Storing the new handler into handler list
            $.iframeTracker.handlersList.push(handler);

            // Binding boundary listener
            $(target)
                .bind('mouseover', {handler: handler}, $.iframeTracker.mouseoverListener)
                .bind('mouseout',  {handler: handler}, $.iframeTracker.mouseoutListener);
        },

        // Remove tracking on target elements
        // target: Array of target elements (native DOM elements)
        untrack: function(target){
            if (typeof Array.prototype.filter != "function") {
                console.log("Your browser doesn't support Array filter, untrack disabled");
                return;
            }

            // Unbinding boundary listener
            $(target).each(function(index){
                $(this)
                    .unbind('mouseover', $.iframeTracker.mouseoverListener)
                    .unbind('mouseout', $.iframeTracker.mouseoutListener);
            });

            // Handler garbage collector
            var nullFilter = function(value){
                return value === null ? false : true;
            };
            for (var i in this.handlersList) {
                // Prune target
                for (var j in this.handlersList[i].target) {
                    if ($.inArray(this.handlersList[i].target[j], target) !== -1) {
                        this.handlersList[i].target[j] = null;
                    }
                }
                this.handlersList[i].target = this.handlersList[i].target.filter(nullFilter);

                // Delete handler if unused
                if (this.handlersList[i].target.length == 0) {
                    this.handlersList[i] = null;
                }
            }
            this.handlersList = this.handlersList.filter(nullFilter);
        },

        // Target mouseover event listener
        mouseoverListener: function(e){
            e.data.handler.over = true;
            try {e.data.handler.overCallback(this);} catch(ex) {}
        },

        // Target mouseout event listener
        mouseoutListener: function(e){
            e.data.handler.over = false;
            $.iframeTracker.focusRetriever.focus();
            try {e.data.handler.outCallback(this);} catch(ex) {}
        },

        // Calls blurCallback for every handler with over=true on window blur
        windowLoseFocus: function(event){
            for (var i in this.handlersList) {
                if (this.handlersList[i].over == true) {
                    try {this.handlersList[i].blurCallback();} catch(ex) {}
                }
            }
        }
    };

    // Init the iframeTracker on document ready
    $(document).ready(function(){
        //$.iframeTracker.init();
    });
})(jQuery);

/*
 @file 推广位跟踪
 @author 曹宇 <caoyu#at#csdn.net>
 @version 20130902
 */
function getCookie(sName){
    var allCookie = document.cookie.split("; ");
    for (var i=0; i < allCookie.length; i++){
        var aCrumb = allCookie[i].split("=");
        if (sName == aCrumb[0])
            return aCrumb[1];
    }
    return null;
}

feedListGet = function(ele){
    var feedpid = location.host;
    feedpid = feedpid.split(".")[0];
    var pid = feedlist.attr('data-pid') || $('body').attr('data-pid')||feedpid;
    var mod = feedlist.attr('data-mod');
    var dsm = feedlist.attr('data-dsm');
    var mtp = feedlist.attr('data-mtp') || ($('a img', feedlist)[0] ? 3 : 2);
    var curl = window.location.href;
    var thisFeedLi = $(document).find(feedlist[i]);
    var feedtxt = thisFeedLi.find('a').text();
    var feedtxtUrl = thisFeedLi.find('a').attr('href');
    // var feedtxtUrlsource = thisFeedLi.find('a').attr('href');
    if(feedtxtUrl.substr(0,4)!=="http"&&feedtxtUrl.substr(0,1)==="/"){
        feedtxtUrl = window.location.protocol+'//'+window.location.host+feedtxtUrl;
    }
    var feedUser = thisFeedLi.find('li.user_name a').text()||"";
    var feedUserUrl = thisFeedLi.find('li.user_name a').attr('href')||"";
    var strategy = thisFeedLi.find('a').attr('strategy')||"";
    var feedcon =feedtxt+','+feedtxtUrl+','+strategy+';';
    global = this;
    var ref = global.document.referrer || '-';
    var dcSessionId = getCookie('dc_session_id');
    feedlist.data=function() {
        var _ref1;
        return {
            uid: ((_ref1 = /(; )?(UserName|_javaeye_cookie_id_)=([^;]+)/.exec(global.document.cookie)) != null ? _ref1[3] : void 0) || '-',
            ref: ref,
            pid: pid,
            mod: mod,
            dsm: dsm,
            mtp: mtp,
            con: feedcon,
            ck: '-',
            curl:curl,
            session_id: dcSessionId
        };
    };
};
feedlistScroll= function(){
    var ad, top, _i, _len,bodyH,scrollH,widH,currentTop,currentBottom,feedchild,feedcon,dsm;
    bodyH = $(document).height();
    widH = $(window).height();
    currentTop = top;
    scrollH = $(document).scrollTop();
    currentBottom = scrollH+widH;
    viewedHeight = top;
    feedlist =$(document).find('.csdn-tracking-statistics[data-poputype$="feed"],.tracking-ad[data-poputype$="feed"]');
    for(i = 0; i<feedlist.length; i++){
        feedchild = feedlist[i];
        var childListTop = $(feedlist[i]).offset().top;
        feedListGet();
        if (($(feedlist[i]).attr('data-feed-show')==="false")&&(currentBottom>=childListTop)&&!$(feedlist[i]).is(".tracking-click")) {
            $(feedlist[i]).attr({'data-feed-show':'true'});
            var _url = 'http://flume.csdn.net/csdnbi',dsm;
            var str = '';
            $(feedchild).data[Math.random() * 10000 | 0] = '';
            $(feedchild).data['x-acl-token'] = 'status_js_dkuyqthzbajmncbsb_token';
            bodystr = $.param(feedlist.data());
            datastr ={
                headers:{
                    component:'enterprise',
                    datatype:'re',
                    version:'v1'
                },
                body:JSON.stringify({
                    re: bodystr
                })
            };
            var str=[];
            str.push(datastr);
            if($(feedchild).attr('data-dsm')==="post"){
                $.ajax({
                    url:_url,
                    type:'POST',
                    async:true,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    contentType:'application/json',
                    data:JSON.stringify(str),
                    success:function(){
                    }
                });
            }
        }
    }
}
$(".center_main").scroll(function () {
    feedlistScroll();
});
;(function() {
    (function(definition, undef) {
        var $, exports, global, i;
        global = this;
        $ = global.jQuery;
        exports = {};
        definition(global, exports, $);
        if (global.csdn === undef) {
            global.csdn = exports;
        }
        for (i in exports) {
            global[i] = global.csdn[i] = exports[i];
        }
    })(function(global, exports, $, undef) {
        var iarr = [], _key=0;
        var ads,feedlist, crossdomainGet, domReadyListener, done, findAllAds, linksContent, protocol, ref, s, trackingAd, viewedHeight,hostName, w,scrollHandle,dcSessionId;
        //blog 内容块中链接点击统计
        //var contentBoxLinks = [];
        protocol = global.location.protocol.substr(0, 4) === 'http' ? '' : 'http:';
        ref = global.document.referrer || '-';
        ads = [];
        feedlist = [];
        viewedHeight = 0;
        hostName = window.location.hostname;
        dcSessionId = getCookie('dc_session_id');
        function getCookie(sName){
            var allCookie = document.cookie.split("; ");
            for (var i=0; i < allCookie.length; i++){
                var aCrumb = allCookie[i].split("=");
                if (sName == aCrumb[0])
                    return aCrumb[1];
            }
            return null;
        }

        scrollHandle = function(){
            var ad, top, _i, _len,bodyH,scrollH,widH,currentTop,currentBottom,feedchild,feedcon,dsm;
            bodyH = $(document).height();
            widH = $(window).height();
            top = (w.scrollTop() || document.body.scrollTop || document.documentElement.scrollTop) + w.height();  //IE兼容问题
            currentTop = top;
            scrollH = $(document).scrollTop();
            currentBottom = scrollH+widH;
            viewedHeight = top;
            feedlistScroll();
            for (_i = 0, _len = ads.length; _i < _len; _i++) {
                ad = ads[_i];
                if ((!ad.viewed)&&(currentBottom>ad.top)&&(ad.top>=scrollH)&&!ad.ele.is(".tracking-click")) {
                    crossdomainGet(ad.data(), true);
                    ad.viewed = true;
                }
            }

        }
        domReadyListener = function() {
            var ad, groups, k, n, v,  _i, _len, _ref, _ref1;
            //检索内容区块中的链接
            n = 0;
            w = $(global).scroll(function() {
                if (!ads[0]) {
                    return;
                }
                global.clearTimeout(n);
                return n = global.setTimeout(scrollHandle, 100);
            });
            groups = {};
            _ref = $(document).find('.tracking-ad,.csdn-tracking-statistics');
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                ad = _ref[_i];
                k = $(document).find(ad).attr('data-mod');

                ((_ref1 = groups[k]) != null ? _ref1.push(ad) : void 0) || (groups[k] = [ad]);
            }

            for (k in groups) {

                v = groups[k];

                trackingAd($(v));
            }
            $.iframeTracker.init();
            return w.triggerHandler('scroll');
        };

        /*
         跟踪指定的推广位，包括曝光和点击
         @param {CSS Selector/jQuery Object/DOMElement/DOMElement[]} ele 包含推广链接的推广位容器标签
         @param {Object} opts 选项，如下
         @param {String} opts.pid 产品线标识，可选，默认取当前页域名中foo.csdn.net中的foo，不会处理三级域名的情况
         @param {String} opts.mod 模块id，必须
         @param {String} opts.mtp 模块类型，可选，默认会探测是否有带链接的图片，如果有则是3图片，否则2文字
         @param {String/RegExp} opts.trim 对最终名称做进一步裁剪的正则，可选，始终会先裁剪掉两边的空白字符
         @param {CSS Selector} filter 可选，对跟踪的推广链接进一步过滤，这里将包含那些class="foo"但是不包括class="foo bar"的链接
         */
        trackingAd = exports.trackingAd = function(ele, opts) {
            var filter, mod, mtp, pid, trim, _ref,dsm,curl;
            if (opts == null) {
                opts = {};
            }
            if (typeof ele === 'string' || !ele instanceof $) {
                ele = $(ele);
            }
            pid = opts.pid || ele.attr('data-pid') || global.document.body.getAttribute('data-pid') || ((_ref = /(\w+)\.\w+\.\w+$/.exec(global.location.host)) != null ? _ref[1] : void 0);
            mod = opts.mod || ele.attr('data-mod');
            blk = opts.blk || ele.attr("chg-blk");
            mtp = opts.mtp || ele.attr('data-mtp') || ($('a img', ele)[0] ? 3 : 2);
            trim = opts.trim || ele.attr('data-trim');
            //提交模式 默认GET模式
            dsm = typeof (dsm=opts.dsm || ele.attr('data-dsm') || 'get') === "string" ? (dsm.toLowerCase()) : 'get';

            if (typeof trim === 'string' && trim.charAt(0) === '/') {
                trim = trim.split('/');
                trim = new RegExp(trim.slice(1, -1), trim.slice(-1));
            }

            filter = opts.filter || ele.attr('data-filter') || '';
            curl = window.location.href;
            return findAllAds(ele, filter, function(links) {
                var ad, con;
                con = linksContent(mtp, trim, links);

                ad = {
                    top: ele.offset().top,
                    ele: ele,
                    viewed: false,
                    data: function() {
                        var _ref1;
                        return {
                            uid: ((_ref1 = /(; )?(UserName|_javaeye_cookie_id_)=([^;]+)/.exec(global.document.cookie)) != null ? _ref1[3] : void 0) || '-',
                            ref: ref,
                            pid: pid,
                            mod: mod,
                            dsm: dsm,
                            mtp: mtp,
                            con: con,
                            ck: '-',
                            curl:curl,
                            session_id: dcSessionId
                        };
                    }
                };
                var adMock = ad.data();
                /*if($(ad.ele).attr('data-poputype')!=='feed'){
                 ads.push(ad);
                 }*/
                ads.push(ad);
                if (viewedHeight > ad.top) {
                    $(global).triggerHandler('scroll');
                }
                links.each(function() {
                    if (blk === "0") return;
                    if (this.target === '') {
                        this.target = '_blank';
                    }
                });
                //异步加载
                $(ad.ele).on('click','a',function(){
                    var d;
                    if($(ad.ele).attr('data-poputype')!=='feed'){
                        d = ad.data();
                        d.ck = linksContent(mtp,trim, $(this));
                        crossdomainGet(d);
                    }

                });
            });
        };
        findAllAds = function(cont, filter, callback) {
            var count, iframes, links,timer;
            links = $('a' + filter, cont);
            iframes = $('iframe', cont);
            if (iframes[0]) {
                count = iframes.length;
                return iframes.each(function() {
                    var ifr, listener;
                    ifr = $(this);
                    listener = function() {
                        if (ifr === null) {
                            return;
                        }
                        //请求的iframe是否同源
                        if(ifr.attr('src').split('?')[0].indexOf(hostName) == -1){
                            ifr.iframeTracker({
                                blurCallback: function(){
                                    crossdomainGet(this.data);
                                    // Do something when iframe is clicked (like firing an XHR request)
                                    // You can know which iframe element is clicked via this._overId
                                },
                                overCallback: function(element){
                                    var ele = $(element).parents(".tracking-ad"),_ref,_ref2;
                                    this.data = {
                                        con:'-',
                                        curl:window.location.href,
                                        mod:ele.attr('data-mod'),
                                        mtp:ele.attr('data-mtp') || ($('a img', ele)[0] ? 3 : 2),
                                        pid:ele.attr('data-pid') || global.document.body.getAttribute('data-pid') || ((_ref = /(\w+)\.\w+\.\w+$/.exec(global.location.host)) != null ? _ref[1] : void 0),
                                        ref:ref,
                                        uid:((_ref2 = /(; )?(UserName|_javaeye_cookie_id_)=([^;]+)/.exec(global.document.cookie)) != null ? _ref2[3] : void 0) || '-',
                                        ck:$(element).attr('src'),
                                        dsm:"post",
                                        session_id: dcSessionId
                                    }
                                    //this._overId = $(element).parents('.iframe_wrap').attr('id'); // Saving the iframe wrapper id
                                },
                                outCallback: function(element){
                                    this.ifr_src = null; // Reset hover iframe wrapper id
                                },
                                data: null
                            });
                        }else{
                            links = links.add(ifr.contents().find('a' + filter));
                        }
                        ifr = null;
                        count--;
                        if (count === 0) {
                            if(timer){
                                clearTimeout(timer);
                            }
                            //触发一次scroll事件
                            scrollHandle()
                            return callback(links);
                        }
                    };
                    return ifr.load(listener);
                });
                timer = setTimeout(function(){
                    iframes = [];
                    //触发一次scroll事件
                    scrollHandle()
                    return callback(links);
                },8000)
            } else {
                return callback(links);
            }
        };
        linksContent = function(mtp, trim, ele) {
            return ele.map(function() {
                var img, text;
                if (mtp === 3) {
                    img = $('img', this)[0];
                    if (img) {
                        text = img.title || img.alt || img.src;
                    }
                }
                if (!text) {
                    text = this.innerHTML.replace(/<[^>]+>/g, '').replace(/^\s+|\s+$/g, '') || this.title || this.alt || this.innerHTML.replace(/^\s+|\s+$/g, '');
                }

                if (trim) {
                    text = (text + '').replace(trim, '');
                }
                if (this.attributes['strategy'])
                {
                    return text + ',' + this.href + ',' + this.attributes['strategy'].nodeValue;
                }
                else
                {
                    return text + ',' + this.href;
                }

            }).get().join(';');
        };
        crossdomainGet = function(data, isA) {
            data['x-acl-token'] = 'status_js_dkuyqthzbajmncbsb_token';
            csdn.trackReport("re",$.param(data));
        };

        feedlistClick = function(){
            var feedlist = $(this).parents(".csdn-tracking-statistics,.tracking-ad");
            var pid = feedlist.attr('data-pid') || $('body').attr('data-pid') || ((_ref = /(\w+)\.\w+\.\w+$/.exec(global.location.host)) != null ? _ref[1] : void 0);
            var mod = feedlist.attr('data-mod');
            var dsm = feedlist.attr('data-dsm');
            //dsm = typeof (feedlist[0].ele.attr('data-dsm') || 'get') === "string" ? (dsm.toLowerCase()) : 'get';
            var mtp = feedlist.attr('data-mtp') || ($('a img', feedlist)[0] ? 3 : 2);
            var curl = window.location.href;
            var feedtxt = feedlist.find('a').text();
            var feedtxtUrlsource = feedlist.find('a').attr('href');
            var feedtxtUrl='';
            if(feedtxtUrlsource.substr(0,4)!=="http"&&feedtxtUrlsource.substr(0,1)==="/"){
                feedtxtUrl = window.location.protocol+'//'+window.location.host+feedtxtUrlsource;
            }else{
                feedtxtUrl = feedtxtUrlsource;
            }
            var feedUser = feedlist.find('li.user_name a').text()||"";
            var feedUserUrl = feedlist.find('li.user_name a').attr('href')||"";
            var feedUrlSource = feedlist.find('a').attr('strategy')||"";
            var feedckcon = feedtxt+','+feedtxtUrl+','+feedUrlSource+';';
            var feedck = feedckcon||"-";
            var feedcon =feedtxt+','+feedtxtUrl+','+feedUrlSource+';';
            feedlist.data=function() {
                var _ref1;
                return {
                    uid: ((_ref1 = /(; )?(UserName|_javaeye_cookie_id_)=([^;]+)/.exec(global.document.cookie)) != null ? _ref1[3] : void 0) || '-',
                    ref: ref,
                    pid: pid,
                    mod: mod,
                    dsm: dsm,
                    mtp: mtp,
                    con: feedcon,
                    ck: feedck,
                    curl:curl,
                    session_id: dcSessionId
                };
            };
            var _url = protocol + '//flume.csdn.net/csdnbi',dsm;
            var str = '';
            $(feedlist).data[Math.random() * 10000 | 0] = '';
            $(feedlist).data['x-acl-token'] = 'status_js_dkuyqthzbajmncbsb_token';
            bodystr = $.param(feedlist.data());
            datastr ={
                headers:{
                    component:'enterprise',
                    datatype:'re',
                    version:'v1'
                },
                body:JSON.stringify({
                    re: bodystr
                })
            };
            var str=[];
            str.push(datastr);
            $.ajax({
                url:_url,
                type:'POST',
                async:true,
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                contentType:'application/json',
                data:JSON.stringify(str),
                success:function(){
                }
            });
        }


        if ($ === undef) {
            done = false;
            s = document.createElement('script');
            s.type = 'text/javascript';
            s.charset = 'utf-8';
            current_protocol = location.protocol;
            s.src = current_protocol+'//c.csdnimg.cn/public/common/libs/jquery/jquery-1.11.1.min.js';
            s.onload = s.onreadystatechange = function() {
                if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                    done = true;
                    global.jQuery.noConflict();
                    $ = global.jQuery;
                    //设置IE跨域访问 兼容到包含9以下
                    if(window.navigator.appVersion.match(/MSIE (\d)*/i)&&Number(window.navigator.appVersion.match(/MSIE (\d)*/i)[1],10)<=9)
                    {
                        $.support.cors = true;
                    }
                    $(domReadyListener);
                    return s.onload = s.onreadystatechange = null;
                }
            };
            document.getElementsByTagName('head')[0].insertBefore(s, null);
        } else {
            $(domReadyListener);
        }
        $(document).on('click','.tracking-ad[data-poputype="feed"] a',feedlistClick);
        $(document).on('click','.csdn-tracking-statistics[data-poputype="feed"] a',feedlistClick);
    });

}).call(this);
