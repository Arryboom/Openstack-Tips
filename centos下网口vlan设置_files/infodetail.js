function infoyes_click() {
    ajax({
        url: "/ajaxjs/info_detail_ajaxjs.aspx",
        type: "POST",
        data: { act: "yes", id: id, idm: idm },
        dataType: "json",
        success: function (response, xml) {
            if (response != null && response != "") {
                if (response == "-2") {
                    document.getElementById("spanYesContent").innerHTML = "异常！";
                }
                else if (response == "-1") {
                    document.getElementById("spanYesContent").innerHTML = "您已经赞过了！";
                }
                else {
                    document.getElementById("spanYes").innerHTML = response;
                }
            }
        }
    });
}
function infono_click() {
    ajax({
        url: "/ajaxjs/info_detail_ajaxjs.aspx",
        type: "POST",
        data: { act: "no", id: id, idm: idm },
        dataType: "json",
        success: function (response, xml) {
            if (response != null && response != "") {
                if (response == "-2") {
                    document.getElementById("spanNoContent").innerHTML = "异常！";
                }
                else if (response == "-1") {
                    document.getElementById("spanNoContent").innerHTML = "您已经踩过了！";
                }
                else {
                    document.getElementById("spanNo").innerHTML = response;
                }
            }
        }
    });
}
function infobad_click() {
    ajax({
        url: "/ajaxjs/info_detail_ajaxjs.aspx",
        type: "POST",
        data: { act: "bad", id: id, idm: idm },
        dataType: "json",
        success: function (response, xml) {
            if (response != null && response != "") {
                if (response == "-2") {
                    document.getElementById("spanBadContent").innerHTML = "异常！";
                }
                else if (response == "-1") {
                    document.getElementById("spanBadContent").innerHTML = "您已经举报过了！";
                }
                else {
                    document.getElementById("spanBadContent").innerHTML = "成功举报，感谢您！";
                }
            }
        }
    });
}
function infofavorite_click() {
    var _title = encodeURIComponent(document.getElementById("Htitle").innerHTML);
    ajax({
        url: "/ajaxjs/info_detail_ajaxjs.aspx",
        type: "POST",
        data: { act: "favorite", id: id, idm: idm, title: _title },
        dataType: "json",
        success: function (response, xml) {
            if (response != null && response != "") {
                if (response == "1") {
                    alert("收藏成功！");
                }
                else if (response == "-2") {
                    alert("异常！");
                }
                else if (response == "-3") {
                    alert("您已经收藏过了！");
                }
                else if (response == "-4") {
                    alert("收藏异常！");
                }
                else if (response == "-1") {
                    location.href = memberhost + "login.aspx?returnUrl=" + document.URL.replace(/&/, "(_)");
                }
                else {}
            }
        }
    });
}

function itemCommentYesOnclick(_id) {
    ajax({
        url: "/ajaxjs/info_detail_ajaxjs.aspx",
        type: "POST",
        data: { act: "commentyes", id: id, idm: idm, cid: _id },
        dataType: "json",
        success: function (response, xml) {
            if (response != null && response != "") {
                if (response == "-2") {
                    document.getElementById("spanYesContent_" + _id).innerHTML = "异常！";
                }
                else if (response == "-1") {
                    document.getElementById("spanYesContent_" + _id).innerHTML = "您已经赞过了！";
                }
                else {
                    document.getElementById("spanYes_" + _id).innerHTML = response;
                }
            }
        }
    });
}

function itemCommentNoOnclick(_id) {
    ajax({
        url: "/ajaxjs/info_detail_ajaxjs.aspx",
        type: "POST",
        data: { act: "commentno", id: id, idm: idm, cid: _id },
        dataType: "json",
        success: function (response, xml) {
            if (response != null && response != "") {
                if (response == "-2") {
                    document.getElementById("spanNoContent_" + _id).innerHTML = "异常！";
                }
                else if (response == "-1") {
                    document.getElementById("spanNoContent_" + _id).innerHTML = "您已经踩过了！";
                }
                else {
                    document.getElementById("spanNo_" + _id).innerHTML = response;
                }
            }
        }
    });
}

function itemCommenthfOnclick(_id, _nickname, _content) {
    document.getElementById("commenthfid").value = _id;

    var des = "<div class='padding5 divbackgroundcolor colorboldCheng'>回复：" + _nickname + "</div>" +
            "<div class='padding5 detailpinglundetail'>" + _content + "</div>";

    document.getElementById("commenthf").innerHTML = des;

    location.hash = "#commenthf";
}

function infocommentDel(_id) {
    ajax({
        url: "/ajaxjs/info_detail_ajaxjs.aspx",
        type: "POST",
        data: { act: "delcomment", id: _id },
        dataType: "json",
        success: function (response, xml) {
            if (response != null && response != "") {
                if (response == "-2") {
                    alert("异常！");
                }
                else if (response == "-1") {
                    alert("您未登录！");
                }
                else {
                    document.getElementById("commentitem" + _id).innerHTML = "已删除";
                }
            }
        }
    });
}

function ad_analysis(key) {
    ajax({
        url: "/ajaxjs/info_detail_ajaxjs.aspx",
        type: "POST",
        data: { act: "ad_analysis", key: key },
        dataType: "json",
        success: function (response, xml) {
            
        }
    });
}