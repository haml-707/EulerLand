System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../global/GlobalFunction"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, CCBoolean, Label, randomRangeInt, GlobalFunction, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, QA2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalFunction(extras) {
    _reporterNs.report("GlobalFunction", "../global/GlobalFunction", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCBoolean = _cc.CCBoolean;
      Label = _cc.Label;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_globalGlobalFunction) {
      GlobalFunction = _globalGlobalFunction.GlobalFunction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d197Mih4tLcYMmZUJPecWT", "Q&A2", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("QA2", QA2 = (_dec = ccclass('QA2'), _dec2 = property({
        type: CCBoolean
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: _crd && GlobalFunction === void 0 ? (_reportPossibleCrUseOfGlobalFunction({
          error: Error()
        }), GlobalFunction) : GlobalFunction
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class QA2 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isTrue", _descriptor, this);

          _initializerDefineProperty(this, "questions", _descriptor2, this);

          _initializerDefineProperty(this, "question", _descriptor3, this);

          _initializerDefineProperty(this, "globalFunc", _descriptor4, this);

          _initializerDefineProperty(this, "tipPanel", _descriptor5, this);

          _initializerDefineProperty(this, "falsePanel", _descriptor6, this);

          _initializerDefineProperty(this, "QAPanel", _descriptor7, this);

          _defineProperty(this, "sa", 0);

          _defineProperty(this, "tipCode", 0);
        }

        CloseQA() {
          this.QAPanel.active = false;
          this.ResetStatus();
        }

        SetQA() {
          this.QAPanel.active = true;
          let a = randomRangeInt(0, 8);

          if (this.sa == a) {
            if (this.sa != 0) {
              a = randomRangeInt(0, this.sa);
            } else {
              a = randomRangeInt(1, 8);
            }
          } else {
            this.sa = a;
          }

          this.question.string = this.globalFunc.questionBank[a].description;
          this.questions.children[0].children[2].getComponent(Label).string = this.globalFunc.questionBank[a].aOption;
          this.questions.children[1].children[2].getComponent(Label).string = this.globalFunc.questionBank[a].bOption;
          this.questions.children[2].children[2].getComponent(Label).string = this.globalFunc.questionBank[a].cOption;
          this.questions.children[3].children[2].getComponent(Label).string = this.globalFunc.questionBank[a].dOption;

          switch (this.globalFunc.questionBank[a].right) {
            case "A":
              this.questions.children[0].getComponent(QA2).isTrue = true;
              break;

            case "B":
              this.questions.children[1].getComponent(QA2).isTrue = true;
              break;

            case "C":
              this.questions.children[2].getComponent(QA2).isTrue = true;
              break;

            case "D":
              this.questions.children[3].getComponent(QA2).isTrue = true;
              break;

            default:
              console.log("erro");
              break;
          }
        }

        Select(event) {
          var _btn$getComponent;

          let btn = event.target;

          if ((_btn$getComponent = btn.getComponent(QA2)) === null || _btn$getComponent === void 0 ? void 0 : _btn$getComponent.isTrue) {
            btn.children[0].active = true;
            btn.children[1].active = false;
            this.scheduleOnce(this.Succeed, 2);
          } else {
            btn.children[0].active = false;
            btn.children[1].active = true;
            this.scheduleOnce(this.Failed, 2);
          }
        }

        ResetStatus() {
          for (let i = 0; i < this.questions.children.length; i++) {
            this.questions.children[i].children[0].active = false;
            this.questions.children[i].children[1].active = false;
            this.questions.children[i].getComponent(QA2).isTrue = false;
          }
        }

        Failed() {
          this.CloseQA();
          this.ResetStatus();
          this.falsePanel.active = true;
        }

        Succeed() {
          this.CloseQA();
          this.ResetStatus();
          this.tipPanel[this.tipCode].active = true;
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isTrue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "questions", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "question", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "globalFunc", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tipPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "falsePanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "QAPanel", [_dec8], {
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
//# sourceMappingURL=Q&A2.js.map