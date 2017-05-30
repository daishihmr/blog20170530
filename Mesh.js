phina.define("Mesh", {
  superClass: "Object3D",

  colliders: null,

  init: function(meshAsset) {
  	this.superInit();

    if (typeof(meshAsset) == "string") {
      meshAsset = AssetManager.get("mesh", meshAsset);
    }
    this.$t = meshAsset.clone();

    this.colliders = [];
    this.$t.traverse(obj => {
      obj.castShadow = false && SHADOW;
      if (obj.name.startsWith("Collider")) {
        obj.element = this;
        obj.visible = false;
        this.colliders.push(obj);
      }
    });
  },

});

phina.define("MeshAssetLoader", {
  superClass: "Asset",

  init: function() {
    this.superInit();
  },

  _load: function(resolve) {
    let loader = new THREE.ObjectLoader();
    loader.load(this.src, loadedObject => {
      resolve(loadedObject);
    });
  },
});
AssetLoader.register("mesh", (key, path) => MeshAssetLoader().load(path));
