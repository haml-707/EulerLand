System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Box2;

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
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dde55gqamREs7TIsLRhB7mU", "Box2", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Box2", Box2 = (_dec = ccclass('Box2'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Box2, _Component);

        function Box2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "tip", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "item", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "left1", false);

          _defineProperty(_assertThisInitialized(_this), "right1", false);

          _defineProperty(_assertThisInitialized(_this), "leftTimes", 0);

          _defineProperty(_assertThisInitialized(_this), "rightTimes", 0);

          _defineProperty(_assertThisInitialized(_this), "tempLeft", 0);

          return _this;
        }

        var _proto = Box2.prototype;

        _proto.LeftBtnClick = function LeftBtnClick() {
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
        };

        _proto.RightBtnClick = function RightBtnClick() {
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
        };

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Box2;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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