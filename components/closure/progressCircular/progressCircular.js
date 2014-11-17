/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-a908799
 */
goog.provide('ng.material.components.progressCircular');
goog.require('ng.material.core');
!function(){"use strict";function r(r,i,a){function l(r){return r.attr("aria-valuemin",0),r.attr("aria-valuemax",100),r.attr("role","progressbar"),e}function e(r,l,e){a(l);var m,n,c,o,v=l[0],u=v.querySelectorAll(".md-fill, .md-mask.md-full"),f=v.querySelectorAll(".md-fill.md-fix"),S=e.mdDiameter||48,g=S/48;v.style[i.CSS.TRANSFORM]="scale("+g.toString()+")",e.$observe("value",function(r){for(n=t(r),c=d[n],o=s[n],l.attr("aria-valuenow",n),m=0;m<u.length;m++)u[m].style[i.CSS.TRANSFORM]=c;for(m=0;m<f.length;m++)f[m].style[i.CSS.TRANSFORM]=o})}function t(r){return r>100?100:0>r?0:Math.ceil(r||0)}for(var d=new Array(101),s=new Array(101),m=0;101>m;m++){var n=m/100,c=Math.floor(180*n);d[m]="rotate("+c.toString()+"deg)",s[m]="rotate("+(2*c).toString()+"deg)"}return{restrict:"E",template:'<div class="md-wrapper1"><div class="md-wrapper2"><div class="md-circle"><div class="md-mask md-full"><div class="md-fill"></div></div><div class="md-mask md-half"><div class="md-fill"></div><div class="md-fill md-fix"></div></div><div class="md-shadow"></div></div><div class="md-inset"></div></div></div>',compile:l}}angular.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",r),r.$inject=["$$rAF","$mdConstant","$mdTheming"]}();