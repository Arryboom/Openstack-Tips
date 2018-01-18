/* ***************************************************************** */
/*                                                                   */
/* IBM Confidential                                                  */
/*                                                                   */
/* OCO Source Materials                                              */
/*                                                                   */
/* Copyright IBM Corp. 2008, 2014                                    */
/*                                                                   */
/* The source code for this program is not published or otherwise    */
/* divested of its trade secrets, irrespective of what has been      */
/* deposited with the U.S. Copyright Office.                         */
/*                                                                   */
/* ***************************************************************** */

var feedMarkletMenu = {

	menuTemplate:"",
	mnu:null,
	timeOutId:null,
	showOnHover:function(evt) {
		var lockedElement;
		if(typeof(evt.target)=="undefined") {
			 lockedElement = evt.srcElement;
			 evt.target=evt.srcElement;
		} else {
			 lockedElement = evt.currentTarget;
		}
		try{feedMarkletMenu.mnu.destroy();}catch(e){}
		feedMarkletMenu.mnu = feedMarkletMenu.buildMenu(escape(lockedElement.getAttribute('href',2)));
		try{
			com.ibm.oneui.util.openAround(feedMarkletMenu.mnu.id,null,null,evt);
		}catch(e){}
		com.ibm.oneui.util.openAround(feedMarkletMenu.mnu.id,null,null,evt);
		if (window.addEventListener) {
			window.addEventListener('click', feedMarkletMenu.hideOnClick, false);
		} else if (window.attachEvent) {
			window.attachEvent('onclick', feedMarkletMenu.hideOnClick);
		}
		feedMarkletMenu.startTimeOut(15000);
	},
	
	hideOnClick:function() {
		try{window.clearTimeout(feedMarkletMenu.timeOutId)}catch(e){}
		
		if (window.addEventListener) {
			try{window.removeEventListener('click', feedMarkletMenu.hideOnClick, false);}catch(e){}
		} else if (window.attachEvent) {
			try{window.detachEvent('onclick', feedMarkletMenu.hideOnClick);}catch(e){}
		}
		window.setTimeout(function(){try{feedMarkletMenu.mnu.destroy();}catch(e){}},300);
	},
	clearTimeOut:function() {
		try{window.clearTimeout(feedMarkletMenu.timeOutId)}catch(e){}
	},
	startTimeOut:function(tme) {
		feedMarkletMenu.timeOutId=window.setTimeout(feedMarkletMenu.hideOnClick,tme);
	},
	buildMenu:function(hrefLocation) {

		hrefLocation=feedMarkletMenu.fixLocation(hrefLocation);
		if(hrefLocation!=null){
			var menuid = "feedmarkletMenu";
			var menudiv = dojo.byId(menuid);
			if (!menudiv){
				menudiv = document.createElement("DIV");
				menudiv.id = menuid;
				menudiv.className = "lotusActionMenu";
				menudiv.style.display = "none";
				document.body.appendChild(menudiv);
			}
			var dynamicMenu = new dijit.Menu({targetNodeIds:[menuid], id: menuid});
			newItems=eval(feedMarkletActions.actions);
			for(var i=0;i<newItems.length;i++) {
				var loc=newItems[i].href.replace("%l",unescape(hrefLocation));
				if (loc.match("^javascript")){
					loc = loc.replace("javascript:", "");
					var temp = loc;
					dynamicMenu.addChild(new dijit.MenuItem({label:newItems[i].text, onClick:function(){eval(temp + ";")}}));
				}else {
					dynamicMenu.addChild(new dijit.MenuItem({
						label:newItems[i].text, 
						onClick:function(){
							eval("window.open('"+loc+"', '');");
							}
					}));
				}
				
			}
			dynamicMenu.startup();
			return dynamicMenu;
		}
	},
	fixLocation:function(loc) {
		var newURL="";
		if(loc!=null) {
			loc = feedMarkletMenu.trim(loc);
			if(loc.match("^http")) {
				newURL=loc;
			} else if(loc.match("^/")) {
				newURL=window.location.protocol+"//"+window.location.host+loc;
			} else {
				newURL=window.location.toString().substring(0,window.location.toString().lastIndexOf("/")+1)+loc;
			}
		}
		return newURL;
	},
    trim:function(stringToTrim) {
    	return stringToTrim.replace(/^\s+|\s+$/g,"");
    } 
}
