System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./UIManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, CCInteger, UIManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, ItemStatus;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIManager", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCInteger = _cc.CCInteger;
    }, function (_UIManager) {
      UIManager = _UIManager.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "067c7Ce/AdPZoqQqcRZ/flD", "ItemStatus", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemStatus", ItemStatus = (_dec = ccclass('ItemStatus'), _dec2 = property({
        type: _crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
          error: Error()
        }), UIManager) : UIManager
      }), _dec3 = property({
        type: Boolean
      }), _dec4 = property({
        type: Boolean
      }), _dec5 = property({
        type: Boolean
      }), _dec6 = property({
        type: Boolean
      }), _dec7 = property({
        type: Boolean
      }), _dec8 = property({
        type: Boolean
      }), _dec9 = property({
        type: CCInteger
      }), _dec10 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp = class ItemStatus extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "uiManager", _descriptor, this);

          _initializerDefineProperty(this, "isInBag", _descriptor2, this);

          _initializerDefineProperty(this, "synGet", _descriptor3, this);

          _initializerDefineProperty(this, "canUse", _descriptor4, this);

          _initializerDefineProperty(this, "canSyn", _descriptor5, this);

          _initializerDefineProperty(this, "isSelect", _descriptor6, this);

          _initializerDefineProperty(this, "isItem", _descriptor7, this);

          _initializerDefineProperty(this, "synCode", _descriptor8, this);

          _initializerDefineProperty(this, "useCode", _descriptor9, this);

          _defineProperty(this, "time", 0.5);

          _defineProperty(this, "isStartTime", false);

          _defineProperty(this, "isLong", false);
        }

        TouchStart() {
          if (this.isInBag) {
            this.isStartTime = true;
            this.isLong = false;
            this.time = 0.5;
          }
        }

        TouchEnd() {
          if (this.isInBag) {
            this.isStartTime = false;

            if (!this.isLong) {
              this.time = 0.5;
            }

            console.log(this.node.name + "long:" + this.isLong);
          }
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.TouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.TouchEnd, this);
        }

        start() {// [3]
        }

        update(deltaTime) {
          if (this.isStartTime) {
            this.time -= deltaTime;

            if (this.time <= 0) {
              this.isLong = true;
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isInBag", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "synGet", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "canUse", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "canSyn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isSelect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "synCode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "useCode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -1;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemStatus.js.map