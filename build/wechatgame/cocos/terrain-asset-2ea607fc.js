System.register(["./fog-c82f3158.js","./json-asset-1decacc3.js"],(function(t){"use strict";var e,i,n,r,s,h,a,o;return{setters:[function(t){e=t.eQ,i=t.fz,n=t.eN,r=t.eM,s=t.fB,h=t.fA,a=t.f3,o=t.dX},function(){}],execute:function(){t("l",4),t("i",4),t("k",256);var l,f,u,g,_,c,y,w,I,b,d,v,p,k=t("b",32),z=(t("a",33),t("c",8),t("g",32768)),S=t("h",1/512),M=(t("f",-z*S),t("e",(65535-z)*S),t("m",0),t("n",1),t("o",2),t("p",3),t("q",16842753)),m=t("r",16842754),B=t("s",16842755),V=t("t",16842756),A=t("j",16842757),C=t("u",16843025),F=function(){function t(){this.length=0,this.buffer=new Uint8Array(2048),this._buffView=new DataView(this.buffer.buffer),this._seekPos=0}var e=t.prototype;return e.reserve=function(t){if(!(this.buffer.byteLength>t)){for(var e=this.buffer.byteLength;e<t;)e+=e;for(var i=new Uint8Array(e),n=0;n<this.length;++n)i[n]=this.buffer[n];this.buffer=i,this._buffView=new DataView(this.buffer.buffer)}},e.assign=function(t){this.buffer=t,this.length=t.length,this._seekPos=t.byteOffset,this._buffView=new DataView(t.buffer)},e.writeInt8=function(t){this.reserve(this.length+1),this._buffView.setInt8(this.length,t),this.length+=1},e.writeInt16=function(t){this.reserve(this.length+2),this._buffView.setInt16(this.length,t,!0),this.length+=2},e.writeInt32=function(t){this.reserve(this.length+4),this._buffView.setInt32(this.length,t,!0),this.length+=4},e.writeIntArray=function(t){this.reserve(this.length+4*t.length);for(var e=0;e<t.length;++e)this._buffView.setInt32(this.length+4*e,t[e],!0);this.length+=4*t.length},e.writeFloat=function(t){this.reserve(this.length+4),this._buffView.setFloat32(this.length,t,!0),this.length+=4},e.writeFloatArray=function(t){this.reserve(this.length+4*t.length);for(var e=0;e<t.length;++e)this._buffView.setFloat32(this.length+4*e,t[e],!0);this.length+=4*t.length},e.writeString=function(t){this.reserve(this.length+t.length+4),this._buffView.setInt32(this.length,t.length,!0);for(var e=0;e<t.length;++e)this._buffView.setInt8(this.length+4+e,t.charCodeAt(e));this.length+=t.length+4},e.readInt8=function(){var t=this._buffView.getInt8(this._seekPos);return this._seekPos+=1,t},e.readInt16=function(){var t=this._buffView.getInt16(this._seekPos,!0);return this._seekPos+=2,t},e.readInt=function(){var t=this._buffView.getInt32(this._seekPos,!0);return this._seekPos+=4,t},e.readIntArray=function(t){for(var e=0;e<t.length;++e)t[e]=this._buffView.getInt32(this._seekPos+4*e,!0);return this._seekPos+=4*t.length,t},e.readFloat=function(){var t=this._buffView.getFloat32(this._seekPos,!0);return this._seekPos+=4,t},e.readFloatArray=function(t){for(var e=0;e<t.length;++e)t[e]=this._buffView.getFloat32(this._seekPos+4*e,!0);return this._seekPos+=4*t.length,t},e.readString=function(){for(var t=this.readInt(),e="",i=0;i<t;++i)e+=String.fromCharCode(this.readInt8());return e},t}(),P=(t("d",e("cc.TerrainLayerInfo")((u=i((f=function(){h(this,"slot",u,this),h(this,"tileSize",g,this),h(this,"detailMap",_,this),h(this,"normalMap",c,this),h(this,"roughness",y,this),h(this,"metallic",w,this)}).prototype,"slot",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),g=i(f.prototype,"tileSize",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),_=i(f.prototype,"detailMap",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=i(f.prototype,"normalMap",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=i(f.prototype,"roughness",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),w=i(f.prototype,"metallic",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),l=f))||l),t("v",e("cc.TerrainLayerBinaryInfo")(I=function(){this.slot=0,this.tileSize=1,this.roughness=1,this.metallic=0,this.detailMapId="",this.normalMapId=""})||I));t("T",e("cc.TerrainAsset")((p=function(t){function e(){var e;return(e=t.call(this)||this)._version=0,e._data=null,e._tileSize=1,e._blockCount=[1,1],e._weightMapSize=128,e._lightMapSize=128,e._heights=new Uint16Array,e._weights=new Uint8Array,e._layerBuffer=[-1,-1,-1,-1],e._layerBinaryInfos=[],h(e,"_layerInfos",v,a(e)),e.loaded=!1,e}n(e,t);var i=e.prototype;return i.getLayer=function(t,e,i){var n=4*(e*this.blockCount[0]+t)+i;return t<this.blockCount[0]&&e<this.blockCount[1]&&n<this._layerBuffer.length?this._layerBuffer[n]:-1},i.getHeight=function(t,e){var i=this._blockCount[0]*k+1;return(this._heights[e*i+t]-z)*S},i.getVertexCountI=function(){return this._blockCount.length<1?0:this._blockCount[0]*k+1},i.getVertexCountJ=function(){return this._blockCount.length<2?0:this._blockCount[1]*k+1},i._setNativeData=function(t){this._data=t},i._loadNativeData=function(t){var e=new F;if(e.assign(t),this._version=e.readInt(),this._version===C)return!0;if(this._version!==M&&this._version!==m&&this._version!==B&&this._version!==V&&this._version!==A)return!1;this.tileSize=e.readFloat(),e.readIntArray(this._blockCount),this.weightMapSize=e.readInt16(),this.lightMapSize=e.readInt16();var i=e.readInt();this.heights=new Uint16Array(i);for(var n=0;n<this.heights.length;++n)this.heights[n]=e.readInt16();var r=e.readInt();this.weights=new Uint8Array(r);for(var s=0;s<this.weights.length;++s)this.weights[s]=e.readInt8();if(this._version>=m){var h=e.readInt();this.layerBuffer=new Array(h);for(var a=0;a<this.layerBuffer.length;++a)this.layerBuffer[a]=e.readInt16()}if(this._version>=B){var o=e.readInt();this._layerBinaryInfos=new Array(o);for(var l=0;l<this._layerBinaryInfos.length;++l)this._layerBinaryInfos[l]=new P,this._layerBinaryInfos[l].slot=e.readInt(),this._layerBinaryInfos[l].tileSize=e.readFloat(),this._layerBinaryInfos[l].detailMapId=e.readString(),this._version>=V&&(this._layerBinaryInfos[l].normalMapId=e.readString(),this._layerBinaryInfos[l].roughness=e.readFloat(),this._layerBinaryInfos[l].metallic=e.readFloat())}return!0},i._exportNativeData=function(){var t=new F;t.writeInt32(A),t.writeFloat(this.tileSize),t.writeIntArray(this._blockCount),t.writeInt16(this.weightMapSize),t.writeInt16(this.lightMapSize),t.writeInt32(this.heights.length);for(var e=0;e<this.heights.length;++e)t.writeInt16(this.heights[e]);t.writeInt32(this.weights.length);for(var i=0;i<this.weights.length;++i)t.writeInt8(this.weights[i]);t.writeInt32(this.layerBuffer.length);for(var n=0;n<this.layerBuffer.length;++n)t.writeInt16(this.layerBuffer[n]);var r=[];r.length=this.layerInfos.length;for(var s=0;s<r.length;++s){var h=this.layerInfos[s],a=new P;a.slot=s,a.tileSize=h.tileSize,a.detailMapId=h.detailMap?h.detailMap._uuid:"",a.normalMapId=h.normalMap?h.normalMap._uuid:"",a.metallic=h.metallic,a.roughness=h.roughness,r[s]=a}t.writeInt32(r.length);for(var o=0;o<r.length;++o)t.writeInt32(r[o].slot),t.writeFloat(r[o].tileSize),t.writeString(r[o].detailMapId),t.writeString(r[o].normalMapId),t.writeFloat(r[o].roughness),t.writeFloat(r[o].metallic);return t.buffer},i._exportDefaultNativeData=function(){var t=new F;return t.writeInt32(C),t.buffer},r(e,[{key:"_nativeAsset",get:function(){return this._data.buffer},set:function(t){this._data&&this._data.byteLength===t.byteLength?this._data.set(new Uint8Array(t)):this._data=new Uint8Array(t),this._loadNativeData(this._data),this.loaded=!0,this.emit("load")}},{key:"version",get:function(){return this._version}},{key:"tileSize",get:function(){return this._tileSize},set:function(t){this._tileSize=t}},{key:"blockCount",get:function(){return this._blockCount},set:function(t){this._blockCount=t}},{key:"lightMapSize",get:function(){return this._lightMapSize},set:function(t){this._lightMapSize=t}},{key:"weightMapSize",get:function(){return this._weightMapSize},set:function(t){this._weightMapSize=t}},{key:"heights",get:function(){return this._heights},set:function(t){this._heights=t}},{key:"weights",get:function(){return this._weights},set:function(t){this._weights=t}},{key:"layerBuffer",get:function(){return this._layerBuffer},set:function(t){this._layerBuffer=t}},{key:"layerInfos",get:function(){return this._layerInfos},set:function(t){this._layerInfos=t}},{key:"layerBinaryInfos",get:function(){return this._layerBinaryInfos}}]),e}(o),v=i((d=p).prototype,"_layerInfos",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=d))||b)}}}));
