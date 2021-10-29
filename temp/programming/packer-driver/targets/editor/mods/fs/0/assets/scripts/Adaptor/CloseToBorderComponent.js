System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, CloseToBorderComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf3e2ka4oJD86ow+EZC3UZs", "CloseToBorderComponent", undefined);

      ({
        ccclass,
        property
      } = cc._decorator);
      /**
       * 未完成
       */

      _export("default", CloseToBorderComponent = (_dec = property({
        tooltip: "是否紧贴下方，不能和紧贴上方同时使用"
      }), _dec2 = property({
        tooltip: "距离下方的距离（px），开启紧贴下方时使用"
      }), ccclass(_class = (_class2 = (_temp = class CloseToBorderComponent extends cc.Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "closeToBottom", _descriptor, this);

          _initializerDefineProperty(this, "marginBottomInPx", _descriptor2, this);
        }

        // @property({
        //     tooltip: "是否紧贴上方，不能和紧贴下方同时使用"
        // })
        // closeToTop: boolean = false;
        onLoad() {
          // 计算本节点在父节点下，贴底边时的坐标，需要特别注意处理锚点
          if (this.closeToBottom) {
            this.node.position = cc.v2(this.node.position.x, -this.node.parent.height / 2 + this.node.anchorY * this.node.height + this.marginBottomInPx);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeToBottom", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "marginBottomInPx", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CloseToBorderComponent.js.map