System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, assert, assetManager, AudioClip, log, AudioManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("AudioManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      assert = _cc.assert;
      assetManager = _cc.assetManager;
      AudioClip = _cc.AudioClip;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cf163UYrJLxronOVHVtzL2", "AudioManager", undefined);

      _export("AudioManager", AudioManager = class AudioManager {
        // init AudioManager in GameRoot component.
        static init(audioSource) {
          log('Init AudioManager !');
          AudioManager._audioSource = audioSource;
        }

        static playMusic() {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.play();
        }

        static playSound(name) {
          const audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          const path = `audio/eulerFirst/${name}`;
          let cachedAudioClip = AudioManager._cachedAudioClipMap[path];

          if (cachedAudioClip) {
            audioSource.playOneShot(cachedAudioClip, 1);
          } else {
            var _assetManager$resourc;

            (_assetManager$resourc = assetManager.resources) === null || _assetManager$resourc === void 0 ? void 0 : _assetManager$resourc.load(path, AudioClip, (err, clip) => {
              if (err) {
                console.warn(err);
                return;
              }

              AudioManager._cachedAudioClipMap[path] = clip;
              audioSource.playOneShot(clip, 1);
            });
          }
        }

      });

      _defineProperty(AudioManager, "_audioSource", void 0);

      _defineProperty(AudioManager, "_cachedAudioClipMap", {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioManager.js.map