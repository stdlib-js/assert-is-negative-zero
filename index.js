// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__,a=r,f=function(e,t,r){var a,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||c.call(e,t)?(a=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=a):e[t]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&u&&u.call(e,t,r.set),e},p=t()?a:f,y=function(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},b=function(e){return"number"==typeof e},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=function(){return s&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,m=d,v=function(e){return m.call(e)},j=Object.prototype.hasOwnProperty,g=function(e,t){return null!=e&&j.call(e,t)},S="function"==typeof Symbol?Symbol.toStringTag:"",h=g,O=S,w=d,P=v,T=function(e){var t,r,n;if(null==e)return w.call(e);r=e[O],t=h(e,O);try{e[O]=void 0}catch(t){return w.call(e)}return n=w.call(e),t?e[O]=r:delete e[O],n},N=_()?T:P,E=Number,I=E.prototype.toString,x=N,A=E,G=function(e){try{return I.call(e),!0}catch(e){return!1}},V=_(),k=function(e){return"object"==typeof e&&(e instanceof A||(V?G(e):"[object Number]"===x(e)))},F=b,C=k,Y=y,Z=function(e){return F(e)||C(e)},q=k;Y(Z,"isPrimitive",b),Y(Z,"isObject",q);var z=Z,B=E.NEGATIVE_INFINITY;function D(e){return z.isPrimitive(e)&&1/e===B}function H(e){return z.isObject(e)&&1/e.valueOf()===B}function J(e){return D(e)||H(e)}return y(J,"isPrimitive",D),y(J,"isObject",H),J},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isNegativeZero=t();
//# sourceMappingURL=index.js.map
