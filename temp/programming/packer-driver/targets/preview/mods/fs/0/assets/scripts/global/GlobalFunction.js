System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, loader, _dec, _class, _temp, _crd, ccclass, property, GlobalFunction;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      loader = _cc.loader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fde80V9IAxM7raEjemSknPs", "GlobalFunction", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GlobalFunction", GlobalFunction = (_dec = ccclass('GlobalFunction'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalFunction, _Component);

        function GlobalFunction() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "questionBank", void 0);

          return _this;
        }

        var _proto = GlobalFunction.prototype;

        _proto.start = function start() {
          this.questionJsonLoad();
        };

        _proto.resumeGame = function resumeGame() {
          director.resume();
        };

        _proto.sceneChangeFirst = function sceneChangeFirst() {
          director.loadScene("parkour");
        };

        _proto.sceneChangeStart = function sceneChangeStart() {
          // director.resume();
          director.loadScene("parkour"); // director.loadScene("startUI");
        };

        _proto.sceneChangeSecond = function sceneChangeSecond() {
          director.loadScene("puzzle");
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.questionJsonLoad = function questionJsonLoad() {
          var _this2 = this;

          loader.loadRes('Json/Question.json', function (err, jsonAsset) {
            if (err) {
              console.log(err);
              return;
            }

            _this2.questionBank = jsonAsset.json.question;
            console.log(_this2.questionBank);
          });
        };

        return GlobalFunction;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GlobalFunction.js.map