System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _class2, _temp, _crd, ccclass, property, MultiResolutionCompat;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12e26hc5LJIf5TDzKDd4N7n", "MultiResoultionCompat", undefined);

      ({
        ccclass,
        property
      } = cc._decorator);
      /**
       * 未完成
       */

      _export("default", MultiResolutionCompat = ccclass(_class = (_temp = _class2 = class MultiResolutionCompat extends cc.Component {
        onLoad() {
          cc.view.setDesignResolutionSize(MultiResolutionCompat.DEFAULT_RESOLUTION_WIDTH, MultiResolutionCompat.DEFAULT_RESOLUTION_HEIGHT, cc.ResolutionPolicy.SHOW_ALL);
        }
        /**
         * 计算当前游戏设计分辨率在ShowAll模式适配后，设计分辨率做出的缩放值
         */


        static getShowAllModeScale() {
          return Math.min(cc.view.getCanvasSize().width / this.DEFAULT_RESOLUTION_WIDTH, cc.view.getCanvasSize().height / this.DEFAULT_RESOLUTION_HEIGHT);
        }
        /**
         * 计算当前游戏设计分辨率在ShowAll模式适配后，设计分辨率下的界面在实际画布中的实际高度
         */


        static getShowAllModeRealHeight() {
          return this.DEFAULT_RESOLUTION_HEIGHT * this.getShowAllModeScale();
        }
        /**
         * 计算当前游戏设计分辨率在ShowAll模式适配后，设计分辨率下的界面在实际画布中的实际宽度
         */


        static getShowAllModeRealWidth() {
          return this.DEFAULT_RESOLUTION_WIDTH * this.getShowAllModeScale();
        }
        /**
         * 计算当前游戏设计分辨率在ShowAll模式适配后，上下边界的黑边之和在实际画布中的长度
         */


        static getShowAllModeVerticalBorderHeight() {
          return cc.view.getCanvasSize().height - this.getShowAllModeRealHeight();
        }
        /**
         * 计算当前游戏设计分辨率在ShowAll模式适配后，左右边界的黑边之和在实际画布中的长度
         */


        static getShowAllModeHorizontalBorderWidth() {
          return cc.view.getCanvasSize().width - this.getShowAllModeRealWidth();
        }
        /**
         * 计算当前游戏设计分辨率在ShowAll模式适配后，传入来的原始坐标在ShowAll模式下的「贴近屏幕底部」实际坐标值
         */


        static getShowAllModeNodePositionCloseToBottom(nodePosInDesign) {
          let srcScaleForShowAll = MultiResolutionCompat.getShowAllModeScale();
          let bottomBorderHeightInCanvas = MultiResolutionCompat.getShowAllModeVerticalBorderHeight() / 2;
          let srcNodePosYInCanvas = nodePosInDesign.y * srcScaleForShowAll;
          let finalNodePosYInCanvas = srcNodePosYInCanvas - bottomBorderHeightInCanvas;
          let nodePosYInDesign = finalNodePosYInCanvas / srcScaleForShowAll;
          return cc.v2(nodePosInDesign.x, nodePosYInDesign);
        }
        /**
         * 将节点在设计分辨率中的坐标转换为节点在实际画布中的坐标
         */


        static convertNodePosInDesignToNodePosInCanvas(nodePosInDesign) {
          return nodePosInDesign.sub(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()));
        }
        /**
         * 将节点在实际画布中的坐标转换为节点在设计分辨率中的坐标
         */


        static convertNodePosInCanvasToNodePosInDesign(nodePosInCanvas) {
          return nodePosInCanvas.div(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()));
        }
        /**
         * 将设计分辨率下的宽度转换为实际画布中的宽度
         *
         * @param widthInDesign 设计分辨率下的宽度
         */


        static convertWidthInDesignToWidthInCanvas(widthInDesign) {
          return widthInDesign * this.getShowAllModeScale();
        }
        /**
         * 将实际画布中的宽度转换为设计分辨率下的宽度
         *
         * @param widthInCanvas 画布中的宽度
         */


        static convertWidthInCanvasToWidthInDesign(widthInCanvas) {
          return widthInCanvas / this.getShowAllModeScale();
        }
        /**
         * 将设计分辨率下的高度转换为实际画布中的高度
         *
         * @param heightInDesign 设计分辨率下的高度
         */


        static convertHeightInDesignToHeightInCanvas(heightInDesign) {
          return heightInDesign * this.getShowAllModeScale();
        }
        /**
         * 将实际画布中的高度转换为设计分辨率下的宽度
         * @param heightIncanvas 画布中的高度
         */


        static convertHeightInCanvasToHeightInDesign(heightIncanvas) {
          return heightIncanvas / this.getShowAllModeScale();
        }

      }, _defineProperty(_class2, "DEFAULT_RESOLUTION_WIDTH", 720), _defineProperty(_class2, "DEFAULT_RESOLUTION_HEIGHT", 1280), _temp)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MultiResoultionCompat.js.map