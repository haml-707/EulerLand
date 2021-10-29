System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, _dec, _class, _crd, ccclass, property, StartSceneOption;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e301TTObxGq6ktfY8Wvo4n", "StartSceneOption", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("StartSceneOption", StartSceneOption = (_dec = ccclass('StartSceneOption'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StartSceneOption, _Component);

        function StartSceneOption() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = StartSceneOption.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.sceneChangeFirst = function sceneChangeFirst() {
          director.loadScene("parkour");
        };

        _proto.sceneChangeSecond = function sceneChangeSecond() {
          director.loadScene("puzzle");
        };

        return StartSceneOption;
      }(Component)) || _class));
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
//# sourceMappingURL=StartSceneOption.js.map