@charset "UTF-8";

/* --- uix.css --- */











	
	
		
	




	









	




	




	





	




	
		
	
	
	
		
	




	







	/*** UIX -- PAGE WIDTH ***/

	.uix_toggleWidth--init .pageWidth {
		-o-transition: max-width .4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
		-moz-transition: max-width .4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
		-webkit-transition: max-width .4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
		transition: max-width .4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	html.is-fullWidth .pageWidth { max-width: 100%; }

	html.is-setWidth .pageWidth { max-width: 1170px; }

	html.is-fullWidth .Menu.uix_megaMenu { max-width: 100%; }

	html.is-setWidth .Menu.uix_megaMenu { max-width: 1170px; }

	
		
	

	



.dataTable tr.dataRow th,
.discussionListFilters .removeFilter,
.discussionListFilters .removeAllFilters,
.AttachmentEditor .AttachedFile .ProgressMeter .ProgressGraphic,
.inlineCtrlGroup,
.PrefixMenu .PrefixGroup h3 { background-image: none; }

.MultiQuoteItem {border-bottom: 1px solid rgb(221, 229, 234);}

.MultiQuoteItem .messageInfo {
	background: rgb(248,251,253);
}

.MultiQuoteItem .avatarHolder {
	border-right: 1px solid rgb(221, 229, 234);
}

.importantMessage {
	background: rgb(255,255,255);
	border: 2px solid rgb(70, 102, 124);
	color: rgb(70, 102, 124);
	font-weight: bold;
	padding: 16px;
	margin: 16px 0;
}

.prefix.prefixPrimary {border-color: rgb(226, 226, 226);}

.prefix.prefixRed        { color: white; background-color: #e74c3c; border-color: #e74c3c; }
.prefix.prefixGreen      { color: white; background-color: #27ae60; border-color: #27ae60; }
.prefix.prefixOlive      { color: black; background-color: #16a085; border-color: #16a085; }
.prefix.prefixLightGreen { color: black; background-color: #2ecc71; border-color: #2ecc71; }
.prefix.prefixBlue       { color: white; background-color: #2980b9; border-color: #2980b9; }
.prefix.prefixRoyalBlue  { color: white; background-color: #2c3e50; border-color: #2c3e50;  }
.prefix.prefixSkyBlue    { color: black; background-color: #3498db; border-color: #3498db; }
.prefix.prefixGray       { color: black; background-color: #bdc3c7; border-color: #bdc3c7; }
.prefix.prefixSilver     { color: black; background-color: #7f8c8d; border-color: #7f8c8d; }
.prefix.prefixYellow     { color: black; background-color: #f1c40f; border-color: #f1c40f; }
.prefix.prefixOrange     { color: black; background-color: #e67e22; border-color: #e67e22; }

.userBanner.bannerStaff {background: rgb(204, 101, 0); color: #FFF; border-color: transparent;}

.userBanner.bannerStaff.wrapped span {background: url(rgba.php?r=0&g=0&b=0&a=178); background: rgba(0,0,0,.7); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#B2000000,endColorstr=#B2000000);}

.userBanner.wrapped span {top: -5px;}

.conversation_view .message:first-child,
.messageList .message:first-child,
.thread_view .pageNavLinkGroup + .section {margin-top: 0;}

.avatarHeap ol {margin: -4px;text-align: center;}

.avatarHeap li {float: none; display: inline-block; margin: 4px;}

.LikeText a {
	font-weight: bold;
	color: inherit;
}

.funbox
{
	overflow: hidden;
	margin: 16px 0;
}

.funbox img {max-width: 100%;}
.funbox {text-align: center;}





#logoBlock .funbox,
#logoBlock .funbox .section
{
	margin: 0;
}
#logoBlock .funbox .funboxWrapper
{
	vertical-align: middle;
	display: inline-block;
	line-height: normal;
}



	#logoBlock .funbox
	{
		float: right;
		line-height: 84px;
		*line-height: 88px;
		height: 88px;
		margin-left: 16px;
	}

	@media (max-width: 480px)
	{
		.Responsive #logoBlock .funbox
		{
			height: auto;
			line-height: normal;
			text-align: center;
			float: none;
			margin-left: 0;
		}
	}


@media (max-width: 480px)
{
	#logoBlock .funbox
	{
		margin-bottom: 16px;
	}
}



	/*** UIX PANELS -- BREAKPOINTS ***/

	.navTab--panelTrigger { display: none !important; }

	.Responsive #userBar.uix_offCanvasVisitorTabs.uix_noUserBarContent { display: none; }


	/*** UIX PANELS -- PUBLIC TABS BREAKPOINT IF NAVIGATION TYPE SIDE PANEL ***/

	

		
			
				
			
		

		@media screen and (max-width: 800px) {

			.Responsive #navigation .publicTabs .navTab:not(.navTab--navPanelTrigger):not(.selected) { display: none !important; }

			.Responsive #navigation .publicTabs .selected .navLink,
			.Responsive #navigation .publicTabs .selected .SplitCtrl { display: none !important; }

			.Responsive .navTab--navPanelTrigger {display: list-item !important;}

		}
	


	/*** UIX PANELS -- VISITOR TABS BREAKPOINT IF VISITOR TYPE SIDE PANEL ***/

	

		
			
				
			
		

		@media screen and (max-width: 800px) {

			.Responsive .visitorTabs .navTab.account:not(.navTab--panelTrigger),
			.Responsive .visitorTabs .navTab.inbox,
			.Responsive .visitorTabs .navTab.alerts {
				display: none !important;
			}

			.Responsive .navTab--visitorPanelTrigger {display: list-item !important;}

		}
	

	/*** UIX PANELS -- SIDEBAR BREAKPOINT IF SIDEBAR SIDE PANEL ***/

	

	.uix_panels.is-triggered .sticky_wrapper,
	.uix_panels.is-animating .sticky_wrapper {
		position: static !important;
		margin-left: 0 !important;
		margin-right: 0 !important;
	}

	.uix_panels.is-triggered .uix_mainSidebar.sticky .inner_wrapper,
	.uix_panels.is-animating .uix_mainSidebar.sticky .inner_wrapper {
		position: static !important;
	}

	.hasJs #userBar { display: none; }

	.uix_panels {
		position: relative;
		overflow: hidden;
		
		width: 100%;
		min-height: 100vh;
	}

	.mainPanelWrapper {
		position: relative;
		min-height: 100vh;
		left: 0px;
	}

	.sidePanelWrapper {
		width: 250px; 

		position: absolute;
		top: 0px;
		bottom: 0px;
		-webkit-backface-visibility: hidden;

		color: rgb(226, 226, 226);
background-color: rgb(43, 43, 43);
box-sizing: border-box;
width: 280px;

	}

	
	.uix_panels.is-leftShowing .mainPanelWrapper,
	.uix_panels.is-leftShowing .sidePanelWrapper--left {
		overflow-x: hidden;
	}


	/*** PANEL OVERLAY MASKS ***/

	@-webkit-keyframes panelMaskIn {
		from {opacity: 0;}
		to {opacity: 0.6;}
	}

	@keyframes panelMaskIn {
		from {opacity: 0;}
		to {opacity: 0.6;}
	}

	@-webkit-keyframes panelMaskOut {
		from {opacity: 0.6;}
		to {opacity: 0;}
	}

	@keyframes panelMaskOut {
		from {opacity: 0.6;}
		to {opacity: 0;}
	}

	.uix_panelMask {
		visibility: hidden;
		width: 100%;
		height: 100%;

		z-index: 1001;

		position: absolute;
		top: 0px;
		left: 0px;

		background: rgb(255, 255, 255);

		opacity: 0;
		-webkit-animation: panelMaskOut 0ms linear;
		animation: panelMaskOut 0ms linear;
	}

	.uix_panels.is-triggered .mainPanelWrapper .uix_panelMask,
	.uix_panels.is-leftTriggered .sidePanelWrapper:not(.sidePanelWrapper--left) .uix_panelMask,
	.uix_panels.is-rightTriggered .sidePanelWrapper:not(.sidePanelWrapper--right) .uix_panelMask {
		visibility: visible;

		opacity: 0.6;
		-webkit-animation-name: panelMaskIn;
		animation-name: panelMaskIn;
	}

	

	
		
		
	

	

	.uix_panels:not(.is-animating):not(.is-leftShowing) .sidePanelWrapper--left,
	.uix_panels:not(.is-animating):not(.is-leftShowing) .sidePanelWrapper--left *,
	.uix_panels:not(.is-animating):not(.is-rightShowing) .sidePanelWrapper--right,
	.uix_panels:not(.is-animating):not(.is-rightShowing) .sidePanelWrapper--right * {
		visibility: hidden !important;
	}


	/*** UIX PANELS -- ANIMATIONS ***/

	
	

	.mainPanelWrapper,
	.sidePanelWrapper {
		-moz-transition: -moz-transform cubic-bezier(0.22, 0.61, 0.36, 1) 300ms; /* Older Firefox */
		-o-transition: -o-transform cubic-bezier(0.22, 0.61, 0.36, 1) 300ms;
		-o-transition: transform cubic-bezier(0.22, 0.61, 0.36, 1) 300ms;

		-webkit-transition: -webkit-transform cubic-bezier(0.22, 0.61, 0.36, 1) 300ms; /* Older Android Browser  */
		transition: -webkit-transform cubic-bezier(0.22, 0.61, 0.36, 1) 300ms; /* Safari, iOS Safari, Blackberry Browser */
		transition: transform cubic-bezier(0.22, 0.61, 0.36, 1) 300ms; /* Chrome, Android Chrome, Firefox  */
	}

	


	/*** UIX PANELS -- ANIMATION TYPES ***/

	

	/*** UIX PANELS -- ANIMATIONS -- PUSH ***/

		.sidePanelWrapper,
		.mainPanelWrapper { z-index: 1; }

		.sidePanelWrapper--left { left: -280px; }

		.sidePanelWrapper--right { right: -280px; }

		.uix_panels.is-rightTriggered .mainPanelWrapper,
		.uix_panels.is-rightTriggered .sidePanelWrapper--right {
			-webkit-transform: translate(-280px, 0); -ms-transform: translate(-280px, 0);transform: translate(-280px, 0);
		}

		.uix_panels.is-leftTriggered .sidePanelWrapper--right {
			-webkit-transform: translate(280px, 0); -ms-transform: translate(280px, 0);transform: translate(280px, 0);
		}

		.uix_panels.is-leftTriggered .mainPanelWrapper,
		.uix_panels.is-leftTriggered .sidePanelWrapper--left {
		 	-webkit-transform: translate(280px, 0); -ms-transform: translate(280px, 0);transform: translate(280px, 0);
		}

		.uix_panels.is-rightTriggered .sidePanelWrapper--left {
			-webkit-transform: translate(-280px, 0); -ms-transform: translate(-280px, 0);transform: translate(-280px, 0);
		}

		

		

		

	


	


	

	


	/*** PANELS ***/

	.sidePanel {
		height: 100%;
		overflow-x: hidden;
		overflow-y: visible;
	}

	.sidePanel a {
		color: rgb(226, 226, 226);

	}

	.sidePanel a:hover {
		color: #FFFFFF;
text-decoration: none;

	}
	
	.sidePanel .sidePanel__blockLinksList ul.blockLinksList {
		padding: 0;
		margin: 0;
		width: 100%;
		background: transparent;
	}

	body .sidePanel__blockLinksList a:link {
		font-size: 12px;
padding: 8px 16px;
display: block;
font-weight: 600;

	}

	.sidePanel__navTabs .blockLinksList .Popup .PopupControl.PopupOpen,
	.sidePanel__navTabs .blockLinksList .Popup.PopupContainerControl.PopupOpen {
		color: #FFF;
background-color: rgb(4, 103, 126);
background-repeat: repeat-x;
background-position: top;
border-top-left-radius: 2px;
border-top-right-radius: 2px;
border-bottom-right-radius: 0;
border-bottom-left-radius: 0;

	}

	.sidePanel__blockLinksList .visibilityForm {
		font-size: 12px;
padding: 8px 16px;
display: block;
font-weight: 600;

	}

	.sidePanel .sidePanel__blockLinksList .itemCount {
		-webkit-transform: none; -ms-transform: none;transform: none;
		position: static;
		margin-top: -2px; 
	}
	.sidePanel .sidePanel__blockLinksList .itemCount.Zero {display: none;}

	.sidePanel .pairs dt,
	.sidePanel .pairsInline dt,
	.sidePanel .pairsRows dt,
	.sidePanel .pairsColumns dt,
	.sidePanel .pairsJustified dt {color: inherit;}

	/*** SIDE PANEL -- NAVTABS ***/

	.sidePanel__navTabs .navTab { position: relative; }

	.sidePanel__navTabs .navLink {
		display: block;
		color: rgba(255, 255, 255, 0.75);
padding: 0 16px;
border:  1px solid rgb(255,255,255); border:  1px solid rgba(255,255,255, .1); _border:  1px solid rgb(255,255,255);
border-right-width: 0;
border-left-width: 0;
line-height: 50px;
text-transform: uppercase;
font-weight: 600;
height: 50px;


		padding-right: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.sidePanel__navTabs .navLink:hover {
		color: #FFF;
text-decoration: none;

	}

	.sidePanel__navTabs .navTab.selected .navLink {
		color: #FFF;
background-color: rgb(4, 103, 126);

	}

	.sidePanel__navTabs .SplitCtrl {
		display: block;
		height: 50px;
		width: 50px;

		position: absolute;
		right: 0;
		top: 0;

		line-height: 50px;
		text-align: center;
		color: rgba(255, 255, 255, 0.75);
	}

	.sidePanel__navTabs .navTab.selected .SplitCtrl {
		color: #FFF;
	}

	.sidePanel__navTabs .SplitCtrl:hover {
		text-decoration: none;
		color: rgba(255, 255, 255, 0.75);
	}

	

	.sidePanel__navTabs .navTab .tabLinks {
		opacity: 0;
		max-height: 0;

		-moz-transition: opacity .3s linear, max-height .3s cubic-bezier(0.22, 0.61, 0.36, 1);
		-o-transition: opacity .3s linear, max-height .3s cubic-bezier(0.22, 0.61, 0.36, 1);
		-webkit-transition: opacity .3s linear, max-height .3s cubic-bezier(0.22, 0.61, 0.36, 1);
		transition: opacity .3s linear, max-height .3s cubic-bezier(0.22, 0.61, 0.36, 1);

		overflow: hidden;
	}

	.sidePanel__navTabs .navTab.is-active .tabLinks {
		opacity: 1;
		max-height: 600px;
	}

	.sidePanel__navTabs .navTab .blockLinksList {
		padding: 10px 0;
		background: transparent;
		border-bottom: none;
	}

	.sidePanel__navTabs .navTab .blockLinksList a {
		color: rgb(187, 187, 187);
padding: 12px 16px;
border-radius: 0;
font-weight: 600;

		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.sidePanel__navTabs .navTab .blockLinksList a:hover {
		color: #FFF;
background-color: transparent;
/* background-color: transparent; */

	}

	.sidePanel__navTabs .navTab .blockLinksList a:focus {
		color: inherit;
		background-color: inherit;
	}


	/*** SIDE PANELS -- TABS AND TAB PANELS ***/

	.sidePanel__tabPanels {
		position: relative;
	}

	.sidePanel__tabPanel {
		height: 0;

		-moz-transition: -moz-transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
		-o-transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
		-o-transition: -o-transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
		-webkit-transition: -webkit-transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
		transition: -webkit-transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
		transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);

		float: left;
		width: 100%;
	}

	.sidePanel__tabPanel.is-left {
		-webkit-transform: translate3d(-280px, 0, 0); -ms-transform: translate3d(-280px, 0, 0);transform: translate3d(-280px, 0, 0);
		position: absolute;
		top: 0;
		overflow-y: hidden;
	}

	.sidePanel__tabPanel.is-right {
		-webkit-transform: translate3d(280px, 0, 0); -ms-transform: translate3d(280px, 0, 0);transform: translate3d(280px, 0, 0);
		position: absolute;
		top: 0;
		overflow-y: hidden;
	}

	.sidePanel__tabPanel.is-active {
		-webkit-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);
		display: block;
		height: auto;
		overflow-y: auto;
	}
	
	.sidePanel--visitor .sidePanel__tabPanel.is-active {
		margin-bottom: 50px;
	}

	.sidePanel__tabPanel.is-hidden {
		visibility: hidden;
	}

	.hasFlexbox .sidePanel__tabs {
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;

		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
	        justify-content: space-between;
	}

	/* clearfix */ .not-flexbox .sidePanel__tabs { zoom: 1; } .not-flexbox .sidePanel__tabs:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

	.hasFlexbox .sidePanel__tabs li {
		max-width: 50%;
		-webkit-flex: 1 1 auto;
		-ms-flex: 1 1 auto;
		flex: 1 1 auto;
	}

	.no-flexbox .sidePanel__tabs li {
		float: left;
	}

	a.sidePanel__tab {

		font-size: 14px;
color: rgba(255, 255, 255, 0.75);
background: url(rgba.php?r=0&g=0&b=0&a=51); background: rgba(0,0,0,.2); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#33000000,endColorstr=#33000000);
padding-right: 10px;
padding-left: 10px;
border-right:  1px solid rgb(255,255,255); border-right:  1px solid rgba(255,255,255, .1); _border-right:  1px solid rgb(255,255,255);
display: block;
font-weight: 600;
cursor: pointer;
text-align: center;
line-height: 50px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
height: 50px;

	}

	a.sidePanel__tab:hover {color: rgba(255, 255, 255, 0.75);}

	a.sidePanel__tab.is-active {
		color: #FFFFFF;
box-shadow: inset 0 -3px rgb(4, 103, 126);
;
	}

	.sidePanelWrapper .itemCount {
		font-weight: bold;
font-size: 9px;
color: white;
background-color: #e74c3c;
padding: 0 2px;
border-radius: 2px;
position: absolute;
right: 2px;
top: -12px;
line-height: 16px;
min-width: 16px;
_width: 16px;
text-align: center;
text-shadow: none;
white-space: nowrap;
word-wrap: normal;
box-sizing: border-box;
height: 16px;

		margin-left: 6px;
display: inline-block;
vertical-align: top;
position: relative;
top: 50%;
-webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);transform: translateY(-50%);

	}

	.sidePanel__tabs .itemCount.Zero { display: none; }

	.sidePanel__textHeading {
		font-size: 14px;
color: #FFFFFF;
background-color: transparent;
padding: 16px;
border-width: 0;
border-top:  1px solid rgb(255,255,255); border-top:  1px solid rgba(255,255,255, .1); _border-top:  1px solid rgb(255,255,255);
border-bottom:  2px solid rgb(255,255,255); border-bottom:  2px solid rgba(255,255,255, .1); _border-bottom:  2px solid rgb(255,255,255);
font-weight: 600;
background-color: rgba(0,0,0,.1);

	}


	/*** SIDE PANELS -- ACCOUNT TAB PANEL ***/

	.sidePanel--visitor .visitorPanel .avatar {
		float: left;
		margin-right: 12px;
	}

	.sidePanel--visitor .visitorPanel .avatar img {
		width: 32px;
		height: 32px;
	}

	.sidePanel--visitor .visitorPanel .secondaryContent {
		padding: 0;
		margin: 0;
		border: none;
		background: none;
		box-shadow: none;
	}

	.sidePanel--visitor .visitorPanel h2 {
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 5px;
	}

	.sidePanel--visitor .visitorPanel h2 .muted { display: none; }

	.sidePanel--visitor .visitorPanel .stats { font-size: 12px; }

	.sidePanel .textCtrl {
		color: #FFFFFF;
background: url(rgba.php?r=0&g=0&b=0&a=25); background: rgba(0,0,0,.1); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#19000000,endColorstr=#19000000);
border-color:  rgb(255,255,255); border-color:  rgba(255,255,255, .1); _border-color:  rgb(255,255,255);

	}

	.sidePanel .statusPoster .statusEditorCounter { display: none; }

	.sidePanel .statusPoster .button { width: 100%; padding-left: 0; padding-right: 0;}
	.sidePanel .statusPoster .button:active {background-color: rgb(154, 154, 154);}

	.sidePanel .statusPoster .StatusEditor { width: 100%; }


	/*** SIDE PANELS -- ALERTS AND CONVOS TAB PANELS ***/

	.sidePanel__mediaObjectList .listItem {
		font-size: 12px;
color: rgb(144, 144, 144);
padding: 12px;
border-top-color:  rgb(255,255,255); border-top-color:  rgba(255,255,255, .1); _border-top-color:  rgb(255,255,255);
border-bottom:  1px solid rgb(255,255,255); border-bottom:  1px solid rgba(255,255,255, .1); _border-bottom:  1px solid rgb(255,255,255);

	}

	.sidePanel__mediaObjectList .listItem .listItemText {
		overflow: hidden;
		_overflow: visible;
		zoom: 1;
	}

	.sidePanel__mediaObjectList .listItem .avatar {
		margin-right: 12px;
		float: left;
	}

	.sidePanel__mediaObjectList .listItem .avatar img {
		width: 36px;
		height: 36px;
	}

	.sidePanel__mediaObjectList .listItem .title a {
		font-size: 13px;
color: rgb(255, 255, 255);
margin-bottom: 5px;
display: block;
font-weight: 600;

	}

	.sidePanel__mediaObjectList .listItem.unread .title a {
		color: rgb(4, 103, 126);

	}




	/*** SIDE PANELS -- SIDEBAR PANEL ***/


	.sidePanel .sidebar {
		width: 100%;
		background-color: transparent;
		overflow-y: hidden;
		padding: 0;
	}

	.sidePanel .sidebar .section .secondaryContent {
		background: none;
		box-shadow: none;
		border: none;
		padding: 0 16px;
	}

	.sidePanel .sidebar .section:first-child,
	.sidePanel .sidebar .section:last-child {margin: 16px auto;}

	.sidePanel .sidebar .section .secondaryContent h3 {
		font-size: 14px;
color: #FFFFFF;
background-color: transparent;
padding: 16px;
border-width: 0;
border-top:  1px solid rgb(255,255,255); border-top:  1px solid rgba(255,255,255, .1); _border-top:  1px solid rgb(255,255,255);
border-bottom:  2px solid rgb(255,255,255); border-bottom:  2px solid rgba(255,255,255, .1); _border-bottom:  2px solid rgb(255,255,255);
font-weight: 600;
background-color: rgba(0,0,0,.1);


		margin-top: 16px;
		margin-bottom: 16px;
		margin-right: -16px;
		margin-left: -16px;
	}

	.sidePanel .sidebar .section .secondaryContent h3 a  {
		font-size: 14px;
color: #FFFFFF;
	}

	.sidePanel .sidebar .widget-tabs .tabs {
		margin-bottom: 16px;

		padding: 0;
	}

	.sidePanel .tabs li:hover a,
	.sidePanel .tabs.noLinks li:hover {color: rgb(44, 44, 44);}

	.sidePanel .sidebar .widget-tabs .tabs {overflow: hidden;}

	.sidebar .visitorPanel .avatar img {
    		width: 75px;
    		height: 75px;
	}







#navigation .pageContent {
	border-radius: 4px;
}






.noBorderRadiusTop {
	border-top-left-radius: 0 !important;
	border-top-right-radius: 0 !important;
}

.noBorderRadiusBottom {
	border-bottom-left-radius: 0 !important;
	border-bottom-right-radius: 0 !important;
}

.noBorderRadius {
	border-radius: 0 !important;
}




	

	.noBorderRadiusTop .navTabs {
		border-top-left-radius: 0 !important;
		border-top-right-radius: 0 !important;
	}

	.noBorderRadiusBottom .navTabs {
		border-bottom-left-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}

	.noBorderRadius .navTabs { border-radius: 0 !important; }


	

	.noBorderRadiusBottom .navTabs .navTab.selected .tabLinks {
		border-bottom-left-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}

	.noBorderRadius .navTabs .navTab.selected .tabLinks { border-radius: 0 !important; }


	

		

		/* THE FIRST TAB OF THE FIRST UL */

		.navTabs .navLeft:first-of-type .uix_leftMost {
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
		}

		#userBar .navTabs .navLeft:first-of-type .uix_leftMost {
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
		}

		 #navigation .navTabs .navLeft:first-of-type .uix_leftMost { border-bottom-left-radius: 0 !important; } 

			/* NAVLINK */

			.navTabs .navLeft:first-of-type .uix_leftMost .navLink {
				border-radius: inherit;
			}


		/* THE LAST TAB OF THE "LAST" UL */

		.navTabs .navRight .uix_rightMost {
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}

		#userBar .navTabs .navRight .uix_rightMost {
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}

		 #navigation .navTabs .navRight .uix_rightMost { border-bottom-right-radius: 0 !important; } 

		/* CAN'T USE LAST-OF-TYPE BECAUSE NATURE OF FLOAT: RIGHT */

		.navTabs .navRight ~ .navRight .uix_rightMost {
			border-top-right-radius: initial !important;
			border-bottom-right-radius: initial !important;
		}

			/* NAVLINK */

			.navTabs .navRight .uix_rightMost .navLink {
				border-radius: inherit;
			}


		

		/* THE FIRST TAB OF THE FIRST UL */

		.noBorderRadius .navLeft:first-of-type .uix_leftMost {
			border-bottom-left-radius: 0 !important;
			border-top-left-radius: 0 !important;
		}

		.noBorderRadiusBottom .navTabs .navLeft:first-of-type .uix_leftMost { border-bottom-left-radius: 0 !important; }

		.noBorderRadiusTop .navTabs .navLeft:first-of-type .uix_leftMost { border-top-left-radius: 0 !important; }


		.activeSticky .navLeft:first-of-type .uix_leftMost {
			border-bottom-left-radius: 0 !important;
			border-top-left-radius: 0 !important;
		}


		/* THE LAST TAB OF THE "LAST" UL */

		.noBorderRadius .navRight .uix_rightMost {
			border-bottom-right-radius: 0 !important;
			border-top-right-radius: 0 !important;
		}

		.noBorderRadiusBottom .navTabs .navRight .uix_rightMost { border-bottom-right-radius: 0 !important; }

		.noBorderRadiusTop .navTabs .navRight .uix_rightMost { border-top-left-radius: 0 !important; }


		.activeSticky .navRight .uix_rightMost {
			border-bottom-right-radius: 0 !important;
			border-top-right-radius: 0 !important;
		}





	








.uix_icon {
	display: inline-block;
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.uix_icon-facebook:before		 {content: "\f09a";}
.uix_icon-twitter:before		 {content: "\f099";}
.uix_icon-youtube:before		 {content: "\f16a";}
.uix_icon-dribbble:before		 {content: "\f17d";}
.uix_icon-vimeo:before		 	 {content: "\f194";}
.uix_icon-deviantArt:before		 {content: "\f1bd";}
.uix_icon-googlePlus:before		 {content: "\f0d5";}
.uix_icon-linkedIn:before		 {content: "\f0e1";}
.uix_icon-instagram:before		 {content: "\f16d";}
.uix_icon-pinterest:before	 	 {content: "\f0d2";}
.uix_icon-steam:before	 		 {content: "\f1b6";}
.uix_icon-twitch:before	 		 {content: "\f1e8";}
.uix_icon-vine:before	 		 {content: "\f1ca";}
.uix_icon-tumblr:before	 		 {content: "\f173";}
.uix_icon-git:before	 		 {content: "\f1d3";}
.uix_icon-reddit:before	 		 {content: "\f1a1";}
.uix_icon-flickr:before	 		 {content: "\f188";}

.uix_icon-close:before		 	 {content: "\f00d";}
.uix_icon-search:before		 	 {content: "\f002";}
.uix_icon-admin:before		 	 {content: "\f013";}
.uix_icon-cog:before			 {content: "\f013";}
.uix_icon-home:before		 	 {content: "\f015";}
.uix_icon-inbox:before		 	 {content: "\f0e0";}
.uix_icon-alerts:before		 	 {content: "\f024";}
.uix_icon-menu:before			 {content: "\f0c9";}
.uix_icon-navOverflow:before		 {content: "\f141";}
.uix_icon-sitemap:before		 {content: "\f0e8";}
.uix_icon-jumpToTop:before		 {content: "\f062";}
.uix_icon-jumpToBottom:before		 {content: "\f063";}
.uix_icon-signIn:before			 {content: "\f007";}
.uix_icon-register:before		 {content: "\f09c";}

.uix_icon-permissions:before		 {content: "\f1c4";}
.uix_icon-user:before		 	 {content: "\f007";}
.uix_icon-users:before		 	 {content: "\f0c0";}
.uix_icon-reports:before		 {content: "\f0f6";}
.uix_icon-moderator:before		 {content: "\f0ae";}

.uix_icon-email:before 			 {content: "\f0e0";}
.uix_icon-rss:before 			 {content: "\f09e";}
.uix_icon-comment:before 		 {content: "\f075";}
.uix_icon-thumbsUp:before 		 {content: "\f164";}
.uix_icon-trophy:before 		 {content: "\f091";}

.uix_icon-statsDiscussions:before	 {content: "\f0e5";}
.uix_icon-statsMessages:before		 {content: "\f0c5";}
.uix_icon-statsSubforumPopup:before	 {content: "\f114";}

.uix_icon-collapse:before		 { content: "\f068"; }
.uix_icon-expand:before		 	 { content: "\f067"; }

.uix_icon-expandDropdown:before		 { content: "\f0d7"; }
.uix_icon-collapseDropdown:before	 { content: "\f0d8"; }

.uix_icon-expandWidth:before 		 { content: '\f065'; }
.uix_icon-compressWidth:before 	 	 { content: '\f066'; }

.uix_icon-collapseRightSidebar:before	 { content: '\f138'; }
.uix_icon-expandRightSidebar:before	 { content: '\f137'; }
.uix_icon-collapseLeftSidebar:before	 { content: '\f137'; }
.uix_icon-expandLeftSidebar:before	 { content: '\f138'; }

.uix_icon--fixedWidth {
	width: 1.28571429em;
	text-align: center;
}






	html .redactor_toolbar li a
	{
		text-indent: 0;
		text-align: center;
		line-height: 22px;
		font-size: 14px;
		color: rgb(44, 44, 44);
	}
	
	
	html .redactor_toolbar li a:hover {background: none;}
	
	html .redactor_toolbar li a:hover {background-image: none;}

	html .redactor_dropdown a.icon:before
	{
		margin-left: -22px;
		margin-right: 10px;
		font-size: 14px;
	}
	html .redactor_toolbar li a:before,
	html .redactor_dropdown a.icon:before
	{
		display: inline-block;
		font-family: FontAwesome;
		font-style: normal;
		font-weight: normal;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	html .redactor_toolbar li a.redactor_btn_bold {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_bold:before
	{
		content: "\f032";
	}
	html .redactor_toolbar li a.redactor_btn_italic {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_italic:before
	{
		content: "\f033";
	}
	html .redactor_toolbar li a.redactor_btn_underline {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_underline:before
	{
		content: "\f0cd";
	}
	html .redactor_toolbar li a.redactor_btn_deleted {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_deleted:before
	{
		content: "\f0cc";
	}
	html .redactor_toolbar li a.redactor_btn_fontcolor {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_fontcolor:before
	{
		content: "\f043";
	}
	html .redactor_toolbar li a.redactor_btn_fontsize {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_fontsize:before
	{
		content: "\f034";
	}
	html .redactor_toolbar li a.redactor_btn_fontfamily {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_fontfamily:before
	{
		content: "\f031";
	}
	html .redactor_toolbar li a.redactor_btn_createlink {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_createlink:before
	{
		content: "\f0c1";
	}
	html .redactor_toolbar li a.redactor_btn_unlink {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_unlink:before
	{
		content: "\f127";
	}
	html .redactor_toolbar li a.redactor_btn_alignment {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_alignment:before
	{
		content: "\f036";
	}
	html .redactor_dropdown a.alignLeft {background-image: none;}
	html .redactor_dropdown a.alignLeft:before
	{
		content: "\f036";
	}
	html .redactor_dropdown a.alignCenter {background-image: none;}
	html .redactor_dropdown a.alignCenter:before
	{
		content: "\f037";
	}
	html .redactor_dropdown a.alignRight {background-image: none;}
	html .redactor_dropdown a.alignRight:before
	{
		content: "\f038";
	}
	html .redactor_toolbar li a.redactor_btn_unorderedlist {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_unorderedlist:before
	{
		content: "\f0ca";
	}
	html .redactor_toolbar li a.redactor_btn_orderedlist {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_orderedlist:before
	{
		content: "\f0cb";
	}
	html .redactor_toolbar li a.redactor_btn_outdent {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_outdent:before
	{
		content: "\f03b";
	}
	html .redactor_toolbar li a.redactor_btn_indent {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_indent:before
	{
		content: "\f03c";
	}
	html .redactor_toolbar li a.redactor_btn_smilies {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_smilies:before
	{
		content: "\f118";
	}
	html .redactor_toolbar li a.redactor_btn_image {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_image:before
	{
		content: "\f03e";
	}
	html .redactor_toolbar li a.redactor_btn_media {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_media:before
	{
		content: "\f008";
	}
	html .redactor_toolbar li a.redactor_btn_insert {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_insert:before
	{
		content: "\f196";
	}
	html .redactor_dropdown a.quote {background-image: none;}
	html .redactor_dropdown a.quote:before
	{
		content: "\f10e";
	}
	html .redactor_dropdown a.spoiler {background-image: none;}
	html .redactor_dropdown a.spoiler:before
	{
		content: "\f070";
	}
	html .redactor_dropdown a.code {background-image: none;}
	html .redactor_dropdown a.code:before
	{
		content: "\f121";
	}
	html .redactor_dropdown a.strikethrough {background-image: none;}
	html .redactor_dropdown a.strikethrough:before
	{
		content: "\f0cc";
	}
	html .redactor_toolbar li a {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_draft:before
	{
		content: "\f0c7"
	}
	html .redactor_dropdown a.saveDraft {background-image: none;}
	html .redactor_dropdown a.saveDraft:before
	{
		content: "\f0c7"
	}
	html .redactor_dropdown a.deleteDraft {background-image: none;}
	html .redactor_dropdown a.deleteDraft:before
	{
		content: "\f014";
	}
	html .redactor_toolbar li a.redactor_btn_undo {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_undo:before
	{
		content: "\f0e2";
	}
	html .redactor_toolbar li a.redactor_btn_redo {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_redo:before
	{
		content: "\f01e";
	}
	html .redactor_toolbar li a.redactor_btn_removeformat {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_removeformat:before
	{
		content: "\f12d";
	}
	html .redactor_toolbar li a.redactor_btn_switchmode {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_switchmode:before
	{
		content: "\f0ad";
	}
	html .redactor_toolbar li a.redactor_btn_custom_gallery {background-image: none;}
	html .redactor_toolbar li a.redactor_btn_custom_gallery:before {
		content: "\f030";
	}


.navTabs .navTab .navLink > .uix_icon {
	float: left;
	margin-right: .4em;
	font-size: 1.15em;
	line-height: inherit;
}

.navTabs .navTab.navTab--justIcon .navLink > .uix_icon { margin-right: 0; }




.clear { clear:both; }
.clear_left { clear:left; }
.clear_right { clear:right; }
.float_left { float: left; }
.float_right { float: right; }
.uix_hide {display: none !important;}

.u-largeGutter {
	padding-left: 16px !important;
	padding-right: 16px !important;
}

.u-smallGutter {
	padding-left: 8px !important;
	padding-right: 8px !important;
}

u-textEllipses {
	text-overflow: ellipses;
	overflow: hidden;
	white-space: nowrap;
}

@media screen and (max-width: 800px) {
	.Responsive .u-showBelowWideWidth { display: block !important; }

	.Responsive .u-hideBelowWideWidth { display: none !important; }
}

@media screen and (max-width: 610px) {
	.Responsive .u-showBelowMediumWidth { display: block !important; }

	.Responsive .u-hideBelowMediumWidth { display: none !important; }
}

@media screen and (max-width: 480px) {
	.Responsive .u-showBelowNarrowWidth { display: block !important; }

	.Responsive .u-hideBelowNarrowWidth { display: none !important; }
}

@media screen and (min-width: 801px) {
	.Responsive .u-showAboveWideWidth { display: block !important; }
	
	.Responsive .u-hideAboveWideWidth { display: none !important; }	
}

@media screen and (min-width: 611px) {
	.Responsive .u-showAboveMediumWidth { display: block !important; }
	
	.Responsive .u-hideAboveMediumWidth { display: none !important; }	
}

@media screen and (min-width: 481px) {
	.Responsive .u-showAboveNarrowWidth { display: block !important; }
	
	.Responsive .u-hideAboveNarrowWidth { display: none !important; }	
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

a label {
	cursor: pointer;
}
::selection
{
	color: #FFF;
background-color: rgb(74, 78, 81);

}
body::-webkit-selection
{
	color: #FFF;
background-color: rgb(74, 78, 81);

}
body::-moz-selection
{
	color: #FFF;
background-color: rgb(74, 78, 81);

}
.errorPanel
{
	color: rgba(0,0,0,.8);
background-color: #FF9494;
border-color:  rgb(0,0,0); border-color:  rgba(0,0,0, .2); _border-color:  rgb(0,0,0);

}



/*** UIX -- HEADER LAYOUT STUFF ***/

.header__blockItem {
	margin-top: 16px;
	margin-bottom: 16px;
}

.header__blockItem:last-of-type { margin-bottom: 0; }



	@media (max-width: 800px) and (min-width: 481px) {

		.header__blockItem:first-child { margin-top: ; }
	}





@media (max-width: 480px) {

	.Responsive .header__blockItem { margin: 0; }
}







.Menu { z-index: 9000;}




#navigation .visitorTabs {
    min-width: 1px;
}




#AccountMenu {width: 288px;}
ul.col1.blockLinksList, ul.col2.blockLinksList  {width: 50%;}
#AccountMenu .menuColumns a, #AccountMenu .menuColumns label {width: auto;}

.navTabs .navLink .itemCount.Zero {
	display: none !important;
}

.xenForm .checkboxColumns.blockLinksList > dd > ul li,
ul.checkboxColumns.blockLinksList li {
	box-sizing: border-box;
}

.Menu.uix_megaMenu {
	max-width: 1170px;
	width: 100%;
	left: 0 !important;
	right: 0;
	margin: 0 auto;
	box-sizing: border-box;
	
}

#headerMover #header {
	position: static;
	width: auto;
}

#headerMover #headerProxy {
	display: none;
	height: 0;
}








.navTabs .navTab.PopupClosed .navLink { color: rgba(255, 255, 255, 0.75); }

	

	.navTabs .navTab:hover,
	.navTabs .navTab.PopupClosed:hover {
		color: #FFF;
background: url(rgba.php?r=0&g=0&b=0&a=51); background: rgba(0, 0, 0, .2); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#33000000,endColorstr=#33000000);

	}

	.navTabs .navTab:hover .navLink,
	.navTabs .navTab.PopupClosed:hover .navLink,
	.navTabs .navTab.PopupClosed:hover .SplitCtrl { color: inherit; }



	

	.navTabs .navTab.Popup.PopupOpen,
	.navTabs .navTab.selected.PopupOpen .navLink {
		color: #FFF;
background-color: rgb(4, 103, 126);
border-color: transparent;

	}

	.navTabs .navTab.Popup.PopupOpen .navLink,
	.navTabs .navTab.Popup.PopupOpen .SplitCtrl { color: inherit; }


	

	.navTabs .navTab.selected .navLink,
	.navTabs .navTab.PopupClosed.selected .navLink,
	.navTabs .navTab.PopupClosed.selected .SplitCtrl { color: rgb(4, 103, 126); }

	.hasTabLinks #navigation .navTabs .navTab.selected .navLink { border-bottom-color: rgb(250, 250, 250); }

	.navTabs .moderatorTabs .uix_icon { opacity: 0.5; }



	.navTabs .SplitCtrl {
		font-family: FontAwesome !important;
		font-weight: normal !important;
		font-style: normal !important;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-transform: translate(0, 0); -ms-transform: translate(0, 0);transform: translate(0, 0);

		font-size: 12px;

		margin-left: -22px;
	}

	.navTabs .SplitCtrl,
	#userBar .navTabs .SplitCtrl {
		width: 1em;
		border: none !important;
		padding-left: 0 !important;
		padding-right: 0 !important;
		margin-right: 0 !important;
		background: none !important;
	}

	#userBar .navTabs .SplitCtrl {
		margin-left: -22px;
	}

	.navTabs .SplitCtrl:hover { text-decoration: none; }

	.navTabs .SplitCtrl:before {
		content: "\f0d7";
		display: block;
	}

	.navTabs .navTab.Popup .navLink:not(.NoPopupGadget) {
		padding-right: calc( .2em + 22px );
	}

	#userBar .navTabs .navTab.Popup .navLink:not(.NoPopupGadget) {
		padding-right: calc( .2em + 22px );
	}

	

	.navTabs .navTab.Popup.PopupOpen .SplitCtrl:before { content: "\f0d8"; }

	

		.navTabs .navTab.selected .SplitCtrl { display: none; }

	









	.navTabs .publicTabs .navTab.selected.Popup .navLink { padding-right: 10px; }

	#navigation.inactiveSticky.uix_noTabLinks .pageContent { height: 48px; }

	#navigation .pageContent { height: 89px; }

	#navigation .navTabs {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.navTabs .navTab.selected .tabLinks {
		top: 48px;
		padding-right: 8px;
padding-left: 8px;
border: 1px solid rgb(226, 226, 226);
border-top-width: 0;
border-radius: 4px;
border-top-left-radius: 0;
border-top-right-radius: 0;
box-sizing: border-box;


		height: 41px;
		line-height: 40px;
	}

	.navTabs .navTab.selected .tabLinks li {
		padding-top: 0;
		max-height: 40px;
		box-sizing: border-box;
	}





.navTabs .navTab.account .itemCount,
.navTabs .navTab.inbox .itemCount,
.navTabs .navTab.alerts .itemCount {
	font-weight: bold;
font-size: 9px;
color: white;
background-color: #e74c3c;
padding: 0 2px;
border-radius: 2px;
position: absolute;
right: 2px;
top: -12px;
line-height: 16px;
min-width: 16px;
_width: 16px;
text-align: center;
text-shadow: none;
white-space: nowrap;
word-wrap: normal;
box-sizing: border-box;
height: 16px;

}

.Menu.uix_adminMenu .blockLinksList .itemCount.alert,
#userBar .navTabs .navTab.account .itemCount,
#userBar .navTabs .navTab.inbox .itemCount,
#userBar .navTabs .navTab.alerts .itemCount
{
	color: #FFF;
background-color: #e74c3c;

}


	#navigation .navTabs .navLink {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	#navigation .navTabs .navLink .itemCount {
		margin-left: 6px;
display: inline-block;
vertical-align: top;
position: relative;
top: 50%;
-webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);transform: translateY(-50%);

	}
	#navigation .navTabs .navLink .itemCount .arrow
	{
		display: none;
	}














/********************************
POPUP ICON SWAP
********************************/

@media (max-width: 480px) {
	.Responsive .navigationSideBar .heading span:before {
		content: '\f0d7';
		font-family: 'FontAwesome';
	}
}

.Popup .arrowWidget:before {
	content: '\f0d7';
	font-family: 'FontAwesome';
}
.Popup .PopupOpen .arrowWidget:before {
	content: '\f0d8';
	font-family: 'FontAwesome';
}

.messageSimple { border-bottom: 1px solid rgb(226, 226, 226); }

.messageSimpleList .placeholder .placeholderContent {background-image: none;}







.navigationSideBar {font-size: 12px;}
.navigationSideBar a:hover {
	background-image: none;
	color: rgb(4, 103, 126);
}
.navigationSideBar > ul {
	border: solid 1px rgb(226, 226, 226);
	border-width: 0 0 1px 1px;
	margin-bottom: 10px;
	background-color: #FFFFFF;
}
.navigationSideBar > ul,
.navigationSideBar > ul > li.section:last-child > ul > li:last-child,
.navigationSideBar > ul > li.section:last-child > ul > li:last-child a {border-bottom-left-radius: 4px;}

.navigationSideBar > ul.menuVisible,
.navigationSideBar > ul.menuVisible > li.section:last-child > ul > li:last-child,
.navigationSideBar > ul.menuVisible > li.section:last-child > ul > li:last-child a {border-radius: 0 0 4px 4px;}







input[type=search],
input[type=text] {
	-webkit-appearance: none;
}

#calroot {
	box-shadow: 4px 4px 10px -2px rgba(0,0,0,.1);
}

#QuickSearch input[type='checkbox'] {vertical-align: text-bottom;}

#QuickSearchQuery {
	min-height: 0;

	padding-right: 10px;
padding-left: 10px;
line-height: normal;
box-sizing: border-box;
width: 250px;
height: 36px;

}

#QuickSearch .formPopup .secondaryControls {
	width: 250px;
	box-sizing: border-box;
}

#QuickSearch .formPopup .controlsWrapper .textCtrl {
	width: 230px;
	box-sizing: border-box;
}



	#QuickSearch {
		display: inline-block;
		position: relative;
		right: 0;
		top: 0;
		vertical-align: top;
		background-color: transparent;
		padding: 0;
		line-height: normal;
		text-align: left;
	}
	#QuickSearchPlaceholder {
		position: static;
		right: 0;
		top: 0;
		height: auto;
		width: 16px;
		padding: 0 8px;
		box-sizing: content-box;
		text-align: center;
		font-size: 16px;
		text-indent: 0;
		color: inherit;
		background-image: none;

		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;

	}
	#QuickSearchPlaceholder:before
	{
		display: inline-block;
		position: relative;
		vertical-align: top;
	}
	#QuickSearch #commonSearches .arrowWidget
	{
		float: none;
		margin: 0 auto;
	}

	

	#QuickSearch.active
	{
		box-shadow: none;
		padding-bottom: 0;
	}
	#QuickSearch .formPopup
	{
		background: none;
		width: auto;
	}
	#QuickSearch .formPopup .controlsWrapper
	{
		background: none;
		padding: 0;
		margin: 0;
	}
	#QuickSearch .formPopup .primaryControls
	{
		padding: 0;
	}

#QuickSearch .formPopup .secondaryControls {
	box-shadow: 4px 4px 10px -2px rgba(0,0,0,.1);
	padding: 10px;
	border: solid 1px rgb(226, 226, 226);
	border-radius: 2px;
	background: rgb(250, 250, 250);
	color: rgb(44, 44, 44);
	position: absolute;
	top: 46px;
	z-index: 7500;
}

#QuickSearch input.button.primary {
	margin-right: 5px;
}

#QuickSearch a.button.moreOptions {
	float: left;
	margin: 0;
	/* width: 87px; */ 
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
	display: none;
}

#QuickSearch .primaryControls {
	position: relative;
}



	#QuickSearch.show {
		display: block;
		position: absolute;
		-webkit-transform: none; -ms-transform: none;transform: none;
		box-shadow: 4px 4px 10px -2px rgba(0,0,0,.1);
		border: solid 1px rgb(226, 226, 226);
		border-radius: 2px;
		background: rgb(250, 250, 250);
		padding: 0 0 10px;
		margin-top: -10px;
	}

	#QuickSearch.show .primaryControls .uix_icon.uix_icon-search {
		display: none;
	}

	#QuickSearch.show #QuickSearchQuery {
		width: 230px;
	}

	#QuickSearch.show .formPopup .primaryControls {
		padding: 10px 10px 0 10px;
	}

	#QuickSearch.show .formPopup .secondaryControls {
		position: static;
		box-shadow: none;
		background: none;
		border: none;
	}





	@media (max-width: 610px)
	{
		.Responsive #QuickSearch
		{
			display: none;
		}
		.Responsive #QuickSearchPlaceholder
		{
			display: inline-block;
		}
		.Responsive #QuickSearch.show
		{
			display: inline-block;
		}

	}




#QuickSearch .primaryControls .uix_icon {
	position: absolute;
	top: 0;
	line-height: 36px;
	text-align: center;
}



	#QuickSearch .primaryControls .uix_icon
	{
		right: 0;
		font-size: 16px;
color: #FFF;
background-color: rgb(4, 103, 126);
border-radius: 2px;
cursor: pointer;
box-sizing: border-box;
width: 36px;
height: 36px;

		
			border-radius: 0 2px 2px 0;
		
	}

	#QuickSearch:not(.show) #QuickSearchQuery
	{
		
			padding-right: 46px;
		
	}







	#uix_searchMinimal {
		box-sizing: border-box;
		pointer-events: none;
	}

	#uix_searchMinimal.show { pointer-events: auto; }


	
	

		#uix_searchMinimal {
			float: right;
			opacity: 0;
			width: 0;

			/* transition to inactive */
			-webkit-transition-property: opacity, width;
			-webkit-transition-duration: .3s, .3s;
			-webkit-transition-delay: 0s, 0s;

			transition-property: opacity, width;
			transition-duration: .3s, .3s;
			transition-delay: 0s, 0s;
		}

			#uix_searchMinimal.show {
				opacity: 1;
				width: 100%;

				/* transition to active */
				-webkit-transition-delay: .3s, .3s;
				transition-delay: .3s, .3s;
			}

		#QuickSearchPlaceholder {
			opacity: 1;

			/* transition to inactive */
			-webkit-transition-property: width, padding, opacity;
			-webkit-transition-duration: 0s, 0s, .3s;
			-webkit-transition-delay: .3s, .3s, .3s;

			transition-property: width, padding, opacity;
			transition-duration: 0s, 0s, .3s;
			transition-delay: .3s, .3s, .3s;
		}

			.uix_searchMinimalActive #QuickSearchPlaceholder {
				opacity: 0;
				pointer-events: none;
				width: 0;
				padding: 0;

				/* transition to active */
				-webkit-transition-delay: .3s, .3s, 0s;
				transition-delay: .3s, .3s, 0s;
			}

	


	#uix_searchMinimal.show form {
		padding: 0 16px;
		box-sizing: border-box;

		width: 100%;
	}

	.hasFlexbox #uix_searchMinimal form {
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
	}

	#uix_searchMinimal form .uix_icon {
		display: none;
	}

	#uix_searchMinimal.show form .uix_icon {
		display: inline-block;
	}

	#uix_searchMinimalClose {
		padding: 0 16px 0 0;
		cursor: pointer;
		float: left;
		font-size: 16px;
	}

	.hasFlexbox #uix_searchMinimalClose {
		-ms-flex: 0 0 auto;
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;
	}

	#uix_searchMinimalOptions {
		padding: 0 0 0 16px;
		cursor: pointer;
		float: right;
		font-size: 16px;
	}

	.hasFlexbox #uix_searchMinimalOptions {
		-ms-flex: 0 0 auto;
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;

		-ms-flex-order: 1;
		-webkit-order: 1;
		order: 1;
	}

	#uix_searchMinimalInput {
		overflow: hidden
	}

	.hasFlexbox #uix_searchMinimalInput {
		-ms-flex: 1 1 auto;
		-webkit-flex: 1 1 auto;
		flex: 1 1 auto;
	}


	

	#uix_searchMinimal input {
		font-size: 14px;
font-family: 'Open Sans', Helvetica, Arial, sans-serif;
background-color: transparent;
border-style: none;
border-radius: 0;
line-height: inherit;
text-indent: 10px;
text-align: left;
box-shadow: inset 0 -2px rgba(0,0,0,.2);
width: 100%;

	}

	#uix_searchMinimal input:focus {
		outline: none;
		box-shadow: inset 0 -2px rgb(204, 101, 0);

		}

	

	

	.pageStyle_1 [id="navigation"] .uix_minimalSearchWrapper {
		position: relative;
	}






	
	

		#searchBar {
			float: right;
			line-height: 84px;
			*line-height: 88px;
			height: 88px;
		}

		.hasFlexbox #searchBar {
			margin-left: 16px;
			line-height: 36px;
			height: 36px;

			
			-ms-flex: 0 0 auto;
			-webkit-flex: 0 0 auto;
			flex: 0 0 auto;
		}

		#QuickSearch,
		#QuickSearchPlaceholder {
			vertical-align: middle;
		}

		.hasFlexbox #QuickSearch,
		.hasFlexbox #QuickSearchPlaceholder {
			vertical-align: initial;
		}

		#QuickSearch.show {
			top: calc(50% - 18px)
		}

		@media (max-width: 480px) {
			.Responsive #searchBar {
				text-align: center;
				margin: 0 0 16px 0;
			}

			.Responsive #searchBar {
				float: none;
				line-height: 36px;
				height: 36px;
			}

			.Responsive #QuickSearch.show {
				right: calc(50% - 130px);
			}
		}

	
	


	




.pollBlock .question .questionText {color: rgb(44, 44, 44);}
.pollResult .barContainer {border-color: rgb(204, 101, 0); border-radius: 2px;}
.pollResult .bar {background: rgb(204, 101, 0);}

.eventList li,
html .searchResult {border-bottom: 1px solid rgb(226, 226, 226);}






/* clearfix */ .uix_contentFix { zoom: 1; } .uix_contentFix:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }


.uix_mainSidebar {
	-moz-transition: opacity 0.4s;
	-o-transition: opacity 0.4s;
	-webkit-transition: opacity 0.4s;
	transition: opacity 0.4s;
}

.mainContainer .mainContent > *:first-child,
.mainContainer_noSidebar > *:first-child
{
	margin-top: 0;
}

.mainContainer .mainContent > *:last-child,
.mainContainer_noSidebar > *:last-child
{
	margin-bottom: 0;
}


 

		#content .pageContent > *:first-child
		{
			margin-top: 0;
		}
		#content .pageContent > *:last-child
		{
			margin-bottom: 0;
		}



#InlineModOverlay {
	border-color: rgb(226, 226, 226);
	box-shadow: 2px 4px 15px -5px rgba(0,0,0,.2);
}

.xenPreviewTooltip .previewContent {
	background: none;
}

.xenOverlay table.dataTable {background: #FFFFFF; margin: 0;}

.xenOverlay .xenForm {max-width: none;}

.xenOverlay.lightBox #LbUpper, .xenOverlay.lightBox #LbLower {
background-color: rgba(0,0,0,.75) !important;
}
.xenOverlay a.close
{
	right: 8px;
	top: 8px;
	width: 24px;
	height: 24px;
	color: inherit;
	font-size: 18px;
}
.xenOverlay a.close:before
{
	display: inline-block;
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: inherit;
	content: "\f00d";
}
a.fbLogin span {color: #FFF;}

.xenOverlay h2.heading span.prefix.prefixPrimary {
	color: rgb(4, 103, 126);
	padding: 0 4px;
	border-radius: 2px;
}

@media (max-width: 610px)
{
	.Responsive .xenOverlay .formOverlay,
	.Responsive .xenOverlay .section,
	.Responsive .xenOverlay .sectionMain
	{
		border-radius: 4px;
		border-width: 1px;
	}
}





#userBar .navTabs {
	background-color: rgb(204, 101, 0);
border-style: none;
border-radius: 4px;

	height: 40px;
}

#userBar .navTabs .navLink,
#userBar .navTabs .SplitCtrl {
	color: #FFFFFF;
padding-right: 10px;
padding-left: 10px;
position: relative ;
line-height: 40px;
text-transform: none;
/* alert bubbles */
height: 40px;

}

#userBar .navTabs .navTab.selected .navLink {
	color: #FFF;
background: url(rgba.php?r=0&g=0&b=0&a=51); background: rgba(0,0,0,0.2); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#33000000,endColorstr=#33000000);
border-width: 0;

}


	

	#userBar .navTabs .navTab:hover,
	#userBar .navTabs .navTab.PopupClosed:hover {
		color: #FFF;
background: url(rgba.php?r=0&g=0&b=0&a=51); background: rgba(0, 0, 0, .2); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#33000000,endColorstr=#33000000);

	}

	#userBar .navTabs .navTab:hover .navLink,
	#userBar .navTabs .navTab.PopupClosed:hover .navLink,
	#userBar .navTabs .navTab.PopupClosed:hover .SplitCtrl { color: inherit; }


	

	#userBar .navTabs .navTab.Popup.PopupOpen,
	#userBar .navTabs .navTab.selected.PopupOpen .navLink {
		color: #FFF;
background-color: rgb(4, 103, 126);
;
	}

	#userBar .navTabs .navTab.Popup.PopupOpen .navLink,
	#userBar .navTabs .navTab.Popup.PopupOpen .SplitCtrl { color: inherit; }


	

	#userBar .navTabs .navTab.selected .navLink,
	#userBar .navTabs .navTab.PopupClosed.selected .navLink,
	#userBar .navTabs .navTab.PopupClosed.selected .SplitCtrl { color: #FFF; }





#userBar .navTabs .navLink .itemCount
{
	color: #FFF;
background: url(rgba.php?r=0&g=0&b=0&a=51); background: rgba(0,0,0,.2); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#33000000,endColorstr=#33000000);
;
}


	#userBar .navTabs .navLink
	{
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}
	#userBar .navTabs .navLink .itemCount
	{
		margin-left: 6px;
display: inline-block;
vertical-align: top;
position: relative;
top: 50%;
-webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);transform: translateY(-50%);

	}
	#userBar .navTabs .navLink .itemCount .arrow {display: none;}



#userBar .navTabs .navLink .itemCount.alert
{
	color: #FFF;
background-color: #e74c3c;

}
#userBar .navTabs .navLink .itemCount .arrow
{
	border-top-color:  rgb(0,0,0); border-top-color:  rgba(0,0,0, .2); _border-top-color:  rgb(0,0,0);
}
#userBar .navTabs .navLink .itemCount.alert .arrow
{
	border-top-color: #e74c3c;
}





	.moderatorTabs .navTab.admin.Popup
	{
		display: none;
	}

	@media (max-width: 1000px)
	{
		.Responsive .moderatorTabs .navTab
		{
			display: none;
		}
		.Responsive .moderatorTabs .navTab.admin.Popup
		{
			display: inline-block;
		}
	}



.uix_userbarRenderFix {
	display: inherit;
}




.uix_mainSidebar.sticky .inner_wrapper {
	-moz-transition: top 0.2s;
	-o-transition: top 0.2s;
	-webkit-transition: top 0.2s;
	transition: top 0.2s;
}




#navigation,
#userBar {
	position: relative;
}

#navigation.withSearch,
#userBar.withSearch {
	z-index: 52;
}


#userBar .moderatorTabs > a {
	visibility: hidden;
}





	.sticky_wrapper {
		position: relative;

		-webkit-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;

		
	}

	.activeSticky .sticky_wrapper {
		position: fixed;
		left: 0;
		right: 0;
	}

	

	#navigation.activeSticky,
	#userBar.activeSticky,
	.activeSticky .sticky_wrapper { z-index: 250; }

	

	#navigation.activeSticky.withSearch,
	#userBar.activeSticky.withSearch,
	.activeSticky.withSearch .sticky_wrapper { z-index: 260; }

		#navigation.activeSticky.lastSticky,
		#userBar.activeSticky.lastSticky,
		.activeSticky.lastSticky .sticky_wrapper { z-index: 240; }

	/* style last sticky element with a box-shadow body.scrollNotTouchingTop*/
	.activeSticky.lastSticky .pageContent {
		box-shadow: 0 2px rgba(0,0,0,.1);
	}

	.activeSticky .navTabs .navLink .itemCount
	{
		margin-left: 6px;
display: inline-block;
vertical-align: top;
position: relative;
top: 50%;
-webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);transform: translateY(-50%);

	}
	.activeSticky .navTabs .navLink .itemCount .arrow
	{
		display: none;
	}

	

	#navigation.activeSticky .navTabs .navLink,
	#navigation.activeSticky .navTabs .SplitCtrl {
		height: 48px;
		line-height: 48px;
	}

	#navigation.activeSticky .navTabs {
		height: 48px;

		padding-top: ;
padding-bottom: ;
border-top-width: ;
border-bottom-width: ;
border-radius: 0;

	}

	


	.activeSticky .navTabs .navTab.selected .tabLinks {
		padding-top: ;
padding-bottom: ;
border-top-width: 0;
border-bottom-width: ;


		height: 40px;
		line-height: 40px;
		top: 48px;
		border-radius: 0;
	}

	.activeSticky .navTabs .navTab.selected .tabLinks li { max-height: 40px; }


	
		.activeSticky.uix_hideSubElement .navTabs .navTab.selected .tabLinks { display: none !important; }
	

	#navigation.activeSticky .pageContent {
		
		
			
				height: 48px;
			
		
	}

	

	#userBar.activeSticky .navTabs .navLink,
	#userBar.activeSticky .navTabs .SplitCtrl {
		height: 40px;
		line-height: 40px;
	}

	#userBar.activeSticky .navTabs {
		height: 40px;

		padding-top: ;
padding-bottom: ;
border-top-width: ;
border-bottom-width: ;
border-radius: 0;

	}









	
		@media (max-width: 480px) {
			.navTabs .navTab.account .avatar {margin-right: 0;}
			.navTabs .navTab.account .navLink .accountUsername {display: none !important;}
		}
	



.navTabs .navTab.account .avatar {
	float: left;
	position: relative;
	top: 50%;
	-webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);transform: translateY(-50%);
}

.navTabs .navTab.account .avatar img {
	display: block;
	width: 20px;
	height: 20px;
	border: none;
	box-shadow: none;
}

.navTabs .navTab.account .navLink .accountUsername {
	display: inline-block;
	vertical-align: top;
	text-transform: none;
}

.navTabs .navTab.account .navLink {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
}

.actionFilterRow .filtersHeading {color: rgb(44, 44, 44);}

.PageNav .scrollable {width: 132px;}




.PageNav .scrollable { height: 26px; }



.PageNav a {
	max-height: 26px;
	line-height: 24px;
}

.PageNav a.text {
	padding-top: ;
	padding-bottom: ;
}

a.PageNavPrev,
a.PageNavNext {
	padding: 0;
	line-height: 26px;
}

.PageNav .pageNavHeader,
.PageNav a,
.PageNav .scrollable
{
	margin-bottom: 3px;
}
.textWithCount.subHeading .text
{
	color: rgb(4, 103, 126);
}
.button.spinBoxButton
{
	margin-left: 5px;
	min-width: 36px;
}

.textCtrlWrap
{
	height: auto;
	text-indent: 0;
}
.textCtrl .prefix,
.textCtrl .Popup
{
	height: 36px;
	line-height: 36px;
}
.textCtrlWrap input.textCtrl,
.textCtrlWrap input.textCtrl:focus,
.textCtrlWrap input.textCtrl.Focus {box-shadow: none !important;}

.xenForm fieldset + .ctrlUnit,
.xenForm .formGroup + .ctrlUnit,
.xenForm .submitUnit
{
	border-top: none;
}
.xenForm fieldset,
.xenForm .formGroup,
.dataTable tr.dataRow td
{
	border-color: rgb(226, 226, 226);
}
.larger.textHeading,
.xenForm .sectionHeader,
.larger.textHeading a,
.xenForm .sectionHeader a {color: rgb(44, 44, 44); }

.formPopup .controlsWrapper,
.thread_view .threadAlerts {background-image: none;}
.thread_view .threadAlerts {
	border: 1px solid rgb(221, 229, 234);
	border-radius: 2px;
	background-image: none;
	background-color: rgb(236, 241, 245);
}

.thread_view .threadAlerts dt {color: rgb(70, 102, 124);}



	.footerLegal .uix_socialMediaLinks {float: right;}

	.uix_socialMediaLinks .uix_socialLink {
		display: inline-block;
		vertical-align: top;
	}

	.uix_socialLink a {
		font-size: 24px;
color: #FFF;
background-image: url('styles/uix/uix/social_sprite.png');
background-repeat: no-repeat;
background-position: 0 0;
margin-right: 4px;
border-radius: 2px;
display: block;
line-height: 40px;
text-align: center;
box-shadow: inset 0 -2px 0 rgba(0,0,0,.2);
-webkit-transition: text-shadow 0.1s ease-out;
transition: text-shadow 0.1s ease-out;
width: 40px;
height: 40px;

	}

	.uix_socialMediaLinks .uix_socialLink:last-child  a {margin-right: 0;}

	.uix_socialLink a:hover {
		color: #FFFFFF;
text-decoration: none;
text-shadow: 0 -1px 0 rgba(0,0,0,.2);


	}

	.uix_socialLink--facebook a {
		background: #3b5998 none 0 -32px;

	}

	.uix_socialLink--twitter a {
		background: #44ccf6 none -48px -32px;

	}

	.uix_socialLink--youtube a {
		background: #ce332d none -96px -32px;

	}

	.uix_socialLink--dribbble a {
		background: #ea4c89 none -192px -32px;

	}

	.uix_socialLink--vimeo a {
		background: #86c9ef none -336px -32px;

	}

	.uix_socialLink--deviantart a {
		background: #768c82 none -240px -32px;

	}

	.uix_socialLink--googleplus a {
		background: #d13f2d none -384px -32px;

	}

	.uix_socialLink--linkedin a {
		background: #0275b6 none -288px -32px;

	}

	.uix_socialLink--pinterest a {
		background: #cb2027 none -432px -32px;

	}

	.uix_socialLink--instagram a {
		background: #604335 none -144px -32px;

	}

	.uix_socialLink--steam a {
		background: rgb(112, 108, 107) none;

	}

	.uix_socialLink--twitch a {
		background: #6441A5 none;

	}

	.uix_socialLink--vine a {
		background: #00BF8F none;

	}

	.uix_socialLink--tumblr a {
		background: #36465D none;

	}

	.uix_socialLink--git a {
		background: #4183C4 none;

	}

	.uix_socialLink--reddit a {
		background: #FF4500 none;

	}

	.uix_socialLink--flickr a {
		background: rgb(0, 198, 10) none;

	}

	.uix_socialLink--contact a {
		background: rgb(58, 132, 90) none;

	}

	.uix_socialLink--rss a {
		background: #FF6600 none;

	}


#logoBlock .pageContent {
	border-radius: 4px;

}



.hasFlexbox #logoBlock .pageContent {
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	-ms-flex-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;

	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}




.hasFlexbox #logoBlock .pageContent:after { display: none; }


.hasFlexbox #logoBlock .pageContent span.helper { display: none; }


#logo a { text-decoration: none; }

#logo_small a { text-decoration: none; }


	#logo img {
		max-width: 150;
		 width: 100%;
	}





/* Styling text based logo */

.uix_logoText {
	font-weight: bold;
font-size: 30px;
color: rgb(4, 103, 126);
text-decoration: none;


	white-space: nowrap;
}



.uix_logoText .uix_icon { margin-right: .5em; }

.uix_navigationLogoText {
	font-weight: bold;
font-size: 14px;
color: #FFF;

}



.uix_navigationLogoText .uix_icon { margin-right: .5em; }








	@media (max-width: 480px)
	{
		.Responsive.hasFlexbox #logoBlock .pageContent {
			-ms-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			flex-wrap: wrap;
		}

		.Responsive.hasFlexbox #logoBlock .pageContent > * {
			-ms-flex: 0 1 100%;
			-webkit-flex: 0 1 100%;
			flex: 0 1 100%;
		}

		.Responsive #logo {
			float: none;
			text-align: center;
		}

		.Responsive .uix_slogan {
			display: none;
		}
	}









.avatarScaler img,
.xenOverlay .formOverlay .avatar img,
.xenOverlay .formOverlay .avatar .img,
.xenOverlay .formOverlay .avatarCropper
{
	background-color: rgb(4, 103, 126);
}
body .AvatarEditor .avatarOption
{
	background: rgb(248,251,253);
	border-color: rgb(236, 241, 245);
}

.xenOverlay .section.messageSimpleList .messageContent {padding-right: 42px;}



	.avatar img,
	.avatar .img,
	.avatarCropper
	{
			
		border-radius: 100%;
	
	}

	.xenOverlay.memberCard .avatarCropper,
	.memberCard .avatarCropper .avatar img,
	.memberCard .avatarCropper .avatar
	{
		border-radius: 0;
		-webkit-clip-path: none;
		clip-path: none;
	}


.conversation_view .messageList
{
	border: none;
	padding-right: 0;
}

.conversation_view .message:first-child,
.conversation_view .quickReply
{
	border: 1px solid rgb(226, 226, 226);
border-radius: 4px;
}

.breadBoxTop,
.breadBoxBottom {
	margin: 16px 0;
	margin: 16px 0;
}

.breadcrumb .jumpMenuTrigger {
	line-height: 38px;
}

.breadBoxTop a.callToAction {
	height: auto;
	line-height: inherit;
}


/*** UIX -- BREADCRUMB ICONS ***/

.breadcrumb .uix_icon { vertical-align: top; }

.breadcrumb .uix_icon-home { font-size: 16px; }


/*** UIX -- BREADCRUMB ITEMS ***/

.breadcrumb .crust {
	line-height: 38px;
}

.breadcrumb .crust a.crumb,
.breadcrumb .crust .arrow { line-height: inherit; }

.breadcrumb .crust .arrow,
.breadcrumb .crust .arrow span {
	border-top-width: 20px;
	border-bottom-width: 20px;
}

.breadcrumb .crust .arrow span { top: -20px; }




/*** UIX -- BREADCRUMB TOGGLE LIST ***/

.hasLeftSidebar .uix_breadCrumb_toggleList {
	float: left;
}

.hasRightSidebar .uix_breadCrumb_toggleList {
	float: right;
}

.uix_breadCrumb_toggleList .toggleList_item {
	height: 40px;
	line-height: 38px;

	box-sizing: border-box;

	border: 1px solid rgb(226, 226, 226);
border-radius: 4px;

	background-color: #FFFFFF;
}

.hasLeftSidebar .uix_breadCrumb_toggleList .toggleList_item {
	float: right;
	margin-right: 8px;
}

.hasRightSidebar .uix_breadCrumb_toggleList .toggleList_item {
	float: left;
	margin-left: 8px;
}

.toggleList_item a {
	display: block;

	padding: 0 8px;
	color: #aaa;
	text-decoration: none;
}

.toggleList_item a:hover { color: rgb(83, 83, 83); }

.toggleList_item .uix_icon {
	font-size: 16px;
	vertical-align: top;
}

.breadcrumbMeta {
	display: none;
	position: absolute;
}

.subForumsPopup .PopupOpen {color: #FFF !important;}
.subForumsPopup .PopupOpen .dt {color: #FFF;}






#uix_jumpToFixed
{
	font-size: 24px;
color: #FFF;
background-color: rgb(204, 101, 0);
padding: 8px;
margin: 16px;
border-radius: 2px;
position: fixed;
box-shadow: inset 0 -2px 0 rgba(0,0,0,.2);
z-index: 1;
transition: opacity 0.4s;
opacity: 0;
display: block;


	padding: 0;

	bottom: 0;
	right: 0;
	left: auto;
}

#uix_jumpToFixed a {
	color: inherit;
	
		display: block;
	
	padding: 8px;
	}
	
		#uix_jumpToFixed a:first-child {padding-bottom: 4px;}
		#uix_jumpToFixed a:last-child {padding-top: 4px;}
	

#uix_jumpToFixed:hover {opacity: 1;}

.footerLinks a.globalFeed {
	font-size: 16px;
background-color: transparent;
background-repeat: no-repeat;
background-position: 0 -448px;
margin: 1px 4px;
display: block;
white-space: nowrap;
overflow: hidden;
opacity: 0.25;
text-align: center;
width: 16px;

	opacity: 1;
	vertical-align: middle;
	display: inline-block;

}

.footerLinks .topLink .uix_icon { vertical-align: top; }

#copyright {text-align: left; color: inherit;}

/* clearfix */ .footer .pageContent { zoom: 1; } .footer .pageContent:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

#legal {clear: right;}
.footerLegal .pageContent {
	clear:both;
	font-size: 12px;
padding-top: 16px;
padding-bottom: 16px;
margin-top: 16px;
margin-bottom: 16px;
border-radius: 4px;

}

.debugInfo {float: left; clear: both;}

#waindigoCopyrightNotice {display: none;}

#waindigoCopyrightNotice .pageContent {margin: 0; padding: 0;}

.footer .choosers dd {margin-right: 8px;}
.footer .choosers dd:last-child {margin-right: 0;}

.footer .choosers a:after
{
	display: inline-block;
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	content: "\f0d7";
	font-size: 12px;
	margin-left: 4px;
}

.footer .choosers.chooser_widthToggle a:after {display: none;}

.footer .choosers a {
	text-decoration: none;
background-color: #FFFFFF;
padding: 6px 10px;
border: 1px solid rgb(226, 226, 226);
border-radius: 2px;
display: inline-block;
line-height: normal;
font-weight: normal;

}
.footer .choosers a:hover {
	color: rgb(4, 103, 126);
border-color: rgb(226, 226, 226);

}

@media (max-width: 800px)
{
	.Responsive .footerLegal .uix_socialMediaLinks {float: none; margin: 0; text-align: center;}
	.Responsive #copyright, .Responsive #legal, .Responsive .debugInfo {float: none; display: block;}
	.Responsive #legal li {display: inline-block;float:none}
	.Responsive #copyright {margin: 8px 0;display:block;text-align:center;}
}

	
	@media (max-width: 480px)
	{
	
		.Responsive .footer .pageContent {text-align: center;height: auto;}
		.Responsive .footer .choosers {display: inline-block; padding: 0 4px; float: none; vertical-align: middle; text-align: center;}
		.Responsive .footer .choosers dd {margin: 0 4px; text-align: center;}
		.Responsive .footerLinks {float: none; padding: 0;}
		.Responsive .footerLinks li {display: inline-block; float: none !important;}
	
	}
	


.profilePage .mast .sectionFooter { margin-top: 8px; }

.profilePage .mast { border-right: 0; }

.profilePage .primaryUserBlock {
	margin-top: 0;
	border-top: 0;
}

.profilePage .mast .section.infoBlock .primaryContent,
.profilePage .mast .section.infoBlock .secondaryContent {
	border-radius: 4px;
}

@media (max-width: 800px) {
	.messageSimple .uix_postbit_privateControlsMenu__hide {display: none;}
}

@media (min-width: 801px) {
	.messageSimple .publicControls .item.uix_postbit_privateControlsMenu {display: none;}
}


.messageSimple .messageMeta .item {vertical-align: middle;}
.messageSimple .messageMeta .item.InlineModCheck {margin: 0; top: -2px;}

.PanelScroller .navContainer {margin-top: -9px;}

.discussionList .discussionListItem.sticky .posterAvatar,
.discussionList .discussionListItem.sticky .stats,
.discussionList .discussionListItem.moderated .listBlock,
.discussionListItem.InlineModChecked .posterAvatar,
.discussionListItem.InlineModChecked .main,
.discussionListItem.InlineModChecked .stats,
.discussionListItem.InlineModChecked .lastPost,
.discussionListItem.moderated.InlineModChecked,
.discussionListItem.deleted .posterAvatar   {background-color: transparent;}

.discussionList .discussionListItem.sticky.InlineModChecked,
.discussionList .discussionListItem.InlineModChecked,
.discussionList .discussionListItem.moderated.InlineModChecked,
.discussionList .discussionListItem.deleted.InlineModChecked {background-color: rgb(204, 241, 252);}

.discussionList.sectionMain {
	;
}

.discussionListItem {
	background-color: rgb(250, 250, 250);
border-bottom: 1px solid rgb(240, 240, 240);
box-sizing: border-box;


	padding: 0;
}

	.discussionListItem:nth-child(even) {
		background-color: #FFFFFF;

	}

	.discussionList .discussionListItem.sticky {
		background-color: #FFFFFF;

	}

	.discussionList .discussionListItem.moderated {
		color: rgb(67, 122, 55);
background-color: rgb(226, 247, 222);
border-color: rgb(194, 223, 188);

	}

	.discussionList .discussionListItem.deleted {
		color: rgb(238, 99, 99);
background-color: rgb(253, 237, 237);
border-color: #F3DDDD;

	}


.discussionListItem .title a {color: inherit;}

	.discussionListItems .unread.moderated .title a,
	.discussionListItems .unread.moderated  .lastPostInfo .username {
		color: rgb(67, 122, 55);
	}

	.discussionListItem.deleted .title {
		color: rgb(238, 99, 99);
	}

.afterDiscussionListHandle {
	margin-top:36px;
}



.threadListSeparator {
	font-size: 12px;
color: rgb(4, 103, 126);
text-decoration: none;
background-color: rgb(248,251,253);
padding: 10px 16px;
margin: 0 auto;
border-width: 0;
border-color: rgb(221, 229, 234);
border-top-width: 1px;
border-top-style: solid;
border-bottom-width: 1px;
border-bottom-style: solid;
font-weight: 600;


	font-size: 11px;
color: rgb(83, 83, 83);
background-color: rgb(240, 240, 240);
border-color: rgb(226, 226, 226);
border-top-style: none;
text-transform: uppercase;


	position: relative;
}

.threadListSeparator .uix_icon {
	font-size: 16px;
	line-height: 11px;
	cursor: pointer;
}












.uix_mainSidebar { width: 250px; }

.hasLeftSidebar .uix_mainSidebar { float: left; }

.hasRightSidebar .uix_mainSidebar { float: right; }

/* clearfix */ .sidebar .visitorPanel .secondaryContent { zoom: 1; } .sidebar .visitorPanel .secondaryContent:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

.sidebar .featuredNotice {
	box-shadow: none;
	border-color: rgb(221, 229, 234);
	background: rgb(248,251,253);
	display: inline-block;
	color: rgb(70, 102, 124);
}

.sidebar .visitorPanel {
	overflow: visible;
}

.hasFlexbox .visitorPanel .secondaryContent {
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	-ms-flex-wrap: wrap;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
}

.hasFlexbox .visitorPanel .visitorText {
	-ms-flex: 1 1 0%;
	-webkit-flex: 1 1 0%;
	flex: 1 1 0%;
}

.no-flexbox .visitorPanel .visitorText {
	overflow: hidden;
	_overflow: visible;
	zoom: 1;
}



.sidebar .section .secondaryContent {
	border: 1px solid rgb(226, 226, 226);
border-radius: 4px;

}
.sidebar > .section:last-child
{
	margin-bottom: 0;
}

.sidebar .tabs {
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-ms-flex-wrap: wrap;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	margin-top: 0;
}
.sidebar .tabs > li {
	-ms-flex: 1 0 auto;
	-webkit-flex: 1 0 auto;
	flex: 1 0 auto;
}
.sidebar .tabs > li a {
	display: block;
	text-align: center;
	padding-left: 8px;
	padding-right: 8px;
}


.hasLeftSidebar .mainContainer {
	float: right;
	margin-left: -266px;
	margin-right: 0;
}

.hasLeftSidebar .mainContent {
	margin-left: 266px;
	margin-right: 0;
}

.hasLeftSidebar .sidebar {
	float: left;
}

.hasRightSidebar .mainContainer {
	margin-right: -266px;
}

.hasRightSidebar .mainContent {
	margin-right: 266px;
}




	.mainContainer { position: relative; }

	.uix_mainSidebar { position: relative; }

	.sidebarToggle__phrase {
		display: none;
		font-size: 12px;
	}

	.is-sidebarOpen .sidebarToggle__phrase--close { display: inline; }

	.is-sidebarCollapsed .sidebarToggle__phrase--open { display: inline; }




	.uix_mainSidebar .inner_wrapper
	{
		position: relative;
		-webkit-transform: translateZ(0);
		-webkit-transform: translateZ(0); -ms-transform: translateZ(0);transform: translateZ(0);
	}
	.uix_mainSidebar.sticky .inner_wrapper
	{
		position:fixed;
		-webkit-backface-visibility: hidden;
	}




	.sidebar .section .primaryContent h3:before,
	.sidebar .section .secondaryContent h3:before,
	.profilePage .mast .section.infoBlock .secondaryContent h3:before {
		display: inline-block;
		font-family: 'FontAwesome';
		font-style: normal;
	 	font-weight: normal;
	  	-webkit-font-smoothing: antialiased;
	  	-moz-osx-font-smoothing: grayscale;

		font-size: 14px;
margin-right: 6px;
content: '\f152';
text-align: center;
/* fa-caret-square-o-right */
width: 1.28571429em;

	}

	.sidebar .section.membersOnline h3:before,
	.sidebar .section.userList h3:before {content: "\f0c0";}
	.sidebar .section.sharePage h3:before {content: "\f14d";}
	.sidebar .section .statsList h3:before {content: '\f080';}
	.sidebar .section.staffOnline h3:before {content: "\f0b1";}
	.sidebar .section.profilePostList h3:before {content: "\f007";}


	.sidebar .section.loginForm h3:before {content: "\f023";}

	
	.sidebar .section .secondaryContent.avatarHeap h3:before {content: "\f0b1";}
	.sidebar .section .secondaryContent.findMember h3:before {content: "\f002";}

	.section .discussionListFilters h3:before {content: none !important;}


@media (min-width: 801px) 
{
	.sidebar .section:first-child
	{
		margin-top: 0;
	}
}

@media (max-width: 800px) 
{
	.Responsive.is-sidebarOpen .sidebarToggle { display: none; }

	.Responsive .uix_mainSidebar { width: auto; }

	.Responsive .uix_mainSidebar { float: none; }

	.Responsive .sidebar { float: none;}

	.Responsive .mainContainer { float: none; }

	.Responsive.hasLeftSidebar .mainContainer { margin-left: 0; }

	.Responsive.hasRightSidebar .mainContainer { margin-right: 0; }

	.Responsive.hasLeftSidebar .mainContent { margin-left: 0; }

	.Responsive.hasRightSidebar .mainContent { margin-right: 0; }
	
	
	
	.hasFlexbox.Responsive .sidebar {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		    flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		margin-right: -10px;
		margin-left: -10px;
		margin-top: 6px;
	}

	.hasFlexbox .sidebar > .section,
	.hasFlexbox .sidebar > .widget {
		-webkit-box-flex: 1;
		    -ms-flex-positive: 1;
		        flex-grow: 1;
		-ms-flex-preferred-size: 280px;
		    flex-basis: 280px;
		margin: 10px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		min-width: 0;
	}
	
	.hasFlexbox .sidebar > .widget-tabs {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		    -ms-flex-direction: column;
		        flex-direction: column;
	}
	
	.hasFlexbox .sidebar > .section.widget-tabs .primaryContent {width: 100%;}
	
	.hasFlexbox .sidebar .section > .secondaryContent,
	.hasFlexbox .sidebar > .widget > .secondaryContent,
	.hasFlexbox .sidebar > .widget > .section {
		-webkit-box-flex: 1;
		    -ms-flex-positive: 1;
		        flex-grow: 1;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		    -ms-flex-direction: column;
		        flex-direction: column;
		float: none;
		width: auto;
		min-width: 0;
	}
	
	.hasFlexbox .sidebar > .widget > .section {
		width: 100%; 
		display: flex;
		margin: 0;
	}
	
	
	
	
	
}

#content.help_bb_codes .sectionMain .primaryContent,
#content.help_trophies .sectionMain .primaryContent {background-color: transparent;}

#loginBar {
	position: relative;
	z-index: 9999;
}

#loginBar #loginBarHandle {text-align: right;}

#loginBar #loginBarHandle a {display: block;}

#loginBar .pageWidth {position: relative;}

.navTabs .navTab.login {display: list-item !important;}



#loginBar .xenForm {
	max-width: 1170px;
}

#loginBar .pageContent {
	padding: 0 16px;
}



.Responsive .xenForm.xenForm--uixLoginForm .ctrlUnit {
	padding-left: 0;
	padding-right: 0;
}

.xenForm.xenForm--uixLoginForm .ctrlUnit > dd {
	padding-left: 0;
	padding-right: 0;
}

.xenForm.xenForm--uixLoginForm .ctrlUnit > dt label {
	margin-left: 0;
}



.formOverlay#pageLogin {
	max-width: 400px;
	margin: 0 auto;
}

.formOverlay#pageLogin h2.textHeading {
	display: none;
}

.formOverlay#pageLogin .textCtrl.disabled {
	display: none;
}

.formOverlay#pageLogin .ctrlUnit {
	overflow: visible;
}

.formOverlay#pageLogin .ctrlUnit dt {
	margin-bottom: 8px;
	float: none;
	width: auto;
	text-align: left;
	height: auto;
}

.formOverlay#pageLogin .ctrlUnit dt > label {margin-left: 0;}

.formOverlay#pageLogin .ctrlUnit dt dfn {
	display: inline;
	margin: 0;
}

.formOverlay#pageLogin .ctrlUnit > dd {
	float: none;
	width: auto;
	padding-left: 0;
	padding-right: 0;
	padding-top: 0;
}

@media (max-width: 480px) {
	.Responsive .formOverlay#pageLogin .ctrlUnit > dd {
		padding-left: 0;
	}
}

.formOverlay#pageLogin .ctrlUnit dd .bbCodeEditorContainer textarea {
	margin-left: 0;
	min-height: 200px;
}

.xenForm.xenForm--uixLoginForm .ctrlUnit.submitUnit > dd { width: auto;}

.formOverlay#pageLogin .ctrlUnit > dd > ul,
.formOverlay#pageLogin .ctrlUnit > dd > input,
.formOverlay#pageLogin > dd > select,
.formOverlay#pageLogin > dd > textarea {
	margin-top: 0;
}

.formOverlay#pageLogin .ctrlUnit.submitUnit {
	margin-left: -5px;
	margin-right: -5px;
}

.formOverlay#pageLogin .ctrlUnit.submitUnit dd > input,
.formOverlay#pageLogin .ctrlUnit.submitUnit dd > label {
	margin-left: 5px;
	margin-right: 5px;
}

#XenForo a.twitterLogin span,
#XenForo a.fbLogin span,
#XenForo .googleLogin span {
	width: auto;
	height: 36px;
	margin: 0;
	padding: 0 8px;
	border: none;
	line-height: 36px;

	background: none;
	text-shadow: none;
	color: #FFF;
	text-align: center;

	border-radius: 2px;
	text-overflow: ellipsis;
}



#XenForo a.twitterLogin span:before,
#XenForo a.fbLogin span:before,
#XenForo .googleLogin span:before {
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-right: 8px;
}

#XenForo a.twitterLogin span:before {content: "\f099";}
#XenForo a.fbLogin span:before {content: "\f09a";}
#XenForo .googleLogin span:before {content: "\f0d5";}

#XenForo a.twitterLogin span:hover,
#XenForo a.fbLogin span:hover,
#XenForo .googleLogin span:hover {background: url(rgba.php?r=0&g=0&b=0&a=25); background: rgba(0,0,0,.1); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#19000000,endColorstr=#19000000);}

#XenForo a.twitterLogin,
#XenForo a.fbLogin,
#XenForo .googleLogin
{
	display: block;
	background: none;
	margin: 0;
	padding: 0;
	border: none;
	text-shadow: none;
	color: #FFF;
	width: 100%;
	height: auto;
	font-size: 14px;
	border-radius: 2px;
}

#XenForo a.twitterLogin, #loginBar a.twitterLogin {background: #77CDF0;}
#XenForo a.fbLogin, #loginBar a.fbLogin {background: #537CBE;}
#XenForo .googleLogin, #loginBar .googleLogin {background: #E9654C;}











	.navTab.audentio_postPagination { position: relative; z-index: 50; }

	.audentio_postPagination a { color: inherit;}

	.audentio_postPagination .navLink:hover a, .audentio_postPagination a:hover { color: #FFF; text-decoration: inherit; }

	.audentio_postPagination .progress-container {
		width: 100%;
		height: 2px;
		margin-top: -8px;
		border-radius: 2px;
		overflow: hidden;
		background: url(rgba.php?r=0&g=0&b=0&a=76); background: rgba(0, 0, 0, 0.3); _filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#4C000000,endColorstr=#4C000000);
		border:  rgb(0,0,0) solid 1px; border:  rgba(0,0,0, .1) solid 1px; _border:  rgb(0,0,0) solid 1px;
	}

	.audentio_postPagination .PopupControl.PopupOpen,
	.audentio_postPagination .PopupControl:hover {background: none;}

	.audentio_postPagination .progress-bar {
		height: 2px;

		-moz-transition: width 0.3s ease;
		-o-transition: width 0.3s ease;
		-webkit-transition: width 0.3s ease;
		transition: width 0.3s ease;

		background-color: rgb(204, 101, 0);
	}

	
	.audentio_postPagination .uix_paginationMenu {
		display: inline-block;
	}

	#navigation .audentio_postPagination .uix_paginationMenu {
		height: 48px;
	}

	#navigation.activeSticky .audentio_postPagination .uix_paginationMenu {
		height: 48px;
	}

	#userBar .audentio_postPagination .uix_paginationMenu {
		height: 40px;
	}

	#userBar.activeSticky .audentio_postPagination .uix_paginationMenu {
		height: 40px;
	}


	#audentio_postPaginationDropdown {
		border-top-color: rgb(226, 226, 226);
		border-top-width: 1px;
		
	}


	#audentio_postPaginationInput {
		margin: auto;
		height: 28px;
		font-size: 16px;
		text-align: center;
		width: 100%;
		max-width: 180px;
		padding-left: 0;
		padding-right: 0;
	}





.FloatingContainer {
	margin-right: 16px;
margin-left: 16px;
width: 250px;


	right: 0;
	left: auto;
}

.FloatingContainer .floatingItem {
	font-size: 11px;
margin-bottom: 16px;
border-width: 1px;
border-style: solid;
border-radius: 2px;
font-weight: 600;
box-shadow: 4px 4px 10px -2px rgba(0,0,0,.1);

}

.FloatingContainer .floatingItem.primary {
	color: rgb(83, 83, 83);
background-color: rgb(250, 250, 250);
border-color: rgb(226, 226, 226);

}

.FloatingContainer .floatingItem.secondary {
	color: rgb(70, 102, 124);
background-color: rgb(248,251,253);
border-color: rgb(221, 229, 234);

}

.FloatingContainer .floatingItem.dark {
	color: #FFFFFF;
background-color: rgb(83, 83, 83);
border-style: none;

}

.FloatingContainer .floatingItem.light {
	color: rgb(83, 83, 83);
background-color: #FFFFFF;
border-style: none;
box-shadow: 2px 2px 10px -2px rgba(0,0,0,.3);

}



a.signupButton {
	display: inline-block;
line-height: 42px;
cursor: pointer;
height: 42px;

}

a.signupButton:hover { text-decoration: none; }

	a.signupButton span {
		font-size: 13px;
font-family: 'Open Sans', Helvetica, Arial, sans-serif;
color: #FFF;
background-color: rgb(204, 101, 0);
padding: 0 16px;
border-radius: 4px;
display: block;
text-align: center;
font-weight: 600;

	}

	a.signupButton:hover span {
		background-color: rgb(74, 78, 81);

	}

	a.signupButton:active span {
		background-color: rgb(43, 43, 43);

	}



#SignupButton { display: block; }

#SignupButton:hover .inner { text-decoration: none; }


.nodeList .categoryForumNodeInfo,
.nodeList .forumNodeInfo,
.nodeList .pageNodeInfo,
.nodeList .linkNodeInfo {
	background-color: #FFFFFF;
border-color: rgb(226, 226, 226);
border-radius: 4px;


	border-radius: 0;
}


/*** UIX -- NODE ICONS ***/

.node .nodeIcon.hasGlyph {
	text-align: center;
	background-color: transparent;
	background: none;
	font-size: 26px;
color: #aaa;
background-image: none !important;
background-color: transparent !important;

}

.node .unread .nodeIcon.hasGlyph {
	color: rgb(4, 103, 126);

}

.hasFlexbox .nodeList .categoryStrip {
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	-ms-flex-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;

	
}

.hasFlexbox .nodeList .categoryStrip .categoryText {
	-ms-flex: 1 1 auto;
	-webkit-flex: 1 1 auto;
	flex: 1 1 auto;
}

.nodeList .categoryStrip .nodeTitle { line-height: 1; }



.nodeList .categoryStrip .categoryStripIcon {
	font-size: 16px;
color: #FFFFFF;
margin-right: 6px;
text-align: center;
width: 1.28571429em;


	float: left;
	line-height: 15px;
	max-height: 15px;
}

	.hasFlexbox .nodeList .categoryStrip .categoryStripIcon {
		-ms-flex: 0 0 auto;
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;
	}

	.nodeList .categoryStrip .categoryStripIcon i { line-height: inherit; }




/*** UIX -- INLINE CATEGORY DESCRIPTION ***/



	.nodeList .categoryStrip .categoryText {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.nodeList .categoryStrip .nodeTitle {
		display: inline;
		padding: 0;
		margin: 0;
	}

	.nodeList .categoryStrip .nodeDescription {
		display: inline;
		padding: 0;
		margin: 0 0 0 .5em;
	}






	.categoryStrip__collapseToggle {
		font-size: 16px;
color: #FFF;
margin-left: 10px;


		cursor: pointer;
		line-height: 15px;
		max-height: 15px;
		float: right;
	}

	.hasFlexbox .categoryStrip__collapseToggle {
		-ms-flex: 0 0 auto;
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;

		-ms-flex-order: 1;
		-webkit-order: 1;
		order: 1;
	}

	





/*** NODE STATS ***/


	.nodeStats dt,
	.nodeStats .dt { color: rgb(187, 187, 187); }

	.nodeStats dt .uix_icon,
	.nodeStats .dt .uix_icon { vertical-align: top; }






/*** UIX -- SUBFORUM LIST ***/

.node .subForumList li { margin-left: 0; }

.nodeList .node.level_1 { margin-bottom: 16px; }

.nodeList .node.groupNoChildren + .node.groupNoChildren { margin-top: 0; }

.nodeList .node.groupNoChildren { margin-bottom: 16px; }

.node .categoryStrip--empty { height: 4px; padding-top: 0; padding-bottom: 0; margin-bottom: 16px; }

/* clearfix */ .nodeList { zoom: 1; } .nodeList:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }


/*** UIX -- NODE TABLE STYLE ***/


	.nodeList .categoryForumNodeInfo,
	.nodeList .forumNodeInfo,
	.nodeList .pageNodeInfo,
	.nodeList .linkNodeInfo
	{
		border-bottom: none;
	}


	.forum_view .nodeList,
	.category_view .nodeList,
	.watch_forums .nodeList {
		border: 1px solid rgb(226, 226, 226);
border-radius: 4px;
		border-top: 0;
	}

	.forum_list .nodeList .nodeList,
	.forum_view .nodeList,
	.category_view .nodeList,
	.watch_forums .nodeList {
		background: #FFFFFF;
		margin-top: 8px;
		border: 1px solid rgb(226, 226, 226);
		border-top: 0;
		border-radius: 4px;
	}

	.node.level_2 .nodeInfo { border-top: 1px solid rgb(226, 226, 226); }

	.node.level_2:first-child .nodeInfo { border-radius: 4px 4px 0 0; }

	.node.level_2:last-child .nodeInfo { border-radius: 0 0 4px 4px; }

	.node.level_2:only-of-type .nodeInfo { border-radius: 4px !important; }

	





.node .tinyIcon { text-indent: -9999px; }

.node .tinyIcon:before {
	display: inline-block;
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	width: 16px;
	content: "\f09e";

	text-indent: 0;
	float: left;
}



.node .nodeLastPost .noMessages {
	display: block;
	text-align: center;
}

.node .nodeControls {
	right: 240px;
}


.node.link .nodeText { margin-right: 16px; }
.node.page .nodeText { margin-right: 16px; }




	.node .nodeLastPost .avatar {
		margin-right: 8px;
float: left;
width: 30px;
height: 30px;

	}

	.node .nodeLastPost .avatar img {
		max-height: 100%;
		display: block;
		width: auto;
	}

	
		@media (max-width: 610px) {
			.Responsive .node .nodeLastPost .avatar {display: none;}
		}
	



.uix_nodeTitle_status {
	font-size: .75em;
color: #FFF;
background-color: rgb(204, 101, 0);
padding: 2px 6px;
margin-left: 4px;
border-radius: 2px;
display: inline-block;
font-weight: 600;
text-transform: uppercase;

}


.node .nodeText .nodeTitle a,
.subForumList .nodeTitle a { color: inherit; }

.node .nodeText,
.node .subForumList { margin-left: 52px; }


@media (max-width: 610px) {
	.Responsive .node .nodeLastPost { margin-left: 52px; }
}




/*** UIX -- NODE STYLE RULES ***/








/* clearfix */ .message .privateControls { zoom: 1; } .message .privateControls:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }
/* clearfix */ .message .publicControls { zoom: 1; } .message .publicControls:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

.message .messageInfo {
	margin-left: 158px;
	
}

#QuickReply {
	margin-left: 158px;
}

@media (max-width: 610px) {
	#QuickReply .submitUnit {
		display: flex;
		margin: 5px -5px 0;
		flex-wrap: wrap;
	}
	#QuickReply .submitUnit > *,
	#QuickReply .insertQuotes {
	    margin: 5px !important;
	    flex: 1 0 150px;
	}

	#QuickReply #ctrl_uploader {width: 100%;}
	#QuickReply #AttachmentUploader {position: relative;}
	#QuickReply .swfupload {top: 0 !important;}

	#QuickReply .submitUnit .button.primary {
		order: -1;
	}
}

.messageUserBlock div.uix_avatarHolderInner {
	position: relative;
	text-align: center;
	margin: 0 auto;
}

.message.placeholder .messageContent { min-height: 0; }




	.hasFlexbox .messageList .uix_message {
		display: -ms-flexbox; /* 2012 syntax for IE10 */
	        display: -webkit-flex;
	        display: flex;

	        

		-ms-flex-align: start; /* 2012 syntax for IE10 */
		-webkit-align-items: flex-start;
		align-items: flex-start;

		
	}

	.hasFlexbox .messageList .placeholder .placeholderContent {
		display: -ms-flexbox; /* 2012 syntax for IE10 */
	        display: -webkit-flex;
	        display: flex;
	}

	.hasFlexbox .messageList .placeholder a.avatar {
		-ms-flex: 0 0 auto; /* 2012 syntax for IE10 */
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;
	}

	.hasFlexbox .message .messageUserInfo {
		-ms-flex: 0 0 auto; /* 2012 syntax for IE10 */
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;
	}

	.hasFlexbox .message .messageInfo {
		display: -ms-flexbox; /* 2012 syntax for IE10 */
	        display: -webkit-flex;
	        display: flex;
	        -ms-flex-direction: column; /* 2012 syntax for IE10 */
	        -webkit-flex-direction: column;
	        flex-direction: column;

		-ms-flex: 1 1 100%; /* 2012 syntax for IE10 */
		-webkit-flex: 1 1 100%;
		flex: 1 1 100%;

		overflow: hidden; /* wrap images - FF */

		margin-left: 16px;
	}

	.hasFlexbox .message .messageContent {
		-ms-flex: 1 1 auto; /* 2012 syntax for IE10 */
		-webkit-flex: 1 1 auto;
		flex: 1 1 auto;
	}



	.message .messageDetails {
		font-size: 12px;
padding-top: 8px;
padding-bottom: 8px;

	}

	.message .messageDetails:after {
		content: '.';
		display: block;
		height: 0;
		clear: right;
		visibility: hidden;
	}

	.message .editDate {
		font-size: inherit;
		text-align: inherit;
		margin-top: 0;
	}
	.message .messageDetails .item {
		white-space: nowrap;
		display: inline-block;
		margin-left: 5px;
	}
	.message .messageDetails .postNumber {
		float: right;

	}

.attachedFiles .attachmentList,
.messageList .newMessagesNotice {
	background-image: none;
}

.userBanner {
	background-image: none;
	padding-top: 4px;
	padding-bottom: 4px;
	box-shadow: none;
}

.messageUserBlock .userBanner {
	margin-top: 5px;
}




	@media (min-width: 611px) {

		.messageUserBlock div.uix_avatarHolderInner
		{
			position: relative;

			margin: 0 auto;

			
				max-width: 96px;
			
		}
		.messageUserBlock div.avatarHolder .avatar img
		{
			max-width: 100%;
			width: auto;
			height: auto;
		}
	}

	




	
	.message .publicControls .MultiQuoteControl.active {
		background-color: rgb(204, 101, 0);
		color: #FFF;
		border-color: transparent;
	}
	

	

	.messageMeta .control:before,
	.messageMeta .uix_icon {
		display: inline-block;
		font-family: FontAwesome;
		font-style: normal;
		font-weight: normal;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		margin-right: 5px;
	}

	.messageMeta .control.reply:before {
		content: "\f112";
	}

	.messageMeta .control.edit:before {
		content: "\f040";
	}

	.messageMeta .control.delete:before {
		content: "\f014";
	}

	.messageMeta .control.deleteSpam:before {
		content: "\f05e";
	}

	.messageMeta .control.ip:before {
		content: "\f124";
	}

	.messageMeta .control.like:before {
		content: "\f164";
	}

	.messageMeta .control.unlike:before {
		content: "\f165";
	}

	.messageMeta .control.MultiQuoteControl:before {
		content: "\f10d";
	}

	.messageMeta .control.history:before {
		content: "\f1da";
	}

	.messageMeta .control.warn:before {
		content: "\f071";
	}

	.messageMeta .control.report:before {
		content: "\f06a";
	}

	.messageMeta .control.postComment:before {
		content: "\f075";
	}

	.messageMeta .uix_postbit_privateControlsMenu .uix_icon:before {
		content: "\f0ad";
	}

	

	



	

	.message .messageMeta .uix_postbit_privateControlsMenu {
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

	.message .messageMeta .uix_postbit_privateControlsMenu a {
		color: inherit;
		display: block;
	}

	.message .messageMeta .uix_postbit_privateControlsMenu:hover {
		color: rgb(4, 103, 126);
text-decoration: none;


	}

	.message .messageMeta .uix_postbit_privateControlsMenu.PopupOpen {
		color: #FFF;
background-color: rgb(4, 103, 126);
background-repeat: repeat-x;
background-position: top;
border-top-left-radius: 2px;
border-top-right-radius: 2px;
border-bottom-right-radius: 0;
border-bottom-left-radius: 0;

	}

		

	

	

	.Responsive .message .messageMeta .uix_postbit_privateControlsMenu
	{
		display: none;
	}

	@media (max-width: 900px)
	{
		.Responsive .thread_view .message .privateControls,
		.Responsive .th_liked_posts_list .message .privateControls
		{
			display: none;
		}


		.Responsive .message.deleted .messageMeta {clear: both; line-height: 30px; float: left;}
		.Responsive .message.deleted .privateControls {display: block;}
		.Responsive .message.deleted .privateControls .item.InlineModCheck {float: none; display: inline-block;}

		.Responsive .message .messageMeta .uix_postbit_privateControlsMenu
		{
			display: inline-block;
		}
	}

	

	
	

		@media (max-width: 610px) {
			.message .privateControls, .message .publicControls {float: none; text-align: center;}
		}

	
	




	

	.messageUserBlock div.avatarHolder .onlineMarker {
		background-color: rgb(127, 185, 0);
margin-top: 4px;
margin-left: 4px;
border-radius: 100%;
border-top-width: 0 !important;
border-right-width: 0 !important;
border-bottom-width: 0 !important;
border-left-width: 0 !important;
width: 10px;
height: 10px;

	}

	

	




	




@media (max-width: 610px) {

	

		.Responsive.hasFlexbox .messageList .uix_message {
			-ms-flex-direction: column; /* 2012 syntax for IE10 */
		        -webkit-flex-direction: column;
		        flex-direction: column;

	        	-ms-flex-align: stretch; /* 2012 syntax for IE10 */
			-webkit-align-items: stretch;
			align-items: stretch;
		}

		.Responsive.hasFlexbox .message .messageInfo {
			-ms-flex: 1 1 auto; /* 2012 syntax for IE10 */
			-webkit-flex: 1 1 auto;
			flex: 1 1 auto;
		}

		.Responsive .message .messageInfo {
			padding: 0px;
			margin-left: 0px;
		}

		.Responsive.hasFlexbox #QuickReply {
			margin-left: 0;
		}

		.Responsive.hasFlexbox .messageUserBlock {
			display: -ms-flexbox; /* 2012 syntax for IE10 */
		        display: -webkit-flex;
		        display: flex;

	        	-ms-flex-pack: justify; /* 2012 syntax for IE10 */
			-webkit-justify-content: space-between;
			justify-content: space-between;
		}

		.Responsive.hasFlexbox .messageUserBlock div.avatarHolder {
			-ms-flex: 0 0 auto; /* 2012 syntax for IE10 */
			-webkit-flex: 0 0 auto;
			flex: 0 0 auto;
		}

		
		.Responsive.hasFlexbox .messageUserBlock h3.userText {
			margin-left: 0;

			-ms-flex: 1 1 100%; /* 2012 syntax for IE10 */
			-webkit-flex: 1 1 100%;
			flex: 1 1 100%;
		}


	

		.Responsive .messageUserBlock h3.userText {
			border-width: 0 0 0 1px;
		}


	

		

		.Responsive .messageUserBlock .userBanner {
			float: right;
			margin-top: 0;
		}

		.Responsive .messageUserBlock h3.userText .uix_userTextInner {
			float: left;
			text-align: left;
		}

		


	

		

		.Responsive .messageUserBlock div.avatarHolder .onlineMarker {
			margin: 0;
		}

		

}





/* Find the images, set the new image */

.LoggedIn .discussionListItem .unreadLink,
.LoggedIn .discussionListItem .ReadToggle,
.discussionListItem .iconKey span,
.event .content .thread .icon,
.event .content .forum .icon,
.footerLinks a.globalFeed,
.messageNotices .icon,
.rating .star,
.resourceAlerts .icon,
.thread_view .threadAlerts .icon,
.alerts .newIcon,
.alertsPopup .newIcon,
.DismissParent .DismissCtrl {
	background-image: url(styles/uix/uix/sprite.png) !important;
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
}


/* Set the background-position */

.LoggedIn .discussionListItem .unreadLink,
.LoggedIn .discussionListItem.unread .ReadToggle {background-position: 0 -32px;}
.LoggedIn .discussionListItem .ReadToggle:hover {background-position: -16px -32px;}

.discussionListItem .iconKey .sticky    { background-position:   0px -16px; }
.discussionListItem .iconKey .starred   { background-position: -64px -32px;}
.discussionListItem .iconKey .watched   { background-position: -144px -16px;}
.discussionListItem .iconKey .locked    { background-position: -16px -16px; }
.discussionListItem .iconKey .moderated { background-position: -32px -16px; }
.discussionListItem .iconKey .redirect  { background-position: -48px -16px; }
.discussionListItem .iconKey .new       { background-position: -64px -16px; }

.event .content .thread .icon {background-position: -96px -16px;}
.event .content .forum .icon {background-position: -80px -16px;}

.footerLinks a.globalFeed {background-position: -112px -16px;}

.messageNotices .deletedNotice .icon { background-position: -48px -32px; }
.messageNotices .warningNotice .icon { background-position: -32px -32px; }
.messageNotices .moderatedNotice .icon {background-position: -32px -16px; }

.navTabs .navTab.PopupClosed:hover .SplitCtrl {background-position: -128px ; }

.rating .star {background-position: -96px -32px !important;}
.rating .star.Full {background-position: -64px -32px !important;}
.rating .star.Half,
.rating .star.Full.Half {background-position: -80px -32px !important;}

.resourceAlerts .deletedAlert .icon { background-position: -48px -32px; }
.resourceAlerts .moderatedAlert .icon { background-position: -32px -16px; }

.thread_view .threadAlerts .deletedAlert .icon { background-position: -48px -32px; }
.thread_view .threadAlerts .moderatedAlert .icon { background-position: -32px -32px; }
.thread_view .threadAlerts .lockedAlert .icon { background-position: -16px -16px; }

.alerts .newIcon,
.alertsPopup .newIcon {background-position: -112px -32px;}

.DismissParent .DismissCtrl {background-position: -80px 0;}
.DismissParent:hover .DismissCtrl:hover {background-position: -96px 0;}
.DismissParent:hover .DismissCtrl:active {background-position: -112px 0;}



@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.LoggedIn .discussionListItem .unreadLink,
	.LoggedIn .discussionListItem .ReadToggle,
	.discussionListItem .iconKey span,
	.event .content .thread .icon,
	.event .content .forum .icon,
	.footerLinks a.globalFeed,
	.messageNotices .icon,
	.rating .star,
	.resourceAlerts .icon,
	
	.thread_view .threadAlerts .icon,
	.alerts .newIcon,
	.alertsPopup .newIcon,
	.DismissParent .DismissCtrl {
		background-image: url(styles/uix/uix/sprite@2x.png) !important;
		background-size: 160px 48px;
	}

}


#calroot {
	padding: 8px;
	border: none;
	box-shadow: 1px 2px 3px rgba(0,0,0,.2);
	width: 220px;
}

#caltitle {
	color: rgb(43, 43, 43);
	width: 178px;
}

#caldays {
	padding-bottom: 5px;
	border-bottom-color: rgb(240, 240, 240);
}

#caldays span { width: 30px; }

#calweeks { margin-top: 10px; }

.calweek { margin-top: 5px; }

.calweek a {
	margin-right: 10px;
	width: 20px;
	border-radius: 100%;
	box-sizing: border-box;
	line-height: 21px;
}

#caltoday {
	border: solid 1px rgb(44, 44, 44);
	font-weight: normal;
	line-height: 20px;
}

#calcurrent { background: rgb(4, 103, 126); }

a.caloff { color: rgb(187, 187, 187); }


	.uix_javascriptNeedsInit .moderatorTabs,
.uix_javascriptNeedsInit .tabLinks li,
.uix_javascriptNeedsInit .publicTabs .navTab a,
.uix_javascriptNeedsInit .visitorTabs {
	visibility: hidden;
}

.NoJs.uix_javascriptNeedsInit .moderatorTabs,
.NoJs.uix_javascriptNeedsInit .tabLinks li,
.NoJs.uix_javascriptNeedsInit .publicTabs .navTab a,
.NoJs.uix_javascriptNeedsInit .visitorTabs {
	visibility: visible;
}




/*** UIX -- WIDE RESPONSIVE RULES ***/

@media (max-width:800px) {

	.Responsive .pageWidth { max-width: none !important; }

	.Responsive .blockLinksList a,
	.Responsive .blockLinksList label { padding: 10px; }
}


/*** UIX -- MEDIUM RESPONSIVE RULES ***/

@media (max-width:610px) {

	.Responsive .profilePage .mast > * {
		max-width: none;
	}

	.Responsive .navTabs {
		font-size: 13px;
	}

	.Responsive #userBar .navTabs {
		font-size: 13px;
	}

	.Responsive #navigation .navTabs,
	.Responsive #userBar .navTabs {
		padding-left: 0;
		padding-right: 0;
	}

	.Responsive .moderatorTabs a i + .itemLabel {display: none;}

	

}


/*** UIX -- NARROW RESPONSIVE RULES ***/

@media (max-width: 480px) {

	.Responsive .resourceInfo .downloadButton { display: block; }

	.Responsive .pageNavLinkGroup { text-align: center; }

	.Responsive .pageNavLinkGroup .PageNav,
	.Responsive .pageNavLinkGroup .linkGroup {
		clear: both;
		display: inline-block;
		margin-top: 8px;
	}

	.Responsive .pageNavLinkGroup .linkGroup .Popup { margin-left: 0; }

	.Responsive .pageNavLinkGroup .linkGroup .Popup,
	.Responsive .pageNavLinkGroup .linkGroup .element,
	.Responsive .pageNavLinkGroup .linkGroup a {
		margin: 0 5px;
		display: inline-block;
		float: none;
	}

	.Responsive .topCtrl.topCtrl--inContent,
	.Responsive .breadBoxTop.withTopCtrl .topCtrl,
	.Responsive .pageNavLinkGroup .linkGroup,
	.Responsive .nodeListNewDiscussionButton{
		display: block;
		float: none;
		width: 100%;
		text-align: center;
		margin-left: 0;

	}

	.Responsive .breadBoxTop.withTopCtrl .topCtrl { margin-top: 8px; }

	.Responsive .topCtrl.topCtrl--inContent { margin-bottom: 16px; }

	.Responsive .topCtrl a.callToAction,
	.Responsive .pageNavLinkGroup .linkGroup a.callToAction,
	.Responsive .nodeListNewDiscussionButton a.callToAction { display: block; }

}


/*** UIX -- HIDE AD STYLER ***/

@media (max-width: 768px) {
	.Responsive .uix_adStylerColorOptions,
	.Responsive .footer .choosers.chooser_AdStyler { display: none; }
}


.message .dark_postrating.likesSummary, .dark_postrating {
	margin: 0;
	min-height: 0;
	padding: 8px;
	color: rgb(70, 102, 124);
background-color: rgb(248,251,253);
padding: 8px;
margin-top: 8px;
border: 1px solid rgb(221, 229, 234);
border-radius: 2px;

}

.dark_postrating_outputlist {
	font-family: inherit;
	margin: 0;
	font-size: 12px;
	color: inherit;
}

.dark_postrating_outputlist li strong, .dark_postrating_thread_rating strong {color: inherit;}



.widget-container.widget-tabs .tabs {border-bottom: 0;}
.widget-container.widget-tabs .secondaryContent {
	margin-top: -1px;
}

.sidebar .pollBlock .buttons .button {
	width: 100%; 
	display: block;
	margin-top: 10px;
	box-sizing: border-box;
	margin-left: 0;
}







.featuredResourceList {
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	height: auto;

	-ms-flex-wrap: wrap;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;

	margin: -4px;
}
.featuredResourceList .featuredResource {
	margin: 0 8px 0 0;
	box-shadow: none;
	border-color: rgb(221, 229, 234);
	background: rgb(248,251,253);

	-ms-flex: 1 0 200px;
	-webkit-flex: 1 0 200px;
	flex: 1 0 200px;

	margin: 4px;
	border-radius: 2px;
}
.featuredResourceList .featuredResource .details {left: 5px;}
.featuredResourceList .featuredResource .resourceInfo .title a {color: rgb(70, 102, 124);}

@media screen and (-webkit-min-device-pixel-ratio:0)  {
	.resourceHeaders .typeFilter {
	    bottom: 0px;
	    (-bracket-:hack;
	        bottom: 1px;
	    );
	}
}

.resourceUpdate {padding: 8px;}
.resourceListItem {border-bottom: solid 1px rgb(226, 226, 226);}
.sidebar .callToAction {margin: 15px 0;}
.sidebar .callToAction span {padding: 8px; font-size: 13px}

.resourceListSidebar .secondaryContent {
	margin-bottom: 16px;

	border: 1px solid rgb(226, 226, 226);
border-radius: 4px;

}

.resourceListMain {
	background-color: #FFFFFF;
padding: 16px;
border: 1px solid rgb(226, 226, 226);
border-radius: 4px;

	border-radius: 4px;
}

.imageCollection {background-image: none;}

.downloadButton .inner:hover {color: #FFF;}



.sidebar > .callToAction {width: 100%;}

.sidebar > .callToAction {
        max-width: 220px;
        margin: 0 auto;
}




.mainContainer .mainContent > *:first-child > .sectionMain, .mainContainer_noSidebar > *:first-child {
    margin-top: 0;
}

.mediaContainer,
.albumContainer {
	box-shadow: none;
}

.xmgCarouselContainer .sectionMain .titleStrip h3 {line-height: ;}
.ratings { font-size: 16px; }

.ratings .star { font-size: inherit; }



.mediaTabHeadings .typeFilter
{
	background-image: none;
}
.mediaLabels .mediaLabel
{
	box-shadow: none;
}

@media (max-width: 800px) {
	.Responsive .xengallerySideBar > * {max-width: 100%;}
	.Responsive .xengallerySideBar {display: block; margin-top: 16px; width: auto;}
}

.buttonToolbar .toolButton .fa-lg {
	vertical-align: top;
	line-height: inherit;
}

.xengallerySideBarContainer .xengallerySideBar .section:first-child {
	margin-top: 0;
}

.xengallerySideBarContainer .xengallerySideBar .section .secondaryContent {
	border: 1px solid rgb(226, 226, 226);
border-radius: 4px;

}

.xengallery_media_index .titleBar,
.xengallery_category_view .titleBar {height: auto;}


	.commentSimple .control:before,
	.mediaMeta .control:before
	{
		display: inline-block;
		font-family: FontAwesome;
		font-style: normal;
		font-weight: normal;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		margin-right: 5px;
	}
	.commentMeta .control.ReplyLink:before
	{
		content: "\f112";
	}
	.commentMeta .control.edit:before
	{
		content: "\f040";
	}
	.commentMeta .control.delete:before
	{
		content: "\f014";
	}
	.commentMeta .control.deleteSpam:before
	{
		content: "\f05e";
	}
	.commentMeta .control.ip:before,
	.mediaMeta .control.ip:before
	{
		content: "\f124";
	}
	.commentMeta .control.like:before,
	.mediaMeta .control.like:before
	{
		content: "\f164";
	}
	.commentMeta .control.unlike:before,
	.mediaMeta .control.unlike:before
	{
		content: "\f165";
	}
	.commentMeta .control.MultiQuoteControl:before
	{
		content: "\f10d";
	}
	.commentMeta .control.history:before
	{
		content: "\f1da";
	}
	.commentMeta .control.warn:before
	{
		content: "\f071";
	}
	.commentMeta .control.report:before,
	.mediaMeta .control.report:before
	{
		content: "\f06a";
	}

	.commentMeta .control.postComment:before
	{
		content: "\f075";
	}



@media (max-width: 800px) {
	.sidebar .xmgCarouselContainer {overflow: scroll;}
}







	.resourceListSidebar .secondaryContent h3:before,
	.xengallerySideBar .section .secondaryContent h3:before {
		display: inline-block;
		font-family: 'FontAwesome';
		font-style: normal;
	 	font-weight: normal;
	  	-webkit-font-smoothing: antialiased;
	  	-moz-osx-font-smoothing: grayscale;
		line-height: 1;

		font-size: 14px;
margin-right: 6px;
content: '\f152';
text-align: center;
/* fa-caret-square-o-right */
width: 1.28571429em;

	}

	
	.sidebar .section .secondaryContent.widget.WidgetFramework_WidgetRenderer_OnlineUsers h3:before {content: "\f0c0";}
	.sidebar .section .secondaryContent.widget.WidgetFramework_WidgetRenderer_OnlineStaff h3:before {content: "\f0b1";}
	.sidebar .section .secondaryContent.widget.WidgetFramework_WidgetRenderer_Stats h3:before {content: '\f080';}


	
	.resourceListSidebar .secondaryContent.categoryList h3:before {content: "\f07c";}
	.resourceListSidebar .secondaryContent.miniResourceList h3:before {content: "\f091";}
	.resourceListSidebar .secondaryContent.avatarList h3:before {content: "\f0c0";}

	.sidebar .section#resourceInfo .secondaryContent h3:before {content: "\f05a";}
	.sidebar .section .secondaryContent#authorTools h3:before {content: "\f085";}
	.sidebar .section .secondaryContent#moreAppsByAuthor h3:before {content: "\f0ca";}
	.sidebar .section#versionInfo .secondaryContent h3:before {content: "\f0c5";}

	

	.xengallerySideBar .section.xengallery_albums .secondaryContent h3:before {content: "\f00a";}
	.xengallerySideBar .section.xengallery_categories .secondaryContent h3:before {content: "\f07b";}
	.xengallerySideBar .section.xengallery_tag_cloud .secondaryContent h3:before {content: "\f02c";}
	.xengallerySideBar .section.xengallery_recent_comments .secondaryContent h3:before {content: "\f086";}
	.xengallerySideBar .section.xengallery_top_contributors .secondaryContent h3:before {content: "\f091";}
	.xengallerySideBar .section.xengallery_gallery_statistics .secondaryContent h3:before {content: "\f080";}
	.xengallerySideBar .section.xengallery_your_statistics .secondaryContent h3:before {content: "\f080";}

	.sidebar .section#shareMedia .secondaryContent h3:before {content: "\f1e0";}
	.sidebar .section#mediaInfo .secondaryContent h3:before {content: "\f129";}
	.sidebar .section#ownerInfo .secondaryContent h3:before {content: "\f007";}







.topRightBlocks,
.midRightBlocks,
.btmRightBlocks { float: none; }



html.sidebar {
	width: auto !important;
	float: none !important;
	font-size: 100% !important;
}


.sidebar .userMood a {margin-left: 0; display: inline-block;}




.hasFlexbox .articleItem .metaData {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex; 
	-ms-flex-wrap: wrap; 
	    flex-wrap: wrap;
}

.hasFlexbox .articleItem .metaData .statData {
	-webkit-box-ordinal-group: 2;
	    -ms-flex-order: 1;
	        order: 1;
}

.hasFlexbox .articleItem .metaData .dateData {
	-webkit-box-flex: 1;
	    -ms-flex-positive: 1;
	        flex-grow: 1;
}



/*** STACK ALERT FIX ****/
.stackAlertContent .DismissCtrl {
	top: 10px;
	right: 8px;
}
#StackAlerts .stackAlertContent {
	color: rgb(83, 83, 83);
	font-weight: 500;
	border-radius: 2px;
	border: none;
	background: rgb(250, 250, 250);
}
#StackAlerts {
	left: 16px;
	bottom: 16px;
}
@media (max-width:800px) {
	#StackAlerts {
		left: 8px;
		bottom: 8px;
	}
}
@media (max-width:610px) {
	#StackAlerts {
		left: 10px;
		bottom: 10px;
	}
}
@media (max-width:480px) {
	#StackAlerts {
		left: 10px;
		bottom: 10px;
	}
}
#StackAlerts .stackAlert {
	box-shadow: 0px 2px 5px rgba(0,0,0,.25);
	border-radius: 2px;
	border-style: solid;
	border-width: 0;
}
/*** END STACK ALERT FIX ****/

/* --- uix_style.css --- */

.nodeStats dl, .subForumsPopup { margin-right: 7px; }


	#content > .pageWidth > .pageContent
	{
		border-top: 0;
	}






.profilePage .primaryUserBlock h1 { font-weight: 300; }

.messageSimple .poster { font-weight: 600; }

.sidePanel__navTabs .navTab:not(.is-active) + .navTab .navLink { border-top: none; }

.LoggedIn .discussionListItem .unreadLink,
.LoggedIn .discussionListItem .ReadToggle { margin-top: 2px; }
