(this["webpackJsonpcanvas-pallete"]=this["webpackJsonpcanvas-pallete"]||[]).push([[0],{10:function(t,a,e){},11:function(t,a,e){"use strict";e.r(a);var n=e(0),r=e(1),o=e.n(r),h=e(3),s=e.n(h);e(9),e(10);var u=function(){function t(t,a,e,n){var r=[];return n.x>0?0===t[n.x-1][n.y]&&r.push({x:n.x-1,y:n.y}):0===t[a-1][n.y]&&r.push({x:a-1,y:n.y}),n.x<a-1?0===t[n.x+1][n.y]&&r.push({x:n.x+1,y:n.y}):0===t[0][n.y]&&r.push({x:0,y:n.y}),n.y>0?0===t[n.x][n.y-1]&&r.push({x:n.x,y:n.y-1}):0===t[n.x][e-1]&&r.push({x:n.x,y:e-1}),n.y<e-1?0===t[n.x][n.y+1]&&r.push({x:n.x,y:n.y+1}):0===t[n.x][0]&&r.push({x:n.x,y:0}),r}return Object(r.useEffect)((function(){var a,e,n,r,o,h=null,s=null,u=32,c=[],x=[];!function(){h=document.getElementById("canvas"),a=h.width,e=h.height,s=h.getContext("2d"),n=s.createImageData(a,e),o=[];for(var y={},i=0;i<u;i++)for(var l=0;l<u;l++)for(var p=0;p<u;p++)y={r:Math.floor(255*i/31),g:Math.floor(255*l/31),b:Math.floor(255*p/31)},x.push(y);for(var f=0;f<a;f++){c.push([]);for(var d=0;d<e;d++)c[f].push(0)}r={x:Math.floor(Math.random()*a),y:Math.floor(Math.random()*e)},c[r.x][r.y]=1,o.push(r);do{for(var v=!0;v;){var g=t(c,a,e,r);if(g.length>0){var b=g[Math.floor(Math.random()*g.length)];o.push(r),c[(r=b).x][r.y]=1;var j=x&&x.pop();n.data[4*(r.x+r.y*a)+0]=j.r,n.data[4*(r.x+r.y*a)+1]=j.g,n.data[4*(r.x+r.y*a)+2]=j.b,n.data[4*(r.x+r.y*a)+3]=255,v=!1}else{if(0===o.length)break;r=o.pop()}}}while(o.length>0);s.putImageData(n,0,0)}()}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("canvas",{id:"canvas",width:"256",height:"128",children:"Sorry your browser does not support Canvas, try Firefox or Chrome!"})})};var c=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(u,{})})},x=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,12)).then((function(a){var e=a.getCLS,n=a.getFID,r=a.getFCP,o=a.getLCP,h=a.getTTFB;e(t),n(t),r(t),o(t),h(t)}))};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(c,{})}),document.getElementById("root")),x()},9:function(t,a,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.d2914286.chunk.js.map