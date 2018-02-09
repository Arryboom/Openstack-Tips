//===============（菜单栏选中处理）begin==================//
var _url = window.location.href;
if (_url.length < 25)
    document.getElementById("default-aspx").className = "title0c";
if (_url.indexOf("info-list-2") > 0 || _url.indexOf("info-toplist-2") > 0)
    document.getElementById("infolist-2").className = "title1c";
if (_url.indexOf("info-list-3") > 0 || _url.indexOf("info-toplist-3") > 0)
    document.getElementById("infolist-3").className = "title1c";
if (_url.indexOf("info-list-4") > 0 || _url.indexOf("info-toplist-4") > 0)
    document.getElementById("infolist-4").className = "title1c";
if (_url.indexOf("info-list-5") > 0 || _url.indexOf("info-toplist-5") > 0)
    document.getElementById("infolist-5").className = "title1c";
if (_url.indexOf("info-list-6") > 0 || _url.indexOf("info-toplist-6") > 0)
    document.getElementById("infolist-6").className = "title1c";
if (_url.indexOf("info-list-7") > 0 || _url.indexOf("info-toplist-7") > 0)
    document.getElementById("infolist-7").className = "title1c";
if (_url.indexOf("info-list-8") > 0 || _url.indexOf("info-toplist-8") > 0)
    document.getElementById("infolist-8").className = "title1c";
if (_url.indexOf("info-list-9") > 0 || _url.indexOf("info-toplist-9") > 0)
    document.getElementById("infolist-9").className = "title1c";
if (_url.indexOf("info-list-11") > 0 || _url.indexOf("info-toplist-11") > 0)
    document.getElementById("infolist-11").className = "title1c";
if (_url.indexOf("member.html") > 0)
    document.getElementById("memberhtml").className = "title1c";
//===============（菜单栏选中处理）end===================//
function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";

    var data = options.data;
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".", ""));
    var params = arr.join("&");

    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }
}
//------（登录状态）begin--------//
ajax({
    url: "/ajaxjs/member_login.aspx",
    type: "POST",
    data: { act: "loginstate"},
    dataType: "json",
    success: function (response, xml) {
        document.getElementById("logintopdescription").innerHTML = response;
    }
});
//------（登录状态）end--------//
var xt_obj = document.getElementById("xuanting");
var xt_obj_Left = xt_obj.offsetLeft;
var xt_obj_Top = xt_obj.offsetTop;
var xt_scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
window.onscroll = function () {
    var xt_t = document.documentElement.scrollTop || document.body.scrollTop;
    if (xt_obj) {
        if (xt_t > xt_obj_Top && xt_scrollHeight > xt_obj_Top + 1000)
            xt_obj.className = "floatkaishi";
        else
            xt_obj.className = "floatjieshu";
    }
}