"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[770],{718:function(e,t,n){n.d(t,{GO:function(){return p},R4:function(){return l},nW:function(){return w},r:function(){return g},yr:function(){return h}});var r=n(5861),a=n(7757),c=n.n(a),o=n(1044),u=n(5218),i="https://api.themoviedb.org/3",s="api_key=71b9c1ee751ada432ef4ae5fbbdff5cd";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/trending/movie/week?").concat(s));case 3:return t=e.sent,n=_(t.data.results),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),u.ZP.error("".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/search/movie?").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,r=_(n.data.results),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),u.ZP.error("".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/movie/").concat(t,"?").concat(s,"&language=en-US"));case 3:return n=e.sent,r=x(n.data),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),u.ZP.error("".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/movie/").concat(t,"/credits?").concat(s,"&language=en-US"));case 3:return n=e.sent,r=y(n.data.cast),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),u.ZP.error("".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=71b9c1ee751ada432ef4ae5fbbdff5cd&language=en-US&page=1"));case 3:return n=e.sent,r=b(n.data.results),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),u.ZP.error("".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function _(e){return e.map((function(e){return{id:e.id,title:e.title}}))}function x(e){return{title:e.title,overview:e.overview,vote_average:e.vote_average,genres:e.genres,release_date:e.release_date,poster_path:e.poster_path}}function y(e){return e.map((function(e){return{cast_id:e.cast_id,name:e.name,profile_path:e.profile_path,character:e.character}}))}function b(e){return e.map((function(e){return{id:e.id,author:e.author,content:e.content}}))}},7770:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r,a,c=n(5861),o=n(885),u=n(7757),i=n.n(u),s=n(2791),p=n(168),f=n(6444),l=f.ZP.ul(r||(r=(0,p.Z)(["\nmargin:20px 0 0 20px\n"]))),v=f.ZP.li(a||(a=(0,p.Z)(["\nmargin:0 0 10px 0;\n\n"]))),h=n(718),d=n(1087),g=n(7689),m=n(184);function w(e){var t=e.movieInfo,n=e.wayToDetailMovieInfo,r=(0,g.TH)(),a=t.id,c=t.title;return(0,m.jsx)(v,{children:(0,m.jsx)(d.OL,{to:"".concat(n),state:{from:r},children:c})},a)}var Z=function(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),n=t[0],r=t[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.GO)();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsx)(l,{children:n.map((function(e){return(0,m.jsx)(w,{movieInfo:e,wayToDetailMovieInfo:"/movies/".concat(e.id)},e.id)}))})}}}]);
//# sourceMappingURL=770.58af5c19.chunk.js.map