// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cos@v0.3.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/fft-base-fftpack-float64-rffti@esm/index.mjs";function i(i,f,r,n){var d,m,o,a;for(d=s/i,o=0,m=n,a=0;a<i;a++)o+=1,f[m]=t(o*d),m+=r;return e(i,f,r,n+i*r),f}export{i as default};
//# sourceMappingURL=index.mjs.map
