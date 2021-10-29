System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Fade", "./BagManager", "./ItemStatus"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Fade, BagManager, ItemStatus, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, UIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFade(extras) {
    _reporterNs.report("Fade", "./Fade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagManager(extras) {
    _reporterNs.report("BagManager", "./BagManager", _context.meta, extras);
  }

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
      Label = _cc.Label;
    }, function (_Fade) {
      Fade = _Fade.Fade;
    }, function (_BagManager) {
      BagManager = _BagManager.BagManager;
    }, function (_ItemStatus) {
      ItemStatus = _ItemStatus.ItemStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c1c19QU0JHvKuia203yKlH", "UIManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec2 = property({
        type: _crd && BagManager === void 0 ? (_reportPossibleCrUseOfBagManager({
          error: Error()
        }), BagManager) : BagManager
      }), _dec3 = property({
        type: _crd && Fade === void 0 ? (_reportPossibleCrUseOfFade({
          error: Error()
        }), Fade) : Fade
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
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIManager, _Component);

        function UIManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "bagManager", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "fade", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "startUI", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gameUI", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "infoUI", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "select", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scenes", _descriptor7, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = UIManager.prototype;

        _proto.StartGame = function StartGame() {
          this.gameUI.active = true;
        };

        _proto.RestartGame = function RestartGame() {
          this.startUI.active = true;
        };

        _proto.Close = function Close(event) {
          var btn = event.target;
          btn.parent.active = false;
        };

        _proto.ShowInfo = function ShowInfo(event) {
          var btn = event.target;
          var itemStatus = btn.getComponent(_crd && ItemStatus === void 0 ? (_reportPossibleCrUseOfItemStatus({
            error: Error()
          }), ItemStatus) : ItemStatus);

          if (!(itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.isInBag) && !(itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.synGet) && (itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.isItem)) {
            this.infoUI.active = true;
            var name = this.infoUI.children[3].getComponent(Label);
            name.string = btn.name;
          } else {
            if (itemStatus.isLong) {
              this.infoUI.active = true;

              var _name = this.infoUI.children[3].getComponent(Label);

              _name.string = btn.name;
            }
          }
        };

        _proto.CheckScene = function CheckScene(event, custom) {
          this.scenes[Number(custom)].active = true;
        };

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return UIManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bagManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fade", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "infoUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scenes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
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
//# sourceMappingURL=UIManager.js.map