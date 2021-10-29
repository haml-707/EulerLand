System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, UITransform, view, _class, _crd, ccclass, property, ContentAdapter;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", ContentAdapter = ccclass(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ContentAdapter, _Component);

        function ContentAdapter() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ContentAdapter.prototype;

        _proto.onLoad = function onLoad() {
          var srcScaleForShowAll = Math.min(view.getCanvasSize().width / this.node.getComponent(UITransform).width, view.getCanvasSize().height / this.node.getComponent(UITransform).height);
          var realWidth = this.node.getComponent(UITransform).width * srcScaleForShowAll;
          var realHeight = this.node.getComponent(UITransform).height * srcScaleForShowAll;
          this.node.getComponent(UITransform).width = this.node.getComponent(UITransform).width * (view.getCanvasSize().width / realWidth);
          this.node.getComponent(UITransform).height = this.node.getComponent(UITransform).height * (view.getCanvasSize().height / realHeight);
        };

        _proto.start = function start() {
          var srcScaleForShowAll = Math.min(view.getCanvasSize().width / this.node.getComponent(UITransform).width, view.getCanvasSize().height / this.node.getComponent(UITransform).height);
          var realWidth = this.node.getComponent(UITransform).width * srcScaleForShowAll;
          var realHeight = this.node.getComponent(UITransform).height * srcScaleForShowAll;
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
        ;

        return ContentAdapter;
      }(Component)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ContentAdapter.js.map