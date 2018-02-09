// H5和Pc同用（解析博文展示）zjf20171011
(function(){
  setTimeout(function(){
    $(".main-content").find('a').css({'color':'#4285f4'})
    $(".main-content").find('.cnblogs_code_copy').remove()
    $(".artical-content-bak").find('img').css('cursor','pointer')
    $(".artical-content-bak").find('img').click(function(){//img新页面打开
      var img_src = $(this).attr('src')
      window.open(img_src); 
      return false;
    })
  },50)
  if(is_old != 1){
    hljs.initHighlightingOnLoad();
  }
})();
