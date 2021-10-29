System.register(["./fog-c82f3158.js","./mesh-dd72f482.js"],(function(e){"use strict";var t,i,n,o,s,r,a,c,h,u,p,f,l,d,m,_;return{setters:[function(e){t=e.dE,i=e.dF,n=e.eQ,o=e.eY,s=e.dT,r=e.d1,a=e.eN,c=e.l,h=e.eM,u=e.dX,p=e.fz,f=e.fA,l=e.f3,d=e.dH,m=e.fB},function(e){_=e.M}],execute:function(){var b,y,g,v,P,B,j,k,M;t(_.prototype,"Mesh.prototype",[{name:"renderingMesh",newName:"renderingSubMeshes"}]),i(_.prototype,"Mesh.prototype",[{name:"hasFlatBuffers"},{name:"destroyFlatBuffers"}]);var w=e("S",(b=n("cc.Skeleton"),y=o([s]),g=o([r]),b((M=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,f(t,"_joints",B,l(t)),f(t,"_bindposes",j,l(t)),f(t,"_hash",k,l(t)),t._invBindposes=null,t}a(t,e);var i=t.prototype;return i.destroy=function(){return c.director.root.dataPoolManager.releaseSkeleton(this),e.prototype.destroy.call(this)},i.validate=function(){return this.joints.length>0&&this.bindposes.length>0},h(t,[{key:"joints",get:function(){return this._joints},set:function(e){this._joints=e}},{key:"bindposes",get:function(){return this._bindposes},set:function(e){this._bindposes=e}},{key:"inverseBindposes",get:function(){if(!this._invBindposes){this._invBindposes=[];for(var e=0;e<this._bindposes.length;e++){var t=new r;r.invert(t,this._bindposes[e]),this._invBindposes.push(t)}}return this._invBindposes}},{key:"hash",get:function(){if(!this._hash){for(var e="",t=0;t<this._bindposes.length;t++){var i=this._bindposes[t];e+=i.m00.toPrecision(2)+" "+i.m01.toPrecision(2)+" "+i.m02.toPrecision(2)+" "+i.m03.toPrecision(2)+" "+i.m04.toPrecision(2)+" "+i.m05.toPrecision(2)+" "+i.m06.toPrecision(2)+" "+i.m07.toPrecision(2)+" "+i.m08.toPrecision(2)+" "+i.m09.toPrecision(2)+" "+i.m10.toPrecision(2)+" "+i.m11.toPrecision(2)+" "+i.m12.toPrecision(2)+" "+i.m13.toPrecision(2)+" "+i.m14.toPrecision(2)+" "+i.m15.toPrecision(2)+"\n"}this._hash=d(e,666)}return this._hash}}]),t}(u),B=p((P=M).prototype,"_joints",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),j=p(P.prototype,"_bindposes",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),k=p(P.prototype,"_hash",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),v=P))||v));c.Skeleton=w}}}));
