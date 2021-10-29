System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Fade"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, view, macro, Fade, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GameManager2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

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
      }), _dec(_class = (_class2 = (_temp = class GameManager2 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scenes", _descriptor, this);

          _initializerDefineProperty(this, "fade", _descriptor2, this);

          _initializerDefineProperty(this, "startUI", _descriptor3, this);

          _initializerDefineProperty(this, "gameUI", _descriptor4, this);

          _defineProperty(this, "code", 0);
        }

        SetSceneHorizental() {
          let framesize = view.getFrameSize();
          let cvsize = view.getCanvasSize();
          view.setOrientation(macro.ORIENTATION_LANDSCAPE);
          if (framesize.height > framesize.width) view.setFrameSize(framesize.height, framesize.width);
          let s = view.getDesignResolutionSize();
          view.setDesignResolutionSize(s.height, s.width, 2);
          view.setCanvasSize(cvsize.height, cvsize.width);
        }

        SetSceneVertical() {
          let framesize = view.getFrameSize();
          let cvsize = view.getCanvasSize();
          view.setOrientation(macro.ORIENTATION_PORTRAIT);
          if (framesize.width > framesize.height) view.setFrameSize(framesize.height, framesize.width);
          let s = view.getDesignResolutionSize();
          view.setDesignResolutionSize(s.height, s.width, 2);
          view.setCanvasSize(cvsize.height, cvsize.width);
        }

        SwitchScene(event, custom) {
          this.fade.FadeIn();
          this.code = Number(custom);
          this.scheduleOnce(this.StartScene, 0.25);
        }

        StartGame() {
          this.startUI.active = false;
          this.gameUI.active = true;
          this.StartScene();
        }

        RestartGame() {
          this.gameUI.active = false;
          this.startUI.active = true;
        }

        StartScene() {
          for (let i = 0; i < this.scenes.length; i++) this.scenes[i].active = false;

          this.scenes[this.code].active = true;
        }

        onLoad() {
          this.SetSceneHorizental();
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scenes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fade", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameUI", [_dec5], {
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
//# sourceMappingURL=GameManager2.js.map