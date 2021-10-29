System.register(["./fog-c82f3158.js","./json-asset-1decacc3.js","./mesh-dd72f482.js"],(function(t){"use strict";var e,a,r,n,s,i,o,u,f,l,v;return{setters:[function(t){e=t.a$,a=t.t,r=t.b0,n=t.x,s=t.aG,i=t.cW,o=t.a2},function(t){u=t.r,f=t.w},function(t){l=t.M,v=t.B}],execute:function(){var d;t({c:function(t,s,u){u=u||{};var d,m=[],T=0,b=[],g=0,R=t.positions.slice();if(R.length>0){if(d=null,t.attributes)for(var A,w=a(t.attributes);!(A=w()).done;){var O=A.value;if(O.name===e.ATTR_POSITION){d=O;break}}d||(d=h[0]),m.push(d);var x=r[d.format];g=Math.max(g,Math.floor(R.length/x.count)),b.push({offset:T,data:R,attribute:d}),T+=x.size}if(t.normals&&t.normals.length>0){if(d=null,t.attributes)for(var p,M=a(t.attributes);!(p=M()).done;){var _=p.value;if(_.name===e.ATTR_NORMAL){d=_;break}}d||(d=h[1]);var B=r[d.format];m.push(d),g=Math.max(g,Math.floor(t.normals.length/B.count)),b.push({offset:T,data:t.normals,attribute:d}),T+=B.size}if(t.uvs&&t.uvs.length>0){if(d=null,t.attributes)for(var L,N=a(t.attributes);!(L=N()).done;){var I=L.value;if(I.name===e.ATTR_TEX_COORD){d=I;break}}d||(d=h[2]);var y=r[d.format];m.push(d),g=Math.max(g,Math.floor(t.uvs.length/y.count)),b.push({offset:T,data:t.uvs,attribute:d}),T+=y.size}if(t.tangents&&t.tangents.length>0){if(d=null,t.attributes)for(var z,G=a(t.attributes);!(z=G()).done;){var C=z.value;if(C.name===e.ATTR_TANGENT){d=C;break}}d||(d=h[3]);var P=r[d.format];m.push(d),g=Math.max(g,Math.floor(t.tangents.length/P.count)),b.push({offset:T,data:t.tangents,attribute:d}),T+=P.size}if(t.colors&&t.colors.length>0){if(d=null,t.attributes)for(var D,E=a(t.attributes);!(D=E()).done;){var k=D.value;if(k.name===e.ATTR_COLOR){d=k;break}}d||(d=h[4]);var F=r[d.format];m.push(d),g=Math.max(g,Math.floor(t.colors.length/F.count)),b.push({offset:T,data:t.colors,attribute:d}),T+=F.size}if(t.customAttributes)for(var S,V=a(t.customAttributes);!(S=V()).done;){var j=S.value,U=r[j.attr.format];m.push(j.attr),g=Math.max(g,Math.floor(j.values.length/U.count)),b.push({offset:T,data:j.values,attribute:j.attr}),T+=U.size}for(var X=new v,W=new ArrayBuffer(g*T),$=new DataView(W),q=0,H=b;q<H.length;q++){var J=H[q];f($,J.data,J.attribute.format,J.offset,T)}X.setNextAlignment(0);var K={attributes:m,view:{offset:X.getLength(),length:W.byteLength,count:g,stride:T}};X.addBuffer(W);var Q=null,Y=0;if(t.indices){var Z=t.indices;Y=Z.length,Q=new ArrayBuffer(2*Y);var tt=new DataView(Q);f(tt,Z,n.R16UI)}var et={primitiveMode:t.primitiveMode||o.TRIANGLE_LIST,vertexBundelIndices:[0]};Q&&(X.setNextAlignment(2),et.indexView={offset:X.getLength(),length:Q.byteLength,count:Y,stride:2},X.addBuffer(Q));var at=t.minPos;if(!at&&u.calculateBounds){at=i.set(new i,1/0,1/0,1/0);for(var rt=0;rt<g;++rt)i.set(c,R[3*rt+0],R[3*rt+1],R[3*rt+2]),i.min(at,at,c)}var nt=t.maxPos;if(!nt&&u.calculateBounds){nt=i.set(new i,-1/0,-1/0,-1/0);for(var st=0;st<g;++st)i.set(c,R[3*st+0],R[3*st+1],R[3*st+2]),i.max(nt,nt,c)}var it={vertexBundles:[K],primitives:[et]};return at&&(it.minPosition=new i(at.x,at.y,at.z)),nt&&(it.maxPosition=new i(nt.x,nt.y,nt.z)),s||(s=new l),s.reset({struct:it,data:new Uint8Array(X.getCombined())}),s},r:function(t,e){void 0===e&&(e=0);for(var s,i={positions:[]},o=new DataView(t.data.buffer,t.data.byteOffset,t.data.byteLength),f=t.struct,l=f.primitives[e],v=a(l.vertexBundelIndices);!(s=v()).done;)for(var h,c=s.value,m=f.vertexBundles[c],T=m.view.offset,b=m.view,g=b.length,R=b.stride,A=a(m.attributes);!(h=A()).done;){var w=h.value,O=d[w.name];O&&(i[O]=(i[O]||[]).concat(u(o,w.format,T,g,R))),T+=r[w.format].size}var x=l.indexView;return i.indices=u(o,n["R"+8*x.stride+"UI"],x.offset,x.length),i}}),function(t){t[t.positions=e.ATTR_POSITION]="positions",t[t.normals=e.ATTR_NORMAL]="normals",t[t.uvs=e.ATTR_TEX_COORD]="uvs",t[t.colors=e.ATTR_COLOR]="colors"}(d||(d={}));var h=[new s(e.ATTR_POSITION,n.RGB32F),new s(e.ATTR_NORMAL,n.RGB32F),new s(e.ATTR_TEX_COORD,n.RG32F),new s(e.ATTR_TANGENT,n.RGBA32F),new s(e.ATTR_COLOR,n.RGBA32F)],c=new i}}}));
