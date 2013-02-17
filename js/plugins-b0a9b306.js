window.console&&console.log||!function(){for(var e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],o=n.length,i=window.console={};o--;)i[n[o]]=e}(),/*!
* Baseline.js 1.0
*
* Copyright 2012, Daniel Eden http://daneden.me
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Wed June 20 11:39:00 2012 GMT
*/
function(e){e.fn.baseline=function(n){var o,i,t,r=0;return this.each(function(){var a=e(this),c=function(e){if("number"==typeof e)t=e;else if("object"==typeof e)for(key in e){var n=parseInt(key);document.width>n&&n>=r&&(t=e[key],r=n)}a.css("maxHeight","none"),o=a.height(),i=Math.floor(o/t)*t,a.css("maxHeight",i)};c(n),e(window).resize(function(){c(n)})})}}(jQuery);