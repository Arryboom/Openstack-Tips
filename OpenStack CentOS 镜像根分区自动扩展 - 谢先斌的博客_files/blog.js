/*!
 * Xiexianbin blog nav menu
 * Copyright 2015-2017 me@xiexianbin.cn, Per.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

var BlogNavMenu = {

	htmlDecode: function(text) {
		var temp = document.createElement("div");
		temp.innerHTML = text;
		var output = temp.innerText || temp.textContent;
		temp = null;
		return output;
	},

	/*
	create blog nav menu
	el: blog content DIV Container for jquery 
	mt is h2, and st is h3
	*/
	create: function(el, mt, st, interval) {
		/* get {{ content }} 's DIV Container */
		if (!el || el.length < 1)
		  return false;
		/* get all mt and st nodes in the special div */
		var nodes = el.find(mt+','+st);
		/* create blog sidebar nav Container */
		var divSideBar = $('#blog_nav_menu');
		var divSideBarTab = $('<span class="help-block">Navigation</span>');
		divSideBar.append(divSideBarTab);
        
		/* create nav Container */
		var divSideBarContents = $('<ul class="nav bs-docs-sidenav"></ul>');
		divSideBar.append(divSideBarContents);
        
        /* Statistics mt and st */
		var num = 0; 
		mt = mt.toUpperCase();
		st = st.toUpperCase();
		is_mt = false;
		var anchorTitle = "anchor";
		var item1 = '';
		var item2 = '';
		var nodetext = '';

		/* list all h2 and h3 */
		$.each(nodes, function() {
			var $this = $(this);
			switch ($this.get(0).tagName) {
				case mt:
					/* h2 */
					is_mt = true;
					divSideBarContents.append(item1);
					item1 = $("<li></li>");
					item2 = ''
					break;
				case st:
					/* h3 */
					is_mt = false;
					if (item2 == ''){
						item2 = $('<ul class="nav"></ul>');
						item1.append(item2)
					}
					break;
			}
			
			/* get the test of h2 and h3  */
			nodetext = $this.text().replace(/<\/?[^>]+>/g, "");
			nodetext = nodetext.replace(/&nbsp;/ig, ""); /*replace all &nbsp;*/
			nodetext = BlogNavMenu.htmlDecode(nodetext);
			
			$this.attr("id", anchorTitle + num);
			$this.html('<span class="nav-anchor-span">' + nodetext + '</span>')
			a_url = '<a class="anchorjs-link nav-anchor" href="#' + anchorTitle + num + '" aria-label="Anchor link for: grid intro"><span class="glyphicon glyphicon-link"></span></a>'
			$this.append(a_url)
			
			if (is_mt == true){
				tmp = $("<a></a>");
				tmp.text(nodetext);
				tmp.attr("href", "#" + anchorTitle + num);
				item1.append(tmp);
			}else{
				tmp1 = $("<li></li>");
				tmp2 = $("<a></a>");
				tmp2.text(nodetext);
				tmp2.attr("href", "#" + anchorTitle + num);
				tmp1.append(tmp2);
				item2.append(tmp1);
			}
			num++;
		})
		divSideBarContents.append(item1);
		divSideBarContents.append('<a class="back-to-top" href="#top">To Top</a>');

		if (num == 0)
		  return false;
	}
};

jQuery(function($) {
	$(document).ready(function() {
		/* when the blog page upload finish, then create blog nav menu */
		BlogNavMenu.create($("#blog_content"), "h2", "h3", 10);
		/*stick*/
		$('#blog_nav_menu').stickUp();
	});
});
