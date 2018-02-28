@charset "UTF-8";

/* --- bb_code.css --- */

/* .bbCodeX classes are designed to exist inside .baseHtml. ie: they have no CSS reset applied */

.bbCodeBlock
{
	background-color: rgb(248,251,253);
margin: 1em 140px 1em 0;
border: 1px solid rgb(221, 229, 234);
overflow: auto;

}

	.bbCodeBlock .bbCodeBlock,
	.hasJs .bbCodeBlock .bbCodeSpoilerText,
	.messageList.withSidebar .bbCodeBlock
	{
		margin-right: 0;
	}

	/* mini CSS reset */
	.bbCodeBlock pre,
	.bbCodeBlock blockquote
	{
		margin: 0;
	}

	.bbCodeBlock img
	{
		border: none;
	}

.bbCodeBlock .type
{
	font-size: 13px;
font-family: 'Open Sans', Helvetica, Arial, sans-serif;
color: rgb(52,77,93);
background-color: #FFFFFF;
padding: 8px;
border-bottom: 1px solid rgb(221, 229, 234);

}

.bbCodeBlock pre,
.bbCodeBlock .code
{
	font-size: 10pt;
font-family: Consolas, 'Courier New', Courier, monospace;
background-color: rgb(248,251,253);
background-repeat: repeat-x;
background-position: top;
padding-right: 8px;
padding-left: 8px;
word-wrap: normal;
overflow: auto;
line-height: 26px;
min-height: 30px;
max-height: 500px;
_width: 600px;
direction: ltr;
background-image: -webkit-repeating-linear-gradient(top, rgba(0,0,0,.015) 0px, rgba(0,0,0,.015) 26px, rgba(0,0,0,.045) 26px, rgba(0,0,0,.045) 52px);
background-image: -moz-repeating-linear-gradient(top, rgba(0,0,0,.015) 0px, rgba(0,0,0,.015) 26px, rgba(0,0,0,.045) 26px, rgba(0,0,0,.045) 52px);
background-image: -ms-repeating-linear-gradient(top, rgba(0,0,0,.015) 0px, rgba(0,0,0,.015) 26px, rgba(0,0,0,.045) 26px, rgba(0,0,0,.045) 52px);
background-image: -o-repeating-linear-gradient(top, rgba(0,0,0,.015) 0px, rgba(0,0,0,.015) 26px, rgba(0,0,0,.045) 26px, rgba(0,0,0,.045) 52px);
background-image: repeating-linear-gradient(top, rgba(0,0,0,.015) 0px, rgba(0,0,0,.015) 26px, rgba(0,0,0,.045) 26px, rgba(0,0,0,.045) 52px);

}

.bbCodeBlock .code
{
	white-space: nowrap;
}

.bbCodeQuote
{
	border-color: rgb(221, 229, 234);

}

.bbCodeQuote .attribution
{
	font-size: 13px;
color: rgb(52,77,93);
background-color: #FFFFFF;
background-repeat: repeat-x;
background-position: top;
padding: 8px;
border-bottom: 1px solid rgb(221, 229, 234);
border-left: 2px solid rgb(70, 102, 124);

}

.bbCodeQuote .quoteContainer
{
	overflow: hidden;
	position: relative;

	font-style: italic;
font-size: 9pt;
background-color: rgb(248,251,253);
background-repeat: repeat-x;
background-position: top;
padding: 8px;
border-left: 2px solid rgb(70, 102, 124);

}


	.bbCodeQuote .quoteContainer .quote
	{
		max-height: 150px;
		overflow: hidden;
		padding-bottom: 1px;
	}

		.NoJs .bbCodeQuote .quoteContainer .quote
		{
			max-height: none;
		}

	.bbCodeQuote .quoteContainer .quoteExpand
	{
		display: none;
		box-sizing: border-box;
		position: absolute;
		height: 80px;
		top: 86px;
		left: 0;
		right: 0;

		font-size: 11px;
		line-height: 1;
		text-align: center;
		color: rgb(70, 102, 124);
		cursor: pointer;
		padding-top: 65px;
		background: -webkit-linear-gradient(top, rgba(248, 251, 253, 0) 0%, rgb(248,251,253) 80%);
		background: -moz-linear-gradient(top, rgba(248, 251, 253, 0) 0%, rgb(248,251,253) 80%);
		background: -o-linear-gradient(top, rgba(248, 251, 253, 0) 0%, rgb(248,251,253) 80%);
		background: linear-gradient(to bottom, rgba(248, 251, 253, 0) 0%, rgb(248,251,253) 80%);

		border-bottom-left-radius: ;
		border-bottom-right-radius: ;
	}

	.bbCodeQuote .quoteContainer .quoteExpand.quoteCut
	{
		display: block;
	}

	.bbCodeQuote .quoteContainer.expanded .quote
	{
		max-height: none;
	}

	.bbCodeQuote .quoteContainer.expanded .quoteExpand
	{
		display: none;
	}


	.bbCodeQuote img
	{
		max-height: 150px;
	}

	.bbCodeQuote iframe,
	.bbCodeQuote .fb_iframe_widget,
	.bbCodeQuote object,
	.bbCodeQuote embed
	{
		max-width: 200px;
		max-height: 150px;
	}

	.bbCodeQuote iframe:-webkit-full-screen
	{
		max-width: none;
		max-height: none;
	}

	.bbCodeQuote iframe:-moz-full-screen
	{
		max-width: none;
		max-height: none;
	}

	.bbCodeQuote iframe:-ms-fullscreen
	{
		max-width: none;
		max-height: none;
	}

	.bbCodeQuote iframe:fullscreen
	{
		max-width: none;
		max-height: none;
	}

.bbCodeSpoilerButton
{
	margin: 5px 0;
	max-width: 99%;
}

	.bbCodeSpoilerButton > span
	{
		display: inline-block;
		max-width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

.hasJs .bbCodeSpoilerText
{
	display: none;
	background-color: #FFFFFF;
padding: 5px;
margin-top: 5px;
margin-right: ;
margin-bottom: 5px;
border: 1px solid rgb(226, 226, 226);
overflow: auto;

}

	.hasJs .bbCodeSpoilerText .bbCodeSpoilerText,
	.hasJs .bbCodeSpoilerText .bbCodeBlock,
	.hasJs .messageList.withSidebar .bbCodeSpoilerText
	{
		margin-right: 0;
	}

.NoJs .bbCodeSpoilerContainer
{
	background-color: rgb(44, 44, 44); /* fallback for browsers without currentColor */
	background-color: currentColor;
}

	.NoJs .bbCodeSpoilerContainer > .bbCodeSpoilerText
	{
		visibility: hidden;
	}

	.NoJs .bbCodeSpoilerContainer:hover
	{
		background-color: transparent;
	}

		.NoJs .bbCodeSpoilerContainer:hover > .bbCodeSpoilerText
		{
			visibility: visible;
		}


@media (max-width:800px)
{
	.Responsive .bbCodeBlock,
	.Responsive.hasJs .bbCodeSpoilerText
	{
		margin-right: 0;
	}
}


/* --- facebook.css --- */

a.fbLogin,
#loginBar a.fbLogin
{
	display: inline-block;
	width: 200px;
	height: 22px;
	box-sizing: border-box;
	cursor: pointer;
	
	background: #29447e url('styles/uix/xenforo/connect_sprite.png');
	background-repeat: no-repeat;
	border-radius: 3px;
	background-position: left -188px;
	padding: 0px 0px 0px 1px;
	outline: none;
	
	text-decoration: none;
	color: white;
	font-weight: bold;
	font-size: 11px;
	line-height: 14px;
}

a.fbLogin:active,
#loginBar a.fbLogin:active
{
	background-position: left -210px;
}

a.fbLogin:hover,
#loginBar a.fbLogin:hover
{
	text-decoration: none;
}

	a.fbLogin span
	{
		background: #5f78ab url('styles/uix/xenforo/connect_sprite.png');
		border-top: solid 1px #879ac0;
		border-bottom: solid 1px #1a356e;
		display: block;
		padding: 2px 4px 3px;
		margin: 1px 1px 0px 21px;
		text-shadow: none;
		white-space: nowrap;
		overflow: hidden;
	}

	a.fbLogin:active span
	{
		border-bottom: solid 1px #29447e;
		border-top: solid 1px #45619d;
		background: #4f6aa3;
		text-shadow: none;
	}

/* --- google.css --- */

.googleLogin,
#loginBar .googleLogin
{
	display: inline-block;
	width: 200px;
	height: 22px;
	box-sizing: border-box;
	cursor: pointer;
	
	background-color: #dd4b39;
	border: #be3e2e solid 1px;
	border-radius: 3px;
	padding-left: 2px;
	
	color: white;
	font-weight: bold;
	font-size: 11px;
	line-height: 14px;
}

	.googleLogin span
	{
		display: block;
		background: url('styles/uix/xenforo/gplus.png') no-repeat;
		background-position: left 0;
		padding: 3px;
		padding-left: 23px;
		white-space: nowrap;
		overflow: hidden;
	}

.googleLogin:active,
#loginBar .googleLogin:active
{
	background-color: #be3e2e;
}

/* --- login_bar.css --- */

/** Login bar basics **/

#loginBar .pageContent 
{
	color: rgb(250, 250, 250);
background-color: rgb(204, 101, 0);

}

	

	#loginBar .pageContent
	{
		padding-top: 0;
		position: relative;
		_height: 0px;
	}

	#loginBar a
	{
		color: rgba(255,255,255,.8);

	}

	#loginBar form
	{
		padding: 16px 0;
margin: 0 auto;
display: none;
line-height: 20px;
position: relative;

	}

		#loginBar .xenForm .ctrlUnit,
		#loginBar .xenForm .ctrlUnit > dt label
		{
			margin: 0;
			border: none;
		}

		#loginBar .xenForm .ctrlUnit > dd
		{
			position: relative;
		}

	#loginBar .lostPassword,
	#loginBar .lostPasswordLogin
	{
		font-size: 11px;
	}

	#loginBar .rememberPassword
	{
		font-size: 11px;
	}

	#loginBar .textCtrl
	{
		color: #FFFFFF;
background: url(rgba.php?r=0&g=0&b=0&a=38); background: rgba(0, 0, 0, 0.15); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#26000000,endColorstr=#26000000);
border-color:  rgb(0, 0, 0); border-color:  rgba(0, 0, 0, 0.15); _border-color:  rgb(0, 0, 0);

	}

	#loginBar .textCtrl[type=text]
	{
		font-weight: bold;

	}

	#loginBar .textCtrl:-webkit-autofill /* http://code.google.com/p/chromium/issues/detail?id=1334#c35 */
	{
		background: url(rgba.php?r=0&g=0&b=0&a=38) !important; background: rgba(0, 0, 0, 0.15) !important; _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#26000000,endColorstr=#26000000);
		color: #FFFFFF;
	}

	#loginBar .textCtrl:focus
	{
		background: url(rgba.php?r=0&g=0&b=0&a=76) none; background: rgba(0, 0, 0, 0.3) none; _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#4C000000,endColorstr=#4C000000);

	}

	#loginBar input.textCtrl.disabled
	{
		color: rgb(118, 118, 118);
background-color: #000;
border-style: dashed;

	}

	#loginBar .button
	{
		min-width: 85px;
		*width: 85px;
	}

		#loginBar .button.primary
		{
			font-weight: bold;
		}

/** changes when eAuth is present **/

#loginBar form.eAuth
{
	-x-max-width: 720px; /* normal width + 170px */
}

	#loginBar form.eAuth .ctrlWrapper
	{
		border-right:  1px dotted rgb(250, 250, 250); border-right:  1px dotted rgba(250, 250, 250, .5); _border-right:  1px dotted rgb(250, 250, 250);
		margin-right: 220px;
		box-sizing: border-box;
	}

	#loginBar form.eAuth #eAuthUnit
	{
		position: absolute;
		top: 0px;
		right: 0;
		width: 200px;
	}

		#eAuthUnit li
		{
			margin-top: 10px;
			line-height: 0;
		}

/** handle **/

#loginBar #loginBarHandle label 
{
	font-weight: bold;
font-size: 13px;
color: #FFF;
background-color: rgb(204, 101, 0);
padding: 0 8px;
border-top-left-radius: 0;
border-top-right-radius: 0;
border-bottom-right-radius: 2px;
border-bottom-left-radius: 2px;
position: absolute;
right: 0;
display: inline-block;
text-align: center;
z-index: 1;
line-height: 30px;
height: 30px;

}


@media (max-width:800px)
{
	.Responsive #loginBar form.eAuth .ctrlWrapper
	{
		border-right: none;
		margin-right: 0;
		padding-top: 16px;
	}

	.Responsive #loginBar form.eAuth #eAuthUnit
	{
		position: static;
		width: 200px;
		margin: 0 auto;
	}
}
@media (max-width:610px)
{
	.Responsive #loginBar .xenForm .ctrlUnit > dd {padding-left: 0; padding-right: 0;}
	.Responsive #loginBar form.eAuth #eAuthUnit {width: auto; margin-left: 16px; margin-right: 16px;}
}



/* --- message.css --- */



.messageList
{
	
}

.messageList .message
{
	margin: 16px auto;

	background-color: rgb(250, 250, 250);
padding: 8px;
border: 1px solid rgb(226, 226, 226);
border-radius: 4px;

}

/* clearfix */ .messageList .message { zoom: 1; } .messageList .message:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

/*** Message block ***/

.message .messageInfo
{
	background-color: transparent;
padding: 0;
border-bottom: 1px none black;

	zoom: 1;
}

	.message .newIndicator
	{
		font-weight: bold;
font-size: 13px;
color: #FFF;
background-color: rgb(204, 101, 0);
padding: 1px 5px;
margin: 0 0 5px 5px;
border-radius: 2px;
display: block;
float: right;
position: relative;


	}
		

	.message .messageContent
	{
		padding: 8px;
min-height: 40px;
overflow: hidden;
*zoom: 1;

	}
	.message .messageTextEndMarker
	{
		height: 0;
		font-size: 0;
		overflow: hidden;
	}
	.message .editDate
	{
		text-align: right;
		margin-top: 5px;
		font-size: 11px;
		color: rgb(118, 118, 118);
	}

	.message .signature
	{
		font-size: 9pt;
color: rgb(118, 118, 118);
padding-top: 8px;
padding-bottom: 8px;
margin-top: 8px;
margin-bottom: 8px;
border: 0 dashed rgb(226, 226, 226);
border-top-width: 1px;
border-bottom-width: 1px;

	}

	
		.hasJs .signature.uix_signatureCut .uix_signature { pointer-events: none; }

		.signature.uix_signatureCut.uix_signatureExpanded .uix_signature { pointer-events: auto; }

		.uix_signatureWrapperInner {
			position: relative;
			max-height: 100px;
			transition: max-height 0.3s ease-in-out;
			overflow-y: hidden;
		}

		.NoJs .uix_signatureWrapperInner { max-height: none; }

		.signature.is-notCollapsible .uix_signatureWrapperInner { max-height: none; }

		.uix_signatureToggle {
			font-size: 12px;
color: rgb(4, 103, 126);
margin-right: auto;
margin-left: auto;
text-align: center;


			display: none;
			cursor: pointer;

			
			position: relative;
			z-index: 1;
		}
		
		.signature.uix_signatureCut .uix_signatureToggle {
			display: inline-block;
		}

		.NoJs .uix_signatureToggle { display: none; }

		.signature.is-notCollapsible .uix_signatureToggle { display: none; }

		

		

		.uix_signatureExpand { display: none; }

		.signature.uix_signatureCut .uix_signatureExpand { 
			display: inline; 
			padding: 5px;
		}

		.signature.uix_signatureExpanded .uix_signatureExpand { display: none; }

		.uix_signatureCollapse { display: none; }

		.signature.uix_signatureExpanded .uix_signatureCollapse { 
			display: inline; 
			padding: 5px;
		}

		

			.uix_signatureCollapse__phrase--hover { display: none; }

			.uix_signatureExpand__phrase--hover { display: none; }

		


		.uix_signatureCover {
			display: none;
			opacity: 0;
			-webkit-transition: opacity 0.3s ease-out;
			transition: opacity 0.3s ease-out;
			box-sizing: border-box;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding-top: 33.333333333333px;
			text-align: center;

			background: -webkit-linear-gradient(top, rgba(250, 250, 250, 0) 0%, rgb(250, 250, 250) 80%);
			background: -moz-linear-gradient(top, rgba(250, 250, 250, 0) 0%, rgb(250, 250, 250) 80%);
			background: -o-linear-gradient(top, rgba(250, 250, 250, 0) 0%, rgb(250, 250, 250) 80%);
			background: linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%, rgb(250, 250, 250) 80%);
			
			background: -webkit-linear-gradient(top, rgba(250, 250, 250, 0) 0%,  80%);
			background: -moz-linear-gradient(top, rgba(250, 250, 250, 0) 0%,  80%);
			background: -o-linear-gradient(top, rgba(250, 250, 250, 0) 0%,  80%);
			background: linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%,  80%);
		}

		.signature.uix_show .uix_signatureCover { display: block; }

		.signature.uix_signatureExpanded.uix_show .uix_signatureCover {	display: block; }

		.signature.uix_signatureCut .uix_signatureCover
		{
			display: block;
			opacity: 1;
		}

		.signature.uix_signatureExpanded .uix_signatureCover
		{
			display: none;
			opacity: 0;
		}

		.NoJs .uix_signatureCover { display: none !important; }

		.signature.is-notCollapsible .uix_signatureCover { display: none !important; }

	

	.message .messageMeta
	{
		font-size: 12px;
padding-top: 5px;
padding-bottom: 5px;
overflow: hidden;
zoom: 1;
box-sizing: border-box;

	}

		.message .privateControls
		{
			float: left;

		}

		.message .publicControls
		{
			float: right;

		}
			.message .privateControls .item
			{
				margin-right: 10px;
				float: left;
			}

				.message .privateControls .item:last-child
				{
					margin-right: 0;
				}

			.message .publicControls .item
			{
				margin-left: 10px;
				float: left;
			}
				.message .messageMeta .control
				{
					color: rgb(144, 144, 144);
background-color: #FFFFFF;
padding-right: 8px;
padding-left: 8px;
margin: 0 1px 4px 0;
border: 1px solid rgb(226, 226, 226);
border-radius: 2px;
line-height: 24px;
float: none;
display: inline-block;
vertical-align: middle;
font-weight: 600;

				}
					.message .messageMeta .control:focus
					{
						
					}
					.message .messageMeta .control:hover
					{
						color: rgb(4, 103, 126);
text-decoration: none;

					}
					.message .messageMeta .control:active
					{
						
					}
	/*** multiquote +/- ***/

	

		.messageNotices li
	{
		font-size: 12px;
color: rgb(70, 102, 124);
background-color: rgb(248,251,253);
padding: 8px;
margin-bottom: 8px;
border: 1px solid rgb(221, 229, 234);
border-radius: 2px;

	}
	
		.messageNotices .icon
		{
			float: right;
			width: 16px;
			height: 16px;
			background: url('styles/uix/xenforo/xenforo-ui-sprite.png') no-repeat 1000px 1000px;
		}
	
			.messageNotices .warningNotice .icon { background-position: -48px -32px; }		
			.messageNotices .deletedNotice .icon { background-position: -64px -32px; }		
			.messageNotices .moderatedNotice .icon {background-position: -32px -16px; }
	.message .likesSummary
	{
		color: rgb(70, 102, 124);
background-color: rgb(248,251,253);
padding: 8px;
margin-top: 8px;
border: 1px solid rgb(221, 229, 234);
border-radius: 2px;

	}
	.message .messageText > *:first-child
	{
		margin-top: 0;
	}

/* inline moderation changes */

.InlineModChecked .messageUserBlock,
.InlineModChecked .messageInfo,
.InlineModChecked .messageNotices,
.InlineModChecked .bbCodeBlock .type,
.InlineModChecked .bbCodeBlock blockquote,
.InlineModChecked .attachedFiles .attachedFilesHeader,
.InlineModChecked .attachedFiles .attachmentList
{
	background-color: rgb(204, 241, 252);

}

.InlineModChecked .messageUserBlock div.avatarHolder,
.InlineModChecked .messageUserBlock .extraUserInfo
{
	background: transparent;
}

.InlineModChecked .messageUserBlock .arrow span
{
	border-left-color: rgb(204, 241, 252);
}

/* message list */

.messageList .newMessagesNotice
{
	margin: 10px auto;
	padding: 5px 10px;
	border-radius: 5px;
	border: 1px solid rgb(240, 240, 240);
	background: rgb(250, 250, 250) url(styles/uix/xenforo/gradients/category-23px-light.png) repeat-x top;
	font-size: 11px;
}

/* deleted / ignored message placeholder */

.messageList .message.placeholder
{
}

.messageList .placeholder .placeholderContent
{
	overflow: hidden; zoom: 1;
	color: rgb(187, 187, 187);
	font-size: 11px;
}

	.messageList .placeholder a.avatar
	{
		float: left;
		display: block;
	}
		.messageList .placeholder a.avatar img
		{
			display: block;
			width: 32px;
			height: 32px;
		}
	

/* messages remaining link */

.postsRemaining a,
a.postsRemaining
{
	font-size: 11px;
	color: rgb(118, 118, 118);
}


@media (max-width:800px)
{
	.Responsive .message .newIndicator
	{
		margin-right: 0;
		border-top-right-radius: 2px;
	}
		.Responsive .message .newIndicator span
		{
			display: none;
		}
}

@media (max-width:610px)
{
	.Responsive .message .messageInfo
	{
		margin-left: 0;
		padding: 0 10px;
	}

	.Responsive .message .messageContent
	{
		min-height: 0;
	}
	

	.Responsive .message .postNumber,
	.Responsive .message .authorEnd
	{
		display: none;
	}
	.Responsive .message .signature
	{
		display: none;
	}
	.Responsive .messageList .placeholder a.avatar
	{
		margin-right: 10px;
	}
}


/* --- message_user_info.css --- */

.messageUserInfo
{
	background-color: #FFFFFF;
border: 1px solid rgb(226, 226, 226);
border-radius: 2px;
float: left;
width: 140px;

}

	.messageUserBlock
	{
		
		position: relative;
	}
		.messageUserBlock div.avatarHolder
		{
			background-color: #FFFFFF;
padding: 8px;
border-radius: 2px;
border-bottom-right-radius: 0;
border-bottom-left-radius: 0;
text-align: center;


			position: relative;
		}
			.messageUserBlock div.avatarHolder .avatar
			{
				display: block;
				font-size: 0;
			}
			.messageUserBlock div.avatarHolder .onlineMarker
			{
				position: absolute;
				top: 7px;
				left: 7px;
				
				color: rgb(127, 185, 0);
border: 7px solid transparent;
border-top-color: rgb(127, 185, 0);
border-left-color: rgb(127, 185, 0);
border-top-left-radius: 5px;
border-top-right-radius: 3px;
border-bottom-left-radius: 3px;
top: -1px;
left: -1px;

			}
		.messageUserBlock h3.userText
		{
			background-color: rgb(240, 240, 240);
padding: 8px;
border: 0 solid rgb(226, 226, 226);
border-top-width: 1px;
border-bottom-width: 1px;

		}
		.messageUserBlock .userBanner
		{
			display: block;
			margin-bottom: 5px;
			margin-left: -14px;
			margin-right: -14px;
		}
		.messageUserBlock .userBanner:last-child
		{
			margin-bottom: 0;
		}
		.messageUserBlock a.username
		{
			color: rgb(83, 83, 83);
display: block;
overflow: hidden;
font-weight: 600;

		}
		.messageUserBlock .userTitle
		{
			font-size: 11px;
display: block;
clear: both;

		}
		.messageUserBlock .extraUserInfo
		{
			font-size: 11px;
padding: 4px 6px;
border: 0 solid rgb(226, 226, 226);
border-radius: 2px;
border-top-left-radius: 0;
border-top-right-radius: 0;

		}
			.messageUserBlock .extraUserInfo dl
			{
				margin: 2px 0 0;
			}
			
			.messageUserBlock .extraUserInfo dl:first-child {margin-top: 0;}

			.messageUserBlock .extraUserInfo img
			{
				max-width: 100%;
			}
		.messageUserBlock .arrow
		{
			position: absolute;
			top: 10px;
			right: -10px;
			display: block;
			width: 0px;
			height: 0px;
			line-height: 0px;
			border: 10px solid transparent;
			border-left-color: rgb(226, 226, 226);
			-moz-border-left-colors: rgb(226, 226, 226);
			border-right: none;
			/* Hide from IE6 */
			_display: none;
		}
			.messageUserBlock .arrow span
			{
				position: absolute;
				top: -10px;
				left: -11px;
				display: block;
				width: 0px;
				height: 0px;
				line-height: 0px;
				border: 10px solid transparent;
				border-left-color: #FFFFFF;
				-moz-border-left-colors: #FFFFFF;
				border-right: none;
			}




/* clearfix */ .uix_userTextInner { zoom: 1; } .uix_userTextInner:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }


@media (max-width:610px)
{
	.Responsive .messageUserInfo
	{
		float: none;
		width: auto;
		margin-bottom: 5px;
	}

	.Responsive .messageUserBlock
	{
		overflow: hidden;
		position: relative;
	}

	.Responsive .messageUserBlock div.avatarHolder
	{
		float: left;
		padding: 5px;
	}

		.Responsive .messageUserBlock div.avatarHolder .avatar img
		{
			width: 48px;
			height: 48px;
		}

	.Responsive .messageUserBlock h3.userText
	{
		margin-left: 64px;
	}
	.Responsive .messageUserBlock .userBanner
	{
		max-width: 150px;
		margin-left: 0;
		margin-right: 0;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		position: static;
		display: inline-block;
	}
		.Responsive .messageUserBlock .userBanner span
		{
			display: none;
		}

	.Responsive .messageUserBlock .extraUserInfo
	{
		display: none !important;
	}

	.Responsive .messageUserBlock .arrow
	{
		display: none;
	}
}


/* --- moderator_bar.css --- */

#moderatorBar
{
	background-color: rgb(43, 43, 43);
	border-bottom: 1px solid rgb(187, 187, 187);	
	font-size: 11px;
}

/*#moderatorBar
{
	box-shadow: 0 0 5px #aaa;
	width: 100%;
	position: fixed;
	top: 0px;
	z-index: 100;
}

body
{
	padding-top: 25px;
}*/

/* clearfix */ #moderatorBar { zoom: 1; } #moderatorBar:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

#moderatorBar .pageContent
{
	padding: 2px 0;
	overflow: auto;
}

#moderatorBar a
{
	display: inline-block;
	padding: 2px 10px;
	border-radius: 3px;
}

#moderatorBar a,
#moderatorBar .itemCount
{
	color: rgb(240, 240, 240);
}

	#moderatorBar a:hover
	{
		text-decoration: none;
		background-color: rgb(83, 83, 83);
		color: rgb(250, 250, 250);
	}

/* TODO: maybe sort out the vertical alignment of the counters so they they are properly centered */

#moderatorBar .itemLabel,
#moderatorBar .itemCount
{
	display: inline-block;
	height: 16px;
	line-height: 16px;
}

#moderatorBar .itemCount
{	
	background: rgb(83, 83, 83);
	padding-left: 6px;
	padding-right: 6px;
	
	text-align: center;
	
	font-weight: bold;
	
	border-radius: 2px;
	text-shadow: none;
}

	#moderatorBar .itemCount.alert
	{
		background: #e03030;
		color: white;
		box-shadow: 2px 2px 5px rgba(0,0,0, 0.25);
	}
	
#moderatorBar .adminLink
{
	float: right;
}

#moderatorBar .permissionTest,
#moderatorBar .permissionTest:hover
{
	background: #e03030;
	color: white;
	box-shadow: 2px 2px 5px rgba(0,0,0, 0.25);
	font-weight: bold;
}

/* --- notices.css --- */

.hasJs .FloatingContainer .Notice
{
	display: none;
}

.FloatingContainer
{
	position: fixed;
	width: 300px;
	z-index: 9997;
	top: auto;
	left: auto;
	bottom: 0;
	right: 20px;
}

.Notices .Notice .blockImage
{
	padding: 10px 0 5px 10px;
}

.Notices .Notice .blockImage,
.FloatingContainer .floatingImage
{
	float: left;
}

.Notices .Notice .blockImage img,
.FloatingContainer .floatingImage img
{
	max-width: 48px;
	max-height: 48px;
}

.Notices .hasImage,
.FloatingContainer .hasImage
{
	margin-left: 64px;
	min-height: 52px;
}

.FloatingContainer .floatingItem
{
	display: block;
	padding: 10px;
	font-size: 11px;
	position: relative;
	margin-bottom: 20px;
	border: 1px solid transparent;
	border-radius: 6px;
	box-shadow: 1px 1px 3px rgba(0,0,0, 0.25);
}

.FloatingContainer .floatingItem.primary
{
	background-color: #FFFFFF;
	border-color: rgb(240, 240, 240);
}

.FloatingContainer .floatingItem.secondary
{
	color: rgb(70, 102, 124);
	background-color: rgb(236, 241, 245);
	border-color: rgb(248,251,253);
}

.FloatingContainer .floatingItem.dark
{
	color: #fff;
	background: black;
	background: url(rgba.php?r=0&g=0&b=0&a=204); background: rgba(0,0,0, 0.8); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#CC000000,endColorstr=#CC000000);
	border-color: #333;
}

.FloatingContainer .floatingItem.light
{
	color: #000;
	background: white;
	background: url(rgba.php?r=255&g=255&b=255&a=204); background: rgba(255,255,255, 0.8); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#CCFFFFFF,endColorstr=#CCFFFFFF);
	border-color: #ddd;
}

.FloatingContainer .floatingItem .title
{
	font-size: 14px;
	padding-bottom: 5px;
	font-weight: bold;
	display: block;
}

.FloatingContainer .floatingItem .DismissCtrl
{
	position: static;
	float: right;
	margin-left: 5px;
	margin-right: -5px;
	margin-top: -5px;
}

.Notices
{
	display: none;
}


	@media (max-width:800px)
	{
		.Responsive .Notice.wide { display: none !important; }
	}
	
	@media (max-width:610px)
	{
		.Responsive .Notice.medium { display: none !important; }
	}
	
	@media (max-width:480px)
	{
		.Responsive .Notice.narrow { display: none !important; }
		
		.Responsive .FloatingContainer
		{
			right: 50%;
			margin-right: -150px;
		}
	}


/* --- panel_scroller.css --- */

.hasJs .Notices.PanelScroller { display: none; }

.PanelScroller .scrollContainer,
.PanelScrollerOff .panel
{
	background-color: rgb(236, 241, 245);
margin-bottom: 8px;
border: 1px solid rgb(221, 229, 234);
border-radius: 2px;
font-size: 13pt;

}

.PanelScroller .PanelContainer
{
	position: relative;
	clear: both;
	width: 100%;
	overflow: auto;
}

	.hasJs .PanelScroller .Panels
	{
		position: absolute;
	}

	.PanelScroller .Panels
	{
		clear: both;
		margin: 0;
		padding: 0;
	}
	
		.PanelScroller .panel,
		.PanelScrollerOff .panel
		{
			overflow: hidden;
			position: relative;
			padding: 0 !important;

			background-color: rgb(236, 241, 245);
padding: 10px;
color: rgb(70, 102, 124);

		}
			
		.PanelScroller .panel .noticeContent,
		.PanelScrollerOff .panel .noticeContent
		{
			padding: 10px;
		}

/** panel scroller nav **/

.PanelScroller .navContainer
{
	margin: -13px 10px 10px 21px;
overflow: hidden;
zoom: 1;

}

.PanelScroller .navControls
{
	float: right;
}

/* clearfix */ .PanelScroller .navControls { zoom: 1; } .PanelScroller .navControls:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

	.PanelScroller .navControls a
	{
		font-size: 9px;
color: rgb(44, 44, 44);
background-color: rgb(248,251,253);
padding: 5px 6px 4px;
margin-left: -1px;
float: left;
display: block;
position: relative;

		
		border: 1px solid rgb(221, 229, 234);
border-radius: 2px;
		border-radius: 0;
	}
	
		.PanelScroller .navControls > a:first-child
		{
			border-bottom-left-radius: 2px;
		}
		
		.PanelScroller .navControls > a:last-child
		{
			border-bottom-right-radius: 2px;
		}
		
		.PanelScroller .navControls a:hover
		{
			text-decoration: none;
background-color: #FFFFFF;

		}
		
		.PanelScroller .navControls a.current
		{
			background-color: rgb(255,255,255);

		}
		
			.PanelScroller .navControls a .arrow
			{
				display: none;
			}
			
			.PanelScroller .navControls a.current span
			{
				display: block;
				line-height: 0px;
				width: 0px;
				height: 0px;
				border-top: 5px solid rgb(240, 240, 240);
				border-right: 5px solid transparent;
				border-bottom: 1px none black;
				border-left: 5px solid transparent;
				-moz-border-bottom-colors: rgb(240, 240, 240);
				position: absolute;
			}
			
			.PanelScroller .navControls a.current .arrow
			{
				border-top-color: rgb(221, 229, 234);
				top: 0px;
				left: 50%;
				margin-left: -5px;
			}
			
				.PanelScroller .navControls a .arrow span
				{
					border-top-color: rgb(236, 241, 245);
					top: -6px;
					left: -5px;
				}
				
/* notices */

.Notices .panel .noticeContent
{
	padding-right: 25px;
}

/* --- share_page.css --- */

.sharePage
{
}

/* clearfix */ .sharePage { zoom: 1; } .sharePage:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

	.sharePage .shareControl
	{
		float: left;
	}
	
	.sharePage .tweet
	{
		margin-right: 30px;
	}

	.sharePage .facebookLike .label
	{
		font-size: 11px;
		line-height: 24px;
		float: left;
		margin-right: 7px;
		display: none;
	}
	
	.sharePage iframe
	{
		height: 20px;
	}
	
	.sharePage .facebookLike iframe
	{
		z-index: 52;
	}
	



@media (max-width:480px)
{
	.Responsive .sharePage
	{
		display: none;
	}
}


/* --- thread_view.css --- */

.thread_view .threadAlerts
{
	border: 1px solid rgb(250, 250, 250);
	border-radius: 5px;
	font-size: 11px;
	margin: 10px 0;
	padding: 5px;
	line-height: 16px;
	background-image: url('styles/uix/xenforo/gradients/form-button-white-25px.png');
}
	
	.thread_view .threadAlerts dt
	{
		color: rgb(226, 226, 226);
		display: inline;
	}
	
	.thread_view .threadAlerts dd
	{
		color: rgb(83, 83, 83);
		font-weight: bold;
		display: inline;
	}
	
		.thread_view .threadAlerts .icon
		{
			float: right;
			width: 16px;
			height: 16px;
			margin-left: 5px;
			background: url('styles/uix/xenforo/xenforo-ui-sprite.png') no-repeat -1000px -1000px;
		}
		
			.thread_view .threadAlerts .deletedAlert .icon { background-position: -64px -32px; }
			.thread_view .threadAlerts .moderatedAlert .icon { background-position: -32px -16px; }
			.thread_view .threadAlerts .lockedAlert .icon { background-position: -16px -16px; }
	
.thread_view .threadAlerts + * > .messageList
{
	border-top: none;
}

.thread_view .threadNotices
{
	background-color: #FFFFFF;
	border: 1px solid rgb(240, 240, 240);
	border-radius: 5px;
	padding: 10px;
	margin: 10px auto;
}

.thread_view .InlineMod
{
	overflow: hidden; zoom: 1;
}

/* --- twitter.css --- */

a.twitterLogin,
#loginBar a.twitterLogin
{
	display: inline-block;
	width: 200px;
	height: 22px;
	box-sizing: border-box;
	cursor: pointer;
	
	background-color: #eee;
	background-image: -webkit-linear-gradient(#fff, #dedede);
	background-image: linear-gradient(#fff, #dedede);
	border: #ccc solid 1px;
	border-radius: 3px;
	padding: 3px;
	
	color: #333 !important;
	font-weight: bold;
	font-size: 11px;
	line-height: 14px;
}

	a.twitterLogin span
	{
		display: block;
		background: url('styles/uix/xenforo/twitter-bird.png') no-repeat;
		background-position: left 0;
		padding-left: 22px;
		text-shadow: 0 1px 0 rgba(255,255,255,.5);
		white-space: nowrap;
		overflow: hidden;
	}
	
a.twitterLogin:hover,
#loginBar a.twitterLogin:hover,
a.twitterLogin:active,
#loginBar a.twitterLogin:active
{
	border-color: #d9d9d9;
	background-image: -webkit-linear-gradient(#f8f8f8, #d9d9d9);
	background-image: linear-gradient(#f8f8f8, #d9d9d9);
	text-decoration: none;
}

/* --- uix_extendedFooter.css --- */





	
	
	
	
	
	







	.bigFooter .pageContent
	{
		color: rgb(187, 187, 187);
background-color: rgb(43, 43, 43);
padding: 16px 32px;
margin-top: 16px;
margin-bottom: 16px;
border-radius: 4px;
clear: both;


		
	}

	.bigFooterRow--mainRow {
		margin-left: -16px;
		margin-right: -16px;
	}

	.hasFlexbox .bigFooterRow--mainRow {
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;

		-ms-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	.bigFooterCol
	{
		vertical-align: top;
		box-sizing: border-box;

		padding-right: 16px;
padding-left: 16px;
border-color:  rgb(255, 255, 255); border-color:  rgba(255, 255, 255, .1); _border-color:  rgb(255, 255, 255);
line-height: 180%;

	}

	.hasFlexbox .bigFooterCol {
		-ms-flex: 1 1 260px;
		-webkit-flex: 1 1 260px;
		flex: 1 1 260px;
	}

	

	

	

	

	.bigFooterHeader
	{
		font-size: 16px;
color: #FFFFFF;
margin-bottom: 16px;
font-weight: 600;
;
	}

	.bigFooterHeader a { color: inherit }

	.bigFooterHeader .uix_icon
	{
		color: rgb(83, 83, 83);
margin-right: 8px;
display: inline-block;

	}

	.bigFooterCol a
	{
		color: #FFFFFF;
text-decoration: none;

	}

	.bigFooterCol a:hover
	{
		color: rgb(4, 103, 126);

	}

	.bigFooterCol .footerMenu
	{
		margin-bottom: 8px;
	}

	.bigFooterCol .footerMenu a
	{
		color: #FFFFFF;
padding: 8px 0;
border-bottom:  1px solid rgb(255,255,255); border-bottom:  1px solid rgba(255,255,255, .1); _border-bottom:  1px solid rgb(255,255,255);
display: block;

	}

	.bigFooterCol .widget-container
	{
		 background: none;
		 padding: 0;
		 margin: 0;
		 border: none;
		 border-radius: 0;
		 box-shadow: none;
	}

	@media (max-width: 480px)
	{
		.Responsive .bigFooterHeader {text-align: center;}
		.Responsive .bigFooterHeader .uix_icon {
			display: block;
			font-size: 48px;
			margin: 0;
			margin-bottom: 16px;
		}

		.Responsive .bigFooterRow--mainRow {text-align: center;}
	}

















