System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _crd, _cc$_decorator, ccclass, property, BackgroundAdapter;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78d42CjTQJBZrp6WUzsnS6X", "BackgroundAdapter", undefined);

      _cc$_decorator = cc._decorator;
      ccclass = _cc$_decorator.ccclass;
      property = _cc$_decorator.property;

      _export("default", BackgroundAdapter = ccclass(_class = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(BackgroundAdapter, _cc$Component);

        function BackgroundAdapter() {
          return _cc$Component.apply(this, arguments) || this;
        }

        var _proto = BackgroundAdapter.prototype;

        _proto.onLoad = function onLoad() {
          // if (CC_DEBUG) {
          //     cc.log("调整前");
          //     cc.log(`屏幕分辨率: ${cc.view.getCanvasSize().width} x ${cc.view.getCanvasSize().height}`);
          //     cc.log(`视图窗口可见区域分辨率: ${cc.view.getVisibleSize().width} x ${cc.view.getVisibleSize().height}`);
          //     cc.log(`视图中边框尺寸: ${cc.view.getFrameSize().width} x ${cc.view.getFrameSize().height}`);
          //     cc.log(`设备或浏览器像素比例: ${cc.view.getDevicePixelRatio()}`);
          //     cc.log(`画布X:设计X=${cc.view.getScaleX()} ，画布Y:设计Y=${cc.view.getScaleY()}`);
          //     cc.log(`节点宽高: ${this.node.width} x ${this.node.height}`);
          //     cc.log(`节点缩放: ${this.node.scaleX} x ${this.node.scaleY}`);
          // }
          // this.node.scale = Math.max(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
          // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
          var srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
          var realWidth = this.node.width * srcScaleForShowAll;
          var realHeight = this.node.height * srcScaleForShowAll; // 2. 基于第一步的数据，再做缩放适配

          this.node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight); // if (CC_DEBUG) {
          //     cc.log(`节点在SHOW_ALL模式下展示的宽高: ${realWidth} x ${realHeight}`);
          //     cc.log(`节点在SHOW_ALL模式下展示的缩放: ${srcScaleForShowAll}`);
          //     cc.log(`节点在SHOW_ALL模式下还需要进行的缩放: ${this.node.scale} 才能达到全屏`);
          // }
        };

        return BackgroundAdapter;
      }(cc.Component)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BackgroundAdapter.js.map