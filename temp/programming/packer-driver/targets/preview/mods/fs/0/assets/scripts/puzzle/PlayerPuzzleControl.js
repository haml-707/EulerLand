System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, macro, systemEvent, SystemEventType, Enum, Animation, _dec, _class, _temp, _crd, ccclass, property, PlayerPuzzleControl;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      macro = _cc.macro;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      Enum = _cc.Enum;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8d3e4nEmxDk6xrXYkskq6L", "PlayerPuzzleControl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayerPuzzleControl", PlayerPuzzleControl = (_dec = ccclass('PlayerPuzzleControl'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerPuzzleControl, _Component);

        function PlayerPuzzleControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "animation", void 0);

          _defineProperty(_assertThisInitialized(_this), "directionType", Enum({
            ALeft: 0,
            DRight: 1,
            SDown: 2,
            WUP: 3,
            None: 4,
            Used: 5
          }));

          _defineProperty(_assertThisInitialized(_this), "direction", _this.directionType.None);

          return _this;
        }

        var _proto = PlayerPuzzleControl.prototype;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.onLoad = function onLoad() {
          systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDownEvent, this);
          systemEvent.on(SystemEventType.KEY_UP, this.onKeyUpEvent, this);
          this.animation = this.getComponent(Animation);
        };

        _proto.onDestroy = function onDestroy() {
          systemEvent.off(SystemEventType.KEY_DOWN, this.onKeyDownEvent, this);
          systemEvent.off(SystemEventType.KEY_UP, this.onKeyUpEvent, this);
        };

        _proto.onKeyDownEvent = function onKeyDownEvent(event) {
          switch (event.keyCode) {
            case macro.KEY.a:
              this.direction = this.directionType.ALeft;
          }
        };

        _proto.onKeyUpEvent = function onKeyUpEvent(event) {
          switch (event.keyCode) {
            case macro.KEY.a:
              this.direction = this.directionType.None;
          }
        };

        _proto.update = function update(deltaTime) {
          if (this.direction != this.directionType.None) {
            this.animation.play("move");
            this.direction = this.directionType.Used;
          } else {
            this.animation.play("idle");
          }
        };

        return PlayerPuzzleControl;
      }(Component), _temp)) || _class));
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
//# sourceMappingURL=PlayerPuzzleControl.js.map