System.register(["./fog-c82f3158.js","./index-0a9deebe.js","./screen-b918b2af.js","./renderable-component-542a40ea.js","./texture-buffer-pool-b355307f.js","./json-asset-1decacc3.js","./renderable-2d-3f4a77a2.js","./vertex-format-0f4aaeb9.js"],(function(t){"use strict";var e,i,o,n,s,r,l,a,h,c,u,p,f,d,m,_,b,T,v,y,g,C,E,D,R,L,P,O,M,x,w,B,N,A,S,U;return{setters:[function(t){e=t.dx,i=t.eN,o=t.cU,n=t.d8,s=t.aG,r=t.x,l=t.eQ,a=t.eY,h=t.em,c=t.d,u=t.l,p=t.ap,f=t.z,d=t.G,m=t.a2,_=t.eM,b=t.fz,T=t.fC,v=t.fO,y=t.eX,g=t.eT,C=t.fD,E=t.fS,D=t.fA,R=t.f3,L=t.fB},function(t){P=t.f},function(){},function(t){O=t.a,M=t.e},function(){},function(t){x=t.R},function(t){w=t.M,B=t.R,N=t.I},function(t){A=t.d,S=t.b,U=t.g}],execute:function(){var k,z,I;t({L:void 0,a:void 0,b:void 0}),function(t){t[t.BUTT=0]="BUTT",t[t.ROUND=1]="ROUND",t[t.SQUARE=2]="SQUARE"}(k||(k=t("a",{}))),e(k),function(t){t[t.BEVEL=0]="BEVEL",t[t.ROUND=1]="ROUND",t[t.MITER=2]="MITER"}(z||(z=t("L",{}))),e(z),function(t){t[t.PT_CORNER=1]="PT_CORNER",t[t.PT_LEFT=2]="PT_LEFT",t[t.PT_BEVEL=4]="PT_BEVEL",t[t.PT_INNERBEVEL=8]="PT_INNERBEVEL"}(I||(I=t("b",{}))),e(I);var F=Math.PI,j=Math.min,V=Math.max,W=Math.cos,J=Math.sin,G=Math.abs,X=Math.sign,Y=.5522847493;function q(t,e,i,o,n){t.moveTo(e-o,i),t.bezierCurveTo(e-o,i+n*Y,e-o*Y,i+n,e,i+n),t.bezierCurveTo(e+o*Y,i+n,e+o,i+n*Y,e+o,i),t.bezierCurveTo(e+o,i-n*Y,e+o*Y,i-n,e,i-n),t.bezierCurveTo(e-o*Y,i-n,e-o,i-n*Y,e-o,i),t.close()}function Q(t,e,i,o,n,s,r,l,a,h,c){var u,p,f,d,m,_,b,T,v,y,g,C,E,D,R,L;h>10||(m=.5*(s+l),_=.5*(r+a),b=.5*((u=.5*(e+o))+(f=.5*(o+s))),T=.5*((p=.5*(i+n))+(d=.5*(n+r))),((R=G((o-l)*(D=a-i)-(n-a)*(E=l-e)))+(L=G((s-l)*D-(r-a)*E)))*(R+L)<t.tessTol*(E*E+D*D)?t.addPoint(l,a,0===c?c|I.PT_BEVEL:c):(Q(t,e,i,u,p,b,T,g=.5*(b+(v=.5*(f+m))),C=.5*(T+(y=.5*(d+_))),h+1,0),Q(t,g,C,v,y,m,_,l,a,h+1,c)))}var H,K,Z,$,tt,et,it,ot,nt,st,rt,lt,at,ht,ct,ut,pt,ft,dt,mt,_t,bt,Tt=t("P",function(t){function e(e,i){var o;return(o=t.call(this,e,i)||this).dx=0,o.dy=0,o.dmx=0,o.dmy=0,o.flags=0,o.len=0,o.reset(),o}return i(e,t),e.prototype.reset=function(){this.dx=0,this.dy=0,this.dmx=0,this.dmy=0,this.flags=0,this.len=0},e}(o)),vt=function(){function t(){this.closed=!1,this.bevel=0,this.complex=!0,this.points=[],this.reset()}return t.prototype.reset=function(){this.closed=!1,this.bevel=0,this.complex=!0,this.points?this.points.length=0:this.points=[]},t}(),yt=function(){function t(){this.dataOffset=0,this.updatePathOffset=!1,this.pathLength=0,this.pathOffset=0,this.paths=[],this.tessTol=.25,this.distTol=.01,this.fillColor=n.WHITE.clone(),this.lineCap=k.BUTT,this.strokeColor=n.BLACK.clone(),this.lineJoin=z.MITER,this.lineWidth=0,this.pointsOffset=0,this._commandX=0,this._commandY=0,this._points=[],this._renderDataList=[],this._curPath=null}var e=t.prototype;return e.moveTo=function(t,e){this.updatePathOffset&&(this.pathOffset=this.pathLength,this.updatePathOffset=!1),this._addPath(),this.addPoint(t,e,I.PT_CORNER),this._commandX=t,this._commandY=e},e.lineTo=function(t,e){this.addPoint(t,e,I.PT_CORNER),this._commandX=t,this._commandY=e},e.bezierCurveTo=function(t,e,i,o,n,s){var r=this._curPath,l=r.points[r.points.length-1];l&&(l.x!==t||l.y!==e||i!==n||o!==s?(Q(this,l.x,l.y,t,e,i,o,n,s,0,I.PT_CORNER),this._commandX=n,this._commandY=s):this.lineTo(n,s))},e.quadraticCurveTo=function(t,e,i,o){var n=this._commandX,s=this._commandY;this.bezierCurveTo(n+2/3*(t-n),s+2/3*(e-s),i+2/3*(t-i),o+2/3*(e-o),i,o)},e.arc=function(t,e,i,o,n,s){!function(t,e,i,o,n,s,r){var l,a,h=0,c=0,u=0,p=0,f=0,d=0,m=0,_=0,b=0,T=0,v=0,y=0,g=0,C=0;if(c=s-n,r=r||!1)if(G(c)>=2*F)c=2*F;else for(;c<0;)c+=2*F;else if(G(c)>=2*F)c=2*-F;else for(;c>0;)c-=2*F;for(a=0|V(1,j(G(c)/(.5*F)+.5,5)),u=G(4/3*(1-W(l=c/a/2))/J(l)),r||(u=-u),C=0;C<=a;C++)d=e+(p=W(h=n+c*(C/a)))*o,m=i+(f=J(h))*o,_=-f*o*u,b=p*o*u,0===C?t.moveTo(d,m):t.bezierCurveTo(T+y,v+g,d-_,m-b,d,m),T=d,v=m,y=_,g=b}(this,t,e,i,o,n,s)},e.ellipse=function(t,e,i,o){q(this,t,e,i,o),this._curPath.complex=!1},e.circle=function(t,e,i){q(this,t,e,i,i),this._curPath.complex=!1},e.rect=function(t,e,i,o){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+o),this.lineTo(t,e+o),this.close(),this._curPath.complex=!1},e.roundRect=function(t,e,i,o,n){!function(t,e,i,o,n,s){if(s<.1)t.rect(e,i,o,n);else{var r=j(s,.5*G(o))*X(o),l=j(s,.5*G(n))*X(n);t.moveTo(e,i+l),t.lineTo(e,i+n-l),t.bezierCurveTo(e,i+n-l*(1-Y),e+r*(1-Y),i+n,e+r,i+n),t.lineTo(e+o-r,i+n),t.bezierCurveTo(e+o-r*(1-Y),i+n,e+o,i+n-l*(1-Y),e+o,i+n-l),t.lineTo(e+o,i+l),t.bezierCurveTo(e+o,i+l*(1-Y),e+o-r*(1-Y),i,e+o-r,i),t.lineTo(e+r,i),t.bezierCurveTo(e+r*(1-Y),i,e,i+l*(1-Y),e,i+l),t.close()}}(this,t,e,i,o,n),this._curPath.complex=!1},e.clear=function(){this.pathLength=0,this.pathOffset=0,this.pointsOffset=0,this.dataOffset=0,this._curPath=null,this.paths.length=0,this._points.length=0;for(var t=this._renderDataList,e=0,i=t.length;e<i;e++){var o=t[e];o&&w.remove(o)}this._renderDataList.length=0},e.close=function(){this._curPath.closed=!0},e.requestRenderData=function(){var t=w.add();return this._renderDataList.push(t),t},e.getRenderDataList=function(){return 0===this._renderDataList.length&&this.requestRenderData(),this._renderDataList},e.addPoint=function(t,e,i){var o=this._curPath;if(o){var n=this._points,s=o.points,r=n[this.pointsOffset++];r?(r.x=t,r.y=e):(r=new Tt(t,e),n.push(r)),r.flags=i,s.push(r)}},e._addPath=function(){var t=this.pathLength,e=this.paths[t];return e?e.reset():(e=new vt,this.paths.push(e)),this.pathLength++,this._curPath=e,e},t}(),gt=A.concat([new s("a_dist",r.R32F)]),Ct=S(gt),Et=U(gt);t("G",(H=l("cc.Graphics"),K=y(),Z=M(110),$=g(),tt=a(z),et=C(),it=a(k),ot=C(),nt=C(),st=C(),rt=C(),lt=E(),H(at=K(at=Z(at=$((bt=_t=function(t){function e(){var e;return(e=t.call(this)||this).impl=null,e.model=null,D(e,"_lineWidth",ct,R(e)),D(e,"_strokeColor",ut,R(e)),D(e,"_lineJoin",pt,R(e)),D(e,"_lineCap",ft,R(e)),D(e,"_fillColor",dt,R(e)),D(e,"_miterLimit",mt,R(e)),e._isDrawing=!1,e._isNeedUploadData=!0,e._instanceMaterialType=N.ADD_COLOR,e.impl=new yt,e}i(e,t);var o=e.prototype;return o.onRestore=function(){this.impl||this._flushAssembler()},o.onLoad=function(){this.model=P.root.createModel(O),this.model.node=this.model.transform=this.node,this._flushAssembler()},o.onEnable=function(){t.prototype.onEnable.call(this),this._updateMtlForGraphics()},o.onDisable=function(){t.prototype.onDisable.call(this)},o.onDestroy=function(){t.prototype.onDestroy.call(this),this._sceneGetter=null,this.model&&(P.root.destroyModel(this.model),this.model=null),this.impl&&(this._isDrawing=!1,this.impl.clear(),this.impl=null)},o.moveTo=function(t,e){this.impl&&this.impl.moveTo(t,e)},o.lineTo=function(t,e){this.impl&&this.impl.lineTo(t,e)},o.bezierCurveTo=function(t,e,i,o,n,s){this.impl&&this.impl.bezierCurveTo(t,e,i,o,n,s)},o.quadraticCurveTo=function(t,e,i,o){this.impl&&this.impl.quadraticCurveTo(t,e,i,o)},o.arc=function(t,e,i,o,n,s){this.impl&&this.impl.arc(t,e,i,o,n,s)},o.ellipse=function(t,e,i,o){this.impl&&this.impl.ellipse(t,e,i,o)},o.circle=function(t,e,i){this.impl&&this.impl.circle(t,e,i)},o.rect=function(t,e,i,o){this.impl&&this.impl.rect(t,e,i,o)},o.roundRect=function(t,e,i,o,n){this.impl&&this.impl.roundRect(t,e,i,o,n)},o.fillRect=function(t,e,i,o){this.rect(t,e,i,o),this.fill()},o.clear=function(){if(this.impl){if(this.impl.clear(),this._isDrawing=!1,this.model)for(var t=0;t<this.model.subModels.length;t++)this.model.subModels[t].inputAssembler.indexCount=0;this.markForUpdateRenderData()}},o.close=function(){this.impl&&this.impl.close()},o.stroke=function(){this._assembler||this._flushAssembler(),this._isDrawing=!0,this._isNeedUploadData=!0,this._assembler.stroke(this)},o.fill=function(){this._assembler||this._flushAssembler(),this._isDrawing=!0,this._isNeedUploadData=!0,this._assembler.fill(this)},o._updateMtlForGraphics=function(){var t;this._customMaterial?t=this.getMaterialInstance(0):(t=h.get("ui-graphics-material"),this.setMaterial(t,0),(t=this.getMaterialInstance(0)).recompileShaders({USE_LOCAL:!0}))},o.activeSubModel=function(t){if(this.model){if(this.model.subModels.length<=t){var e=u.director.root.device,i=e.createBuffer(new p(f.VERTEX|f.TRANSFER_DST,d.DEVICE,65535*Et,Et)),o=e.createBuffer(new p(f.INDEX|f.TRANSFER_DST,d.DEVICE,131070*Uint16Array.BYTES_PER_ELEMENT,Uint16Array.BYTES_PER_ELEMENT)),n=new x([i],gt,m.TRIANGLE_LIST,o);n.subMeshIdx=0,this.model.initSubModel(t,n,this.getMaterialInstance(0))}}else c(4500,this.node.name)},o._uploadData=function(t){var e=this.impl;if(e){var i=e&&e.getRenderDataList();if(!(i.length<=0)&&this.model){for(var o=this.model.subModels,n=0;n<i.length;n++){var s=i[n],r=o[n].inputAssembler;if(s.lastFilledVertex!==s.vertexStart){var l=new Float32Array(s.vData.buffer,0,s.vertexStart*Ct);r.vertexBuffers[0].update(l),r.vertexCount=s.vertexStart;var a=new Uint16Array(s.iData.buffer,0,s.indicesStart);r.indexBuffer.update(a),r.indexCount=s.indicesStart,s.lastFilledVertex=s.vertexStart,s.lastFilledIndices=s.indicesStart}}t.removeUploadBuffersFunc(this),this._isNeedUploadData=!1}}},o._render=function(t){if(this._isNeedUploadData){if(this.impl){var e=this.impl.getRenderDataList(),i=this.model.subModels.length;if(e.length>i)for(var o=i;o<e.length;o++)this.activeSubModel(o)}t.addUploadBuffersFunc(this,this._uploadData)}t.commitModel(this,this.model,this.getMaterialInstance(0))},o._flushAssembler=function(){var t=e.Assembler.getAssembler(this);this._assembler!==t&&(this._assembler=t)},o._canRender=function(){return!!t.prototype._canRender.call(this)&&!!this.model&&this._isDrawing},_(e,[{key:"lineWidth",get:function(){return this._lineWidth},set:function(t){this._lineWidth=t,this.impl&&(this.impl.lineWidth=t)}},{key:"lineJoin",get:function(){return this._lineJoin},set:function(t){this._lineJoin=t,this.impl&&(this.impl.lineJoin=t)}},{key:"lineCap",get:function(){return this._lineCap},set:function(t){this._lineCap=t,this.impl&&(this.impl.lineCap=t)}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(t){this.impl&&(this._strokeColor.set(t),this.impl.strokeColor=this._strokeColor)}},{key:"fillColor",get:function(){return this._fillColor},set:function(t){this.impl&&(this._fillColor.set(t),this.impl.fillColor=this._fillColor)}},{key:"miterLimit",get:function(){return this._miterLimit},set:function(t){this._miterLimit=t}},{key:"color",get:function(){return this._color},set:function(t){this._color!==t&&this._color.set(t)}},{key:"srcBlendFactor",get:function(){return this._srcBlendFactor},set:function(){}},{key:"dstBlendFactor",get:function(){return this._dstBlendFactor},set:function(){}}]),e}(B),_t.LineJoin=z,_t.LineCap=k,b((ht=bt).prototype,"lineWidth",[T],Object.getOwnPropertyDescriptor(ht.prototype,"lineWidth"),ht.prototype),b(ht.prototype,"lineJoin",[tt,et],Object.getOwnPropertyDescriptor(ht.prototype,"lineJoin"),ht.prototype),b(ht.prototype,"lineCap",[it,ot],Object.getOwnPropertyDescriptor(ht.prototype,"lineCap"),ht.prototype),b(ht.prototype,"strokeColor",[nt],Object.getOwnPropertyDescriptor(ht.prototype,"strokeColor"),ht.prototype),b(ht.prototype,"fillColor",[st],Object.getOwnPropertyDescriptor(ht.prototype,"fillColor"),ht.prototype),b(ht.prototype,"miterLimit",[rt],Object.getOwnPropertyDescriptor(ht.prototype,"miterLimit"),ht.prototype),b(ht.prototype,"color",[v,lt],Object.getOwnPropertyDescriptor(ht.prototype,"color"),ht.prototype),ct=b(ht.prototype,"_lineWidth",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),ut=b(ht.prototype,"_strokeColor",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return n.BLACK.clone()}}),pt=b(ht.prototype,"_lineJoin",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return z.MITER}}),ft=b(ht.prototype,"_lineCap",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return k.BUTT}}),dt=b(ht.prototype,"_fillColor",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return n.WHITE.clone()}}),mt=b(ht.prototype,"_miterLimit",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),at=ht))||at)||at)||at)||at))}}}));
