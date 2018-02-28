function wpzan(post_id, user_id){
	if(post_id){
		var id = ".wp-zan-" + post_id,
		$zan = jQuery(id);
	    	jQuery.post(wpzan_ajax_url, {
	    		"action": "wpzan",
	        	"post_id": post_id,
	        	"user_id": user_id
	    	}, function(result) { //console.log(result.zaned);
	    		if( result.status == 200 ){
	    			var $count = $zan.find('span');
	    			if(result.zaned==1){
	    				$zan.addClass('zaned');
	    				jQuery(id + " .wp").hide();
	    				jQuery(id + " .wp-click").show();
	    				$zan.attr("title","取消赞");
	    			}
	    			else{
	    				$zan.removeClass('zaned');
	    				jQuery(id + " .wp-click").hide();
	    				jQuery(id + " .wp").show();
	    				$zan.attr("title","赞");
	    			}
	    			$count.text(result.count);
	    		}else{
	    			alert('点赞失败');
	    		}
	    	}, 'json');
	}
}