!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function s(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e,n){t.classList[n?"add":"remove"](e)}let h;function y(t){h=t}const b=[],v=[],$=[],x=[],w=Promise.resolve();let j=!1;function _(t){$.push(t)}function N(){const t=new Set;do{for(;b.length;){const t=b.shift();y(t),k(t.$$)}for(;v.length;)v.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];t.has(n)||(n(),t.add(n))}$.length=0}while(b.length);for(;x.length;)x.pop()();j=!1}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const O=new Set;function T(t,e){-1===t.$$.dirty[0]&&(b.push(t),j||(j=!0,w.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(c,l,u,i,s,a,f=[-1]){const d=h;y(c);const m=l.props||{},p=c.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:f};let g=!1;var b,v;p.ctx=u?u(c,m,(t,e,...n)=>{const r=n.length?n[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),g&&T(c,t)),e}):[],p.update(),g=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),l.target&&(l.hydrate?p.fragment&&p.fragment.l(function(t){return Array.from(t.childNodes)}(l.target)):p.fragment&&p.fragment.c(),l.intro&&((b=c.$$.fragment)&&b.i&&(O.delete(b),b.i(v))),function(t,n,c){const{fragment:l,on_mount:u,on_destroy:i,after_update:s}=t.$$;l&&l.m(n,c),_(()=>{const n=u.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(_)}(c,l.target,l.anchor),N()),y(d)}class C{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function L(t,e,n){const r=t.slice();return r[4]=e[n],r}function S(t){let e;return{c(){e=a("div"),e.textContent="Loading...",m(e,"class","text-center")},m(t,n){u(t,e,n)},d(t){t&&i(e)}}}function A(t){let e,n,r,o,c,s,g,h,y=t[4].name+"";return{c(){e=a("li"),n=a("img"),c=d(),s=a("small"),g=f(y),h=d(),n.src!==(r=""+(q+t[4].image))&&m(n,"src",r),m(n,"alt",o=t[4].name),m(n,"class","svelte-1xk7lxb"),m(s,"class","d-block text-center svelte-1xk7lxb"),m(e,"class","mb-2 svelte-1xk7lxb")},m(t,r){u(t,e,r),l(e,n),l(e,c),l(e,s),l(s,g),l(e,h)},p(t,e){1&e&&n.src!==(r=""+(q+t[4].image))&&m(n,"src",r),1&e&&o!==(o=t[4].name)&&m(n,"alt",o),1&e&&y!==(y=t[4].name+"")&&p(g,y)},d(t){t&&i(e)}}}function D(e){let n,r,o=e[1]&&S(),c=e[0],l=[];for(let t=0;t<c.length;t+=1)l[t]=A(L(e,c,t));return{c(){o&&o.c(),n=d(),r=a("ul");for(let t=0;t<l.length;t+=1)l[t].c();m(r,"class","no-bullets p-0 flex justify-between flex-wrap mt-2")},m(t,e){o&&o.m(t,e),u(t,n,e),u(t,r,e);for(let t=0;t<l.length;t+=1)l[t].m(r,null)},p(t,[e]){if(t[1]?o||(o=S(),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),1&e){let n;for(c=t[0],n=0;n<c.length;n+=1){const o=L(t,c,n);l[n]?l[n].p(o,e):(l[n]=A(o),l[n].c(),l[n].m(r,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=c.length}},i:t,o:t,d(t){o&&o.d(t),t&&i(n),t&&i(r),s(l,t)}}}let q="https://davids-students.herokuapp.com";function I(t,e,n){let{course:r}=e,{year:o}=e,c=[],l=!0;return(async()=>{let t=await fetch(`${q}/api/${o}/${r}/students`),e=await t.json();n(0,c=e.students),n(1,l=!1)})(),t.$set=t=>{"course"in t&&n(2,r=t.course),"year"in t&&n(3,o=t.year)},[c,l,r,o]}class M extends C{constructor(t){super(),E(this,t,I,D,c,{course:2,year:3})}}var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},W=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,P=/^0o[0-7]+$/i,z=parseInt,G="object"==typeof V&&V&&V.Object===Object&&V,H="object"==typeof self&&self&&self.Object===Object&&self,J=G||H||Function("return this")(),K=Object.prototype.toString,Q=Math.max,R=Math.min,U=function(){return J.Date.now()};function X(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==K.call(t)}(t))return NaN;if(X(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=X(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(W,"");var n=F.test(t);return n||P.test(t)?z(t.slice(2),n?2:8):B.test(t)?NaN:+t}var Z=function(t,e,n){var r,o,c,l,u,i,s=0,a=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=r,c=o;return r=o=void 0,s=e,l=t.apply(c,n)}function p(t){return s=t,u=setTimeout(h,e),a?m(t):l}function g(t){var n=t-i;return void 0===i||n>=e||n<0||f&&t-s>=c}function h(){var t=U();if(g(t))return y(t);u=setTimeout(h,function(t){var n=e-(t-i);return f?R(n,c-(t-s)):n}(t))}function y(t){return u=void 0,d&&r?m(t):(r=o=void 0,l)}function b(){var t=U(),n=g(t);if(r=arguments,o=this,i=t,n){if(void 0===u)return p(i);if(f)return u=setTimeout(h,e),m(i)}return void 0===u&&(u=setTimeout(h,e)),l}return e=Y(e)||0,X(n)&&(a=!!n.leading,c=(f="maxWait"in n)?Q(Y(n.maxWait)||0,e):c,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=i=o=u=void 0},b.flush=function(){return void 0===u?l:y(U())},b};function tt(t,e,n){const r=t.slice();return r[6]=e[n].url,r[7]=e[n].title,r}function et(t){let e,n,r=t[2]&&nt(),o=t[1]&&!t[2]&&rt();return{c(){r&&r.c(),e=d(),o&&o.c(),n=f("")},m(t,c){r&&r.m(t,c),u(t,e,c),o&&o.m(t,c),u(t,n,c)},p(t,c){t[2]?r||(r=nt(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),t[1]&&!t[2]?o||(o=rt(),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(t){r&&r.d(t),t&&i(e),o&&o.d(t),t&&i(n)}}}function nt(t){let e;return{c(){e=a("li"),e.textContent="Loading...",m(e,"class","svelte-u7jrr3")},m(t,n){u(t,e,n)},d(t){t&&i(e)}}}function rt(t){let e;return{c(){e=a("li"),e.textContent="No results",m(e,"class","svelte-u7jrr3")},m(t,n){u(t,e,n)},d(t){t&&i(e)}}}function ot(t){let e,n,r,o,c,s=t[7]+"";return{c(){e=a("li"),n=a("a"),r=f(s),c=d(),m(n,"href",o=t[6]),m(n,"class","svelte-u7jrr3"),m(e,"class","svelte-u7jrr3")},m(t,o){u(t,e,o),l(e,n),l(n,r),l(e,c)},p(t,e){1&e&&s!==(s=t[7]+"")&&p(r,s),1&e&&o!==(o=t[6])&&m(n,"href",o)},d(t){t&&i(e)}}}function ct(e){let n,r,o,c,f,p,h=e[0],y=[];for(let t=0;t<h.length;t+=1)y[t]=ot(tt(e,h,t));let b=null;return h.length||(b=et(e)),{c(){n=a("form"),r=a("div"),o=a("input"),c=d(),f=a("ul");for(let t=0;t<y.length;t+=1)y[t].c();b&&b.c(),m(o,"type","search"),m(o,"placeholder","Search"),m(o,"class","w-100 bg-secondary svelte-u7jrr3"),m(f,"class","autocomplete-items br-1 bl-1 no-bullets m-0 p-0 bg-secondary svelte-u7jrr3"),g(f,"scrollable",e[1]||e[2]),m(r,"class","autocomplete svelte-u7jrr3"),m(n,"autocomplete","off"),m(n,"class","mb-2")},m(t,i){u(t,n,i),l(n,r),l(r,o),l(r,c),l(r,f);for(let t=0;t<y.length;t+=1)y[t].m(f,null);var s,a,d,m;b&&b.m(f,null),s=o,a="input",d=e[3],s.addEventListener(a,d,m),p=()=>s.removeEventListener(a,d,m)},p(t,[e]){if(7&e){let n;for(h=t[0],n=0;n<h.length;n+=1){const r=tt(t,h,n);y[n]?y[n].p(r,e):(y[n]=ot(r),y[n].c(),y[n].m(f,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=h.length}!h.length&&b?b.p(t,e):h.length?b&&(b.d(1),b=null):(b=et(t),b.c(),b.m(f,null)),6&e&&g(f,"scrollable",t[1]||t[2])},i:t,o:t,d(t){t&&i(n),s(y,t),b&&b.d(),p()}}}function lt(t,e){return t.toLowerCase().includes(e.toLowerCase())}function ut(t,e,n){let r,o=[],c=[],l=!1;(async()=>{let t=await fetch("/feed.json");o=await t.json()})();let u=Z(t=>{n(2,l=!0),n(1,r=t.target.value),function(t){n(0,c=t?o.filter(({title:e,content:n,keywords:r})=>lt(e,t)||lt(n,t)||lt(r,t)):[])}(r),n(2,l=!1)},200);return[c,r,l,u]}class it extends C{constructor(t){super(),E(this,t,ut,ct,c,{})}}if(window.DAVID){const{course:t,year:e}=window.DAVID;new M({target:document.querySelector("#students-container"),props:{course:t,year:e}})}const st=document.querySelector("#autocomplete-container");st&&new it({target:st})}();
//# sourceMappingURL=svelte-bundle.js.map
