(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{435:function(e,t,n){"use strict";var r=n(10),o=n.n(r),a=n(28),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=new Map,d=new Map;function f(e){if(e){var t=l.get(e);if(t){var n=t.observerId,r=t.observer,o=n?d.get(n):r;o&&o.unobserve(e);var a=!1;n&&l.forEach(function(t,r){t&&t.observerId===n&&r!==e&&(a=!0)}),o&&!a&&(o.disconnect(),d.delete(n)),l.delete(e)}}}function p(e){e.forEach(function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=l.get(r);if(o&&n>=0){var a=o.options,i=!1;Array.isArray(a.threshold)?i=a.threshold.some(function(e){return o.visible?n>e:n>=e}):void 0!==a.threshold&&(i=o.visible?n>a.threshold:n>=a.threshold),void 0!==t&&(i=i&&t),o.visible=i,o.callback(i)}})}var h=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return c(s(s(t=e.call.apply(e,[this].concat(r))||this)),"state",{inView:!1}),c(s(s(t)),"node",null),c(s(s(t)),"handleNode",function(e){t.node&&f(t.node),t.node=e,t.observeNode()}),c(s(s(t)),"handleChange",function(e){t.setState({inView:e}),t.props.onChange&&t.props.onChange(e)}),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=o.prototype;return a.componentDidMount=function(){0},a.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(f(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(f(this.node),this.node=null)},a.componentWillUnmount=function(){this.node&&(f(this.node),this.node=null)},a.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,o=e.rootId;!function(e,t,n,r){void 0===n&&(n={threshold:0}),i()(!l.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e);var o=n,a=o.root,c=o.rootMargin,u=n.threshold||0;if(e&&t){var s=c?u.toString()+"_"+c:""+u.toString();a&&(s=r?r+"_"+s:null);var f=s?d.get(s):null;f||(f=new IntersectionObserver(p,n),s&&d.set(s,f));var h={callback:t,visible:!1,options:n,observerId:s,observer:s?void 0:f};l.set(e,h),f.observe(e)}}(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r},o)}},a.render=function(){var e=this.props,t=e.children,n=e.render,o=e.tag,a=(e.triggerOnce,e.threshold,e.root,e.rootId,e.rootMargin,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","render","tag","triggerOnce","threshold","root","rootId","rootMargin"])),i=this.state.inView,c=t||n;return"function"===typeof c?c({inView:i,ref:this.handleNode}):Object(r.createElement)(o||"div",u({ref:this.handleNode},a),t)},o}(r.Component);c(h,"defaultProps",{threshold:0,triggerOnce:!1});var A=h,g=n(443);n.d(t,"b",function(){return I}),n.d(t,"a",function(){return b}),n.d(t,"c",function(){return S});var b,v,m=function(e,t){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function O(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(v=b||(b={})).NotAsked="NotAsked",v.Loading="Loading",v.LoadSuccess="LoadSuccess",v.LoadError="LoadError";var j=Object(g.unionize)({NotAsked:{},Buffering:{},Loading:{},LoadSuccess:{},LoadError:Object(g.ofType)()}),N=Object(g.unionize)({ViewChanged:Object(g.ofType)(),BufferingEnded:{},LoadSuccess:{},LoadError:Object(g.ofType)()}),x=function(e,t){return function(n){var r=D(w(e,t));r.promise.then(function(e){return n.update(N.LoadSuccess({}))}).catch(function(e){e.isCanceled||n.update(N.LoadError({msg:"Failed to load"}))}),n.promiseCache.loading=r}},E=function(e){e.promiseCache.buffering.cancel()},S=function(e){function t(t){var n=e.call(this,t)||this;return n.promiseCache={},n.initialState=j.NotAsked(),n.state=n.initialState,n.update=n.update.bind(n),n}return function(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.reducer=function(e,t,n){return N.match(e,{ViewChanged:function(e){return!0===e.inView?n.src?j.match(t,{NotAsked:function(){return n.debounceDurationMs?{nextState:j.Buffering(),cmd:(e=n.debounceDurationMs,function(t){var n=D(C(e));n.promise.then(function(){return t.update(N.BufferingEnded())}).catch(function(e){}),t.promiseCache.buffering=n})}:{nextState:j.Loading(),cmd:x(n,n.experimentalDecode)};var e},default:function(){return{nextState:t}}}):{nextState:j.LoadSuccess()}:j.match(t,{Buffering:function(){return{nextState:j.NotAsked(),cmd:E}},default:function(){return{nextState:t}}})},BufferingEnded:function(){return{nextState:j.Loading(),cmd:x(n,n.experimentalDecode)}},LoadSuccess:function(){return{nextState:j.LoadSuccess()}},LoadError:function(e){return{nextState:j.LoadError(e)}}})},t.prototype.update=function(e){var n=this,r=t.reducer(e,this.state,this.props),o=r.nextState,a=r.cmd;this.props.debugActions&&(console.warn('You are running LazyImage with debugActions="true" in production. This might have performance implications.'),console.log({action:e,prevState:this.state,nextState:o})),this.setState(o,function(){return a&&a(n)})},t.prototype.componentWillUnmount=function(){this.promiseCache.loading&&this.promiseCache.loading.cancel(),this.promiseCache.buffering&&this.promiseCache.buffering.cancel(),this.promiseCache={}},t.prototype.render=function(){var e=this,t=this.props,n=t.children,r=t.loadEagerly,a=t.observerProps,i=O(t,["children","loadEagerly","observerProps","experimentalDecode","debounceDurationMs","debugActions"]);return r?n({imageState:j.LoadSuccess().tag,imageProps:i}):o.a.createElement(A,y({rootMargin:"50px 0px",threshold:.01},a,{onChange:function(t){return e.update(N.ViewChanged({inView:t}))}}),function(t){return n({imageState:"Buffering"===e.state.tag?b.Loading:e.state.tag,imageProps:i,ref:t.ref})})},t.displayName="LazyImageFull",t}(o.a.Component),w=function(e,t){var n=e.src,r=e.srcSet,o=e.alt,a=e.sizes;return void 0===t&&(t=!1),new Promise(function(e,i){var c=new Image;if(r&&(c.srcset=r),o&&(c.alt=o),a&&(c.sizes=a),c.src=n,t&&"decode"in c)return c.decode().then(function(t){return e(t)}).catch(function(e){return i(e)});c.onload=e,c.onerror=i})},C=function(e){return new Promise(function(t){return setTimeout(t,e)})},D=function(e){var t=!1;return{promise:new Promise(function(n,r){e.then(function(e){return t?r({isCanceled:!0}):n(e)}),e.catch(function(e){return r(t?{isCanceled:!0}:e)})}),cancel:function(){t=!0}}},I=function(e){var t=e.actual,n=e.placeholder,r=e.loading,a=e.error,i=O(e,["actual","placeholder","loading","error"]);return o.a.createElement(S,y({},i),function(e){var o=e.imageProps,i=e.ref;switch(e.imageState){case b.NotAsked:return!!n&&n({imageProps:o,ref:i});case b.Loading:return r?r():!!n&&n({imageProps:o,ref:i});case b.LoadSuccess:return t({imageProps:o});case b.LoadError:return a?a():t({imageProps:o})}})};I.displayName="LazyImage"},441:function(e,t){e.exports="data:image/png;base64,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Edo5SL9YAEmu3ng8Lu00ouJ1nKfl4012Y/BpKkGz0lartW0b+uxTury87HQ6q+10JTY7T+Qobb/7xgm9WCyc605kz0bwSdCD9htIaBSfHD5C/sQ5Hm+gWLqXlENNnez+LB+hQ/cbKJbNdeP4+Biho8uhwx089Ew0/92RPR8RCYzFNC5C+xw89Mi5mZtf1TVX2ccWoZWDaBFZnXvuSpgKUpVVnuE5nlHJ1BbJFmkJ0UZoE6QVNyks3rnhWX4pnlHJeIV2m1BWxDnnq19QaM+7K0G65L4zsTmqha5E6P8oMvXULdAW/yv/52+/3y9thrHYnEBvXQ2Edst0i2gXWmiVxENx94lsm/1fQ6OaBZVahA6XFRQXWuUGS9ahu/Hmi3mzSqdKVPNUU8uhC8rkcA+Kr6PRusHGacUN3TaOrNVFGNU6oNc7aVFQJslnbHuprDTVKtcicbTb7bZarZubG5VlV3JAeenUbSSV72dQD6EdHtzFb7lDELU6H92gZTqJ5QSm0+l8Pnd7AkhUbrfb8v6nnppHtcAxXqHNJr6BguhsNrNtMFa/HyJoiZFmDwoRSJ4wpvptdsuRl0v5q4ODA2kP4dJxUo7qm76p4Rn0zMON+ZmAvTr+Nq3LmZjhXIOPHLpOlPkUdtjXOdV8YyftPVaqJYHi4QVfrxG6ETiv6qPdInSkdzr5yhjybh3bd0ToUMidTj7ruL29je2UEDogyexmue11MMLauwgdEP9ttGmuCB0Xk8kkmZKnG98rztLoCB08k76+vk7s7fDx8XE0GsV5bgjd6Nvv9nVspySUyaujoyOcK0GCxWLx4cOHV69eJWBzzA8chr5LYj6fSzLd6/XqW2trNptllIckQjeO379/f//+fXd3V5yuV6iWpihvAtPp9O/fv5Gf6u75+Tmqlcze3t7JyUm73Y5/rbU8WG5vb2s0QoTQVSKh+vDw8ODgQP4Rj9yPSx4eHuo4eo/QEWGm4Xe7Xbc/n0wmztX3TKey6Fv3jSx4KYwIn6EKsTmlzkFn6IdOAdP/wHVA6ERsHg6HXAeEToHEhiERuuk2Rz5uh9BQFFPmAZsRGpsRGuKzuZk7HyN0ggyHQ2xG6HRsbkjFD4RuhM3Ou8QiNMTFbAnXAaETsZnhQIROhPv7e2xG6ER4fHy8vr7mOiB0IjYzgILQiZBkTQ+Ebq7NEpuTrLqE0A21meFAhE6E0WiEzQidSGxmONAHFsnGhSkhwHUgQgMgNCA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0wIr/CzAAwg+OuOmgbQAAAAAASUVORK5CYII="},442:function(e,t,n){"use strict";var r=n(19),o=n(2),a=n(0),i=n.n(a),c=n(435),u=n(428),s=n(3),l=n(5),d=n(441),f=n.n(d),p=Object(a.memo)(function(e){var t=e.series,n=e.icon,d=e.header,p=e.letter,h=e.style,A=e.ids,g=e.classNames,b=e.disablePreview,v=e.enableTooltip,m=e.blurOnRemove,y=e.onMouseEnterFunc,O=e.onMouseLeaveFunc,j=Object(a.useGlobal)("navInstance"),N=Object(o.a)(j,1)[0],x=Object(a.useGlobal)("userPanelInstance"),E=Object(o.a)(x,1)[0],S=Object(a.useGlobal)("theme"),w=Object(o.a)(S,1)[0],C=Object(a.useRef)(),D=Object(a.useRef)(),I=Object(a.useRef)(),Q=Object(a.useGlobal)("accountFuncs")[0],L=Q.isInWatchList,F=Q.addToRemoveFromWatchList,P=Q.isInFavoritesList,k=Q.addToRemoveFromFavoritesList,T=Q.defaultErrMsg;function G(){Object(l.err)(function(){return D.current.forEach(function(e){return Object(l.err)(function(){return e.close()})})})}function B(e){if(Array.isArray(A))return Object(l.err)(function(){return A.find(function(t){return t.index===e}).name},!0)}function R(e){if(Array.isArray(g))return Object(l.err)(function(){return g.find(function(t){return t.index===e}).name},!0)}v&&Object(a.useEffect)(function(){var e=C.current.querySelectorAll(".tooltipped");return D.current=window.M.Tooltip.init(e),function(){return Object(l.err)(function(){return D.current.forEach(function(e){return Object(l.err)(function(){return e.destroy()})})})}},[t]);var V=function(e){b||(I.current=setTimeout(function(){v&&G()},1500)),v&&G()},z=function(){b||clearTimeout(I.current)},U=function(e){e.url;window.innerWidth<994&&Object(l.err)(function(){return N.close()}),window.innerWidth<768&&Object(l.err)(function(){return E.close()})},W=function(e){return'<h5 style="margin:5px 0;">'.concat(e.title,"</h5>").concat(e.japanese_title&&e.japanese_title!==e.title?'<div style="margin:5px 0;opacity:0.6;">('.concat(e.japanese_title,")</div>"):"").concat(e.description||"")};return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("i",{className:"material-icons",style:{color:w.text_header_color,textAlign:"center",margin:"8px auto -24px auto",display:"table",padding:"0"}},n),d&&i.a.createElement("h5",{style:{minHeight:"70px",color:w.text_header_color,padding:"15px 15px 0",textAlign:"center"}},d+(p?" - "+p:"")),i.a.createElement("div",{ref:C,style:Object(r.a)({margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",color:w.text_header_color},h||{})},t&&t.map(function(e,t){return i.a.createElement("div",{id:B(t),key:e.url||t,className:"".concat(v?"tooltipped ":"").concat(R(t)||""),"data-position":v?"top":void 0,"data-tooltip":v?W(e):void 0,onMouseDown:V.bind(void 0,e),onMouseUp:z,onDragEnd:z,onTouchStart:V.bind(void 0,e),onTouchEnd:z,onMouseEnter:y?function(){return y(e)}:void 0,onMouseLeave:O?function(){return O(e)}:void 0,style:{width:"140px",height:"100%",float:"left",transformOrigin:"center top"}},i.a.createElement("div",{className:"row",style:{maxHeight:"359px",marginBottom:"13px"}},i.a.createElement("div",{className:"m6"},i.a.createElement("div",{className:"card",style:{color:w.text_tertiary_color,backgroundColor:w.tertiary_color}},i.a.createElement(u.a,{to:e.url||"",onClick:U.bind(void 0,e),className:"waves-effect waves-light",style:{color:w.text_tertiary_color,cursor:"pointer"}},i.a.createElement("div",{className:"card-image",style:{height:"211px"}},i.a.createElement(c.c,{src:Object(s.d)(e.poster_tall).poster||e.poster||f.a},function(t){var n=t.imageProps,r=t.imageState,o=t.ref;return i.a.createElement("img",Object.assign({},n,{alt:e.title,ref:o,src:r===c.a.LoadSuccess?n.src:f.a,style:{height:"211px"},className:r===c.a.LoadSuccess?"animate-opacity":void 0}))})),i.a.createElement("div",{className:"card-content",style:{height:"88px",overflow:"hidden",padding:"5px 8px",maxWidth:"173px"}},i.a.createElement("span",{className:"card-title animate-opacity",style:{textAlign:"center",display:"-webkit-box",WebkitLineClamp:"6",WebkitBoxOrient:"vertical",lineHeight:"1.5",fontWeight:"400",fontSize:"13.5px"}},e.title))),i.a.createElement("div",null,i.a.createElement("div",{onClick:function(t){return F.call(void 0,Object(r.a)({},e,{poster:e.poster||Object(s.d)(e.poster_tall).poster||f.a}),{blurOnRemove:m},t).catch(function(e){return Object(s.j)(e||T,!0)})},className:"btn waves-effect waves-light z-depth-0",style:{cursor:"pointer",color:"rgba(255,255,255,0.7)",backgroundColor:L(e)?"#4caf50":w.primary_color,display:"inline-block",height:"24px",lineHeight:"24px",padding:"0",width:"80%",borderRadius:"0px",fontSize:"11px"}},i.a.createElement("i",{className:"material-icons left",style:{left:"4px",position:"absolute",height:"24px",lineHeight:"24px",fontSize:"16px"}},"watch_later"),i.a.createElement("span",{style:{marginRight:"-18px"}},L(e)?"In ".concat(e.readable?"Read":"Watch"," List"):"".concat(e.readable?"Read":"Watch"," Later"))),i.a.createElement("div",{onClick:function(t){return k.call(void 0,Object(r.a)({},e,{poster:e.poster||Object(s.d)(e.poster_tall).poster||f.a}),{blurOnRemove:m},t).catch(function(e){return Object(s.j)(e||T,!0)})},className:"btn waves-effect waves-light z-depth-0",style:{cursor:"pointer",color:"rgba(255,255,255,0.7)",backgroundColor:P(e)?"#f44336":w.primary_color,filter:P(e)?void 0:"saturate(3)",display:"inline-block",height:"24px",lineHeight:"24px",padding:"0",width:"20%",borderRadius:"0px"}},i.a.createElement("i",{className:"material-icons left",style:{left:"5px",position:"absolute",height:"24px",lineHeight:"24px",fontSize:"16px"}},"favorite"))),!e.readable&&i.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.25)",overflow:"hidden",padding:"0",height:"32px"},className:"card-content"},i.a.createElement("span",{style:{textAlign:"center",fontSize:"12px",margin:"0"},className:"card-title animate-opacity"},e.is_subbed&&e.is_dubbed?"SUBS | DUBS":e.is_subbed&&!e.is_dubbed?"SUBS":!e.is_subbed&&e.is_dubbed?"DUBS":""))))))})))},l.compare);t.a=p},443:function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function o(e,t){var n=t||{},o=n.value,a=void 0===o?void 0:o,i=n.tag,c=void 0===i?"tag":i,u={},s=function(e){u[e]=function(t){return void 0===t&&(t={}),a?((n={})[c]=e,n[a]=t,n):r({},t,((o={})[c]=e,o));var n,o}};for(var l in e)s(l);var d={},f=function(e){d[e]=function(t){return t[c]===e}};for(var l in e)f(l);function p(e,t,n){void 0===n&&(n=t.default);var r=t[e[c]];return r?r(a?e[a]:e):n(e)}var h=function(e,t){return t?p(e,t):function(t){return p(t,e)}},A=function(e){return e},g={},b=function(e){var t;g[e]=h(((t={})[e]=function(e){return e},t.default=function(t){throw new Error("Attempted to cast "+t[c]+" as "+e)},t))};for(var v in e)b(v);return Object.assign({is:d,as:g,match:h,transform:function(e,t){return t?p(e,t,A):function(t){return p(t,e,A)}},_Record:e},u)}Object.defineProperty(t,"__esModule",{value:!0}),t.unionize=o,t.ofType=function(){},t.default=o},447:function(e,t,n){"use strict";var r=n(448),o=n(452),a=n(453);function i(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function c(e,t){return t.decode?a(e):e}function u(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function s(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var a=!0,i=!1,u=void 0;try{for(var s,l=e.split("&")[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var d=s.value.replace(/\+/g," ").split("="),f=r(d,2),p=f[0],h=f[1];h=void 0===h?null:c(h,t),n(c(p,t),h,o)}}catch(A){i=!0,u=A}finally{try{a||null==l.return||l.return()}finally{if(i)throw u}}return Object.keys(o).sort().reduce(function(e,t){var n=o[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(n):e[t]=n,e},Object.create(null))}t.extract=u,t.parse=s,t.stringify=function(e,t){if(!e)return"";var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[i(t,e),"[",r,"]"].join(""):[i(t,e),"[",i(r,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?[i(t,e),"[]"].join(""):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),r=Object.keys(e);return!1!==t.sort&&r.sort(t.sort),r.map(function(r){var o=e[r];if(void 0===o)return"";if(null===o)return i(r,t);if(Array.isArray(o)){var a=[],c=!0,u=!1,s=void 0;try{for(var l,d=o.slice()[Symbol.iterator]();!(c=(l=d.next()).done);c=!0){var f=l.value;void 0!==f&&a.push(n(r,f,a.length))}}catch(p){u=!0,s=p}finally{try{c||null==d.return||d.return()}finally{if(u)throw s}}return a.join("&")}return i(r,t)+"="+i(o,t)}).filter(function(e){return e.length>0}).join("&")},t.parseUrl=function(e,t){var n=e.indexOf("#");return-1!==n&&(e=e.slice(0,n)),{url:e.split("?")[0]||"",query:s(u(e),t)}}},448:function(e,t,n){var r=n(449),o=n(450),a=n(451);e.exports=function(e,t){return r(e)||o(e,t)||a()}},449:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},450:function(e,t){e.exports=function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}},451:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},452:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())})}},453:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function i(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var a=i(r[0]);a!==r[0]&&(n[r[0]]=a)}r=o.exec(e)}n["%C2"]="\ufffd";for(var c=Object.keys(n),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),n[s])}return e}(e)}}},672:function(e,t,n){"use strict";n.r(t);var r=n(19),o=n(2),a=n(0),i=n.n(a),c=n(442),u=n(427),s=n(3),l=n(447),d=n.n(l),f=n(5),p=n(117),h=n(48),A=n.n(h),g=n(120),b=n.n(g),v=n(12),m=Object(a.memo)(Object(u.a)(function(e){var t=e.location,n=e.history,u=Object(a.useGlobal)("theme"),l=Object(o.a)(u,1)[0],g=Object(a.useGlobal)("isSpider"),m=Object(o.a)(g,1)[0],y=d.a.parse(t.search).q,O=Object(a.useGlobal)("documentTitle").slice(-1),j=Object(o.a)(O,1)[0],N=Object(a.useState)(),x=Object(o.a)(N,2),E=x[0],S=x[1],w=Object(a.useState)(!0),C=Object(o.a)(w,2),D=C[0],I=C[1],Q=Object(a.useState)(Array(25).fill({})),L=Object(o.a)(Q,2),F=L[0],P=L[1],k=Object(a.useGlobal)("searchBarOpts").slice(-1),T=Object(o.a)(k,1)[0];Object(a.useEffect)(function(){Object(s.i)("pop"!==Object(f.err)(function(){return n.action.toLowerCase()},!0)&&1e3);var e=y?'Search results for "'.concat(y.trim(),'"'):"Search";j("".concat(e," | ").concat(v.site_name)),T({show:!0}),I(!0);var t=h.CancelToken.source();return!m&&y&&A.a.get("/api/v1/media/search?options=summary&q=".concat(y),{cancelToken:t.token}).then(function(e){var t=e.data;P(t.json.series),S(t.json.next_page),I(!1)}).catch(function(e){return!A.a.isCancel(e)&&I(!1)}),function(){return t.cancel()}},[y]);var G=Object(a.useGlobal)("navContent").slice(-1),B=Object(o.a)(G,1)[0],R=function(){return B({title:v.site_name,description:v.site_description,poster:b.a,expand:!0,wide:!0,showArticles:!0})};Object(a.useEffect)(R,[]);var V=y?F&&F.length?'Search results for "'.concat(y.trim(),'"'):"".concat(F&&!F.length?'No results found for "'.concat(y.trim(),'"'):"Loading results..."):"";return i.a.createElement("div",null,i.a.createElement("div",{style:{padding:"15px"}},D&&y?i.a.createElement(p.a,null):i.a.createElement("span",null,i.a.createElement("h5",{className:"left-align",style:{color:l.text_header_color}},V))),F&&i.a.createElement(c.a,{series:F,onMouseEnterFunc:function(e){return B(Object(r.a)({},e,Object(s.e)(e.poster_wide,e.poster_tall),{subTitle:e.japanese_title,expand:!0}))},onMouseLeaveFunc:R,style:{opacity:D?"0.5":"1.0",pointerEvents:D?"none":void 0}}),E&&i.a.createElement("a",{href:"#!",onClick:function(e){Object(f.err)(function(){return e.preventDefault()}),I(!0),A.a.get(E).then(function(e){var t=e.data;P(F.concat(t.json.series)),S(t.json.next_page),I(!1)}).catch(function(){return I(!1)})}.bind(void 0),className:"btn-large ".concat(D?"disabled":""," waves-effect waves-light"),style:{backgroundColor:l.primary_color,margin:"0 auto",display:"table",zIndex:"0"}},"More Results"))}),f.compare);t.default=m}}]);