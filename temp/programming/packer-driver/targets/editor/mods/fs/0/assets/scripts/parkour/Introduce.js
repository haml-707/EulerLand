System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, math, _dec, _class, _crd, ccclass, property, Introduce;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee6caxkv7FAP56zE4yBW2sJ", "Introduce", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Introduce", Introduce = (_dec = ccclass('Introduce'), _dec(_class = class Introduce extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        showIntroduce() {
          tween(this.node).by(1, {
            position: new math.Vec3(-400, 0)
          }).by(5, {
            position: new math.Vec3(0, 0)
          }).by(1, {
            position: new math.Vec3(400, 0)
          }).start();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));
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
//# sourceMappingURL=Introduce.js.map