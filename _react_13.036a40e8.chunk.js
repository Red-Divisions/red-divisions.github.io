(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{435:function(e,t,r){"use strict";var n=r(10),a=r.n(n),o=r(28),i=r.n(o);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=new Map,d=new Map;function p(e){if(e){var t=u.get(e);if(t){var r=t.observerId,n=t.observer,a=r?d.get(r):n;a&&a.unobserve(e);var o=!1;r&&u.forEach(function(t,n){t&&t.observerId===r&&n!==e&&(o=!0)}),a&&!o&&(a.disconnect(),d.delete(r)),u.delete(e)}}}function m(e){e.forEach(function(e){var t=e.isIntersecting,r=e.intersectionRatio,n=e.target,a=u.get(n);if(a&&r>=0){var o=a.options,i=!1;Array.isArray(o.threshold)?i=o.threshold.some(function(e){return a.visible?r>e:r>=e}):void 0!==o.threshold&&(i=a.visible?r>o.threshold:r>=o.threshold),void 0!==t&&(i=i&&t),a.visible=i,a.callback(i)}})}var f=function(e){var t,r;function a(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return c(l(l(t=e.call.apply(e,[this].concat(n))||this)),"state",{inView:!1}),c(l(l(t)),"node",null),c(l(l(t)),"handleNode",function(e){t.node&&p(t.node),t.node=e,t.observeNode()}),c(l(l(t)),"handleChange",function(e){t.setState({inView:e}),t.props.onChange&&t.props.onChange(e)}),t}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=a.prototype;return o.componentDidMount=function(){0},o.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(p(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(p(this.node),this.node=null)},o.componentWillUnmount=function(){this.node&&(p(this.node),this.node=null)},o.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,a=e.rootId;!function(e,t,r,n){void 0===r&&(r={threshold:0}),i()(!u.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e);var a=r,o=a.root,c=a.rootMargin,s=r.threshold||0;if(e&&t){var l=c?s.toString()+"_"+c:""+s.toString();o&&(l=n?n+"_"+l:null);var p=l?d.get(l):null;p||(p=new IntersectionObserver(m,r),l&&d.set(l,p));var f={callback:t,visible:!1,options:r,observerId:l,observer:l?void 0:p};u.set(e,f),p.observe(e)}}(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n},a)}},o.render=function(){var e=this.props,t=e.children,r=e.render,a=e.tag,o=(e.triggerOnce,e.threshold,e.root,e.rootId,e.rootMargin,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children","render","tag","triggerOnce","threshold","root","rootId","rootMargin"])),i=this.state.inView,c=t||r;return"function"===typeof c?c({inView:i,ref:this.handleNode}):Object(n.createElement)(a||"div",s({ref:this.handleNode},o),t)},a}(n.Component);c(f,"defaultProps",{threshold:0,triggerOnce:!1});var h=f,b=r(443);r.d(t,"b",function(){return I}),r.d(t,"a",function(){return g}),r.d(t,"c",function(){return S});var g,A,v=function(e,t){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function O(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r}(A=g||(g={})).NotAsked="NotAsked",A.Loading="Loading",A.LoadSuccess="LoadSuccess",A.LoadError="LoadError";var E=Object(b.unionize)({NotAsked:{},Buffering:{},Loading:{},LoadSuccess:{},LoadError:Object(b.ofType)()}),N=Object(b.unionize)({ViewChanged:Object(b.ofType)(),BufferingEnded:{},LoadSuccess:{},LoadError:Object(b.ofType)()}),x=function(e,t){return function(r){var n=D(w(e,t));n.promise.then(function(e){return r.update(N.LoadSuccess({}))}).catch(function(e){e.isCanceled||r.update(N.LoadError({msg:"Failed to load"}))}),r.promiseCache.loading=n}},j=function(e){e.promiseCache.buffering.cancel()},S=function(e){function t(t){var r=e.call(this,t)||this;return r.promiseCache={},r.initialState=E.NotAsked(),r.state=r.initialState,r.update=r.update.bind(r),r}return function(e,t){function r(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.reducer=function(e,t,r){return N.match(e,{ViewChanged:function(e){return!0===e.inView?r.src?E.match(t,{NotAsked:function(){return r.debounceDurationMs?{nextState:E.Buffering(),cmd:(e=r.debounceDurationMs,function(t){var r=D(C(e));r.promise.then(function(){return t.update(N.BufferingEnded())}).catch(function(e){}),t.promiseCache.buffering=r})}:{nextState:E.Loading(),cmd:x(r,r.experimentalDecode)};var e},default:function(){return{nextState:t}}}):{nextState:E.LoadSuccess()}:E.match(t,{Buffering:function(){return{nextState:E.NotAsked(),cmd:j}},default:function(){return{nextState:t}}})},BufferingEnded:function(){return{nextState:E.Loading(),cmd:x(r,r.experimentalDecode)}},LoadSuccess:function(){return{nextState:E.LoadSuccess()}},LoadError:function(e){return{nextState:E.LoadError(e)}}})},t.prototype.update=function(e){var r=this,n=t.reducer(e,this.state,this.props),a=n.nextState,o=n.cmd;this.props.debugActions&&(console.warn('You are running LazyImage with debugActions="true" in production. This might have performance implications.'),console.log({action:e,prevState:this.state,nextState:a})),this.setState(a,function(){return o&&o(r)})},t.prototype.componentWillUnmount=function(){this.promiseCache.loading&&this.promiseCache.loading.cancel(),this.promiseCache.buffering&&this.promiseCache.buffering.cancel(),this.promiseCache={}},t.prototype.render=function(){var e=this,t=this.props,r=t.children,n=t.loadEagerly,o=t.observerProps,i=O(t,["children","loadEagerly","observerProps","experimentalDecode","debounceDurationMs","debugActions"]);return n?r({imageState:E.LoadSuccess().tag,imageProps:i}):a.a.createElement(h,y({rootMargin:"50px 0px",threshold:.01},o,{onChange:function(t){return e.update(N.ViewChanged({inView:t}))}}),function(t){return r({imageState:"Buffering"===e.state.tag?g.Loading:e.state.tag,imageProps:i,ref:t.ref})})},t.displayName="LazyImageFull",t}(a.a.Component),w=function(e,t){var r=e.src,n=e.srcSet,a=e.alt,o=e.sizes;return void 0===t&&(t=!1),new Promise(function(e,i){var c=new Image;if(n&&(c.srcset=n),a&&(c.alt=a),o&&(c.sizes=o),c.src=r,t&&"decode"in c)return c.decode().then(function(t){return e(t)}).catch(function(e){return i(e)});c.onload=e,c.onerror=i})},C=function(e){return new Promise(function(t){return setTimeout(t,e)})},D=function(e){var t=!1;return{promise:new Promise(function(r,n){e.then(function(e){return t?n({isCanceled:!0}):r(e)}),e.catch(function(e){return n(t?{isCanceled:!0}:e)})}),cancel:function(){t=!0}}},I=function(e){var t=e.actual,r=e.placeholder,n=e.loading,o=e.error,i=O(e,["actual","placeholder","loading","error"]);return a.a.createElement(S,y({},i),function(e){var a=e.imageProps,i=e.ref;switch(e.imageState){case g.NotAsked:return!!r&&r({imageProps:a,ref:i});case g.Loading:return n?n():!!r&&r({imageProps:a,ref:i});case g.LoadSuccess:return t({imageProps:a});case g.LoadError:return o?o():t({imageProps:a})}})};I.displayName="LazyImage"},441:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAFoCAIAAADmdeFfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADuZJREFUeNrsnb9PG0sXQOFLQpM0pAEpciQEjd1A48qVaSxFSpW/kCoVVSoqKlduTGNLkWmMFEGDm0SRiCJ9V573/CyDd3dm7uzOzp5ToESC9Xr3zN278+PO7vn5+Q5AKvyPSwAIDYDQAAgNgNCA0AAIDYDQAAgNgNCA0AAIDYDQAAgNgNCA0AAIDYDQAAgNgNCA0AAIDYDQAAgNgNCA0AAIDYDQAAgNgNCA0AAIDYDQAAgNgNCA0AAIDYDQAAgNCA2A0AAIDYDQAAgNCA2A0AAIDYDQAAgNCA2A0AAIDYDQAAgNCA2A0AAIDYDQAAgNCA2A0AAIDYDQAAgNCA2A0AAIDYDQAAgNCA2A0AAIDYDQAAgNCA2A0AAIDYDQgNAACA2A0AAIDYDQgNAACA2A0AAIDYDQgNAACA2A0AAIDYDQgNAACA2A0AAIDYDQgNAACA2A0AAIDYDQgNAACA2A0ADOvOYSxMn79+/39vZK+KDHx8enpyeEBh3evXt3eHi4v78vBr9bUuHJ3N/fi9yLxUIsN/9GaCjqcbvd/vjxY7UGbyBNS37KWZn/zufzu7s7+Vkjs3fPz8/Rq2SVT09PT05O6nLCYvN0Op1MJrXQGqFL5ezsTGyu45n//PlzNBpJtI78PF8dHR3hWQnIG96nT5/qe7Xl/OXk5eePHz9iPk+67UqyYTAYyGtf3b9Ip9Pp9XoIjc0p2GyQ7L/b7SJ0c5GQlozNqzi96glB6GbxcUmSrbSccR+EjouYn86eeVScXw2hw6abUY2bNOHbIXRAatrlbOU0QjeFw8PDhMOz4fj4GKGbQoQ3Wx0zswqhmxKhm/A1W60WQqePmQtKu0XodITmm1YC86GDsL+/X+bH/VyyLlmZox4SpO/v7xGauOWIWU6yWCxE4gyTJOd5v0TS3KDnIwdH6H9a9mAwsPqTi4uL7F/48uVLbvL69PT09evX7N+xnbh8c3MzHo+DCi0eT6dTUWc9GOeG7fl8Licm1+Tk5OT4+DhEZv/27VtSjn/ukPoxi9ywIo9j25u08V10n/gisTQYnygoZo+XdDodaai6pxdVGl2l0A5LerLTteLhJzfts41k699F8QaLiMPhUPGBPplMZrNZv99PtVex4l4O3SBd3MLcEGUbw9a/iFb8k2zh27dv6umptL2rqyvRWjF1RGjHIJ2tbPHQmPubtlFWfQGp5BjX19fh1qVK4Fd0GqH/e6QqCl08NL558ybcc8Y/Yolt66+YgRiNRiFeYxot9K9fv6x+P1vE4r2/2QG42vA8W1LO41Fajsqh4pnsX7MIna1a8cuqFenV3wTkUFqSFfw4yW1S6uiomdBalzVbaNsujj9//mh9BcmbS74Fk8lE9y4gdAUROvtQtkJrCVGJW6YwEkJXI3SGsravYoppn5aFKk9/t6wdoWN02oqMBnBwcFC+0GJVVcXj5HOTcbp+Qm9LFWwjtGLPnYrQd3d3Pn9uFo84T9V4eHhIQ+jqZ9tphSVbQTNyaKt3dhWb5SI410GUs+12u6v2bPpJbDte5NMjr/FVmwi9WCxURLTtOcpIXayyGhWhnce3JSQPBoP1p5Nch36/b5uYSYtKY5CleqFtI/S2W2V7C7c1ANvjqAht26pXvFjBSCzvdDq2h0JoHWyv47bUwqFv/8WM0/Y4toOdihE6Y9G1w5pz50aF0F4R+kXh3F6GVGa7V1jXPqNqnsN2LUToaiK0opovtg3bCK1y/m4ROjs7qmp4qOlCq1joJvSLQji8TlV1KbInY9m2TB+h42kMUQhtFZ9eFM5N6BcHUDwXX5VJdtZb5gw4hFZOMNzWafq3jZS2rEwj64hCaNthqufOKebQ/uG5tJid/UEOjTwBoROpy+GspgTpjShrNYT+YoQuLWx7rvM1PSGmKo2k4/IzgYJPUQgtN8aqCMbzNdvO+aJnkRStvls5DYe4bgbMc7e8MKYafSVsv/uXnRRJIUL7xJWN+1pViHJukNPpdJvQ8l0+f/7cnCp7de3leJ4d+rzObwhteyitGgPO8VJOYDKZZATmEm5fVG/GKfRy+Kyy3ujKrWqxp09xx5ubm2oH+aIaYoxF6KouyobBtiFNK0L7tEkJkEEreJByBH9sbdx+2wUmWiZtw6Hzy7MArnzi1dUVThOhN4O01aN/W3h268313J9TLiBORyS0bSWA9TTaM8qupxkVFkxpt9v+QQGn6xqhV0L7K7h+BKveBt11eNKu/PMfnK5lDr1uoX/P1PoRqh1uUNmoU5y+vLxMr2hdzYR2XvvtH6GdC9CrSyMRWmVvVlMwt7RtIuiHVnuRKhKhc7VbRWXbJ36IG9ntdlXyePUi0BlEtXYrooEVK6dX3RG58TU3UDknLSEe62Jzv9/XOtpwOKyqGhNC2wm9CmO5WW9uARfndDzQo1YeFGdnZ1pHG4/HZZYzRejgQkuEzjXPJBtWz/qgb13ydqiSTBsk8WjOUGJEQlvVA1hF0yL9ErnyGZWtai+F9qPX6ylOLZrP5w3pzqtrhC6YJJgEOvfI5jhWApXQLzYYDBSdbkgXdY2FLjL/wdy/3NjvULhRsch5xnNDnPYcEt9wOvku6oiEdhhbyQ1gpkcp9xaa41h125Wz/M50eijm06Y7L2GnIxLa9irvLSnSSHKbisMAYZnrSSWfdqhVl3FNhsNhqrlHXBP8ra6yhNXcyXGmkeR2RTussSt5gXS321Usd5twPh2X0A5BuqB2uTfPNlUtf8W/JB6SUmvNByx5uy0idD4SnnOz3pV2BXvuorXZIN9XnNaaQTWfz9MbR4xLaKtZAbkKrkucq6DVTLcKC7LoruUej8elzWFqotC24ap4vFep4hyD0Dva3Xn+L4jO0xXTF1o3WlhFaCt0m4eb01rdeXJlPBOPqGrW1DhC57I+9qErdCT9A70l/seZTCbJJB4pR+j1o+kOJcQzMCFBWsXpZN4OU47Q63FUN6ZG1YOr0p13vwShow7SG3E03JGfJ7jlvx/7O51GkE42Qj8PolphNfc4ldRHNNtveoYSCp7ro1Ub4HkQ1Vr6Fu3MHsk9PJ123s0WoYPzPNhohZ9qE2j59Iw1OJ1Ox6e4h9t+41F120VXH1or/j3vKtYSusxFzsZd+cSfS1avARvbIa/T6/UuLy/LfIFB6DLi3/OGEfkkYKOsnKQ0Rflp/uuml+QezgUMxOkQBSyJ0PG+FIbo3rq4uFBs9qenp85Cy/WvtdDR5dDhInQgFyshO+3J2AM8lxKWljXupVAlSIfbnyq3VcQQ4VqtVjzPn6YL7a/dtrsSVdEqn/eq3PS61mlDakL7d0dsaxL+Rw4UwNSFLnlwp8K62jUQ2n9y5rZInMBIWJyJQTybxzUrQvtn57pFzn0yhNzv0sysI02ht93saNc5O1S6yQ3Szazjn6bQGUfwDNKBRmccHtnT6bSSU0XouIT2jFvhSug6fMeMuUTONtd9K+VIJyf5eJPdHjyT4HBhz8Gk0Wi07UK5TTPaiWzFazpC+3iTLXScEdo5SL9YAEmu3ng8Lu00ouJ1nKfl4012Y/BpKkGz0lartW0b+uxTury87HQ6q+10JTY7T+Qobb/7xgm9WCyc605kz0bwSdCD9htIaBSfHD5C/sQ5Hm+gWLqXlENNnez+LB+hQ/cbKJbNdeP4+Biho8uhwx089Ew0/92RPR8RCYzFNC5C+xw89Mi5mZtf1TVX2ccWoZWDaBFZnXvuSpgKUpVVnuE5nlHJ1BbJFmkJ0UZoE6QVNyks3rnhWX4pnlHJeIV2m1BWxDnnq19QaM+7K0G65L4zsTmqha5E6P8oMvXULdAW/yv/52+/3y9thrHYnEBvXQ2Edst0i2gXWmiVxENx94lsm/1fQ6OaBZVahA6XFRQXWuUGS9ahu/Hmi3mzSqdKVPNUU8uhC8rkcA+Kr6PRusHGacUN3TaOrNVFGNU6oNc7aVFQJslnbHuprDTVKtcicbTb7bZarZubG5VlV3JAeenUbSSV72dQD6EdHtzFb7lDELU6H92gZTqJ5QSm0+l8Pnd7AkhUbrfb8v6nnppHtcAxXqHNJr6BguhsNrNtMFa/HyJoiZFmDwoRSJ4wpvptdsuRl0v5q4ODA2kP4dJxUo7qm76p4Rn0zMON+ZmAvTr+Nq3LmZjhXIOPHLpOlPkUdtjXOdV8YyftPVaqJYHi4QVfrxG6ETiv6qPdInSkdzr5yhjybh3bd0ToUMidTj7ruL29je2UEDogyexmue11MMLauwgdEP9ttGmuCB0Xk8kkmZKnG98rztLoCB08k76+vk7s7fDx8XE0GsV5bgjd6Nvv9nVspySUyaujoyOcK0GCxWLx4cOHV69eJWBzzA8chr5LYj6fSzLd6/XqW2trNptllIckQjeO379/f//+fXd3V5yuV6iWpihvAtPp9O/fv5Gf6u75+Tmqlcze3t7JyUm73Y5/rbU8WG5vb2s0QoTQVSKh+vDw8ODgQP4Rj9yPSx4eHuo4eo/QEWGm4Xe7Xbc/n0wmztX3TKey6Fv3jSx4KYwIn6EKsTmlzkFn6IdOAdP/wHVA6ERsHg6HXAeEToHEhiERuuk2Rz5uh9BQFFPmAZsRGpsRGuKzuZk7HyN0ggyHQ2xG6HRsbkjFD4RuhM3Ou8QiNMTFbAnXAaETsZnhQIROhPv7e2xG6ER4fHy8vr7mOiB0IjYzgILQiZBkTQ+Ebq7NEpuTrLqE0A21meFAhE6E0WiEzQidSGxmONAHFsnGhSkhwHUgQgMgNCA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQAQgNCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDIDQgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0AEIDQgMgNABCAyA0wIr/CzAAwg+OuOmgbQAAAAAASUVORK5CYII="},442:function(e,t,r){"use strict";var n=r(19),a=r(2),o=r(0),i=r.n(o),c=r(435),s=r(428),l=r(3),u=r(5),d=r(441),p=r.n(d),m=Object(o.memo)(function(e){var t=e.series,r=e.icon,d=e.header,m=e.letter,f=e.style,h=e.ids,b=e.classNames,g=e.disablePreview,A=e.enableTooltip,v=e.blurOnRemove,y=e.onMouseEnterFunc,O=e.onMouseLeaveFunc,E=Object(o.useGlobal)("navInstance"),N=Object(a.a)(E,1)[0],x=Object(o.useGlobal)("userPanelInstance"),j=Object(a.a)(x,1)[0],S=Object(o.useGlobal)("theme"),w=Object(a.a)(S,1)[0],C=Object(o.useRef)(),D=Object(o.useRef)(),I=Object(o.useRef)(),Q=Object(o.useGlobal)("accountFuncs")[0],k=Q.isInWatchList,P=Q.addToRemoveFromWatchList,L=Q.isInFavoritesList,F=Q.addToRemoveFromFavoritesList,_=Q.defaultErrMsg;function T(){Object(u.err)(function(){return D.current.forEach(function(e){return Object(u.err)(function(){return e.close()})})})}function z(e){if(Array.isArray(h))return Object(u.err)(function(){return h.find(function(t){return t.index===e}).name},!0)}function B(e){if(Array.isArray(b))return Object(u.err)(function(){return b.find(function(t){return t.index===e}).name},!0)}A&&Object(o.useEffect)(function(){var e=C.current.querySelectorAll(".tooltipped");return D.current=window.M.Tooltip.init(e),function(){return Object(u.err)(function(){return D.current.forEach(function(e){return Object(u.err)(function(){return e.destroy()})})})}},[t]);var G=function(e){g||(I.current=setTimeout(function(){A&&T()},1500)),A&&T()},V=function(){g||clearTimeout(I.current)},W=function(e){e.url;window.innerWidth<994&&Object(u.err)(function(){return N.close()}),window.innerWidth<768&&Object(u.err)(function(){return j.close()})},R=function(e){return'<h5 style="margin:5px 0;">'.concat(e.title,"</h5>").concat(e.japanese_title&&e.japanese_title!==e.title?'<div style="margin:5px 0;opacity:0.6;">('.concat(e.japanese_title,")</div>"):"").concat(e.description||"")};return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement("i",{className:"material-icons",style:{color:w.text_header_color,textAlign:"center",margin:"8px auto -24px auto",display:"table",padding:"0"}},r),d&&i.a.createElement("h5",{style:{minHeight:"70px",color:w.text_header_color,padding:"15px 15px 0",textAlign:"center"}},d+(m?" - "+m:"")),i.a.createElement("div",{ref:C,style:Object(n.a)({margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",color:w.text_header_color},f||{})},t&&t.map(function(e,t){return i.a.createElement("div",{id:z(t),key:e.url||t,className:"".concat(A?"tooltipped ":"").concat(B(t)||""),"data-position":A?"top":void 0,"data-tooltip":A?R(e):void 0,onMouseDown:G.bind(void 0,e),onMouseUp:V,onDragEnd:V,onTouchStart:G.bind(void 0,e),onTouchEnd:V,onMouseEnter:y?function(){return y(e)}:void 0,onMouseLeave:O?function(){return O(e)}:void 0,style:{width:"140px",height:"100%",float:"left",transformOrigin:"center top"}},i.a.createElement("div",{className:"row",style:{maxHeight:"359px",marginBottom:"13px"}},i.a.createElement("div",{className:"m6"},i.a.createElement("div",{className:"card",style:{color:w.text_tertiary_color,backgroundColor:w.tertiary_color}},i.a.createElement(s.a,{to:e.url||"",onClick:W.bind(void 0,e),className:"waves-effect waves-light",style:{color:w.text_tertiary_color,cursor:"pointer"}},i.a.createElement("div",{className:"card-image",style:{height:"211px"}},i.a.createElement(c.c,{src:Object(l.d)(e.poster_tall).poster||e.poster||p.a},function(t){var r=t.imageProps,n=t.imageState,a=t.ref;return i.a.createElement("img",Object.assign({},r,{alt:e.title,ref:a,src:n===c.a.LoadSuccess?r.src:p.a,style:{height:"211px"},className:n===c.a.LoadSuccess?"animate-opacity":void 0}))})),i.a.createElement("div",{className:"card-content",style:{height:"88px",overflow:"hidden",padding:"5px 8px",maxWidth:"173px"}},i.a.createElement("span",{className:"card-title animate-opacity",style:{textAlign:"center",display:"-webkit-box",WebkitLineClamp:"6",WebkitBoxOrient:"vertical",lineHeight:"1.5",fontWeight:"400",fontSize:"13.5px"}},e.title))),i.a.createElement("div",null,i.a.createElement("div",{onClick:function(t){return P.call(void 0,Object(n.a)({},e,{poster:e.poster||Object(l.d)(e.poster_tall).poster||p.a}),{blurOnRemove:v},t).catch(function(e){return Object(l.j)(e||_,!0)})},className:"btn waves-effect waves-light z-depth-0",style:{cursor:"pointer",color:"rgba(255,255,255,0.7)",backgroundColor:k(e)?"#4caf50":w.primary_color,display:"inline-block",height:"24px",lineHeight:"24px",padding:"0",width:"80%",borderRadius:"0px",fontSize:"11px"}},i.a.createElement("i",{className:"material-icons left",style:{left:"4px",position:"absolute",height:"24px",lineHeight:"24px",fontSize:"16px"}},"watch_later"),i.a.createElement("span",{style:{marginRight:"-18px"}},k(e)?"In ".concat(e.readable?"Read":"Watch"," List"):"".concat(e.readable?"Read":"Watch"," Later"))),i.a.createElement("div",{onClick:function(t){return F.call(void 0,Object(n.a)({},e,{poster:e.poster||Object(l.d)(e.poster_tall).poster||p.a}),{blurOnRemove:v},t).catch(function(e){return Object(l.j)(e||_,!0)})},className:"btn waves-effect waves-light z-depth-0",style:{cursor:"pointer",color:"rgba(255,255,255,0.7)",backgroundColor:L(e)?"#f44336":w.primary_color,filter:L(e)?void 0:"saturate(3)",display:"inline-block",height:"24px",lineHeight:"24px",padding:"0",width:"20%",borderRadius:"0px"}},i.a.createElement("i",{className:"material-icons left",style:{left:"5px",position:"absolute",height:"24px",lineHeight:"24px",fontSize:"16px"}},"favorite"))),!e.readable&&i.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.25)",overflow:"hidden",padding:"0",height:"32px"},className:"card-content"},i.a.createElement("span",{style:{textAlign:"center",fontSize:"12px",margin:"0"},className:"card-title animate-opacity"},e.is_subbed&&e.is_dubbed?"SUBS | DUBS":e.is_subbed&&!e.is_dubbed?"SUBS":!e.is_subbed&&e.is_dubbed?"DUBS":""))))))})))},u.compare);t.a=m},443:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};function a(e,t){var r=t||{},a=r.value,o=void 0===a?void 0:a,i=r.tag,c=void 0===i?"tag":i,s={},l=function(e){s[e]=function(t){return void 0===t&&(t={}),o?((r={})[c]=e,r[o]=t,r):n({},t,((a={})[c]=e,a));var r,a}};for(var u in e)l(u);var d={},p=function(e){d[e]=function(t){return t[c]===e}};for(var u in e)p(u);function m(e,t,r){void 0===r&&(r=t.default);var n=t[e[c]];return n?n(o?e[o]:e):r(e)}var f=function(e,t){return t?m(e,t):function(t){return m(t,e)}},h=function(e){return e},b={},g=function(e){var t;b[e]=f(((t={})[e]=function(e){return e},t.default=function(t){throw new Error("Attempted to cast "+t[c]+" as "+e)},t))};for(var A in e)g(A);return Object.assign({is:d,as:b,match:f,transform:function(e,t){return t?m(e,t,h):function(t){return m(t,e,h)}},_Record:e},s)}Object.defineProperty(t,"__esModule",{value:!0}),t.unionize=a,t.ofType=function(){},t.default=a},470:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",function(){return n})},482:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(5),i=Object(n.memo)(function(){return a.a.createElement("style",null,"\n    @media only screen and (min-width: 767px) {\n        .app-search {\n            display: none;\n        }\n    }\n    ")},o.compare);t.a=i},489:function(e,t,r){"use strict";var n=r(121),a=r(2),o=r(470),i=r(0),c=r.n(i),s=r(442),l=r(5),u=r(67),d=Object(i.memo)(function(e){var t=e.series,r=e.doUpdate,d=void 0===r||r,p=e.showSearch,m=e.count,f=e.clearFunc,h=Object(o.a)(e,["series","doUpdate","showSearch","count","clearFunc"]),b=Object(i.useGlobal)("theme"),g=Object(a.a)(b,1)[0],A=m||10,v=Object(i.useRef)(A),y=Object(i.useState)(t),O=Object(a.a)(y,2),E=O[0],N=O[1],x=Object(i.useState)(t.slice(0,v.current)),j=Object(a.a)(x,2),S=j[0],w=j[1],C=Object(i.useState)(),D=Object(a.a)(C,2),I=D[0],Q=D[1];return Object(i.useEffect)(function(){d&&(N(t),w(t.slice(0,v.current)))},[t,d]),c.a.createElement(c.a.Fragment,null,f&&c.a.createElement("div",{style:{backgroundColor:g.tertiary_color,color:g.text_tertiary_color,width:"100%",height:"32px"},onClick:f,className:"menuBtn"},c.a.createElement("i",{className:"material-icons",style:{left:"10px",position:"absolute"}},"close"),"Clear List"),p&&c.a.createElement(u.a,{standalone:!0,customFunc:function(e,r){Object(l.err)(function(){return r.preventDefault()});var a=Object(l.err)(function(){return decodeURIComponent(e.q).toLowerCase().replace(/[^A-Za-z0-9 ]/g,"")},!0);Q((d?t:E).filter(function(e){return Object(l.err)(function(){return[e.title].concat(Object(n.a)(Array.isArray(e.aliases)?e.aliases:[])).some(function(e){return e.toLowerCase().replace(/[^A-Za-z0-9 ]/g,"").includes(a)})},!0)}))},placeholder:"Search List...",style:{padding:"0px 20px",left:"0",width:"100%"}}),I&&c.a.createElement("span",{className:"menuBtn",onClick:function(){Q()},style:{textAlign:"center",margin:"0 auto",paddingBottom:"20px",display:"block"}},c.a.createElement("i",{className:"material-icons",style:{display:"block"}},"close"),"Clear Results"),c.a.createElement(s.a,Object.assign({},h,{series:I||S})),!I&&S.length!==E.length&&c.a.createElement("a",{href:"#!",onClick:function(e){e.preventDefault(),v.current+=A,d&&N(t),w((d?t:E).slice(0,v.current))}.bind(void 0),className:"btn-large waves-effect waves-light",style:{backgroundColor:g.primary_color,color:"rgba(255,255,255,0.7)",margin:"10px auto",display:"table",zIndex:"0"}},"View More"))},l.compare);t.a=d},601:function(e,t,r){},675:function(e,t,r){"use strict";r.r(t);var n=r(19),a=r(2),o=r(0),i=r.n(o),c=r(427),s=r(428),l=r(489),u=r(3),d=r(5),p=r(482),m=r(120),f=r.n(m),h=(r(601),r(12)),b=Object(o.memo)(function(e){var t=e.comments,r=Object(o.useGlobal)("theme"),c=Object(a.a)(r,1)[0],s={overflow:"hidden",textOverflow:"ellipsis",width:"calc(100% - 73px)"},l=5,u=Object(o.useRef)(l),d=Object(o.useState)(t.slice(0,u.current)),p=Object(a.a)(d,2),m=p[0],f=p[1];return Object(o.useEffect)(function(){f(t.slice(0,u.current))},[t]),i.a.createElement(i.a.Fragment,null,i.a.createElement("h5",{style:{padding:"15px",textAlign:"center",color:c.text_header_color}},"Recent Comments"),i.a.createElement("ul",{className:"collection",style:{borderColor:"transparent",padding:"0 10px"}},m.map(function(e){return i.a.createElement("li",{key:e.id,className:"collection-item avatar",style:{backgroundColor:c.tertiary_color}},i.a.createElement("a",{href:e.url},i.a.createElement("img",{alt:"",src:e.author.avatar.permalink,className:"circle"}),i.a.createElement("span",{className:"title",style:Object(n.a)({},s,{color:c.primary_color})},e.author.name),i.a.createElement("p",{style:{fontSize:"12px",color:c.text_subheader_color}},new Date(e.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),i.a.createElement("p",{style:Object(n.a)({},s,{maxHeight:"63px",color:c.text_header_color})},e.raw_message),i.a.createElement("div",{style:{top:"10px",right:"8px",position:"absolute",display:"flex"},className:"grey-text"},i.a.createElement("div",null,i.a.createElement("p",{style:{position:"absolute",display:"inline"}},e.likes),i.a.createElement("i",{className:"material-icons",style:{paddingLeft:e.likes>99?"20px":"12px"}},"keyboard_arrow_up")),i.a.createElement("div",{style:{paddingLeft:"5px",borderLeft:"1px dotted rgba(255,255,255,.2)"}},i.a.createElement("p",{style:{position:"absolute",display:"inline"}},e.dislikes),i.a.createElement("i",{className:"material-icons",style:{paddingLeft:e.likes>99?"20px":"12px"}},"keyboard_arrow_down"))),e.url&&i.a.createElement("span",{style:{bottom:"10px",right:"14px",position:"absolute",color:c.primary_color}},"View Post >")))})),m.length!==t.length&&i.a.createElement("a",{href:"#!",onClick:function(e){e.preventDefault(),u.current+=l,f(t.slice(0,u.current))},className:"btn-large waves-effect waves-light",style:{margin:"0 auto",display:"table",backgroundColor:c.primary_color,color:"rgba(255,255,255,0.7)"}},"View More"))},d.compare),g=Object(o.memo)(Object(c.a)(function(e){var t=e.match,r=e.history,n=Object(o.useGlobal)("theme"),c=Object(a.a)(n,1)[0],m=t.params.username,g=Object(o.useState)({}),A=Object(a.a)(g,2),v=A[0],y=A[1],O=Object(o.useState)(),E=Object(a.a)(O,2),N=E[0],x=E[1],j=Object(o.useState)(),S=Object(a.a)(j,2),w=S[0],C=S[1],D=Object(o.useState)(),I=Object(a.a)(D,2),Q=I[0],k=I[1],P=Object(o.useState)(),L=Object(a.a)(P,2),F=L[0],_=L[1],T=Object(o.useGlobal)("authUser"),z=Object(a.a)(T,1)[0],B=Object(o.useGlobal)("accountFuncs")[0],G=B.getUser,V=B.isCurrentUser,W=B.getWatchList,R=B.getFavoritesList,U=B.getComments,M=Object(o.useRef)(),Y=Object(o.useState)(!1),H=Object(a.a)(Y,2),q=H[0],J=H[1],X=Object(o.useGlobal)("documentTitle").slice(-1),K=Object(a.a)(X,1)[0],Z=Object(o.useGlobal)("searchBarOpts").slice(-1),$=Object(a.a)(Z,1)[0];Object(o.useEffect)(function(){Object(u.i)(),$({show:!0})},[m]),Object(o.useEffect)(function(){K("".concat(v.display_name||v.username||m," - Profile | ").concat(h.site_name))},[v.display_name,v.username,m]),Object(o.useEffect)(function(){G(m).then(function(e){y(e),e.private||(W(e._id).then(function(e){return C(e)}).catch(function(){}),R(e._id).then(function(e){return k(e)}).catch(function(){})),e.username&&r.replace(e.username),_(["administrator","moderator","power_contributor","supporter"].filter(function(t){return e[t]}).reverse()),e.disqus_id?U(e.disqus_id).then(function(e){return x(e)}).catch(function(){}):x([])}).catch(function(){})},[m]),Object(o.useEffect)(function(){var e=document.querySelectorAll(".materialboxed"),t=window.M.Materialbox.init(e,{onOpenStart:function(){return J(!0)},onCloseEnd:function(){return J(!1)}});return function(){return Object(d.err)(function(){return t.forEach(function(e){return Object(d.err)(function(){return e.destroy()})})})}},[]);var ee=Object(o.useGlobal)("navContent").slice(-1),te=Object(a.a)(ee,1)[0];return Object(o.useEffect)(function(){return te({title:h.site_name,description:h.site_description,poster:f.a,expand:!0,wide:!0,showArticles:!0})},[]),i.a.createElement("div",{className:"Profile-Container"},i.a.createElement("div",{className:"ProfileCanopy-header u-bgUserColor",style:{marginTop:"0px",zIndex:q&&"1000"}},i.a.createElement("div",{className:"ProfileCanopy-headerBg"},i.a.createElement("div",{style:{backgroundImage:"url(".concat(v.cover_pic,")"),backgroundSize:"cover",width:"100%",height:"100%",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"blur(0.7px)"}})),i.a.createElement("div",{className:"AppContainer"},i.a.createElement("div",{className:"ProfileCanopy-avatar"},i.a.createElement("div",{className:"ProfileAvatar"},i.a.createElement("div",{className:"ProfileAvatar-container u-block profile-picture"},i.a.createElement("img",{alt:v.display_name||v.username,className:"ProfileAvatar-image materialboxed",src:v.profile_pic})))))),i.a.createElement("div",{className:"ProfileHeaderCard",style:{padding:"10px",marginTop:"70px",minWidth:"33%"}},i.a.createElement("h1",{className:"ProfileHeaderCard-name"},i.a.createElement(s.a,{to:"/profile/".concat(v.username),className:"ProfileHeaderCard-nameLink",style:{color:c.text_header_color,overflowWrap:"break-word"}},v.display_name||v.username),i.a.createElement("div",{className:"ProfileRoleBadges"},F&&F.map(function(e,t){return i.a.createElement("span",{key:e,"data-badge-caption":"",className:"new badge red ".concat("administrator"===e?"red":"moderator"===e?"blue":"power_contributor"===e?"orange lighten-1":"supporter"===e?"green":""),style:{fontSize:"14px",fontWeight:"900",height:"23px"}},i.a.createElement("i",{className:"material-icons",style:{fontSize:"19px",float:t===F.length-1?"left":void 0,marginTop:"2px"}},"administrator"===e?"security":"moderator"===e?"build":"power_contributor"===e?"stars":"supporter"===e?"attach_money":""),t===F.length-1?"administrator"===e?"Admin":"moderator"===e?"Mod":"power_contributor"===e?"All Star":"supporter"===e?"Supporter":"":"")}))),i.a.createElement("h2",{className:"ProfileHeaderCard-screenname u-inlineBlock"},i.a.createElement(s.a,{to:"/profile/".concat(v.username),className:"ProfileHeaderCard-screennameLink u-linkComplex"},i.a.createElement("span",{style:{color:c.primary_color},className:"username"},"@",i.a.createElement("b",{className:"u-linkComplex-target"},v.username)))),i.a.createElement("p",{className:"ProfileHeaderCard-bio",style:{color:c.text_subheader_color,whiteSpace:"pre-wrap"}},v.biography),i.a.createElement("div",{className:"ProfileHeaderCard-joinDate"},i.a.createElement("span",{className:"ProfileHeaderCard-joinDateText",style:{color:c.text_primary_color}},"Joined ".concat(new Date(v.date_created).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})))),(V(v._id)||z.administrator)&&i.a.createElement("a",{href:"#!",onClick:function(e){return e.preventDefault()},ref:M,className:"waves-effect waves-light btn btn-small scale-transition scale-out",style:{zIndex:"0",backgroundColor:c.primary_color,color:"rgba(255,255,255,0.7)"}},i.a.createElement("i",{className:"material-icons left"},"edit"),"Edit Profile")),i.a.createElement("div",{className:"ProfileMainContent"},!v.private||V(v._id)||z.administrator?i.a.createElement(i.a.Fragment,null,v.private&&i.a.createElement("h6",{style:{padding:"5px",textAlign:"center",color:"#ffffff",backgroundColor:"#1bb9ff",borderRadius:"9px",width:"90%",margin:"4px auto",display:"block"}},V(v._id)?"You're profile is private. Only you can see this.":"This profile is private. Only you and this user can see this."),N&&N.length>0&&i.a.createElement(b,{comments:N}),Q&&Q.list&&Q.list.length>0&&i.a.createElement(l.a,{blurOnRemove:V(v._id),disablePreview:!0,header:"Favorites",series:Q.list}),w&&w.list&&w.list.length>0&&i.a.createElement(l.a,{blurOnRemove:V(v._id),disablePreview:!0,header:"Watch List",series:w.list})):i.a.createElement("div",{className:"no-select",style:{textAlign:"center"}},i.a.createElement("i",{className:"center material-icons",style:{fontSize:"220px",color:c.tertiary_color}},"lock"),i.a.createElement("h5",{style:{color:c.text_subheader_color}},"This user's activity is private"))),i.a.createElement(p.a,null))}),d.compare);t.default=g}}]);