phina.define("SkinnedMesh", {
  superClass: "Mesh",

  _motionCache: null,
  radius: 1.8,

  init: function(skinnedAsset) {
    if (typeof(skinnedAsset) == "string") {
      skinnedAsset = AssetManager.get("skinned", skinnedAsset);
    }
    this.superInit(skinnedAsset);

    this.$t.castShadow = true && SHADOW;

    this._motionCache = {};
  },

  getMotion: function(indexOrName) {
    if (this._motionCache[indexOrName] == null) {
      let t = this.$t;
      let clip = typeof(indexOrName) == "number" ? t.geometry.animations[indexOrName] : THREE.AnimationClip.findByName(t, indexOrName);
      this._motionCache[indexOrName] = Motion(clip);
    }
    return this._motionCache[indexOrName];
  },

  playDefaultMotion: function(name) {
    let motion;
    if (name) {
      motion = this.getMotion(name).setLoop(true);
    } else {
      motion = this.getMotion(0).setLoop(true);
    }
    this.motionController.switchMotion(motion);
  },

  _accessor: {
    motionController: {
      get: function() {
        if (this._motionController == null) {
          this._motionController = MotionController().attachTo(this);
        }
        return this._motionController;
      },
    },
  },

});

phina.define("SkinnedAssetLoader", {
  superClass: "Asset",

  init: function() {
    this.superInit();
  },

  _load: function(resolve) {
    let mesh = new THREE.BlendCharacter();
    mesh.load(this.src, () => {
      resolve(mesh);
    });
  },
});
AssetLoader.register("skinned", (key, path) => SkinnedAssetLoader().load(path));

THREE.BlendCharacter.prototype.clone = function() {
  let c = new THREE.BlendCharacter();

  c.skinnedMesh = this.skinnedMesh;

  THREE.SkinnedMesh.call(c, c.skinnedMesh.geometry, c.skinnedMesh.material);

  c.material.skinning = true;

  c.mixer = new THREE.AnimationMixer(c);
  for (let i = 0; i < c.geometry.animations.length; ++i) {
    c.mixer.clipAction(c.geometry.animations[i]);
  }

  return c;
};
