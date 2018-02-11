jQuery(document).ready(function() {
	
	jQuery(".green_block .login_desc_panel .btn-outline").attr('href', 'https://www.clearos.com/community/my-profile/my-community-dashboard/login');
	jQuery("#clearos_ajaxlogin_form .signup_btn").attr('href', 'https://www.clearos.com/community/my-profile/my-community-dashboard/registration'); 
	jQuery("#clearos_ajaxlogin_form").append('<div class="login_fields uk-text-right"><a href="https://www.clearos.com/community/my-profile/my-community-dashboard/account/lostpassword" class="login-reset">Reset password</a></div>'); 
	jQuery("#portal_ajaxlogin_form .signup_btn").attr('href', 'https://secure.clearcenter.com/portal/account.jsp'); 
	jQuery("#portal_ajaxlogin_form").append('<div class="login_fields uk-text-right"><a href="https://secure.clearcenter.com/portal/lost_password.jsp" class="login-reset">Reset password</a></div>');
	jQuery("#clearvm_ajaxlogin_form .signup_btn").attr('href', 'https://witsbits.com/app/#/register'); 
	jQuery("#clearvm_ajaxlogin_form").append('<div class="login_fields uk-text-right"><a href="https://witsbits.com/app/#/forgot-password" class="login-reset">Reset password</a></div>');
	jQuery(".orange_block .login_desc_panel .btn-outline").attr('href', 'https://www.clearcenter.com/');
	jQuery(".blue_block .login_desc_panel .btn-outline").attr('href', 'https://witsbits.com/app/');
    jQuery("#clearos_ajaxlogin").append('<style>.start_using { color: #7a7474; } .green_block.active .start_using, .green_block:hover .start_using { color: #608921; } .orange_block.active .start_using, .orange_block:hover .start_using { color: #C75E21; } .blue_block.active .start_using, .blue_block:hover .start_using { color: #3D85C6; }</style><div class="tools_logout"><button id="clearos_logout" type="button" class="uk-button-color uk-button">LOGOUT <span id="clearos_loading_image_logout" class="toolsloader" style="display: none;"> <img src="https://www.clearos.com/images/tool_loading.gif" alt="toolsloading"></span></button><a target="_blank" href="https://www.clearos.com/community/my-profile" class="start_using" >START USING</a>'), jQuery.ajax({
        url: "https://www.clearos.com/login.php?action=islogin",
        xhrFields: {
            withCredentials: !0
        },
        dataType: "json",
        type: "post",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        beforeSend: function() {
            jQuery("#clearos_loading_image").show()
        },
        success: function(e) {
            jQuery("#clearos_loading_image").hide(), "notloogedin" != e && (jQuery("#clearos_login_error").html(""), jQuery("#clearos_username_show").html(e.username), jQuery("#clearos_ajaxlogin").show(), jQuery("#clearos_ajaxlogin_form").hide(), 1 == e.isset_cookie && jQuery("#clearos_rememberme").attr("checked", "checked"))
        },
        error: function() {
            jQuery("#clearos_loading_image").hide()
        },
        complete: function() {
            jQuery("#clearos_loading_image").hide()
        }
    }), jQuery("#clearos_login").submit(function(e) {
        e.preventDefault(), jQuery.support.cors = !0, jQuery.ajax({
            url: "https://www.clearos.com/login.php",
            data: jQuery("#clearos_login").serialize(),
            type: "post",
            xhrFields: {
                withCredentials: !0
            },
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            beforeSend: function() {
                jQuery("#clearos_loading_image").show(), jQuery("#clearos_login_error").html("")
            },
            success: function(e) {
                jQuery("#clearos_loading_image").hide(), e.error ? jQuery("#clearos_login_error").html('<div class="uk-alert-danger uk-alert">' + e.msg + "</div>") : (jQuery("#clearos_ajaxlogin_form").hide(), jQuery("#clearos_login_error").html(""), jQuery("#clearos_username_show").html(e.username), jQuery("#clearos_ajaxlogin").show(), 1 == e.remember ? jQuery("#clearos_rememberme").attr("checked", "checked") : jQuery("#clearos_rememberme").removeAttr("checked"), jQuery("#clearos_login input").each(function() {
                    jQuery(this).val("");
                    if(document.location.hostname == 'www.clearos.com'){
                        location.reload(true);
                    }
                    
                }))
            },
            error: function() {
                jQuery("#clearos_loading_image").hide()
            },
            complete: function() {
                jQuery("#clearos_loading_image").hide()
            }
        })
    }), jQuery(document).on("click", "#clearos_logout", function(e) {
        e.preventDefault(), jQuery.support.cors = !0, jQuery.ajax({
            url: "https://www.clearos.com/login.php?action=logout",
            type: "post",
            xhrFields: {
                withCredentials: !0
            },
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            beforeSend: function() {
                jQuery("#clearos_loading_image_logout").show(), jQuery("#clearos_login_error").html("")
            },
            success: function(e) {
                jQuery("#clearos_loading_image_logout").hide(), e.error ? jQuery("#clearos_login_error").html('<div class="uk-alert-danger uk-alert">' + e.msg + "</div>") : (jQuery("#clearos_ajaxlogin_form").show(), jQuery("#clearos_login_error").html(""), jQuery("#clearos_username_show").html(""), jQuery("#clearos_ajaxlogin").hide(), jQuery("#clearos_rememberme").removeAttr("checked"))
            },
            error: function() {
                jQuery("#clearos_loading_image_logout").hide()
            },
            complete: function() {
                jQuery("#clearos_loading_image_logout").hide();
               if(document.location.hostname == 'www.clearos.com'){
                        location.reload(true);
                }

            }
        })
    }), jQuery("#portal_ajaxlogin").append('<button id="portal_logout" type="button" class="uk-button-color uk-button">LOGOUT <span id="portal_loading_image_logout" class="toolsloader" style="display: none;"> <img src="https://www.clearos.com/images/tool_loading.gif" alt="toolsloading"></span></button><a target="_blank" href="https://secure.clearcenter.com/portal/" class="start_using" >START USING</a>'), jQuery.ajax({
        url: "https://secure.clearcenter.com/portal/startload.jsp?action=islogin",
        type: "post",
        dataType: "xml",
        xhrFields: {
            withCredentials: !0
        },
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        beforeSend: function() {
            jQuery("#portal_loading_image").show(), jQuery("#portal_login_error").html("")
        },
        success: function(e) {
            jQuery("#portal_loading_image").hide(), 0 == jQuery(e).find("error").text() && (jQuery("#portal_ajaxlogin").show(), jQuery("#portal_username_show").html(jQuery(e).find("username").text()), jQuery("#portal_ajaxlogin_form").hide(), 1 == jQuery(e).find("isset_cookie").text() && jQuery("#portal_rememberme").attr("checked", "checked"))
        },
        error: function() {
			jQuery("#portal_loading_image").hide()
        },
        complete: function() {
			jQuery("#portal_loading_image").hide()
        }
    }), jQuery("#portal_login").submit(function(e) {
        e.preventDefault(), jQuery.support.cors = !0;
        jQuery("#ccpassword").val();
        jQuery.ajax({
            url: "https://secure.clearcenter.com/portal/ajaxlogin.jsp",
            data: jQuery("#portal_login").serialize(),
            type: "post",
            xhrFields: {
                withCredentials: !0
            },
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            beforeSend: function() {
                jQuery("#portal_loading_image").show(), jQuery("#portal_login_error").html("")
            },
            success: function(e) {
                jQuery("#portal_loading_image").hide(), 1 == jQuery(e).find("error").text() ? jQuery("#portal_login_error").html('<div class="uk-alert-danger uk-alert">' + jQuery(e).find("msg").text() + "</div>") : (jQuery("#portal_ajaxlogin_form").hide(), jQuery("#portal_username_show").html(jQuery(e).find("username").text()), 1 == jQuery(e).find("isset_cookie").text() ? jQuery("#portal_rememberme").attr("checked", "checked") : jQuery("#portal_rememberme").removeAttr("checked"), jQuery("#portal_login_error").html(""), jQuery("#portal_ajaxlogin").show(), jQuery("#portal_login input").each(function() {
                    jQuery(this).val("")
                }))
            },
            error: function() {
                jQuery("#portal_loading_image").hide()
            },
            complete: function() {
                jQuery("#portal_loading_image").hide()
            }
        })
    }), jQuery(document).on("click", "#portal_logout", function(e) {
        e.preventDefault(), jQuery.support.cors = !0, jQuery.ajax({
            url: "https://secure.clearcenter.com/portal/ajaxlogin.jsp?action=logout",
            type: "post",
            xhrFields: {
                withCredentials: !0
            },
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            beforeSend: function() {
                jQuery("#portal_loading_image_logout").show(), jQuery("#portal_login_error").html("")
            },
            success: function(e) {
                jQuery("#portal_loading_image_logout").hide(), e.error ? jQuery("#portal_login_error").html('<div class="uk-alert-danger uk-alert">' + e.msg + "</div>") : (jQuery("#portal_ajaxlogin_form").show(), jQuery("#portal_login_error").html(""), jQuery("#portal_username_show").html(""), jQuery("#portal_ajaxlogin").hide(), jQuery("#portal_rememberme").removeAttr("checked"))
            },
            error: function() {
                jQuery("#portal_ajaxlogin_form").show(), jQuery("#portal_login_error").html(""), jQuery("#portal_username_show").html(""), jQuery("#portal_ajaxlogin").hide(), jQuery("#portal_rememberme").removeAttr("checked"), jQuery("#portal_loading_image_logout").hide()
            },
            complete: function() {
                jQuery("#portal_loading_image_logout").hide()
            }
        })
    }), jQuery("#clearvm_ajaxlogin").append('<div class="tools_logout"><button id="clearvm_logout" type="button" class="uk-button-color uk-button">LOGOUT <span id="clearvm_loading_image_logout" class="toolsloader" style="display: none;"> <img src="https://www.clearos.com/images/tool_loading.gif" alt="toolsloading"></span></button><a target="_blank" href="https://witsbits.com/app/#/" class="start_using" >START USING</a>'), jQuery.ajax({
        url: "https://witsbits.com/ember_api/v1/accounts",
        xhrFields: {
            withCredentials: !0
        },
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        beforeSend: function() {
            jQuery("#clearvm_loading_image").show(), jQuery("#clearvm_login_error").html("")
        },
        success: function(e) {
            jQuery("#clearvm_loading_image").hide(), "undefined" != typeof e.accounts[0].users && (jQuery("#clearvm_login_error").html(""), jQuery("#clearvm_username_show").html(e.accounts[0].users[0].username), jQuery("#clearvm_ajaxlogin").show(), jQuery("#clearvm_ajaxlogin_form").hide())
        },
        error: function() {
            jQuery("#clearvm_loading_image").hide()
        },
        complete: function() {
            jQuery("#clearvm_loading_image").hide()
        }
    }), jQuery("#clearvm_login").submit(function(e) {
        e.preventDefault(), jQuery.support.cors = !0, jQuery.ajax({
            url: "https://witsbits.com/ember_api/v1/sessions?login",
            data: jQuery("#clearvm_login").serialize(),
            type: "post",
            xhrFields: {
                withCredentials: !0
            },
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            beforeSend: function() {
                jQuery("#clearvm_loading_image").show(), jQuery("#clearvm_login_error").html("")
            },
            success: function(e) {
                jQuery("#clearvm_loading_image").hide(), jQuery("#clearvm_ajaxlogin_form").hide(), jQuery("#clearvm_login_error").html(""), jQuery("#clearvm_username_show").html(e.user.username), jQuery("#clearvm_ajaxlogin").show(), 1 == e.remember ? jQuery("#clearvm_rememberme").attr("checked", "checked") : jQuery("#clearvm_rememberme").removeAttr("checked"), jQuery("#clearvm_login input").each(function() {
                    jQuery(this).val("")
                })
            },
            error: function(e) {
                "ERROR" == e.responseJSON.message && jQuery("#clearvm_login_error").html('<div class="uk-alert-danger uk-alert">Invalid email and/or password.</div>'), jQuery("#clearvm_loading_image").hide()
            },
            complete: function() {
                jQuery("#clearvm_loading_image").hide()
            }
        })
    }), jQuery(document).on("click", "#clearvm_logout", function(e) {
        e.preventDefault(), jQuery.support.cors = !0, jQuery.ajax({
            url: "https://witsbits.com/ember_api/v1/sessions?logout",
            type: "post",
            xhrFields: {
                withCredentials: !0
            },
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            beforeSend: function() {
                jQuery("#clearvm_loading_image_logout").show(), jQuery("#clearvm_login_error").html("")
            },
            success: function() {
                jQuery("#clearvm_loading_image_logout").hide(), jQuery("#clearvm_ajaxlogin_form").show(), jQuery("#clearvm_login_error").html(""), jQuery("#clearvm_username_show").html(""), jQuery("#clearvm_ajaxlogin").hide(), jQuery("#clearvm_rememberme").removeAttr("checked")
            },
            error: function(e) {
                "ERROR" == e.responseJSON.message && jQuery("#clearvm_login_error").html('<div class="uk-alert-danger uk-alert">Please try again.</div>'), jQuery("#clearvm_loading_image_logout").hide()
            },
            complete: function() {
                jQuery("#clearvm_loading_image_logout").hide()
            }
        })
    }),
    jQuery("#offcanvas #clearos_ajaxlogin").append('<style>.start_using { color: #7a7474; } .green_block.active .start_using, .green_block:hover .start_using { color: #608921; } .orange_block.active .start_using, .orange_block:hover .start_using { color: #C75E21; } .blue_block.active .start_using, .blue_block:hover .start_using { color: #3D85C6; }</style><div class="tools_logout"><button id="clearos_logout" type="button" class="uk-button-color uk-button">LOGOUT <span id="clearos_loading_image_logout" class="toolsloader" style="display: none;"> <img src="https://www.clearos.com/images/tool_loading.gif" alt="toolsloading"></span></button><a target="_blank" href="https://www.clearos.com/" class="start_using" >START USING</a>'), jQuery.ajax({
        url: "https://www.clearos.com/login.php?action=islogin",
        xhrFields: {
            withCredentials: !0
        },
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        beforeSend: function() {
            jQuery("#offcanvas #clearos_loading_image").show()
        },
        success: function(e) {
            jQuery("#offcanvas #clearos_loading_image").hide(), "notloogedin" != e && (jQuery("#offcanvas #clearos_login_error").html(""), jQuery("#offcanvas #clearos_username_show").html(e.username), jQuery("#offcanvas #clearos_ajaxlogin").show(), jQuery("#offcanvas #clearos_ajaxlogin_form").hide(), 1 == e.isset_cookie && jQuery("#offcanvas #clearos_rememberme").attr("checked", "checked"))
        },
        error: function() {
            jQuery("#offcanvas #clearos_loading_image").hide()
        },
        complete: function() {
            jQuery("#offcanvas #clearos_loading_image").hide()
        }
    }), jQuery("#offcanvas #clearos_login").submit(function(e) {
        e.preventDefault(), jQuery.support.cors = !0, jQuery.ajax({
            url: "https://www.clearos.com/login.php",
            data: jQuery("#offcanvas #clearos_login").serialize(),
            type: "post",
            xhrFields: {
                withCredentials: !0
            },
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            beforeSend: function() {
                jQuery("#offcanvas #clearos_loading_image").show(), jQuery("#offcanvas #clearos_login_error").html("")
            },
            success: function(e) {
                jQuery("#offcanvas #clearos_loading_image").hide(), e.error ? jQuery("#offcanvas #clearos_login_error").html('<div class="uk-alert-danger uk-alert">' + e.msg + "</div>") : (jQuery("#offcanvas #clearos_ajaxlogin_form").hide(), jQuery("#offcanvas #clearos_login_error").html(""), jQuery("#offcanvas #clearos_username_show").html(e.username), jQuery("#offcanvas #clearos_ajaxlogin").show(), 1 == e.remember ? jQuery("#offcanvas #clearos_rememberme").attr("checked", "checked") : jQuery("#offcanvas #clearos_rememberme").removeAttr("checked"), jQuery("#offcanvas #clearos_login input").each(function() {
                    jQuery(this).val("")
                }))
            },
            error: function() {
                jQuery("#offcanvas #clearos_loading_image").hide()
            },
            complete: function() {
                jQuery("#offcanvas #clearos_loading_image").hide()
            }
        })
    }), jQuery(document).on("click", "#offcanvas #clearos_logout", function(e) {
        e.preventDefault(), jQuery.support.cors = !0, jQuery.ajax({
            url: "https://www.clearos.com/login.php?action=logout",
            type: "post",
            xhrFields: {
                withCredentials: !0
            },
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            beforeSend: function() {
                jQuery("#offcanvas #clearos_loading_image_logout").show(), jQuery("#offcanvas #clearos_login_error").html("")
            },
            success: function(e) {
                jQuery("#offcanvas #clearos_loading_image_logout").hide(), e.error ? jQuery("#offcanvas #clearos_login_error").html('<div class="uk-alert-danger uk-alert">' + e.msg + "</div>") : (jQuery("#offcanvas #clearos_ajaxlogin_form").show(), jQuery("#offcanvas #clearos_login_error").html(""), jQuery("#offcanvas #clearos_username_show").html(""), jQuery("#offcanvas #clearos_ajaxlogin").hide(), jQuery("#offcanvas #clearos_rememberme").removeAttr("checked"))
            },
            error: function() {
                jQuery("#offcanvas #clearos_loading_image_logout").hide()
            },
            complete: function() {
                jQuery("#offcanvas #clearos_loading_image_logout").hide()
            }
        })
    })
});