System.register([],(function(t){"use strict";return{execute:function(){t("T",function(){function t(){this.data=void 0,this.data={keys:[]}}var e=t.prototype;return e.get=function(t,e){if(t>e){var a=e;e=t,t=a}return this.data[t+"-"+e]},e.set=function(t,e,a){if(t>e){var i=e;e=t,t=i}var n=t+"-"+e;if(null==a){var s=this.data.keys.indexOf(n);if(-1!==s)return this.data.keys.splice(s,1),delete this.data[n],a}return this.get(t,e)||this.data.keys.push(n),this.data[n]=a,this.data[n]},e.reset=function(){this.data={keys:[]}},e.getLength=function(){return this.data.keys.length},e.getKeyByIndex=function(t){return this.data.keys[t]},e.getDataByKey=function(t){return this.data[t]},t}())}}}));
