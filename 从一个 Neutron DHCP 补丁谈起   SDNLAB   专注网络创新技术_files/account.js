/**
 * user action
 */

//user class selector
var captcha_counter = 60;
var login_selector={
	name:'.container-login-user .login-user .username',
	pwd:'.container-login-user .login-user .password',
	cookie:'.container-login-user rememberMe',
	error_label:'.container-login-user .login-error',
	error_content:'.container-login-user .login-error span',
	submit:'.container-login-user .login-user .btn-primary'
};
var account_bind_selector={
		name:'.main-bind-account .username',
		pwd:'.main-bind-account .password',
		cookie:'rememberMe',
		error_label:'.login-error',
		error_content:'.login-error span',
		submit:'.main-bind-account .btn-primary-reg'
	};
var register_selector={
		name:'.main-reg .username',
		email:'.main-reg .email',
		captcha:'.captcha',
		captcha_btn:'#register_code',
		pwd:'.main-reg .password',
		error_label:'.main-reg .login-error',
		error_content:'.main-reg .login-error span',
		submit:'.main-reg .btn-primary-reg'
	};
var pwd_reset_selector={

		email:'#forget_rules',
		graphics_captcha:'#grapics_captcha',
    	text_captcha:'#text_captcha',
		captcha_btn:'#btn_forget_pwd_captcha',
		captcha_check:'.pwd-reset-next .captcha-check',
		email_check:'.pwd-reset-next .captcha-email',
		pwd_new_one:'.pwd_new_one',
		pwd_new_two:'.pwd_new_two',
		submit_first:'#goto_resetpwd_first',
		submit_next:'.pwd-reset-next .btn-primary-reg'
}
var account_setting={
    	login_name:'#login_name',
    	real_name:'#real_name',
    	nickname:'#nickname',
		name:'.per-center-main .name',
		email:'.per-center-main .email',
		company:'.per-center-main .company',
		job:'.per-center-main .job',
		phone:'.per-center-main .phone',
		signature:'.per-center-main .signature',
		basic_submit:'.per-btn-primary',
		pwd:'.per-center-main2 .password',
		pwd1:'.per-center-main2 .new_pwd1',
		pwd2:'.per-center-main2 .new_pwd2',
		pwd_label:'.per-password-none',
		pwd1_label:'.new-pwd1-none',
		pwd2_label:'.new-pwd2-none',
		pwd_submit:'#btn_confirm_update_pwd'
		
}
var error_notes={
		name_error_none:'用户名不为空',
		name_error_format:'用户名格式错误',
		name_error_used:'用户名已经被注册',
		email_error_none:'手机不为空',
		email_error_format:'手机格式错误',
		email_error_used:'手机已经被注册',
		email_error_unused:'未使该手机注册',
		pwd_error_required:'请输入旧密码',
		pwd_error_checkd_fail:'旧密码验证失败',
		pwd_error_none:'密码不能为空',
		pwd_error_format:'密码格式错误',
		pwd_error_length:'密码长度过短',
		pwd_error_diff:'两次密码不一致',
		captcha_error_none:'验证码不为空，请重新填写',
		captcha_error_format:'验证码错误，请重新填写',
		captcha_error_expired:'验证码过期，请重新填写',
		login_error:'用户名不存在或密码不匹配'
};
var register_notes={
	name:'用户名长度3-18位，不允许有@字符或空格',
	pwd:'密码长度6-16位，不允许有空格'
};

var error_label={
		name:'.username-none',
		email:'.email-none',
		pwd:'.password-none',
		pwd_two:'.password-two-none',
		captcha:'.captcha-none'
};

var domain_name = 'https://'+ window.location.hostname + '/';

var user_templates= new HashMap();
//user ajax action
// user login
function login_check(selector){  //logining action pre check
	var url_type=$.getUrlParam('url_type');
	if(!$(selector.name).val()){
		$(selector.error_content).text(error_notes.name_error_none);
		$(selector.error_label).show();
	}
	else if(!$(selector.pwd).val()){
		$(selector.error_content).text(error_notes.pwd_error_none);
		$(selector.error_label).show();
	}
	else{
		//TODO
		$(login_selector.submit).attr("disabled",true);
		$.ajax({
			url: domain_name + '?action=login',
			type: 'post',
			data : {'username':$(selector.name).val() ,'password':$(selector.pwd).val(),'setcookie':$(selector.cookie).val(),'url_type':url_type,'client_id':$.getUrlParam('client_id')},
			success: function(a) {
				$(login_selector.submit).attr("disabled",false);
				
				if(url_type=='login'){
					if(a.status<1){
						$(selector.error_content).text(error_notes.login_error);
						$(selector.error_label).show();
					}
					else{
						location.href =$.getUrlParam('url');
					}
				}
				else if(url_type=='binding'){
					if(a.status==-1){
						$(selector.error_content).text("用户名或密码错误");
						$(selector.error_label).show();
					}
					else if(a.status==-2){
						$(selector.error_content).text("该账号已经被占用");
						$(selector.error_label).show();
					}
					else if(a.status==1){
						location.href=local_url+'/bind_succeed?type=binded&status_id='+a.status_id+'&client_id='+a.client_id+'&user_id='+a.user_id+'';
					}
					else{
						location.href=local_url+'/bind_failed';
					}
				}
				else if(url_type=='course'){
					
					if(a.status>=0){//直接跳转
						
						location.href =$.getUrlParam('url')+'?url_type=course&status_id='+a.status_id;
					}
					else if(a.status==-1){
						$(selector.error_content).text("用户名或密码错误");
						$(selector.error_label).show();
					}
					else{
						location.href =$.getUrlParam('url');
					}
				}
			}
		});
		}
}
//old version 
function check_login(name,pwd,error_label,setcookie){  //logining action pre check
	var bool_login_check="";
	
	$.ajax({
		url: domain_name + "?action=old_login",
		type: 'post',
		data : {"username":$('.'+name).val() ,"password":$('.'+pwd).val(),'setcookie':setcookie},//
		async:false,
		cache:false,
		beforeSend: function() {
		},
		error: function(a) {
		}, 
		success: function(a) {
			bool_login_check =a;
		}
	});
	if(bool_login_check==2){
		bool_login_check="";
		return true;
	}
	else{
		 bool_login_check="";
		 $('.login-error span').text("用户名或密码错误");
		 $("."+error_label).show();
		return false;
	}
  }
//user register
function register_check_name(){
	username_arr1 = $(register_selector.name).val().split(" ");
	username_arr2 = $(register_selector.name).val().split("@");
	if(!$(register_selector.name).val()){
		$(error_label.name).text(error_notes.name_error_none);
		$(error_label.name).removeClass('font-color-black');
		$(error_label.name).show();
	}
	else if(username_arr1.length != 1||username_arr2.length!=1){
		$(error_label.name).text(error_notes.name_error_format);
		$(error_label.name).removeClass('font-color-black');
		$(error_label.name).show();
	}
	else if($(register_selector.name).val().length<3||$(register_selector.name).val().length>18){
		$(error_label.name).text(error_notes.name_error_format);
		$(error_label.name).removeClass('font-color-black');
		$(error_label.name).show();
	}
	else{
		$.ajax({
			url: domain_name + '?action=register_check_name',
			type: 'get',
			data : {'username': $(register_selector.name).val()},
			success: function(a) {
				if(a.status==-1){
					$(error_label.name).text(error_notes.name_error_used);
					$(error_label.name).removeClass('font-color-black');
					$(error_label.name).show();
				}
			}
		});
	}
}

function register_check_email(){
	var reg= /^\+?[1-9][0-9]*$/;
	if(!$(register_selector.email).val()){
		$(error_label.email).text(error_notes.email_error_none);
		$(error_label.email).show();
	}
	else if(!reg.test($(register_selector.email).val())){
		$(error_label.email).text(error_notes.email_error_format);
		$(error_label.email).show();
	}
	else{
		$.ajax({
			url: domain_name + '?action=register_check_phone',
			type: 'get',
			data : {'phone': $(register_selector.email).val()},
			success: function(a) {
				if(a.status==-1){
					$(error_label.email).text(error_notes.email_error_used);
					$(error_label.email).show();
				} else if(a.status==1){
                    sms_send_token = a.token;
				}
			}
		});
	}

}
function register_check_captcha(){

    var captcha = $(register_selector.captcha).val();
    if(is_string_null(captcha)){
        show_captcha_error('验证码不能为空');
    } else {

		$.ajax({
			url: domain_name + '?action=register_check_captcha',
			type: 'get',
			data : {
				'token':validate_code_token,
				'captcha': captcha
			},
			success: function(a) {

                if (a.succeed == false) {
                    show_captcha_error(a.error_msg);
                } else {
                	reset_captcha_error();
                }
				
			}
		});
	}
	
}
function register_post_captcha(){
	checked=true;
	var reg= /^\+?[1-9][0-9]*$/;
	if(!$(register_selector.email).val()){
		$(error_label.email).text(error_notes.email_error_none);
		$(error_label.email).show();
		checked=false;
	}
	else if(!reg.test($(register_selector.email).val())){
		$(error_label.email).text(error_notes.email_error_format);
		$(error_label.email).show();
		checked=false;
	}
	if(checked){
		captcha_counter=60;
		register_captcha_scaler();
		$(register_selector.captcha_btn).attr('disabled',true).addClass('captcha-button-disable');
		$.ajax({
			url: domain_name + '?action=register_post_captcha',
			type: 'get',
			data : {'email': $(register_selector.email).val()},
			success: function(a) {
				if(a==-2){
					$(error_label.email).text(error_notes.email_error_used);
					$(error_label.email).show();
				}
				else if(a==-1){
					
				}
			}
		});
	}
}
function register_captcha_scaler(){
	captcha_counter--;
	$(register_selector.captcha_btn).text('等待'+captcha_counter+'秒');
	if(captcha_counter==0)
	{  
		 $(register_selector.captcha_btn).text('重新发送');
		 //$(register_selector.captcha_btn).css("color","#F9734D");
		 $(register_selector.captcha_btn).attr('disabled',false).removeClass('captcha-button-disable');
	}
	else
		setTimeout("register_captcha_scaler()",1000);
}

$('#login_captcha_send').click(function () {

    $('#login_captcha_send').attr('disabled', true);

    var phone = $('#phone').val();
    var graphic_captcha = $('#graphic_captcha').val();

    if(is_string_null(phone)){
        show_login_error('手机不能为空');
        $('#login_captcha_send').attr('disabled', false);
    } else if(false == validate_phone_number_format(phone)){
        show_login_error('手机格式或长度不正确');
        $('#login_captcha_send').attr('disabled', false);
    } else if(is_string_null(graphic_captcha)){
        show_login_error('图形验证码不能为空');
        $('#login_captcha_send').attr('disabled', false);
    } else {

        $.ajax({
            url: domain_name + '?action=login_verification_sms',
            type: 'POST',
            data: {
                'phone': phone,
                'graphic_captcha': graphic_captcha
            },
            success: function(result) {

                if(result.succeed == false){
                    $('#login_captcha_send').attr('disabled', false);
                    show_login_error(result.error_msg);
                } else {
                    reset_login_error();

                    validate_code_token = result.token;

                    captcha_counter = 60;
                    $('#login_captcha_send').attr('disabled', true).addClass('captcha-button-disable');
                    login_captcha_scaler();

                }

            }
        });

    }

});

function login_captcha_scaler(){

    captcha_counter--;
    $('#login_captcha_send').text('等待'+captcha_counter+'秒');

    if(captcha_counter==0) {

        $('#login_captcha_send').text('重新发送');
        //$(register_selector.captcha_btn).css("color","#F9734D");
        $('#login_captcha_send').attr('disabled',false).removeClass('captcha-button-disable');

    } else {
        setTimeout("login_captcha_scaler()",1000);
	}

}

var enable_resend_company_email_captcha = true;
function resend_company_email_captcha_scaler(){

    $('#btn_company_email_captcha').attr('disabled',true).addClass('captcha-button-disable');

    captcha_counter--;
    $('#btn_company_email_captcha').text('等待'+captcha_counter+'秒');
    if(captcha_counter==0 || enable_resend_company_email_captcha == false) {
        captcha_counter = 60;
        $('#btn_company_email_captcha').text('重新发送');
        //$(register_selector.captcha_btn).css("color","#F9734D");
        $('#btn_company_email_captcha').attr('disabled',false).removeClass('captcha-button-disable');
    }
    else
        setTimeout("resend_company_email_captcha_scaler()",1000);
}

var enable_reset_captcha_pwd = true;
function pwd_reset_captcha_scaler(){

    $(pwd_reset_selector.captcha_btn).attr('disabled',true).addClass('captcha-button-disable');

	captcha_counter--;
	$(pwd_reset_selector.captcha_btn).text('等待'+captcha_counter+'秒');
	if(captcha_counter==0 || enable_reset_captcha_pwd == false) {
		captcha_counter = 60;
		 $(pwd_reset_selector.captcha_btn).text('重新发送');
		 //$(register_selector.captcha_btn).css("color","#F9734D");
		 $(pwd_reset_selector.captcha_btn).attr('disabled',false).removeClass('captcha-button-disable');
	}
	else
		setTimeout("pwd_reset_captcha_scaler()",1000);
}
function register_check_pwd(){
	pwd_arr = $(register_selector.pwd).val().split(" ");
	if(!$(register_selector.pwd).val()){
		$(error_label.pwd).text(error_notes.pwd_error_none);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
	}
	else if($(register_selector.pwd).val().length<6){
		$(error_label.pwd).text(error_notes.pwd_error_length);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
	}
	else if(pwd_arr.length != 1){
		$(error_label.pwd).text(error_notes.pwd_error_format);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
	}
}

function validate_origin_phone_captcha_scaler(){

    $('#validate_origin_code').attr('disabled',true).addClass('captcha-button-disable');

    captcha_counter--;
    $('#validate_origin_code').text('等待'+captcha_counter+'秒');
    if(captcha_counter == 0) {
        captcha_counter = 60;
        $('#validate_origin_code').text('重新发送');
        //$(register_selector.captcha_btn).css("color","#F9734D");
        $('#validate_origin_code').attr('disabled',false).removeClass('captcha-button-disable');
    } else {
        setTimeout("validate_origin_phone_captcha_scaler()",1000);
	}

}

function register_check_all(){
	var checked=true;
	username_arr1 = $(register_selector.name).val().split(" ");
	username_arr2 = $(register_selector.name).val().split("@");
	if(!$(register_selector.name).val()){
		$(error_label.name).text(error_notes.name_error_none);
		$(error_label.name).removeClass('font-color-black');
		$(error_label.name).show();
		checked=false;
	}
	else if(username_arr1.length != 1||username_arr2.length!=1){
		$(error_label.name).text(error_notes.name_error_format);
		$(error_label.name).removeClass('font-color-black');
		$(error_label.name).show();
		checked=false;
	}
	
	var reg= /^\+?[1-9][0-9]*$/;
	if(!$(register_selector.email).val()){
		$(error_label.email).text(error_notes.email_error_none);
		$(error_label.email).show();
		checked=false;
	}
	else if(!reg.test($(register_selector.email).val()) || !validate_phone_number_format($(register_selector.email).val())){
		$(error_label.email).text(error_notes.email_error_format);
		$(error_label.email).show();
		checked=false;
	}

	pwd_arr = $(register_selector.pwd).val().split(" ");
	if(!$(register_selector.pwd).val()){
		$(error_label.pwd).text(error_notes.pwd_error_none);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
		checked=false;
	}
	else if($(register_selector.pwd).val().length<6){
		$(error_label.pwd).text(error_notes.pwd_error_length);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
		checked=false;
	}
	else if(pwd_arr.length != 1){
		$(error_label.pwd).text(error_notes.pwd_error_format);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
		checked=false;
	}

	if(checked){


        $.ajax({
            url: domain_name + '?action=register_check_data',
            type: 'POST',
            data : {
                'username':$(register_selector.name).val(),
                'phone':$(register_selector.email).val()
            },
            success: function(a) {

                if(a.status == -1){

                    switch (a.error[0]) {
                        case 'name_error' : {

                            $(error_label.name).text('用户名已存在');
                            $(error_label.name).removeClass('font-color-black');
                            $(error_label.name).show();

                        } break;
                        case 'phone_error' : {

                            $(error_label.email).text('手机已经注册');
                            $(error_label.email).show();

                        } break;
                    }

                } else if(a.status == 1 ){

                    var phone_number = $(register_selector.email).val();
                    $('#register_phone_display').val(phone_number);
                    $('.zp-tc_overlay').fadeIn();
                    $('.zp-cotent-flip-reg').fadeIn();

                    $('#register_code').click(function(){register_sms_code()});

                }

            }
        });


	}
}

function register_sms_code(){

    $.ajax({
        url: domain_name + 'register/sms_code/',
        type: 'get',
        data: {
            'token': sms_send_token,
            'phone': $(register_selector.email).val()
        },
        success: function (result) {

            if (result.succeed) {

                sms_send_token = result.delay_token;
                validate_code_token = result.token;

            } else {
                alert(result.error_msg);
            }

        }
    });

}

$('#register_enter').click(function(){

	var captcha = $(register_selector.captcha).val();
	if(is_string_null(captcha)){
		show_captcha_error('验证码不能为空');
	} else {

        var url_type=$.getUrlParam('url_type');
        $('#register_enter').attr("disabled",true);
        $.ajax({
            url: domain_name + '?action=register_check_all',
            type: 'POST',
            data : {
                'username':$(register_selector.name).val(),
                'phone':$(register_selector.email).val(),
                'captcha': captcha,
                'password':$(register_selector.pwd).val(),
                'token':validate_code_token,
                'url_type':url_type,
                'client_id':$.getUrlParam('client_id')
            },
            success: function(a) {

                $('#register_enter').attr("disabled", false);

                if(a.status == -1){

                	var msg = '未知错误';

                    switch (a.error[0]) {
                        case 'token_error' : {
                            msg = '验证码错误';
                        } break;
						case 'captcha_error' : {
							msg = '验证码错误';
						} break;
                        case 'name_error' : {
                            msg = '用户名已存在';
                        } break;
                        case 'phone_error' : {
                            msg = '手机已经注册';
                        } break;
                    }

                    show_captcha_error(msg);

                }

                if (url_type == 'register') {

                    if (a.status == 1) {

                    	var redirect_url = local_url + '/register-success?return_url=' + $.getUrlParam('url');

                    	var register_from = $.getUrlParam('from');

                    	if(null != register_from) {
                            redirect_url += '&from=' + register_from;
						}

                        location.href = redirect_url;

                    } else if (a.status == -2) {
                        location.href = local_url + '/register-fail';
                    }

                } else if (url_type == 'binding') {

                    if (a.status == 1) {
                        location.href = local_url + '/bind_succeed?type=binded&status_id=' + a.status_id + '&client_id=' + a.client_id + '&user_id=' + a.user_id + '';
                    } else {
                        location.href = local_url + '/bind_failed';
                    }

                }
            }
        });

	}

});

function show_captcha_error(msg){

	$('.captcha-none').html(msg);
    $('.captcha-none').show();

}

function reset_captcha_error(){

    $('.captcha-none').html('');
    $('.captcha-none').show();

}

$('#goto_login_phone').click(function(){

    var phone = $('#phone').val();
    var graphic_captcha = $('#graphic_captcha').val();
    var sms_captcha = $('#sms_captcha').val();

    if(is_string_null(phone)){
        show_login_error('手机不能为空');
    } else if(false == validate_phone_number_format(phone)){
        show_login_error('手机格式或长度不正确');
    } else if(is_string_null(graphic_captcha)){
        show_login_error('图形验证码不能为空');
    } else if(is_string_null(sms_captcha)){
        show_login_error('短信验证码不能为空');
    } else {

        $('#goto_login_phone').attr("disabled",true);

        $.ajax({
            url: domain_name + '?action=login_phone',
            type: 'POST',
            data: {
                'phone': phone,
                'graphic_captcha': graphic_captcha,
                'sms_captcha': sms_captcha,
                'token': validate_code_token
            },
            success: function(result) {

                $('#goto_login_phone').attr("disabled", false);

                if(result.succeed == false){
                    show_login_error(result.error_msg);
				} else {

                    reset_login_error();
                    
                    var redirect_url = $.getUrlParam('url');
                    location.href = redirect_url;

				}

            }
        });

    }

});

function validate_phone_number_format(phone){

    var reg= /^\+?[1-9][0-9]*$/;

    if (!reg.test(phone) || phone.length != 11) {
        return false;
    } else {
    	return true;
    }

}

function show_login_error(msg){

    $('.login-error span').text(msg);
    $('.login-error').show();

}

function reset_login_error() {

    $('.login-error').hide();
    $('.login-error span').text('');

}

//user reset password
function reset_check_email(){

	var reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!$(pwd_reset_selector.email).val()){
		$(error_label.email).text(error_notes.email_error_none);
		$(error_label.email).show();
	}
	else if(!reg.test($(pwd_reset_selector.email).val())){
		$(error_label.email).text(error_notes.email_error_format);
		$(error_label.email).show();
	}
	else{
		
		$.ajax({
			url: domain_name + '?action=reset_check_email',
			type: 'get',
			data : {'email': $(pwd_reset_selector.email).val()},
			success: function(a) {
				$(pwd_reset_selector.submit).attr("disabled",false);
				if(a.status==-1){
					$(error_label.email).text(error_notes.email_error_unused);
					$(error_label.email).show();
				}
			}
		});
	}
	
}

var reset_rule = 'email';
function pwd_reset_post_captcha(selector){
	checked=true;
	
	var email_reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!$(selector.email).val()){
		$(error_label.email).text('手机/邮箱不能为空');
		$(error_label.email).show();
		checked=false;
	} else if(!email_reg.test($(selector.email).val()) && false == validate_phone_number_format($(selector.email).val())){
		$(error_label.email).text('手机/邮箱格式不正确');
		$(error_label.email).show();
		checked=false;
	} else if (is_string_null($(selector.graphics_captcha).val())){
        $('#graphics_tips').text('图形验证码不能为空');
        $('#graphics_tips').show();
        checked=false;
	}

	if(checked){

        $('#graphics_tips').hide();
        $(error_label.email).hide();
        $('#text_tips').hide();

		$(selector.captcha_btn).attr('disabled',true).addClass('captcha-button-disable');

        enable_reset_captcha_pwd = true;
        pwd_reset_captcha_scaler();
		
		$.ajax({
			url: domain_name + '?action=pwd_reset_post_captcha',
			type: 'get',
            data: {
                'email': $(selector.email).val(),
                'graphics_captcha': $(selector.graphics_captcha).val()
            },
			success: function(result) {

				if(result.succeed){

					reset_rule = result.rule;
					validate_code_token = result.token;

                } else {

                    enable_reset_captcha_pwd = false;

					switch(result.error_code){
						case 1 : {
                            $('#graphics_tips').text(result.error_msg);
                            $('#graphics_tips').show();
						} break;
                        case 2 :
						case 3 :
						case 4 :{
                            $(error_label.email).text(result.error_msg);
                            $(error_label.email).show();
                        } break;
					}

				}

                $(selector.captcha_btn).attr('disabled',false).removeClass('captcha-button-disable');

                // reload graphics captcha
                $('#pic_captcha').attr('src','/my_sdnlab/captcha.php?ver='+(new Date().getTime()));

			}
		});

	}
}
function pwd_reset_check_captcha(selector){

	if(!$(selector.captcha).val()){
		$(error_label.captcha).text(error_notes.captcha_error_none);
		$(error_label.captcha).show();
	} else if($(selector.captcha).val().length<6){
		$(error_label.captcha).text(error_notes.captcha_error_format);
		$(error_label.captcha).show();
	} else{
		$.ajax({
			url: domain_name + '?action=pwd_reset_check_captcha',
			type: 'get',
			data : {
				'email':$(selector.email).val(),
				'captcha': $(selector.graphics_captcha).val()
			},
			success: function(a) {
				if(a.status==-1){
					$(error_label.captcha).text(error_notes.captcha_error_format);
					$(error_label.captcha).show();
				}
				else if(a.status==-2){
					$(error_label.captcha).text(error_notes.captcha_error_expired);
					$(error_label.captcha).show();
				}
			}
		});
	}
}
function pwd_reset_check_first(selector){

	var captcha=$(selector.text_captcha).val();
	var email =$(selector.email).val();

	if(!captcha) {
		$(error_label.captcha).text(error_notes.captcha_error_none);
		$(error_label.captcha).show();
	} else if(captcha.length < 6) {
		$(error_label.captcha).text(error_notes.captcha_error_format);
		$(error_label.captcha).show();
	} else {
		
		$.ajax({
			url: domain_name + '?action=pwd_reset_check_captcha',
			type: 'get',
			data : {
				'email':email,
				'captcha': captcha,
				'token':validate_code_token
			},
			success: function(a) {
				
				if(a.status == -1){
					$(error_label.captcha).text(error_notes.captcha_error_format);
					$(error_label.captcha).show();
				} else if(a.status == -2){
					$(error_label.captcha).text(error_notes.captcha_error_expired);
					$(error_label.captcha).show();
				} else if(a.status == 1){//跳到下一步
					$('.container .pwd-reset-first').remove();
					$('.container').append(user_templates.get('pwd-reset-next'));
					$(selector.captcha_check).val(captcha);
					$(selector.email_check).val(email);
				}
			}
		});
	}
}
function pwd_reset_check_pwd1(selector){
	var pwd1=$(selector.pwd_new_one).val();
	pwd_arr = pwd1.split(" ");
	if(!pwd1){
		$(error_label.pwd).text(error_notes.pwd_error_none);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
	}
	else if(pwd1.length<6){
		$(error_label.pwd).text(error_notes.pwd_error_length);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
	}
	else if(pwd_arr.length != 1){
		$(error_label.pwd).text(error_notes.pwd_error_format);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
		checked=false;
	}
}
function pwd_reset_check_pwd2(selector){
	var pwd1=$(selector.pwd_new_one).val();
	var pwd2=$(selector.pwd_new_two).val();
	if(!pwd2){
		$(error_label.pwd_two).text('确认'+error_notes.pwd_error_none);
		$(error_label.pwd_two).show();
	}
	else if(pwd2.length<6){
		$(error_label.pwd_two).text('确认'+error_notes.pwd_error_length);
		$(error_label.pwd_two).show();
	}
	else if(pwd1!=pwd2){
		$(error_label.pwd_two).text(error_notes.pwd_error_diff);
		$(error_label.pwd_two).show();
	}
}
function pwd_reset_check_next(selector){
	var pwd1=$(selector.pwd_new_one).val();
	pwd_arr = pwd1.split(" ");
	var pwd2=$(selector.pwd_new_two).val();
	var email =$(selector.email_check).val();
	var captcha=$(selector.captcha_check).val();
	if(!pwd1){
		$(error_label.pwd).text(error_notes.pwd_error_none);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
	}
	else if(pwd1.length<6){
		$(error_label.pwd).text(error_notes.pwd_error_length);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
	}
	else if(pwd_arr.length != 1){
		$(error_label.pwd).text(error_notes.pwd_error_format);
		$(error_label.pwd).removeClass('font-color-black');
		$(error_label.pwd).show();
		checked=false;
	}
	if(!pwd2){
		$(error_label.pwd_two).text('确认'+error_notes.pwd_error_none);
		$(error_label.pwd_two).show();
	}
	else if(pwd2.length<6){
		$(error_label.pwd_two).text('确认'+error_notes.pwd_error_length);
		$(error_label.pwd_two).show();
	}
	else if(pwd1!=pwd2){
		$(error_label.pwd_two).text(error_notes.pwd_error_diff);
		$(error_label.pwd_two).show();
	}
	else{
		$(pwd_reset_selector.submit).attr("disabled",true);
		$.ajax({
			url: domain_name + '?action=pwd_reset_check_next',
			type: 'post',
			data : {
				'pwd1':pwd1,
				'pwd2':pwd2,
				'email':email,
				'captcha': captcha,
				'token': validate_code_token
			},
			success: function(a) {
				$(pwd_reset_selector.submit).attr("disabled",false);
				$(selector.submit_next).attr("disabled",true);
				$('.container .pwd-reset-next').remove();
				if(a.status==-1){
					$('.container').append(user_templates.get('pwd-reset-failed'));
				}
				else if(a.status==1){//跳到下一步
					$('.container').append(user_templates.get('pwd-reset-succeed'));
					sync_pwd(a);
				}
			}
		});
	}
}
//user info-center setting
function post_account_setting_basic(){

	selector=account_setting;

    var real_name  = $(selector.real_name).val();
    var company = $(selector.company).val();
    var job = $(selector.job).val();
    var signature = $(selector.signature).val();

	$.ajax({
		url: domain_name + '?action=post_account_setting_basic',
		type: 'post',
		data : {
			'real_name':real_name,
			'company':company,
			'job': job,
			'signature':signature
		},
		success: function(a) {

			if(a.status==-1){
				$('.per-center-right-content').append(user_templates.get('account-msg-fail'));
				$('.account-msg-fail .msg-detail').text('修改基本信息失败！');
				$('.account-msg-fail').fadeOut(4000);
			}
			else if(a.status==1){
				$('.per-center-right-content').append(user_templates.get('account-msg-succ'));
				$('.account-msg-succ .msg-detail').text('修改基本信息成功！');
				$('.account-msg-succ').fadeOut(4000);
			}

		}
	});
	
	
}
function get_account_setting_basic(){
	selector=account_setting;
	$.ajax({
		url: domain_name + '?action=get_account_setting_basic',
		type: 'get',
		data : {},
		beforeSend:beforeSend, //发送请求
		complete:complete,
		success: function(a) {
			
			if(a.status==-1){
			} else if(a.status==1){
				$('.per-center-right-content').empty().append(user_templates.get('account-settings-basic')).hide();

				if(a.login_name){
					$(selector.login_name).val(a.login_name);
				}

                if(a.real_name){
                    $(selector.real_name).val(a.real_name);
                }

                $(selector.real_name).attr('disabled', !a.can_update_real_name);

				if(a.company)
					$(selector.company).val(a.company);
				if(a.job)
					$(selector.job).val(a.job);
				if(a.signature)
					$(selector.signature).val(a.signature);
			}
			//$('.per-center-right-head').append(user_templates.get('account-settings-head'));
			
		}
	});
	
}
function update_account_setting_pwd(){

	selector=account_setting;
	var pwd=$(selector.pwd).val();
	var pwd1=$(selector.pwd1).val();
	var pwd2=$(selector.pwd2).val();
	pwd_arr = pwd1.split(" ");
	checked=true;
	if(!pwd){
		$(selector.pwd_label).text(error_notes.pwd_error_required);
		$(selector.pwd_label).show();
		checked=false;
	}
	if(!pwd1){
		$(selector.pwd1_label).text('新'+error_notes.pwd_error_none);
		$(selector.pwd1_label).show();
		checked=false;
	}
	else if(pwd1.length<6){
		$(selector.pwd1_label).text('新'+error_notes.pwd_error_length);
		$(selector.pwd1_label).show();
		checked=false;
	}
	else if(pwd_arr.length != 1){
		$(selector.pwd1_label).text('新'+error_notes.pwd_error_format);
		$(selector.pwd1_label).show();
		checked=false;
	}
	if(!pwd2){
		$(selector.pwd2_label).text('确认'+error_notes.pwd_error_none);
		$(selector.pwd2_label).show();
		checked=false;
	}
	else if(pwd2!=pwd1){
		$(selector.pwd2_label).text(error_notes.pwd_error_diff);
		$(selector.pwd2_label).show();
		checked=false;
	}
	if(checked)
		$.ajax({
			url: domain_name + '?action=update_account_setting_pwd',
			type: 'post',
			data : {'pwd':pwd,'pwd1':pwd1}, 
			success: function(a) {

				$(selector.pwd).val('');
				$(selector.pwd1).val('');
				$(selector.pwd2).val('');

				if(a.status==-1){

                    $('.zp-tc_overlay').fadeOut();
                    $('.per-center-main2-tk').fadeOut();

					$('.per-center-right-content').append(user_templates.get('account-msg-fail'));
					$('.account-msg-fail .msg-detail').text('密码修改失败！');
					$('.account-msg-fail ').fadeOut(4000);
				} else if(a.status==1){

                    $('.zp-tc_overlay').fadeOut();
                    $('.per-center-main2-tk').fadeOut();

					$('.per-center-right-content').append(user_templates.get('account-msg-succ'));
					$('.account-msg-succ .msg-detail').text('密码修改成功！');
					$('.account-msg-succ').fadeOut(4000);
					sync_pwd(a);
				} else if(a.status==-2){

                    $(selector.pwd_label).text('原密码错误！');
                    $(selector.pwd_label).show();

				}
			}
		});
}
function get_account_odl_pwd_check(){
	selector=account_setting;
	
	if(!$(selector.pwd).val()){
		$(selector.pwd_label).text(error_notes.pwd_error_required);
		$(selector.pwd_label).show();
	}
	
}
function get_account_new_pwd1_check(){
	selector=account_setting;
	pwd1=$(selector.pwd1).val();
	if(!pwd1){
		$(selector.pwd1_label).text('新'+error_notes.pwd_error_none);
		$(selector.pwd1_label).show();
	}
	else if(pwd1.length<6){
		$(selector.pwd1_label).text('新'+error_notes.pwd_error_length);
		$(selector.pwd1_label).show();
	}
	
}
function get_account_new_pwd2_check(){
	selector=account_setting;
	pwd1=$(selector.pwd1).val();
	pwd2=$(selector.pwd2).val();
	if(!pwd2){
		$(selector.pwd2_label).text('确认'+error_notes.pwd_error_none);
		$(selector.pwd2_label).show();
	}
	else if(pwd2!=pwd1){
		$(selector.pwd2_label).text(error_notes.pwd_error_diff);
		$(selector.pwd2_label).show();
	}
	
}
function social_callback_status(type,name){
	$('.per-center-'+type+' .per-center-license').text('已授权');
	$('.per-center-'+type+' .per-center-license').addClass('font-color-orange').removeClass('font-color-grey');
	$('.per-center-'+type+' .per-center-account').text('账号: '+name);
	$('.per-center-'+type+' .btn-primary-get').text('取消授权').addClass('authorized').removeClass('unauthorize');
}
function get_account_setting_social(hash){
	selector=account_setting;
	$(".per-center-right-head ul li").each(function(){
		if($(this).children('.changethird').attr('data-href')==hash)
			$(this).children('.changethird').addClass('changepwd ');
	});
	$.ajax({
		url: domain_name + '?action=get_account_setted_social',
		type: 'get',
		data : {},
		beforeSend:beforeSend, //发送请求
		complete:complete,
		success: function(a) {
			$('.per-center-right-content').empty().append(user_templates.get('account-settings-social')).hide();
			if(a.status){
				for (i = 0; i < a.binded.length; i++){
					social_callback_status(a.binded[i].type,a.binded[i].name);
				}
				
			}
		}
	});
}


var validate_phone_token = '';
function get_account_setting_pwd(hash){
	selector=account_setting;
	$(".per-center-right-head ul li").each(function(){
		if($(this).children('.changethird').attr('data-href')==hash)
			$(this).children('.changethird').addClass('changepwd ');
	});
	$.ajax({
		url: domain_name + '?action=get_account_setting_pwd',
		type: 'get',
		data : {},
		beforeSend:beforeSend, //发送请求
		complete:complete,
		success: function(result) {

            sms_send_token = result.token;

            $('.per-center-right-content').empty().append(user_templates.get('account-settings-pwd')).hide();

			if(result.set_email){
                $('#account_setting_email').attr('class','asl-span-has').html(result.email);
                $('#btn_account_setting_email').remove();

                account_setting_set_email = true;
			}

            if(result.set_phone){
                $('#account_setting_phone').attr('class','asl-span-has').html(result.phone);
                $('#btn_account_setting_phone').html('修改');

                account_setting_set_phone = true;
            }


            validate_phone_and_email_status();

		}
	});
}

//binding social
function social_callback(status){
	if(status==1){
		$.ajax({
			url: domain_name + '?action=get_account_setted_social',
			type: 'get',
			data : {},
			beforeSend:beforeSend, //发送请求
			complete:complete,
			success: function(a) {
				$('.per-center-right-content').empty().append(user_templates.get('account-settings-social')).hide();
				if(a.status){
					for (i = 0; i < a.binded.length; i++){
						social_callback_status(a.binded[i].type,a.binded[i].name);
					}
					
				}
				$('.per-center-right-content').append(user_templates.get('account-msg-succ'));
				$('.account-msg-succ .msg-detail').text('授权成功！');
				$('.account-msg-succ ').fadeOut(4000);
			}
		});
	}
	else if(status==-2){
		$('.per-center-right-content').append(user_templates.get('account-msg-fail'));
		$('.account-msg-fail .msg-detail').text('第三方账号已经占用!');
		$('.account-msg-fail ').fadeOut(4000);
	}
	else if(status==-1){
		$('.per-center-right-content').append(user_templates.get('account-msg-fail'));
		$('.account-msg-fail .msg-detail').text('授权失败!');
		$('.account-msg-fail ').fadeOut(4000);
	}
	else if(status==-3){
		user_login_link();
	}
}
function cancel_authorized(type){

	$.ajax({
		url: domain_name + '?action=cancel_authorized',
		type: 'post',
		data : {'type':type},
		beforeSend:beforeSend, //发送请求
		complete:complete,
		success: function(a) {
			$('.per-center-right-content').append(user_templates.get('account-settings-social')).hide();
			if(a.status==-2){
				$('.per-center-right-content').append(user_templates.get('account-msg-fail'));
				$('.account-msg-fail .msg-detail').text('由于你没有设置其他登录方式，解绑失败。请至少绑定一种登录方式！');
                $('.account-msg-fail').css('width','500px');
				$('.account-msg-fail').fadeOut(2000);
			}
			else if(a.status==-1){
				$('.per-center-right-content').append(user_templates.get('account-msg-fail'));
				$('.account-msg-fail .msg-detail').text('取消授权失败!');
				$('.account-msg-fail').fadeOut(2000);
			}
			for (i = 0; i < a.binded.length; i++){
				social_callback_status(a.binded[i].type,a.binded[i].name);
			}
		}
	});
}
//user favorite
function get_favorite_templates(arr){
	var htmls='';
	if(arr.length)
		for (i = 0; i < arr.length; i++){
			htmls+='\
				<li>\
					<div class="pcct-text">\<a target="_blank" href="'+arr[i].url+'" title='+arr[i].title+'>'+arr[i].title+'</a> \</div>\
					<div class="pcct-time">'+arr[i].date+'</div>\
					<div class="per-center-collection-text3 del-favorote" date-msg="'+arr[i].id+'"></div>\
				</li>';
		}
	return htmls;
	
}
$('.del-favorote').live('click',function(){
	id=$(this).attr('date-msg');
	page=$('.per-center-right-content').attr('data-page');
	if(id){
		$.ajax({
			url: domain_name + '?action=delete_account_favorite',
			type: 'get',
			data : {'id':id,'page':page},
			beforeSend:beforeSend, 
			complete:complete,
			success: function(a) {
				//if(a.status==1){
					if(a.list.length){
						arr=get_favorite_templates(a.list);
						$('.per-center-right-content').empty().append(user_templates.get('account-collection-all')).hide();
						$('.per-center-right-content .per-center-collection-text ul').append(arr);
						$('.per-center-right-collectionicon1').text(a.count);
						//wp_redirect(home_url()."/info-center#favorite?page=$page");
						location.href=local_url+'/info-center#favorite?page='+a.page;
						$('.per-center-right-content').attr('data-page',a.page);
					}
					else{
						$('.per-center-right-content').empty().append(user_templates.get('account-collection-none')).hide();
						$('.per-center-right-collectionicon1').text(0);
						$('.per-center-right-content').attr('data-page',0);
						
					}
					$('.per-center-collection-main2 ').append(a.pagination);
				//}
				//else{
				//	alert('删除收藏失败！');
				//}
				$('.per-center-right-collectionicon2,.per-center-right-collectionicon1').show();
			}
		});
	}
});
$('.per-center-right-del').live('click',function(){
	$.ajax({
		url: domain_name + '?action=delete_account_favorite_all',
		type: 'get',
		data : {},
		beforeSend:beforeSend, 
		complete:complete,
		success: function(a) {
			//if(a.status==1){
				$('.per-center-right-content').empty().append(user_templates.get('account-collection-none')).hide();
				$('.per-center-right-collectionicon1').text('0');
			//}
			//else{
			//	alert('删除收藏失败！');
			//}
		}
	});
});
function get_account_favorite_list(page){
	$.ajax({
		url: domain_name + '?action=get_account_favorite_list',
		type: 'get',
		data : {'page':page},
		beforeSend:beforeSend, //发送请求
		complete:complete,
		success: function(a) {
			if(a.status==1){
				if(a.list.length){
					arr=get_favorite_templates(a.list);
					$('.per-center-right-content').empty().append(user_templates.get('account-collection-all')).hide();
					$('.per-center-right-content .per-center-collection-text ul').append(arr);
					$('.per-center-right-collectionicon1').text(a.count);
						$('.per-center-right-content').attr('data-page',a.page);
				}
				else{
					$('.per-center-right-collectionicon1').text(0);
					$('.per-center-right-content').empty().append(user_templates.get('account-collection-none')).hide();
					$('.per-center-right-content').attr('data-page',0);
				}
				$('.per-center-collection-main2').append(a.pagination);
			}
			else{
				alert('获取收藏失败！');
			}
			$('.per-center-right-collectionicon2,.per-center-right-collectionicon1').show();
			//if(a.merged)
				//location.href='/my_sdnlab/info-center#favorite?page='+a.page;
		}
	});
}
// avater upload
/*$('.btn-primary12').live('click',function(){
	var id_top =$('#crop_form .id_top').val();
	var id_left =$('#crop_form .id_left').val();
	var id_right =$('#crop_form .id_id_righttop').val();
	var id_bottom =$('#crop_form .id_bottom').val();
	var avater_file =$('#attachment').val();
	$.ajax({
		url: domain_name + '?action=update_account_avater',
		type: 'get',
		data:{'top':id_top,'left':id_left,'right':id_right,'bottom':id_bottom,'avater':avater_file},
		//data:$('#crop_form').serialize(),
		success: function(a) {
			//if(a.status==1){
			//}
			//else{
			//	alert('删除收藏失败！');
			//}
		}
	});
});
*/
$('.btn-primary12').live('click',function(){
	if($('#avatar').attr('src'))
		$("#crop_form").ajaxSubmit({
			dataType:  'json', //数据格式为json 
			success: function(data) {
				if(data.status){
					$('.circle_head-pic img,.user-click img').attr('src',data.user_url);
					
				}
				$(".close").trigger("click");
				
			}
		});
});
//

//picture captcha click reload
$('#pic_captcha').click(function(){
    $('#pic_captcha').attr('src','/my_sdnlab/captcha.php?ver='+(new Date().getTime()));
});

//user loacaltion check

//user login action 
$(login_selector.submit).click(function(){login_check(login_selector)});
$(login_selector.name+','+login_selector.pwd).keydown(function(e){
	var e = e || window.event;
	if(e.keyCode==13)
		login_check(login_selector);
});
//user bind account action
$(account_bind_selector.submit).click(function(){login_check(account_bind_selector)});
$(account_bind_selector.name+','+account_bind_selector.pwd).keydown(function(e){
	var e = e || window.event;
	if(e.keyCode==13)
		login_check(account_bind_selector);
});
$(account_bind_selector.name+','+account_bind_selector.pwd).focus(function(){
	$(account_bind_selector.error_content).text('');
	$(account_bind_selector.error_label).hide();
});

//user register action
$(register_selector.name).blur(function(){register_check_name()});
$(register_selector.email).blur(function(){register_check_email()});
$(register_selector.captcha).blur(function(){register_check_captcha()});
$(register_selector.pwd).blur(function(){register_check_pwd()});
$(register_selector.name).focus(function(){
	$(error_label.name).text(register_notes.name);
	$(error_label.name).addClass('font-color-black');
	$(error_label.name).show();
});
$(register_selector.pwd).focus(function(){
	$(error_label.pwd).text(register_notes.pwd);
	$(error_label.pwd).addClass('font-color-black');
	$(error_label.pwd).show();
});
$(register_selector.email).focus(function(){
	$(error_label.email).text('');
	$(error_label.email).hide();
});
$(register_selector.captcha).focus(function(){
	$(error_label.captcha).text('');
	$(error_label.captcha).hide();
});
$(register_selector.submit).click(function(){register_check_all()});
$(register_selector.captcha_btn).click(function(){register_post_captcha()});

$(pwd_reset_selector.email).focus(function(){
	$(error_label.email).text('');
	$(error_label.email).hide();
});
$(pwd_reset_selector.captcha).focus(function(){
	$(error_label.captcha).text('');
	$(error_label.captcha).hide();
});
$(pwd_reset_selector.pwd_new_one).live('focus',function(){
	$(error_label.pwd).text(register_notes.pwd).addClass('font-color-black');
	$(error_label.pwd).show();
});
$(pwd_reset_selector.pwd_new_two).live('focus',function(){
	$(error_label.pwd_two).text('');
	$(error_label.pwd_two).hide();
});
//account_setting.pwd,account_setting.pwd1,account_setting.pwd2
$(account_setting.pwd).live('focus',function(){
	$(account_setting.pwd_label).text('');
	$(account_setting.pwd_label).hide();
});
$(account_setting.pwd1).live('focus',function(){
	$(account_setting.pwd1_label).text('');
	$(account_setting.pwd1_label).hide();
});
$(account_setting.pwd2).live('focus',function(){
	$(account_setting.pwd2_label).text('');
	$(account_setting.pwd2_label).hide();
});
//pwd reset
// $(pwd_reset_selector.email).blur(function(){reset_check_email()});
$(pwd_reset_selector.captcha_btn).click(function(){pwd_reset_post_captcha(pwd_reset_selector)});
$(pwd_reset_selector.submit_first).click(function(){pwd_reset_check_first(pwd_reset_selector)});
//$(pwd_reset_selector.captcha).blur(function(){pwd_reset_check_captcha(pwd_reset_selector)});
$(pwd_reset_selector.pwd_new_one).live('blur',function(){pwd_reset_check_pwd1(pwd_reset_selector)});
$(pwd_reset_selector.pwd_new_two).live('blur',function(){pwd_reset_check_pwd2(pwd_reset_selector)});
$(pwd_reset_selector.submit_next).live('click',function(){pwd_reset_check_next(pwd_reset_selector)});

//info center 
$(account_setting.basic_submit).live('click',function(){post_account_setting_basic()});
$(account_setting.pwd).live('blur',function(){get_account_odl_pwd_check()});
$(account_setting.pwd1).live('blur',function(){get_account_new_pwd1_check()});
$(account_setting.pwd2).live('blur',function(){get_account_new_pwd2_check()});
$(account_setting.pwd_submit).live('click',function(){update_account_setting_pwd()});

// register or login input focus border
$('.main-reg input[type="text"],.main-reg input[type="password"],.login-user input[type="text"],.login-user input[type="password"],.form-group-reg input,.form-group-width input,.form-group-reg2 input').focus(function(){
	$(this).parent().addClass('form-group-input');
	$('.per-center-right-content').show();
});
$('.main-reg input[type="text"],.main-reg input[type="password"],.login-user input[type="text"],.login-user input[type="password"],.form-group-reg input,.form-group-width input,.form-group-reg2 input').blur(function(){
	$(this).parent().removeClass('form-group-input');
});
/*$(account_setting.phone).live('keyup',function(e){
	keyCode=e ? e.which : event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57))    
   {    
        event.returnValue = true;    
    } else {    
          event.returnValue = false;    
   }  
});*/


/*$(account_setting.phone).live('keyup',function(){
	  //先把非数字的都替换掉，除了数字和.  
	        this.value = this.value.replace(/[^\d.]/g,"");  
	        //必须保证第一个为数字而不是.  
	        this.value = this.value.replace(/^\./g,"");  
	        //保证只有出现一个.而没有多个.  
	        this.value = this.value.replace(/\.{2,}/g,".");  
	        //保证.只出现一次，而不能出现两次以上  
	        this.value = this.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
	        if(this.value!="" ){
	          if(this.value.indexOf('.')!= -1)
	          this.value = parseInt(this.value.substr(0,this.value.indexOf('.')),10)+this.value.substring(this.value.indexOf('.'));
	         else this.value = parseInt(this.value,10);
	        }
	  });*/

function user_login_link(){
	location.href=local_url+"/login?url_type=login&url="+encodeURIComponent(window.location.href);
}
function beforeSend(XMLHttpRequest){
	  $(".per-center-right-content").empty().append("<div class='content-loading'><img width='48' height='48' src='/my_sdnlab/wp-content/uploads/2016/05/loading.gif' /><div>");
}
function complete(XMLHttpRequest, textStatus){
	  $(".content-loading").remove();
	  $(".per-center-right-content").fadeIn();
	}
function HashMap(){  
    var length = 0;  
    var obj = new Object();    
    this.isEmpty = function(){return length == 0;};  
    this.containsKey=function(key){return (key in obj);};  
    this.containsValue=function(value){ for(var key in obj){if(obj[key] == value){return true;}}return false;};  
    this.put=function(key,value){if(!this.containsKey(key)){length++;}obj[key] = value;};  
    this.get=function(key){return this.containsKey(key)?obj[key]:null;  };  
    this.remove=function(key){if(this.containsKey(key)&&(delete obj[key])){length--;}};  
    this.values=function(){var _values= new Array();for(var key in obj){  _values.push(obj[key]);}return _values;};  
    this.keySet=function(){var _keys = new Array(); for(var key in obj){_keys.push(key);}return _keys;};  
    this.size = function(){return length;};  
    this.clear = function(){length = 0;obj = new Object();};  
}

function validate_phone_and_email_status(){

    if (!account_setting_set_email && !account_setting_set_phone) {

        $('#none_other_attr_tips').show();
        $('#btn_account_setting_pw').attr('disabled',true);

    } else {

        $('#none_other_attr_tips').hide();
        $('#btn_account_setting_pw').attr('disabled',false);

    }

    // 移动端个人中心刷新
	if(is_mobile_account_setting){
    	location.reload();
	}

}

function show_reset_pw_dialog(){

    if (!account_setting_set_email && !account_setting_set_phone) {
    	return false;
	}

    $('.zp-tc_overlay').fadeIn();
    $('.per-center-main2-tk').fadeIn();
}
function show_email_pw_dialog(){
    $('.login_overlay_email').fadeIn();
    $('.per-center-main2-email').fadeIn();
}

function show_num_pw_dialog(){

	if(account_setting_set_phone){
        show_origin_tel_validation_dialog();
	} else {
        show_new_phone_set_dialog();
	}

}

function show_origin_tel_validation_dialog(){

	var phone = $('#account_setting_phone').html();

	$('#origin_validation_tel').val('使用手机  ' + phone + '  验证');

    $('.login_overlay_num').fadeIn();
    $('.per-center-main2-num').fadeIn();

}

$('#validate_origin_code').click(function(){

    reset_captcha_error();

    validate_origin_phone_captcha_scaler();

    $.ajax({
        url: domain_name + 'account_setting/validate_origin',
        type: 'POST',
        data: {
            'token': sms_send_token
        },
        success: function (result) {

            if (result.succeed) {

            	reset_captcha_error();

                sms_send_token = result.delay_token;
                validate_code_token = result.token;

            } else {
            	show_captcha_error(result.error_msg)
            }

        }
    });

});

$('#btn_confirm_validate_origin_phone').click(function(){

    $('#btn_confirm_validate_origin_phone').attr('disabled',true);

    var code = $('#validate_origin_captcha').val();
    if(is_string_null(code)){
        show_captcha_error('验证码不能为空');
    } else {

        $.ajax({
            url: domain_name + '?action=validate_origin_phone',
            type: 'POST',
            data : {
                'token': validate_code_token,
				'captcha':code
            },
            success: function(result) {

                if (result.succeed) {

                	sms_send_token = result.token;

                    reset_captcha_error();

                    $('.login_overlay_num').fadeOut();
                    $('.per-center-main2-num').fadeOut();

                    show_new_phone_set_dialog();

                } else {

                	show_captcha_error(result.error_msg);

                    $('#btn_confirm_validate_origin_phone').attr('disabled',false);

                }

            }
        });


    }

});

$('#account_setting_bind_new_phone_register_code').click(function(){

    $('#account_setting_bind_new_phone_register_code').attr('disabled',true);

    enable_new_phone_scaler = true;
	var passed = true;
    var phone = $('#account_setting_bind_new_phone').val();
    if(is_string_null(phone)){
        $('#account_setting_bind_new_phone_tips_content').html('手机不能为空').fadeIn();
        $('#account_setting_bind_new_phone_tips').fadeIn();
        passed = false;
    } else if (false == validate_phone_number_format(phone)){
        $('#account_setting_bind_new_phone_tips_content').html('手机格式不正确').fadeIn();
        $('#account_setting_bind_new_phone_tips').fadeIn();
        passed = false;
	}

    if(passed) {

    	var phone_pass = false;

        $.ajax({
            url: domain_name + '?action=register_check_phone',
            type: 'GET',
            data: {
                'phone': phone
            },
            async: false,
            success: function (result) {

                if (result.status == 1) {

                    sms_send_token = result.token;

					phone_pass = true;

                    $('#account_setting_bind_new_phone_tips_content').fadeOut();

                } else if(result.status == -1){

                    $('#account_setting_bind_new_phone_tips_content').html('手机已被注册').fadeIn();
                    $('#account_setting_bind_new_phone_tips').fadeIn();

                    phone_pass = false;

                }

            }
        });

        $('#account_setting_bind_new_phone_register_code').attr('disabled',false);

        if(phone_pass){

            bind_new_phone_scaler();

            $.ajax({
                url: domain_name + 'account_setting/bind_new_sms/',
                type: 'get',
                data: {
                    'token': sms_send_token,
                    'phone': phone
                },
                success: function (result) {

                    if (result.succeed) {

                        sms_send_token = result.delay_token;
                        validate_code_token = result.token;

                    } else {

                        $('#account_setting_bind_new_phone_tips_content').html(result.error_msg).fadeIn();
                        $('#account_setting_bind_new_phone_tips').fadeIn();

                        enable_new_phone_scaler = false;

                    }

                }
            });

		}

	}


});

$('#btn_confirm_bind_new_phone').click(function () {

    $('#btn_confirm_bind_new_phone').attr('disabled',true);

    var passed = true;
    var phone = $('#account_setting_bind_new_phone').val();
    var captcha = $('#bind_new_phone_captcha_code').val();

    if(is_string_null(phone)){
        $('#account_setting_bind_new_phone_tips_content').html('手机不能为空').fadeIn();
        $('#account_setting_bind_new_phone_tips').fadeIn();
        passed = false;
    } else if (false == validate_phone_number_format(phone)){
        $('#account_setting_bind_new_phone_tips_content').html('手机格式不正确').fadeIn();
        $('#account_setting_bind_new_phone_tips').fadeIn();
        passed = false;
    }

    if (is_string_null(captcha)){

    	$('#account_setting_bind_new_phone_captcha_tips_content').html('验证码不能为空').fadeIn();
        $('#account_setting_bind_new_phone_captcha_tips').fadeIn();

        passed = false;

	}

	if(passed){

        $('#account_setting_bind_new_phone_captcha_tips_content').fadeOut();
        $('#account_setting_bind_new_phone_captcha_tips').fadeOut();

        $.ajax({
            url: domain_name + '?action=bind_new_phone',
            type: 'POST',
            data: {
                'token': validate_code_token,
                'captcha': captcha,
                'phone': phone
            },
            success: function (result) {

                if (result.succeed) {

                    $('.login_overlay_num1').fadeOut();
                    $('.per-center-main2-num1').fadeOut();

                    $('.per-center-right-content').append(user_templates.get('account-msg-succ'));
                    $('.account-msg-succ .msg-detail').text(' 修改手机成功！');
                    $('.account-msg-succ').fadeOut(4000);

                    $('#account_setting_phone').attr('class','asl-span-has').html(result.phone);
                    $('#btn_account_setting_phone').html('修改');
                    account_setting_set_phone = true;

                    validate_phone_and_email_status();

                } else {

                	switch (result.error_code){
                        case 1:
                        case 2: {

                            $('#account_setting_bind_new_phone_captcha_tips_content').html(result.error_msg).fadeIn();
                            $('#account_setting_bind_new_phone_captcha_tips').fadeIn();

                        }
                            break;
                        case 3: {

                            $('#account_setting_bind_new_phone_tips_content').html(result.error_msg).fadeIn();
                            $('#account_setting_bind_new_phone_tips').fadeIn();

                        }
                            break;
					}

                    $('#btn_confirm_bind_new_phone').attr('disabled',false);

                }

            }
        });

	} else {

        $('#btn_confirm_bind_new_phone').attr('disabled',false);

	}


});

var enable_new_phone_scaler = true;
function bind_new_phone_scaler(){

    $('#account_setting_bind_new_phone_register_code').attr('disabled',true).addClass('captcha-button-disable');

    captcha_counter--;
    $('#account_setting_bind_new_phone_register_code').text('等待'+captcha_counter+'秒');
    if (captcha_counter == 0 || enable_new_phone_scaler == false) {
        captcha_counter = 60;
        $('#account_setting_bind_new_phone_register_code').text('重新发送');
        $('#account_setting_bind_new_phone_register_code').attr('disabled',false).removeClass('captcha-button-disable');
    } else {
        setTimeout("bind_new_phone_scaler()",1000);
	}

}

function show_new_phone_set_dialog(){

    $('.login_overlay_num1').fadeIn();
    $('.per-center-main2-num1').fadeIn();

}

$('#btn_bind_email_captcha').click(function () {

    enable_new_email_scaler = true;
	var passed = true;
	var email = $('#bind_email').val();

    $('#btn_get_email_captcha').attr('disabled',true);

	if(is_string_null(email)){
		passed = false;
        $('#bind_email_tips_content').html('邮箱不能为空').fadeIn();
        $('#bind_email_tips').fadeIn();
	}

    var email_reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!email_reg.test(email)){
        passed = false;
        $('#bind_email_tips_content').html('邮箱格式不正确').fadeIn();
        $('#bind_email_tips').fadeIn();
    }

    if (passed) {

        bind_new_email_scaler();

        $.ajax({
            url: domain_name + '?action=bind_email_captcha',
            type: 'GET',
            data: {
                'email': email
            },
			async:true,
            success: function (result) {

                if (result.status == -2) {
                	enable_new_email_scaler = false;
                	passed = false;
                    $('#bind_email_tips_content').html('邮箱已被注册').fadeIn();
                    $('#bind_email_tips').fadeIn();
                } else {
                    $('#bind_email_tips_content ').fadeOut();
				}

            }
        });


    } else {
        $('#btn_get_email_captcha').attr('disabled', false);
    }

});

$('#btn_confirm_bind_new_email').click(function(){

    enable_new_email_scaler = true;
    var passed = true;
    var email = $('#bind_email').val();
    var captcha = $('#bind_email_captcha').val();

    $('#btn_get_email_captcha').attr('disabled',true);

    if(is_string_null(email)){

        passed = false;
        $('#bind_email_tips_content').html('邮箱不能为空').fadeIn();
        $('#bind_email_tips').fadeIn();

	}

    var email_reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!email_reg.test(email)){
        passed = false;
        $('#bind_email_tips_content').html('邮箱格式不正确').fadeIn();
        $('#bind_email_tips').fadeIn();
    }
	
	if(is_string_null(captcha)){

        passed = false;
        $('#bind_email_captcha_tips_content').html('验证码不能为空').fadeIn();
        $('#bind_email_captcha_tips').fadeIn();

	}

	if(passed){

        $('#bind_email_tips').fadeOut();
        $('#bind_email_captcha_tips').fadeOut();

        //bind_new_email_scaler();

        $.ajax({
            url: domain_name + '?action=bind_new_email',
            type: 'POST',
            data: {
                'email': email,
                'captcha': captcha
            },
            async:true,
            success: function (result) {

                if (result.succeed) {

                    $('.login_overlay_email').fadeOut();
                    $('.per-center-main2-email').fadeOut();

                    $('.per-center-right-content').append(user_templates.get('account-msg-succ'));
                    $('.account-msg-succ .msg-detail').text('绑定邮箱成功！');
                    $('.account-msg-succ').fadeOut(4000);

                    $('#account_setting_email').attr('class', 'asl-span-has').html(result.email);
                    $('#btn_account_setting_email').remove();
                    account_setting_set_email = true;

                    validate_phone_and_email_status();

                } else {

                    switch (result.error_code) {
                        case 1:
                        default:{
                            $('#bind_email_captcha_tips_content').html(result.error_msg).fadeIn();
                            $('#bind_email_captcha_tips').fadeIn();
                        } break;
                        case 2: {
                            $('#bind_email_tips_content').html(result.error_msg).fadeIn();
                            $('#bind_email_tips').fadeIn();
                        } break;
                    }

                }

            }
        });

    }


	
});

function show_real_name_certification_dialog(){

    $('#dialog_bind_phone_tips_content').html('').show();
    $('#dialog_bind_phone_captcha_tips_content').html('').show();

	$('#container_bind_phone').show();
    $('#dialog_bind_phone').show();

}

function close_real_name_certification_dialog(){

    $('#container_bind_phone').hide();
    $('#dialog_bind_phone').hide();

}
$('#btn_bind_phone_dialog_register_code').click(function(){

	var phone = $('#dialog_bind_phone_text').val();

	var checked = true;

    if (is_string_null(phone)) {

    	$('#dialog_bind_phone_tips_content').html('手机不能为空').show();
        $('#dialog_bind_phone_tips').show();

        checked = false;

    }

    if(false == validate_phone_number_format(phone)){

        $('#dialog_bind_phone_tips_content').html('手机格式不正确').show();
        $('#dialog_bind_phone_tips').show();

        checked = false;
    	
	}

	if(checked){

        $('#dialog_bind_phone_tips_content').html('').show();

        enable_dialog_bind_phone_scaler = true;

        dialog_bind_phone_scaler();

        $.ajax({
            url: domain_name + 'account_setting/bind_new_sms/',
            type: 'get',
            data: {
                'token': sms_send_token,
                'phone': phone
            },
            success: function (result) {

                if (result.succeed) {

                    sms_send_token = result.delay_token;
                    validate_code_token = result.token;

                } else {

                    $('#dialog_bind_phone_tips_content').html(result.error_msg).fadeIn();
                    $('#dialog_bind_phone_tips').fadeIn();

                    enable_dialog_bind_phone_scaler = false;

                }

            }
        });


	}

});

$('#btn_dialog_confirm_bind_phone').click(function(){

    var phone = $('#dialog_bind_phone_text').val();
    var captcha = $('#dialog_bind_phone_captcha').val();

    var checked = true;

    if (is_string_null(phone)) {

        $('#dialog_bind_phone_tips_content').html('手机不能为空').show();
        $('#dialog_bind_phone_tips').show();

        checked = false;

    }

    if(false == validate_phone_number_format(phone)){

        $('#dialog_bind_phone_tips_content').html('手机格式不正确').show();
        $('#dialog_bind_phone_tips').show();

        checked = false;

    }

    if(is_string_null(captcha)){

        $('#dialog_bind_phone_captcha_tips_content').html('验证码不能为空').show();
        $('#dialog_bind_phone_captcha_tips').show();

        checked = false;

	}
	
	if(checked && captcha.length != 6){

        $('#dialog_bind_phone_captcha_tips_content').html('验证码长度不正确').show();
        $('#dialog_bind_phone_captcha_tips').show();

        checked = false;

    }
    
    if(checked){

        $('#dialog_bind_phone_captcha_tips').fadeOut();
        $('#dialog_bind_phone_tips').fadeOut();

        $('#btn_dialog_confirm_bind_phone').attr('disabled',true);

        $.ajax({
            url: domain_name + '?action=bind_new_phone',
            type: 'POST',
            data: {
                'token': validate_code_token,
                'captcha': captcha,
                'phone': phone
            },
            success: function (result) {

                if (result.succeed) {

                	$('#real_name_certification_top_tips').hide();
                	close_real_name_certification_dialog();

                    $('.per-center-right-content-no-info').append(user_templates.get('account-msg-succ'));
                    $('.account-msg-succ-no-info .msg-detail').text(' 修改手机成功！');
                    $('.account-msg-succ-no-info').show();
                    $('.account-msg-succ-no-info').fadeOut(4000);

                    account_setting_set_phone = true;
                    validate_phone_and_email_status();


                } else {

                    switch (result.error_code){
                        case 1:
                        case 2: {

                            $('#dialog_bind_phone_captcha_tips_content').html(result.error_msg).fadeIn();
                            $('#dialog_bind_phone_captcha_tips').fadeIn();

                        } break;
                        case 3: {

                            $('#dialog_bind_phone_tips_content').html(result.error_msg).fadeIn();
                            $('#dialog_bind_phone_tips').fadeIn();

                        }
                            break;
                    }

                    $('#btn_dialog_confirm_bind_phone').attr('disabled',false);

                }

            }
        });

    } else {

        $('#btn_dialog_confirm_bind_phone').attr('disabled',false);

    }


});

var enable_dialog_bind_phone_scaler = true;
function dialog_bind_phone_scaler(){

    $('#btn_bind_phone_dialog_register_code').attr('disabled',true).addClass('captcha-button-disable');

    captcha_counter--;
    $('#btn_bind_phone_dialog_register_code').text('等待'+captcha_counter+'秒');
    if (captcha_counter == 0 || enable_dialog_bind_phone_scaler == false)  {
        captcha_counter = 60;
        $('#btn_bind_phone_dialog_register_code').text('重新发送');
        $('#btn_bind_phone_dialog_register_code').attr('disabled',false).removeClass('captcha-button-disable');
    } else {
        setTimeout("dialog_bind_phone_scaler()",1000);
    }

}

function show_bind_email_dialog(){

    $('#container_bind_email_tips_content').html('').show();
    $('#container_bind_email_captcha_tips_content').html('').show();

    $('#container_bind_email').show();
    $('#dialog_bind_email').show();

}

function close_bind_email_dialog(){

    $('#container_bind_email').hide();
    $('#dialog_bind_email').hide();

}

$('#btn_dialog_bind_email_register_code').click(function () {

    var checked = true;

    var email = $('#dialog_bind_email_text').val();

    if (is_string_null(email)) {

        $('#container_bind_email_tips_content').html('邮箱不能为空').show();
        $('#container_bind_email_tips').show();

        checked = false;

    }

    var email_reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (checked && !email_reg.test(email)) {

        $('#container_bind_email_tips_content').html('邮箱格式不正确').show();
        $('#container_bind_email_tips').show();

        checked = false;
    }

    if (checked) {

        $('#btn_dialog_bind_email_register_code').attr('disabled', true);

        enable_dialog_bind_email_scaler = true;
        dialog_bind_email_scaler();


        $.ajax({
            url: domain_name + '?action=bind_email_captcha',
            type: 'GET',
            data: {
                'email': email
            },
            async: true,
            success: function (result) {

                if (result.status == -2) {

                    enable_dialog_bind_email_scaler = false;
                    $('#container_bind_email_tips_content').html('邮箱已被注册').show();
                    $('#container_bind_email_tips').show();

                } else {
                    $('#container_bind_email_tips_content').fadeOut();
                }

            }
        });

    } else {
        $('#btn_dialog_bind_email_register_code').attr('disabled', false);
    }
});

$('#btn_confirn_dialog_bind_email').click(function(){

	var checked = true;

    var email = $('#dialog_bind_email_text').val();
    var captcha = $('#dialog_bind_email_captcha').val();

    if (is_string_null(email)) {

        $('#container_bind_email_tips_content').html('邮箱不能为空').show();
        $('#container_bind_email_tips').show();

        checked = false;

    }

    var email_reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (checked && !email_reg.test(email)) {

        $('#container_bind_email_tips_content').html('邮箱格式不正确').show();
        $('#container_bind_email_tips').show();

        checked = false;
    }

    if(is_string_null(captcha)){

        $('#container_bind_email_captcha_tips_content').html('验证码不能为空').show();
        $('#container_bind_email_captcha_tips').show();

        checked = false;

    }

    if(checked && captcha.length != 6){

        $('#container_bind_email_captcha_tips_content').html('验证码长度不正确').show();
        $('#container_bind_email_captcha_tips').show();

        checked = false;

    }

    if(checked){

        $('#btn_confirn_dialog_bind_email').attr('disabled',true);

        $('#container_bind_email_tips_content').fadeOut();
        $('#container_bind_email_captcha_tips').fadeOut();

        $.ajax({
            url: domain_name + '?action=bind_new_email',
            type: 'POST',
            data: {
                'email': email,
                'captcha': captcha
            },
            async:true,
            success: function (result) {


                if (result.succeed) {

                	close_bind_email_dialog();

                    $('.per-center-right-content-no-info').append(user_templates.get('account-msg-succ'));
                    $('.account-msg-succ-no-info .msg-detail').text('绑定邮箱成功！');
                    $('.account-msg-succ-no-info').show();
                    $('.account-msg-succ-no-info').fadeOut(4000);

                    account_setting_set_email = true;
                    validate_phone_and_email_status();


                } else {

                    switch (result.error_code) {
                        case 1:
                        default:{

                            $('#container_bind_email_captcha_tips_content').html(result.error_msg).fadeIn();
                            $('#container_bind_email_captcha_tips').fadeIn();

                        } break;
                        case 2: {

                            $('#container_bind_email_tips_content').html(result.error_msg).show();
                            $('#container_bind_email_tips').show();

                        } break;
                    }

                }

                $('#btn_confirn_dialog_bind_email').attr('disabled',false);

            }
        });

    	
	}

});


function checkRealNameAndPhone() {

	if(account_setting_set_phone == false){
		show_real_name_certification_dialog();
		return false;
	}

	if(account_setting_set_email == false){
		show_bind_email_dialog();
		return false;
	}

	return true;

}


var enable_dialog_bind_email_scaler = true;
function dialog_bind_email_scaler(){

    $('#btn_dialog_bind_email_register_code').attr('disabled',true).addClass('captcha-button-disable');

    captcha_counter--;
    $('#btn_dialog_bind_email_register_code').text('等待'+captcha_counter+'秒');
    if (captcha_counter == 0 || enable_dialog_bind_email_scaler == false)  {
        captcha_counter = 60;
        $('#btn_dialog_bind_email_register_code').text('重新发送');
        $('#btn_dialog_bind_email_register_code').attr('disabled',false).removeClass('captcha-button-disable');
    } else {
        setTimeout("dialog_bind_email_scaler()",1000);
    }

}

var enable_new_email_scaler = true;
function bind_new_email_scaler(){

    $('#btn_bind_email_captcha').attr('disabled',true).addClass('captcha-button-disable');

    captcha_counter--;
    $('#btn_bind_email_captcha').text('等待'+captcha_counter+'秒');
    if (captcha_counter == 0 || enable_new_email_scaler == false)  {
        captcha_counter = 60;
        $('#btn_bind_email_captcha').text('重新发送');
        $('#btn_bind_email_captcha').attr('disabled',false).removeClass('captcha-button-disable');
    } else {
        setTimeout("bind_new_email_scaler()",1000);
    }

}

user_templates.put('pwd-reset-next','\
		<div class="password-reset pwd-reset-next">\
			<div class="form-group-reg" >\
			    <div class="form-group-password"></div><input  type="password" class="pwd_new_one" placeholder="请输入新密码">\
			</div>\
		<div class="password-none1" style="display:block;"><span class="password-none"  style="display:none;">密码长度6-16位，不允许有空格</span></div>\
			<div class="form-group-reg" >\
			    <div class="form-group-password"></div><input  type="password" class="pwd_new_two" placeholder="请确认新密码">\
			</div>\
		<div class="password-none1" style="display:block;"><span class="password-two-none" style="display:none;">两次密码不一致</span></div>\
			<div class="btn-reset-reg ">\
				<input  type="hidden" class="captcha-check">\
				<input  type="hidden" class="captcha-email">\
				<button class="btn-primary-reg" type="submit" >立即修改</button>\
			</div>\
		</div>');
user_templates.put('pwd-reset-succeed','\
		<div class="reset-success">\
			<p ><span></span>密码重置成功</p>\
			<div class="btn-reset-login ">\
				<a style="text-align: center;" href="'+local_url+'" class="btn-primary-reg" type="submit" >立即登录</a>\
			</div>\
		</div>');
user_templates.put('pwd-reset-failed','\
		<div class="reset-failed">\
			<p ><span></span>密码重置失败</p>\
			<div class="password-reset-tips" >系统开小差了，请过会儿再试试吧</div>\
		</div>');
user_templates.put('account-basic-head','\
		<div class="per-center-right-head clearfix"><ul>\
			<li class="per-center-li" style="margin: -2px 0px;padding: 10px 10px;"><a href="#setting/basic" data-href="#setting/basic" >基本资料</a></li>\
		</ul></div>');
user_templates.put('account-settings-head','\
		<div class="per-center-right-head clearfix"><ul>\
			<li> <a class="changethird" href="#setting/pwd" data-href="#setting/pwd" >账号信息</a></li>\
			<li ><a class="changethird" href="#setting/social" data-href="#setting/social" >第三方帐号授权</a></li>\
		</ul></div>');
user_templates.put('account-settings-social-head','\
		<div class="per-center-right-head clearfix"><ul>\
			<li ><a class="changethird" href="#setting/social" data-href="#setting/social" >第三方帐号授权</a></li>\
		</ul></div>');
user_templates.put('account-settings-basic','\
		<div class="per-center-main"  >\
			<div class="per-center-user">\
							<div class="per-center-users">用户名</div>\
							<div class="form-per-center"><input type="text" class="name" value="" id="login_name" disabled></div>\
			</div>\
			<div class="per-center-user">\
    			<div class="per-center-emails"><span style="position:absolute;background:url(/my_sdnlab/wp-content/uploads/2016/05/x.png); top:110px;left:37px;width:16px;height:16px; " ></span>姓名</div>\
				<div class="form-per-center"><input  type="text" class="email"  value="" id="real_name"></div>\
                </div>\
                <div class="per-center-company">\
                    <div class="per-center-companys">公司</div>\
                        <div class="form-per-center"><input  type="text" class="company" maxlength="21"  value="" id="company"></div>\
                </div>\
                <div class="per-center-job">\
                    <div class="per-center-jobs">职位</div>\
                        <div class="form-per-center"> <input type="text" class="job" maxlength="21"  value="" id="job"></div>\
                </div>\
                <div class="per-center-signature">\
                    <div class="per-center-signatures">个性签名</div>\
                        <div class="form-per-center" style="overflow-y=\'scroll\'">\
                                    <textarea style="padding-left:10px;padding-top:10px;padding-bottom:10px;" cols="41" rows="4" maxlength="82" class="signature" id="signature"></textarea>\
                        </div>\
                </div>\
                <div class="per-btn-login "><button class="per-btn-primary"  >保存</button></div>\
            </div>');
user_templates.put('account-settings-pwd','\
		<div class="per-center-main2" style="height:400px;">\
				<div class="clearfix account-setting" >\
					<div class="account-setting-left" >\
						<p class="asl-p1">邮箱<span class="asl-span" id="account_setting_email">未验证</span></p>\
						<p class="asl-p2">绑定邮箱后，您可以使用评论、实验平台、未来网络学院等服务</p>\
					</div>\
					<div class="account-setting-right" >\
						<a class="asl-a asl-b1" onclick="show_email_pw_dialog()" id="btn_account_setting_email">设置</a>\
					</div>\
				</div>\
				<div class="clearfix account-setting" >\
					<div class="account-setting-left" >\
						<p class="asl-p1">手机<span class="asl-span" id="account_setting_phone">未设置</span></p>\
						<p class="asl-p2">手机可以用于重置密码或其它安全验证</p>\
					</div>\
						<div class="account-setting-right" >\
							<a class="asl-a asl-b2" onclick="show_num_pw_dialog()" id="btn_account_setting_phone">设置</a>\
						</div>\
				</div>\
				<div class="clearfix account-setting" >\
					<div class="account-setting-left" >\
						<p class="asl-p1">账号密码<span class="asl-span1" id="none_other_attr_tips">设置密码前，请先绑定邮箱或手机<span class="arrow-right-pink"></spanclass></span></p>\
					</div>\
						<div class="account-setting-right" >\
							<a class="asl-a1 asl-b3" onclick="show_reset_pw_dialog()" id="btn_account_setting_pw">修改</a>\
						</div>\
    			</div>\
			</div>\
		</div>');
user_templates.put('account-settings-social','\
		<div class="per-center-main3" >\
			<div class="per-center-qq"><span class="per-center-icon5" ></span >\
			<span class="per-center-license font-color-grey">未授权</span>\
					<span class="per-center-account">账号: --</span>\
					<span class="per-center-getlicense">\
						<a class="btn-primary-get unauthorize" href="javascript:;" data-type="qq">获取授权</a>\
					</span>\
			</div>\
			<div class="per-center-weibo"><span class="per-center-icon7"></span >\
			<span class="per-center-license font-color-grey">未授权</span>\
					<span class="per-center-account">账号: --</span>\
					<span class="per-center-getlicense">\
						<a class="btn-primary-get unauthorize" href="javascript:;" data-type="weibo">获取授权</a>\
					</span>\
			</div>\
			<div class="per-center-baidu"><span class="per-center-icon8"></span >\
			<span class="per-center-license font-color-grey">未授权</span>\
					<span class="per-center-account">账号: --</span>\
					<span class="per-center-getlicense">\
						<a class="btn-primary-get unauthorize" href="javascript:;" data-type="baidu">获取授权</a>\
					</span>\
			</div>\
			<div class="per-center-github"><span class="per-center-icon9"></span >\
			<span class="per-center-license font-color-grey">未授权</span>\
					<span class="per-center-account">账号: --</span>\
					<span class="per-center-getlicense">\
						<a  class="btn-primary-get unauthorize" href="javascript:;" data-type="github">获取授权</a>\
					</span>\
			</div>\
		</div>');
user_templates.put('account-collection-head','\
		<div class="per-center-right-collection clearfix" ><!-- 收藏头部 -->\
			<ul class="per-center-right-collectionul">\
			<li class="per-center-li per-center-right-collectionli" >我的收藏<span class="per-center-right-collectionicon1"></span><span class="per-center-right-collectionicon2"></span></li>\
			<li class="per-center-right-del">清空收藏</li>\
			</ul>\
		</div>');
user_templates.put('account-collection-none','<div class="per-center-collection-main" ><p>暂无数据</p></div>');
user_templates.put('account-collection-all','\
		<div class="per-center-collection-main2 " ><!-- 收藏有内容 -->\
			<div class="per-center-collection-text clearfix">\
			<ul>\
			</ul>\
			</div>\
		</div>');
user_templates.put('account-msg-head','\
		<div class="per-center-right-message clearfix" >\
			<ul class="per-center-right-messageul">\
				<li  class="font-color-grey per-center-right-messageli"><a href="#message/all" data-href="#message/all" >全部消息</a></li>\
				<li class="per-center-li per-center-right-messageli"><a href="#message/unread" data-href="#message/unread" >未读消息</a></li>\
				<li class="per-center-right-del">清空全部消息</li>\
			    <li class="per-center-right-del">全部标记为已读</li>\
			</ul>\
		</div>')
user_templates.put('account-msg-none','<div class="per-center-collection-main" ><p>暂无数据</p></div>');
user_templates.put('account-msg-all','\
		<div class="per-center-message " >\
			<div class="per-center-collection-text clearfix">\
			<ul>\
			<li>\
				<div class="per-center-message-text4"></div>\
				<div class="pcmt-text">\
						<a href="#" title=""></a>\
				</div>\
					<div class="pcmt-time">2016-05-13 11:09</div>\
			</li>\
			</ul>\
			</div>\
		</div>');
user_templates.put('account-msg-unread','\
		<div class="per-center-message "><!-- 未读消息 -->\
		<div class="per-center-collection-text clearfix">\
				<ul>\
				<li>\
					<div class="per-center-message-text3"></div>\
					<div class="pcmt-text">\
							<a href="#" title=""></a>\
					</div>\
						<div class="pcmt-time">2016-05-13 11:09</div>\
				</li>\
				</ul>\
		</div>\
	 </div>	');
user_templates.put('account-msg-fail','<div class="account-msg-fail"><div class="msg-detail"></div><button class="bt-cleart msg-clear-btn" type="button"  style="display: inline-block;"></button></div>');
user_templates.put('account-msg-succ','<div class="account-msg-succ"><div class="msg-detail"></div><button class="bt-cleart msg-clear-btn" type="button"  style="display: inline-block;"></button></div>');
