var adconfig = {
    close:{
        // pageType
        // 右下浮窗
        lowerRight: ['about', 'tuku', 'list'],
        // 左下浮窗
        lowerLeft: ['about', 'tuku', 'home', 'list'],
        // 搜索推荐(顶部浮窗)
        top: ['about', 'tuku', 'home', 'list'],
        // 对联
        couplet: ['about', 'tuku', 'album', 'list']
    }
};

function loadFloatAd(type)
{
    if (typeof window.pageType == 'undefined')
    {
        window.pageType = '';
    }
    
    // 右下浮动
    if (type==='lowerRight' && $.inArray(window.pageType, adconfig.close.lowerRight) == -1)
    {
        loadSSP("2445160");
    }
    // 左下浮动
    else if (type==='lowerLeft' && $.inArray(window.pageType, adconfig.close.lowerLeft) == -1)
    {
        loadSSP("2445162");
    }
    // 搜索推荐(顶部浮窗)
    else if (type==='top' && $.inArray(window.pageType, adconfig.close.top) == -1)
    {
        loadSSP("2445161");
    }
    else
    {
        // 对联
        if ($.inArray(window.pageType, adconfig.close.couplet) == -1)
        {
            loadSSP("2445163");
        }
    }
}