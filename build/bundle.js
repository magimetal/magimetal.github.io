var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){t.parentNode.removeChild(t)}let l;function s(t){l=t}const i=[],u=[],f=[],h=[],d=Promise.resolve();let p=!1;function m(t){f.push(t)}let $=!1;const g=new Set;function b(){if(!$){$=!0;do{for(let t=0;t<i.length;t+=1){const e=i[t];s(e),w(e.$$)}for(s(null),i.length=0;u.length;)u.pop()();for(let t=0;t<f.length;t+=1){const e=f[t];g.has(e)||(g.add(e),e())}f.length=0}while(i.length);for(;h.length;)h.pop()();p=!1,$=!1,g.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(m)}}const y=new Set;function _(t,e){-1===t.$$.dirty[0]&&(i.push(t),p||(p=!0,d.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function v(a,i,u,f,h,d,p,$=[-1]){const g=l;s(a);const w=a.$$={fragment:null,ctx:null,props:d,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(g?g.$$.context:[])),callbacks:n(),dirty:$,skip_bound:!1,root:i.target||g.$$.root};p&&p(w.root);let v=!1;if(w.ctx=u?u(a,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return w.ctx&&h(w.ctx[t],w.ctx[t]=o)&&(!w.skip_bound&&w.bound[t]&&w.bound[t](o),v&&_(a,t)),e})):[],w.update(),v=!0,o(w.before_update),w.fragment=!!f&&f(w.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);w.fragment&&w.fragment.l(t),t.forEach(c)}else w.fragment&&w.fragment.c();i.intro&&((T=a.$$.fragment)&&T.i&&(y.delete(T),T.i(E))),function(t,n,a,c){const{fragment:l,on_mount:s,on_destroy:i,after_update:u}=t.$$;l&&l.m(n,a),c||m((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(m)}(a,i.target,i.anchor,i.customElement),b()}var T,E;s(g)}function T(e){let n;return{c(){var t;t="main",n=document.createElement(t),n.innerHTML='<div class="app-wrapper svelte-12edvkd"><div class="header"><h1>The Metals LIVE</h1> \n\t\t\t<h4>www.TheMetals.live</h4></div> \n\t\t<div class="body"><h2>Linktree</h2> \n\t\t\t<hr/> \n\t\t\t<ul><li><a href="https://Twitch.tv/TheMetalsLIVE">Twitch.tv/TheMetalsLIVE (Follow)</a></li> \n\t\t\t\t<li><a href="https://Facebook.com/TheMetalsLIVE">Facebook.com/TheMetalsLIVE (Follow/Like)</a></li> \n\t\t\t\t<li><a href="https://www.youtube.com/channel/UC6E2XY-U0wfTlcPlZ6NSGWg">YouTube Channel (Subscribe!)</a></li> \n\t\t\t\t<li><a href="https://Twitter.com/TheMetalsLIVE">Twitter.com/TheMetalsLIVE (Follow!)</a></li> \n\t\t\t\t<li><a href="https://Instagram.com/TheMetalsLIVE">Instagram.com/TheMetalsLIVE (Follow!)</a></li></ul></div></div>'},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}function E(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),v(this,t,E,T,a,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
