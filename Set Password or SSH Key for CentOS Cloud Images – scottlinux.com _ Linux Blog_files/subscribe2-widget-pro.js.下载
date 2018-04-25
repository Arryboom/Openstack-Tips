/**
 * Frontend Scripts for Subscribe2 Widget Pro
 * @since: v1.0
 */
jQuery(function ($) {

	jQuery('.s2w-form').on('submit', function (e) {
		var email = jQuery(this).children('.s2w-email').val();
		//validate email
		if (!validateEmail(email)) {
			//not a valid email address
			s2wInvalidMessage(jQuery(this).parent());
			return false;
		} else {
			//passed validation
		  jQuery(this).parents('.widget_subscribe2_widget').append('<div class="s2w-loading"></div>');
			return true;
		}

	});


});


function validateEmail(email) {
	// http://stackoverflow.com/a/46181/11236
	var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailReg.test(email);

}

function s2wInvalidMessage(form) {
	var validation = jQuery(form).attr('data-validation-error');
	jQuery('.s2w-alert').fadeOut('slow').remove(); //remove any alerts already present
	jQuery(form).prepend('<div class="s2w-alert s2w-validation">' + validation + '</div>');
	jQuery('.s2w-alert').slideDown('slow');
	jQuery(form).find('.s2w-email').addClass('s2w-input-invalid'); //add invalid class to input
}