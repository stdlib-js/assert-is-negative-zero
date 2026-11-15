"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(q){throw (e=0, q)}};};var t=i(function(I,v){
var N=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/constants-float64-ninf/dist');function b(r){return N(r)&&1/r===m}v.exports=b
});var s=i(function(d,a){
var O=require('@stdlib/assert-is-number/dist').isObject,f=require('@stdlib/constants-float64-ninf/dist');function j(r){return O(r)&&1/r.valueOf()===f}a.exports=j
});var n=i(function(y,c){
var p=t(),x=s();function P(r){return p(r)||x(r)}c.exports=P
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=n(),g=t(),Z=s();o(u,"isPrimitive",g);o(u,"isObject",Z);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
