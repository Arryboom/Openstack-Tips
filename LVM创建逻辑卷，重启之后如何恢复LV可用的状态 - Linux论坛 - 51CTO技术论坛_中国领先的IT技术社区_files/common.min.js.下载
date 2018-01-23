// JavaScript Document
function getbyid(id) {
	return document.getElementById(id);
}

function shownew(c_Str,imgg)
{
	var strobj = getbyid(c_Str);
	var imgobj = getbyid(imgg);
	if(strobj.style.display=='block')
	{
		strobj.style.display='none';
		imgobj.src='images/forum/s_ico02.jpg'
	}else{
		strobj.style.display='block';
		imgobj.src='images/forum/s_ico01.jpg'
	}
}

function ddd(obj, sType) { 
var oDiv = document.getElementById(obj); 
if (sType == 'show') { oDiv.style.display = 'block';} 
if (sType == 'hide') { oDiv.style.display = 'none';} 
} 

jQuery(document).ready(function($) {
	//添加收藏
	$('#collect').live('click',function(){		
            var $parentLi = $(this);//获取当前标签
			var fid = $parentLi.attr('rel');//获取当前标签的REL值，也就是fid	
            $.post('/plugins/index/forumdiy.javascript.php', {'action':'add','fid':fid},function(data) {
                if (data.status == 1) {
					$parentLi.html('[取消收藏]');
					$parentLi.attr('id','remove');					
					var _h ='<li id="collect_'+fid+'" ><a href="forum-'+fid+'-1.html">'+ $('#cdis').text()+'</a><span><a class="remove" rel="'
							+fid+'" href="javascript:void(0);"><img src="images/forum/s_ico03.jpg"></a></span></li>';
                    $('#collectul').append(_h);
                } else if (data.status == '-1') {
                    alert('添加失败');
                } else if (data.status == '-2') {
                    alert('你已经添加过了');
                }
            }, 'json');
        
	});
	//取消收藏
	$('#remove').live('click',function(){		
            var $parentLi = $(this);//获取当前标签
			var fid = $parentLi.attr('rel');//获取当前标签的REL值，也就是fid		
            $.post('/plugins/index/forumdiy.javascript.php', {'action':'del','fid':fid},function(data) {
                if (data.status == 1) {
					$parentLi.html('[添加收藏]');
					$parentLi.attr('id','collect');
					$('#collect_'+fid).remove();
                } else if (data.status == '-1') {
                    alert('取消失败');
                } else if (data.status == '-2') {
                    alert('你没有收藏此版块');
                }
            }, 'json');
        
	});
	//左侧取消收藏
	$('.remove').live('click',function(){		
            var $parentLi = $(this);//获取当前标签
			var fid = $parentLi.attr('rel');//获取当前标签的REL值，也就是fid		
            $.post('/plugins/index/forumdiy.javascript.php', {'action':'del','fid':fid},function(data) {
                if (data.status == 1) {
					$parentLi.parent().parent().remove();					
                } else if (data.status == '-1') {
                    alert('取消失败');
                } else if (data.status == '-2') {
                    alert('你没有收藏此版块');
                }
            }, 'json');
        
	});
	
	//收藏效果
	$('#collectul li').live('mouseover', function(){
		$(this).addClass('li02');
		$('.remove', this).show();
	
	}).live('mouseout', function(){
		$(this).removeClass('li02');
		$('.remove', this).hide();
	});
	
	//帖子效果
	$('.t_item').hover(function(){
		$(this).addClass('trhoverbg');
	},function(){
		$(this).removeClass('trhoverbg');
	});
	
});