var isMobile=false;function randomRange(b,a){return b+Math.floor((a-b)*Math.random())}var Slider=(function(){var w=['<div class="slider">','<div class="thumb"></div>','<div class="track"></div>','<div class="track track-fill"></div>',"</div>"].join("");var m={};var f=[];var e=20;var p=false;var u=0;var b=100;var g=2;var x="blue";var i="black";var t=20;var v="red";var c;function o(A,z,B){if(A>B){A=B}else{if(A<z){A=z}}return A}function j(D){var E=m[c].slider;var A=m[c].thumb;var G=m[c].trackFill;var B=m[c].maxOffset;var F=m[c].minOffset;var C=m[c].thumbWidth;var z=D-E.offsetLeft;z=o(z,F,B);m[c]._currentOffset=z;A.style.left=z+"px";G.style.width=z+C/2+"px";return z/B}function h(z){z.preventDefault()}function q(B){var F=j(B);var E=m[c].maxValue;var D=m[c].minValue;var C=D+(E-D)*F;var A=s(C,D,E);m[c].currentValue=C;var z=m[c].onChange;if(z){z.call(this,C,A)}return{value:C,progress:A}}function l(z){return z.pageX!=undefined?z.pageX:z.touches[0].pageX}function y(E){var F=E.currentTarget;var B=F.getAttribute("data-slider");if(f.indexOf(B)>-1){return}c=B;var D=m[c].currentValue;var C=s(D,m[c].minValue,m[c].maxValue);var A=m[c].onStart;if(A){var z=A.call(this,D,C);if(z==false){return false}}p=true;q(l(E))}function r(z){if(!p){return}var A=q(l(z))}function k(B){if(!p){return}var A=m[c].currentValue;var z=s(A,m[c].minValue,m[c].maxValue);p=false;var C=m[c].onStop;if(C){C.call(this,A,z)}}function d(z){return parseInt(window.getComputedStyle(z).width)}function n(z){return parseInt(window.getComputedStyle(z).height)}function s(B,A,z){return(B-A)/(z-A)}function a(J){var C=J.el;C.innerHTML=w;var D=C.querySelector(".slider");var L=C.querySelector(".track-fill");var A=C.querySelector(".thumb");var F="slider"+randomRange(1,1000);D.setAttribute("data-slider",F);J.style=J.style||{};var N=J.style.thumbWidth||t;var B=J.style.thumbColor||v;var M=J.style.trackHeight||g;var G=J.style.trackColor||x;var H=J.style.filledColor||i;var I=d(D);var K=n(D);A.style.width=N+"px";A.style.height=N+"px";A.style.backgroundColor=B;A.style.top=(K-N)/2+"px";A.style.borderRadius=N/2+"px";var E=document.querySelector(".track");E.style.height=M+"px";E.style.backgroundColor=G;E.style.marginTop=M/-2+"px";var L=document.querySelector(".track-fill");L.style.height=M+"px";L.style.backgroundColor=H;L.style.marginTop=M/-2+"px";u=J.min;var z=m[F]={slider:D,trackFill:L,thumb:A,currentValue:J.value||u,minValue:J.min||u,maxValue:J.max||b,_currentOffset:0,minOffset:0,maxOffset:I-N,thumbWidth:N,onStart:J.onStart,onChange:J.onChange,onStop:J.onStop};var O=s(z.currentValue,z.minValue,z.maxValue);c=F;j(O*z.maxOffset+D.offsetLeft);if(!isMobile){D.addEventListener("mousedown",y)}else{D.addEventListener("touchstart",y)}D.addEventListener("dragstart",h);D.addEventListener("dragover",h);D.addEventListener("drop",h);return F}if(!isMobile){document.addEventListener("mousemove",r)}else{document.addEventListener("touchmove",r)}if(!isMobile){document.addEventListener("mouseup",k)}else{document.addEventListener("touchend",k)}window.addEventListener("resize",function(){for(var A in m){var z=m[A];var B=d(z.slider);var H=z.thumbWidth;var C=z.maxOffset=(B-H);var E=z.minOffset;var I=z.currentValue;var G=z.minValue;var D=z.maxValue;var F=s(I,G,D)*C;j(F+z.slider.offsetLeft)}});return{init:function(A){var z=a(A);return{setValue:function(F){var B=m[z];var E=B.minValue;var G=B.maxValue;var C=B.maxOffset;F=o(F,E,G);var D=s(F,E,G)*C;j(D+B.slider.offsetLeft)},getValue:function(){return m[z].currentValue},getProgress:function(){var B=m[z];return(B.currentValue-B.minValue)/(B.maxValue-B,minValue)},destory:function(){var B=m[z].slider;B.parentNode.removeChild(B)},disable:function(){f.push(z)},enable:function(){var B=f.indexOf(z);if(B>-1){f.splice(B,1)}}}}}})();