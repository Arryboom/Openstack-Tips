var hotword = [
    '王菲',
    '谢霆锋',
    '心花路放',
    '亲爱的',
    '离婚',
    '黄奕前夫'
];


$(document).ready(function(){
    if (!$('#search-keyword').val())
    {
        $('#search-keyword').val(hotword[Math.floor(Math.random() * hotword.length + 1) - 1]);
    }
});