System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./PlayerControl", "./AudioManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, NodePool, Prefab, instantiate, CCInteger, math, randomRangeInt, Camera, Label, Animation, PlayerControl, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _temp, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "./PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      CCInteger = _cc.CCInteger;
      math = _cc.math;
      randomRangeInt = _cc.randomRangeInt;
      Camera = _cc.Camera;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }, function (_PlayerControl) {
      PlayerControl = _PlayerControl.PlayerControl;
    }, function (_AudioManager) {
      AudioManager = _AudioManager.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d68c6B6DxlBWqkQjBBZCP6f", "GameManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: _crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
          error: Error()
        }), PlayerControl) : PlayerControl
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: CCInteger
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property([Prefab]), _dec7 = property([Prefab]), _dec8 = property({
        type: CCInteger
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
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec18 = property({
        type: Node
      }), _dec19 = property({
        type: Camera
      }), _dec20 = property({
        type: Label
      }), _dec21 = property({
        type: Node
      }), _dec22 = property({
        type: Node
      }), _dec23 = property({
        type: Node
      }), _dec24 = property({
        type: Node
      }), _dec25 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);

        function GameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "playerControl", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "coinPerfab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "coinPoolNumber", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "barPerfab", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "barPerfabs", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "itemPerfabs", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "barPoolNumber", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "player", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "coinRoot", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "barRoot", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pausePanel", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pause", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "endPanel", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "endS", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "endF", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "QAPanel", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bg", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "camera", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "score1", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "downCount", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "infoPanel", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "infoBtn", _descriptor22, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "content", _descriptor23, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "startPanel", _descriptor24, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "playerCurentZ", 0);

          _defineProperty(_assertThisInitialized(_this), "playerLastZ", 0);

          _defineProperty(_assertThisInitialized(_this), "coinCount", 0);

          _defineProperty(_assertThisInitialized(_this), "t1", 0);

          _defineProperty(_assertThisInitialized(_this), "t2", 0);

          _defineProperty(_assertThisInitialized(_this), "t3", 300);

          _defineProperty(_assertThisInitialized(_this), "_coinPool", new NodePool());

          _defineProperty(_assertThisInitialized(_this), "_barPool", new NodePool());

          _defineProperty(_assertThisInitialized(_this), "_barPools", []);

          _defineProperty(_assertThisInitialized(_this), "_itemPools", []);

          _defineProperty(_assertThisInitialized(_this), "_barPoolss", []);

          _defineProperty(_assertThisInitialized(_this), "_itemPoolss", []);

          _defineProperty(_assertThisInitialized(_this), "isPause", false);

          _defineProperty(_assertThisInitialized(_this), "isStart", false);

          _defineProperty(_assertThisInitialized(_this), "isContinue", false);

          return _this;
        }

        var _proto = GameManager.prototype;

        _proto.SetBarPool = function SetBarPool() {
          for (var k = 0; k < 3; k++) {
            var _barPools = [];

            for (var i = 0; i < 5; i++) {
              var temp = new NodePool();

              _barPools.push(temp);
            }

            var t = 0;

            for (var _i = k * 5; _i < k * 5 + 5; _i++) {
              for (var j = 0; j < 5; j++) {
                var _temp2 = instantiate(this.barPerfabs[_i]);

                _barPools[t].put(_temp2);
              }

              t++;
            }

            this._barPoolss.push(_barPools);
          }
        };

        _proto.SetItemPool = function SetItemPool() {
          for (var i = 0; i < 5; i++) {
            var temp = new NodePool();

            this._itemPools.push(temp);
          }

          for (var _i2 = 0; _i2 < this.itemPerfabs.length; _i2++) {
            if (_i2 < 1) {
              for (var j = 0; j < 20; j++) {
                var _temp3 = instantiate(this.itemPerfabs[_i2]);

                this._itemPools[0].put(_temp3);
              }
            } else {
              for (var _j = 0; _j < 5; _j++) {
                var _temp4 = instantiate(this.itemPerfabs[_i2]);

                this._itemPools[_i2].put(_temp4);
              }
            }
          }
        };

        _proto.coinPoolRestore = function coinPoolRestore(item) {
          this._itemPools[0].put(item);
        }
        /*public ItemPoolRestore(item: Node) {
            if (item.name == "HardWare")
                this._itemPools[1].put(item);
            else if (item.name == "RaspBarry")
                this._itemPools[2].put(item);
            else if (item.name == "CloudNative")
                this._itemPools[3].put(item);
            else if (item.name == "VM")
                this._itemPools[4].put(item);
            else if (item.name == "Coin")
                this._itemPools[0].put(item);
        }8*/
        ;

        _proto.HWPoolRestore = function HWPoolRestore(item) {
          this._itemPools[1].put(item);
        };

        _proto.RBPoolRestore = function RBPoolRestore(item) {
          this._itemPools[2].put(item);
        };

        _proto.CNPoolRestore = function CNPoolRestore(item) {
          this._itemPools[3].put(item);
        };

        _proto.VMPoolRestore = function VMPoolRestore(item) {
          this._itemPools[4].put(item);
        };

        _proto.Cll = function Cll() {
          this.endPanel.active = false;
        };

        _proto.Restart = function Restart() {
          for (var i = 0; i < this._itemPools.length; i++) {
            this._itemPools[i].clear();
          }

          var pos = this.player.position.clone();
          pos.z += 0;
          pos.y += 2;
          this.bg.setPosition(pos);
          this.endPanel.active = false;
          this.playerCurentZ = 0;
          this.playerLastZ = 0;
          this.coinCount = 0;
          this.isPause = false;
          this.isStart = false;
          this.isContinue = false;
          this.SetItemPool(); // this.SetBarPool();

          this.GameStart();
        };

        _proto.GS = function GS() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound("go");
          this.downCount.active = false;
          this.isStart = true;
          this.playerControl.OnStart();

          for (var i = 0; i < 10; ++i) {
            if (this.coinCount > 30) {
              this.coinCount = 0;
              var b = randomRangeInt(1, 5);

              var item = this._itemPools[b].get();

              if (item != null) {
                this.coinCount = 0;
                item.parent = this.coinRoot;
                item.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 2.2, 5 * i + 150));
              }
            } else {
              var coin = this._itemPools[0].get();

              if (coin != null) {
                this.coinCount++;
                coin.parent = this.coinRoot;
                coin.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 0.7, 5 * i + 150));
              }
            }
          }
        };

        _proto.GameStart = function GameStart() {
          this.startPanel.active = false;
          this.content.active = true;
          this.DownCount(3);
          this.scheduleOnce(this.GS, 3);
        };

        _proto.DownCount = function DownCount(time) {
          console.log("time");
          this.downCount.active = true;
          this.downCount.children[0].active = false;
          this.downCount.children[1].active = false;
          this.scheduleOnce(this.Down0, time - 3);
        };

        _proto.Down0 = function Down0() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound("321");
          var anim = this.downCount.children[1].getComponent(Animation);
          this.downCount.children[0].active = true;
          this.downCount.children[1].active = true;
          anim.play();
        };

        _proto.GetInfo = function GetInfo() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound("clickbtn");
          this.infoPanel.active = true;
        };

        _proto.CloseInfo = function CloseInfo() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound("clickbtn");
          this.infoPanel.active = false;
        };

        _proto.GameOver = function GameOver(isSucceed) {
          this.score1.string = Math.floor(this.playerControl.score * 10 + this.player.position.z * 15).toString();

          if (isSucceed) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("win");
            this.isPause = true;
            this.endPanel.active = true;
            this.endS.active = true;
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("fail");
            this.QAPanel.active = false;
            this.endPanel.active = true;
            this.endF.active = true;
          }
        };

        _proto.KeepGo = function KeepGo() {
          //this.QAPanel.active = false;
          this.downCount.active = false;
          this.playerControl.animator.resume();
          this.isPause = false;
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound("go");
          console.log("go");
        };

        _proto.pauseClick = function pauseClick() {
          // director.pause();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound("clickbtn");
          this.isPause = true;
          this.playerControl.animator.pause();
          this.pausePanel.active = true;
          this.pause.active = false;
        };

        _proto.continueClick = function continueClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound("clickbtn");
          this.DownCount(3);
          this.pausePanel.active = false;
          this.pause.active = true;
          this.scheduleOnce(this.KeepGo, 3);
        };

        _proto.start = function start() {
          /*  for (let i = 0; i < this.coinPoolNumber; ++i)
           {
               let coin = instantiate(this.coinPerfab);
               this._coinPool.put(coin);
           }
           for (let i = 0; i < this.barPoolNumber; ++i)
           {
               let bar = instantiate(this.barPerfab);
               this._barPool.put(bar);
           } */
          this.SetItemPool();
          this.endPanel.active = false; // AudioManager.playMusic("background");
          // this.SetBarPool();

          /*for (let i = 0; i < this.HWPoolNumber; ++i) {
              let hardWare = instantiate(this.hardWarePrefab);
              this._HWPool.put(hardWare);
          }
          for (let i = 0; i < this.RBPoolNumber; ++i) {
              let raspBarry = instantiate(this.raspBerryPrefab);
              this._RBPool.put(raspBarry);
          }
          for (let i = 0; i < this.CNPoolNumber; ++i) {
              let cloudNative = instantiate(this.cloudNativePrefab);
              this._CNPool.put(cloudNative);
          }
          for (let i = 0; i < this.VMPoolNumber; ++i) {
              let VM = instantiate(this.vmWarePrefab);
              this._VMPool.put(VM);
          }
          /* for (let i = 0; i < this.coinPoolNumber - 5; ++i)
          {
              let coin = this._coinPool.get();
              if (coin != null)
              {
                  coin.parent = this.coinRoot;
                  coin.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 0.7, 5 * i));
              }
          }
          for (let i = 0; i < this.barPoolNumber - 2; ++i)
          {
              let bar = this._barPool.get();
              if (bar != null)
              {
                  bar.parent = this.barRoot;
                  bar.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 0.7, 10 * i + 7.5));
              }
          }*/
        };

        _proto.update = function update(deltaTime) {
          if (!this.isPause && this.isStart) {
            //this.bg.setPosition(new math.Vec3(this.bg.position.x, this.bg.position.y, this.player.position.z + 300));
            //if (this.t1 > 0) this.t1 -= deltaTime;
            //if (this.t2 > 0) this.t2 -= deltaTime;
            var pos = this.camera.node.position.clone();
            pos.z += 300;
            pos.y -= 3;
            this.bg.setPosition(pos);

            if (this.playerControl.phase == 3) {
              if (this.playerControl.runSpeed <= 0) this.GameOver(true);
            }

            this.playerCurentZ += this.player.position.z - this.playerLastZ;
            this.playerLastZ = this.player.position.z;

            if (this.playerCurentZ > 60) {
              this.playerCurentZ -= 60;
              var childCoinLenth = this.coinRoot.children.length;
              var tempZ = this.player.position.z;

              if (this.playerControl.phase != 3 && this.player.position.z < 5050) {
                // if (this.playerControl.phase != 3 && this.player.position.z < 7000) {
                var killCoinNumber = 0;

                for (var i = childCoinLenth - 1; i >= 0; --i) {
                  //console.log("1." + this.coinRoot.children[i].position.z);
                  //console.log("2." + tempZ);
                  if (this.coinRoot.children[i].position.z < tempZ - 5) {
                    if (this.coinRoot.children[i].name == "HardWare") this._itemPools[1].put(this.coinRoot.children[i]);else if (this.coinRoot.children[i].name == "RaspBarry") this._itemPools[2].put(this.coinRoot.children[i]);else if (this.coinRoot.children[i].name == "CloudNative") this._itemPools[3].put(this.coinRoot.children[i]);else if (this.coinRoot.children[i].name == "VM") this._itemPools[4].put(this.coinRoot.children[i]);else if (this.coinRoot.children[i].name == "Coin") this._itemPools[0].put(this.coinRoot.children[i]);
                    killCoinNumber++;
                  }
                } //console.log(killCoinNumber + "?");


                killCoinNumber = killCoinNumber < 6 ? 6 : killCoinNumber;

                for (var _i3 = 0; _i3 < 6; ++_i3) {
                  if (this.coinCount > 30) {
                    var b = randomRangeInt(1, 5);

                    var item = this._itemPools[b].get();

                    if (item != null) {
                      this.coinCount = 0;
                      item.parent = this.coinRoot;
                      item.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 2.2, 200 + tempZ + 5 * _i3));
                    }
                  } else {
                    var coin = this._itemPools[0].get();

                    if (coin != null) {
                      this.coinCount++;
                      coin.parent = this.coinRoot;
                      coin.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 0.7, 200 + tempZ + 5 * _i3));
                      console.log("setCoin");
                    }
                  }
                }
                /*if (this.t1 <= 0 && this.t2 <= 0) {
                    this.t2 = 4;
                    let childBarLenth = this.barRoot.children.length;
                    let killBarNumber = 0;
                    for (let i = childBarLenth - 1; i >= 0; --i) {
                        if (this.barRoot.children[i].position.z < tempZ - 4) {
                            let str = this.barRoot.children[i].name.split("0");
                            let a1 = Number(str[0]);
                            let a2 = Number(str[1]);
                            console.log(this.barRoot.children[i].name);
                            console.log(a1 + "|||" + a2);
                            this._barPoolss[a1 - 1][a2].put(this.barRoot.children[i]);
                            killBarNumber++;
                        }
                    }
                    for (let i = 0; i < 1; ++i) {
                        let a = randomRangeInt(0, 5);
                        let bar = this._barPoolss[this.playerControl.phase][a].get();
                        if (bar != null) {
                            bar.parent = this.barRoot;
                            if (bar.name == "202" || bar.name == "201" || bar.name == "102" || bar.name == "103" || bar.name == "104"
                            ) {
                                bar.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 2, 60 + tempZ + 10 * i + 2.5));
                            }
                            else if (bar.name == "100" || bar.name == "101" || bar.name == "301" || bar.name == "204") {
                                bar.setPosition(new math.Vec3(0, 1.5, 60 + tempZ + 10 * i + 2.5));
                            }
                            else if (bar.name == "203") {
                                bar.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 0.2, 60 + tempZ + 10 * i + 2.5));
                            }
                            else if (bar.name == "200") {
                                bar.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 1, 60 + tempZ + 10 * i + 2.5));
                            }
                            else if (bar.name == "300") {
                                bar.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 1.3, 60 + tempZ + 10 * i + 2.5));
                            }
                            else {
                                bar.setPosition(new math.Vec3(randomRangeInt(-1, 2) * 1.5, 0.7, 60 + tempZ + 10 * i + 2.5));
                            }
                        }
                    }
                }*/

              }
            }
          }
        };

        return GameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerControl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinPerfab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coinPoolNumber", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "barPerfab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "barPerfabs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemPerfabs", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "barPoolNumber", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "coinRoot", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "barRoot", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pausePanel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "pause", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "endPanel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "endS", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "endF", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "QAPanel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "score1", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "downCount", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "infoPanel", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "infoBtn", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "startPanel", [_dec25], {
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
//# sourceMappingURL=GameManager.js.map