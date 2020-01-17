(function(window,undefined){/*
 ral v1.6.1
 Copyright (c) @2013-2019 Rakuten, Inc
 Date : 2019-05-23
*/
'use strict';window.RAL=window.RAL||{};
RAL.live||function(e,g){var f=e.JSON||{};"function"!==typeof f.stringify&&(f.stringify=function(a,b,c){function d(a,b){var c,h,n,f,q=e,l,k=b[a];k&&"object"===typeof k&&"function"===typeof k.toJSON&&(k=k.toJSON(a));"function"===typeof m&&(k=m.call(b,a,k));switch(typeof k){case "string":return p(k);case "number":return isFinite(k)?String(k):"null";case "boolean":case "null":return String(k);case "object":if(!k)return"null";e+=g;l=[];if("[object Array]"===Object.prototype.toString.apply(k)){f=k.length;
for(c=0;c<f;c+=1)l[c]=d(c,k)||"null";n=0===l.length?"[]":e?"[\n"+e+l.join(",\n"+e)+"\n"+q+"]":"["+l.join(",")+"]";e=q;return n}if(m&&"object"===typeof m)for(f=m.length,c=0;c<f;c+=1)"string"===typeof m[c]&&(h=m[c],(n=d(h,k))&&l.push(p(h)+(e?": ":":")+n));else for(h in k)Object.prototype.hasOwnProperty.call(k,h)&&(n=d(h,k))&&l.push(p(h)+(e?": ":":")+n);n=0===l.length?"{}":e?"{\n"+e+l.join(",\n"+e)+"\n"+q+"}":"{"+l.join(",")+"}";e=q;return n}}function p(a){var b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var b={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"}[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}var e="",m,g="",h;if("number"===typeof c)for(h=0;h<c;h+=1)g+=" ";else"string"===typeof c&&(g=c);if((m=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return d("",{"":a})});"function"!==typeof f.parse&&
(f.parse=function(a,b){function c(a,d){var e,f,h=a[d];if(h&&"object"===typeof h)for(e in h)Object.prototype.hasOwnProperty.call(h,e)&&(f=c(h,e),f!==g?h[e]=f:delete h[e]);return b.call(a,d,h)}var d;d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;a=String(a);d.lastIndex=0;d.test(a)&&(a=a.replace(d,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));return/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?(d=eval("("+a+")"),"function"===typeof b?c({"":d},""):d):null});RAL.a={p:"acc",Ha:"accu",Ia:"afid",Ja:"altitude",Ka:"altaccu",La:"_ra",Ma:"astime",ha:"bln",Na:"cc",Oa:"tis",Pa:"chkout",Qa:"chkpt",Ra:"cntln",Sa:"cycode",R:"cp",D:"etype",Ua:"flv",Va:"genre",Wa:"gol",Xa:"tms",Ya:"head",ia:"ifr",ja:"jav",Za:"lat",$a:"ldtime",S:"loc",ab:"long",ka:"navtype",la:"online",bb:"pgid",hc:"pgl",
cb:"pgn",eb:"pgt",T:"ckp",U:"ref",URL:"url",fb:"reqc",gb:"rqtime",ma:"res",na:"ltm",hb:"sq",q:"aid",r:"cks",oa:"cks2",pa:"use_cks",ib:"speed",ra:"tzo",V:"ua",VERSION:"ver",jb:"sresv",qa:"tid"};RAL.rb="1.6.1";RAL.qb="OO1OO";RAL.kb=500;RAL.N="_ra";RAL.lb=31;RAL.s="RAL";RAL.mb="ROFL";RAL.sa="RTID";RAL.ic="RFPR";RAL.X="cpkg_none=";RAL.W="?"+RAL.X;RAL.ob=256;RAL.pb=262144;RAL.nb=16;RAL.eventLog=[];RAL.jc=function(){};RAL.m=function(a){return"string"===typeof a||"[object String]"===Object.prototype.toString.call(a)};
RAL.g=function(a){return RAL.m(a)?a.replace(/^\s+|\s+$/g,""):null};RAL.v=function(a){return"[object Array]"===Object.prototype.toString.call(a)};RAL.w=function(a){return!!a&&"[object Object]"===Object.prototype.toString.call(a)};RAL.ba=function(a,b){if(a&&"object"===typeof a&&b&&"object"===typeof b){for(var c in b)a[c]=b[c];return!0}return!1};RAL.i=function(a,b){var c=RAL.g(a);if(null===c)return null;b===g&&(b=document.cookie);var d=b?b.split(";"):"",e;for(e=d.length-1;0<=e;e--){var f=d[e].indexOf("=");
if(0<f&&RAL.g(d[e].substr(0,f))===c)return d[e].substr(f+1)}return null};RAL.J=function(a,b,c,d){a=RAL.g(a);b=RAL.g(b);c=parseInt(c,10);if(null!==a&&null!==b&&!isNaN(c)){var e=new Date;0>=c?e.setTime(0):e.setDate(e.getDate()+c);document.cookie=a+"="+b+"; Expires="+e.toGMTString()+";"+(d?" Domain=."+d+";":"")+" Path=/;"+("https:"===location.protocol?" Secure;":"")}};RAL.Yb=function(a){RAL.J(a,"",0)};RAL.tb=function(){var a,b;for(b=a="";36>a++;b+=51*a&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):
"-");return b};RAL.Ca=function(a){var b=RAL.s+"TEST";RAL.J(b,b,1,a);var c=RAL.i(b);RAL.J(b,"",0,a);return c===b};RAL.Db=function(){var a,b=RAL.N,b=RAL.g(b),c=RegExp("^"+b+"=");if(a=a||document.location.search){a=a.replace(/^\?/,"").split("&");for(var d=0;d<a.length;d++)if(c.test(a[d]))return decodeURIComponent(a[d].substring(b.length+1))}return null};RAL.O=function(a){if(!RAL.m(a))return"0000";var b,c=[0,0,0,0];for(b=0;b<a.length;++b)c[b%4]+=a.charCodeAt(b);for(b=a=0;4>b;++b)a=(a<<4)+c[b]%16;a^=Math.floor(65536*
Math.random());return("0000"+a.toString(16)).slice(-4)};RAL.Da=function(a){try{var b;if(e.Ta&&"function"===typeof e.Ta)b=new CustomEvent(a,{detail:null}),document.dispatchEvent(b);else if(document.createEvent)b=document.createEvent("CustomEvent"),b.initCustomEvent(a,!0,!0,null),document.dispatchEvent(b);else if(document.createEventObject&&document.fireEvent)b=document.createEventObject(),b.detail=null,document.fireEvent("onpropertychange",b);else throw Error("Cannot instantiate event for "+a);}catch(c){}};
RAL.h=function(a){this.c={};a!==g&&RAL.ba(this.c,a)};RAL.h.prototype.Ub=function(a){return null==a?!1:RAL.m(a)?""!==RAL.g(a):"number"===typeof a?!isNaN(a)&&isFinite(a):!0};RAL.h.prototype.d=function(a,b){var c=RAL.g(a);null!==c&&""!==c&&this.Ub(b)&&(this.c[c]="string"===typeof b?RAL.g(b):b)};RAL.h.prototype.remove=function(a){a=RAL.g(a);null===a||""===a||a in this.c&&delete this.c[a]};RAL.h.prototype.setParameters=function(a){if(RAL.w(a))for(var b in a)this.d(b,a[b])};RAL.h.prototype.Ga=function(a){if(RAL.w(a))for(var b in a)if(this.e(b)){var c=
this.get(b);RAL.v(c)&&RAL.v(a[b])?this.d(b,c.concat(a[b])):RAL.w(c)&&RAL.w(a[b])?RAL.ba(c,a[b]):this.d(b,a[b])}else this.d(b,a[b])};RAL.h.prototype.gc=function(){return f.stringify(this.c)};RAL.h.prototype.get=function(a){a=RAL.g(a);return null===a||""===a?null:a in this.c?this.c[a]:null};RAL.h.prototype.e=function(a){a=RAL.g(a);return null===a||""===a?!1:a in this.c};RAL.h.prototype.fc=function(){var a={},b;for(b in this.c)a[b]=this.c[b];return a};RAL.M=function(){};RAL.M.prototype.C=function(){};
RAL.M.prototype.o=function(){};RAL.M.prototype.K=function(){};RAL.M.prototype.e=function(){};RAL.L=function(){this.n=RAL.s};RAL.L.prototype.C=function(a,b){if(1E3<b.length)return!1;RAL.J(this.n+a,encodeURIComponent(String(b)),365);var c=RAL.i(this.n+a);return null!==c&&decodeURIComponent(c)===b};RAL.L.prototype.o=function(a){a=RAL.i(this.n+a);return null==a?null:decodeURIComponent(a)};RAL.L.prototype.K=function(a){RAL.Yb(this.n+a)};RAL.L.prototype.e=function(a){return null!==this.o(a)};RAL.F=function(){this.n=
RAL.s};RAL.F.prototype.C=function(a,b){try{return e.localStorage.setItem(this.n+a,b),!0}catch(c){}return!1};RAL.F.prototype.o=function(a){return e.localStorage.getItem(this.n+a)};RAL.F.prototype.K=function(a){e.localStorage.removeItem(this.n+a)};RAL.F.prototype.e=function(a){return null!==this.o(a)};RAL.G=function(){};RAL.G.prototype.C=function(){return!0};RAL.G.prototype.o=function(){return null};RAL.G.prototype.K=function(){};RAL.G.prototype.e=function(){return!1};RAL.H=function(){this.u={}};RAL.H.prototype.C=
function(a,b){this.u[a]=b;return!0};RAL.H.prototype.o=function(a){return a in this.u?this.u[a]:null};RAL.H.prototype.K=function(a){a in this.u&&delete this.u[a]};RAL.H.prototype.e=function(a){return a in this.u};RAL.b=function(a,b,c){this.Ba=new Date;a=RAL.g(a);if(!a)throw"Missing URL!";this.t=a;this.k=[a];this.xa=this.Q=g;this.Xb="pv";this.ga="Rp";this.ca="Rz";this.aa=navigator&&"onLine"in navigator?navigator.onLine:!0;this.c=new RAL.h;this.A=this.Ib();this.f=null;this.ya=RAL.kb;this.B=b||RAL.mb;
this.Fa=c||function(){return!0};this.Y=!0;this.l=[];this.Z=(b=this.ta())?8<=b:!0;this.ea=0;e.addEventListener?(e.addEventListener("online",this.I(this.P,this,[this]),!1),e.addEventListener("offline",this.I(this.P,this,[this]),!1)):document.body&&(document.body.ononline=this.I(this.P,this,[this]),document.body.onoffline=this.I(this.P,this,[this]));b=RAL.Db()||RAL.i(RAL.N)||"";/^[0-9]+\|[0-9a-f-]+$/.test(b)||(b=[(new Date).getTime(),RAL.tb()].join("|"));var d;c=(document.location.hostname||"").split(".");
for(a=2;3>=a&&!d;a++){var p=c.slice(-a).join(".");RAL.Ca(p)&&(d=p)}RAL.J(RAL.N,b,RAL.lb,d);RAL.Da("RA_PUBLISH")};RAL.b.prototype.xb=function(){return 2048-(this.t.length+RAL.W.length)};RAL.b.prototype.setMainReceiver=function(a){if(!(0<this.ea)&&RAL.m(a)){a=this.wa(a);this.k[0]=a;for(var b=this.k.length-1;0<b;--b)this.k[b]===a&&this.k.splice(b,1)}};RAL.b.prototype.addReceiver=function(a){if(!(0<this.ea)&&RAL.m(a)){a=this.wa(a);for(var b=0;b<this.k.length;++b)if(this.k[b]===a)return;this.k.push(a)}};
RAL.b.prototype.wa=function(a){a=a.match(/^(?:https?:)?(?:\/\/)?(.*)$/);return("https:"==document.location.protocol?"https://":"http://")+a[1]};RAL.b.prototype.I=function(a,b,c){return function(){var d=c||arguments,d=Array.prototype.slice.call(arguments[0]?arguments:[e.event],0),d=d.concat(c);return a.apply(b||e,d)}};RAL.b.prototype.Ea=function(a){if(!this.Fa||!RAL.v(a)||0===a.length)return null;var b=[],c;for(c=0;c<a.length;c++){var d=a[c];this.Fa(f.parse(d))&&b.push(d)}return b};RAL.b.prototype.Nb=
function(){try{return"localStorage"in e&&null!=e.localStorage}catch(a){return!1}};RAL.b.prototype.Ib=function(){return this.Nb()?new RAL.F:RAL.Ca()?new RAL.H:new RAL.G};RAL.b.prototype.ua=function(){if(e.XDomainRequest)return new XDomainRequest;if(e.XMLHttpRequest)return new XMLHttpRequest;if(e.ActiveXObject)try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(a){}return null};RAL.b.prototype.Pb=function(a){return"string"===typeof a&&null!==a&&/^[a-zA-Z]+$/.test(a)};RAL.b.prototype.Qb=function(a){return"string"===
typeof a&&null!==a&&/^[0-9a-zA-Z]+$/.test(a)};RAL.b.prototype.va=function(a){var b=parseInt(a,10);return!isNaN(b)&&0<b&&b==a};RAL.b.prototype.j=function(a){return"object"===typeof a};RAL.b.prototype.setAccountId=function(a){this.va(a)&&this.c.d(RAL.a.p,a)};RAL.b.prototype.setCharSet=function(a){this.j(a)||this.c.d(RAL.a.Oa,a)};RAL.b.prototype.Eb=function(){var a="";if(document.referrer!==g){var a=document.referrer,b=a.match(/^android-app:\/\/([^//]*)/);if(b)switch(b[1]){case "m.facebook.com":a="https://play.google.com/store/apps/details?id=com.facebook.katana";
break;default:a="https://play.google.com/store/apps/details?id="+b[1]}}return a};RAL.b.prototype.Lb=function(){return document.location.href};RAL.b.prototype.setGoalId=function(a){this.j(a)||this.c.d(RAL.a.Wa,a)};RAL.b.prototype.setAffiliateId=function(a){this.j(a)||this.c.d(RAL.a.Ia,a)};RAL.b.prototype.Sb=function(){if(!navigator.mimeTypes)return!1;var a,b=/^application\/x-java-applet;jpi-version=.*/;for(a=0;a<navigator.mimeTypes.length;a++)if(b.test(navigator.mimeTypes[a].type))return!0;return!1};
RAL.b.prototype.setServiceId=function(a){this.va(a)&&this.c.d(RAL.a.q,a)};RAL.b.prototype.setVersion=function(a){this.j(a)||this.c.d(RAL.a.VERSION,a)};RAL.b.prototype.setCurrencyCode=function(a){"string"===typeof a&&""!==a&&3<=a.length&&this.Pb(a)&&this.c.d(RAL.a.Sa,a.substr(0,3))};RAL.b.prototype.setSearchQuery=function(a){this.j(a)||this.c.d(RAL.a.hb,a)};RAL.b.prototype.setContentLanguage=function(a){this.j(a)||this.c.d(RAL.a.Ra,a)};RAL.b.prototype.setCampaignCode=function(a){this.Qb(a)&&this.c.d(RAL.a.Na,
a)};RAL.b.prototype.setCheckPoints=function(a){isNaN(parseInt(a,10))||this.c.d(RAL.a.Qa,a)};RAL.b.prototype.setCheckout=function(a){a=parseInt(a,10);switch(a){case 10:case 20:case 30:case 40:case 50:this.c.d(RAL.a.Pa,a)}};RAL.b.prototype.setRequestResult=function(a){this.j(a)||this.c.d(RAL.a.fb,a)};RAL.b.prototype.ub=function(a){var b=a.getMonth()+1,c=a.getDate(),d=a.getHours(),e=a.getMinutes(),f=a.getSeconds();return a.getFullYear()+"-"+(10>b?"0":"")+b+"-"+(10>c?"0":"")+c+" "+(10>d?"0":"")+d+":"+
(10>e?"0":"")+e+":"+(10>f?"0":"")+f};RAL.b.prototype.setPageName=function(a){this.j(a)||this.c.d(RAL.a.cb,a)};RAL.b.prototype.setPageType=function(a){this.j(a)||this.c.d(RAL.a.eb,a)};RAL.b.prototype.setGenre=function(a){this.j(a)||this.c.d(RAL.a.Va,a)};RAL.b.prototype.setCustomParameters=function(a){if(a){var b=a;if(this.c.e(RAL.a.R)){var c=this.c.get(RAL.a.R);RAL.ba(c,a)&&(b=c)}this.c.d(RAL.a.R,b)}};RAL.b.prototype.setViewImpressions=function(a){this.c.d(RAL.a.jb,a)};RAL.b.prototype.setParameters=
function(a){this.c.setParameters(a)};RAL.b.prototype.appendParameters=function(a){if(RAL.w(a))for(var b in a)if(this.c.e(b)){var c=this.c.get(b);"object"!==typeof c&&(c=[]);this.c.d(b,[].concat(c).concat(a[b]))}else"object"===typeof a[b]?this.c.d(b,a[b]):this.c.d(b,[a[b]])};RAL.b.prototype.setOptions=function(a){if(RAL.v(a)){for(var b={},c=0,d=a.length;c<d;++c)b[a[c]]=!0;this.Aa(b)}};RAL.b.prototype.Tb=function(){return e.navigator.userAgent!==g&&-1!==e.navigator.userAgent.search(/RAL/i)};RAL.b.prototype.detectFlashVersion=
function(){if(document.images){var a=null,b=!1;if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]){var c=navigator.mimeTypes["application/x-shockwave-flash"];c.enabledPlugin&&c.enabledPlugin.description&&(a=c.enabledPlugin.description,b=!0)}else navigator.plugins&&"Shockwave Flash"in navigator.plugins&&(a=navigator.plugins["Shockwave Flash"].description.match(/[\d]+/g).join("."),b=!0);try{b||(a=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"))}catch(d){}this.c.d(RAL.a.Ua,
a)}};RAL.b.prototype.setCookieNames=function(a,b){RAL.w(a)?(RAL.a.r in a&&(this.ga=a[RAL.a.r]),RAL.a.T in a&&(this.ca=a[RAL.a.T])):(b&&RAL.m(b)&&(this.ga=b),a&&RAL.m(a)&&(this.ca=a))};RAL.b.prototype.Hb=function(){return RAL.i(this.ga)};RAL.b.prototype.Cb=function(){return RAL.i(this.ca)};RAL.b.prototype.vb=function(){return navigator.browserLanguage?navigator.browserLanguage:navigator.language?navigator.language:RAL.qb};RAL.b.prototype.Kb=function(){return-(this.Ba.getTimezoneOffset()/60)};RAL.b.prototype.Mb=
function(){return navigator.userAgent};RAL.b.prototype.Gb=function(){return e.screen.width+"x"+e.screen.height};RAL.b.prototype.ta=function(){if("Microsoft Internet Explorer"===navigator.appName){var a=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/);if(null!==a&&(a=parseFloat(a[1]),!isNaN(a)))return a}return g};RAL.b.prototype.Jb=function(){var a;this.Q?a=this.Q:e.sessionStorage&&(a=e.sessionStorage.getItem(RAL.s+RAL.sa));if(!a)if(a=Math.floor(65536*Math.random()),a=a.toString(16)+(17*a&
65535).toString(16),e.sessionStorage)try{e.sessionStorage.setItem(RAL.s+RAL.sa,a)}catch(b){this.Q=a}else this.Q=a;return a};RAL.b.prototype.Ab=function(){var a=this.xa;a||(this.xa=a=RAL.O(document.location.href)+RAL.O(document.referrer)+RAL.O(navigator.userAgent)+RAL.O((new Date).getTime().toString()));return a};RAL.b.prototype.Fb=function(a){return 0<a.navigationStart&&0<a.domLoading?a.domLoading-a.navigationStart:g};RAL.b.prototype.Bb=function(a){return 0<a.domLoading&&0<a.domContentLoadedEventStart?
a.domContentLoadedEventStart-a.domLoading:g};RAL.b.prototype.zb=function(a){return 0<a.domContentLoadedEventStart&&0<a.domComplete?a.domComplete-a.domContentLoadedEventStart:g};RAL.b.prototype.wb=function(){if("performance"in e&&e.performance.timing){var a=e.performance.timing,b={};b[RAL.a.gb]=this.Fb(a);b[RAL.a.$a]=this.Bb(a);b[RAL.a.Ma]=this.zb(a);return b}return g};RAL.b.prototype.yb=function(){return"performance"in e&&e.performance.navigation?e.performance.navigation.type:g};RAL.b.prototype.Rb=
function(){return e===e.parent||e.isAmp?0:1};RAL.b.prototype.setEvent=function(a){RAL.m(a)&&(this.c.d(RAL.a.D,a),a==this.Xb?this.pageViewEvent():this.da())};RAL.b.prototype.setXHRAllowed=function(a){this.Y=!!a};RAL.b.prototype.pageViewEvent=function(){!this.Tb()&&(this.c.e(RAL.a.p)&&this.c.e(RAL.a.q)||this.Ob())&&(this.Aa(),this.da())};RAL.b.prototype.removeEventLogs=function(){RAL.eventLog=[]};RAL.b.prototype.Aa=function(a){a&&!a[RAL.a.na]||this.c.d(RAL.a.na,this.ub(this.Ba));if(!a||a[RAL.a.URL])this.c.e(RAL.a.URL)||
this.c.d(RAL.a.URL,this.Lb());if(!a||a[RAL.a.U])this.c.e(RAL.a.U)||this.c.d(RAL.a.U,this.Eb());a&&!a[RAL.a.qa]||this.c.d(RAL.a.qa,this.Jb());a&&!a[RAL.a.ra]||this.c.d(RAL.a.ra,this.Kb());a&&!a[RAL.a.ma]||this.c.d(RAL.a.ma,this.Gb());a&&!a[RAL.a.ja]||this.c.d(RAL.a.ja,this.Sb());a&&!a[RAL.a.ha]||this.c.d(RAL.a.ha,this.vb());if(!a||a[RAL.a.V])this.c.e(RAL.a.V)||this.c.d(RAL.a.V,this.Mb());a&&!a[RAL.a.la]||this.c.d(RAL.a.la,this.aa);a&&!a[RAL.a.VERSION]||this.c.d(RAL.a.VERSION,RAL.rb);if(!a||a[RAL.a.S])null===
this.f?this.c.remove(RAL.a.S):this.c.d(RAL.a.S,this.f);a&&!a.perf||this.c.Ga(this.wb());a&&!a[RAL.a.ka]||this.c.d(RAL.a.ka,this.yb());a&&!a[RAL.a.ia]||this.c.d(RAL.a.ia,this.Rb())};RAL.b.prototype.$b=function(a){if(!this.Z)return this.fa([a])?!0:!1;try{var b=this.ua();b&&(b.open("GET",this.t+RAL.W+encodeURIComponent(a),!0),b.withCredentials=!0,b.send(""))}catch(c){return!1}return!0};RAL.b.prototype.ac=function(a){try{document.createElement("img").src=this.t+RAL.W+encodeURIComponent(a)+"&t="+(new Date).getTime()}catch(b){return!1}return!0};
RAL.b.prototype.za=function(a){try{if(0===a.length)return!0;var b=1===a.length?a[0]:"["+a.join(",")+"]",c=this.ua();c&&(c.open("POST",this.t,!0),this.ta()||c.setRequestHeader("Content-type","text/plain; charset=UTF-8"),c.withCredentials=!0,c.send(RAL.X+b))}catch(d){return!1}return!0};RAL.b.prototype.fa=function(a){if(!document.body)return!1;if(0===a.length)return!0;a=1===a.length?a[0]:"["+a.join(",")+"]";var b=document.createElement("iframe");b.name=RAL.s+String(Math.floor(2147483648*Math.random()));
b.style.display="none";document.body.appendChild(b);if(b.contentWindow){b.contentWindow.name=b.name;var c=document.createElement("form");c.target=b.name;c.action=this.t.replace("http:","https:");c.method="POST";c.encoding=c.enctype="text/plain";c.style.display="none";var d=document.createElement("input");d.type="hidden";d.name=RAL.X.replace("=","");d.value=a;c.appendChild(d);document.body.appendChild(c);c.submit();document.body.removeChild(c);document.body.removeChild(b);return!0}return!1};RAL.b.prototype.Zb=
function(a){if(null===a||"object"!==typeof a||0===a.length)return!0;var b=!0;return b=1===a.length?encodeURIComponent(a[0]).length<this.xb()?e.XDomainRequest||!this.Y?this.ac(a[0]):this.$b(a[0]):this.Z&&!e.XDomainRequest?this.za(a):this.fa(a):this.Z&&!e.XDomainRequest&&this.Y?this.za(a):this.fa(a)};RAL.b.prototype.ec=function(a,b){var c=null;if(a.e(RAL.a.p)&&a.e(RAL.a.q)){var d;d=/\bsplash\b/i.test(navigator.userAgent)?"splash_agent":this.Hb();a.d(RAL.a.r,d);/\bra_uid\b/.test(document.cookie)&&(d=
RAL.i("ra_uid"))&&(d=decodeURIComponent(d),(c=d.match(/^"(.*)"$/))&&(d=c[1]),(d=RAL.i("rat_uid",d))&&a.d(RAL.a.r,d));d=RAL.i(RAL.N);a.d(RAL.a.La,d);a.e(RAL.a.r)?(a.d(RAL.a.pa,!0),a.d(RAL.a.oa,a.get(RAL.a.r))):(a.d(RAL.a.pa,!1),a.d(RAL.a.oa,d));a.d(RAL.a.T,this.Cb());this.bc(a);c=a.gc();d=this.$();d.length>=RAL.ob&&(d=this.Ea(d)||d);c.length+d.join().length>RAL.pb&&this.Ea(d);if(this.sb(c)&&(c=null,b))return}if(this.aa){d=this.$();c&&d.push(c);for(var c=Math.min(d.length,RAL.nb),c=d.splice(0,c),e=
!1,g=0;g<this.k.length;++g)this.t=this.k[g],e=this.Zb(c)||e;if(e){this.ea++;for(e=0;e<c.length;++e)try{RAL.eventLog.push(f.parse(c[e]))}catch(m){}RAL.Da("RAT_REQUEST_DONE");this.cc(d)}}};RAL.b.prototype.bc=function(a){var b=["Rg","Rt","BTA001"];if(RAL.v(b))for(var c,d,e=0;e<b.length;e++)c=b[e],d=RAL.i(c),null!==d&&a.d(c,decodeURIComponent(d))};RAL.b.prototype.P=function(a){a=a||e.event;this.aa="online"===a.type};RAL.b.prototype.Ob=function(){return this.A.e(this.B)};RAL.b.prototype.$=function(){return this.A.e(this.B)?
this.A.o(this.B).split("\t"):[]};RAL.b.prototype.cc=function(a){a&&a instanceof Array&&(0===a.length?this.A.K(this.B):this.A.C(this.B,a.join("\t")))};RAL.b.prototype.sb=function(a){var b=!1;a&&(b=this.$(),b.push(a),b=this.A.C(this.B,b.join("\t")));return b};RAL.b.prototype.dc=function(a){this.f={};this.f[RAL.a.Za]=a.coords.latitude;this.f[RAL.a.ab]=a.coords.longitude;this.f[RAL.a.Ha]=a.coords.accuracy;a.coords.speed&&(this.f[RAL.a.ib]=a.coords.speed);a.coords.altitude&&(this.f[RAL.a.Ja]=a.coords.altitude);
a.coords.heading&&(this.f[RAL.a.Ya]=a.coords.heading);a.coords.altitudeAccuracy&&(this.f[RAL.a.Ka]=a.coords.altitudeAccuracy);this.f[RAL.a.Xa]=a.timestamp};RAL.b.prototype.Wb=function(){};RAL.b.prototype.getLocation=function(){navigator.geolocation&&(this.f=null,navigator.geolocation.getCurrentPosition(this.I(this.dc,this,[this]),this.Wb))};RAL.b.prototype.setReportingInterval=function(a){a=parseInt(a,10);!isNaN(a)&&0<a&&(this.ya=a)};RAL.b.prototype.da=function(){this.c.e(RAL.a.p)&&this.c.e(RAL.a.q)&&
(this.c.d(RAL.a.bb,this.Ab()),this.l.push(this.c),this.c=new RAL.h)};RAL.b.prototype.Vb=function(){this.da();for(var a=0,b=1,c,d;b<this.l.length;)c=this.l[a],d=this.l[b],c.get(RAL.a.p)!=d.get(RAL.a.p)||c.get(RAL.a.q)!=d.get(RAL.a.q)||"scroll"!==c.get(RAL.a.D)&&"appear"!==c.get(RAL.a.D)||c.get(RAL.a.D)!==d.get(RAL.a.D)?(a++,b++):(c.Ga(d.fc()),this.l.splice(b,1))};RAL.b.prototype.processQueue=function(){var a=this;if(RAL.v(RAL.callQueue))try{for(var b;0<RAL.callQueue.length;){b=RAL.callQueue.shift();
var c=b[0];c in this&&this[c].apply(this,b.slice(1))}for(this.Vb();0<this.l.length;){var d=1==this.l.length;this.ec(this.l.shift(),!d)}}catch(f){}e.setTimeout(function(){a.processQueue()},this.ya)};var r="https:"==document.location.protocol?"https://":"http://";(new RAL.b(r+"rat.rakuten.co.jp/")).processQueue();RAL.live=!0}(window);})(window);