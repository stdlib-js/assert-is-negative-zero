"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=i(function(F,v){
var q=require('@stdlib/assert-is-number/dist').isPrimitive,N=require('@stdlib/constants-float64-ninf/dist');function m(r){return q(r)&&1/r===N}v.exports=m
});var s=i(function(I,a){
var b=require('@stdlib/assert-is-number/dist').isObject,O=require('@stdlib/constants-float64-ninf/dist');function f(r){return b(r)&&1/r.valueOf()===O}a.exports=f
});var n=i(function(d,c){
var j=t(),p=s();function x(r){return j(r)||p(r)}c.exports=x
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=n(),P=t(),g=s();o(u,"isPrimitive",P);o(u,"isObject",g);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
