(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[1812],{652:e=>{e.exports=function(e){var t,n=[].forEach,l=[].some,o=document.body,i=!0,r=" ";function s(t,l){var o=l.appendChild(function(t){var l=document.createElement("li"),o=document.createElement("a");e.listItemClass&&l.setAttribute("class",e.listItemClass);e.onClick&&(o.onclick=e.onClick);e.includeTitleTags&&o.setAttribute("title",t.textContent);e.includeHtml&&t.childNodes.length?n.call(t.childNodes,(function(e){o.appendChild(e.cloneNode(!0))})):o.textContent=t.textContent;return o.setAttribute("href",e.basePath+"#"+t.id),o.setAttribute("class",e.linkClass+r+"node-name--"+t.nodeName+r+e.extraLinkClasses),l.appendChild(o),l}(t));if(t.children.length){var i=a(t.isCollapsed);t.children.forEach((function(e){s(e,i)})),o.appendChild(i)}}function a(t){var n=e.orderedList?"ol":"ul",l=document.createElement(n),o=e.listClass+r+e.extraListClasses;return t&&(o=(o=o+r+e.collapsibleClass)+r+e.isCollapsedClass),l.setAttribute("class",o),l}function c(t){var n=0;return null!==t&&(n=t.offsetTop,e.hasInnerContainers&&(n+=c(t.offsetParent))),n}function d(t){return t&&-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(r+e.isCollapsedClass).join(""),d(t.parentNode.parentNode)):t}return{enableTocAnimation:function(){i=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(i=!1)},render:function(e,n){var l=a(!1);if(n.forEach((function(e){s(e,l)})),null!==(t=e||t))return t.firstChild&&t.removeChild(t.firstChild),0===n.length?t:t.appendChild(l)},updateToc:function(s){var a;a=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop,e.positionFixedSelector&&function(){var n;n=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop;var l=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=t.offsetTop),n>e.fixedSidebarOffset?-1===l.className.indexOf(e.positionFixedClass)&&(l.className+=r+e.positionFixedClass):l.className=l.className.split(r+e.positionFixedClass).join("")}();var u,f=s;if(i&&null!==t&&f.length>0){l.call(f,(function(t,n){return c(t)>a+e.headingsOffset+10?(u=f[0===n?n:n-1],!0):n===f.length-1?(u=f[f.length-1],!0):void 0}));var m=t.querySelector("."+e.activeLinkClass),h=t.querySelector("."+e.linkClass+".node-name--"+u.nodeName+'[href="'+e.basePath+"#"+u.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1")+'"]');if(m===h)return;var p=t.querySelectorAll("."+e.linkClass);n.call(p,(function(t){t.className=t.className.split(r+e.activeLinkClass).join("")}));var C=t.querySelectorAll("."+e.listItemClass);n.call(C,(function(t){t.className=t.className.split(r+e.activeListItemClass).join("")})),h&&-1===h.className.indexOf(e.activeLinkClass)&&(h.className+=r+e.activeLinkClass);var g=h&&h.parentNode;g&&-1===g.className.indexOf(e.activeListItemClass)&&(g.className+=r+e.activeListItemClass);var v=t.querySelectorAll("."+e.listClass+"."+e.collapsibleClass);n.call(v,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=r+e.isCollapsedClass)})),h&&h.nextSibling&&-1!==h.nextSibling.className.indexOf(e.isCollapsedClass)&&(h.nextSibling.className=h.nextSibling.className.split(r+e.isCollapsedClass).join("")),d(h&&h.parentNode.parentNode)}}}}},455:e=>{e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollOffset:0}},1812:(e,t,n)=>{var l,o,i,r;r=void 0!==n.g?n.g:window||n.g,o=[],l=function(e){var t,l,o,i=n(455),r={},s={},a=n(652),c=n(92),d=n(1007),u=!!(e&&e.document&&e.document.querySelector&&e.addEventListener);if("undefined"!=typeof window||u){var f=Object.prototype.hasOwnProperty;return s.destroy=function(){var e=C(r);null!==e&&(r.skipRendering||e&&(e.innerHTML=""),r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(r.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1)))},s.init=function(e){if(u){r=m(i,e||{}),this.options=r,this.state={},r.scrollSmooth&&(r.duration=r.scrollSmoothDuration,r.offset=r.scrollSmoothOffset,s.scrollSmooth=n(6802).initSmoothScrolling(r)),t=a(r),l=c(r),this._buildHtml=t,this._parseContent=l,this._headingsArray=o,s.destroy();var f=p(r);if(null!==f){var g=C(r);if(null!==g&&null!==(o=l.selectHeadings(f,r.headingSelector))){var v=l.nestHeadingsArray(o).nest;if(r.skipRendering)return this;t.render(g,v),this._scrollListener=h((function(e){t.updateToc(o),!r.disableTocScrollSync&&d(r);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(o),r.scrollEndCallback&&r.scrollEndCallback(e))}),r.throttleTimeout),this._scrollListener(),r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var S=null;return this._clickListener=h((function(e){r.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(o),S&&clearTimeout(S),S=setTimeout((function(){t.enableTocAnimation()}),r.scrollSmoothDuration)}),r.throttleTimeout),r.scrollContainer&&document.querySelector(r.scrollContainer)?document.querySelector(r.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},s.refresh=function(e){s.destroy(),s.init(e||this.options)},e.tocbot=s,s}function m(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var l in n)f.call(n,l)&&(e[l]=n[l])}return e}function h(e,t,n){var l,o;return t||(t=250),function(){var i=n||this,r=+new Date,s=arguments;l&&r<l+t?(clearTimeout(o),o=setTimeout((function(){l=r,e.apply(i,s)}),t)):(l=r,e.apply(i,s))}}function p(e){try{return e.contentElement||document.querySelector(e.contentSelector)}catch(t){return console.warn("Contents element not found: "+e.contentSelector),null}}function C(e){try{return e.tocElement||document.querySelector(e.tocSelector)}catch(t){return console.warn("TOC element not found: "+e.tocSelector),null}}}(r),void 0===(i="function"==typeof l?l.apply(t,o):l)||(e.exports=i)},92:e=>{e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function l(e){return+e.nodeName.toUpperCase().replace("H","")}function o(t){if(!function(e){try{return e instanceof window.HTMLElement||e instanceof window.parent.HTMLElement}catch(t){return e instanceof window.HTMLElement}}(t))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;const n=t.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim());var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:l(t),textContent:n};return e.includeHtml&&(o.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(o,t):o}return{nestHeadingsArray:function(l){return t.call(l,(function(t,l){var i=o(l);return i&&function(t,l){for(var i=o(t),r=i.headingLevel,s=l,a=n(s),c=r-(a?a.headingLevel:0);c>0&&(!(a=n(s))||r!==a.headingLevel);)a&&void 0!==a.children&&(s=a.children),c--;r>=e.collapseDepth&&(i.isCollapsed=!0),s.push(i)}(i,t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var l=n;e.ignoreSelector&&(l=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return t.querySelectorAll(l)}catch(e){return console.warn("Headers not found with selector: "+l),null}}}}},6802:(e,t)=>{t.initSmoothScrolling=function(e){var t=e.duration,n=e.offset,l=location.hash?o(location.href):location.href;function o(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",(function(i){var r;"a"!==(r=i.target).tagName.toLowerCase()||!(r.hash.length>0||"#"===r.href.charAt(r.href.length-1))||o(r.href)!==l&&o(r.href)+"#"!==l||i.target.className.indexOf("no-smooth-scroll")>-1||"#"===i.target.href.charAt(i.target.href.length-2)&&"!"===i.target.href.charAt(i.target.href.length-1)||-1===i.target.className.indexOf(e.linkClass)||function(e,t){var n,l,o=window.pageYOffset,i={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||u},r=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]')||document.querySelector('[id="'+e.split("#").join("")+'"]'),s="string"==typeof e?i.offset+(e?r&&r.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,a="function"==typeof i.duration?i.duration(s):i.duration;function c(e){l=e-n,window.scrollTo(0,i.easing(l,o,s,a)),l<a?requestAnimationFrame(c):d()}function d(){window.scrollTo(0,o+s),"function"==typeof i.callback&&i.callback()}function u(e,t,n,l){return(e/=l/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}requestAnimationFrame((function(e){n=e,c(e)}))}(i.target.hash,{duration:t,offset:n,callback:function(){var e,t;e=i.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}})}),!1)}},1007:e=>{e.exports=function(e){var t=e.tocElement||document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);n&&(t.scrollTop=n.offsetTop-e.tocScrollOffset)}}}}]);
//# sourceMappingURL=1812.js.map