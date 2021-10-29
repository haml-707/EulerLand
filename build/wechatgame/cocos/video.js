System.register(["./fog-c82f3158.js","./index-0a9deebe.js","./screen-b918b2af.js","./renderable-component-542a40ea.js","./transform-utils-a9e236ca.js","./json-asset-1decacc3.js","./camera-component-b0aa23d4.js","./renderable-2d-3f4a77a2.js","./deprecated-a4c570aa.js"],(function(t){"use strict";var e,i,n,s,o,r,a,l,h,c,p,u,_,d,y,m,f,v,E,b,A,g,w,O,P,T,k,L,R,S,D,C,U,M,V,F,N,H,I,x;return{setters:[function(t){e=t.eQ,i=t.eN,n=t.eM,s=t.fz,o=t.fA,r=t.f3,a=t.dX,l=t.fB,h=t.a,c=t.dw,p=t.e,u=t.l,_=t.d2,d=t.gr,y=t.gs,m=t.w,f=t.gu,v=t.ea,E=t.gZ,b=t.ab,A=t.eY,g=t.eS,w=t.fR,O=t.eX,P=t.eT,T=t.fD,k=t.fT,L=t.dd,R=t.ek,S=t.fV},function(t){D=t.y,C=t.z,U=t.f,M=t.E},function(t){V=t.s,F=t.o,N=t.v,H=t.K},function(t){I=t.r},function(){},function(){},function(){},function(t){x=t.U},function(){}],execute:function(){var j,B,z,G,Y=t("VideoClip",e("cc.VideoClip")((G=function(t){function e(){var e;return e=t.call(this)||this,o(e,"_duration",z,r(e)),e._video=null,e.loaded=!1,e}return i(e,t),n(e,[{key:"_nativeAsset",get:function(){return this._video},set:function(t){this._video=t,t?(this._duration=t.duration,this.loaded=!0):(this._duration=0,this.loaded=!1)}}]),e}(a),z=s((B=G).prototype,"_duration",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),j=B))||j);function K(t,e,i){var n=document.createElement("video"),s=document.createElement("source");n.appendChild(s);var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(){200===this.status||0===this.status?(s.src=URL.createObjectURL(this.response),i(null,n)):i(new Error(o.status+"(no response)"))},o.onerror=function(){var e="load video failure - "+t;h(e),i(new Error(e))},o.send()}function W(t,e,i,n){var s=new Y;s._nativeUrl=t,s._nativeAsset=e,n(null,s)}D.register({".mp4":K,".avi":K,".mov":K,".mpg":K,".mpeg":K,".rm":K,".rmvb":K}),C.register({".mp4":W,".avi":W,".mov":W,".mpg":W,".mpeg":W,".rm":W,".rmvb":W});var q,Q,X=c({REMOTE:0,LOCAL:1});!function(t){t.NONE="none",t.PLAYING="playing",t.PAUSED="paused",t.STOPPED="stopped",t.COMPLETED="completed",t.META_LOADED="meta-loaded",t.READY_TO_PLAY="ready-to-play",t.ERROR="error",t.CLICKED="clicked"}(q||(q={})),function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Q||(Q={}));var Z=function(){function t(t){var e=this;this._componentEventList=new Map,this._state=q.NONE,this._video=null,this._onHide=void 0,this._onShow=void 0,this._interrupted=!1,this._loaded=!1,this._loadedMeta=!1,this._ignorePause=!1,this._fullScreenOnAwake=!1,this._visible=!0,this._playing=!1,this._cachedCurrentTime=-1,this._waitingFullscreen=!1,this._waitingPlay=!1,this._keepAspectRatio=!1,this._component=null,this._uiTrans=null,this._node=null,this._stayOnBottom=!1,this._dirty=!1,this._forceUpdate=!1,this._w=0,this._h=0,this._m00=0,this._m01=0,this._m04=0,this._m05=0,this._m12=0,this._m13=0,this._component=t,this._node=t.node,this._uiTrans=t.node.getComponent(x),this._onHide=function(){e.video&&e._state===q.PLAYING&&(e.video.pause(),e._interrupted=!0)},this._onShow=function(){e._interrupted&&e.video&&(e.video.play(),e._interrupted=!1)},u.game.on(u.Game.EVENT_HIDE,this._onHide),u.game.on(u.Game.EVENT_SHOW,this._onShow)}var e=t.prototype;return e.onLoadedMetadata=function(t){this._loadedMeta=!0,this._forceUpdate=!0,this._visible?this.enable():this.disable(),this.dispatchEvent(q.META_LOADED);var e=t.target;this._keepAspectRatio&&e&&this.syncUITransform(e.videoWidth,e.videoHeight),this.delayedFullScreen(),this.delayedPlay()},e.onCanPlay=function(){this._loaded=!0,this.dispatchEvent(q.READY_TO_PLAY)},e.onPlay=function(){this._playing=!0,this.dispatchEvent(q.PLAYING)},e.onPlaying=function(){this.dispatchEvent(q.PLAYING)},e.onPause=function(){this._ignorePause?this._ignorePause=!1:(this._playing=!1,this.dispatchEvent(q.PAUSED))},e.onStoped=function(){this._playing=!1,this._ignorePause=!1,this.dispatchEvent(q.STOPPED)},e.onEnded=function(){this.dispatchEvent(q.COMPLETED)},e.onClick=function(){this.dispatchEvent(q.CLICKED)},e.onError=function(t){this.dispatchEvent(q.ERROR);var e=t.target;e&&e.error&&p("Error "+e.error.code+"; details: "+e.error.message)},e.play=function(){this._loadedMeta||this._loaded?this.canPlay():this._waitingPlay=!0},e.delayedPlay=function(){this._waitingPlay&&(this.canPlay(),this._waitingPlay=!1)},e.syncFullScreenOnAwake=function(t){this._fullScreenOnAwake=t,this._loadedMeta||this._loaded?this.canFullScreen(t):this._waitingFullscreen=!0},e.delayedFullScreen=function(){this._waitingFullscreen&&(this.canFullScreen(this._fullScreenOnAwake),this._waitingFullscreen=!1)},e.dispatchEvent=function(t){var e=this._componentEventList.get(t);e&&(this._state=t,e.call(this))},e.syncUITransform=function(t,e){this._uiTrans&&(this._uiTrans.width=t,this._uiTrans.height=e)},e.syncCurrentTime=function(){this.video&&-1!==this._cachedCurrentTime&&this.video.currentTime!==this._cachedCurrentTime&&(this.seekTo(this._cachedCurrentTime),this._cachedCurrentTime=-1)},e.destroy=function(){this.removeVideoPlayer(),this._componentEventList.clear(),u.game.off(u.Game.EVENT_HIDE,this._onHide),u.game.off(u.Game.EVENT_SHOW,this._onShow)},n(t,[{key:"fullScreenOnAwake",get:function(){return this._fullScreenOnAwake}},{key:"loaded",get:function(){return this._loaded}},{key:"componentEventList",get:function(){return this._componentEventList}},{key:"video",get:function(){return this._video}},{key:"state",get:function(){return this._state}},{key:"isPlaying",get:function(){return this._playing}},{key:"UICamera",get:function(){return U.root.batcher2D.getFirstRenderCamera(this._node)}}]),t}();u.internal.VideoPlayerImpl=Z;var J,$,tt,et,it,nt,st,ot,rt,at,lt,ht,ct,pt,ut,_t,dt,yt,mt,ft,vt,Et,bt,At,gt,wt,Ot,Pt,Tt,kt,Lt,Rt,St,Dt,Ct,Ut,Mt,Vt,Ft,Nt=-Math.pow(2,15),Ht=_(),It=function(t){function e(e){var i;return(i=t.call(this,e)||this)._eventList=new Map,i._clearColorA=-1,i._clearFlag=void 0,i}i(e,t);var n=e.prototype;return n.addListener=function(t,e){this._video&&(this._eventList.set(t,e),this._video.addEventListener(t,e))},n.removeAllListeners=function(){var t=this;this._eventList.forEach((function(e,i){t._video&&t._video.removeEventListener(i,e)})),this._eventList.clear()},n.canPlay=function(){var t=this;if(this.video){var e=this.video.play();window.Promise&&e instanceof Promise&&e.catch((function(){})).then((function(){t.syncCurrentTime()}))}},n.pause=function(){this.video&&(this.video.pause(),this._cachedCurrentTime=this.video.currentTime)},n.resume=function(){this.play()},n.stop=function(){var t=this;this.video&&(this._ignorePause=!0,this.video.currentTime=0,this.video.pause(),this._cachedCurrentTime=0,setTimeout((function(){t._ignorePause=!1,t.dispatchEvent(q.STOPPED)}),0))},n.syncClip=function(t){this.removeVideoPlayer(),t&&this.createVideoPlayer(t.nativeUrl)},n.syncURL=function(t){this.removeVideoPlayer(),t&&this.createVideoPlayer(t)},n.syncPlaybackRate=function(t){d.browserType!==y.UC?this.video&&(this.video.playbackRate=t):m("playbackRate is not supported by the uc mobile browser.")},n.syncVolume=function(t){this.video&&(this.video.volume=t)},n.syncMute=function(t){this.video&&(this.video.muted=t)},n.syncLoop=function(t){this.video&&(this.video.loop=t)},n.getDuration=function(){return this.video?this.video.duration:0},n.getCurrentTime=function(){return this.video?this.video.currentTime:-1},n.seekTo=function(t){this.video&&(this.video.currentTime=t)},n.canFullScreen=function(t){var e=this,i=this._video;if(i&&i.readyState===Q.HAVE_ENOUGH_DATA)return d.os===f.IOS&&v.isBrowser?(t?i.webkitEnterFullscreen&&i.webkitEnterFullscreen():i.webkitExitFullscreen&&i.webkitExitFullscreen(),void(this._fullScreenOnAwake=i.webkitDisplayingFullscreen)):V.supportsFullScreen?void(t?(d.browserType===y.IE&&(i.style.transform=""),i.setAttribute("x5-video-player-fullscreen","true"),V.requestFullScreen(i,(function(t){var n=d.browserType===y.IE?t.msFullscreenElement:t.fullscreenElement;e._fullScreenOnAwake=n===i}),(function(){e._fullScreenOnAwake=!1}))):(i.removeAttribute("x5-video-player-fullscreen"),V.exitFullScreen())):(this._fullScreenOnAwake=t,this._forceUpdate=!0,void this.syncMatrix())},n.syncStayOnBottom=function(t){this._video&&(this._video.style["z-index"]=t?Nt:0,this._stayOnBottom=t),this._dirty=!0},n.syncKeepAspectRatio=function(t){this._keepAspectRatio=t,t&&this._loadedMeta&&this._video&&this.syncUITransform(this._video.videoWidth,this._video.videoHeight)},n.removeVideoPlayer=function(){var t=this._video;t&&E(F.container,t)&&(F.container.removeChild(t),this.removeAllListeners()),this._cachedCurrentTime=0,this._playing=!1,this._loaded=!1,this._loadedMeta=!1,this._video=null},n.createVideoPlayer=function(t){var e=this._video=document.createElement("video");e.className="cocosVideo",e.style.visibility="hidden",e.style.position="absolute",e.style.bottom="0px",e.style.left="0px",e.style["transform-origin"]="0px 100% 0px",e.style["-webkit-transform-origin"]="0px 100% 0px",e.setAttribute("preload","auto"),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""),e.setAttribute("playsinline",""),this._bindDomEvent(),F.container.appendChild(e);var i=document.createElement("source");e.appendChild(i),i.src=t},n._bindDomEvent=function(){this._video,this.addListener("loadedmetadata",this.onLoadedMetadata.bind(this)),this.addListener("canplay",this.onCanPlay.bind(this)),this.addListener("canplaythrough",this.onCanPlay.bind(this)),this.addListener("play",this.onPlay.bind(this)),this.addListener("playing",this.onPlaying.bind(this)),this.addListener("pause",this.onPause.bind(this)),this.addListener("click",this.onClick.bind(this)),this.addListener("ended",this.onEnded.bind(this)),this.addListener("error",this.onError.bind(this))},n.onCanPlay=function(e){var i=e.target;if(!this._loaded||!i)switch(i.readyState){case Q.HAVE_METADATA:case Q.HAVE_ENOUGH_DATA:t.prototype.onCanPlay.call(this,e)}},n.enable=function(){if(this._video){if(this._visible=!0,"visible"===this._video.style.visibility)return;this._video.style.visibility="visible"}},n.disable=function(t){if(this._video){if(!t&&this._playing&&this._video.pause(),this._visible=!1,"hidden"===this._video.style.visibility)return;this._video.style.visibility="hidden"}},n.syncMatrix=function(){if(this._video&&this._visible&&this._component){var t=this.UICamera;if(t&&!V.fullScreen()){this._dirty&&(this._dirty=!1,this._stayOnBottom?(this._clearColorA=t.clearColor.w,this._clearFlag=t.clearFlag,t.clearColor.w=0,t.clearFlag=b.ALL):this._clearFlag&&(t.clearColor.w=this._clearColorA,t.clearFlag=this._clearFlag,this._clearColorA=-1,this._clearFlag=null)),this._component.node.getWorldMatrix(Ht),t.update(!0),t.worldMatrixToScreen(Ht,Ht,F.canvas.width,F.canvas.height);var e=0,i=0;if(this._fullScreenOnAwake?(e=H.width,i=H.height):(e=this._uiTrans.contentSize.width,i=this._uiTrans.contentSize.height),this._forceUpdate||this._m00!==Ht.m00||this._m01!==Ht.m01||this._m04!==Ht.m04||this._m05!==Ht.m05||this._m12!==Ht.m12||this._m13!==Ht.m13||this._w!==e||this._h!==i){this._m00=Ht.m00,this._m01=Ht.m01,this._m04=Ht.m04,this._m05=Ht.m05,this._m12=Ht.m12,this._m13=Ht.m13,this._w=e,this._h=i;var n=N.getDevicePixelRatio(),s=1/n,o=1/n,r=F.container,a=Ht.m00*s,l=Ht.m01,h=Ht.m04,c=Ht.m05*o;this._video.style.width=this._w+"px",this._video.style.height=this._h+"px",d.browserType!==y.MOBILE_QQ?this._video.style.objectFit=this._keepAspectRatio?"none":"fill":m("keepAspectRatio is not supported by the qq mobile browser.");var p=this._w*s,u=this._h*o,_=this._uiTrans.anchorPoint,f=_.x,v=_.y,E=p*Ht.m00*f,A=u*Ht.m05*v,g=r&&r.style.paddingLeft?parseInt(r.style.paddingLeft):0,w=r&&r.style.paddingBottom?parseInt(r.style.paddingBottom):0,O="matrix("+a+","+-l+","+-h+","+c+","+(Ht.m12*s-E+g)+","+-(Ht.m13*o-A+w)+")";this._video.style.transform=O,this._video.style["-webkit-transform"]=O,d.browserType!==y.IE&&(this._forceUpdate=!1)}}}},e}(Z),xt=function(){function t(){}return t.getImpl=function(t){return new It(t)},t}();u.internal.VideoPlayerImplManager=xt;var jt=t("VideoPlayer",(J=e("cc.VideoPlayer"),$=O(),tt=P(),et=I(x),it=A(Y),nt=A(X),st=T(),ot=T(),rt=A(Y),at=T(),lt=T(),ht=k(),ct=T(),pt=k(),ut=T(),_t=T(),dt=T(),yt=T(),mt=T(),ft=T(),vt=A([M]),Et=S(),bt=T(),J(At=$(At=tt(At=et(At=g((Ft=Vt=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n))||this,o(e,"_resourceType",wt,r(e)),o(e,"_remoteURL",Ot,r(e)),o(e,"_clip",Pt,r(e)),o(e,"_playOnAwake",Tt,r(e)),o(e,"_volume",kt,r(e)),o(e,"_mute",Lt,r(e)),o(e,"_playbackRate",Rt,r(e)),o(e,"_loop",St,r(e)),o(e,"_fullScreenOnAwake",Dt,r(e)),o(e,"_stayOnBottom",Ct,r(e)),o(e,"_keepAspectRatio",Ut,r(e)),e._impl=null,e._cachedCurrentTime=0,o(e,"videoPlayerEvent",Mt,r(e)),e}i(e,t);var s=e.prototype;return s.syncSource=function(){this._impl&&(this._resourceType===X.REMOTE?this._impl.syncURL(this._remoteURL):this._impl.syncClip(this._clip))},s.__preload=function(){this._impl=xt.getImpl(this),this.syncSource(),this._impl.syncLoop(this._loop),this._impl.syncVolume(this._volume),this._impl.syncMute(this._mute),this._impl.seekTo(this._cachedCurrentTime),this._impl.syncPlaybackRate(this._playbackRate),this._impl.syncStayOnBottom(this._stayOnBottom),this._impl.syncKeepAspectRatio(this._keepAspectRatio),this._impl.syncFullScreenOnAwake(this._fullScreenOnAwake),this._impl.componentEventList.set(q.META_LOADED,this.onMetaLoaded.bind(this)),this._impl.componentEventList.set(q.READY_TO_PLAY,this.onReadyToPlay.bind(this)),this._impl.componentEventList.set(q.PLAYING,this.onPlaying.bind(this)),this._impl.componentEventList.set(q.PAUSED,this.onPasued.bind(this)),this._impl.componentEventList.set(q.STOPPED,this.onStopped.bind(this)),this._impl.componentEventList.set(q.COMPLETED,this.onCompleted.bind(this)),this._impl.componentEventList.set(q.ERROR,this.onError.bind(this)),this._playOnAwake&&this._impl.loaded&&this.play()},s.onEnable=function(){this._impl&&this._impl.enable()},s.onDisable=function(){this._impl&&this._impl.disable()},s.onDestroy=function(){this._impl&&(this._impl.destroy(),this._impl=null)},s.update=function(){this._impl&&this._impl.syncMatrix()},s.onMetaLoaded=function(){M.emitEvents(this.videoPlayerEvent,this,q.META_LOADED),this.node.emit("meta-loaded",this)},s.onReadyToPlay=function(){this._playOnAwake&&!this.isPlaying&&this.play(),M.emitEvents(this.videoPlayerEvent,this,q.READY_TO_PLAY),this.node.emit(q.READY_TO_PLAY,this)},s.onPlaying=function(){M.emitEvents(this.videoPlayerEvent,this,q.PLAYING),this.node.emit(q.PLAYING,this)},s.onPasued=function(){M.emitEvents(this.videoPlayerEvent,this,q.PAUSED),this.node.emit(q.PAUSED,this)},s.onStopped=function(){M.emitEvents(this.videoPlayerEvent,this,q.STOPPED),this.node.emit(q.STOPPED,this)},s.onCompleted=function(){M.emitEvents(this.videoPlayerEvent,this,q.COMPLETED),this.node.emit(q.COMPLETED,this)},s.onError=function(){M.emitEvents(this.videoPlayerEvent,this,q.ERROR),this.node.emit(q.ERROR,this)},s.play=function(){this._impl&&this._impl.play()},s.resume=function(){this._impl&&this._impl.resume()},s.pause=function(){this._impl&&this._impl.pause()},s.stop=function(){this._impl&&this._impl.stop()},n(e,[{key:"resourceType",get:function(){return this._resourceType},set:function(t){this._resourceType!==t&&(this._resourceType=t,this.syncSource())}},{key:"remoteURL",get:function(){return this._remoteURL},set:function(t){this._remoteURL!==t&&(this._remoteURL=t,this.syncSource())}},{key:"clip",get:function(){return this._clip},set:function(t){this._clip!==t&&(this._clip=t,this.syncSource())}},{key:"playOnAwake",get:function(){return this._playOnAwake},set:function(t){this._playOnAwake=t}},{key:"playbackRate",get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._impl&&this._impl.syncPlaybackRate(t)}},{key:"volume",get:function(){return this._volume},set:function(t){this._volume=t,this._impl&&this._impl.syncVolume(t)}},{key:"mute",get:function(){return this._mute},set:function(t){this._mute=t,this._impl&&this._impl.syncMute(t)}},{key:"loop",get:function(){return this._loop},set:function(t){this._loop=t,this._impl&&this._impl.syncLoop(t)}},{key:"keepAspectRatio",get:function(){return this._keepAspectRatio},set:function(t){this._keepAspectRatio!==t&&(this._keepAspectRatio=t,this._impl&&this._impl.syncKeepAspectRatio(t))}},{key:"fullScreenOnAwake",get:function(){return this._impl?(this._fullScreenOnAwake=this._impl.fullScreenOnAwake,this._fullScreenOnAwake):this._fullScreenOnAwake},set:function(t){this._fullScreenOnAwake!==t&&(this._fullScreenOnAwake=t,this._impl&&this._impl.syncFullScreenOnAwake(t))}},{key:"stayOnBottom",get:function(){return this._stayOnBottom},set:function(t){this._stayOnBottom!==t&&(this._stayOnBottom=t,this._impl&&this._impl.syncStayOnBottom(t))}},{key:"nativeVideo",get:function(){return this._impl&&this._impl.video||null}},{key:"currentTime",get:function(){return this._impl?this._impl.getCurrentTime():this._cachedCurrentTime},set:function(t){Number.isNaN(t)?m("illegal video time! value:"+t):(t=L(t,0,this.duration),this._cachedCurrentTime=t,this._impl&&this._impl.seekTo(t))}},{key:"duration",get:function(){return this._impl?this._impl.getDuration():0}},{key:"state",get:function(){return this._impl?this._impl.state:q.NONE}},{key:"isPlaying",get:function(){return!!this._impl&&this._impl.isPlaying}}]),e}(R),Vt.EventType=q,Vt.ResourceType=X,wt=s((gt=Ft).prototype,"_resourceType",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return X.LOCAL}}),Ot=s(gt.prototype,"_remoteURL",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Pt=s(gt.prototype,"_clip",[it,l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Tt=s(gt.prototype,"_playOnAwake",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),kt=s(gt.prototype,"_volume",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),Lt=s(gt.prototype,"_mute",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Rt=s(gt.prototype,"_playbackRate",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),St=s(gt.prototype,"_loop",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Dt=s(gt.prototype,"_fullScreenOnAwake",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ct=s(gt.prototype,"_stayOnBottom",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ut=s(gt.prototype,"_keepAspectRatio",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),s(gt.prototype,"resourceType",[nt,st],Object.getOwnPropertyDescriptor(gt.prototype,"resourceType"),gt.prototype),s(gt.prototype,"remoteURL",[ot],Object.getOwnPropertyDescriptor(gt.prototype,"remoteURL"),gt.prototype),s(gt.prototype,"clip",[rt,at],Object.getOwnPropertyDescriptor(gt.prototype,"clip"),gt.prototype),s(gt.prototype,"playOnAwake",[lt],Object.getOwnPropertyDescriptor(gt.prototype,"playOnAwake"),gt.prototype),s(gt.prototype,"playbackRate",[w,ht,ct],Object.getOwnPropertyDescriptor(gt.prototype,"playbackRate"),gt.prototype),s(gt.prototype,"volume",[w,pt,ut],Object.getOwnPropertyDescriptor(gt.prototype,"volume"),gt.prototype),s(gt.prototype,"mute",[_t],Object.getOwnPropertyDescriptor(gt.prototype,"mute"),gt.prototype),s(gt.prototype,"loop",[dt],Object.getOwnPropertyDescriptor(gt.prototype,"loop"),gt.prototype),s(gt.prototype,"keepAspectRatio",[yt],Object.getOwnPropertyDescriptor(gt.prototype,"keepAspectRatio"),gt.prototype),s(gt.prototype,"fullScreenOnAwake",[mt],Object.getOwnPropertyDescriptor(gt.prototype,"fullScreenOnAwake"),gt.prototype),s(gt.prototype,"stayOnBottom",[ft],Object.getOwnPropertyDescriptor(gt.prototype,"stayOnBottom"),gt.prototype),Mt=s(gt.prototype,"videoPlayerEvent",[l,vt,Et,bt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),At=gt))||At)||At)||At)||At)||At));u.internal.VideoPlayer=jt}}}));
