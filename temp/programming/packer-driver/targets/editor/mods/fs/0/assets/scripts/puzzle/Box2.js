System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Box2;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dde55gqamREs7TIsLRhB7mU", "Box2", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Box2", Box2 = (_dec = ccclass('Box2'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class Box2 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tip", _descriptor, this);

          _initializerDefineProperty(this, "item", _descriptor2, this);

          _defineProperty(this, "left1", false);

          _defineProperty(this, "right1", false);

          _defineProperty(this, "leftTimes", 0);

          _defineProperty(this, "rightTimes", 0);

          _defineProperty(this, "tempLeft", 0);
        }

        LeftBtnClick() {
          if (!this.right1) {
            this.leftTimes++;
            if (this.leftTimes == 8) this.left1 = true;else this.left1 = false;

            if (this.leftTimes == this.tempLeft + 4 && this.tempLeft != 0) {
              this.tip.active = true;
              this.leftTimes = 0;
              this.rightTimes = 0;
              this.left1 = false;
              this.right1 = false;
              this.tempLeft = 0;
            }
          } else {
            this.leftTimes++;

            if (this.leftTimes == this.tempLeft + 4) {
              if (this.left1 && this.right1) this.item.active = true;else {
                this.tip.active = true;
                this.leftTimes = 0;
                this.rightTimes = 0;
                this.left1 = false;
                this.right1 = false;
                this.tempLeft = 0;
              }
            }
          }

          console.log(this.leftTimes + "//left");
        }

        RightBtnClick() {
          if (this.left1) {
            this.rightTimes++;

            if (this.rightTimes == 2) {
              this.right1 = true;
              this.tempLeft = this.leftTimes;
            } else this.right1 = false;
          } else {
            this.right1 = true;
            this.tempLeft = this.leftTimes;
          }

          console.log(this.rightTimes + "//right");
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec3], {
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
//# sourceMappingURL=Box2.js.map