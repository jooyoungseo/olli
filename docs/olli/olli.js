!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(()=>(()=>{"use strict";var e={144:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,'.olli-vis ul[role="tree"] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.olli-vis ul[role="tree"] li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.olli-vis [role="treeitem"][aria-expanded="false"] + [role="group"] {\n  display: none;\n}\n\n.olli-vis [role="treeitem"][aria-expanded="true"] + [role="group"] {\n  display: block;\n}\n\n.olli-vis [role="treeitem"][aria-expanded="false"] > ul {\n  display: none;\n}\n\n.olli-vis [role="treeitem"][aria-expanded="true"] > ul {\n  display: block;\n}\n\n/* .olli-vis [role="treeitem"],\n.olli-vis [role="treeitem"] span {\n  width: 9em;\n  margin: 0;\n  padding: 0.125em;\n  display: block;\n} */\n\n/* disable default keyboard focus styling for treeitems\n   Keyboard focus is styled with the following CSS */\n.olli-vis [role="treeitem"]:focus {\n  outline: 0;\n}\n\n.olli-vis [role="treeitem"].focus,\n.olli-vis [role="treeitem"] span.focus {\n  border-color: black;\n  background-color: #eee;\n}\n\n.olli-vis [role="treeitem"].hover,\n.olli-vis [role="treeitem"] span:hover {\n  background-color: #ddd;\n}\n',""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=i(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}o.push(l)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var c=r(e,i),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};return(()=>{n.r(r),n.d(r,{chart:()=>w,facetedChart:()=>C,olli:()=>F});var e=function(e){return e instanceof Date?e.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}):"string"==typeof e||isNaN(e)||e%1==0?String(e):Number(e).toFixed(2)},t=function(){function e(e,t,n){e.tabIndex=-1,this.tree=t,this.domNode=e,this.isExpandable=!1,this.isVisible=!1,this.inGroup=!1,n&&(this.inGroup=!0),this.parent=n,this.children=[];for(var r=e.firstElementChild;r;){if(["ul","table"].includes(r.tagName.toLowerCase())){this.isExpandable=!0;break}r=r.nextElementSibling}this.keyCode=Object.freeze({RETURN:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,X:88,Y:89,L:76,G:71,W:87,A:65,S:83,D:68,ESCAPE:27,PLUS:107,MINUS:189})}return e.prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("click",this.handleClick.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this)),this.isExpandable||(this.domNode.addEventListener("mouseover",this.handleMouseOver.bind(this)),this.domNode.addEventListener("mouseout",this.handleMouseOut.bind(this)))},e.prototype.isExpanded=function(){return!!this.isExpandable&&"true"===this.domNode.getAttribute("aria-expanded")},e.prototype.handleKeydown=function(e){e.altKey||e.ctrlKey||e.metaKey||this.checkBaseKeys(e)},e.prototype.checkBaseKeys=function(e){var t=!1;switch(e.key){case"Enter":case" ":this.isExpandable&&(this.isExpanded()?this.tree.collapseTreeItem(this):this.tree.expandTreeItem(this)),t=!0;break;case"ArrowDown":this.children.length>0&&this.isExpandable&&(this.tree.expandTreeItem(this),this.tree.setFocusToNextLayer(this)),t=!0;break;case"Escape":case"ArrowUp":this.inGroup&&(this.tree.setFocusToParentItem(this),t=!0);break;case"ArrowLeft":this.tree.setFocusToPreviousItem(this),t=!0;break;case"ArrowRight":this.tree.setFocusToNextItem(this),t=!0;break;case"Home":this.parent&&(this.tree.setFocusToFirstInLayer(this),t=!0);break;case"End":this.parent&&(this.tree.setFocusToLastInLayer(this),t=!0);break;case"x":this.tree.focusOnNodeType("xAxis",this);break;case"y":this.tree.focusOnNodeType("yAxis",this);break;case"l":this.tree.focusOnNodeType("legend",this);break;case"w":this.tree.setFocusGridUp(this);break;case"a":this.tree.setFocusGridLeft(this);break;case"s":this.tree.setFocusGridDown(this);break;case"d":this.tree.setFocusGridRight(this)}t&&(e.stopPropagation(),e.preventDefault())},e.prototype.handleClick=function(e){this.isExpandable?(this.isExpanded()?this.tree.collapseTreeItem(this):this.tree.expandTreeItem(this),e.stopPropagation()):(this.tree.setFocusToItem(this),e.stopPropagation())},e.prototype.handleFocus=function(){var e=this.domNode;this.isExpandable&&(e=e.firstElementChild),e.classList.add("focus")},e.prototype.handleBlur=function(){var e=this.domNode;this.isExpandable&&(e=e.firstElementChild),e.classList.remove("focus")},e.prototype.handleMouseOver=function(e){e.currentTarget.classList.add("hover")},e.prototype.handleMouseOut=function(e){e.currentTarget.classList.remove("hover")},e}(),i=function(){function e(e){this.domNode=e,this.treeItems=[]}return e.prototype.init=function(){!function e(n,r,i){for(var a=n.firstElementChild,o=i;a;)["li"].includes(a.tagName.toLowerCase())&&((o=new t(a,r,i)).init(),i&&i.children.push(o),r.treeItems.push(o)),a.firstElementChild&&e(a,r,o),a=a.nextElementSibling}(this.domNode,this,void 0),this.updateVisibleTreeItems(),this.rootTreeItem.domNode.tabIndex=0},e.prototype.setFocusToItem=function(e){for(var t=0;t<this.treeItems.length;t++){var n=this.treeItems[t];n===e?(n.domNode.tabIndex=0,n.domNode.focus(),n.domNode.setAttribute("aria-selected","true")):(n.domNode.tabIndex=-1,n.domNode.setAttribute("aria-selected","false"))}},e.prototype.setFocusToNextItem=function(e){if(e.parent){var t=e.parent.children.indexOf(e);t<e.parent.children.length-1&&this.setFocusToItem(e.parent.children[t+1])}},e.prototype.setFocusToPreviousItem=function(e){if(e.parent){var t=e.parent.children.indexOf(e);t>0&&this.setFocusToItem(e.parent.children[t-1])}},e.prototype.setFocusToNextLayer=function(e){e.lastVisitedChild?this.setFocusToItem(e.lastVisitedChild):this.setFocusToItem(e.children[0])},e.prototype.setFocusToParentItem=function(e){e.parent&&(e.parent.lastVisitedChild=e,this.setFocusToItem(e.parent),e.parent.isExpandable&&e.parent.isExpanded()&&this.collapseTreeItem(e.parent))},e.prototype.setFocusToFirstInLayer=function(e){e.parent&&this.setFocusToItem(e.parent.children[0])},e.prototype.setFocusToLastInLayer=function(e){e.parent&&this.setFocusToItem(e.parent.children[e.parent.children.length-1])},e.prototype.setFocusGridLeft=function(e){var t=e.domNode.getAttribute("data-i"),n=e.domNode.getAttribute("data-j");if(t&&n){var r=this.treeItems.find((function(e){return e.domNode.getAttribute("data-i")===String(Number(t)-1)&&e.domNode.getAttribute("data-j")===String(n)}));r&&this.setFocusToItem(r)}},e.prototype.setFocusGridRight=function(e){var t=e.domNode.getAttribute("data-i"),n=e.domNode.getAttribute("data-j");if(t&&n){var r=this.treeItems.find((function(e){return e.domNode.getAttribute("data-i")===String(Number(t)+1)&&e.domNode.getAttribute("data-j")===String(n)}));r&&this.setFocusToItem(r)}},e.prototype.setFocusGridUp=function(e){var t=e.domNode.getAttribute("data-i"),n=e.domNode.getAttribute("data-j");if(t&&n){var r=this.treeItems.find((function(e){return e.domNode.getAttribute("data-i")===String(t)&&e.domNode.getAttribute("data-j")===String(Number(n)+1)}));r&&this.setFocusToItem(r)}},e.prototype.setFocusGridDown=function(e){var t=e.domNode.getAttribute("data-i"),n=e.domNode.getAttribute("data-j");if(t&&n){var r=this.treeItems.find((function(e){return e.domNode.getAttribute("data-i")===String(t)&&e.domNode.getAttribute("data-j")===String(Number(n)-1)}));r&&this.setFocusToItem(r)}},e.prototype.expandTreeItem=function(e){e.isExpandable&&(e.parent&&e.parent.children.forEach((function(t){t!==e&&t.domNode.setAttribute("aria-expanded","false")})),e.domNode.setAttribute("aria-expanded","true"),this.updateVisibleTreeItems())},e.prototype.collapseTreeItem=function(e){var t;e.isExpanded()?t=e:e.parent&&(t=e.parent),t&&(t.domNode.setAttribute("aria-expanded","false"),this.updateVisibleTreeItems(),this.setFocusToItem(t))},e.prototype.updateVisibleTreeItems=function(){this.rootTreeItem=this.treeItems[0];for(var e=0;e<this.treeItems.length;e++){var t=this.treeItems[e],n=t.domNode.parentNode;for(t.isVisible=!0;n&&n!==this.domNode;)"false"==n.getAttribute("aria-expanded")&&(t.isVisible=!1),n=n.parentNode}},e.prototype.focusOnNodeType=function(e,t){for(var n=this,r=function(e){e&&e.isExpandable&&!e.isExpanded()&&(n.expandTreeItem(e),r(e.parent))},i=function(e){e.children.forEach((function(e){e.isExpandable&&e.isExpanded()&&(i(e),n.collapseTreeItem(e))}))},a=t.domNode.getAttribute("data-nodetype"),o=t;"chart"!==a;){if(!a)return;if(!o.parent)return;a=(o=o.parent).domNode.getAttribute("data-nodetype")}var s=o.children.find((function(t){var n=t.domNode.getAttribute("data-nodetype");return e===n}));s&&(r(s),i(s),this.setFocusToItem(s))},e}(),a=n(379),o=n.n(a),s=n(795),c=n.n(s),d=n(569),u=n.n(d),l=n(565),p=n.n(l),f=n(216),h=n.n(f),m=n(589),v=n.n(m),y=n(144),b={};b.styleTagTransform=v(),b.setAttributes=p(),b.insert=u().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=h(),o()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;var g=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o},x=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};function T(e){var t=E(e);switch(e.type){case"facetedChart":return{root:I("multiView",e.data,null,e,t),fieldsUsed:t};case"chart":return{root:I("chart",e.data,null,e,t),fieldsUsed:t};default:throw"olliVisSpec.type ".concat(e.type," not handled in olliVisSpecToTree")}}function E(e){switch(e.type){case"facetedChart":return x([],g(new Set(x([e.facetedField],g(x([],g(e.charts.values()),!1).flatMap((function(e){return E(e)}))),!1))),!1);case"chart":return x([],g(new Set(e.axes.concat(e.legends).reduce((function(e,t){return e.concat(t.field)}),[]))),!1);default:throw"olliVisSpec.type ".concat(e.type," not handled in getFieldsUsedForChart")}}var A=function(e,t,n,r){return e.filter((function(e){var i=e[t];if(i instanceof Date){var a=String(n),o=String(r);4===a.length&&4===o.length&&(i=i.getFullYear())}return i>=n&&i<r}))};function N(e){var t=function(e){return e.every((function(e){return"string"==typeof e||e instanceof String}))?{values:e.map((function(e){return Number(e.replaceAll(",",""))}))}:e.every((function(e){return e instanceof Date}))?{values:e.map((function(e){return e.getTime()})),isDate:!0}:{values:e}}(e),n=t.values.reduce((function(e,t,n,r){var i,a=n-1;if(0===n&&0===t)return e;if(-1===a&&0!==t)i=[t-(r[n+1]-t),t];else if(n===r.length-1){var o=t+(t-r[n-1]);e.push([r[a],t]),i=[t,o]}else i=[r[a],r[a+1]];return e.push([i[0],i[1]]),e}),[]);return t.isDate?n.map((function(e){return[new Date(e[0]),new Date(e[1])]})):n}function I(t,n,r,i,a,o,s,c,d,u,l){var p={type:t,parent:r,selected:n,gridIndex:l,description:t,children:[]},f=i,h=i;switch(t){case"multiView":p.children=x([],g(f.charts.entries()),!1).map((function(e,t,r){var i=g(e,2),o=i[0],s=i[1];return I("chart",n.filter((function(e){return String(e[f.facetedField])===o})),p,s,a,o,void 0,void 0,t,r.length)}));break;case"chart":var m=h.axes.filter((function(e){return"bar"!==h.mark||"continuous"!==e.type}));p.children=x(x(x([],g(m.map((function(e){return I("x"===e.axisType?"xAxis":"yAxis",n,p,h,a,o,void 0,e)}))),!1),g(h.legends.map((function(e){return I("legend",n,p,h,a,o,void 0,e)}))),!1),g("point"===h.mark&&2===m.length&&m.every((function(e){return"continuous"===e.type}))?[I("grid",n,p,h,a,o)]:[]),!1);break;case"xAxis":case"yAxis":var v=c;switch(v.type){case"discrete":p.children=v.values.map((function(e){return I("filteredData",n.filter((function(t){return String(t[v.field])===String(e)})),p,h,a,o,String(e),v)}));break;case"continuous":var y=N(v.values);p.children=y.map((function(e){var t=g(e,2),r=t[0],i=t[1];return I("filteredData",A(n,v.field,r,i),p,h,a,o,[r,i],v)}))}break;case"legend":var b=c;"discrete"===b.type&&(p.children=b.values.map((function(e){return I("filteredData",n.filter((function(t){return String(t[b.field])===String(e)})),p,h,a,o,String(e),b)})));break;case"grid":var T=h.axes.find((function(e){return"x"===e.axisType})),E=h.axes.find((function(e){return"y"===e.axisType})),S=N(T.values),w=N(E.values);p.children=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return e.flatMap((function(e){return t.map((function(t){return[e,t].flat()}))}))}))}(S,w).map((function(e,t){var r=g(e,4),i=r[0],s=r[1],c=r[2],d=r[3];return I("filteredData",A(A(n,T.field,i,s),E.field,c,d),p,h,a,o,[[i,s],[c,d]],void 0,void 0,void 0,{i:Math.floor(t/w.length),j:t%w.length})}));break;case"filteredData":p.children=n.map((function(e,t,n){return I("data",[e],p,h,a,o,void 0,c,t,n.length)}));break;case"data":if(p.tableKeys=a,c&&(p.tableKeys=p.tableKeys.filter((function(e){return e!==c.field})).concat([c.field])),o){var C=a[0];p.tableKeys=p.tableKeys.filter((function(e){return e!==C})).concat([C])}break;default:throw"Node type ".concat(t," not handled in olliVisSpecToNode")}return p.description=function(t,n,r,i,a,o,s){return function(t,n,r,i,a,o,s){var c,d=function(e){return"point"===e.mark?e.axes.every((function(e){return"continuous"===e.type}))?"scatterplot":"dot plot":e.mark?"".concat(e.mark," chart"):""},u=function(e){return e.title||r?'titled "'.concat(e.title||r,'"'):""},l=function(e){return'titled "'.concat(e.title||e.field,'"')},p=function(e,t,n){return void 0===n&&(n="s"),"".concat(e," ").concat(t).concat(1!==e?n:"")},f=function(t){return"discrete"===t.type?2===t.values.length?'with 2 values: "'.concat(e(t.values[0]),'" and "').concat(e(t.values[1]),'"'):"with ".concat(p(t.values.length,"value"),' starting with "').concat(t.values[0],'" and ending with "').concat(t.values[t.values.length-1],'"'):'with values from "'.concat(e(t.values[0]),'" to "').concat(e(t.values[t.values.length-1]),'"')},h=function(e){return e?'"'.concat(e,'".'):""},m=function(t){return t?Array.isArray(t)?"".concat(t.map((function(t){return e(t)})).join(" to ")):'"'.concat(e(t),'"'):""},v=function(e,t){return void 0!==e&&void 0!==t?"".concat(e+1," of ").concat(t,"."):""},y=n,b=a,g=a;switch(t.type){case"multiView":return"A faceted chart ".concat(u(n)," with ").concat(t.children.length," views.");case"chart":return"".concat(v(o,s)," A ").concat(d(y)," ").concat(u(y)," ").concat(function(e){return 1===e.axes.length?'with axis "'.concat(e.axes[0].title||e.axes[0].field,'"'):"with axes ".concat(e.axes.map((function(e){return'"'.concat(e.title||e.field,'"')})).join(" and "))}(y),".");case"xAxis":case"yAxis":return"".concat(b.axisType.toUpperCase(),"-axis ").concat(l(b)," ").concat(function(e){return"for a ".concat(e.scaleType||e.type," scale")}(b)," ").concat(f(b),". ").concat(h(r));case"legend":return"Legend ".concat(l(g)," ").concat(function(e){return e.channel?"for ".concat(e.channel):""}(g)," ").concat(f(b),". ").concat(h(r));case"grid":return"Grid view of ".concat(d(y),". ").concat(h(r));case"filteredData":return"grid"===(null===(c=t.parent)||void 0===c?void 0:c.type)?"".concat(p(t.children.length,"value")," ").concat((T=i,T?"in ".concat(m(T[0])," and ").concat(m(T[1])):""),". ").concat(h(r)):"".concat((x=m(i),x.charAt(0).toUpperCase()+x.slice(1)),". ").concat(p(t.children.length,"value"),". ").concat(h(r));case"data":return"".concat(v(o,s)," ").concat(function(t,n){var r;return null===(r=n.tableKeys)||void 0===r?void 0:r.map((function(n){var r=e(t[n]);return'"'.concat(n,'": "').concat(r,'"')})).join(", ")}(t.selected[0],t));default:throw"Node type ".concat(t.type," not handled in nodeToDesc")}var x;var T}(t,n,r,i,a,o,s).replace(/\s+/g," ").trim()}(p,i,o,s,c,d,u),p}var S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},S.apply(this,arguments)},w=function(e){return S(S({},e),{type:"chart"})},C=function(e){return S(S({},e),{type:"facetedChart"})};function F(t,n){var r=T(t),a=document.createElement("div");if(a.classList.add("olli-vis"),"table"===(n={renderType:(null==n?void 0:n.renderType)||"tree"}).renderType)a.appendChild(function(t,n){var r=document.createElement("table"),i=document.createElement("thead"),a=document.createElement("tr");n.forEach((function(e){var t=document.createElement("th");t.setAttribute("scope","col"),t.innerText=e,a.appendChild(t)})),i.appendChild(a),r.appendChild(i);var o=document.createElement("tbody");return t.forEach((function(t){var r=document.createElement("tr");n.forEach((function(n){var i=document.createElement("td");i.innerText=e(t[n]),r.appendChild(i)})),o.appendChild(r)})),r.appendChild(o),r}(r.root.selected,r.fieldsUsed));else{var o=function(t){var n,r=(Math.random()+1).toString(36).substring(7),i=t.root,a=document.createElement("ul"),o="".concat(r,"-").concat(i.type,"-label");return a.setAttribute("role","tree"),a.setAttribute("aria-labelledby",o),a.appendChild(function t(n,r,i,a,o){var s=document.createElement("li");s.setAttribute("role","treeitem"),s.setAttribute("aria-level",String(i)),s.setAttribute("aria-setsize",String(o)),s.setAttribute("aria-posinset",String(a)),s.setAttribute("aria-expanded","false"),s.setAttribute("data-nodetype",n.type),n.gridIndex&&(s.setAttribute("data-i",String(n.gridIndex.i)),s.setAttribute("data-j",String(n.gridIndex.j)));var c=document.createElement("span");if(c.textContent=n.description,s.appendChild(c),n.children.length){var d=n.children.filter((function(e){return"data"===e.type})),u=n.children.filter((function(e){return"data"!==e.type})),l=document.createElement("ul");l.setAttribute("role","group"),d.length?l.appendChild(function(t,n){var r,i=document.createElement("table");i.setAttribute("aria-label","Table with ".concat(t.length," rows")),i.setAttribute("aria-level",String(n)),i.setAttribute("aria-posinset","1"),i.setAttribute("aria-setsize","1");var a=document.createElement("thead"),o=document.createElement("tr");null===(r=t[0].tableKeys)||void 0===r||r.forEach((function(e){var t=document.createElement("th");t.setAttribute("scope","col"),t.innerText=e,o.appendChild(t)})),a.appendChild(o),i.appendChild(a);var s=document.createElement("tbody");t.forEach((function(t){var n,r=document.createElement("tr");null===(n=t.tableKeys)||void 0===n||n.forEach((function(n){var i=document.createElement("td"),a=e(t.selected[0][n]);i.innerText=a,r.appendChild(i)})),s.appendChild(r)})),i.appendChild(s);var c=document.createElement("li");return c.setAttribute("role","treeitem"),c.setAttribute("aria-level",String(n)),c.setAttribute("aria-setsize","1"),c.setAttribute("aria-posinset","1"),c.setAttribute("aria-expanded","false"),c.appendChild(i),c}(d,i+1)):u.forEach((function(e,n,a){l.appendChild(t(e,r,i+1,n+1,a.length))})),s.appendChild(l)}return s}(i,r,1,1,1)),null===(n=a.querySelector("span"))||void 0===n||n.setAttribute("id",o),a}(r);a.appendChild(o);var s=new i(o);s.init(),document.addEventListener("keypress",(function(e){"t"===e.key&&s.setFocusToItem(s.rootTreeItem)}))}return a}})(),r})()));