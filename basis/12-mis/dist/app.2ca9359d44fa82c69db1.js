!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([,function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){var r,a,i={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,c=[],h=n(1);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=i[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(b(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(b(r.parts[o],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function p(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,a)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function g(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),p(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,a,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var o=u++;n=l||(l=g(t)),r=k.bind(null,n,o,!1),a=k.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(r=h(r)),a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,t),a=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return f(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var o=n[a];(s=i[o.id]).refs--,r.push(s)}for(e&&f(d(e,t),t),a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,m=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function k(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var i=(n=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[r].concat(o).concat([i]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"#table-wrapper {\n  font-size: 12px;\n  min-height: 32px;\n}\n#table-wrapper p {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  min-height: 32px;\n  margin: 0;\n  padding: 2px;\n  text-align: center;\n  white-space: nowrap;\n}\n#table-wrapper p:not(.active) input,\n#table-wrapper p:not(.active) em:not(.edit) {\n  display: none;\n}\n#table-wrapper p:not(.active):not(:hover) .edit {\n  display: none;\n}\n#table-wrapper p.active {\n  flex-wrap: wrap;\n}\n#table-wrapper p.active span,\n#table-wrapper p.active .edit {\n  display: none;\n}\n#table-wrapper input {\n  flex: 1;\n}\n#table-wrapper input {\n  max-width: 80%;\n}\n#table-wrapper em {\n  font-style: normal;\n  color: #ff8bac;\n  cursor: pointer;\n}\n#table-wrapper em.edit,\n#table-wrapper em.save {\n  margin-left: 4px;\n}\n#chart-wrapper svg,\n#chart-wrapper canvas {\n  width: 600px;\n  height: 200px;\n  padding: 10px;\n}\n",""])},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{product:"手机",region:"华东",sale:[120,100,140,160,180,185,190,210,230,245,255,270]},{product:"手机",region:"华北",sale:[80,70,90,110,130,145,150,160,170,185,190,200]},{product:"手机",region:"华南",sale:[220,200,240,250,260,270,280,295,310,335,355,380]},{product:"笔记本",region:"华东",sale:[50,60,80,110,30,20,70,30,420,30,20,20]},{product:"笔记本",region:"华北",sale:[30,35,50,70,20,15,30,50,710,130,20,20]},{product:"笔记本",region:"华南",sale:[80,120,130,140,70,75,120,90,550,120,110,100]},{product:"智能音箱",region:"华东",sale:[10,30,4,5,6,5,4,5,6,5,5,25]},{product:"智能音箱",region:"华北",sale:[15,50,15,15,12,11,11,12,12,14,12,40]},{product:"智能音箱",region:"华南",sale:[10,40,10,6,5,6,8,6,6,6,7,26]}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={product:{title:"商品类型",name:"商品",type:"checkbox",checked:!0,options:[{value:"手机",key:"1"},{value:"笔记本",key:"2"},{value:"智能音箱",key:"3"}]},region:{title:"地区",name:"地区",type:"checkbox",checked:!0,options:[{value:"华东",key:"1"},{value:"华南",key:"2"},{value:"华北",key:"3"}]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!n)return!1;this.width=600,this.height=200,this.axisPadding=25,this.yMaxHeight=this.height-1.5*this.axisPadding,this.axisMaxX=this.width-this.axisPadding,this.barPadding=10,this.xDataLength=12,this.barWidth=(this.axisMaxX-this.xDataLength*this.barPadding)/this.xDataLength,this.axisTextX=[];for(var r=0;r<this.xDataLength;r+=1)this.axisTextX.push((r+1)*(this.barWidth+this.barPadding)+this.axisPadding-this.barWidth/2);this.colorMain=["#FF8BAC","#E8C573","#91FF8B","#4F96E8","#FF84ED","#A1C2FF","#AF73E8","#E8A073","#FFE27E"],this.colorAxis="#333",this.fontSize=12,n.innerHTML='<canvas id="canvas" width="'+this.width+'" height="'+this.height+'"></canvas>     <svg id="svg" viexBox="0, 0, '+this.width+", "+this.height+'"></svg>',this.svg=document.getElementById("svg"),this.canvas=document.getElementById("canvas"),this.canvasInit(),t&&this.setData(t)}return r(e,[{key:"setData",value:function(e){if(!e||e===this.arr||!e.length)return!1;if(this.arrLength=e.length,"number"!=typeof e[0]){for(var t=[],n=e.length,r=0;r<n;r+=1)t.push.apply(t,a(e[r]));this.arrMax=Math.max.apply(Math,t)}else this.arrMax=Math.max.apply(Math,a(e));var i=this.yMaxHeight,o=this.arrMax,s=(this.barPadding,this.barWidth,this.axisPadding),l=(this.barWidth,this.colorMain),u=this.axisTextX;this.coordinate=[];for(var c=0;c<this.arrLength;c+=1)if("number"!=typeof e[c]){for(var h=e[c],f=h.length,d=[],p=0;p<f;p+=1){var v=i+.5*s-h[p]/o*i,g=u[p];d.push({x:g,y:v,color:l[c]})}this.coordinate.push(d)}else{var y=i+.5*s-e[c]/o*i,b=u[c];this.coordinate.push({x:b,y:y})}this.buildSvg(e),this.buildCanvas(e)}},{key:"canvasInit",value:function(){if(!this.canvas.getContext)return!1;var e=canvas.getContext("2d");e.font=this.fontSize+"px",e.lineWidth=2,e.textAlign="center",e.textBaseline="top",e.fillStyle=this.colorMain[0],e.strokeStyle=this.colorMain[0]}},{key:"buildCanvas",value:function(e){this.clearCanvas(),this.buildCanvasAxis(),this.buildCanvasLine(e)}},{key:"clearCanvas",value:function(){if(!this.canvas.getContext)return!1;canvas.getContext("2d").clearRect(0,0,this.width,this.height)}},{key:"buildCanvasLine",value:function(e){if(!this.canvas.getContext)return!1;var t=canvas.getContext("2d"),n=this.axisPadding,r=this.coordinate,a=r.length;t.save(),t.fillStyle=this.colorAxis,t.textAlign="end",t.textBaseline="middle",t.fillText(this.arrMax,n-5,n/2),t.restore(),t.save();for(var i=0;i<a;i+=1)if("[object Array]"===Object.prototype.toString.call(r[i]))for(var o=r[i],s=o.length,l=0;l<s;l+=1){var u=o[l],c=u.color;c&&(t.fillStyle=c,t.strokeStyle=c),t.beginPath(),t.arc(u.x,u.y,2,0,2*Math.PI),t.fill(),l-1>=0&&t.moveTo(o[l-1].x,o[l-1].y),t.lineTo(u.x,u.y),t.stroke(),t.closePath()}else{var h=r[i];t.beginPath(),t.arc(h.x,h.y,5,0,2*Math.PI),t.fill(),i-1>=0&&t.moveTo(r[i-1].x,r[i-1].y),t.lineTo(h.x,h.y),t.stroke(),t.fillText(e[i],h.x,h.y+5),t.closePath()}t.restore()}},{key:"buildCanvasAxis",value:function(){if(!this.canvas.getContext)return!1;var e=canvas.getContext("2d"),t=this.axisPadding,n=this.yMaxHeight+t/2,r=this.width;e.save(),e.strokeStyle=this.colorAxis,e.fillStyle=this.colorAxis,e.beginPath(),e.moveTo(t,n),e.lineTo(t,0),e.moveTo(t,n),e.lineTo(r,n),e.stroke(),e.closePath();for(var a=this.axisTextX,i=a.length,o=0;o<i;o+=1)e.fillText(o+1+"月",a[o],n);e.fillText("0",t/2,n),e.restore()}},{key:"buildSvg",value:function(e){var t=this.buildSvgBar(),n=this.buildSvgAxis(e);this.svg.innerHTML=t+n}},{key:"buildSvgBar",value:function(){for(var e=this.yMaxHeight,t=this.barWidth,n=this.axisPadding,r=this.colorMain[0],a=this.coordinate,i=a.length,o=[],s=0;s<i;s+=1)if("[object Array]"===Object.prototype.toString.call(a[s]))for(var l=a[s],u=l.length,c=t/i*s,h=0;h<u;h+=1)o.push('<rect x="'+(l[h].x+c-t/2)+'" y="'+l[h].y+'" width="'+t/i+'" height="'+(e-l[h].y+n/2)+'" fill="'+(l[h].color||r)+'"/>');else o.push('<rect x="'+(a[s].x-t/2)+'" y="'+a[s].y+'" width="'+t+'" height="'+(e-a[s].y+n/2)+'" fill="'+(a[s].color||r)+'"/>');return o.join("")}},{key:"buildSvgAxis",value:function(){var e=[],t=this.axisPadding,n=this.yMaxHeight+t/2,r=this.colorAxis,a=this.width,i=this.height,o=this.fontSize;this.barPadding,e.push('<line x1="'+t+'" y1="'+n+'" x2="'+a+'" y2="'+n+'" stroke="'+r+'" stroke-width="1"/>'),e.push('<line x1="'+t+'" y1="'+n+'" x2="'+t+'" y2="0" stroke="'+r+'" stroke-width="1"/>'),e.push('<text x="'+t+'" y="'+(i-o)+'" text-anchor="end" fill="'+r+'" style="font-size: '+o+'px">0</text>'),e.push('<text x="'+(t-5)+'" y="'+(t/2+o/2)+'" text-anchor="end" fill="'+r+'" style="font-size: '+o+'px">'+this.arrMax+"</text>");for(var s=this.axisTextX,l=s.length,u=(this.barWidth,0);u<l;u+=1)e.push('<text x="'+s[u]+'" y="'+(i-o)+'" fill='+r+'" text-anchor="middle"  style="font-size: '+o+'px">'+(u+1)+"月</text>");return e.join("")}},{key:"buildChart",value:function(){var e=this.buildSvg();return this.ctx||(e+=this.canvas),e}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a="<tr>{{variable}}{{fixed}}</tr>",i="<th><p>{{name}}</p></th>",o=function(){function e(t,n,r){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!n)return!1;this.table=document.getElementById("table"),this.table||(n.innerHTML='<table id="table" border=1></table>',this.table=document.getElementById("table")),this.attr=[],this.attrLength=0,this.config=r;var o=[];for(var s in r)this.attr.push(s);for(var l=0;l<12;l+=1)o.push(i.replace("{{name}}",l+1+"月"));a=a.replace("{{fixed}}",o.join("")),this.attrLength=this.attr.length,t&&this.setData(t)}return r(e,[{key:"setData",value:function(e,t){if(!e)return!1;this.data=e,this.attrFirstKey=t,this.table.innerHTML=this.buildTable(e)}},{key:"buildTheadTpl",value:function(){var e=[],t=this.attrFirstKey,n=this.config,r=this.attr;n[t]&&e.push(i.replace("{{name}}",n[t].name));for(var o=0;o<this.attrLength;o+=1)r[o]!==t&&e.push(i.replace("{{name}}",n[r[o]].name));return a.replace("{{variable}}",e.join(""))}},{key:"buildTable",value:function(e){if(!e)return"";var t=[],n=this.attrFirstKey,r=(this.config,this.attr),a=0;for(var i in e)for(var o=e[i],s=o.length,l=0;l<s;l+=1){var u=[],c=r.length;n&&u.push("<td><p>"+o[l][n]+"</p></td>");for(var h=0;h<c;h+=1)r[h]!==n&&u.push("<td><p>"+o[l][r[h]]+"</p></td>");for(var f=o[l].sale.length,d=0;d<f;d+=1){var p=o[l].sale[d];u.push('<td data-key="sale_{{key}}"><p>   <span>{{value}}</span><em class="edit">编辑</em>   <input type="text" value="{{value}}" />   <em class="cancel">取消</em>   <em class="save">保存</em>   </p></td>'.replace(/{{value}}/g,p).replace("{{key}}",d))}u[0]=0===l?u[0].replace("<td",'<td rowspan="'+s+'"'):"",t.push('<tr data-index="{{index}}">{{td}}</tr>'.replace("{{index}}",a).replace("{{td}}",u.join(""))),a+=1}return"<thead>{{th}}</thead><tbody>{{tr}}</tbody>".replace("{{th}}",this.buildTheadTpl(n)).replace("{{tr}}",t.join(""))}},{key:"trigger",value:function(e,t){if(!e)return!1;var n=e.tagName.toUpperCase();if(this.cancelUpdate(e),this.table.contains(e)&&/SPAN|EM/.test(n)&&("SPAN"===n&&e.parentNode.classList.add("active"),"EM"===n))switch(e.parentNode.parentNode,e.className){case"edit":e.parentNode.classList.add("active");break;case"save":t&&t();default:this.cancelUpdate()}}},{key:"cancelUpdate",value:function(e){var t=this.table.querySelector("p.active");!t||e&&t.contains(e)||t.classList.remove("active")}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=this.getLocalstorage()||t,this.currentData=this.data}return r(e,[{key:"filterData",value:function(e){if(!e)return this.data;for(var t=[].concat(this.data),n=t.length,r=0;r<n;r++)for(var a in e){var i=e[a];if(("[object Array]"!==Object.prototype.toString.call(i)||-1===i.indexOf(t[r][a]))&&t[r][a]!==i){t.splice(r,1),n-=1,r-=1;break}}this.currentData=t}},{key:"getData",value:function(){return this.currentData}},{key:"getValueList",value:function(e){if(!e)return!1;for(var t=this.currentData,n=t.length,r=[],a=0;a<n;a+=1)r.push(t[a][e]);return r}},{key:"groupByKey",value:function(t){if(e=this.currentData,!t)return e;for(var n=e.length,r={},a=[],i=0;i<n;i+=1)if(e[i]){var o=e[i][t],s=a.indexOf(o);-1===s&&(a.push(o),r[s=a.length-1]=[]),r[s].push(e[i])}return r}},{key:"changeData",value:function(e,t,n,r,a){if(void 0===t)return!1;var i=this.currentData[e];if(!i)return!1;var o=t.split("_"),s=o.length;if(1===s){if(i[t]===n)return!1;i[t]=n}else{var l=0;!function e(t){if(l===s-1){if(t[o[l]]===n)return!1;t[o[l]]=n}else e(t[o[(l+=1)-1]])}(i)}this.saveLocalstorage(),r&&r(i)}},{key:"getLocalstorage",value:function(){return!!localStorage.IFE_Tomato_2018_31_38&&JSON.parse(localStorage.IFE_Tomato_2018_31_38)}},{key:"saveLocalstorage",value:function(){localStorage.IFE_Tomato_2018_31_38=JSON.stringify(this.data)}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t,n){for(var r in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.config=n,this.formValue={},n){var a=n[r].type;document.getElementById(r+"-"+a).innerHTML=this.buildFormItem(n[r],r),"checkbox"===a&&n[r].checked&&(this.checkAll(r,!0),this.setAllChecked(r,!0))}}return r(e,[{key:"buildFormItem",value:function(e,t){if(!e)return!1;var n=['<span class="title">{{title}}</span>'.replace("{{title}}",e.title)],r='<label for="{{name}}_{{key}}"><input type="checkbox" value="{{value}}" name="{{name}}" id="{{name}}_{{key}}"/>{{text}}</label>'.replace(/{{name}}/g,t);"checkbox"===e.type&&n.push(r.replace(/{{(key|value)}}/gi,"all").replace(/{{text}}/g,"全选"));for(var a=e.options,i=a.length,o=0;o<i;o+=1){var s=a[o];n.push(r.replace(/{{key}}/g,s.key).replace(/{{value}}/g,s.value).replace(/{{text}}/g,s.text||s.value))}return n.join("")}},{key:"getForm",value:function(){return this.formValue}},{key:"getValueByName",value:function(e){if(!e)return!1;switch(this.config[e].type){case"checkbox":for(var t=this.form.querySelectorAll("[name="+e+"]:not([value=all])"),n=t.length,r=[],a=0;a<n;a+=1)t[a].checked&&r.push(t[a].value);return this.setAllChecked(e,r.length===n),r;default:return this.formValue[e].value}}},{key:"checkAll",value:function(e,t){for(var n=this.form.querySelectorAll("[name="+e+"]:not([value=all])"),r=n.length,a=0;a<r;a+=1)n[a].checked=t}},{key:"setAllChecked",value:function(e,t){var n=this.form.querySelector("#"+e+"_all");if(!n)return!1;n.checked=t}},{key:"setValue",value:function(e,t){return!!e&&(this.formValue[e]=t,!0)}},{key:"getCheckedInput",value:function(e){return this.form.querySelectorAll("input[name="+e+"]:checked")}}]),e}();t.default=a},function(e,t,n){"use strict";var r=u(n(11)),a=u(n(10)),i=u(n(9)),o=u(n(8)),s=u(n(7)),l=u(n(6));function u(e){return e&&e.__esModule?e:{default:e}}n(5);var c=new o.default(null,document.getElementById("chart-wrapper")),h=new i.default(null,document.getElementById("table-wrapper"),s.default),f=new r.default(document.getElementById("option-form"),s.default),d=new a.default(l.default);document.getElementById("option-form").addEventListener("change",function(e){var t=e.target,n=t.name;if(!n)return!1;if("all"===t.value){if(!t.checked)return t.checked=!0;f.checkAll(n,t.checked)}var r=f.getCheckedInput(n).length;if(!t.checked&&!r)return t.checked=!0;if(!f.setValue(n,f.getValueByName(n)))return!1;var a="region"!==n?f.getCheckedInput("region").length:r,i="product"!==n?f.getCheckedInput("product").length:r,o=1===a&&i>1?"region":"product";d.filterData(f.getForm());var s=d.groupByKey(o);h.setData(s,o),c.setData(d.getValueList("sale"))}),document.getElementById("table").addEventListener("mouseover",function(e){var t,n=e.target;if(!/SPAN|P|EM|TD/.test(n.tagName.toUpperCase()))return!1;var r=null,a=n;do{"TR"===a.tagName.toUpperCase()&&(r=a),a=a.parentNode}while(!r);if(t=r.dataset.index,/null|undefined/.test(t))return!1;c.setData(d.getData()[t].sale)}),document.getElementById("table").addEventListener("mouseleave",function(e){c.setData(d.getValueList("sale"))}),document.addEventListener("click",function(e){var t=e.target;h.trigger(t,function(){p(t)})}),document.addEventListener("keydown",function(e){var t=e.keyCode;27===t?(e.preventDefault(),h.cancelUpdate()):13===t&&(e.preventDefault(),console.log(2323),p(),h.cancelUpdate())});var p=function(){var e=document.querySelector("p.active"),t=e.querySelector("input").value;if(!Number(t)&&"0"!==t)return alert("请输入正确数字");t=Number(t),e.querySelector("span").innerHTML=t;var n=null,r=null,a=e;do{var i=a.tagName.toUpperCase();"TR"===i&&(n=a),"TD"===i&&(r=a),a=a.parentNode}while(!n);d.changeData(n.dataset.index,r.dataset.key,t,function(e){c.setData(e.sale)})};d.filterData(),h.setData(d.groupByKey("product")),c.setData(d.getValueList("sale"))}]);
//# sourceMappingURL=app.2ca9359d44fa82c69db1.js.map