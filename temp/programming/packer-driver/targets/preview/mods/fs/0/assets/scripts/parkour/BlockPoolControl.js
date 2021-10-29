System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./PlayerControl"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, NodePool, instantiate, TextureCube, director, PlayerControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, BuildBlockPool;

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

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
      TextureCube = _cc.TextureCube;
      director = _cc.director;
    }, function (_PlayerControl) {
      PlayerControl = _PlayerControl.PlayerControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d8ebzJ8PdDeJwVqKDVtcVL", "BlockPoolControl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BuildBlockPool", BuildBlockPool = (_dec = ccclass('BuildBlockPool'), _dec2 = property({
        type: TextureCube
      }), _dec3 = property({
        type: _crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
          error: Error()
        }), PlayerControl) : PlayerControl
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BuildBlockPool, _Component);

        function BuildBlockPool() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "skyBoxes", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "playerControl", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "perfabs", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "barPerfabs", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "player", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "playerCurentZ", 0);

          _defineProperty(_assertThisInitialized(_this), "playerLastZ", 0);

          _defineProperty(_assertThisInitialized(_this), "blockPool", new NodePool());

          _defineProperty(_assertThisInitialized(_this), "index", 0);

          _defineProperty(_assertThisInitialized(_this), "nextBlockZ", 596);

          _defineProperty(_assertThisInitialized(_this), "_barPools", []);

          return _this;
        }

        var _proto = BuildBlockPool.prototype;

        _proto.SetBarPool = function SetBarPool() {
          for (var k = 0; k < 4; k++) {
            var _barPool = new NodePool();

            for (var i = 0; i < 5; i++) {
              var node = instantiate(this.barPerfabs[k]);

              _barPool.put(node);
            }

            this._barPools.push(_barPool);
          }
        };

        _proto.start = function start() {// [3]
        };

        _proto.Reset = function Reset() {
          this.block0 = null;
          this.block1 = null;
          this.block2 = null;
          this.block3 = null;
          this.block4 = null;

          for (var i = 0; i < this.node.children.length; i++) {
            this.node.children[i].destroy();
          }

          for (var k = 0; k < this._barPools.length; k++) {
            this._barPools[k].clear();

            for (var _i = 0; _i < 5; _i++) {
              var node = instantiate(this.barPerfabs[k]);

              this._barPools[k].put(node);
            }
          }

          this.playerCurentZ = this.player.position.z;
          this.index = 0;
          this.playerLastZ = 0;
          this.nextBlockZ = 596;
          var lenth = this.perfabs.length;
          /*for (let i = 0; i < lenth; ++i)
          {
              let block = instantiate(this.perfabs[i]);
              this.blockPool.put(block);
          }
          if(this.blockPool.size()>0)
              this.block1 = this.blockPool.get();
          else
              this.block1 = instantiate(this.perfabs[0]);
          if (this.blockPool.size() > 0)
              this.block2 = this.blockPool.get();
          else
              this.block2 = instantiate(this.perfabs[0]);
          if (this.block1 != null)
          {
              this.block1.parent = this.node;
              let position = this.block1.position.clone();
              position.z = 28;
              this.block1.setPosition(position);
          }
          if (this.block2 != null)
          {
              this.block2.parent = this.node;
              let position = this.block2.position.clone();
              position.z = 88;
              this.block2.setPosition(position);
          }*/

          this.block0 = instantiate(this.barPerfabs[4]);
          this.block4 = instantiate(this.barPerfabs[3]);
          if (this._barPools[0].size() > 0) this.block1 = this._barPools[0].get();else this.block1 = instantiate(this.barPerfabs[0]);
          if (this._barPools[0].size() > 0) this.block2 = this._barPools[0].get();else this.block2 = instantiate(this.barPerfabs[0]);
          if (this._barPools[0].size() > 0) this.block3 = this._barPools[0].get();else this.block3 = instantiate(this.barPerfabs[0]);

          if (this.block0 != null) {
            this.block0.parent = this.node;
            var position = this.block0.position.clone();
            position.z = -28;
            this.block0.setPosition(position);
          }

          if (this.block1 != null) {
            this.block1.parent = this.node;

            var _position = this.block1.position.clone();

            _position.z = 128;
            this.block1.setPosition(_position);
          }

          if (this.block2 != null) {
            this.block2.parent = this.node;

            var _position2 = this.block2.position.clone();

            _position2.z = 284;
            this.block2.setPosition(_position2);
          }

          if (this.block3 != null) {
            this.block3.parent = this.node;

            var _position3 = this.block3.position.clone();

            _position3.z = 440;
            this.block3.setPosition(_position3);
          }

          director.getScene().globals.skybox.envmap = this.skyBoxes[0];
        };

        _proto.onLoad = function onLoad() {
          this.SetBarPool();
          this.playerCurentZ = this.player.position.z;
          var lenth = this.perfabs.length;
          /*for (let i = 0; i < lenth; ++i)
          {
              let block = instantiate(this.perfabs[i]);
              this.blockPool.put(block);
          }
          if(this.blockPool.size()>0)
              this.block1 = this.blockPool.get();
          else
              this.block1 = instantiate(this.perfabs[0]);
          if (this.blockPool.size() > 0)
              this.block2 = this.blockPool.get();
          else
              this.block2 = instantiate(this.perfabs[0]);
          if (this.block1 != null)
          {
              this.block1.parent = this.node;
              let position = this.block1.position.clone();
              position.z = 28;
              this.block1.setPosition(position);
          }
          if (this.block2 != null)
          {
              this.block2.parent = this.node;
              let position = this.block2.position.clone();
              position.z = 88;
              this.block2.setPosition(position);
          }*/

          this.block0 = instantiate(this.barPerfabs[4]);
          this.block4 = instantiate(this.barPerfabs[3]);
          if (this._barPools[0].size() > 0) this.block1 = this._barPools[0].get();else this.block1 = instantiate(this.barPerfabs[0]);
          if (this._barPools[0].size() > 0) this.block2 = this._barPools[0].get();else this.block2 = instantiate(this.barPerfabs[0]);
          if (this._barPools[0].size() > 0) this.block3 = this._barPools[0].get();else this.block3 = instantiate(this.barPerfabs[0]);

          if (this.block0 != null) {
            this.block0.parent = this.node;
            var position = this.block0.position.clone();
            position.z = -28;
            this.block0.setPosition(position);
          }

          if (this.block1 != null) {
            this.block1.parent = this.node;

            var _position4 = this.block1.position.clone();

            _position4.z = 128;
            this.block1.setPosition(_position4);
          }

          if (this.block2 != null) {
            this.block2.parent = this.node;

            var _position5 = this.block2.position.clone();

            _position5.z = 284;
            this.block2.setPosition(_position5);
          }

          if (this.block3 != null) {
            this.block3.parent = this.node;

            var _position6 = this.block3.position.clone();

            _position6.z = 440;
            this.block3.setPosition(_position6);
          } //this.Reset();

        };

        _proto.update = function update(deltaTime) {
          console.log(this.barPerfabs);
          console.log(this._barPools);
          console.log(this.node);
          console.log(this.index);

          if (this.player.position.z > 2750) {
            director.getScene().globals.skybox.envmap = this.skyBoxes[1];
            director.getScene().globals.ambient.skyIllum = 20000;
          }

          if (this.player.position.z > 4150) {
            director.getScene().globals.skybox.envmap = this.skyBoxes[2];
            director.getScene().globals.ambient.skyIllum = 40000;
          }

          this.playerCurentZ += this.player.position.z - this.playerLastZ;
          this.playerLastZ = this.player.position.z;

          if (this.playerCurentZ > 156) {
            this.playerCurentZ -= 156;
            /* if (this.index == 0)
             {
                 let str = this.block1!.name.split("!");
                 let a1 = Number(str[0]);
                 let a2 = Number(str[1])
                 this.blockPool.put(this.block1!);
                 this.block1 = this.blockPool.get();
                 if (this.block1 != null)
                 {
                     this.block1.parent = this.node;
                     let position = this.block1.position.clone();
                     position.z = this.nextBlockZ;
                     this.block1.setPosition(position);
                 }
             }
             if (this.index == 1)
             {
                 this.blockPool.put(this.block2!);
                 this.block2 = this.blockPool.get();
                 if (this.block2 != null) {
                     this.block2.parent = this.node;
                     let position = this.block2.position.clone();
                     position.z = this.nextBlockZ;
                     this.block2.setPosition(position);
                 }
             }*/

            if (this.player.position.z <= 4744 && this.player.position.z >= 285) {
              if (this.index == 0) {
                var a1 = Number(this.block1.name);

                this._barPools[a1].put(this.block1);

                this.block1 = this._barPools[this.playerControl.phase].get();

                if (this.block1 != null) {
                  this.block1.parent = this.node;
                  var position = this.block1.position.clone();
                  position.z = this.nextBlockZ;
                  this.block1.setPosition(position);
                }
              }

              console.log(this.index);

              if (this.index == 1) {
                var _a = Number(this.block2.name);

                this._barPools[_a].put(this.block2);

                this.block2 = this._barPools[this.playerControl.phase].get();

                if (this.block2 != null) {
                  this.block2.parent = this.node;

                  var _position7 = this.block2.position.clone();

                  _position7.z = this.nextBlockZ;
                  this.block2.setPosition(_position7);
                }
              }

              if (this.index == 2) {
                var _a2 = Number(this.block3.name);

                this._barPools[_a2].put(this.block3);

                this.block3 = this._barPools[this.playerControl.phase].get();

                if (this.block3 != null) {
                  this.block3.parent = this.node;

                  var _position8 = this.block3.position.clone();

                  _position8.z = this.nextBlockZ;
                  this.block3.setPosition(_position8);
                }
              }

              this.index = (this.index + 1) % 3;
              this.nextBlockZ += 156;
            } else if (this.player.position.z > 4744) {
              /*let a1 = Number(this.block4!.name);
              this._barPools[a1].put(this.block4!);
              this.block4 = this._barPools[3].get();*/
              if (this.block4 != null) {
                this.block4.parent = this.node;

                var _position9 = this.block4.position.clone();

                _position9.z = this.nextBlockZ;
                this.block4.setPosition(_position9);
              } // this.nextBlockZ += 156;

            }
          }
        };

        return BuildBlockPool;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skyBoxes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerControl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "perfabs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "barPerfabs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec6], {
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
//# sourceMappingURL=BlockPoolControl.js.map