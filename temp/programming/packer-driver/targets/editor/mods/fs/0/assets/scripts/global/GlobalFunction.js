System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, loader, _dec, _class, _temp, _crd, ccclass, property, GlobalFunction;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("GlobalFunction", GlobalFunction = (_dec = ccclass('GlobalFunction'), _dec(_class = (_temp = class GlobalFunction extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "questionBank", void 0);
        }

        start() {
          this.questionJsonLoad();
        }

        resumeGame() {
          director.resume();
        }

        sceneChangeFirst() {
          director.loadScene("parkour");
        }

        sceneChangeStart() {
          // director.resume();
          director.loadScene("parkour"); // director.loadScene("startUI");
        }

        sceneChangeSecond() {
          director.loadScene("puzzle");
        } // update (deltaTime: number) {
        //     // [4]
        // }


        questionJsonLoad() {
          loader.loadRes('Json/Question.json', (err, jsonAsset) => {
            if (err) {
              console.log(err);
              return;
            }

            this.questionBank = jsonAsset.json.question;
            console.log(this.questionBank);
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GlobalFunction.js.map