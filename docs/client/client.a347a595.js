function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t,e,n,o,r){t.__svelte_meta={loc:{file:e,line:n,column:o,char:r}}}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,s,c){const i=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(i){const r=a(e,n,o,c);t.p(r,i)}}function u(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function w(t){return Array.from(t.childNodes)}function y(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const s=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)r.removeAttribute(s[t]);return t.splice(o,1)[0]}}return o?d(e):f(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return h(e)}function b(t){return v(t," ")}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let E;function S(t){E=t}function _(){if(!E)throw new Error("Function called outside component initialization");return E}function A(t){_().$$.after_update.push(t)}function k(t,e){_().$$.context.set(t,e)}const P=[],R=[],j=[],O=[],C=Promise.resolve();let L=!1;function N(t){j.push(t)}let q=!1;const U=new Set;function B(){if(!q){q=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];S(e),D(e.$$)}for(S(null),P.length=0;R.length;)R.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];U.has(e)||(U.add(e),e())}j.length=0}while(P.length);for(;O.length;)O.pop()();L=!1,q=!1,U.clear()}}function D(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const T=new Set;let M;function I(){M={r:0,c:[],p:M}}function z(){M.r||s(M.c),M=M.p}function H(t,e){t&&t.i&&(T.delete(t),t.i(e))}function J(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),M.c.push(()=>{T.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const K="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Y(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function X(t,e,n){const{fragment:r,on_mount:i,on_destroy:a,after_update:l}=t.$$;r&&r.m(e,n),N(()=>{const e=i.map(o).filter(c);a?a.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(N)}function W(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(P.push(t),L||(L=!0,C.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,o,c,i,a,l=[-1]){const p=E;S(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=o?o(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&Q(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=w(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),X(e,n.target,n.anchor),B()}S(p)}function tt(t,e){document.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(t,Object.assign({version:"3.31.0"},e)))}function et(t,e){tt("SvelteDOMInsert",{target:t,node:e}),function(t,e){t.appendChild(e)}(t,e)}function nt(t,e,n){tt("SvelteDOMInsert",{target:t,node:e,anchor:n}),function(t,e,n){t.insertBefore(e,n||null)}(t,e,n)}function ot(t){tt("SvelteDOMRemove",{node:t}),u(t)}function rt(t,e,n){!function(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}(t,e,n),null==n?tt("SvelteDOMRemoveAttribute",{node:t,attribute:e}):tt("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function st(t,e){e=""+e,t.wholeText!==e&&(tt("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function ct(t){if(!("string"==typeof t||t&&"object"==typeof t&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw"function"==typeof Symbol&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function it(t,e,n){for(const o of Object.keys(e))~n.indexOf(o)||console.warn(`<${t}> received an unexpected slot "${o}".`)}class at extends class{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}const lt=[];function ut(e,n=t){let o;const r=[];function s(t){if(i(e,t)&&(e=t,o)){const t=!lt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),lt.push(n,e)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return r.push(a),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const pt={},ft=()=>({});function dt(t){let e,o;const r=t[1].default,s=function(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}(r,t,t[0],null),c={c:function(){e=f("main"),s&&s.c(),this.h()},l:function(t){e=y(t,"MAIN",{});var n=w(e);s&&s.l(n),n.forEach(ot),this.h()},h:function(){n(e,"src/routes/_layout.svelte",4,0,138)},m:function(t,n){nt(t,e,n),s&&s.m(e,null),o=!0},p:function(t,[e]){s&&s.p&&1&e&&l(s,r,t,t[0],e,null,null)},i:function(t){o||(H(s,t),o=!0)},o:function(t){J(s,t),o=!1},d:function(t){t&&ot(e),s&&s.d(t)}};return tt("SvelteRegisterBlock",{block:c,id:dt.name,type:"component",source:"",ctx:t}),c}function ht(t,e,n){let{$$slots:o={},$$scope:r}=e;it("Layout",o,["default"]);const s=[];return Object.keys(e).forEach(t=>{~s.indexOf(t)||"$$"===t.slice(0,2)||console.warn(`<Layout> was created with unknown prop '${t}'`)}),t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class mt extends at{constructor(t){super(t),Z(this,t,ht,dt,i,{}),tt("SvelteRegisterComponent",{component:this,tagName:"Layout",options:t,id:dt.name})}}const{Error:gt}=K,$t="src/routes/_error.svelte";function wt(t){let e,o,r=t[1].stack+"";const s={c:function(){e=f("pre"),o=h(r),this.h()},l:function(t){e=y(t,"PRE",{});var n=w(e);o=v(n,r),n.forEach(ot),this.h()},h:function(){n(e,$t,34,1,425)},m:function(t,n){nt(t,e,n),et(e,o)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&st(o,r)},d:function(t){t&&ot(e)}};return tt("SvelteRegisterBlock",{block:s,id:wt.name,type:"if",source:"(34:0) {#if dev && error.stack}",ctx:t}),s}function yt(e){let o,r,s,c,i,a,l,u,p,d=e[1].message+"";document.title=o=e[0];let $=e[2]&&e[1].stack&&wt(e);const E={c:function(){r=m(),s=f("h1"),c=h(e[0]),i=m(),a=f("p"),l=h(d),u=m(),$&&$.c(),p=g(),this.h()},l:function(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(ot),r=b(t),s=y(t,"H1",{class:!0});var n=w(s);c=v(n,e[0]),n.forEach(ot),i=b(t),a=y(t,"P",{class:!0});var o=w(a);l=v(o,d),o.forEach(ot),u=b(t),$&&$.l(t),p=g(),this.h()},h:function(){rt(s,"class","svelte-q86zst"),n(s,$t,29,0,356),rt(a,"class","svelte-q86zst"),n(a,$t,31,0,375)},m:function(t,e){nt(t,r,e),nt(t,s,e),et(s,c),nt(t,i,e),nt(t,a,e),et(a,l),nt(t,u,e),$&&$.m(t,e),nt(t,p,e)},p:function(t,[e]){1&e&&o!==(o=t[0])&&(document.title=o),1&e&&st(c,t[0]),2&e&&d!==(d=t[1].message+"")&&st(l,d),t[2]&&t[1].stack?$?$.p(t,e):($=wt(t),$.c(),$.m(p.parentNode,p)):$&&($.d(1),$=null)},i:t,o:t,d:function(t){t&&ot(r),t&&ot(s),t&&ot(i),t&&ot(a),t&&ot(u),$&&$.d(t),t&&ot(p)}};return tt("SvelteRegisterBlock",{block:E,id:yt.name,type:"component",source:"",ctx:e}),E}function vt(t,e,n){let{$$slots:o={},$$scope:r}=e;it("Error",o,[]);let{status:s}=e,{error:c}=e;const i=["status","error"];return Object.keys(e).forEach(t=>{~i.indexOf(t)||"$$"===t.slice(0,2)||console.warn(`<Error> was created with unknown prop '${t}'`)}),t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,c=t.error)},t.$capture_state=()=>({status:s,error:c,dev:!1}),t.$inject_state=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,c=t.error)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s,c,!1]}class bt extends at{constructor(t){super(t),Z(this,t,vt,yt,i,{status:0,error:1}),tt("SvelteRegisterComponent",{component:this,tagName:"Error",options:t,id:yt.name});const{ctx:e}=this.$$,n=t.props||{};void 0!==e[0]||"status"in n||console.warn("<Error> was created without expected prop 'status'"),void 0!==e[1]||"error"in n||console.warn("<Error> was created without expected prop 'error'")}get status(){throw new gt("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set status(t){throw new gt("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get error(){throw new gt("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set error(t){throw new gt("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{Error:xt}=K;function Et(t){let n,o,r;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n,$$inline:!0}}c&&(n=new c(i()));const a={c:function(){n&&F(n.$$.fragment),o=g()},l:function(t){n&&G(n.$$.fragment,t),o=g()},m:function(t,e){n&&X(n,t,e),nt(t,o,e),r=!0},p:function(t,e){const r=16&e?Y(s,[V(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){I();const t=n;J(t.$$.fragment,1,0,()=>{W(t,1)}),z()}c?(n=new c(i()),F(n.$$.fragment),H(n.$$.fragment,1),X(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i:function(t){r||(n&&H(n.$$.fragment,t),r=!0)},o:function(t){n&&J(n.$$.fragment,t),r=!1},d:function(t){t&&ot(o),n&&W(n,t)}};return tt("SvelteRegisterBlock",{block:a,id:Et.name,type:"else",source:"(20:1) {:else}",ctx:t}),a}function St(t){let e,n;e=new bt({props:{error:t[0],status:t[1]},$$inline:!0});const o={c:function(){F(e.$$.fragment)},l:function(t){G(e.$$.fragment,t)},m:function(t,o){X(e,t,o),n=!0},p:function(t,n){const o={};1&n&&(o.error=t[0]),2&n&&(o.status=t[1]),e.$set(o)},i:function(t){n||(H(e.$$.fragment,t),n=!0)},o:function(t){J(e.$$.fragment,t),n=!1},d:function(t){W(e,t)}};return tt("SvelteRegisterBlock",{block:o,id:St.name,type:"if",source:"(18:1) {#if error}",ctx:t}),o}function _t(t){let e,n,o,r;const s=[St,Et],c=[];function i(t,e){return t[0]?0:1}e=i(t),n=c[e]=s[e](t);const a={c:function(){n.c(),o=g()},l:function(t){n.l(t),o=g()},m:function(t,n){c[e].m(t,n),nt(t,o,n),r=!0},p:function(t,r){let a=e;e=i(t),e===a?c[e].p(t,r):(I(),J(c[a],1,1,()=>{c[a]=null}),z(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),H(n,1),n.m(o.parentNode,o))},i:function(t){r||(H(n),r=!0)},o:function(t){J(n),r=!1},d:function(t){c[e].d(t),t&&ot(o)}};return tt("SvelteRegisterBlock",{block:a,id:_t.name,type:"slot",source:'(17:0) <Layout segment=\\"{segments[0]}\\" {...level0.props}>',ctx:t}),a}function At(t){let n,o;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);n=new mt({props:s,$$inline:!0});const c={c:function(){F(n.$$.fragment)},l:function(t){G(n.$$.fragment,t)},m:function(t,e){X(n,t,e),o=!0},p:function(t,[e]){const o=12&e?Y(r,[4&e&&{segment:t[2][0]},8&e&&V(t[3].props)]):{};147&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i:function(t){o||(H(n.$$.fragment,t),o=!0)},o:function(t){J(n.$$.fragment,t),o=!1},d:function(t){W(n,t)}};return tt("SvelteRegisterBlock",{block:c,id:At.name,type:"component",source:"",ctx:t}),c}function kt(t,e,n){let{$$slots:o={},$$scope:r}=e;it("App",o,[]);let{stores:s}=e,{error:c}=e,{status:i}=e,{segments:a}=e,{level0:l}=e,{level1:u=null}=e,{notify:p}=e;A(p),k(pt,s);const f=["stores","error","status","segments","level0","level1","notify"];return Object.keys(e).forEach(t=>{~f.indexOf(t)||"$$"===t.slice(0,2)||console.warn(`<App> was created with unknown prop '${t}'`)}),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,c=t.error),"status"in t&&n(1,i=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,l=t.level0),"level1"in t&&n(4,u=t.level1),"notify"in t&&n(6,p=t.notify)},t.$capture_state=()=>({setContext:k,afterUpdate:A,CONTEXT_KEY:pt,Layout:mt,Error:bt,stores:s,error:c,status:i,segments:a,level0:l,level1:u,notify:p}),t.$inject_state=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,c=t.error),"status"in t&&n(1,i=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,l=t.level0),"level1"in t&&n(4,u=t.level1),"notify"in t&&n(6,p=t.notify)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,i,a,l,u,s,p]}class Pt extends at{constructor(t){super(t),Z(this,t,kt,At,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),tt("SvelteRegisterComponent",{component:this,tagName:"App",options:t,id:At.name});const{ctx:e}=this.$$,n=t.props||{};void 0!==e[5]||"stores"in n||console.warn("<App> was created without expected prop 'stores'"),void 0!==e[0]||"error"in n||console.warn("<App> was created without expected prop 'error'"),void 0!==e[1]||"status"in n||console.warn("<App> was created without expected prop 'status'"),void 0!==e[2]||"segments"in n||console.warn("<App> was created without expected prop 'segments'"),void 0!==e[3]||"level0"in n||console.warn("<App> was created without expected prop 'level0'"),void 0!==e[6]||"notify"in n||console.warn("<App> was created without expected prop 'notify'")}get stores(){throw new xt("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stores(t){throw new xt("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get error(){throw new xt("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set error(t){throw new xt("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get status(){throw new xt("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set status(t){throw new xt("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get segments(){throw new xt("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set segments(t){throw new xt("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get level0(){throw new xt("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set level0(t){throw new xt("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get level1(){throw new xt("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set level1(t){throw new xt("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get notify(){throw new xt("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set notify(t){throw new xt("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Rt=[],jt=[{js:()=>import("./index.e628d33f.js"),css:[]},{js:()=>import("./projects.c02fb67f.js"),css:[]}],Ot=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/projects\/?$/,parts:[{i:1}]}];const Ct="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,Nt,qt,Ut=!1,Bt=[],Dt="{}";const Tt={page:function(t){const e=ut(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let o;return e.subscribe(e=>{(void 0===o||n&&e!==o)&&t(o=e)})}}}({}),preloading:ut(null),session:ut(Ct&&Ct.session)};let Mt,It;Tt.session.subscribe(async t=>{if(Mt=t,!Ut)return;It=!0;const e=Gt(new URL(location.href)),n=Nt={},{redirect:o,props:r,branch:s}=await Zt(e);n===Nt&&await Qt(o,s,r,e.page)});let zt,Ht=null;let Jt,Kt=1;const Yt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Vt={};function Ft(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,o=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(o):e[n]=o}),e}function Gt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct.baseUrl))return null;let e=t.pathname.slice(Ct.baseUrl.length);if(""===e&&(e="/"),!Rt.some(t=>t.test(e)))for(let n=0;n<Ot.length;n+=1){const o=Ot[n],r=o.pattern.exec(e);if(r){const n=Ft(t.search),s=o.parts[o.parts.length-1],c=s.params?s.params(r):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:o,match:r,page:i}}}}function Xt(){return{x:pageXOffset,y:pageYOffset}}async function Wt(t,e,n,o){if(e)Jt=e;else{const t=Xt();Vt[Jt]=t,e=Jt=++Kt,Vt[Jt]=n?t:{x:0,y:0}}Jt=e,Lt&&Tt.preloading.set(!0);const r=Ht&&Ht.href===t.href?Ht.promise:Zt(t);Ht=null;const s=Nt={},{redirect:c,props:i,branch:a}=await r;if(s===Nt&&(await Qt(c,a,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Vt[e];if(o){const e=document.getElementById(o.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Vt[Jt]=t,t&&scrollTo(t.x,t.y)}}async function Qt(t,e,n,o){if(t)return function(t,e={replaceState:!1}){const n=Gt(new URL(t,document.baseURI));return n?(Yt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Wt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Tt.page.set(o),Tt.preloading.set(!1),Lt)Lt.$set(n);else{n.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},n.level0={props:await qt},n.notify=Tt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ee(t.nextSibling);ee(t),ee(e)}Lt=new Pt({target:zt,props:n,hydrate:!0})}Bt=e,Dt=JSON.stringify(o.query),Ut=!0,It=!1}async function Zt(t){const{route:e,page:n}=t,o=n.path.split("/").filter(Boolean);let r=null;const s={error:null,status:200,segments:[o[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let i;qt||(qt=Ct.preloaded[0]||ft.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Mt));let a=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const p=o[i];if(function(t,e,n,o){if(o!==Dt)return!0;const r=Bt[t];return!!r&&(e!==r.segment||(!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,p,l,r)&&(u=!0),s.segments[a]=o[i+1],!e)return{segment:p};const f=a++;if(!It&&!u&&Bt[i]&&Bt[i].part===e.i)return Bt[i];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(te);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(jt[e.i]);let m;return m=Ut||!Ct.preloaded[i+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Mt):{}:Ct.preloaded[i+1],s["level"+f]={component:d,props:m,segment:p,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:r,props:s,branch:i}}function te(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onload=()=>t(),o.onerror=n,document.head.appendChild(o)})}function ee(t){t.parentNode.removeChild(t)}function ne(t){const e=Gt(new URL(t,document.baseURI));if(e)return Ht&&t===Ht.href||function(t,e){Ht={href:t,promise:e}}(t,Zt(e)),Ht.promise}let oe;function re(t){clearTimeout(oe),oe=setTimeout(()=>{se(t)},20)}function se(t){const e=ie(t.target);e&&"prefetch"===e.rel&&ne(e.href)}function ce(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ie(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,o=String(n?e.href.baseVal:e.href);if(o===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(o);if(r.pathname===location.pathname&&r.search===location.search)return;const s=Gt(r);if(s){Wt(s,null,e.hasAttribute("sapper-noscroll"),r.hash),t.preventDefault(),Yt.pushState({id:Jt},"",r.href)}}function ie(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ae(t){if(Vt[Jt]=Xt(),t.state){const e=Gt(new URL(location.href));e?Wt(e,t.state.id):location.href=location.href}else Kt=Kt+1,function(t){Jt=t}(Kt),Yt.replaceState({id:Jt},"",location.href)}let le=document.querySelector("#sapper");var ue;le&&(ue={target:le},"scrollRestoration"in Yt&&(Yt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Yt.scrollRestoration="auto"}),addEventListener("load",()=>{Yt.scrollRestoration="manual"}),function(t){zt=t}(ue.target),addEventListener("click",ce),addEventListener("popstate",ae),addEventListener("touchstart",se),addEventListener("mousemove",re),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Yt.replaceState({id:Kt},"",e);const n=new URL(location.href);if(Ct.error)return function(t){const{host:e,pathname:n,search:o}=location,{session:r,preloaded:s,status:c,error:i}=Ct;qt||(qt=s&&s[0]),Qt(null,[],{error:i,status:c,session:r,level0:{props:qt},level1:{props:{status:c,error:i},component:bt},segments:s},{host:e,path:n,query:Ft(o),params:{}})}();const o=Gt(n);return o?Wt(o,Kt,!0,t):void 0}));export{H as A,J as B,W as C,e as D,Y as E,V as F,z as G,I as H,at as S,m as a,d as b,y as c,tt as d,f as e,ot as f,b as g,w as h,Z as i,v as j,rt as k,n as l,et as m,nt as n,t as o,ct as p,x as q,p as r,i as s,h as t,g as u,it as v,F as w,$ as x,G as y,X as z};
