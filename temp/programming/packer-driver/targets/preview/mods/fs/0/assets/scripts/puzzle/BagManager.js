System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./EventManager", "./ItemStatus"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Animation, UITransform, EventManager, ItemStatus, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, BagManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      UITransform = _cc.UITransform;
    }, function (_EventManager) {
      EventManager = _EventManager.EventManager;
    }, function (_ItemStatus) {
      ItemStatus = _ItemStatus.ItemStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29f1dLe5ERC3ZIyFCkobOY/", "BagManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BagManager", BagManager = (_dec = ccclass('BagManager'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: _crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
          error: Error()
        }), EventManager) : EventManager
      }), _dec9 = property({
        type: Animation
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BagManager, _Component);

        function BagManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "btnLastClick", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "btnLNowClick", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "grid", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "select", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "synFailed", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "synItems", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "eventManager", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "anim", _descriptor8, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "usedItem", null);

          _defineProperty(_assertThisInitialized(_this), "isSyn", false);

          _defineProperty(_assertThisInitialized(_this), "isUse", false);

          _defineProperty(_assertThisInitialized(_this), "synCode", -1);

          _defineProperty(_assertThisInitialized(_this), "useCode", -1);

          _defineProperty(_assertThisInitialized(_this), "bagOn", false);

          return _this;
        }

        var _proto = BagManager.prototype;

        //public 
        _proto.Openbag = function Openbag() {
          this.bagOn = !this.bagOn;

          if (this.bagOn) {
            this.anim.play("bagOn");
          } else {
            this.anim.play("bagOff");
          }
        };

        _proto.GetItem = function GetItem(event) {
          var btn = event.target;
          var itemStatus = btn.getComponent(_crd && ItemStatus === void 0 ? (_reportPossibleCrUseOfItemStatus({
            error: Error()
          }), ItemStatus) : ItemStatus);

          if (!(itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.isInBag)) {
            btn.setParent(this.grid);
            itemStatus.isInBag = true;
          }
        };

        _proto.SelectItem = function SelectItem() {
          this.select.setParent(this.btnLNowClick);
          this.select.position = new Vec3(0, 0, 0);
          var x = 1 / this.select.parent.scale.x;
          var y = 1 / this.select.parent.scale.y;
          this.select.scale = new Vec3(x, y, 1);
          this.select.active = true;
        };

        _proto.SynItem = function SynItem(event, custom) {
          //�ϳ�+ʹ�û��
          this.btnLNowClick = event.target;
          var itemStatus = this.btnLNowClick.getComponent(_crd && ItemStatus === void 0 ? (_reportPossibleCrUseOfItemStatus({
            error: Error()
          }), ItemStatus) : ItemStatus);

          if (itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.isItem) {
            if (!(itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.isInBag) && !itemStatus.synGet) {
              var x = this.btnLNowClick.getComponent(UITransform).width / 376;
              var y = this.btnLNowClick.getComponent(UITransform).height / 360;

              if (x > 1 && y > 1) {
                if (x >= y) this.btnLNowClick.scale = new Vec3(1 / x, 1 / x, 1);else this.btnLNowClick.scale = new Vec3(1 / y, 1 / y, 1);
              } else if (x < 1) {
                if (x <= 1 / y) this.btnLNowClick.scale = new Vec3(x, x, 1);else this.btnLNowClick.scale = new Vec3(1 / y, 1 / y, 1);
              } else if (y < 1) {
                if (1 / x <= y) this.btnLNowClick.scale = new Vec3(1 / x, 1 / x, 1);else this.btnLNowClick.scale = new Vec3(y, y, 1);
              } else {
                if (x <= y) this.btnLNowClick.scale = new Vec3(x, x, 1);else this.btnLNowClick.scale = new Vec3(y, y, 1);
              }

              this.btnLNowClick.setParent(this.grid);
              itemStatus.isInBag = true;
            } else if (itemStatus.isItem) {
              if (!(itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.isLong)) {
                console.log(this.btnLNowClick.name + "//now");
                if (this.btnLastClick != null) console.log(this.btnLastClick.name + "//last");

                if (this.btnLNowClick != this.btnLastClick) {
                  if (itemStatus.canSyn) {
                    //��Ʒ�ܺϳ�
                    this.isUse = false;

                    if (!this.isSyn) {
                      //�Ǻϳ�״̬

                      /*this.select.setParent(this.btnLNowClick);
                      this.select.position = new Vec3(0, 0, 0);
                      this.select.active = true;*/
                      this.SelectItem();
                      this.isSyn = true;
                      this.synCode = itemStatus.synCode;
                    } else {
                      //�ϳ�״̬
                      this.SelectItem();

                      if (this.synCode == itemStatus.synCode) {
                        //�ϳɳɹ�
                        this.select.setParent(this.grid);
                        this.select.active = false;
                        this.btnLNowClick.destroy();
                        this.btnLastClick.destroy();
                        this.synItems[this.synCode].active = true;
                      } else {
                        //�ϳ�ʧ��
                        this.synFailed.active = true;
                        this.synCode = -1;
                      }

                      this.isSyn = false;
                      this.select.active = false;
                    }
                  } else if (itemStatus.canUse) {
                    //����
                    this.isSyn = false;
                    this.SelectItem();
                    this.isUse = true;
                    this.usedItem = this.btnLNowClick;
                    this.useCode = itemStatus.useCode;
                  } else {
                    //��Ʒ���ܺϳ�/ʹ��
                    this.SelectItem();
                    this.isSyn = false;
                  }

                  this.btnLastClick = event.target;
                } else {
                  this.select.active = !this.select.active;
                  if (itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.canSyn) this.isSyn = !this.isSyn;
                  if (itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.canUse) this.isUse = !this.isUse;
                  this.synCode = itemStatus.synCode;
                  this.useCode = itemStatus.useCode;
                }
              } else {
                itemStatus.time = 0.5;
                itemStatus.isLong = false;
              }
            }
          } else {
            //ʹ�û��
            if (this.isSyn) {
              if (this.synCode == itemStatus.synCode) {
                this.select.setParent(this.grid);
                this.select.active = false;
                this.btnLNowClick.destroy();
                this.btnLastClick.destroy();
                this.synItems[this.synCode].active = true;
                this.isSyn = false;
              } else {
                this.select.active = false;
                this.isSyn = false;
                this.synCode = -1;
              }
            }
          }

          console.log(this.synCode);
          console.log(this.isSyn);
        };

        _proto.UseFinished = function UseFinished() {
          this.isUse = false;
          this.select.setParent(this.grid);
          this.select.active = false;
          this.usedItem.destroy();
        };

        _proto.UseItem = function UseItem(event, custom) {
          var _this$usedItem$getCom;

          //����ʹ��
          var btn = event.target;
          var itemStatus = btn.getComponent(_crd && ItemStatus === void 0 ? (_reportPossibleCrUseOfItemStatus({
            error: Error()
          }), ItemStatus) : ItemStatus);

          if (this.isUse) {
            if (this.useCode == (itemStatus === null || itemStatus === void 0 ? void 0 : itemStatus.useCode)) {
              switch (this.useCode) {
                case 0:
                  if (this.usedItem.name == "00") {
                    this.eventManager.Event0(0, itemStatus);
                  } else {
                    this.eventManager.Event0(1, itemStatus);
                  }

                  this.UseFinished();
                  break;

                case 1:
                  this.eventManager.Event1(btn, this.usedItem.getComponent(_crd && ItemStatus === void 0 ? (_reportPossibleCrUseOfItemStatus({
                    error: Error()
                  }), ItemStatus) : ItemStatus));
                  this.select.active = false;
                  if (((_this$usedItem$getCom = this.usedItem.getComponent(_crd && ItemStatus === void 0 ? (_reportPossibleCrUseOfItemStatus({
                    error: Error()
                  }), ItemStatus) : ItemStatus)) === null || _this$usedItem$getCom === void 0 ? void 0 : _this$usedItem$getCom.synCode) == 1) this.UseFinished();
                  break;

                case 2:
                  this.eventManager.Event2();
                  this.UseFinished();
                  break;

                case 3:
                  this.eventManager.Event3();
                  this.UseFinished();
                  break;

                case 4:
                  this.eventManager.Event4();
                  this.UseFinished();
                  break;

                case 5:
                  this.eventManager.Event5();
                  this.UseFinished();
                  break;

                case 6:
                  this.eventManager.Event6();
                  this.UseFinished();
                  break;

                case 7:
                  this.eventManager.Event7();
                  this.UseFinished();
                  break;

                case 8:
                  this.eventManager.Event8();
                  this.UseFinished();
                  break;

                case 9:
                  this.eventManager.Event9();
                  this.UseFinished();
                  break;

                case 10:
                  if (this.eventManager.event9) {
                    this.eventManager.Event10();
                    this.UseFinished();
                  }

                  break;

                case 11:
                  this.eventManager.Event11();
                  this.UseFinished();
                  break;

                case 12:
                  this.eventManager.Event12();
                  this.UseFinished();
                  break;

                case 13:
                  this.eventManager.Event13();
                  this.UseFinished();
                  break;

                case 14:
                  this.eventManager.Event14();
                  this.UseFinished();
                  break;

                case 15:
                  this.eventManager.Event15();
                  this.UseFinished();
                  break;

                case 16:
                  this.eventManager.Event16();
                  this.UseFinished();
                  break;

                case 17:
                  this.eventManager.Event17();
                  this.UseFinished();
                  break;
              }

              this.isUse = false;
            } else {
              this.isUse = false;
              this.select.active = false;
              this.useCode = -1;
            }
          }
        };

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return BagManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnLastClick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnLNowClick", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "grid", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "synFailed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "synItems", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "eventManager", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec9], {
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
//# sourceMappingURL=BagManager.js.map