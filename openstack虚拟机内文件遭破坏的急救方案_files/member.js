function memberattention_click() {
    var _memberID = document.getElementById("member_right_t_hfmemberID").value;
    var _currentmemberID = document.getElementById("member_right_t_hfcurrentmemberID").value;
    var _memberIDm = document.getElementById("member_right_t_hfmemberIDm").value;

    if (_currentmemberID == "0") {
        location.href = "http://member.mamicode.com/login.aspx?returnUrl=" + document.URL.replace(/&/, "(_)");
    }
    else {
        ajax({
            url: "/ajaxjs/member_attention.aspx",
            type: "POST",
            data: { act: "attention", id: _currentmemberID, byid: _memberID, idm: _memberIDm },
            dataType: "json",
            success: function (response, xml) {
                if (response != null && response != "") {
                    if (response == "1") {
                        document.getElementById("member_right_t_memberattentionstate").style.display = "";
                        document.getElementById("member_right_t_memberattention").style.display = "none";
                    }
                    else if (response == "-3") {
                        alert('已经关注了！');
                    }
                    else if (response == "-2") {
                        alert('异常！');
                    }
                    else if (response == "-1") {
                        alert('操作异常！');
                    }
                    else {
                        alert('异常！');
                    }
                }
            }
        });
    }
}