phina.namespace(function() {

  phina.define("Object3D", {
    superClass: "Element",

    $t: null,

    init: function() {
      this.superInit();
    },

    _accessor: {
      position: {
        get: function() {
          return this.$t.position;
        },
      },
      scale: {
        get: function() {
          return this.$t.scale;
        },
      },
      rotation: {
        get: function() {
          return this.$t.rotation;
        },
      },
      quaternion: {
        get: function() {
          return this.$t.quaternion;
        },
      },
      matrix: {
        get: function() {
          return this.$t.matrix;
        },
      },
      x: {
        get: function() {
          return this.$t.position.x;
        },
        set: function(v) {
          this.$t.position.x = v;
        },
      },
      y: {
        get: function() {
          return this.$t.position.y;
        },
        set: function(v) {
          this.$t.position.y = v;
        },
      },
      z: {
        get: function() {
          return this.$t.position.z;
        },
        set: function(v) {
          this.$t.position.z = v;
        },
      },
      scaleX: {
        get: function() {
          return this.$t.scale.x;
        },
        set: function(v) {
          this.$t.scale.x = v;
        },
      },
      scaleY: {
        get: function() {
          return this.$t.scale.y;
        },
        set: function(v) {
          this.$t.scale.y = v;
        },
      },
      scaleZ: {
        get: function() {
          return this.$t.scale.z;
        },
        set: function(v) {
          this.$t.scale.z = v;
        },
      },
      rotationX: {
        get: function() {
          return this.$t.rotation.x;
        },
        set: function(v) {
          this.$t.rotation.x = v;
        },
      },
      rotationY: {
        get: function() {
          return this.$t.rotation.y;
        },
        set: function(v) {
          this.$t.rotation.y = v;
        },
      },
      rotationZ: {
        get: function() {
          return this.$t.rotation.z;
        },
        set: function(v) {
          this.$t.rotation.z = v;
        },
      },
      visible: {
        get: function() {
          return this.$t.visible;
        },
        set: function(v) {
          this.$t.visible = v;
        },
      },
    },

  });

});
