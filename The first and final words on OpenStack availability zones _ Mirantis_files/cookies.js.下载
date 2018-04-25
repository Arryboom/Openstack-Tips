var docCookies = {
    getItem: function (sKey) {
        if (!sKey) {
            return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        if (!sKey) {
            return false;
        }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}



(function(){
    var allCookieNames = [
        'utm_source',
        'utm_medium',
        'ppc_campaign',
        'ppc_adgroup',
        'ppc_keyword',
        'ppc_matchtype',
        'ppc_network',
        'ppc_device',
        'ppc_placement',
        'ppc_placementcategory',
        'ppc_adposition',
        'utm_term',
        'utm_content',
        'utm_campaign',
        'ppc_creative'
    ];

    var cookie = {
        source: { value: getParameterByName('source'), name: 'utm_source' },
        utm_source: { value: getParameterByName('utm_source'), name: 'utm_source' },
        utm_medium: { value: getParameterByName('utm_medium'), name: 'utm_medium' },
        program: { value: getParameterByName('program'), name: 'utm_medium' },
        campaign: { value: getParameterByName('campaign'), name: 'ppc_campaign' },
        adgroup: { value: getParameterByName('adgroup'), name: 'ppc_adgroup' },
        keyword: { value: getParameterByName('keyword'), name: 'ppc_keyword' },
        matchtype: { value: getParameterByName('matchtype'), name: 'ppc_matchtype' },
        network: { value: getParameterByName('network'), name: 'ppc_network' },
        device: { value: getParameterByName('device'), name: 'ppc_device' },
        placement: { value: getParameterByName('placement'), name: 'ppc_placement' },
        placementcategory: { value: getParameterByName('placementcategory'), name: 'ppc_placementcategory' },
        adposition: { value: getParameterByName('adposition'), name: 'ppc_adposition' },
        creative: { value: getParameterByName('creativeid'), name: 'ppc_creative' },
        utm_term: { value: getParameterByName('utm_term'), name: 'utm_term' },
        utm_content: { value: getParameterByName('utm_content'), name: 'utm_content' },
        utm_campaign: { value: getParameterByName('utm_campaign'), name: 'utm_campaign' }
    };

    var removeCookie = function(item){
        if(docCookies.hasItem(item.name)){
            docCookies.removeItem(item.name, '/', '.mirantis.com');
        }
    };

    var removeCookies = function(){
        allCookieNames.forEach(function(item,index){
            if(docCookies.hasItem(item)){
                docCookies.removeItem(item, '/', '.mirantis.com');
            }
        });
    };

    var setCookies = function(item){
        if (item.value) {
            docCookies.setItem(item.name, item.value, 86400, '/', ".mirantis.com");
        }
    };

    var checkFirstVisit = function () {
        if (!docCookies.hasItem('firstvisit')) {
            docCookies.setItem('firstvisit', 'no', 86400, '/', ".mirantis.com");
            return true;
        }

        return false;
    };

    var checkUrlParams = function () {
        if((cookie.utm_source.value && cookie.utm_medium.value) || getParameterByName('mkt_tok')){
            if(checkForPPC()){
                return false;
            }

            return true;
        }

        return false;
    };

    var checkForPPC = function(){
        if(docCookies.hasItem('utm_source')){
            if(docCookies.getItem('utm_source') != 'PPC'){
                return false;
            }
        }

        return true;
    };

    var referrer = function () {
        var source = 'Website';
        var medium = 'Direct';
        var referrer = false;
        var search_engines = ['yahoo.com', 'google.com', 'live.com', 'bing.com', 'ask.com', 'duckduckgo.com'];

        if(document.referrer){
            medium = 'Referral';
            referrer = document.referrer.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
            if(search_engines.indexOf(referrer) > -1){
                medium = 'Organic';
            }

            if (!location.search){
                docCookies.setItem('referrerDomain', referrer, 86400, '/', ".mirantis.com");
            }
        }

        if (!location.search){
            docCookies.setItem('utm_source', source, 86400, '/', ".mirantis.com");
            docCookies.setItem('utm_medium', medium, 86400, '/', ".mirantis.com");
        } else if(getParameterByName('mkt_tok')) {
            docCookies.setItem('utm_source', 'Email', 86400, '/', ".mirantis.com");
            docCookies.setItem('utm_medium', 'Marketo', 86400, '/', ".mirantis.com");
        }
    };

    var setRtpCookies = function(){

        ['rTPFortune500','rTPFortune1000','rTPGlobal2000'].forEach(function(item,index){
            if(docCookies.hasItem(item)){
                docCookies.removeItem(item, '/', '.mirantis.com');
            }
        });

        var checkRtpCookies = function(segments, name){
            var result = segments.filter(function(segment){return segment.name == name;});

            if(result.length > 0){
                return true;
            }

            return false;
        }

        var rtpCallback = function(visitor){

            var matchedSegments = visitor.results.matchedSegments;

            docCookies.setItem('rTPFortune500', checkRtpCookies(matchedSegments, 'Fortune 500'), 86400, '/', ".mirantis.com");
            docCookies.setItem('rTPFortune1000', checkRtpCookies(matchedSegments, 'Fortune 1,000'), 86400, '/', ".mirantis.com");
            docCookies.setItem('rTPGlobal2000', checkRtpCookies(matchedSegments, 'Global 2000'), 86400, '/', ".mirantis.com");
        }

        if(typeof rtp == 'function'){
            rtp('get', 'visitor', rtpCallback);
        }
    }

    var checkValues = function(){

        // if the user has not visited in the last 24 hours OR if the url contains utm_medium=PPC, update cookie values
        if(checkFirstVisit() || checkUrlParams()){

            removeCookies();

            setRtpCookies();

            //set new values
            for(var key in cookie){
                setCookies(cookie[key]);
            }

            //if the url params do not contain both utm_source and utm_medium - check referrer (direct, referrer, organic)
            if(!cookie.utm_medium.value || !cookie.utm_source.value){
                referrer();
            }
        }
    };

    checkValues();
})();