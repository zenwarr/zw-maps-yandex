!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e){t.exports=require("zmaps")},function(t,e){t.exports=require("zbase")},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=n(0),i=n(1),p=n(1);e.DefaultOptions=p.assign({},r.DefaultOptions);var l=55.753742,c=37.620032,s=function(t){function e(e,n){var o=t.call(this,e,n)||this;if(!window.ymaps)throw new Error("Yandex maps api is not detected, make sure you have plugged the scripts in");return o.mapContainer&&ymaps.ready(function(){var t=o.initialCenter||{lat:l,long:c};o._ymap=new ymaps.Map(o.mapContainer,{center:[t.lat,t.long],zoom:o.initialZoom}),o._options.disableScrollZoom&&o._ymap.behaviors.disable("scrollZoom");for(var e=0;e<o._points.length;++e){var n=o._points[e];o._addPlacemark(n)}}),o}return o(e,t),e.prototype._addPlacemark=function(t){var e=void 0;if(t.template){var n=this.getPointTemplate(t.template);n&&n.imageUrl&&n.imageHeight&&n.imageWidth&&(e={iconLayout:"default#image",iconImageHref:n.imageUrl,iconImageSize:[n.imageWidth,n.imageHeight],iconImageOffset:[-(n.imageAnchorX||0),-(n.imageAnchorY||0)]})}var o=new ymaps.Placemark([t.lat,t.long],{balloonContent:t.balloonContent||t.title,hintContent:t.title||""},e);t.placemark=o,this._ymap.geoObjects.add(o)},e.prototype._parsePoint=function(e){var n=t.prototype._parsePoint.call(this,e);return n.placemark=null,n},e.prototype._panToPoint=function(t){t&&this._ymap.panTo([t.lat,t.long])},e}(a.Map);e.YandexMap=s,e.YandexMapFactory=new i.ComponentFactory("map",e.DefaultOptions,s)}]));