System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, UITransform, view, _class, _crd, ccclass, property, ContentAdapter;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d59fv30mRE0K6n/z2sik7/", "ContentAdapter", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ContentAdapter = ccclass(_class = class ContentAdapter extends Component {
        onLoad() {
          let srcScaleForShowAll = Math.min(view.getCanvasSize().width / this.node.getComponent(UITransform).width, view.getCanvasSize().height / this.node.getComponent(UITransform).height);
          let realWidth = this.node.getComponent(UITransform).width * srcScaleForShowAll;
          let realHeight = this.node.getComponent(UITransform).height * srcScaleForShowAll;
          this.node.getComponent(UITransform).width = this.node.getComponent(UITransform).width * (view.getCanvasSize().width / realWidth);
          this.node.getComponent(UITransform).height = this.node.getComponent(UITransform).height * (view.getCanvasSize().height / realHeight);
        }

        start() {
          let srcScaleForShowAll = Math.min(view.getCanvasSize().width / this.node.getComponent(UITransform).width, view.getCanvasSize().height / this.node.getComponent(UITransform).height);
          let realWidth = this.node.getComponent(UITransform).width * srcScaleForShowAll;
          let realHeight = this.node.getComponent(UITransform).height * srcScaleForShowAll;
          this.node.getComponent(UITransform).width = this.node.getComponent(UITransform).width * (view.getCanvasSize().width / realWidth);
          this.node.getComponent(UITransform).height = this.node.getComponent(UITransform).height * (view.getCanvasSize().height / realHeight);
        } // private _updateAllChildNodeWidget(parentNode: cc.Node) {
        //     if (parentNode == null) {
        //         return;
        //     }
        //     let widget = parentNode.getComponent(cc.Widget);
        //     if (widget != null) {
        //         widget.updateAlignment();
        //     }
        //     if (parentNode.childrenCount == 0) {
        //         return;
        //     }
        //     parentNode.children.forEach((childNode: cc.Node) => {
        //         this._updateAllChildNodeWidget(childNode);
        //     });
        // }


      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ContentAdapter.js.map