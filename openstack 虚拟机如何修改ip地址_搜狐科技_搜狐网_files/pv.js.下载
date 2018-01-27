(function () {
    // 从html元素的data-log-pv属性中获取额外需要上报的pv参数
    var getPvParamsObj = function() {
        var pvParamsString = document.getElementsByTagName('html')[0].getAttribute('data-log-pv');
        var getPvParamsObj = null;
        try {
            if(pvParamsString) {
                getPvParamsObj = JSON.parse(pvParamsString);
            }
        } catch(error) {
            getPvParamsObj = null;
            console.log('the "data-log-pv" attribute is not a json format!');
        }
        return getPvParamsObj;
    }

    var encode = function(o){
            return window.encodeURIComponent && (typeof(encodeURIComponent) == 'function') ? encodeURIComponent(o) : window.encodeURI && (typeof(window.encodeURI) == 'function') ? window.encodeURI(o) : o;
        }
    var get_suv = function(){
        var reg = /suv=(\d+)/ig.exec(document.cookie);
        return reg && reg[1] ||"";
    }

    var sohu_pvinsight_engine = function () {
        var paramsObj = getPvParamsObj();
        var spv_random_str = escape((new Date().getTime()) * 1000 + Math.round(Math.random() * 1000));
        var spv_screen_w = window.screen.width;
        var spv_screen_h = window.screen.height;
        
        var spv_referrer = encode(document.referrer);
        var spv_id = false;
        /*
         * if want stat iframe, we should add args like this
         * eg: <script type="text/javascript" src="http://js.sohu.com/mail/pv/pv.js?ifr"></script>
         */
        var key_string = 'ifr';
        var spv_channel_flag = false;
        var sct = document.getElementsByTagName('script');
        (function () {
            var _c_s = sct[sct.length - 1], _c_src = _c_s && _c_s.src;
            if (!_c_src) return false;
            var _p = _c_src.split('?')[1];
            if (!_p) return false;
            if (_p.toLowerCase().indexOf(key_string) != -1) spv_channel_flag = true;
        })();
        if (typeof _focus_pv_id != "undefined") {
            spv_id = _focus_pv_id
        } else if (typeof _pvinsight_id != "undefined") {
            spv_id = _pvinsight_id
        }
        if (document.domain.indexOf(".focus.cn") >= 0 || document.domain.indexOf("home.sohu.com") >= 0 || document.domain.indexOf("ihome.sohu.com") >= 0) {
            var spv_dhead = document.getElementsByTagName("head")[0],
                spv_dbody = document.body,
                d = spv_dhead || spv_dbody,
                suv_server = "//pv.focus.cn/suv",
                spv_server = "//pv.focus.cn";
        } else {
            var spv_dhead = document.getElementsByTagName("head")[0],
                spv_dbody = document.body,
                d = spv_dhead || spv_dbody,
                suv_server = "//pv.sohu.com/suv",
                spv_server = "//pv.sohu.com";
        }

        if (spv_channel_flag || top.location == self.location || document.domain.indexOf(".go2map.com") >= 0) {
            var newsuv;
            var spv_server_src;
            var url = encode(window.location.href);

            if (document.cookie.indexOf("SUV=") < 0 || document.cookie.indexOf("IPLOC=") < 0) {
                spv_src = suv_server + "/";
            } else {
                spv_src = spv_server + '/pv.gif';
            }
            if (spv_id) {
                spv_server_src = spv_src + '?t?=_' + spv_random_str + '_' + spv_screen_w + '_' + spv_screen_h + '_' + spv_id + '?r?=' + spv_referrer + "?url?=" + url+"?SUV?="+get_suv();
            } else {
                spv_server_src = spv_src + '?t?=' + spv_random_str + '_' + spv_screen_w + '_' + spv_screen_h + '?r?=' + spv_referrer + "?url?=" + url+"?SUV?="+get_suv();
            }

            // 增加额外的自定义参数
            if (paramsObj) {
                for (var i in paramsObj) {
                    if (paramsObj.hasOwnProperty(i)) {
                        spv_server_src = spv_server_src + '?' + i + '?=' + paramsObj[i];
                    }
                }
            }

            if (d) {
                var _script2 = document.createElement('script');
                _script2.src = spv_server_src;
                d.appendChild(_script2);
            } else {
                document.write("<script type='text/javascript' src='" + spv_server_src + "'></script>");
            }
        }
    }

    if (!window.spv_flag) {
        sohu_pvinsight_engine();
    }
    window.spv_flag = 1;
})();