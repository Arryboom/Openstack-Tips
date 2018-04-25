
var url = window.location.pathname;
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
    window.location.href = "http://m.chuansong.me"+url;
}

function getCookie(name) {
    var r = document.cookie.match('\\b' + name + '=([^;]*)\\b');
    return r ? r[1] : undefined;
}
function isWxid(wxid) {
    if (wxid.length <= 5) {
        return false;
    }
    var filter = /^([a-zA-Z0-9_-])+$/;
    if (filter.test(wxid)) return true;
    else return false;
}
function recordOutboundLink(link, category, action) {
    try {
        var pageTracker=_gat._getTracker("UA-40292976-1");
        pageTracker._trackEvent(category, action);
    } catch(err) {}
}
