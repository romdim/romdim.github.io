!function(e,t){if("function"!=typeof e.createEvent)return!1;var o,n,r,i,u,a,s,h,c,p=function(e){var t=e.toLowerCase(),o="MS"+e;return navigator.msPointerEnabled?o:!!window.PointerEvent&&t},d=function(e){return"on"+e in window&&e},T={useJquery:!t.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:t.SWIPE_THRESHOLD||100,tapThreshold:t.TAP_THRESHOLD||150,dbltapThreshold:t.DBL_TAP_THRESHOLD||200,longtapThreshold:t.LONG_TAP_THRESHOLD||1e3,tapPrecision:t.TAP_PRECISION/2||30,justTouchEvents:t.JUST_ON_TOUCH_DEVICES},g=!1,l=d("touchstart")||p("PointerDown"),v=d("touchend")||p("PointerUp"),f=d("touchmove")||p("PointerMove"),E=function(e){return!e.pointerId||void 0===o||e.pointerId===o},w=function(e,t,o){for(var n=t.split(" "),r=n.length;r--;)e.addEventListener(n[r],o,!1)},m=function(e){var t=Boolean(e.targetTouches&&e.targetTouches.length);switch(!0){case Boolean(e.target.touches):return e.target.touches[0];case t&&void 0!==e.targetTouches[0].pageX:return e.targetTouches[0];case t&&Boolean(e.targetTouches[0].touches):return e.targetTouches[0].touches[0];default:return e}},P=function(e){return(e.targetTouches||e.target.touches||[]).length>1},y=function(){return(new Date).getTime()},_=function(t,o,i,u){var a=e.createEvent("Event");if(a.originalEvent=i,(u=u||{}).x=n,u.y=r,T.useJquery&&(a=jQuery.Event(o,{originalEvent:i}),jQuery(t).trigger(a,u)),a.initEvent){for(var s in u)a[s]=u[s];a.initEvent(o,!0,!0),t.dispatchEvent(a)}for(;t;)t["on"+o]&&t["on"+o](a),t=t.parentNode},H=0;w(e,l+(T.justTouchEvents?"":" mousedown"),(function(e){if(E(e)&&!P(e)&&(o=e.pointerId,"mousedown"!==e.type&&(g=!0),"mousedown"!==e.type||!g)){var t=m(e);i=n=t.pageX,u=r=t.pageY,c=setTimeout((function(){_(e.target,"longtap",e),s=e.target}),T.longtapThreshold),a=y(),H++}})),w(e,v+(T.justTouchEvents?"":" mouseup"),(function(e){if(E(e)&&!P(e))if(o=void 0,"mouseup"===e.type&&g)g=!1;else{var t=[],p=y(),d=u-r,l=i-n;if(clearTimeout(h),clearTimeout(c),l<=-T.swipeThreshold&&t.push("swiperight"),l>=T.swipeThreshold&&t.push("swipeleft"),d<=-T.swipeThreshold&&t.push("swipedown"),d>=T.swipeThreshold&&t.push("swipeup"),t.length){for(var v=0;v<t.length;v++){var f=t[v];_(e.target,f,e,{distance:{x:Math.abs(l),y:Math.abs(d)}})}H=0}else i>=n-T.tapPrecision&&i<=n+T.tapPrecision&&u>=r-T.tapPrecision&&u<=r+T.tapPrecision&&a+T.tapThreshold-p>=0&&(_(e.target,H>=2&&s===e.target?"dbltap":"tap",e),s=e.target),h=setTimeout((function(){H=0}),T.dbltapThreshold)}})),w(e,f+(T.justTouchEvents?"":" mousemove"),(function(e){if(E(e)&&("mousemove"!==e.type||!g)){var t=m(e);n=t.pageX,r=t.pageY}})),t.tocca=function(e){for(var t in e)T[t]=e[t];return T}}(document,window);
