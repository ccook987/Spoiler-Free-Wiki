(function(){function D(a){var b=1,c;if(a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b};(function(){function a(){for(var a=pa,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function b(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}function c(a,b){if(!a||b===Ud.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}function d(a){var b=md.exec(a);if(b){var c=b[2],d=b[4];a=b[1];d&&(a=a+c+d)}return a}function e(a,b,c){function e(a){a=d(a);var b=a.charAt(a.length-
1);a&&"&"!==b&&(a+="&");return a+he}c=void 0===c?!1:c;var Sd=de.exec(b);if(!Sd)return"";b=Sd[1];var Wd=Sd[2]||"";Sd=Sd[3]||"";var he="_gl="+a;c?Sd="#"+e(Sd.substring(1)):Wd="?"+e(Wd.substring(1));return""+b+Wd+Sd}function g(a,b,d){for(var e={},Sd={},Wd=Zd().U,g=0;g<Wd.length;++g){var he=Wd[g];(!d||he.forms)&&c(he.ta,b)&&(he.H?Od(Sd,he.pa()):Od(e,he.pa()))}Td(e)&&(b=ee(e),d?q(b,a):h(b,a,!1));!d&&Td(Sd)&&(d=ee(Sd),h(d,a,!0))}function h(a,b,c){b.href&&(a=e(a,b.href,void 0===c?!1:c),ld.test(a)&&(b.href=
a))}function q(a,b){if(b&&b.action){var c=(b.method||"").toLowerCase();if("get"===c){c=b.childNodes||[];for(var d=!1,Sd=0;Sd<c.length;Sd++){var Wd=c[Sd];if("_gl"===Wd.name){Wd.setAttribute("value",a);d=!0;break}}d||(c=Ud.createElement("input"),c.setAttribute("type","hidden"),c.setAttribute("name","_gl"),c.setAttribute("value",a),b.appendChild(c))}else"post"===c&&(a=e(a,b.action),ld.test(a)&&(b.action=a))}}var y=this,oa=function(a,b){a=a.split(".");var c=y;a[0]in c||"undefined"==typeof c.execScript||
c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b},pd=function(a){var b=[];if(Array.prototype.indexOf)return a=b.indexOf(a),"number"==typeof a?a:-1;for(var c=0;c<b.length;c++)if(b[c]===a)return c;return-1},Od=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Td=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ld=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Vd=window,Ud=document,
Pd=function(a,b){Ud.addEventListener?Ud.addEventListener(a,b,!1):Ud.attachEvent&&Ud.attachEvent("on"+a,b)},Qd=/:[0-9]+$/,mc=function(a,b){var c=function(a){return a?a.replace(":","").toLowerCase():""};c=c(a.protocol)||c(Vd.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":a=c;break;case "host":a=(a.hostname||Vd.location.hostname).replace(Qd,"").toLowerCase();break;case "port":a=String(Number(a.hostname?a.port:Vd.location.port)||("http"==c?80:"https"==c?443:""));break;case "path":a=
"/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;a=a.split("/");0<=pd(a[a.length-1])&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a},w=function(a){var b=document.createElement("a");a&&(ld.test(a),b.href=a);a=b.pathname;"/"!==a[0]&&(a="/"+a);var c=b.hostname.replace(Qd,"");return{href:b.href,
protocol:b.protocol,host:b.host,hostname:c,pathname:a,search:b.search,hash:b.hash,port:b.port}},pa,Md,lc=function(c){pa=pa||b();Md=Md||a();for(var d=[],e=0;e<c.length;e+=3){var g=e+1<c.length,h=e+2<c.length,Sd=c.charCodeAt(e),q=g?c.charCodeAt(e+1):0,y=h?c.charCodeAt(e+2):0,oa=Sd>>2;Sd=(Sd&3)<<4|q>>4;q=(q&15)<<2|y>>6;y&=63;h||(y=64,g||(q=64));d.push(pa[oa],pa[Sd],pa[q],pa[y])}return d.join("")},Nd=function(c){function d(a){for(;g<c.length;){var b=c.charAt(g++),d=Md[b];if(null!=d)return d;if(!/^[\s\xa0]*$/.test(b))throw Error("Unknown base64 encoding at char: "+
b);}return a}pa=pa||b();Md=Md||a();for(var e="",g=0;;){var h=d(-1),Sd=d(0),q=d(64),y=d(64);if(64===y&&-1===h)return e;e+=String.fromCharCode(h<<2|Sd>>4);64!=q&&(e+=String.fromCharCode(Sd<<4&240|q>>2),64!=y&&(e+=String.fromCharCode(q<<6&192|y)))}},Yd,Zd=function(){var a={},b=Vd.J;Vd.J=void 0===b?a:b;a=Vd.J;(b=a.Z)&&b.U||(b={U:[]},a.Z=b);return b},ce=/(.*?)\*(.*?)\*(.*)/,de=/([^?#]+)(\?[^#]*)?(#.*)?/,md=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ee=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=
a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(lc(String(d))))}a=b.join("*");return["1",$d(a),a].join("*")},$d=function(a,b){a=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.la||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*");if(!(b=Yd)){b=Array(256);for(var c=0;256>c;c++){for(var d=c,e=0;8>e;e++)d=d&1?d>>>1^3988292384:d>>>1;b[c]=d}}Yd=b;b=4294967295;for(c=0;c<a.length;c++)b=b>>>8^Yd[(b^
a.charCodeAt(c))&255];return((b^-1)>>>0).toString(36)},ae=function(a){return function(b){var c=w(Vd.location.href),d=c.search.replace("?","");a:{for(var e=d.split("&"),g=0;g<e.length;g++){var h=e[g].split("=");if("_gl"==decodeURIComponent(h[0]).replace(/\+/g," ")){e=h.slice(1).join("=");break a}}e=void 0}b.query=fe(e||"")||{};e=mc(c,"fragment");g=e.match(md);b.H=fe(g&&g[3]||"")||{};a&&be(c,d,e)}},be=function(a,b,c){function e(a,b){a=d(a);a.length&&(a=b+a);return a}Vd.history&&Vd.history.replaceState&&
(md.test(b)||md.test(c))&&(a=mc(a,"path"),b=e(b,"?"),c=e(c,"#"),Vd.history.replaceState({},void 0,""+a+b+c))},fe=function(a){var b=void 0===b?3:b;try{if(a){var c=ce.exec(a);if(c&&"1"===c[1]){var d=c[2],e=c[3];a:{for(a=0;a<b;++a)if(d===$d(e,a)){var g=!0;break a}g=!1}if(g){b={};var h=e?e.split("*"):[];for(e=0;e<h.length;e+=2)b[h[e]]=Nd(h[e+1]);return b}}}}catch(se){}},ge=function(a){try{a:{var b=a.target||a.srcElement||{};for(a=100;b&&0<a;){if(b.href&&b.nodeName.match(/^a(?:rea)?$/i)){var c=b;break a}b=
b.parentNode;a--}c=null}if(c){var d=c.protocol;"http:"!==d&&"https:"!==d||g(c,c.hostname,!1)}}catch(te){}},Xd=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=mc(w(b.action),"host");g(b,c,!0)}}catch(re){}};oa("google_tag_data.glBridge.auto",function(a,b,c,d){var e=Zd();e.V||(Pd("mousedown",ge),Pd("keyup",ge),Pd("submit",Xd),e.V=!0);a={pa:a,ta:b,H:"fragment"===c,forms:!!d};Zd().U.push(a)});oa("google_tag_data.glBridge.decorate",function(a,b,c){c=!!c;a=ee(a);if(b.tagName){if("a"==
b.tagName.toLowerCase())return h(a,b,c);if("form"==b.tagName.toLowerCase())return q(a,b)}if("string"==typeof b)return e(a,b,c)});oa("google_tag_data.glBridge.generate",ee);oa("google_tag_data.glBridge.get",function(a,b){var c=ae(!!b);b=Zd();b.data||(b.data={query:{},H:{}},c(b.data));c={};if(b=b.data)Od(c,b.query),a&&Od(c,b.H);return c})})(window);var f=function(a){this.f=a||[]};f.prototype.set=function(a){this.f[a]=!0};f.prototype.encode=function(){for(var a=[],b=0;b<this.f.length;b++)this.f[b]&&(a[Math.floor(b/6)]^=1<<b%6);for(b=0;b<a.length;b++)a[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b]||0);return a.join("")+"~"};var aa=new f;function k(a){aa.set(a)}var da=function(a){a=a.get(ba);ca(a)||(a=[]);a=new f(a);for(var b=aa.f.slice(),c=0;c<a.f.length;c++)b[c]=b[c]||a.f[c];return(new f(b)).encode()};var l=function(a){return"function"==typeof a},ca=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},m=function(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")},n=function(a,b){return 0==a.indexOf(b)},ea=function(a){return a?a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},r=function(a){var b=p.createElement("img");b.width=1;b.height=1;b.src=a;return b},t=function(){},u=function(a){if(encodeURIComponent instanceof Function)return encodeURIComponent(a);k(28);return a},
v=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){k(27)}},cb=/^[\w\-:/.?=&%!\[\]]+$/,fa=function(a,b,c){a&&(c?(c="",b&&cb.test(b)&&(c=' id="'+b+'"'),cb.test(a)&&p.write("<script"+c+' src="'+a+'">\x3c/script>')):(c=p.createElement("script"),c.type="text/javascript",c.async=!0,c.src=a,b&&(c.id=b),a=p.getElementsByTagName("script")[0],a.parentNode.insertBefore(c,a)))},sd=function(a,b){return ja(p.location[b?"href":"search"],a)},ja=
function(a,b){return(a=a.match("(?:&|#|\\?)"+u(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==a.length?a[1]:""},td=function(){var a=""+p.location.hostname;return 0==a.indexOf("www.")?a.substring(4):a},nd=function(a,b){var c=a.indexOf(b);if(5==c||6==c)if(a=a.charAt(c+b.length),"/"==a||"?"==a||""==a||":"==a)return!0;return!1},ha=function(a,b){var c=p.referrer;if(/^(https?|android-app):\/\//i.test(c)){if(a)return c;a="//"+p.location.hostname;if(!nd(c,a))return b&&(b=a.replace(/\./g,
"-")+".cdn.ampproject.org",nd(c,b))?void 0:c}},ia=function(a,b){if(1==b.length&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c={},d=Math.min(a.length+1,b.length),e=0;e<d;e++)if("object"===typeof b[e]){for(var g in b[e])b[e].hasOwnProperty(g)&&(c[g]=b[e][g]);break}else e<a.length&&(c[a[e]]=b[e]);return c};var x=function(){this.keys=[];this.values={};this.v={}};x.prototype.set=function(a,b,c){this.keys.push(a);c?this.v[":"+a]=b:this.values[":"+a]=b};x.prototype.get=function(a){return this.v.hasOwnProperty(":"+a)?this.v[":"+a]:this.values[":"+a]};x.prototype.map=function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b],d=this.get(c);d&&a(c,d)}};var z=window,p=document;var id=window,wd=document,jd=function(a){var b=id._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===id["ga-disable-"+a])return!0;try{var c=id.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}a=[];b=String(wd.cookie||document.cookie).split(";");for(c=0;c<b.length;c++){var d=b[c].split("="),e=d[0].replace(/^\s*|\s*$/g,"");e&&"AMP_TOKEN"==e&&((d=d.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&(d=decodeURIComponent(d)),a.push(d))}for(b=0;b<a.length;b++)if("$OPT_OUT"==a[b])return!0;return!1};var ka=function(a){var b=[],c=p.cookie.split(";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push(e[1])}return b},na=function(a,b,c,d,e,g){e=jd(e)?!1:la.test(p.location.hostname)||"/"==c&&ma.test(d)?!1:!0;if(!e)return!1;b&&1200<b.length&&(b=b.substring(0,1200));c=a+"="+b+"; path="+c+"; ";g&&(c+="expires="+(new Date((new Date).getTime()+g)).toGMTString()+"; ");d&&"none"!==d&&(c+="domain="+d+";");d=p.cookie;p.cookie=c;if(!(d=d!=p.cookie))a:{a=ka(a);
for(d=0;d<a.length;d++)if(b==a[d]){d=!0;break a}d=!1}return d},Cd=function(a){return encodeURIComponent?encodeURIComponent(a).replace(/\(/g,"%28").replace(/\)/g,"%29"):a},ma=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,la=/(^|\.)doubleclick\.net$/i;var qa=function(a){this.name="len";this.message=a+"-8192"},va=function(a,b,c){c=c||t;if(2036>=b.length)ra(a,b,c);else if(8192>=b.length)sa(a,b,c)||ta(a,b,c)||ra(a,b,c);else throw ua("len",b.length),new qa(b.length);},ra=function(a,b,c){var d=r(a+"?"+b);d.onload=d.onerror=function(){d.onload=null;d.onerror=null;c()}},ta=function(a,b,c,d){var e=z.XMLHttpRequest;if(!e)return!1;var g=new e;if(!("withCredentials"in g))return!1;a=a.replace(/^http:/,"https:");g.open("POST",a,!0);g.withCredentials=!0;g.setRequestHeader("Content-Type",
"text/plain");g.onreadystatechange=function(){if(4==g.readyState){if(d)try{var a=g.responseText;if(1>a.length)ua("xhr","ver","0"),c();else if("1"!=a.charAt(0))ua("xhr","ver",String(a.length)),c();else if(3<d.count++)ua("xhr","tmr",""+d.count),c();else if(1==a.length)c();else{var b=a.charAt(1);if("d"==b)a=(a=c)||t,ta("https://stats.g.doubleclick.net/j/collect?"+d.sa,"",a,d);else if("g"==b){var e="https://www.google.%/ads/ga-audiences".replace("%","com");ra(e,d.google,c);var oa=a.substring(2);if(oa)if(/^[a-z.]{1,6}$/.test(oa)){var pd=
"https://www.google.%/ads/ga-audiences".replace("%",oa);ra(pd,d.google,t)}else ua("tld","bcc",oa)}else ua("xhr","brc",b),c()}}catch(Od){ua("xhr","rsp"),c()}else c();g=null}};g.send(b);return!0},sa=function(a,b,c){return z.navigator.sendBeacon?z.navigator.sendBeacon(a,b)?(c(),!0):!1:!1},ua=function(a,b,c){1<=100*Math.random()||jd("?")||(a=["t=error","_e="+a,"_v=j71","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+u(c.substring(0,100))),a.push("aip=1"),a.push("z="+B()),ra("https://www.google-analytics.com/u/d",
a.join("&"),t))};var tb=function(a){var b=z.gaData=z.gaData||{};return b[a]=b[a]||{}};var wa=function(){this.B=[]};wa.prototype.add=function(a){this.B.push(a)};wa.prototype.o=function(a){try{for(var b=0;b<this.B.length;b++){var c=a.get(this.B[b]);c&&l(c)&&c.call(z,a)}}catch(d){}b=a.get(C);b!=t&&l(b)&&(a.set(C,t,!0),setTimeout(b,10))};function xa(a){if(100!=a.get(ya)&&D(E(a,F))%1E4>=100*G(a,ya))throw"abort";}function za(a){if(jd(E(a,H)))throw"abort";}function Aa(){var a=p.location.protocol;if("http:"!=a&&"https:"!=a)throw"abort";}
function Ba(a){try{z.navigator.sendBeacon?k(42):z.XMLHttpRequest&&"withCredentials"in new z.XMLHttpRequest&&k(40)}catch(c){}a.set(Ca,da(a),!0);a.set(Da,G(a,Da)+1);var b=[];I.map(function(c,d){d.w&&(c=a.get(c),void 0!=c&&c!=d.defaultValue&&("boolean"==typeof c&&(c*=1),b.push(d.w+"="+u(""+c))))});b.push("z="+J());a.set(Ea,b.join("&"),!0)}
function Fa(a){var b=E(a,Ga)||(A||"https:"==p.location.protocol?"https:":"http:")+"//www.google-analytics.com/internal/collect",c=a.get(Ld),d=E(a,Ha);!d&&a.get(Ia)&&(d="beacon");if(c){d=E(a,Ea);var e=a.get(C);e=e||t;ta(b+"?"+d,"",e,c)}else d?(c=d,d=E(a,Ea),e=(e=a.get(C))||t,"image"==c?ra(b,d,e):"xhr"==c&&ta(b,d,e)||"beacon"==c&&sa(b,d,e)||va(b,d,e)):va(b,E(a,Ea),a.get(C));b=a.get(H);b=tb(b);c=b.hitcount;b.hitcount=c?c+1:1;b=a.get(H);delete tb(b).pending_experiments;a.set(C,t,!0)}
function Ja(a){(z.gaData=z.gaData||{}).expId&&a.set(Ka,(z.gaData=z.gaData||{}).expId);(z.gaData=z.gaData||{}).expVar&&a.set(La,(z.gaData=z.gaData||{}).expVar);var b=a.get(H);if(b=tb(b).pending_experiments){var c=[];for(d in b)b.hasOwnProperty(d)&&b[d]&&c.push(encodeURIComponent(d)+"."+encodeURIComponent(b[d]));var d=c.join("!")}else d=void 0;d&&a.set(ub,d,!0)}function Ma(){if(z.navigator&&"preview"==z.navigator.loadPurpose)throw"abort";}
function Na(a){var b=z.gaDevIds;ca(b)&&0!=b.length&&a.set("&did",b.join(","),!0)}function Oa(a){if(!a.get(H))throw"abort";};var B=function(){return Math.round(2147483647*Math.random())},J=function(){try{var a=new Uint32Array(1);z.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return B()}};function Pa(a){var b=G(a,Qa);500<=b&&k(15);var c=E(a,Ra);if("transaction"!=c&&"item"!=c){c=G(a,Sa);var d=(new Date).getTime(),e=G(a,Ta);0==e&&a.set(Ta,d);e=Math.round(2*(d-e)/1E3);0<e&&(c=Math.min(c+e,20),a.set(Ta,d));if(0>=c)throw"abort";a.set(Sa,--c)}a.set(Qa,++b)};var Ua=function(){this.data=new x},I=new x,Va=[];Ua.prototype.get=function(a){var b=Wa(a),c=this.data.get(a);b&&void 0==c&&(c=l(b.defaultValue)?b.defaultValue():b.defaultValue);return b&&b.D?b.D(this,a,c):c};var E=function(a,b){a=a.get(b);return void 0==a?"":""+a},G=function(a,b){a=a.get(b);return void 0==a||""===a?0:1*a};Ua.prototype.set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a.hasOwnProperty(d)&&Xa(this,d,a[d],c);else Xa(this,a,b,c)};
var Xa=function(a,b,c,d){if(void 0!=c)switch(b){case H:Ya.test(c)}var e=Wa(b);e&&e.I?e.I(a,b,c,d):a.data.set(b,c,d)},K=function(a,b,c,d,e){this.name=a;this.w=b;this.D=d;this.I=e;this.defaultValue=c},Wa=function(a){var b=I.get(a);if(!b)for(var c=0;c<Va.length;c++){var d=Va[c],e=d[0].exec(a);if(e){b=d[1](e);I.set(b.name,b);break}}return b},Za=function(a){var b;I.map(function(c,d){d.w==a&&(b=d)});return b&&b.name},L=function(a,b,c,d,e){a=new K(a,b,c,d,e);I.set(a.name,a);return a.name},$a=function(a,
b){Va.push([new RegExp("^"+a+"$"),b])},M=function(a,b,c){return L(a,b,c,void 0,ab)},ab=function(){};var bb=m(window.GoogleAnalyticsObject)&&ea(window.GoogleAnalyticsObject)||"ga",xd=/^(?:utma\.)?\d+\.\d+$/,zd=/^amp-[\w.-]{22,64}$/,A=!1,db=M("apiVersion","v"),eb=M("clientVersion","_v");L("anonymizeIp","aip");var fb=L("adSenseId","a"),Ra=L("hitType","t"),C=L("hitCallback"),Ea=L("hitPayload");L("nonInteraction","ni");L("currencyCode","cu");L("dataSource","ds");var Ia=L("useBeacon",void 0,!1),Ha=L("transport");L("sessionControl","sc","");L("sessionGroup","sg");L("queueTime","qt");var Da=L("_s","_s");
L("screenName","cd");var gb=L("location","dl",""),hb=L("referrer","dr"),ib=L("page","dp","");L("hostname","dh");var jb=L("language","ul"),kb=L("encoding","de");L("title","dt",function(){return p.title||void 0});$a("contentGroup([0-9]+)",function(a){return new K(a[0],"cg"+a[1])});var lb=L("screenColors","sd"),mb=L("screenResolution","sr"),nb=L("viewportSize","vp"),ob=L("javaEnabled","je"),pb=L("flashVersion","fl");L("campaignId","ci");L("campaignName","cn");L("campaignSource","cs");
L("campaignMedium","cm");L("campaignKeyword","ck");L("campaignContent","cc");
var qb=L("eventCategory","ec"),rb=L("eventAction","ea"),sb=L("eventLabel","el"),vb=L("eventValue","ev"),wb=L("socialNetwork","sn"),xb=L("socialAction","sa"),yb=L("socialTarget","st"),zb=L("l1","plt"),Ab=L("l2","pdt"),Bb=L("l3","dns"),Cb=L("l4","rrt"),Db=L("l5","srt"),Eb=L("l6","tcp"),Fb=L("l7","dit"),Gb=L("l8","clt"),ie=L("l9","_gst"),je=L("l10","_gbt"),ke=L("l11","_cst"),le=L("l12","_cbt"),Hb=L("timingCategory","utc"),Ib=L("timingVar","utv"),Jb=L("timingLabel","utl"),Kb=L("timingValue","utt");
L("appName","an");L("appVersion","av","");L("appId","aid","");L("appInstallerId","aiid","");L("exDescription","exd");L("exFatal","exf");var Ka=L("expId","xid"),La=L("expVar","xvar"),ub=L("exp","exp"),Lb=L("_utma","_utma"),Mb=L("_utmz","_utmz"),Nb=L("_utmht","_utmht"),Qa=L("_hc",void 0,0),Ta=L("_ti",void 0,0),Sa=L("_to",void 0,20);$a("dimension([0-9]+)",function(a){return new K(a[0],"cd"+a[1])});$a("metric([0-9]+)",function(a){return new K(a[0],"cm"+a[1])});L("linkerParam",void 0,void 0,Ob,ab);
var me=M("_cd2l",void 0,!1),Ca=L("usage","_u"),ba=L("_um");L("forceSSL",void 0,void 0,function(){return A},function(a,b,c){k(34);A=!!c});L("_j1","jid");L("_j2","gjid");$a("\\&(.*)",function(a){var b=new K(a[0],a[1]),c=Za(a[0].substring(1));c&&(b.D=function(a){return a.get(c)},b.I=function(a,b,g,h){a.set(c,g,h)},b.w=void 0);return b});
var Pb=M("_oot"),Qb=L("previewTask"),Rb=L("checkProtocolTask"),Sb=L("validationTask"),Tb=L("checkStorageTask"),Ub=L("historyImportTask"),Vb=L("samplerTask"),Wb=L("_rlt"),Xb=L("buildHitTask"),Yb=L("sendHitTask"),Zb=L("ceTask"),$b=L("devIdTask"),ac=L("timingTask"),bc=L("displayFeaturesTask"),ud=L("customTask"),N=M("name"),F=M("clientId","cid"),nc=M("clientIdTime"),Ad=M("storedClientId"),cc=L("userId","uid"),H=M("trackingId","tid"),dc=M("cookieName",void 0,"_ga"),O=M("cookieDomain"),P=M("cookiePath",
void 0,"/"),ec=M("cookieExpires",void 0,63072E3),Bd=M("cookieUpdate",void 0,!0),fc=M("legacyCookieDomain"),gc=M("legacyHistoryImport",void 0,!0),Q=M("storage",void 0,"cookie"),hc=M("allowLinker",void 0,!1),ic=M("allowAnchor",void 0,!0),ya=M("sampleRate","sf",100),jc=M("siteSpeedSampleRate",void 0,1),kc=M("alwaysSendReferrer",void 0,!1),od=M("_gid","_gid"),rd=M("_gcn"),qd=M("useAmpClientId"),Dd=M("_gclid"),Ed=M("_gt"),Fd=M("_ge",void 0,7776E6),Gd=M("_gclsrc"),Hd=M("storeGac",void 0,!0),Ga=L("transportUrl");
L("_r","_r");var Ld=L("_dp");L("allowAdFeatures",void 0,!0);function R(a,b,c,d){b[a]=function(){try{return d&&k(d),c.apply(this,arguments)}catch(e){throw ua("exc",a,e&&e.name),e;}}};function pc(){var a,b;if((b=(b=z.navigator)?b.plugins:null)&&b.length)for(var c=0;c<b.length&&!a;c++){var d=b[c];-1<d.name.indexOf("Shockwave Flash")&&(a=d.description)}if(!a)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a="WIN 6,0,21,0",e.AllowScriptAccess="always",a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a=e.GetVariable("$version")}catch(g){}a&&
(e=a.match(/[\d]+/g))&&3<=e.length&&(a=e[0]+"."+e[1]+" r"+e[2]);return a||void 0};var kd=function(a){var b=Math.min(G(a,jc),100);return D(E(a,F))%100>=b?!1:!0},sc=function(a){var b={};if(qc(b)||rc(b)){var c=b[zb];void 0==c||Infinity==c||isNaN(c)||(0<c?(S(b,Bb),S(b,Eb),S(b,Db),S(b,Ab),S(b,Cb),S(b,Fb),S(b,Gb),S(b,ie),S(b,je),S(b,ke),S(b,le),setTimeout(function(){a(b)},10)):v(z,"load",function(){sc(a)},!1))}},qc=function(a){var b=z.performance||z.webkitPerformance;b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[zb]=b.loadEventStart-c;a[Bb]=b.domainLookupEnd-
b.domainLookupStart;a[Eb]=b.connectEnd-b.connectStart;a[Db]=b.responseStart-b.requestStart;a[Ab]=b.responseEnd-b.responseStart;a[Cb]=b.fetchStart-c;a[Fb]=b.domInteractive-c;a[Gb]=b.domContentLoadedEventStart-c;a[ie]=Z.ca-c;a[je]=Z.na-c;z.google_tag_manager&&z.google_tag_manager._li&&(b=z.google_tag_manager._li,a[ke]=b.cst,a[le]=b.cbt);return!0},rc=function(a){if(z.top!=z)return!1;var b=z.external,c=b&&b.onloadT;b&&!b.isValidLoadTime&&(c=void 0);2147483648<c&&(c=void 0);0<c&&b.setPageReadyTime();if(void 0==
c)return!1;a[zb]=c;return!0},S=function(a,b){var c=a[b];if(isNaN(c)||Infinity==c||0>c)a[b]=void 0},tc=function(a){return function(b){if("pageview"==b.get(Ra)&&!a.$){a.$=!0;var c=kd(b),d=0<ja(b.get(gb),"gclid").length;(c||d)&&sc(function(b){c&&a.send("timing",b);d&&a.send("adtiming",b)})}}};var T=!1,xc=function(a){if("cookie"==E(a,Q)){if(a.get(Bd)||E(a,Ad)!=E(a,F)){var b=1E3*G(a,ec);a:{var c=F,d=uc(a,c);if(d){var e=E(a,dc),g=vc(E(a,P)),h=wc(E(a,O)),q=E(a,H);if("auto"!=h)na(e,d,g,h,q,b)&&(T=!0);else{k(32);b:{d=[];h=td().split(".");if(4==h.length){var y=h[h.length-1];if(parseInt(y,10)==y){y=["none"];break b}}for(y=h.length-2;0<=y;y--)d.push(h.slice(y).join("."));h=p.location.hostname;la.test(h)||ma.test(h)||d.push("none");y=d}for(var oa=0;oa<y.length;oa++)if(h=y[oa],a.data.set(O,h),d=
uc(a,c),na(e,d,g,h,q,b)){T=!0;break a}a.data.set(O,"auto")}}else k(54)}}if(a.get(Hd)){if(g=a.get(Dd))h=Math.min(G(a,Fd),1E3*G(a,ec)),h=Math.min(h,1E3*G(a,Ed)+h-(new Date).getTime()),a.data.set(Fd,h),b={},q=a.get(Ed),d=a.get(Gd),c=vc(E(a,P)),e=wc(E(a,O)),a=E(a,H),d&&"aw.ds"!=d?b&&(b.ra=!0):(g=["1",q,Cd(g)].join("."),0<h&&(b&&(b.qa=!0),na("_gac_"+Cd(a),g,c,e,a,h))),Jd(b)}else k(75)}},yc=function(a){if("cookie"==E(a,Q)&&!T&&(xc(a),!T))throw"abort";},Ac=function(a){if(a.get(gc)){var b=E(a,O),c=E(a,fc)||
td(),d=zc("__utma",c,b);d&&(k(19),a.set(Nb,(new Date).getTime(),!0),a.set(Lb,d.P),(b=zc("__utmz",c,b))&&d.hash==b.hash&&a.set(Mb,b.P))}},uc=function(a,b){b=Cd(E(a,b));var c=wc(E(a,O)).split(".").length;a=Cc(E(a,P));1<a&&(c+="-"+a);return b?["GA1",c,b].join("."):""},Dc=function(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var q=a[h];q.m[c]==b?d.push(q):void 0==g||q.m[c]<g?(e=[q],g=q.m[c]):q.m[c]==g&&e.push(q)}return 0<d.length?d:e},wc=function(a){return 0==a.indexOf(".")?a.substr(1):a},vc=function(a){if(!a)return"/";
1<a.length&&a.lastIndexOf("/")==a.length-1&&(a=a.substr(0,a.length-1));0!=a.indexOf("/")&&(a="/"+a);return a},Cc=function(a){a=vc(a);return"/"==a?1:a.split("/").length},Jd=function(a){a.qa&&k(77);a.ka&&k(74);a.oa&&k(73);a.ra&&k(69)};function zc(a,b,c){"none"==b&&(b="");var d=[],e=ka(a);a="__utma"==a?6:2;for(var g=0;g<e.length;g++){var h=(""+e[g]).split(".");h.length>=a&&d.push({hash:h[0],P:e[g],O:h})}if(0!=d.length)return 1==d.length?d[0]:Ec(b,d)||Ec(c,d)||Ec(null,d)||d[0]}function Ec(a,b){if(null==a)var c=a=1;else c=D(a),a=D(n(a,".")?a.substring(1):"."+a);for(var d=0;d<b.length;d++)if(b[d].hash==c||b[d].hash==a)return b[d]};var Fc=new RegExp(/^https?:\/\/([^\/:]+)/),Rd=z.google_tag_data.glBridge,Gc=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,Kd=/(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;function Ob(a){if(a.get(me))return k(35),Rd.generate(ne(a));var b=a.get(F),c=a.get(od)||"";b="_ga=2."+u(vd(c+b,0)+"."+c+"-"+b);(a=oe(a))?(k(44),a="&_gac=1."+u([vd(a.ma,0),a.timestamp,a.ma].join("."))):a="";return b+a}
function Hc(a,b){var c=new Date,d=z.navigator,e=d.plugins||[];a=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b<e.length;++b)a.push(e[b].description);return D(a.join("."))}function vd(a,b){var c=new Date,d=z.navigator,e=c.getHours()+Math.floor((c.getMinutes()+b)/60);return D([a,d.userAgent,d.language||"",c.getTimezoneOffset(),c.getYear(),c.getDate()+Math.floor(e/24),(24+e)%24,(60+c.getMinutes()+b)%60].join("."))}
var U=function(a){k(48);this.target=a;this.K=!1};U.prototype.S=function(a,b){if(a){if(this.target.get(me))return Rd.decorate(ne(this.target),a,b);if(a.tagName){if("a"==a.tagName.toLowerCase()){a.href&&(a.href=Ic(this,a.href,b));return}if("form"==a.tagName.toLowerCase())return Jc(this,a)}if("string"==typeof a)return Ic(this,a,b)}};
var Ic=function(a,b,c){var d=Gc.exec(b);d&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));(d=Kd.exec(b))&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a.target.get("linkerParam");var e=b.indexOf("?");d=b.indexOf("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b.substring(0,d)+c+a+b.substring(d));b=b.replace(/&+_ga=/,"&_ga=");return b=b.replace(/&+_gac=/,"&_gac=")},Jc=function(a,b){if(b&&b.action)if("get"==b.method.toLowerCase()){a=a.target.get("linkerParam").split("&");for(var c=0;c<a.length;c++){var d=
a[c].split("="),e=d[1];d=d[0];for(var g=b.childNodes||[],h=!1,q=0;q<g.length;q++)if(g[q].name==d){g[q].setAttribute("value",e);h=!0;break}h||(g=p.createElement("input"),g.setAttribute("type","hidden"),g.setAttribute("name",d),g.setAttribute("value",e),b.appendChild(g))}}else"post"==b.method.toLowerCase()&&(b.action=Ic(a,b.action))};
U.prototype.R=function(a,b,c){function d(c){try{c=c||z.event;a:{var d=c.target||c.srcElement;for(c=100;d&&0<c;){if(d.href&&d.nodeName.match(/^a(?:rea)?$/i)){var e=d;break a}d=d.parentNode;c--}e={}}("http:"==e.protocol||"https:"==e.protocol)&&Kc(a,e.hostname||"")&&e.href&&(e.href=Ic(g,e.href,b))}catch(oa){k(26)}}var e=this;if(this.target.get(me))Rd.auto(function(){return ne(e.target)},a,b?"fragment":"",c);else{var g=this;this.K||(this.K=!0,v(p,"mousedown",d,!1),v(p,"keyup",d,!1));c&&v(p,"submit",function(b){b=
b||z.event;if((b=b.target||b.srcElement)&&b.action){var c=b.action.match(Fc);c&&Kc(a,c[1])&&Jc(g,b)}})}};function Kc(a,b){if(b==p.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}function Id(a,b){return b!=Hc(a,0)&&b!=Hc(a,-1)&&b!=Hc(a,-2)&&b!=vd(a,0)&&b!=vd(a,-1)&&b!=vd(a,-2)}function ne(a){var b=oe(a);return{_ga:a.get(F),_gid:a.get(od)||void 0,_gac:b?[b.ma,b.timestamp].join("."):void 0}}
function oe(a){function b(a){return void 0==a||""===a?0:Number(a)}var c=a.get(Dd);if(c&&a.get(Hd)){var d=b(a.get(Ed));if(1E3*d+b(a.get(Fd))<=(new Date).getTime())k(76);else return{timestamp:d,ma:c}}};var oc=/^(GTM|OPT)-[A-Z0-9]+$/,Bc=/;_gaexp=[^;]*/g,ad=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,yd=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,bd=function(a){function b(a,b){b&&(c+="&"+a+"="+u(b))}var c="https://www.google-analytics.com/gtm/js?id="+u(a.id);"dataLayer"!=a.G&&b("l",a.G);b("t",a.target);b("cid",a.clientId);b("cidt",a.ha);b("gac",a.ia);b("aip",a.fa);a.sync&&b("m","sync");b("cycle",a.ba);a.ma&&b("gclid",a.ma);yd.test(p.referrer)&&b("cb",String(B()));return c};var Lc=function(){};var Mc=function(){};var Nc=function(){var a=z.gaGlobal=z.gaGlobal||{};return a.hid=a.hid||B()};var Oc,Pc=function(a,b,c){if(!Oc){var d=p.location.hash;var e=z.name,g=/^#?gaso=([^&]*)/;if(e=(d=(d=d&&d.match(g)||e&&e.match(g))?d[1]:ka("GASO")[0]||"")&&d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))na("GASO",""+d,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=e[1],fa("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+B(),"_gasojs");Oc=!0}};var Ya=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,V=function(a){function b(a,b){d.b.data.set(a,b)}function c(a,c){b(a,c);d.filters.add(a)}var d=this;this.b=new Ua;this.filters=new wa;b(N,a[N]);b(H,ea(a[H]));b(dc,a[dc]);b(O,a[O]||td());b(P,a[P]);b(ec,a[ec]);b(Bd,a[Bd]);b(fc,a[fc]);b(gc,a[gc]);b(hc,a[hc]);b(ic,a[ic]);b(ya,a[ya]);b(jc,a[jc]);b(kc,a[kc]);b(Q,a[Q]);b(cc,a[cc]);b(nc,a[nc]);b(qd,a[qd]);b(Hd,a[Hd]);b(me,a[me]);b(db,1);b(eb,"j71");c(Pb,za);c(ud,t);c(Qb,Ma);c(Rb,Aa);c(Sb,Oa);c(Tb,yc);c(Ub,Ac);c(Vb,xa);
c(Wb,Pa);c(Zb,Ja);c($b,Na);c(bc,Mc);c(Xb,Ba);c(Yb,Fa);c(ac,tc(this));Rc(this.b);Qc(this.b,a[F]);this.b.set(fb,Nc());Pc(this.b.get(H),this.b.get(O),this.b.get(P))},Qc=function(a,b){var c=E(a,dc);a.data.set(rd,"_ga"==c?"_gid":c+"_gid");if("cookie"==E(a,Q)){T=!1;b:{c=ka(E(a,dc));var d=E(a,O),e=E(a,P);if(!c||1>c.length)k(12);else{for(var g=[],h=0;h<c.length;h++){var q=c[h];var y=q.split(".");var oa=y.shift();("GA1"==oa||"1"==oa)&&1<y.length?(q=y.shift().split("-"),1==q.length&&(q[1]="1"),q[0]*=1,q[1]*=
1,y={m:q,A:y.join(".")}):y=zd.test(q)?{m:[0,0],A:q}:void 0;y&&g.push(y)}if(1==g.length){k(13);c=g[0].A;break b}if(0==g.length)k(12);else{k(14);g=Dc(g,wc(d).split(".").length,0);if(1==g.length){c=g[0].A;break b}g=Dc(g,Cc(e),1);1<g.length&&k(41);c=g[0]&&g[0].A;break b}}c=void 0}c||(c=E(a,O),d=E(a,fc)||td(),c=zc("__utma",d,c),void 0!=c?(k(10),c=c.O[1]+"."+c.O[2]):c=void 0);c&&(T=!0);if(d=c&&!a.get(Bd))d=c.split("."),2!=d.length?d=!1:(d=Number(d[1]))?(e=G(a,ec),d=d+e<(new Date).getTime()/1E3):d=!1;d&&
(c=void 0);c&&(a.data.set(Ad,c),a.data.set(F,c));if(a.get(Hd)&&(c=a.get(Dd),d=a.get(Gd),!c||d&&"aw.ds"!=d)){c={};if(p){d=[];e=p.cookie.split(";");g=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/;for(h=0;h<e.length;h++)(y=e[h].match(g))&&d.push({ga:y[1],value:y[2]});e={};if(d&&d.length)for(g=0;g<d.length;g++)(h=d[g].value.split("."),"1"!=h[0]||3!=h.length)?c&&(c.ka=!0):h[1]&&(e[d[g].ga]?c&&(c.oa=!0):e[d[g].ga]=[],e[d[g].ga].push({timestamp:h[1],ma:h[2]}));d=e}else d={};d=d[E(a,H)];Jd(c);d&&0!=d.length&&(c=d[0],
a.data.set(Ed,c.timestamp),a.data.set(Dd,c.ma))}}if(a.get(Bd)&&(c=sd("_ga",a.get(ic)),d=sd("_gl",a.get(ic)),e=Rd.get(a.get(ic)),g=e._ga,d&&0<d.indexOf("_ga")&&!g&&k(30),c||g))if(c&&g&&k(36),a.get(hc)){if(g&&(k(38),a.data.set(F,g),e._gid&&(k(51),a.data.set(od,e._gid)),e._gac&&(d=e._gac.split("."))&&2==d.length&&(k(37),a.data.set(Dd,d[0]),a.data.set(Ed,d[1]))),c)b:if(d=c.indexOf("."),-1==d)k(22);else{e=c.substring(0,d);g=c.substring(d+1);d=g.indexOf(".");c=g.substring(0,d);g=g.substring(d+1);if("1"==
e){if(d=g,Id(d,c)){k(23);break b}}else if("2"==e){d=g.indexOf("-");e="";0<d?(e=g.substring(0,d),d=g.substring(d+1)):d=g.substring(1);if(Id(e+d,c)){k(53);break b}e&&(k(2),a.data.set(od,e))}else{k(22);break b}k(11);a.data.set(F,d);if(c=sd("_gac",a.get(ic)))c=c.split("."),"1"!=c[0]||4!=c.length?k(72):Id(c[3],c[1])?k(71):(a.data.set(Dd,c[3]),a.data.set(Ed,c[2]),k(70))}}else k(21);b&&(k(9),a.data.set(F,u(b)));if(!a.get(F))if(b=(b=z.gaGlobal&&z.gaGlobal.vid)&&-1!=b.search(xd)?b:void 0)k(17),a.data.set(F,
b);else{k(8);b=z.navigator.userAgent+(p.cookie?p.cookie:"")+(p.referrer?p.referrer:"");c=b.length;for(d=z.history.length;0<d;)b+=d--^c++;a.data.set(F,[B()^D(b)&2147483647,Math.round((new Date).getTime()/1E3)].join("."))}xc(a)},Rc=function(a){var b=z.navigator,c=z.screen,d=p.location;a.set(hb,ha(a.get(kc),a.get(qd)));if(d){var e=d.pathname||"";"/"!=e.charAt(0)&&(k(31),e="/"+e);a.set(gb,d.protocol+"//"+d.hostname+e+d.search)}c&&a.set(mb,c.width+"x"+c.height);c&&a.set(lb,c.colorDepth+"-bit");c=p.documentElement;
var g=(e=p.body)&&e.clientWidth&&e.clientHeight,h=[];c&&c.clientWidth&&c.clientHeight&&("CSS1Compat"===p.compatMode||!g)?h=[c.clientWidth,c.clientHeight]:g&&(h=[e.clientWidth,e.clientHeight]);c=0>=h[0]||0>=h[1]?"":h.join("x");a.set(nb,c);a.set(pb,pc());a.set(kb,p.characterSet||p.charset);a.set(ob,b&&"function"===typeof b.javaEnabled&&b.javaEnabled()||!1);a.set(jb,(b&&(b.language||b.browserLanguage)||"").toLowerCase());a.data.set(Dd,sd("gclid",!0));a.data.set(Gd,sd("gclsrc",!0));a.data.set(Ed,Math.round((new Date).getTime()/
1E3));if(d&&a.get(ic)&&(b=p.location.hash)){b=b.split(/[?&#]+/);d=[];for(c=0;c<b.length;++c)(n(b[c],"utm_id")||n(b[c],"utm_campaign")||n(b[c],"utm_source")||n(b[c],"utm_medium")||n(b[c],"utm_term")||n(b[c],"utm_content")||n(b[c],"gclid")||n(b[c],"dclid")||n(b[c],"gclsrc"))&&d.push(b[c]);0<d.length&&(b="#"+d.join("&"),a.set(gb,a.get(gb)+b))}};V.prototype.get=function(a){return this.b.get(a)};V.prototype.set=function(a,b){this.b.set(a,b)};
var Sc={pageview:[ib],event:[qb,rb,sb,vb],social:[wb,xb,yb],timing:[Hb,Ib,Kb,Jb]};V.prototype.send=function(a){if(!(1>arguments.length)){if("string"===typeof arguments[0]){var b=arguments[0];var c=[].slice.call(arguments,1)}else b=arguments[0]&&arguments[0][Ra],c=arguments;b&&(c=ia(Sc[b]||[],c),c[Ra]=b,this.b.set(c,void 0,!0),this.filters.o(this.b),this.b.data.v={})}};V.prototype.ja=function(a,b){var c=this;cd(a,c,b)||(dd(a,function(){cd(a,c,b)}),ed(String(c.get(N)),a,void 0,b,!0))};var Tc=function(a){if("prerender"==p.visibilityState)return!1;a();return!0},fd=function(a){if(!Tc(a)){k(16);var b=!1,c=function(){if(!b&&Tc(a)){b=!0;var d=c,e=p;e.removeEventListener?e.removeEventListener("visibilitychange",d,!1):e.detachEvent&&e.detachEvent("onvisibilitychange",d)}};v(p,"visibilitychange",c)}};var Uc=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,Wc=function(a){if(l(a[0]))this.L=a[0];else{var b=Uc.exec(a[0]);null!=b&&4==b.length&&(this.g=b[1]||"t0",this.u=b[2]||"",this.c=b[3],this.a=[].slice.call(a,1),this.u||(this.X="create"==this.c,this.s="require"==this.c,this.F="provide"==this.c,this.Y="remove"==this.c),this.s&&(3<=this.a.length?(this.N=this.a[1],this.M=this.a[2]):this.a[1]&&(m(this.a[1])?this.N=this.a[1]:this.M=this.a[1])));b=a[1];a=a[2];if(!this.c)throw"abort";if(this.s&&(!m(b)||""==b))throw"abort";
if(this.F&&(!m(b)||""==b||!l(a)))throw"abort";if(Vc(this.g)||Vc(this.u))throw"abort";if(this.F&&"t0"!=this.g)throw"abort";}};function Vc(a){return 0<=a.indexOf(".")||0<=a.indexOf(":")};var W,Xc,Yc,X;W=new x;Yc=new x;X=new x;Xc={ec:45,ecommerce:46,linkid:47};
var cd=function(a,b,c){b==Z||b.get(N);var d=W.get(a);if(!l(d))return!1;b.plugins_=b.plugins_||new x;if(b.plugins_.get(a))return!0;b.plugins_.set(a,new d(b,c||{}));return!0},ed=function(a,b,c,d,e){if(!l(W.get(b))&&!Yc.get(b)){Xc.hasOwnProperty(b)&&k(Xc[b]);if(oc.test(b)){k(52);a=Z.C(a);if(!a)return!0;c=d||{};d={id:b,G:c.dataLayer||"dataLayer",fa:!!a.get("anonymizeIp"),sync:e,ba:!1};a.get("&gtm")==b&&(d.ba=!0);var g=String(a.get("name"));"t0"!=g&&(d.target=g);jd(String(a.get("trackingId")))||(d.clientId=
String(a.get(F)),d.ha=Number(a.get(nc)),c=c.palindrome?ad:Bc,c=(c=p.cookie.replace(/^|(; +)/g,";").match(c))?c.sort().join("").substring(1):void 0,d.ia=c,d.ma=ja(a.b.get(gb)||"","gclid"));a=d.G;c=(new Date).getTime();z[a]=z[a]||[];c={"gtm.start":c};e||(c.event="gtm.js");z[a].push(c);c=bd(d)}!c&&Xc.hasOwnProperty(b)?(k(39),c=b+".js"):k(43);c&&(c&&0<=c.indexOf("/")||(c=(A||"https:"==p.location.protocol?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+c),d=Zc(c),a=d.protocol,c=p.location.protocol,
("https:"==a||a==c||("http:"!=a?0:"http:"==c))&&gd(d)&&(fa(d.url,void 0,e),Yc.set(b,!0)))}},dd=function(a,b){var c=X.get(a)||[];c.push(b);X.set(a,c)},hd=function(a,b){W.set(a,b);b=X.get(a)||[];for(var c=0;c<b.length;c++)b[c]();X.set(a,[])},gd=function(a){var b=Zc(p.location.href);if(n(a.url,"https://www.google-analytics.com/gtm/js?id="))return!0;if(a.query||0<=a.url.indexOf("?")||0<=a.path.indexOf("://"))return!1;if(a.host==b.host&&a.port==b.port)return!0;b="http:"==a.protocol?80:443;return"www.google-analytics.com"==
a.host&&(a.port||b)==b&&n(a.path,"/plugins/")?!0:!1},Zc=function(a){function b(a){var b=a.hostname||"",c=0<=b.indexOf("]");b=b.split(c?"]":":")[0].toLowerCase();c&&(b+="]");c=(a.protocol||"").toLowerCase();c=1*a.port||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";n(a,"/")||(a="/"+a);return[b,""+c,a]}var c=p.createElement("a");c.href=p.location.href;var d=(c.protocol||"").toLowerCase(),e=b(c),g=c.search||"",h=d+"//"+e[0]+(e[1]?":"+e[1]:"");n(a,"//")?a=d+a:n(a,"/")?a=h+a:!a||n(a,"?")?a=h+e[2]+
(a||g):0>a.split("/")[0].indexOf(":")&&(a=h+e[2].substring(0,e[2].lastIndexOf("/"))+"/"+a);c.href=a;d=b(c);return{protocol:(c.protocol||"").toLowerCase(),host:d[0],port:d[1],path:d[2],query:c.search||"",url:a||""}};var Y={W:function(){Y.h=[]}};Y.W();Y.o=function(a){var b=Y.aa.apply(Y,arguments);b=Y.h.concat(b);for(Y.h=[];0<b.length&&!Y.T(b[0])&&!(b.shift(),0<Y.h.length););Y.h=Y.h.concat(b)};Y.aa=function(a){for(var b=[],c=0;c<arguments.length;c++)try{var d=new Wc(arguments[c]);d.F?hd(d.a[0],d.a[1]):(d.s&&(d.ea=ed(d.g,d.a[0],d.N,d.M)),b.push(d))}catch(e){}return b};
Y.T=function(a){try{if(a.L)a.L.call(z,Z.C("t0"));else{var b=a.g==bb?Z:Z.C(a.g);if(a.X){if("t0"==a.g&&(b=Z.create.apply(Z,a.a),null===b))return!0}else if(a.Y)Z.remove(a.g);else if(b)if(a.s){if(a.ea&&(a.ea=ed(a.g,a.a[0],a.N,a.M)),!cd(a.a[0],b,a.M))return!0}else if(a.u){var c=a.c,d=a.a,e=b.plugins_.get(a.u);e[c].apply(e,d)}else b[a.c].apply(b,a.a)}}catch(g){}};var Z=function(a){k(1);Y.o.apply(Y,[arguments])};Z.j={};Z.i=[];Z.ca=0;Z.na=0;Z.answer=42;var $c=[H,O,N];Z.create=function(a){var b=ia($c,[].slice.call(arguments));b[N]||(b[N]="t0");var c=""+b[N];if(Z.j[c])return Z.j[c];b=new V(b);Z.j[c]=b;Z.i.push(b);return b};Z.remove=function(a){for(var b=0;b<Z.i.length;b++)if(Z.i[b].get(N)==a){Z.i.splice(b,1);Z.j[a]=null;break}};Z.C=function(a){return Z.j[a]};Z.getAll=function(){return Z.i.slice(0)};
Z.V=function(){"ga"!=bb&&k(49);var a=z[bb];if(!a||42!=a.answer){Z.ca=a&&a.l;Z.na=1*new Date;Z.loaded=!0;var b=z[bb]=Z;R("create",b,b.create);R("remove",b,b.remove);R("getByName",b,b.C,5);R("getAll",b,b.getAll,6);b=V.prototype;R("get",b,b.get,7);R("set",b,b.set,4);R("send",b,b.send);R("requireSync",b,b.ja);b=Ua.prototype;R("get",b,b.get);R("set",b,b.set);if("https:"!=p.location.protocol&&!A){a:{b=p.getElementsByTagName("script");for(var c=0;c<b.length&&100>c;c++){var d=b[c].src;if(d&&0==d.indexOf("https://www.google-analytics.com/analytics")){b=
!0;break a}}b=!1}b&&(A=!0)}(z.gaplugins=z.gaplugins||{}).Linker=U;b=U.prototype;hd("linker",U);R("decorate",b,b.S,20);R("autoLink",b,b.R,25);hd("displayfeatures",Lc);hd("adfeatures",Lc);a=a&&a.q;ca(a)?Y.o.apply(Z,a):k(50)}};Z.da=function(){for(var a=Z.getAll(),b=0;b<a.length;b++)a[b].get(N)};var pe=Z.V,qe=z[bb];qe&&qe.r?pe():fd(pe);fd(function(){Y.o(["provide","render",t])});})(window);
