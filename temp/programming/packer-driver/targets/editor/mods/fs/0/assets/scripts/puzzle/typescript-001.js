System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, view, macro, find, tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Typescript001;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      view = _cc.view;
      macro = _cc.macro;
      find = _cc.find;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4fbe2hhuZHUYuebAQjhTBC", "typescript-001", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Typescript001", Typescript001 = (_dec = ccclass('Typescript001'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class Typescript001 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "n1", _descriptor, this);

          _initializerDefineProperty(this, "n2", _descriptor2, this);

          _defineProperty(this, "aaa", 0);

          _defineProperty(this, "sss", false);
        }

        A() {
          let framesize = view.getFrameSize();
          let node = find("Canvas");
          let cvsize = view.getCanvasSize(); // let dw = cvs

          view.setOrientation(macro.ORIENTATION_LANDSCAPE);
          if (framesize.height > framesize.width) view.setFrameSize(framesize.height, framesize.width);
          let s = view.getDesignResolutionSize();
          view.setDesignResolutionSize(s.height, s.width, 2);
          view.setCanvasSize(cvsize.height, cvsize.width);
          let a = view.getDesignResolutionSize();
          let b = view.getCanvasSize();
          console.log(a);
          console.log(b);
          console.log(framesize);
        }

        B() {
          tween(this.n1.position).to(1, this.n2.position).start();
        }

        C() {
          this.sss = true;
          console.log(this.aaa);
        }

        D() {
          this.sss = false;
          return;
        }

        E() {
          console.log("00000000");
        }

        onLoad() {// this.A();
          // this.node.on(Node.EventType.TOUCH_START, this.C, this)
          //  this.node.on(Node.EventType.TOUCH_END, this.D, this)
        }

        start() {}

        update(deltaTime) {
          if (this.sss) this.aaa++;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "n1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "n2", [_dec3], {
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
//# sourceMappingURL=typescript-001.js.map