!function(n,a,t,e){var A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAAABGdBTUEAALGPC/xhBQAAAhpJREFUOBHFVU2L2lAUHU0nExNHbRq1BkSrSFH8QBdu3QnuxYUr3bj2f/gHRPwrdmVdCLqxIK0KighqWz+mNVPaavtuhgtqnpnposyD5N53z7k57yX33RhKpdK7q2cYxmfQVCUfFU6n06/z+fwbvQWaTCYml8t5gBOJRKzZbFb19XJenIPhcNgaj8dfYZxlWSYWizkZhjFgDGyr1VqMRqMd+JlMRrbZbDd2u/3G4XBwTqeTBx8wGLvd7reiKPuH2cNdI+zz+W4FQbjudrtfkNjr9Vboo91sNr/A9/v9QjKZlFer1X2xWHxLclnIBx+5nU5n0Wg0FjgHqxGG4Hw+V9rt9lfw9YbRaDQUCoVgtVr9MB6P1d2TRYjRaFSq1+uf9HKpwnoJx5jL5eKazebM4/EIcAHmdrvNkiSZUqmU45g7HA6/zWaze4xphDmOY7bb7U8k6FmLxXItiiJ3zNnv938mk8mdLMvqQhBbLpc/dIXNZjM7nU6/Y4Ke7ff7d3AFAoFbUoQnxYd5h8PhCjg4R6vZMQiTQnnSjvEhpAmFB4OBpgABD4VCUrlcfo9ctBphcgx4eC1IeKqt1WofadxKpSLS4ifC5Ltw5Bsd1uu1elRoCZdiiUTiJQ2DyqfFT4SDwaCVnNnPNOJjMdKxqDs7bzz4HMP5T4Lneea8yyD5kvV6vTw5xwoNv4RpevW/ioLYJVE9TCNMW/X/iP0FJ9WyNfNE5tcAAAAASUVORK5CYII=",r='<img class="append_mark_img" style="display:block;position:absolute;left:0;bottom:0;width:30px;height:16px" src="'+A+'">',i=function p(){if(p.arguments.length)if(isArray(p.arguments[0])&&p.arguments[0].length>0)appendAdMark(p.arguments[0]);else{var n=Array.apply(null,arguments);appendAdMark(n)}};appendAdMark=function(n){if(isArray(n))try{n.length>0&&n.forEach(paste)}catch(a){for(var t=0;t<n.length;t++)paste(n[t])}},paste=function(a,t,e){a.each(function(a){var t=n(this);"static"===t.css("position")?t.css({position:"relative"}).append(r):t.append(r)})},isArray=function(n){return n instanceof Array},a.appendMark=i}(jQuery,window,document);