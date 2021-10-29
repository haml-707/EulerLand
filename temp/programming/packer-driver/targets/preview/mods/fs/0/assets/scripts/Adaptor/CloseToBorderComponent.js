System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, _cc$_decorator, ccclass, property, CloseToBorderComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      _cc$_decorator = cc._decorator;
      ccclass = _cc$_decorator.ccclass;
      property = _cc$_decorator.property;
      /**
       * 未完成
       */

      _export("default", CloseToBorderComponent = (_dec = property({
        tooltip: "是否紧贴下方，不能和紧贴上方同时使用"
      }), _dec2 = property({
        tooltip: "距离下方的距离（px），开启紧贴下方时使用"
      }), ccclass(_class = (_class2 = (_temp = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(CloseToBorderComponent, _cc$Component);

        function CloseToBorderComponent() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "closeToBottom", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "marginBottomInPx", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = CloseToBorderComponent.prototype;

        // @property({
        //     tooltip: "是否紧贴上方，不能和紧贴下方同时使用"
        // })
        // closeToTop: boolean = false;
        _proto.onLoad = function onLoad() {
          // 计算本节点在父节点下，贴底边时的坐标，需要特别注意处理锚点
          if (this.closeToBottom) {
            this.node.position = cc.v2(this.node.position.x, -this.node.parent.height / 2 + this.node.anchorY * this.node.height + this.marginBottomInPx);
          }
        };

        return CloseToBorderComponent;
      }(cc.Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeToBottom", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "marginBottomInPx", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CloseToBorderComponent.js.map