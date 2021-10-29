System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Fade"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, view, macro, Fade, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GameManager2;

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

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      view = _cc.view;
      macro = _cc.macro;
    }, function (_Fade) {
      Fade = _Fade.Fade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f36fainF3VLAKgSa/amLzL7", "GameManager2", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameManager2", GameManager2 = (_dec = ccclass('GameManager2'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: _crd && Fade === void 0 ? (_reportPossibleCrUseOfFade({
          error: Error()
        }), Fade) : Fade
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager2, _Component);

        function GameManager2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "scenes", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "fade", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "startUI", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "gameUI", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "code", 0);

          return _this;
        }

        var _proto = GameManager2.prototype;

        _proto.SetSceneHorizental = function SetSceneHorizental() {
          var framesize = view.getFrameSize();
          var cvsize = view.getCanvasSize();
          view.setOrientation(macro.ORIENTATION_LANDSCAPE);
          if (framesize.height > framesize.width) view.setFrameSize(framesize.height, framesize.width);
          var s = view.getDesignResolutionSize();
          view.setDesignResolutionSize(s.height, s.width, 2);
          view.setCanvasSize(cvsize.height, cvsize.width);
        };

        _proto.SetSceneVertical = function SetSceneVertical() {
          var framesize = view.getFrameSize();
          var cvsize = view.getCanvasSize();
          view.setOrientation(macro.ORIENTATION_PORTRAIT);
          if (framesize.width > framesize.height) view.setFrameSize(framesize.height, framesize.width);
          var s = view.getDesignResolutionSize();
          view.setDesignResolutionSize(s.height, s.width, 2);
          view.setCanvasSize(cvsize.height, cvsize.width);
        };

        _proto.SwitchScene = function SwitchScene(event, custom) {
          this.fade.FadeIn();
          this.code = Number(custom);
          this.scheduleOnce(this.StartScene, 0.25);
        };

        _proto.StartGame = function StartGame() {
          this.startUI.active = false;
          this.gameUI.active = true;
          this.StartScene();
        };

        _proto.RestartGame = function RestartGame() {
          this.gameUI.active = false;
          this.startUI.active = true;
        };

        _proto.StartScene = function StartScene() {
          for (var i = 0; i < this.scenes.length; i++) {
            this.scenes[i].active = false;
          }

          this.scenes[this.code].active = true;
        };

        _proto.onLoad = function onLoad() {
          this.SetSceneHorizental();
        };

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return GameManager2;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scenes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
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
//# sourceMappingURL=GameManager2.js.map