/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-a908799
 */
!function(){"use strict";function e(e){function n(t,n,a,i){e(n);var r=i[0]||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]},o=i[1];o.init(r)}return{scope:{},require:["?ngModel","mdSlider"],controller:t,template:'<div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div>',link:n}}function t(e,t,n,a,i,r,o,s){this.init=function(l){function u(){h(),b(),f()}function c(e){L=parseFloat(e),t.attr("aria-valuemin",e)}function d(e){z=parseFloat(e),t.attr("aria-valuemax",e)}function m(e){U=parseFloat(e),f()}function v(e){t.attr("aria-disabled",!!e)}function f(){if(angular.isDefined(n.mdDiscrete)){var e=Math.floor((z-L)/U);j||(j=angular.element('<canvas style="position:absolute;">'),W=j[0].getContext("2d"),W.fillStyle="black",O.append(j));var t=p();j[0].width=t.width,j[0].height=t.height;for(var a,i=0;e>=i;i++)a=Math.floor(t.width*(i/e)),W.fillRect(a-1,0,2,t.height)}}function h(){Y=P[0].getBoundingClientRect()}function p(){return H(),Y}function $(n){if(!t[0].hasAttribute("disabled")){var a;n.keyCode===s.KEY_CODE.LEFT_ARROW?a=-U:n.keyCode===s.KEY_CODE.RIGHT_ARROW&&(a=U),a&&((n.metaKey||n.ctrlKey||n.altKey)&&(a*=4),n.preventDefault(),n.stopPropagation(),e.$evalAsync(function(){g(l.$viewValue+a)}))}}function g(e){l.$setViewValue(w(y(e)))}function b(){isNaN(l.$viewValue)&&(l.$viewValue=l.$modelValue);var n=(l.$viewValue-L)/(z-L);e.modelValue=l.$viewValue,t.attr("aria-valuenow",l.$viewValue),C(n)}function w(e){return angular.isNumber(e)?Math.max(L,Math.min(z,e)):void 0}function y(e){return angular.isNumber(e)?Math.round(e/U)*U:void 0}function C(e){I.css("width",100*e+"%"),M.css(s.CSS.TRANSFORM,"translate3d("+p().width*e+"px,0,0)"),t.toggleClass("md-min",0===e)}function k(e){B||e.eventType!==Hammer.INPUT_START||t[0].hasAttribute("disabled")?B&&e.eventType===Hammer.INPUT_END&&(B&&G&&S(e),B=!1,t.removeClass("panning active")):(B=!0,t.addClass("active"),t[0].focus(),h(),D(e),e.srcEvent.stopPropagation())}function x(){B&&t.addClass("panning")}function D(e){B&&(G?V(e.center.x):T(e.center.x),e.preventDefault(),e.srcEvent.stopPropagation())}function S(e){if(G&&!t[0].hasAttribute("disabled")){var n=R(A(e.center.x)),i=w(y(n));C(E(i)),a(function(){g(i)}),e.preventDefault(),e.srcEvent.stopPropagation()}}function T(t){e.$evalAsync(function(){g(R(A(t)))})}function V(e){var t=R(A(e)),n=w(y(t));C(A(e)),_.text(n)}function A(e){return Math.max(0,Math.min(1,(e-Y.left)/Y.width))}function R(e){return L+e*(z-L)}function E(e){return(e-L)/(z-L)}var N=angular.element(t[0].querySelector(".md-thumb")),_=angular.element(t[0].querySelector(".md-thumb-text")),M=N.parent(),P=angular.element(t[0].querySelector(".md-track-container")),I=angular.element(t[0].querySelector(".md-track-fill")),O=angular.element(t[0].querySelector(".md-track-ticks")),H=o.throttle(h,5e3);n.min?n.$observe("min",c):c(0),n.max?n.$observe("max",d):d(100),n.step?n.$observe("step",m):m(1);var q=angular.noop;n.ngDisabled&&(q=e.$parent.$watch(n.ngDisabled,v)),r.expect(t,"aria-label"),t.attr("tabIndex",0),t.attr("role","slider"),t.on("keydown",$);var F=new Hammer(t[0],{recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]});F.on("hammer.input",k),F.on("panstart",x),F.on("pan",D),F.on("panend",S),setTimeout(u);var K=a.debounce(u);angular.element(i).on("resize",K),e.$on("$destroy",function(){angular.element(i).off("resize",K),F.destroy(),q()}),l.$render=b,l.$viewChangeListeners.push(b),l.$formatters.push(w),l.$formatters.push(y);var L,z,U,j,W,Y={};h();var B=!1,G=angular.isDefined(n.mdDiscrete);this._onInput=k,this._onPanStart=x,this._onPan=D}}angular.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$mdTheming"],t.$inject=["$scope","$element","$attrs","$$rAF","$window","$mdAria","$mdUtil","$mdConstant"]}();