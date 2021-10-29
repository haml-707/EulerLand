System.register(["cce:/internal/code-quality/cr.mjs", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp, _crd, ccclass, property, EventManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemStatus(extras) {
    _reporterNs.report("ItemStatus", "./ItemStatus", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35555Q90NhPCb7tghjXs2xw", "EventManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventManager", EventManager = (_dec = ccclass('EventManager'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class EventManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "event0", _descriptor, this);

          _initializerDefineProperty(this, "event1", _descriptor2, this);

          _initializerDefineProperty(this, "event2", _descriptor3, this);

          _initializerDefineProperty(this, "event3", _descriptor4, this);

          _initializerDefineProperty(this, "event4", _descriptor5, this);

          _initializerDefineProperty(this, "event7", _descriptor6, this);

          _initializerDefineProperty(this, "event8", _descriptor7, this);

          _initializerDefineProperty(this, "event10", _descriptor8, this);

          _initializerDefineProperty(this, "event11", _descriptor9, this);

          _initializerDefineProperty(this, "event14", _descriptor10, this);

          _initializerDefineProperty(this, "event15", _descriptor11, this);

          _initializerDefineProperty(this, "event16", _descriptor12, this);

          _initializerDefineProperty(this, "event17", _descriptor13, this);

          _defineProperty(this, "box3event5", false);

          _defineProperty(this, "box3event6", false);

          _defineProperty(this, "box3event7", false);

          _defineProperty(this, "event9", false);

          _defineProperty(this, "box4event12", false);

          _defineProperty(this, "box4event13", false);

          _defineProperty(this, "box4event14", false);
        }

        Event0(a, items) {
          if (a == 0) {
            //����
            if (items.synCode == -1) {
              this.event0[0].active = true;
            } else {
              this.event0[0].active = true;
              this.event0[1].active = true;
            }
          } else {
            if (items.synCode == 0) {
              this.event0[0].active = true;
              this.event0[1].active = true;
            }
          }

          items.synCode++;
        }

        Event1(item, items) {
          items.synCode++;
          if (item.name == "01") this.event1[0].active = true;else this.event1[1].active = true;
        }

        Event2() {
          this.event2.active = true;
        }

        Event3() {
          this.event3.active = true;
        }

        Event4() {
          this.event4.active = true;
        }

        Event5() {
          this.box3event5 = true;
          if (this.box3event5 && this.box3event6 && this.box3event7) this.event7.active = true;
        }

        Event6() {
          this.box3event6 = true;
          if (this.box3event5 && this.box3event6 && this.box3event7) this.event7.active = true;
        }

        Event7() {
          this.box3event7 = true;
          if (this.box3event5 && this.box3event6 && this.box3event7) this.event7.active = true;
        }

        Event8() {
          this.event8.active = true;
        }

        Event9() {
          this.event9 = true;
        }

        Event10() {
          this.event10.active = true;
        }

        Event11() {
          this.event11.active = true;
        }

        Event12() {
          this.box4event12 = true;
          if (this.box4event12 && this.box4event13 && this.box4event14) this.event14.active = true;
        }

        Event13() {
          this.box4event13 = true;
          if (this.box4event12 && this.box4event13 && this.box4event14) this.event14.active = true;
        }

        Event14() {
          this.box4event14 = true;
          if (this.box4event12 && this.box4event13 && this.box4event14) this.event14.active = true;
        }

        Event15() {
          this.event15.active = true;
        }

        Event16() {
          this.event16.active = false;
        }

        Event17() {
          this.event17.active = true;
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "event0", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "event1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "event2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "event3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "event4", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "event7", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "event8", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "event10", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "event11", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "event14", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "event15", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "event16", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "event17", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
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
//# sourceMappingURL=EventManager.js.map