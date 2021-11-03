System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./GameManager", "./ItemS", "./Q&A", "./AudioManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CCFloat, Collider, Enum, RigidBody, BoxCollider, Vec3, Label, math, _decorator, Component, Node, SkeletalAnimation, systemEvent, SystemEventType, Animation, GameManager, ItemS, QA, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, _crd, ccclass, property, PlayerControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemS(extras) {
    _reporterNs.report("ItemS", "./ItemS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQA(extras) {
    _reporterNs.report("QA", "./Q&A", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      CCFloat = _cc.CCFloat;
      Collider = _cc.Collider;
      Enum = _cc.Enum;
      RigidBody = _cc.RigidBody;
      BoxCollider = _cc.BoxCollider;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
      math = _cc.math;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      SkeletalAnimation = _cc.SkeletalAnimation;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      Animation = _cc.Animation;
    }, function (_GameManager) {
      GameManager = _GameManager.GameManager;
    }, function (_ItemS) {
      ItemS = _ItemS.ItemS;
    }, function (_QA) {
      QA = _QA.QA;
    }, function (_AudioManager) {
      AudioManager = _AudioManager.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90f379SeU9BUKf9q00Vd5cE", "PlayerControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerControl", PlayerControl = (_dec = ccclass('PlayerControl'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property({
        type: CCFloat
      }), _dec5 = property({
        type: SkeletalAnimation
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: _crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
          error: Error()
        }), GameManager) : GameManager
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: _crd && QA === void 0 ? (_reportPossibleCrUseOfQA({
          error: Error()
        }), QA) : QA
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class PlayerControl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "fadeTime", _descriptor, this);

          _initializerDefineProperty(this, "jumpTime", _descriptor2, this);

          _initializerDefineProperty(this, "runSpeed", _descriptor3, this);

          _initializerDefineProperty(this, "animator", _descriptor4, this);

          _initializerDefineProperty(this, "men", _descriptor5, this);

          _initializerDefineProperty(this, "gameManager", _descriptor6, this);

          _initializerDefineProperty(this, "scoreText", _descriptor7, this);

          _initializerDefineProperty(this, "endPanel", _descriptor8, this);

          _initializerDefineProperty(this, "effects", _descriptor9, this);

          _initializerDefineProperty(this, "qa", _descriptor10, this);

          _initializerDefineProperty(this, "QAPanel", _descriptor11, this);

          _initializerDefineProperty(this, "coins", _descriptor12, this);

          _initializerDefineProperty(this, "bg1", _descriptor13, this);

          _initializerDefineProperty(this, "bg2", _descriptor14, this);

          _initializerDefineProperty(this, "bg3", _descriptor15, this);

          _defineProperty(this, "rigidBody", null);

          _defineProperty(this, "isHitBar", false);

          _defineProperty(this, "isInvisibleH", false);

          _defineProperty(this, "isInvisibleR", false);

          _defineProperty(this, "isAccelerate", false);

          _defineProperty(this, "isAbsorb", false);

          _defineProperty(this, "t1", 0);

          _defineProperty(this, "t2", 0);

          _defineProperty(this, "t3", 0);

          _defineProperty(this, "t4", 0);

          _defineProperty(this, "phase", 0);

          _defineProperty(this, "speeds", [20, 25, 30]);

          _defineProperty(this, "touchX", 0);

          _defineProperty(this, "touchY", 0);

          _defineProperty(this, "curentX", 0);

          _defineProperty(this, "targetX", 0);

          _defineProperty(this, "jump", false);

          _defineProperty(this, "slip", false);

          _defineProperty(this, "turn", false);

          _defineProperty(this, "curentZ", 0);

          _defineProperty(this, "score", 0);

          _defineProperty(this, "playerStatus", 0);

          _defineProperty(this, "status", Enum({
            Normal: 0,
            Hardware: 1,
            Raspberry: 2,
            Cloud: 3,
            Virtual: 4
          }));
        }

        onLoad() {
          this.playerStatus = this.status.Normal;
          systemEvent.on(SystemEventType.TOUCH_START, this.onTouchStartEvent, this);
          systemEvent.on(SystemEventType.TOUCH_END, this.onTouchEndEvent, this);
        }

        Restart() {
          this.scoreText.string = "0";
          this.bg1.active = true;
          this.bg2.active = false;
          this.bg3.active = false;
          this.node.position = new Vec3(0, 0, 0);
          this.animator.stop();
          this.men[1].active = false;
          this.men[0].active = true;
          this.men[2].active = false;
          this.men[3].active = false;
          this.men[4].active = false;
          let anim = this.men[0].getComponent(SkeletalAnimation);
          anim === null || anim === void 0 ? void 0 : anim.stop();
          this.isInvisibleH = false;
          this.isInvisibleR = false;
          this.isAccelerate = false;
          this.isAbsorb = false;
          this.phase = 0;
          this.t1 = 0;
          this.t2 = 0;
          this.t3 = 0;
          this.t4 = 0;
          this.touchX = 0;
          this.touchY = 0;
          this.curentX = 0;
          this.targetX = 0;
          this.jump = false;
          this.slip = false;
          this.turn = false;
          this.curentZ = 0;
          this.score = 0;
        }

        OnStart() {
          let anim = this.men[0].getComponent(SkeletalAnimation);
          anim === null || anim === void 0 ? void 0 : anim.play(); // this.animator.play("run");

          this.rigidBody = this.node.getComponent(RigidBody);
          let collider = this.node.getComponent(Collider);
          collider.on("onTriggerEnter", this.onTriggerEnter, this); // [3]
        }

        onDestroy() {
          systemEvent.off(SystemEventType.TOUCH_START, this.onTouchStartEvent, this);
          systemEvent.off(SystemEventType.TOUCH_END, this.onTouchEndEvent, this);
        }

        onTouchStartEvent(touch, event) {
          if (this.jump || this.turn) return;
          this.touchX = touch.getLocation().x;
          this.touchY = touch.getLocation().y;
        }

        onTouchEndEvent(touch, event) {
          if (!this.gameManager.isPause && this.gameManager.isStart) {
            if (this.jump || this.turn) return;
            let endX = touch.getLocation().x;
            let endY = touch.getLocation().y;
            let difX = this.touchX - endX;
            let difY = this.touchY - endY; //上下起跳

            console.log(difY);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("active");

            if (Math.abs(difY) > Math.abs(difX) && difY < -30 && !this.jump) {
              difX = 0;
              this.jump = true;
              this.men[1].active = true;
              this.men[0].active = false;
              this.men[2].active = false;
              this.men[3].active = false;
              this.men[4].active = false;
              let anim = this.men[1].getComponent(SkeletalAnimation);
              anim === null || anim === void 0 ? void 0 : anim.play();
              setTimeout(() => {
                this.jump = false;
                this.men[0].active = true;
                this.men[1].active = false;
                let anim = this.men[0].getComponent(SkeletalAnimation);
                anim === null || anim === void 0 ? void 0 : anim.play();
              }, this.jumpTime * 1900);
              this.rigidBody.applyForce(new math.Vec3(0, 23000, 0));
              console.log("jump");
              return;
            } else if (Math.abs(difY) > Math.abs(difX) && difY > 30) {
              difX = 0;
              this.slip = true;
              this.men[2].active = true;
              this.men[0].active = false;
              let anim = this.men[2].getComponent(SkeletalAnimation);
              anim === null || anim === void 0 ? void 0 : anim.play();
              this.node.getComponent(BoxCollider).size = new Vec3(0.5, 0.5, 0.5);
              this.node.getComponent(BoxCollider).center = new Vec3(0, 0.3, 0.1);
              setTimeout(() => {
                this.slip = false;
                this.node.getComponent(BoxCollider).size = new Vec3(0.5, 1.5, 0.5);
                this.node.getComponent(BoxCollider).center = new Vec3(0, 0.8, 0.1);
                this.men[0].active = true;
                this.men[2].active = false;
                let anim = this.men[0].getComponent(SkeletalAnimation);
                anim === null || anim === void 0 ? void 0 : anim.play();
              }, this.jumpTime * 2300);
              console.log("slip");
              return;
            } //左右转向


            if (difX < -30) {
              this.targetX = Math.max(this.curentX - 1.5, -1.5);
              this.men[3].active = true;
              this.men[0].active = false;
              let anim = this.men[3].getComponent(SkeletalAnimation);
              anim === null || anim === void 0 ? void 0 : anim.play();
              setTimeout(() => {
                this.men[0].active = true;
                this.men[3].active = false;
                let anim = this.men[3].getComponent(SkeletalAnimation);
                anim === null || anim === void 0 ? void 0 : anim.play();
              }, this.fadeTime * 800);
            } else if (difX > 30) {
              this.targetX = Math.min(this.curentX + 1.5, 1.5);
              this.men[4].active = true;
              this.men[0].active = false;
              let anim = this.men[4].getComponent(SkeletalAnimation);
              anim === null || anim === void 0 ? void 0 : anim.play();
              setTimeout(() => {
                this.men[0].active = true;
                this.men[4].active = false;
                let anim = this.men[4].getComponent(SkeletalAnimation);
                anim === null || anim === void 0 ? void 0 : anim.play();
              }, this.fadeTime * 800);
            }

            if (this.targetX != this.curentX) {
              this.turn = true;
              setTimeout(() => {
                this.curentX = this.targetX;
                this.turn = false;
              }, this.fadeTime * 1200);
            }
          }
        }

        onTriggerEnter(event) {
          var _instance$getComponen, _instance$getComponen2, _instance$getComponen3, _instance$getComponen4, _instance$getComponen5, _instance$getComponen6;

          console.log(event.type, event);
          let instance = event.otherCollider.node;
          console.log(instance.name);

          if ((_instance$getComponen = instance.getComponent(_crd && ItemS === void 0 ? (_reportPossibleCrUseOfItemS({
            error: Error()
          }), ItemS) : ItemS)) === null || _instance$getComponen === void 0 ? void 0 : _instance$getComponen.isCoin) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("gold");
            this.gameManager.coinPoolRestore(instance);
            this.score++;
            this.scoreText.string = this.score.toString();
            return;
          } else if (((_instance$getComponen2 = instance.getComponent(_crd && ItemS === void 0 ? (_reportPossibleCrUseOfItemS({
            error: Error()
          }), ItemS) : ItemS)) === null || _instance$getComponen2 === void 0 ? void 0 : _instance$getComponen2.isBar) && this.isInvisibleH == false && !this.gameManager.isPause) {
            if (this.isInvisibleR == false) {
              this.qa.SetQA();
              let anim = this.QAPanel.children[1].getComponent(Animation);
              this.QAPanel.active = true;
              anim.play();
              this.isAccelerate = false;
              this.runSpeed = this.speeds[this.phase];
              this.isAbsorb = false;
              this.effects[2].active = false; //director.pause();

              this.gameManager.isPause = true; //this.animator.crossFade("run");

              this.animator.pause();
            } else {
              this.isInvisibleR = false;
              this.effects[1].active = false;
            }
          } else if ((_instance$getComponen3 = instance.getComponent(_crd && ItemS === void 0 ? (_reportPossibleCrUseOfItemS({
            error: Error()
          }), ItemS) : ItemS)) === null || _instance$getComponen3 === void 0 ? void 0 : _instance$getComponen3.isHW) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("magic");
            this.isInvisibleH = true;
            this.t1 = 10;
            this.effects[0].active = true;
            this.gameManager.HWPoolRestore(instance);
          } else if ((_instance$getComponen4 = instance.getComponent(_crd && ItemS === void 0 ? (_reportPossibleCrUseOfItemS({
            error: Error()
          }), ItemS) : ItemS)) === null || _instance$getComponen4 === void 0 ? void 0 : _instance$getComponen4.isRB) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("magic");
            this.isInvisibleR = true;
            this.t2 = 10;
            this.effects[1].active = true;
            this.gameManager.RBPoolRestore(instance);
          } else if ((_instance$getComponen5 = instance.getComponent(_crd && ItemS === void 0 ? (_reportPossibleCrUseOfItemS({
            error: Error()
          }), ItemS) : ItemS)) === null || _instance$getComponen5 === void 0 ? void 0 : _instance$getComponen5.isCN) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("magic");
            this.isAccelerate = true;
            this.t3 = 10;
            this.gameManager.CNPoolRestore(instance);
          } else if ((_instance$getComponen6 = instance.getComponent(_crd && ItemS === void 0 ? (_reportPossibleCrUseOfItemS({
            error: Error()
          }), ItemS) : ItemS)) === null || _instance$getComponen6 === void 0 ? void 0 : _instance$getComponen6.isVM) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("magic");
            this.isAbsorb = true;
            this.t4 = 10;
            this.effects[2].active = true;
            this.gameManager.VMPoolRestore(instance);
          }
        }

        Setting() {
          this.isInvisibleH;
        }

        setEndPanelHide() {
          this.endPanel.active = false;
        }

        update(deltaTime) {
          console.log(this.node.position.z);

          if (this.phase != 3) {
            if (this.node.position.z < 6800) this.runSpeed = 20 + this.node.position.z * 5 / 3400;else this.runSpeed = 30;
          }

          if (this.node.position.z > 2400 && this.phase == 0) {
            this.phase = 1;
          }

          if (this.node.position.z > 2695 && this.phase == 1) {
            this.bg1.active = false;
            this.bg2.active = true;
          }

          if (this.node.position.z > 3800 && this.phase == 1) {
            this.phase = 2;
          }

          if (this.node.position.z > 4150 && this.phase == 2) {
            this.bg2.active = false;
            this.bg3.active = true;
          }

          if (this.node.position.z > 5050 && this.phase == 2) {
            this.phase = 3;
            console.log(this.gameManager.barRoot.children);

            for (let i = 0; i < this.gameManager.barRoot.children.length; i++) this.gameManager.barRoot.children[i].active = false;
          }

          if (this.phase == 3) {
            this.runSpeed -= this.speeds[2] / 5 * deltaTime;
          } // if (this.node.position.z > 3400 && this.phase == 0) {
          //     this.phase = 1;
          // }
          // if (this.node.position.z > 3695 && this.phase == 1) {
          //     this.bg1.active = false;
          //     this.bg2.active = true;
          // }
          // if (this.node.position.z > 4500 && this.phase == 1) {
          //     this.phase = 2;
          // }
          // if (this.node.position.z > 4900 && this.phase == 2) {
          //     this.bg2.active = false;
          //     this.bg3.active = true;
          // }
          // if (this.node.position.z > 7000 && this.phase == 2) {
          //     this.phase = 3;
          //     for (let i = 0; i < this.gameManager.barRoot.children.length; i++)
          //         this.gameManager.barRoot.children[i].active = false;
          // }
          // if (this.phase == 3) {
          //     this.runSpeed -= this.speeds[2]/5 * deltaTime;
          // }


          if (this.runSpeed <= 0) this.animator.stop();

          if (!this.gameManager.isPause && this.gameManager.isStart) {
            if (this.isInvisibleH) {
              this.t1 -= deltaTime;

              if (this.t1 <= 0) {
                this.isInvisibleH = false;
                this.effects[0].active = false;
              }
            }

            if (this.isInvisibleR) {
              this.t2 -= deltaTime;

              if (this.t2 <= 0) {
                this.isInvisibleR = false;
                this.effects[1].active = false;
              }
            }

            if (this.isAccelerate) {
              this.runSpeed = this.speeds[this.phase] + 10;
              this.t3 -= deltaTime;

              if (this.t3 <= 0) {
                this.isAccelerate = false;
                this.runSpeed = this.speeds[this.phase];
              }
            }

            if (this.isAbsorb) {
              this.t4 -= deltaTime;

              if (this.t4 <= 0) {
                this.isAbsorb = false;
                this.effects[2].active = false;
              }

              for (let i = 0; i < this.coins.children.length; i++) {
                if (this.coins.children[i].position.z < this.node.position.z + 10) {
                  var _this$coins$children$;

                  if ((_this$coins$children$ = this.coins.children[i].getComponent(_crd && ItemS === void 0 ? (_reportPossibleCrUseOfItemS({
                    error: Error()
                  }), ItemS) : ItemS)) === null || _this$coins$children$ === void 0 ? void 0 : _this$coins$children$.isCoin) {
                    // this.gameManager.coinPoolRestore(this.coins.children[i]);
                    //  this.score++;
                    //   this.scoreText.string = this.score.toString();
                    //tween(this.coins.children[i].position).to(1, this.node.position).start();
                    let pos = this.coins.children[i].position.clone();
                    pos.x = math.lerp(pos.x, this.node.position.x, 1.8 / this.fadeTime * deltaTime * 4);
                    pos.z = math.lerp(pos.z, this.node.position.z + this.speeds[this.phase] / 15, 1.8 / this.fadeTime * deltaTime * 4);
                    pos.y = math.lerp(pos.y, this.node.position.y + 0.8, 1.8 / this.fadeTime * deltaTime * 4);
                    this.coins.children[i].setPosition(pos);
                  }
                }
              }
            }

            this.curentZ += this.runSpeed * deltaTime;
            let pos = this.node.position.clone();
            pos.z = this.curentZ;

            if (this.turn) {
              pos.x = math.lerp(pos.x, this.targetX, 1.8 / this.fadeTime * deltaTime);
            }

            this.node.setPosition(pos);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fadeTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jumpTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.3;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "runSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "animator", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "men", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scoreText", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "endPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "effects", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "qa", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "QAPanel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "coins", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bg1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bg2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "bg3", [_dec16], {
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
//# sourceMappingURL=PlayerControl.js.map