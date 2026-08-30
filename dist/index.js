"use strict";var s=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var o=s(function(I,n){
var c=require('@stdlib/math-base-special-cos/dist'),x=require('@stdlib/constants-float64-half-pi/dist'),m=require('@stdlib/fft-base-fftpack-float64-rffti/dist');function A(i,r,e,u){var f,q,v,a,t;for(q=x/i,a=0,v=u,t=0;t<i;t++)a+=1,r[v]=c(a*q),v+=e;return f=u+i*e,m(i,r,e,f),r}n.exports=A
});var F=o();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
