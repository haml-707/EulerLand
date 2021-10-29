System.register(["./fog-c82f3158.js"],(function(t){"use strict";var e,i,s,r,n,h,a,u,_,c,o,l,d,f;return{setters:[function(t){e=t.eN,i=t.fp,s=t.al,r=t.d_,n=t.l,h=t.eM,a=t.eQ,u=t.f,_=t.dH,c=t.d6,o=t.cU,l=t.d4,d=t.dX,f=t.dZ}],execute:function(){var x=function(){function t(t,e){this._texture=void 0,this._width=void 0,this._height=void 0,this._x=void 0,this._y=void 0,this._nexty=void 0,this._innerTextureInfos={},this._innerSpriteFrames=void 0,this._count=void 0;var i=new g;i.initWithSize(t,e),this._texture=i,this._width=t,this._height=e,this._x=2,this._y=2,this._nexty=2,this._innerTextureInfos={},this._innerSpriteFrames=[],this._count=0}var e=t.prototype;return e.insertSpriteFrame=function(t){var e=t.rect,i=t.texture,s=this._innerTextureInfos[i.getId()],r=e.x,h=e.y;if(s)r+=s.x,h+=s.y;else{var a=i.width,u=i.height;if(this._x+a+2>this._width&&(this._x=2,this._y=this._nexty),this._y+u+2>this._nexty&&(this._nexty=this._y+u+2),this._nexty>this._height)return null;n.internal.dynamicAtlasManager.textureBleeding&&((a<=8||u<=8)&&(this._texture.drawTextureAt(i.image,this._x-1,this._y-1),this._texture.drawTextureAt(i.image,this._x-1,this._y+1),this._texture.drawTextureAt(i.image,this._x+1,this._y-1),this._texture.drawTextureAt(i.image,this._x+1,this._y+1)),this._texture.drawTextureAt(i.image,this._x-1,this._y),this._texture.drawTextureAt(i.image,this._x+1,this._y),this._texture.drawTextureAt(i.image,this._x,this._y-1),this._texture.drawTextureAt(i.image,this._x,this._y+1)),this._texture.drawTextureAt(i.image,this._x,this._y),this._innerTextureInfos[i.getId()]={x:this._x,y:this._y,texture:i},this._count++,r+=this._x,h+=this._y,this._x+=a+2}var _={x:r,y:h,texture:this._texture};return this._innerSpriteFrames.push(t),_},e.deleteInnerTexture=function(t){t&&this._innerTextureInfos[t.getId()]&&(delete this._innerTextureInfos[t.getId()],this._count--)},e.isEmpty=function(){return this._count<=0},e.reset=function(){this._x=2,this._y=2,this._nexty=2;for(var t=this._innerSpriteFrames,e=0,i=t.length;e<i;e++){var s=t[e];s.isValid&&s._resetDynamicAtlasFrame()}this._innerSpriteFrames.length=0,this._innerTextureInfos={}},e.destroy=function(){this.reset(),this._texture.destroy()},t}(),g=function(t){function r(){return t.apply(this,arguments)||this}e(r,t);var n=r.prototype;return n.initWithSize=function(t,e,s){void 0===s&&(s=i.RGBA8888),this.reset({width:t,height:e,format:s}),this.loaded=!0,this.emit("load")},n.drawTextureAt=function(t,e,i){var r=this.getGFXTexture();if(t&&r){var n=this._getGFXDevice();if(n){var h=new s;h.texOffset.x=e,h.texOffset.y=i,h.texExtent.width=t.width,h.texExtent.height=t.height,n.copyTexImagesToTexture([t.data],r,[h])}else console.warn("Unable to get device")}},r}(r),v=function(){function t(){this._atlases=[],this._atlasIndex=-1,this._maxAtlasCount=5,this._textureSize=2048,this._maxFrameSize=512,this._textureBleeding=!0,this._enabled=!1}var e=t.prototype;return e.newAtlas=function(){var t=this._atlases[++this._atlasIndex];return t||(t=new x(this._textureSize,this._textureSize),this._atlases.push(t)),t},e.beforeSceneLoad=function(){this.reset()},e.insertSpriteFrame=function(t){if(!this._enabled||this._atlasIndex===this._maxAtlasCount||!t||t._original)return null;if(!t.packable)return null;var e=this._atlases[this._atlasIndex];e||(e=this.newAtlas());var i=e.insertSpriteFrame(t);return i||this._atlasIndex===this._maxAtlasCount?i:(e=this.newAtlas()).insertSpriteFrame(t)},e.reset=function(){for(var t=0,e=this._atlases.length;t<e;t++)this._atlases[t].destroy();this._atlases.length=0,this._atlasIndex=-1},e.deleteAtlasSpriteFrame=function(t){if(t._original){var e=t._original._texture;this.deleteAtlasTexture(e)}},e.deleteAtlasTexture=function(t){if(t)for(var e=this._atlases.length-1;e>=0;e--)this._atlases[e].deleteInnerTexture(t),this._atlases[e].isEmpty()&&(this._atlases[e].destroy(),this._atlases.splice(e,1),this._atlasIndex--)},e.packToDynamicAtlas=function(t,e){if(!e._original&&e.packable){var i=this.insertSpriteFrame(e);i&&e._setDynamicAtlasFrame(i)}},h(t,[{key:"enabled",get:function(){return this._enabled},set:function(t){this._enabled!==t&&(t?(this.reset(),n.director.on(n.Director.EVENT_BEFORE_SCENE_LAUNCH,this.beforeSceneLoad,this)):(this.reset(),n.director.off(n.Director.EVENT_BEFORE_SCENE_LAUNCH,this.beforeSceneLoad,this)),this._enabled=t)}},{key:"maxAtlasCount",get:function(){return this._maxAtlasCount},set:function(t){this._maxAtlasCount=t}},{key:"atlasCount",get:function(){return this._atlases.length}},{key:"textureBleeding",get:function(){return this._textureBleeding},set:function(t){this._textureBleeding=t}},{key:"textureSize",get:function(){return this._textureSize},set:function(t){this._textureSize=t}},{key:"maxFrameSize",get:function(){return this._maxFrameSize},set:function(t){this._maxFrameSize=t}}]),t}();v.instance=void 0;var p,y=t("d",v.instance=new v);n.internal.dynamicAtlasManager=y;var m=[{u:0,v:0},{u:0,v:0},{u:0,v:0},{u:0,v:0}],S=t("S",a("cc.SpriteFrame")(p=function(t){function i(){var e;return(e=t.call(this)||this).vertices=null,e.uv=[],e.uvHash=0,e.unbiasUV=[],e.uvSliced=[],e._rect=new c,e._offset=new o,e._originalSize=new l,e._rotated=!1,e._capInsets=[0,0,0,0],e._atlasUuid="",e._texture=void 0,e._isFlipUVY=!1,e._isFlipUVX=!1,e._original=null,e._packable=!0,e}e(i,t),i.createWithImage=function(t){var e=t instanceof f?t:new f(t),s=new r;s.image=e;var n=new i;return n.texture=s,n};var s=i.prototype;return s.textureLoaded=function(){return this.texture&&this.texture.loaded},s.isRotated=function(){return this._rotated},s.setRotated=function(t){this.rotated=t},s.getRect=function(t){return t?(t.set(this._rect),t):this._rect.clone()},s.setRect=function(t){this.rect=t},s.getOriginalSize=function(t){return t?(t.set(this._originalSize),t):this._originalSize.clone()},s.setOriginalSize=function(t){this.originalSize=t},s.getOffset=function(t){return t?(t.set(this._offset),t):this._offset.clone()},s.setOffset=function(t){this.offset=t},s.getGFXTexture=function(){return this._texture.getGFXTexture()},s.getGFXSampler=function(){return this._texture.getGFXSampler()},s.getHash=function(){return this._texture.getHash()},s.getSamplerHash=function(){return this._texture.getSamplerHash()},s.reset=function(t,e){void 0===e&&(e=!1);var i=!1;e&&(this._originalSize.set(0,0),this._rect.set(0,0,0,0),this._offset.set(0,0),this._capInsets=[0,0,0,0],this._rotated=!1,i=!0),t&&(t.texture&&(this.loaded=!1,this._rect.x=this._rect.y=0,this._rect.width=t.texture.width,this._rect.height=t.texture.height,this._refreshTexture(t.texture),this.checkRect(this._texture)),t.originalSize&&this._originalSize.set(t.originalSize),t.rect&&this._rect.set(t.rect),t.offset&&this._offset.set(t.offset),void 0!==t.borderTop&&(this._capInsets[1]=t.borderTop),void 0!==t.borderBottom&&(this._capInsets[3]=t.borderBottom),void 0!==t.borderLeft&&(this._capInsets[0]=t.borderLeft),void 0!==t.borderRight&&(this._capInsets[2]=t.borderRight),void 0!==t.isRotate&&(this._rotated=!!t.isRotate),void 0!==t.isFlipUv&&(this._isFlipUVY=!!t.isFlipUv),i=!0),i&&this.texture&&this._calculateUV()},s.checkRect=function(t){var e=this._rect,i=e.x,s=e.y;return this._rotated?(i+=e.height,s+=e.width):(i+=e.width,s+=e.height),i>t.width?(u(3300,this.name+"/"+t.name,i,t.width),!1):!(s>t.height&&(u(3301,this.name+"/"+t.name,s,t.height),1))},s.onLoaded=function(){this.loaded=!0,this.emit("load")},s.destroy=function(){return this._packable&&y&&y.deleteAtlasSpriteFrame(this),t.prototype.destroy.call(this)},s._calculateSlicedUV=function(){var t=this._rect,e=this.texture,i=e.width,s=e.height,r=this._capInsets[0],n=this._capInsets[2],h=t.width-r-n,a=this._capInsets[1],u=this._capInsets[3],_=t.height-a-u,c=this.uvSliced;if(c.length=0,this._rotated){m[0].u=t.x/i,m[1].u=(t.x+u)/i,m[2].u=(t.x+u+_)/i,m[3].u=(t.x+t.height)/i,m[3].v=t.y/s,m[2].v=(t.y+r)/s,m[1].v=(t.y+r+h)/s,m[0].v=(t.y+t.width)/s;for(var o=0;o<4;++o)for(var l=m[o],d=0;d<4;++d){var f=m[3-d];c.push({u:l.u,v:f.v})}}else{m[0].u=t.x/i,m[1].u=(t.x+r)/i,m[2].u=(t.x+r+h)/i,m[3].u=(t.x+t.width)/i,m[3].v=t.y/s,m[2].v=(t.y+a)/s,m[1].v=(t.y+a+_)/s,m[0].v=(t.y+t.height)/s;for(var x=0;x<4;++x)for(var g=m[x],v=0;v<4;++v){var p=m[v];c.push({u:p.u,v:g.v})}}},s._calculateUV=function(){var t=this._rect,e=this.uv,i=this.unbiasUV,s=this.texture,r=s.width,n=s.height;if(this._rotated){var h=0===r?0:t.x/r,a=0===r?1:(t.x+t.height)/r,u=0===n?0:t.y/n,c=0===n?1:(t.y+t.width)/n;this._isFlipUVX&&this._isFlipUVY?(e[0]=a,e[1]=c,e[2]=a,e[3]=u,e[4]=h,e[5]=c,e[6]=h,e[7]=u):this._isFlipUVX?(e[0]=a,e[1]=u,e[2]=a,e[3]=c,e[4]=h,e[5]=u,e[6]=h,e[7]=c):this._isFlipUVY?(e[0]=h,e[1]=c,e[2]=h,e[3]=u,e[4]=a,e[5]=c,e[6]=a,e[7]=u):(e[0]=h,e[1]=u,e[2]=h,e[3]=c,e[4]=a,e[5]=u,e[6]=a,e[7]=c);var o=0===r?0:t.x/r,l=0===r?1:(t.x+t.height)/r,d=0===n?0:t.y/n,f=0===n?1:(t.y+t.width)/n;this._isFlipUVX&&this._isFlipUVY?(i[0]=l,i[1]=f,i[2]=l,i[3]=d,i[4]=o,i[5]=f,i[6]=o,i[7]=d):this._isFlipUVX?(i[0]=l,i[1]=d,i[2]=l,i[3]=f,i[4]=o,i[5]=d,i[6]=o,i[7]=f):this._isFlipUVY?(i[0]=o,i[1]=f,i[2]=o,i[3]=d,i[4]=l,i[5]=f,i[6]=l,i[7]=d):(i[0]=o,i[1]=d,i[2]=o,i[3]=f,i[4]=l,i[5]=d,i[6]=l,i[7]=f)}else{var x=0===r?0:t.x/r,g=0===r?1:(t.x+t.width)/r,v=0===n?1:(t.y+t.height)/n,p=0===n?0:t.y/n;this._isFlipUVX&&this._isFlipUVY?(e[0]=g,e[1]=p,e[2]=x,e[3]=p,e[4]=g,e[5]=v,e[6]=x,e[7]=v):this._isFlipUVX?(e[0]=g,e[1]=v,e[2]=x,e[3]=v,e[4]=g,e[5]=p,e[6]=x,e[7]=p):this._isFlipUVY?(e[0]=x,e[1]=p,e[2]=g,e[3]=p,e[4]=x,e[5]=v,e[6]=g,e[7]=v):(e[0]=x,e[1]=v,e[2]=g,e[3]=v,e[4]=x,e[5]=p,e[6]=g,e[7]=p);var y=0===r?0:t.x/r,m=0===r?1:(t.x+t.width)/r,S=0===n?1:(t.y+t.height)/n,w=0===n?0:t.y/n;this._isFlipUVX&&this._isFlipUVY?(i[0]=m,i[1]=w,i[2]=y,i[3]=w,i[4]=m,i[5]=S,i[6]=y,i[7]=S):this._isFlipUVX?(i[0]=m,i[1]=S,i[2]=y,i[3]=S,i[4]=m,i[5]=w,i[6]=y,i[7]=w):this._isFlipUVY?(i[0]=y,i[1]=w,i[2]=m,i[3]=w,i[4]=y,i[5]=S,i[6]=m,i[7]=S):(i[0]=y,i[1]=S,i[2]=m,i[3]=S,i[4]=y,i[5]=w,i[6]=m,i[7]=w)}for(var U="",F=0;F<e.length;F++)U+=e[F];this.uvHash=_(U,666);var V=this.vertices;if(V){V.nu.length=0,V.nv.length=0;for(var I=0;I<V.u.length;I++)V.nu[I]=V.u[I]/r,V.nv[I]=V.v[I]/n}this._calculateSlicedUV()},s._setDynamicAtlasFrame=function(t){t&&(this._original={_texture:this._texture,_x:this._rect.x,_y:this._rect.y},this._texture=t.texture,this._rect.x=t.x,this._rect.y=t.y,this._calculateUV())},s._resetDynamicAtlasFrame=function(){this._original&&(this._rect.x=this._original._x,this._rect.y=this._original._y,this._texture=this._original._texture,this._original=null,this._calculateUV())},s._checkPackable=function(){var t=y;if(t){var e=this._texture;if(e instanceof r&&!e.isCompressed){var i=this.width,s=this.height;!e.image||i>t.maxFrameSize||s>t.maxFrameSize?this._packable=!1:e.image&&e.image instanceof HTMLCanvasElement&&(this._packable=!0)}else this._packable=!1}},s._serialize=function(){return null},s._deserialize=function(t){var e=t,i=e.rect;i&&(this._rect=new c(i.x,i.y,i.width,i.height));var s=e.offset;e.offset&&(this._offset=new o(s.x,s.y));var r=e.originalSize;e.originalSize&&(this._originalSize=new l(r.width,r.height)),this._rotated=!!e.rotated,this._name=e.name,this._packable=!!e.packable;var n=e.capInsets;n&&(this._capInsets[0]=n[0],this._capInsets[1]=n[1],this._capInsets[2]=n[2],this._capInsets[3]=n[3]),this.vertices=e.vertices,this.vertices&&(this.vertices.nu=[],this.vertices.nv=[])},s.clone=function(){var t,e,s,r,n,h,a,u,_=new i,c=this.vertices;return _.vertices=c?{x:c.x,y:c.y,triangles:c.triangles,nu:null===(t=c.nu)||void 0===t?void 0:t.slice(0),u:null===(e=c.u)||void 0===e?void 0:e.slice(0),nv:null===(s=c.nv)||void 0===s?void 0:s.slice(0),v:null===(r=c.v)||void 0===r?void 0:r.slice(0)}:null,(n=_.uv).splice.apply(n,[0,_.uv.length].concat(this.uv)),_.uvHash=this.uvHash,(h=_.unbiasUV).splice.apply(h,[0,_.unbiasUV.length].concat(this.unbiasUV)),(a=_.uvSliced).splice.apply(a,[0,_.uvSliced.length].concat(this.uvSliced)),_._rect.set(this._rect),_._offset.set(this._offset),_._originalSize.set(this._originalSize),_._rotated=this._rotated,(u=_._capInsets).splice.apply(u,[0,_._capInsets.length].concat(this._capInsets)),_._atlasUuid=this._atlasUuid,_._texture=this._texture,_._isFlipUVX=this._isFlipUVX,_._isFlipUVY=this._isFlipUVY,_},s._textureLoaded=function(){var t=this._texture,e={},i=!1;0!==this._rect.width&&0!==this._rect.height&&this.checkRect(t)||(e.rect=new c(0,0,t.width,t.height),i=!0),(0===this._originalSize.width||0===this._originalSize.height||i)&&(e.originalSize=new l(t.width,t.height),i=!0),i&&(this.reset(e),this.onLoaded()),this._checkPackable()},s._refreshTexture=function(t){this._texture=t,t.loaded?this._textureLoaded():t.once("load",this._textureLoaded,this)},s.initDefault=function(e){t.prototype.initDefault.call(this,e);var i=new r;i.initDefault(),this._refreshTexture(i),this._calculateUV()},s.validate=function(){return this._texture&&this._rect&&0!==this._rect.width&&0!==this._rect.height},h(i,[{key:"insetTop",get:function(){return this._capInsets[1]},set:function(t){this._capInsets[1]!==t&&(this._capInsets[1]=t,this._texture&&this._calculateSlicedUV())}},{key:"insetBottom",get:function(){return this._capInsets[3]},set:function(t){this._capInsets[3]!==t&&(this._capInsets[3]=t,this._texture&&this._calculateSlicedUV())}},{key:"insetLeft",get:function(){return this._capInsets[0]},set:function(t){this._capInsets[0]!==t&&(this._capInsets[0]=t,this._texture&&this._calculateSlicedUV())}},{key:"insetRight",get:function(){return this._capInsets[2]},set:function(t){this._capInsets[2]!==t&&(this._capInsets[2]=t,this._texture&&this._calculateSlicedUV())}},{key:"rect",get:function(){return this._rect},set:function(t){this._rect.equals(t)||(this._rect.set(t),this._texture&&this._calculateUV())}},{key:"originalSize",get:function(){return this._originalSize},set:function(t){this._originalSize.equals(t)||(this._originalSize.set(t),this._texture&&this._calculateUV())}},{key:"offset",get:function(){return this._offset},set:function(t){this._offset.set(t)}},{key:"rotated",get:function(){return this._rotated},set:function(t){this._rotated!==t&&(this._rotated=t,this._texture&&this._calculateUV())}},{key:"texture",get:function(){return this._texture},set:function(t){t?this.reset({texture:t},!0):console.warn("Error Texture in "+this.name)}},{key:"atlasUuid",get:function(){return this._atlasUuid},set:function(t){this._atlasUuid=t}},{key:"width",get:function(){return this._texture.width}},{key:"height",get:function(){return this._texture.height}},{key:"_textureSource",set:function(t){window.Build?this._texture=t:t&&(this._refreshTexture(t),this._calculateUV())}},{key:"flipUVX",get:function(){return this._isFlipUVX},set:function(t){this._isFlipUVX=t,this._calculateUV()}},{key:"flipUVY",get:function(){return this._isFlipUVY},set:function(t){this._isFlipUVY=t,this._calculateUV()}},{key:"packable",get:function(){return this._packable},set:function(t){this._packable=t}},{key:"original",get:function(){return this._original}}]),i}(d))||p);n.SpriteFrame=S}}}));
