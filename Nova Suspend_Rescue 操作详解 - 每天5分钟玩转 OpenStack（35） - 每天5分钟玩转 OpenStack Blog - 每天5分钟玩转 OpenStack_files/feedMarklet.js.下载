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

var feedMarklet = {
	scriptName:"feedMarklet.js",
	init: function() {

		if(typeof(feedMarkletScriptRoot)!="undefined") {
			// we have a set root for the scripts to be loaded from
			var mnuInc = document.createElement("script");
			mnuInc.src = feedMarkletScriptRoot+"feedMarkletMenu.js";
			document.body.insertBefore(mnuInc, document.body.firstChild);

			var itemInc = document.createElement("script");
			itemInc.src = feedMarkletScriptRoot+"feedMarkletActions.js?lang="+dojo.config.locale;
			document.body.insertBefore(itemInc, document.body.firstChild);	
		} else {
			// find this scripts base and use it
			var scriptures=document.getElementsByTagName("script");
			var pathToScript="";
			for(var i=0;i<scriptures.length;i++) {
				if(scriptures[i].getAttribute("src")!=null) {				
					if(scriptures[i].getAttribute("src").toString().indexOf(feedMarklet.scriptName)!=-1) {
						pathToScript=scriptures[i].getAttribute("src").toString().substring(0,scriptures[i].getAttribute("src").toString().indexOf(feedMarklet.scriptName));
						break;
					}
				}
			}
			var mnuInc = document.createElement("script");
			mnuInc.src = pathToScript.toString()+"feedMarkletMenu.js";
			document.body.insertBefore(mnuInc, document.body.firstChild);

			var itemInc = document.createElement("script");
			itemInc.src = pathToScript.toString()+"feedMarkletActions.js?lang="+dojo.config.locale;
			document.body.insertBefore(itemInc, document.body.firstChild);	
		}
		var elms = document.getElementsByTagName("A");
		var regexp = new RegExp("(^|\\s)" + "lotusFeed" + "(\\s|$)");
		for(var i=0;i<elms.length;i++) {
			if(elms[i].className.match(regexp)) {
				if(elms[i].getAttribute("href")!="") {
					try{feedMarklet.attachHover(elms[i],feedMarklet.showOnHover);}catch(e) {}
				}				
				
			}
		}
	},
	showOnHover:function(evt) {
		if(dijit.byId("feedmarkletMenu")){
			require(["dojo"], function(dojo){
			  dojo.destroy("feedmarkletMenu");
			  
			  if(dijit.byId("entryCommentFeedLink_dropdown")){
				dojo.destroy("entryCommentFeedLink_dropdown");
			  }
			  if(dijit.byId("commentFeedLink_dropdown")){
				dojo.destroy("commentFeedLink_dropdown");
			  }
			  if(dijit.byId("entryFeedLink_dropdown")){
			    dojo.destroy("entryFeedLink_dropdown");
			  }
			  
			});
		}
		if(evt.srcElement){
			if(evt.srcElement.tagName=='A') {
				feedMarkletMenu.showOnHover(evt);
			} else {
				if(evt.srcElement.parentNode.fireEvent) {
					evt.srcElement.parentNode.fireEvent('onmouseover');
				} else {
					var nEvt=document.createEvent('HTMLEvents');
					nEvt.initEvent('mouseover',true,true);
					evt.srcElement.parentNode.dispatchEvent(nEvt);
				}
				return evt;
			}
		}else{
			feedMarkletMenu.showOnHover(evt);
		}
		
	},
	// parse the page on load for feedMarklet attach points
	addLoadParse:function() {
		try {
			if (window.addEventListener) {
				window.addEventListener('load', feedMarklet.init, false);
			} else if (window.attachEvent) {
				window.attachEvent('onload', feedMarklet.init);
			}
		}
		catch (e) { }
	},
	// parse a dom tree for feedMarklet attach points
	parseDom:function(domTreeNode) {
		var elms = domTreeNode.getElementsByTagName("A");
		var regexp = new RegExp("(^|\\s)" + "lotusFeed" + "(\\s|$)");
		for(var i=0;i<elms.length;i++) {
			if(elms[i].className.match(regexp)) {
				if(elms[i].getAttribute("href")!="") {
					try{feedMarklet.attachHover(elms[i],feedMarklet.showOnHover);}catch(e) {}
				}				
				
			}
		}
	},
	// attach a feedMarklet to a specified element
	attachFeedMarklet:function(hElement) {

	},
	// attach an event to an element so that onHover makes a menu appear
	attachHover: function(hElement,funcPtr) {
		if(hElement.addEventListener) {
			// clear the hover event first
			try {hElement.removeEventListener('mouseover',funcPtr,false);}catch(e){ }
			hElement.addEventListener('mouseover',funcPtr,false);
			hElement.addEventListener('keydown',function(e){if(e.ctrlKey)funcPtr(e);},false);
		} else if(hElement.attachEvent) {
			try {hElement.detachEvent('onmouseover',funcPtr);}catch(e){ }
			hElement.attachEvent('onmouseover',funcPtr);
			hElement.attachEvent('onkeydown',function(e){if(e.ctrlKey)funcPtr(e);});
		}
	},
	
	// generic function to see if we have a decent browser or not
	isGecko: function() {
  		return (document.all ? false : true);
	}
};

feedMarklet.addLoadParse();
